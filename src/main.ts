#!/usr/bin/env node

import cosmiconfig from 'cosmiconfig';
import * as fs from 'fs';
import signale from 'signale';
import { promisify } from 'util';

import { ArgsType } from './cli/args';
import { IPRInfo } from './git';
import GithubRelease, {
  defaultLabels,
  IGithubReleaseOptions
} from './github-release';

import execPromise from './utils/exec-promise';
import createLog from './utils/logger';

const readFile = promisify(fs.readFile);

const calcGreaterVersion = (
  packageVersion: string,
  monorepoVersion: string,
  latestVersion: string
) => {
  const localVersion = monorepoVersion || packageVersion;

  return localVersion > latestVersion ? localVersion : latestVersion;
};

function isMonorepo() {
  return fs.existsSync('lerna.json');
}

async function getCurrentVersion(
  prefixRelease: (release: string) => string,
  lastRelease: string,
  veryVerbose: signale.Signale<signale.DefaultMethods>
) {
  let lastVersion;
  let packageVersion = '';
  let monorepoVersion = '';

  if (isMonorepo()) {
    monorepoVersion = prefixRelease(
      JSON.parse(await readFile('lerna.json', 'utf-8')).version
    );
  }

  if (fs.existsSync('package.json')) {
    packageVersion = prefixRelease(
      JSON.parse(await readFile('package.json', 'utf-8')).version
    );
  }

  if (lastRelease.match(/\d+\.\d+\.\d+/)) {
    veryVerbose.info('Using latest release as previous version');
    lastVersion = lastRelease;
  } else if (monorepoVersion) {
    veryVerbose.info('Using lerna.json as previous version');
    lastVersion = monorepoVersion;
  } else if (packageVersion) {
    veryVerbose.info('Using package.json as previous version');
    lastVersion = packageVersion;
  } else {
    veryVerbose.info('No previous release found, using 0.0.0 as the start.');
    lastVersion = prefixRelease('0.0.0');
  }

  // This helps in situations where the latest release on github is wrong for some reason
  // In this case we default to either the monorepo or package version
  lastVersion = calcGreaterVersion(
    packageVersion,
    monorepoVersion,
    lastRelease
  );

  return lastVersion;
}

async function getVersion(githubRelease: GithubRelease, args: ArgsType) {
  const lastRelease = await githubRelease.getLatestRelease();

  return githubRelease.getSemverBump(
    lastRelease,
    undefined,
    args.onlyPublishWithReleaseLabel
  );
}

async function makeChangelog(
  args: ArgsType,
  githubRelease: GithubRelease,
  log: signale.Signale<signale.DefaultMethods>,
  prefixRelease: (release: string) => string,
  veryVerbose: signale.Signale<signale.DefaultMethods>,
  verbose: signale.Signale<signale.DefaultMethods>
) {
  const lastRelease = args.from || (await githubRelease.getLatestRelease());
  const releaseNotes = await githubRelease.generateReleaseNotes(
    lastRelease,
    args.to || undefined
  );

  log.info('New Release Notes\n', releaseNotes);

  if (!args.dry_run) {
    const currentVersion = await getCurrentVersion(
      prefixRelease,
      lastRelease,
      veryVerbose
    );

    await githubRelease.addToChangelog(
      releaseNotes,
      currentVersion,
      args.no_version_prefix,
      args.message || undefined
    );
  } else {
    verbose.info('`changelog` dry run complete.');
  }
}

async function makeRelease(
  args: ArgsType,
  githubRelease: GithubRelease,
  log: signale.Signale<signale.DefaultMethods>,
  prefixRelease: (release: string) => string,
  veryVerbose: signale.Signale<signale.DefaultMethods>,
  verbose: signale.Signale<signale.DefaultMethods>
) {
  let lastRelease = await githubRelease.getLatestRelease();

  // Find base commit or latest release to generate the changelog to HEAD (new tag)
  veryVerbose.info(`Using ${lastRelease} as previous release.`);

  if (lastRelease.match(/\d+\.\d+\.\d+/)) {
    lastRelease = prefixRelease(lastRelease);
  }

  log.info('Last used release:', lastRelease);

  const releaseNotes = await githubRelease.generateReleaseNotes(lastRelease);

  log.info(`Using release notes:\n${releaseNotes}`);

  const version =
    args.use_version ||
    (await getCurrentVersion(prefixRelease, lastRelease, veryVerbose));

  if (!version) {
    log.error('Could not calculate next version from last tag.');
    return;
  }

  const prefixed = prefixRelease(version);
  log.info(`Publishing ${prefixed} to Github.`);

  if (!args.dry_run) {
    await githubRelease.publish(releaseNotes, prefixed);

    if (args.slack) {
      log.info('Posting release to slack');
      await githubRelease.postToSlack(releaseNotes, prefixed);
    }
  } else {
    verbose.info('Release dry run complete.');
  }
}

export async function run(args: ArgsType) {
  const logger = createLog(
    args.very_verbose ? 'veryVerbose' : args.verbose ? 'verbose' : undefined
  );
  const { log, verbose, veryVerbose } = logger;
  const explorer = cosmiconfig('auto');
  const result = await explorer.search();

  let rawConfig = {};

  const prefixRelease = (release: string) =>
    args.no_version_prefix || release.includes('v') ? release : `v${release}`;

  if (result && result.config) {
    rawConfig = result.config;
  }

  verbose.success('Loaded `auto-release` with config:', rawConfig);

  Object.entries(args).forEach(([key, val]) => {
    // tslint:disable-next-line
    if (val === null) {
      delete (args as any)[key];
    }
  });

  const config: IGithubReleaseOptions = {
    ...rawConfig,
    ...args,
    logger
  };

  let semVerLabels = defaultLabels;

  if (config.labels) {
    semVerLabels = {
      ...defaultLabels,
      ...config.labels
    };
  }

  verbose.success('Using SEMVER labels:', '\n', semVerLabels);

  const githubRelease = new GithubRelease(
    {
      owner: args.owner,
      repo: args.repo
    },
    config
  );

  switch (args.command) {
    case 'shipit': {
      const version = await getVersion(githubRelease, args);

      if (version === '') {
        await makeChangelog(
          args,
          githubRelease,
          log,
          prefixRelease,
          veryVerbose,
          verbose
        );

        if (isMonorepo) {
          await execPromise(
            `lerna publish --yes --force-publish=* ${version} -m '%v [skip ci]'`
          );
        } else {
          await execPromise(
            `npm version ${version} -m "Bump version to: %s [skip ci]"`
          );
          await execPromise('npm publish');
          await execPromise(
            'git push --follow-tags --set-upstream origin $branch'
          );
        }

        await makeRelease(
          args,
          githubRelease,
          log,
          prefixRelease,
          veryVerbose,
          verbose
        );

        return;
      }

      break;
    }
    // PR Interaction
    case 'label': {
      verbose.info("Using command: 'label'");
      const labels = await githubRelease.getLabels(args.pr!);

      console.log(labels.join('\n'));
      break;
    }
    case 'pr-check': {
      verbose.info(`Using command: 'pr-check' for '${args.url}'`);

      args.target_url = args.url;
      delete args.url;

      let msg;

      try {
        const res = await githubRelease.getPullRequest(args.pr!);
        args.sha = res.data.head.sha;

        const labels = await githubRelease.getLabels(args.pr!);
        const labelTexts = Object.values(semVerLabels);
        const releaseTag = labels.find(l => l === 'release');
        const noReleaseTag = labels.find(l => l === 'no-release');
        const semverTag = labels.find(
          l => labelTexts.includes(l) && l !== 'no-release' && l !== 'release'
        );

        if (semverTag === undefined && !noReleaseTag) {
          throw new Error('No semver label!');
        }

        log.success(`PR is using label: ${semverTag}`);

        let description;

        if (noReleaseTag) {
          description = 'PR will not create a release';
        } else if (releaseTag) {
          description = `PR will create release once merged - ${semverTag}`;
        } else {
          description = `CI - ${semverTag}`;
        }

        msg = {
          description,
          state: 'success'
        };
      } catch (error) {
        msg = {
          description: error.message,
          state: 'error'
        };
      }

      verbose.info('Posting comment to Github\n', msg);

      if (!args.dry_run) {
        await githubRelease.createStatus({
          ...args,
          ...msg
        } as IPRInfo);
        log.success('Posted status to Pull Request.');
      } else {
        verbose.info('`pr-check` dry run complete.');
      }

      verbose.success('Finished `pr-check` command');

      break;
    }
    case 'pr': {
      verbose.info("Using command: 'pr'");

      if (!args.sha && args.pr) {
        verbose.info('Getting commit SHA from PR.');
        const res = await githubRelease.getPullRequest(args.pr);
        args.sha = res.data.head.sha;
      } else if (!args.sha) {
        verbose.info('No PR found, getting commit SHA from HEAD.');
        args.sha = await githubRelease.getSha();
      }

      verbose.info('Found PR SHA:', args.sha);

      args.target_url = args.url;
      delete args.url;

      if (!args.dry_run) {
        await githubRelease.createStatus(args as IPRInfo);
      } else {
        verbose.info('`pr` dry run complete.');
      }

      verbose.success('Finished `pr` command');

      break;
    }
    case 'comment': {
      verbose.info("Using command: 'comment'");

      await githubRelease.createComment(
        args.message!,
        args.pr!,
        args.context || undefined
      );

      log.success(`Commented on PR #${args.pr}`);
      break;
    }
    // Release
    case 'version': {
      verbose.info("Using command: 'version'");

      const bump = await getVersion(githubRelease, args);

      console.log(bump);

      break;
    }
    case 'changelog': {
      verbose.info("Using command: 'changelog'");

      await makeChangelog(
        args,
        githubRelease,
        log,
        prefixRelease,
        veryVerbose,
        verbose
      );

      break;
    }
    case 'release': {
      verbose.info("Using command: 'release'");

      await makeRelease(
        args,
        githubRelease,
        log,
        prefixRelease,
        veryVerbose,
        verbose
      );

      break;
    }

    default:
      throw new Error(`idk what i'm doing.`);
  }
}

export default async function main(args: ArgsType) {
  try {
    await run(args);
  } catch (error) {
    console.log(error);
  }
}
