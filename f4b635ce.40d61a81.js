(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(192)),o={title:"DNS App Id Plugin",sidebar_label:"DNS App Id"},c={unversionedId:"plugin_dns_app_id",id:"plugin_dns_app_id",isDocsHomePage:!1,title:"DNS App Id Plugin",description:"The DNS App ID plugin identifies traffic passing through your 128T router by applying pattern matching to hostnames contained in DNS requests it processes. You can then configure 128T services for these hostnames, and associate application names to influence routing policy. You can read more about 128T and its application identification concept here.",source:"@site/docs/plugin_dns_app_id.md",slug:"/plugin_dns_app_id",permalink:"/docs/plugin_dns_app_id",version:"current",lastUpdatedAt:1602098842,sidebar_label:"DNS App Id",sidebar:"docs",previous:{title:"Introduction to Plugins",permalink:"/docs/plugin_intro"},next:{title:"DNS Cache Plugin",permalink:"/docs/plugin_dns_cache"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Built-In Patterns",id:"built-in-patterns",children:[]},{value:"Custom Patterns",id:"custom-patterns",children:[]},{value:"Associating with a Service",id:"associating-with-a-service",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Release Notes",id:"release-notes",children:[{value:"Release 1.1.0, 2.1.0",id:"release-110-210",children:[]},{value:"Release 1.0.2, 2.0.2",id:"release-102-202",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The DNS App ID plugin identifies traffic passing through your 128T router by applying pattern matching to hostnames contained in DNS requests it processes. You can then configure 128T services for these hostnames, and associate application names to influence routing policy. You can read more about 128T and its application identification concept ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_appid"}),"here"),"."),Object(r.b)("p",null,"This plugin relies on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_cache"}),"DNS Cache")," plugin for hostname resolution."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The instructions for installing and managing this plugin can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"In addition to the configuration snippet from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_cache"}),"dns-cache")," plugin, the below configuration shows an example of dns-app-id configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"configure\n    authority\n        router lab-router\n            application-identification\n                mode module\n            exit\n            dns-app-id\n                enabled true\n                builtin-apps gmail\n                builtin-apps windows-update\n                custom-apps cnn\n                    name cnn\n                    patterns cnn.com\n                    patterns .*\\\\.cnn.com\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Element"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: true. Governs whether the DNS AppID behavior is enabled or not.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"builtin-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Multiple instance object. This can reference any built-in application patterns contained within the version of the plugin you're running.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"subelement"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Multiple instance object. Allows administrators to define custom patterns for matching applications.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the custom-app. This value will subsequently be configured within a ",Object(r.b)("inlineCode",{parentName:"td"},"service > application-name")," to give treatment to that application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > description"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A human-readable description of the custom application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > patterns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"regex"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A regular expression pattern for matching to DNS requests that the 128T processes.")))),Object(r.b)("h3",{id:"built-in-patterns"},"Built-In Patterns"),Object(r.b)("p",null,"The plugin contains built in application patterns for Gmail, Google Drive, and Windows Update. The patterns were generated from the following published documents:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Application"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Document"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gmail"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.google.com/a/answer/9497877?hl=en"}),"link"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Google Drive"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.google.com/a/answer/2589954?hl=en"}),"link"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Windows Update"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-server-update-services/deploy/2-configure-wsus#211-connection-from-the-wsus-server-to-the-internet"}),"link 1")," ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.microsoft.com/en-us/windows/deployment/update/windows-update-troubleshooting#device-cannot-access-update-files"}),"link 2"))))),Object(r.b)("p",null,"As you can see in the configuration snippet above, all you need to configure for the builtin-apps are the names of the apps you wish to include in our pattern matching. The values you can configure are ",Object(r.b)("inlineCode",{parentName:"p"},"gmail"),", ",Object(r.b)("inlineCode",{parentName:"p"},"google-drive"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"windows-update"),"."),Object(r.b)("h3",{id:"custom-patterns"},"Custom Patterns"),Object(r.b)("p",null,"Also shown in the configuration snippet is the custom-app ",Object(r.b)("inlineCode",{parentName:"p"},"cnn")," that includes a list of patterns to be applied. Each pattern must be a valid regex that will be applied to a FQDN to identify the application. The identification is dynamic, so you just need to update the configuration on the conductor to include new apps or patterns for your routers."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},".")," character bears special meaning within regular expressions, and matches ",Object(r.b)("em",{parentName:"p"},"any single character"),". Because hostnames contain literal ",Object(r.b)("inlineCode",{parentName:"p"},".")," characters, in order to explicitly reference a dot separator, you must prefix it with ",Object(r.b)("strong",{parentName:"p"},"two")," backslash characters. I.e., to have a pattern match the hostname ",Object(r.b)("inlineCode",{parentName:"p"},"www.128technology.com"),", you would type it into the PCLI as ",Object(r.b)("inlineCode",{parentName:"p"},"www\\\\.128technology\\\\.com"),". The PCLI will render the double backslash characters as a single backslash when you ",Object(r.b)("inlineCode",{parentName:"p"},"show")," the configuration."))),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("p",null,"This example shows our builtin ",Object(r.b)("inlineCode",{parentName:"p"},"gmail")," application's pattern matching configured as a custom-app. You should not use this example in production, but is intended to document how to build out complicated pattern matching for an application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"custom-apps gmail\n    name gmail\n    patterns .*\\\\.client-channel\\\\.google\\\\.com\n    patterns accounts\\\\.google\\\\.com\n    patterns apis\\\\.google\\\\.com\n    patterns clients.*\\\\.google\\\\.com\n    patterns contacts\\\\.google\\\\.com\n    patterns hangouts\\\\.google\\\\.com\n    patterns .*\\\\.googleusercontent\\\\.com\n    patterns mail\\\\.google\\\\.com\n    patterns www\\\\.google\\\\.com\n    patterns .*\\\\.gstatic\\\\.com\n    patterns ogs\\\\.google\\\\.com\n    patterns play\\\\.google\\\\.com\nexit\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you configure invalid regex patterns, you will see the log message ",Object(r.b)("inlineCode",{parentName:"p"},"invalid pattern for {name}, will never match!"),". This means the pattern you configured is not a valid regex therefore the pattern matching will fail for the app until the configuration is fixed."))),Object(r.b)("h3",{id:"associating-with-a-service"},"Associating with a Service"),Object(r.b)("p",null,"Because the DNS AppID uses the same mechanism as a standard 128T ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_appid#appid-using-modules"}),"AppID module"),", you'll reference the application using the ",Object(r.b)("inlineCode",{parentName:"p"},"application-name")," field within a ",Object(r.b)("inlineCode",{parentName:"p"},"service")," configuration. In the ",Object(r.b)("inlineCode",{parentName:"p"},"application-name")," field, use the ",Object(r.b)("inlineCode",{parentName:"p"},"custom-apps > name")," field as your key as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.fiedler# show config running authority service cnn\n\nconfig\n\n    authority\n\n        service  CNN-service\n            name                  CNN-service\n\n            description           "CNN and associated hostnames"\n            scope                 private\n            application-name      cnn\n\n            access-policy         trusted\n                source      trusted\n                permission  allow\n            exit\n            service-policy        data-best-effort\n            share-service-routes  false\n        exit\n    exit\nexit\n')),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("p",null,"Verify the services of the 128T-dns-app-id plugin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"systemctl status 128T-dns-app-id"))),Object(r.b)("p",null,"Watch the journal for logging:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"journalctl -u 128T-dns-app-id -f"))),Object(r.b)("p",null,"You can modify the systemd service unit manually to update the log-level of the application from INFO to DEBUG. The systemd service unit is located at ",Object(r.b)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/128T-dns-app-id.service"),"."),Object(r.b)("p",null,"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"show device-interface dns-cache")," to see all available hostnames and IP addresses found by this plugin."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"========================================\n tnode:dns-cache\n========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         76:23:37:ed:5c:ae\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n Duplex:              full\n\n in-octets:                     3618779\n in-unicast-pkts:                 57795\n in-errors:                           0\n out-octets:                    2641623\n out-unicast-pkts:                57722\n out-errors:                          0\n\n records:\n   gmail:\n     172.217.165.141/32\n")),Object(r.b)("p",null,"Similarly you can use ",Object(r.b)("inlineCode",{parentName:"p"},"show application names"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@dc.router# show application names\nSat 2020-03-28 03:28:43 UTC\n\n================== =============== ================ ===================== =====================\n Application Name   Session Count   Ip Tuple Count   Date Discovered       Last Updated\n================== =============== ================ ===================== =====================\n gmail                          0               15   2020-06-20 03:28:40   2020-06-20 03:28:40\n google-drive                   0                9   2020-06-20 03:28:40   2020-06-20 03:28:40\n windows-update                 0                1   2020-06-20 03:28:40   2020-06-20 03:28:40\n")),Object(r.b)("h2",{id:"release-notes"},"Release Notes"),Object(r.b)("h3",{id:"release-110-210"},"Release 1.1.0, 2.1.0"),Object(r.b)("h4",{id:"issues-fixed"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"PLUGIN-809")," DNS app-id plugin installation fails due to dependency conflict"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Resolution"))," The 128T-dns-app-id-router RPM has been updated to accept all versions of 128T-dns-cache-router RPM."))),Object(r.b)("h3",{id:"release-102-202"},"Release 1.0.2, 2.0.2"),Object(r.b)("h4",{id:"issues-fixed-1"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-402")," Ensure 128T monitors new file changes and applications restarts with 128T.")))}p.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);