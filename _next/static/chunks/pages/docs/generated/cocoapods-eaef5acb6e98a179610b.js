_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=r.default.useState(!1),t=(0,o.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var o=n(a("nxTg")),r=n(a("mXGw")),d=n(a("YO29"))},"2dEL":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/cocoapods",function(){return a("UrRA")}])},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("RiSW")),r=n(a("mXGw")),d=n(a("pWCa")),c=a("I08b"),l=a("GDok"),s=a("nZpd"),i=a("AFBu"),u=a("0oBi"),m=function(e){var t=e.children,a=(0,o.default)(e,["children"]),n=r.default.useState(!1);r.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var m=(0,u.useDarkMode)();return r.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},r.default.createElement(d.default,null,r.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,i.formatPath)(m?"favicon-dark.png":"favicon.png")})),r.default.createElement(c.SkipNavLink,null),r.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},r.default.createElement(l.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=m},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return o.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(o.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var o=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var o=n(a("OvAC")),r=n(a("RiSW")),d=n(a("nxTg")),c=n(a("mXGw")),l=n(a("5dyF")),s=n(a("pWCa")),i=n(a("O2/E")),u=n(a("PDtE")),m=a("/FXl"),p=a("dAGg"),f=a("nZpd"),b=a("AFBu");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=g;var O=function(e){var t=e.href,a=e.children,n=c.default.useContext(g),o=(0,m.useMDXComponents)().SidebarLink,r=i.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=r).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),c.default.createElement(l.default,{passHref:!0,href:(0,b.postFixHTML)(d)},c.default.createElement(o,{isActive:n.pathname.replace("/index","")===(0,b.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,o=t.folder,l=c.default.useContext(f.MobileMenuContext),h=(0,d.default)(l,1)[0],j="/".concat(o),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?i.default.relative("/auto",a.pathname):i.default.relative("/",a.pathname),o=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return o||(o=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:o.title||"auto",pathname:(0,b.formatPath)(o.__resourcePath)}}(n),k=(0,m.useMDXComponents)(),E=k.SidebarItemWrapper,y=(k.SidebarLink,k.SidebarTitle),w=k.SidebarDivider,P=k.SidebarList,_=k.Sidebar,C=(0,r.default)(k,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return c.default.createElement(g.Provider,{value:x(x({},v),{},{sidebarFileLocation:N?j:""})},c.default.createElement(m.MDXProvider,{components:x(x({},C),{},{li:E,ul:P,a:O,p:y,hr:w})},c.default.createElement(s.default,null,c.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),c.default.createElement(_,{className:(0,u.default)(!h&&"hidden","lg:block")},N?c.default.createElement(N,null):c.default.createElement(P,null,n.map((function(e){return c.default.createElement(E,{key:e.__resourcePath},c.default.createElement(O,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var o=n(a("nxTg")),r=n(a("8VmE")),d=n(a("RiSW")),c=n(a("mXGw")),l=n(a("5dyF")),s=a("V5Fo"),i=a("/FXl"),u=n(a("PDtE")),m=a("nZpd"),p=a("AFBu"),f=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return c.default.createElement("svg",(0,r.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,i.useMDXComponents)().SearchInput;return c.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},c.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=c.default.useContext(m.MobileMenuContext),r=(0,o.default)(n,2),d=r[0],u=r[1],h=(0,i.useMDXComponents)(),x=h.Logo,g=h.NavBarWrapper,O=h.NavBar,j=h.NavBarItem,N=h.MobileMenuButton;return c.default.createElement(c.default.Fragment,null,c.default.createElement(g,null,c.default.createElement(O,null,a?c.default.createElement(l.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},c.default.createElement(x,null)):c.default.createElement(x,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},c.default.createElement(b,null),c.default.createElement(N,{open:d,setOpen:u,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return c.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,s.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(f,null)))))),d&&c.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return c.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(j,null,(0,s.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},UrRA:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),o=a("dV/x"),r=a("mXGw"),d=a.n(r),c=a("/FXl"),l=a("pu0P"),s=a.n(l),i=(d.a.createElement,{title:"CocoaPods Plugin",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/cocoapods.mdx",__scans:{}}),u={frontMatter:i},m=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.mdx)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Use ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," to version your ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"CocoaPod"),", and push to your specs repository!"),Object(c.mdx)("h2",{id:"installation"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(c.mdx)("p",null,"This plugin is not included with the ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(c.mdx)("pre",{className:"language-bash"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/cocoapods\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/cocoapods\n")),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},'WARNING: You can only use one "package manager" at a time!\nMixing them will lead to undesired results.')),Object(c.mdx)("h2",{id:"usage"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"cocoapods"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Required, the relative path to your podspec file"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"podspecPath"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"./Test.podspec"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, the specs repo to push to"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"specsRepo"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"https://github.com/intuit/TestSpecs.git"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, flags to pass to the `pod repo push` command"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"flags"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"--sources=https://github.com/SpecRepo.git"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Optional, specify a different executable for `pod`"),"\n        ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"podCommand"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"bundle exec pod"'),"\n      ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("h2",{id:"requirements"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#requirements"}),"Requirements")),Object(c.mdx)("h3",{id:"general"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#general"}),"General")),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"The machine running this plugin must have the ",Object(c.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://cocoapods.org/"}),"CocoaPods")," ",Object(c.mdx)("inlineCode",{parentName:"li"},"pod")," CLI installed already, or ",Object(c.mdx)("inlineCode",{parentName:"li"},"podCommand")," specified in your plugin configuration."),Object(c.mdx)("li",{parentName:"ul"},"Your ",Object(c.mdx)("inlineCode",{parentName:"li"},"podspec")," file must pass ",Object(c.mdx)("inlineCode",{parentName:"li"},"pod lib lint")," in order for publishing to a Specs repository to work.",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},"All warnings and errors must be addressed before attempting to push to a Specs repository."))),Object(c.mdx)("li",{parentName:"ul"},"Using the logging flags with Auto (",Object(c.mdx)("inlineCode",{parentName:"li"},"auto -v"),", ",Object(c.mdx)("inlineCode",{parentName:"li"},"auto -vv"),", ",Object(c.mdx)("inlineCode",{parentName:"li"},"auto -q"),") will also add the verbose or silent flags to the CocoaPod commands.")),Object(c.mdx)("h3",{id:"pushing-to-the-cocoapods-trunk"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#pushing-to-the-cocoapods-trunk"}),"Pushing to the CocoaPods Trunk")),Object(c.mdx)("p",null,"If a ",Object(c.mdx)("inlineCode",{parentName:"p"},"specsRepo")," is not provided in the plugin options, this plugin will push to the CocoaPods trunk repository. This requires that the machine running this has followed the steps for pushing to trunk, the guide for that can be found ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://guides.cocoapods.org/making/getting-setup-with-trunk.html#getting-started"}),"here"),"."),Object(c.mdx)("h3",{id:"pushing-to-a-private-specs-repo"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#pushing-to-a-private-specs-repo"}),"Pushing to a private specs repo")),Object(c.mdx)("p",null,"If ",Object(c.mdx)("inlineCode",{parentName:"p"},"specsRepo")," is provided in the configuration, this plugin will add that repo under a temporary name, push to it, and remove the repo from the CocoaPods installation on the machine. The machine that is running the plugin must have the appropriate git credentials to push to that repository."),Object(c.mdx)("h4",{id:"note"},Object(c.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#note"}),"Note")),Object(c.mdx)("p",null,"When pushing to a private Specs repo, this plugin will temporarily create a repository with the name ",Object(c.mdx)("inlineCode",{parentName:"p"},"autoPublishRepo")," using ",Object(c.mdx)("inlineCode",{parentName:"p"},"pod repo add"),", and will remove it when the release has completed."))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var o=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=o},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("nxTg")),r=n(a("mXGw")),d=n(a("O2/E")),c=a("/FXl"),l=n(a("PDtE")),s=a("I08b"),i=a("C3pV"),u=n(a("6f/q")),m=n(a("x3GE")),p=/([^`]*)`([^`]*)`(.*)/m;var f=function(e){var t=e.children,a=e.frontMatter,n=r.default.useState(!1),f=(0,o.default)(n,2),b=f[0],h=f[1],x=(0,c.useMDXComponents)(),g=a.__resourcePath.split("/")[0],O=(0,m.default)(),j=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return O.find((function(t){return t.__resourcePath===e}))}));return r.default.createElement(u.default,{menuState:[b,h]},r.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},r.default.createElement(i.Sidebar,{links:j,folder:g}),r.default.createElement(s.SkipNavContent,null),r.default.createElement("main",{className:(0,l.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",b&&"hidden")},a.title&&r.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var d=n.match(p),c=(0,o.default)(d,4),l=c[1],s=c[2],i=c[3];a.push(l),a.push(r.default.createElement(e.inlineCode,null,s)),n=i}return a.push(n),r.default.createElement("div",null,a)}}(x,a.title)),t)))};t.default=f},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[];try{var o=a("jmz1");n=o.keys().map(o)}catch(d){}var r=function(){try{return n}catch(d){return[]}};t.default=r}},[["2dEL",0,1,2,3,4]]]);