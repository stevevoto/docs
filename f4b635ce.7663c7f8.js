(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(205)),c={title:"DNS App Id Plugin",sidebar_label:"DNS App Id"},l={unversionedId:"plugin_dns_app_id",id:"plugin_dns_app_id",isDocsHomePage:!1,title:"DNS App Id Plugin",description:"The DNS App ID plugin identifies traffic passing through your 128T router by applying pattern matching to hostnames contained in DNS requests it processes. You can then configure 128T services for these hostnames, and associate application names to influence routing policy. You can read more about 128T and its application identification concept here.",source:"@site/docs/plugin_dns_app_id.md",slug:"/plugin_dns_app_id",permalink:"/docs/plugin_dns_app_id",version:"current",lastUpdatedAt:1615853318,sidebar_label:"DNS App Id",sidebar:"docs",previous:{title:"Cloud High Availability Plugin",permalink:"/docs/plugin_cloud_ha"},next:{title:"DNS Cache Plugin",permalink:"/docs/plugin_dns_cache"}},o=[{value:"Configuration",id:"configuration",children:[{value:"Built-In Patterns",id:"built-in-patterns",children:[]},{value:"Custom Patterns",id:"custom-patterns",children:[]},{value:"Automatic Service Generation",id:"automatic-service-generation",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Appendix",id:"appendix",children:[]},{value:"Release Notes",id:"release-notes",children:[{value:"Release 3.0.0",id:"release-300",children:[]},{value:"Release 2.2.1",id:"release-221",children:[]},{value:"Release 1.2.0, 2.2.0",id:"release-120-220",children:[]},{value:"Release 1.1.0, 2.1.0",id:"release-110-210",children:[]},{value:"Release 1.0.2, 2.0.2",id:"release-102-202",children:[]}]}],p={rightToc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The DNS App ID plugin identifies traffic passing through your 128T router by applying pattern matching to hostnames contained in DNS requests it processes. You can then configure 128T services for these hostnames, and associate application names to influence routing policy. You can read more about 128T and its application identification concept ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_appid"}),"here"),"."),Object(r.b)("p",null,"This plugin relies on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_cache"}),"DNS Cache")," plugin for hostname resolution."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The instructions for installing and managing this plugin can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"In addition to the configuration snippet from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_cache"}),"dns-cache")," plugin, the below configuration shows an example of dns-app-id configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"configure\n    authority\n        router lab-router\n            application-identification\n                mode module\n            exit\n            dns-app-id\n                enabled true\n                include-all-builtin-apps false\n                builtin-apps gmail\n                builtin-apps windows-update\n                custom-apps cnn\n                    name cnn\n                    patterns cnn.com\n                    patterns .*\\\\.cnn.com\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Element"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: true. Governs whether the DNS AppID behavior is enabled or not.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"include-all-builtin-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: false. Enabling this feature automatically includes all builtin apps including new one's the plugin adds due to upgrades.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"builtin-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Multiple instance object. This can reference any built-in application patterns contained within the version of the plugin you're running.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"subelement"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Multiple instance object. Allows administrators to define custom patterns for matching applications.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the custom-app. This value will subsequently be configured within a ",Object(r.b)("inlineCode",{parentName:"td"},"service > application-name")," to give treatment to that application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > description"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A human-readable description of the custom application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > patterns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"regex"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A regular expression pattern for matching to DNS requests that the 128T processes.")))),Object(r.b)("h3",{id:"built-in-patterns"},"Built-In Patterns"),Object(r.b)("h5",{id:"version-history"},"Version History"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Modification"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.2.0, 2.2.0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"include-builtin-apps")," was introduced")))),Object(r.b)("p",null,"The plugin contains built in application patterns for Gmail, Google Drive, and Windows Update. The patterns were generated from the following published documents:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Application"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Document"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gmail"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.google.com/a/answer/9497877?hl=en"}),"link"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Google Drive"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://support.google.com/a/answer/2589954?hl=en"}),"link"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Windows Update"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-server-update-services/deploy/2-configure-wsus#211-connection-from-the-wsus-server-to-the-internet"}),"link 1")," ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.microsoft.com/en-us/windows/deployment/update/windows-update-troubleshooting#device-cannot-access-update-files"}),"link 2"))))),Object(r.b)("p",null,"By enabling the ",Object(r.b)("inlineCode",{parentName:"p"},"include-all-builtin-apps")," configuration, the plugin will automatically include all the available apps. This allows for new apps to be automatically included as new builtin apps are added over time. Alternatively, you can choose specific builtin apps by name, as shown in the snippet above. The values you can configure are ",Object(r.b)("inlineCode",{parentName:"p"},"gmail"),", ",Object(r.b)("inlineCode",{parentName:"p"},"google-drive"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"windows-update"),"."),Object(r.b)("h3",{id:"custom-patterns"},"Custom Patterns"),Object(r.b)("h5",{id:"version-history-1"},"Version History"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Modification"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.2.0, 2.2.0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Support for adding custom-apps at authority level was introduced")))),Object(r.b)("p",null,"The plugin also allows the user to create their own definitions of applications by configuring a set of patterns to be used for matching the application. Each pattern must be a valid regex that will be applied to a FQDN to identify the application. The ",Object(r.b)("inlineCode",{parentName:"p"},"authority > dns-app-id > custom-apps")," config can be used to define patterns that apply to all the routers with ",Object(r.b)("inlineCode",{parentName:"p"},"dns-app-id")," functionality enabled. Also shown in the configuration snippet is the custom-app ",Object(r.b)("inlineCode",{parentName:"p"},"cnn")," that includes a list of patterns to be applied at the router level. The identification is dynamic, so you just need to update the configuration on the conductor to include new apps or patterns for your routers. When ",Object(r.b)("inlineCode",{parentName:"p"},"custom-apps")," are configured at the authority and router level, the two lists are combined at runtime for that particular router. For example, if the user configured a custom-app called ",Object(r.b)("inlineCode",{parentName:"p"},"zoom")," on the authority and another app called ",Object(r.b)("inlineCode",{parentName:"p"},"cnn")," on the router, the router will contain both the applications."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},".")," character bears special meaning within regular expressions, and matches ",Object(r.b)("em",{parentName:"p"},"any single character"),". Because hostnames contain literal ",Object(r.b)("inlineCode",{parentName:"p"},".")," characters, in order to explicitly reference a dot separator, you must prefix it with ",Object(r.b)("strong",{parentName:"p"},"two")," backslash characters. I.e., to have a pattern match the hostname ",Object(r.b)("inlineCode",{parentName:"p"},"www.128technology.com"),", you would type it into the PCLI as ",Object(r.b)("inlineCode",{parentName:"p"},"www\\\\.128technology\\\\.com"),". The PCLI will render the double backslash characters as a single backslash when you ",Object(r.b)("inlineCode",{parentName:"p"},"show")," the configuration."))),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("p",null,"This example shows our builtin ",Object(r.b)("inlineCode",{parentName:"p"},"gmail")," application's pattern matching configured as a custom-app. You should not use this example in production, but is intended to document how to build out complicated pattern matching for an application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"custom-apps gmail\n    name gmail\n    patterns .*\\\\.client-channel\\\\.google\\\\.com\n    patterns accounts\\\\.google\\\\.com\n    patterns apis\\\\.google\\\\.com\n    patterns clients.*\\\\.google\\\\.com\n    patterns contacts\\\\.google\\\\.com\n    patterns hangouts\\\\.google\\\\.com\n    patterns .*\\\\.googleusercontent\\\\.com\n    patterns mail\\\\.google\\\\.com\n    patterns www\\\\.google\\\\.com\n    patterns .*\\\\.gstatic\\\\.com\n    patterns ogs\\\\.google\\\\.com\n    patterns play\\\\.google\\\\.com\nexit\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you configure invalid regex patterns, you will see the log message ",Object(r.b)("inlineCode",{parentName:"p"},"invalid pattern for {name}, will never match!"),". This means the pattern you configured is not a valid regex therefore the pattern matching will fail for the app until the configuration is fixed."))),Object(r.b)("h3",{id:"automatic-service-generation"},"Automatic Service Generation"),Object(r.b)("h5",{id:"version-history-2"},"Version History"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Modification"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.2.0, 2.2.0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This capability was introduced")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"authority > dns-app-id")," configuration allows the user to automatically generate services for both the builtin and custom applications."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-config"}),"config\n\n    authority\n\n        dns-app-id\n            generate-services  true\n            base-service       internet\n        exit\n    exit\nexit\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Element"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"generate-services"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: false. Governs whether to automatically generate services for applications.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"base-service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"service-reference"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The generated application service will inherit all the properties such as access-policy, service-policy, etc, from the base service.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"subelement"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Multiple instance object. Allows administrators to define custom patterns for matching applications.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the custom-app. This value will subsequently be configured within a ",Object(r.b)("inlineCode",{parentName:"td"},"service > application-name")," to give treatment to that application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > description"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A human-readable description of the custom application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-apps > patterns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"regex"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A regular expression pattern for matching to DNS requests that the 128T processes.")))),Object(r.b)("p",null,"Refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#appendix"}),"Appendix")," for an example of the config generation."),Object(r.b)("h4",{id:"manually-associating-with-a-service"},"Manually associating with a Service"),Object(r.b)("p",null,"When auto-generation is not an option, the user can configure the appropriate application services explicitly. Because the DNS AppID uses the same mechanism as a standard 128T ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_appid#appid-using-modules"}),"AppID module"),", you'll reference the application using the ",Object(r.b)("inlineCode",{parentName:"p"},"application-name")," field within a ",Object(r.b)("inlineCode",{parentName:"p"},"service")," configuration. In the ",Object(r.b)("inlineCode",{parentName:"p"},"application-name")," field, use the ",Object(r.b)("inlineCode",{parentName:"p"},"custom-apps > name")," field as your key as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.fiedler# show config running authority service cnn\n\nconfig\n\n    authority\n\n        service  CNN-service\n            name                  CNN-service\n\n            description           "CNN and associated hostnames"\n            scope                 private\n            application-name      cnn\n\n            access-policy         trusted\n                source      trusted\n                permission  allow\n            exit\n            service-policy        data-best-effort\n            share-service-routes  false\n        exit\n    exit\nexit\n')),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("p",null,"Verify the services of the 128T-dns-app-id plugin:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"systemctl status 128T-dns-app-id"))),Object(r.b)("p",null,"Watch the journal for logging:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"journalctl -u 128T-dns-app-id -f"))),Object(r.b)("p",null,"You can modify the systemd service unit manually to update the log-level of the application from INFO to DEBUG. The systemd service unit is located at ",Object(r.b)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/128T-dns-app-id.service"),"."),Object(r.b)("p",null,"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"show device-interface dns-cache")," to see all available hostnames and IP addresses found by this plugin."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"========================================\n tnode:dns-cache\n========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         76:23:37:ed:5c:ae\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n Duplex:              full\n\n in-octets:                     3618779\n in-unicast-pkts:                 57795\n in-errors:                           0\n out-octets:                    2641623\n out-unicast-pkts:                57722\n out-errors:                          0\n\n records:\n   gmail:\n     172.217.165.141/32\n")),Object(r.b)("p",null,"Similarly you can use ",Object(r.b)("inlineCode",{parentName:"p"},"show application names"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@dc.router# show application names\nSat 2020-03-28 03:28:43 UTC\n\n================== =============== ================ ===================== =====================\n Application Name   Session Count   Ip Tuple Count   Date Discovered       Last Updated\n================== =============== ================ ===================== =====================\n gmail                          0               15   2020-06-20 03:28:40   2020-06-20 03:28:40\n google-drive                   0                9   2020-06-20 03:28:40   2020-06-20 03:28:40\n windows-update                 0                1   2020-06-20 03:28:40   2020-06-20 03:28:40\n")),Object(r.b)("h2",{id:"appendix"},"Appendix"),Object(r.b)("p",null,"Consider the following example configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-config"}),"config\n\n    authority\n\n        dns-app-id\n            generate-services  true\n            base-service       internet\n        exit\n\n        router  router1\n            name        router1\n\n            dns-app-id\n                include-all-builtin-apps  true\n            exit\n        exit\n\n\n        service  internet\n            name              internet\n            application-name  icmp-probe\n\n            access-policy     _internal_\n                source  _internal_\n            exit\n\n            access-policy     dns-cache-plugin\n                source  dns-cache-plugin\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("p",null,"The above configuration will use the ",Object(r.b)("inlineCode",{parentName:"p"},"internet")," service as a basis for auto generating services for all built in applications such as ",Object(r.b)("inlineCode",{parentName:"p"},"google-drive"),", ",Object(r.b)("inlineCode",{parentName:"p"},"gmail"),", etc. Here's what the generated configuration will look like."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"config\n\n    authority\n\n        service  gmail_internet\n            name              gmail_internet\n\n            applies-to        router\n                type         router\n                router-name  router1\n            exit\n            application-name  icmp-probe\n            application-name  gmail\n\n            access-policy     _internal_\n                source  _internal_\n            exit\n\n            access-policy     dns-cache-plugin\n                source  dns-cache-plugin\n            exit\n        exit\n\n        service  google-drive_internet\n            name              google-drive_internet\n\n            applies-to        router\n                type         router\n                router-name  router1\n            exit\n            application-name  icmp-probe\n            application-name  google-drive\n\n            access-policy     _internal_\n                source  _internal_\n            exit\n\n            access-policy     dns-cache-plugin\n                source  dns-cache-plugin\n            exit\n        exit\n\n        service  windows-update_internet\n            name              windows-update_internet\n\n            applies-to        router\n                type         router\n                router-name  router1\n            exit\n            application-name  icmp-probe\n            application-name  windows-update\n\n            access-policy     _internal_\n                source  _internal_\n            exit\n\n            access-policy     dns-cache-plugin\n                source  dns-cache-plugin\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("h2",{id:"release-notes"},"Release Notes"),Object(r.b)("h3",{id:"release-300"},"Release 3.0.0"),Object(r.b)("h4",{id:"issues-fixed"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-768")," Support the DNS App ID plugin in 128T versions ",Object(r.b)("inlineCode",{parentName:"li"},"5.1.0")," and greater."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-611")," Added support for plugin state. Plugin state information can be accessed on the PCLI using ",Object(r.b)("inlineCode",{parentName:"li"},"show plugins state [router <router>] [node <node>] [{detail | summmary}] 128T-dns-app-id"))),Object(r.b)("h3",{id:"release-221"},"Release 2.2.1"),Object(r.b)("h4",{id:"issues-fixed-1"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"PLUGIN-993")," Automatic generation of services not working after upgrade"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Resolution"))," Fix the config generation script to read the data from the file on disk instead of standard input."))),Object(r.b)("h3",{id:"release-120-220"},"Release 1.2.0, 2.2.0"),Object(r.b)("h4",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"PLUGIN-877")," Add support for automatic builtin app inclusion, authority wide custom-apps, and automatic service generation."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A new toggle for automatically including all builtin applications to keep up-to-date with new apps being added via plugin upgrades."),Object(r.b)("li",{parentName:"ul"},"Created a new ",Object(r.b)("inlineCode",{parentName:"li"},"dns-app-id")," plugin at the authority level to provide means for adding ",Object(r.b)("inlineCode",{parentName:"li"},"custom-apps")," that apply to all routers in the config with ",Object(r.b)("inlineCode",{parentName:"li"},"dns-app-id")," enabled."),Object(r.b)("li",{parentName:"ul"},"Provide an option to automatically generate services for the configured applications.")))),Object(r.b)("h3",{id:"release-110-210"},"Release 1.1.0, 2.1.0"),Object(r.b)("h4",{id:"issues-fixed-2"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"PLUGIN-809")," DNS app-id plugin installation fails due to dependency conflict."),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Resolution"))," The 128T-dns-app-id-router RPM has been updated to accept all versions of 128T-dns-cache-router RPM."))),Object(r.b)("h3",{id:"release-102-202"},"Release 1.0.2, 2.0.2"),Object(r.b)("h4",{id:"issues-fixed-3"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-402")," Ensure 128T monitors new file changes and applications restarts with 128T.")))}b.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);