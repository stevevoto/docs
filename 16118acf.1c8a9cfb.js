(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{194:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(194)),i={title:"Upgrading the 128T Networking Platform",sidebar_label:"Upgrading"},c={unversionedId:"intro_upgrading",id:"intro_upgrading",isDocsHomePage:!1,title:"Upgrading the 128T Networking Platform",description:"Your 128T router or conductor must have internet access to download the latest software packages; for deployments where the 128T router does not have internet access, you can use the 128T conductor as a repository (or proxy) to retrieve software images. As with any upgrade activity, it is always prudent to create a backup of your current software configuration before initiating any upgrade activity.",source:"@site/docs/intro_upgrading.md",slug:"/intro_upgrading",permalink:"/docs/intro_upgrading",version:"current",lastUpdatedAt:1600811411,sidebar_label:"Upgrading",sidebar:"docs",previous:{title:"Manually Installing the 128T",permalink:"/docs/intro_installation_installer"},next:{title:"Rolling Back Software",permalink:"/docs/intro_rollback"}},s=[{value:"Stopping the 128T Routing Software",id:"stopping-the-128t-routing-software",children:[]},{value:"Upgrading using the Conductor&#39;s PCLI",id:"upgrading-using-the-conductors-pcli",children:[]},{value:"Upgrading using the Conductor&#39;s GUI",id:"upgrading-using-the-conductors-gui",children:[]},{value:"Upgrading using the Interactive Installer",id:"upgrading-using-the-interactive-installer",children:[]},{value:"Routers with Restricted Internet Access",id:"routers-with-restricted-internet-access",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your 128T router or conductor must have internet access to download the latest software packages; for deployments where the 128T router does not have internet access, you can use the 128T conductor as a repository (or proxy) to retrieve software images. As with any upgrade activity, it is always prudent to create a backup of your current software configuration before initiating any upgrade activity."),Object(o.b)("p",null,"There are three standard ways of upgrading routers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using the conductor's PCLI to initiate the upgrade"),Object(o.b)("li",{parentName:"ul"},"Using the conductor's GUI to initiate the upgrade"),Object(o.b)("li",{parentName:"ul"},"Manually upgrading a router by invoking the ",Object(o.b)("inlineCode",{parentName:"li"},"install128t")," application from the Linux shell")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The router upgrade process using the PCLI and the GUI is done in two stages: first, the software is downloaded, then it is installed. Using the ",Object(o.b)("inlineCode",{parentName:"p"},"install128t")," application steps through both of these processes."))),Object(o.b)("h3",{id:"stopping-the-128t-routing-software"},"Stopping the 128T Routing Software"),Object(o.b)("p",null,"Before upgrading the 128T Routing Software, use the following procedure to stop the the software."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Launch a Linux shell window."),Object(o.b)("li",{parentName:"ol"},"Execute the command",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo systemctl stop 128T\n"))),Object(o.b)("li",{parentName:"ol"},"Verify that the software has stopped by executing the command",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo systemct1 status 128T\n")),Object(o.b)("strong",{parentName:"li"},"Result"),": The software is listed as ",Object(o.b)("em",{parentName:"li"},"inactive (dead)"),"."),Object(o.b)("li",{parentName:"ol"},"Close the Linux shell.")),Object(o.b)("h2",{id:"upgrading-using-the-conductors-pcli"},"Upgrading using the Conductor's PCLI"),Object(o.b)("p",null,"For routers managed by a 128T Conductor, upgrades can be initiated via the 128T conductor's PCLI. This upgrade process is completed in two stages: ",Object(o.b)("em",{parentName:"p"},"download")," followed by ",Object(o.b)("em",{parentName:"p"},"upgrade"),"."),Object(o.b)("p",null,"As an administrator-level user, log into the conductor's PCLI."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the command ",Object(o.b)("inlineCode",{parentName:"p"},"show assets")," to list the devices managed by this conductor, and the software revision each asset is currently running.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For a given asset, use the command ",Object(o.b)("inlineCode",{parentName:"p"},"show asset [asset ID]")," or ",Object(o.b)("inlineCode",{parentName:"p"},"show asset software router [router name]"),'  to view the available software upgrades for that asset. The list will be in the section labeled "Available for Download" at the end of the output.'),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If there are software releases absent from the list that you are confident should appear, use the command ",Object(o.b)("inlineCode",{parentName:"p"},"send command yum-cache-refresh router [router name]")," to refresh the software list.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Type ",Object(o.b)("inlineCode",{parentName:"p"},"send command download router [your router name] [software version]"),". You can monitor the progress by using the ",Object(o.b)("inlineCode",{parentName:"p"},"show asset")," and/or ",Object(o.b)("inlineCode",{parentName:"p"},"show asset [asset ID]")," command, which will indicate Automated Provisioner status (e.g., ",Object(o.b)("em",{parentName:"p"},"downloading"),").")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the download is complete, use the command ",Object(o.b)("inlineCode",{parentName:"p"},"send command upgrade router [your router name]")," to initiate the upgrade process."))),Object(o.b)("p",null,"The conductor's ",Object(o.b)("em",{parentName:"p"},"automated provisioner")," will upgrade both nodes in a high availability router in series to minimize/avoid downtime. Despite this, it is still recommended to perform upgrade activity during periods of low traffic or maintenance windows."),Object(o.b)("h2",{id:"upgrading-using-the-conductors-gui"},"Upgrading using the Conductor's GUI"),Object(o.b)("p",null,"Similar to the process for upgrading using the PCLI, the GUI upgrade process using the GUI is done in two stages: ",Object(o.b)("em",{parentName:"p"},"download")," and ",Object(o.b)("em",{parentName:"p"},"upgrade"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to the Router page in the Conductor's UI. Routers that have available upgrades will indicate as such using a blue upgrade badge in the router list."),Object(o.b)("li",{parentName:"ol"},"Click on the Upgrade 128T icon (the arrow within a circle) next to your router. Result: a list of upgrade and download options appears. This list is filterable if the list of available options grows large."),Object(o.b)("li",{parentName:"ol"},"Click on the target release in the Available Downloads section of the list. You will be asked to confirm the operation.",Object(o.b)("br",null),"Result: the 128T will begin downloading the software. Click on the router in the router list to monitor its progress."),Object(o.b)("li",{parentName:"ol"},"Once complete, click the Upgrade 128T icon again, and select the target software release from the Available Upgrades list. You will again be asked to confirm this operation.",Object(o.b)("br",null),"Result: the router will now begin the upgrade process.")),Object(o.b)("p",null,"The Automated Provisioner will upgrade both nodes in a high availability router in series to minimize/avoid downtime. Despite this, it is still recommended to perform upgrade activity during periods of low traffic or maintenance windows."),Object(o.b)("h2",{id:"upgrading-using-the-interactive-installer"},"Upgrading using the Interactive Installer"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch a Linux command prompt window on the node you wish to upgrade.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter the command to launch the installer."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo install128t\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Result"),": \xa0The 128T splash screen appears."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"install128t")," application will check to see if it has an update available, and will ask that you upgrade if it detects a newer version is available.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Press the ",Object(o.b)("strong",{parentName:"p"},"enter")," key to select ",Object(o.b)("strong",{parentName:"p"},"Begin")," and start the installation wizard.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When prompted, select ",Object(o.b)("strong",{parentName:"p"},"Upgrade"),".",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"p"},"Result"),": The application queries 128 Technology's software repository for new software.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the desired software version from the list of available options.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the upgrade is complete, press the ",Object(o.b)("strong",{parentName:"p"},"enter")," key to select ",Object(o.b)("strong",{parentName:"p"},"Yes")," to start your software."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your output may vary based upon the nature of the upgrade, occasion, various packages, and dependencies that 128T requires as part of the 128T Routing Software upgrade."))))),Object(o.b)("h2",{id:"routers-with-restricted-internet-access"},"Routers with Restricted Internet Access"),Object(o.b)("p",null,"The standard upgrade workflow is for individual instances of 128T software to download software upgrades directly from mirror servers hosted and managed by 128 Technology on the public internet. Occasionally, 128T routers are deployed in locations with restricted or no access to the internet. In this case, you can configure the routers to retrieve software from conductor."),Object(o.b)("p",null,"Within a given router's configuration, at ",Object(o.b)("inlineCode",{parentName:"p"},"router > system > software-update > repository"),", you can configure the ",Object(o.b)("inlineCode",{parentName:"p"},"source-type")," setting to one of three values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"conductor-only"),": the router will retrieve software versions only from (or through) the conductor"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"prefer-conductor"),": the router will retrieve software versions from the conductor, and fall back to using the internet"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"internet-only")," (default): the router will use 128 Technology's publicly hosted repositories for retrieving sofwtare images")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Because this is a router setting, your collection of routers can each use different preferences. E.g., a router in on the internet can use 128 Technology's repository, but another router managed by the same conductor sitting in an isolated environment can use the conductor."))),Object(o.b)("p",null,"For routers that have no access to the internet, at ",Object(o.b)("inlineCode",{parentName:"p"},"router > system > software-update > repository > offline-mode")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". This overrides the ",Object(o.b)("inlineCode",{parentName:"p"},"source-type")," leaf."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"import iso")," command can be used to import packages contained within a 128T ISO onto a local yum repository, thereby allowing that 128T to be upgraded without contacting to 128 Technology servers."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli_reference#import-iso"}),"import iso")," command allows user to specify the exact ",Object(o.b)("inlineCode",{parentName:"p"},"filepath")," to the ISO or specify ",Object(o.b)("inlineCode",{parentName:"p"},"hunt")," which will look everywhere on disk for a file that matches the pattern ",Object(o.b)("inlineCode",{parentName:"p"},"128T*.iso")," except for the following directories ",Object(o.b)("inlineCode",{parentName:"p"},"/boot"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/dev"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/proc"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"/sys")," ."),Object(o.b)("p",null,"This feature works on either Conductor or Routers. It can be combined with Conductor Hosted Repos feature where the ISO is imported on the Conductor and then Routers use the Conductor as the yum repository to download 128T packeges from."),Object(o.b)("p",null,"Once the local software repository has been updated to the software from the ISO, the upgrade can proceed using your preferred method."))}p.isMDXComponent=!0}}]);