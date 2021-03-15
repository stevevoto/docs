(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var i=t(2),o=t(6),a=(t(0),t(205)),r={title:"BGP Community Services Plugin",sidebar_label:"BGP Community Services"},c={unversionedId:"plugin_bgp_community_services",id:"plugin_bgp_community_services",isDocsHomePage:!1,title:"BGP Community Services Plugin",description:"The BGP Community Services Plugin allows the 128T router to create services based on the community strings of prefixes learned via BGP from remote routers. The plugin allows you to configure a profile containing mappings of application names to community strings. A router can be assigned one profile, which will allow it to create application identification information to associate learned prefixes to application names. These application names can then be configured within a service definition in order to appropriately populate the routers FIB. The primary use case for this plugin was to identify Microsoft Office 365 application traffic for customers using ExpressRoute. However, there may be other use cases where it is desirable for prefixes identified by a BGP community string to be mapped into a service dynamically.",source:"@site/docs/plugin_bgp_community_services.md",slug:"/plugin_bgp_community_services",permalink:"/docs/plugin_bgp_community_services",version:"current",lastUpdatedAt:1615852208,sidebar_label:"BGP Community Services",sidebar:"docs",previous:{title:"Introduction to Plugins",permalink:"/docs/plugin_intro"},next:{title:"Cloud High Availability Plugin",permalink:"/docs/plugin_cloud_ha"}},l=[{value:"Configuration Snippet",id:"configuration-snippet",children:[{value:"BGP Community Services Profile Configuration",id:"bgp-community-services-profile-configuration",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Pillar Generation",id:"pillar-generation",children:[]},{value:"Router Application Identification Module Configuration",id:"router-application-identification-module-configuration",children:[]},{value:"Application Identification Output",id:"application-identification-output",children:[]}]},{value:"Azure Express Route O365 Profile Definition",id:"azure-express-route-o365-profile-definition",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The BGP Community Services Plugin allows the 128T router to create services based on the community strings of prefixes learned via BGP from remote routers. The plugin allows you to configure a profile containing mappings of application names to community strings. A router can be assigned one profile, which will allow it to create ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/concepts_appid"}),"application identification")," information to associate learned prefixes to application names. These application names can then be configured within a service definition in order to appropriately populate the routers FIB. The primary use case for this plugin was to identify Microsoft Office 365 application traffic for customers using ExpressRoute. However, there may be other use cases where it is desirable for prefixes identified by a BGP community string to be mapped into a service dynamically."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The instructions for installing and managing the plugin can be found ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(a.b)("h2",{id:"configuration-snippet"},"Configuration Snippet"),Object(a.b)("p",null,"One or more BGP community profile objects can be configured at the authority level of the configuration. These profiles are then assigned to the individual routers."),Object(a.b)("h3",{id:"bgp-community-services-profile-configuration"},"BGP Community Services Profile Configuration"),Object(a.b)("p",null,"An example configuration is shown below, which shows the standard community strings for ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/office365/enterprise/bgp-communities-in-expressroute"}),"Microsoft Office 365 over ExpressRoute"),". The ",Object(a.b)("inlineCode",{parentName:"p"},"application-name")," values are completely user configurable. The ",Object(a.b)("inlineCode",{parentName:"p"},"bgp-community")," is a list object to allow for scenarios where you may want to associate multiple community strings with a single application."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n\n    authority\n\n        bgp-community-services-profile  O365\n            name              O365\n\n            application       ExchangeOnline\n                application-name  ExchangeOnline\n                bgp-community     12076:5010\n            exit\n\n            application       SharePointOnline\n                application-name  SharePointOnline\n                bgp-community     12076:5020\n            exit\n\n            application       SkypeForBusiness\n                application-name  SkypeForBusiness\n                bgp-community     12076:5030\n            exit\n\n            application       OtherO365\n                application-name  OtherO365\n                bgp-community     12076:5100\n            exit\n        exit\n    exit\nexit\n")),Object(a.b)("p",null,"In order to place prefixes learned for these applications in the FIB of a router, services must be created that reference the ",Object(a.b)("inlineCode",{parentName:"p"},"application-name")," values chosen above. Example services that correspond to the previously configured ",Object(a.b)("inlineCode",{parentName:"p"},"O365")," profile are shown below."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n\n    authority\n\n        service  MSEX\n            name              MSEX\n            application-name  ExchangeOnline\n\n            access-policy     lan\n                source  lan\n            exit\n        exit\n\n        service  MSSP\n            name              MSSP\n            application-name  SharePointOnline\n\n            access-policy     lan\n                source  lan\n            exit\n        exit\n\n        service  MSSK\n            name              MSSK\n            application-name  SkypeForBusiness\n\n            access-policy     lan\n                source  lan\n            exit\n        exit\n\n        service  MSOT\n            name              MSOT\n            application-name  OtherO365\n\n            access-policy     lan\n                source  lan\n            exit\n        exit\n    exit\nexit\n")),Object(a.b)("p",null,"Before the router can leverage the application identification module for BGP community services, you must assign a profile to the router as shown below."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n\n    authority\n\n        router  router1\n            name                            router1\n            bgp-community-services-profile  O365\n        exit\n    exit\nexit\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In order for the router to use the prefix values calculated for each application, the ",Object(a.b)("inlineCode",{parentName:"p"},"application-identification")," mode ",Object(a.b)("inlineCode",{parentName:"p"},"module")," MUST be enabled on the router as shown below."))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n\n    authority\n\n        router  router1\n            name                        router1\n\n            application-identification\n                mode  module\n            exit\n        exit\n    exit\nexit\n")),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("h3",{id:"pillar-generation"},"Pillar Generation"),Object(a.b)("p",null,"When the plugin is installed on the conductor, each commit triggers a script called ",Object(a.b)("inlineCode",{parentName:"p"},"generate_pillar")," to auto-generate pillar data for each node of each router. Please check the following locations on the conductor for debugging information."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Logs for the pillar generation for each commit can be found here")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"/var/log/128technology/plugins/bgp-community-services-generate-pillar.log\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The actual pillar data containing mappings of application name to community strings can be found here")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"/var/lib/128technology/plugins/pillar/bgp-community-services/<asset name>.sls\n")),Object(a.b)("h3",{id:"router-application-identification-module-configuration"},"Router Application Identification Module Configuration"),Object(a.b)("p",null,"If a BGP Community Services Profile has been assigned to the router, the 128T-bgp-community-services router package should be installed on all nodes of the router via Salt. In addition, a configuration file should be generated and a symlink should be created to enable the application module."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The configuration for the plugin module, directly generated from pillar data can be found here")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"/var/lib/128technology/plugins/bgp-community-services/config.json\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A symlink to the ",Object(a.b)("inlineCode",{parentName:"li"},"bgp-community-services")," executible should exist as shown below")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"# cd /etc/128technology/application-modules/\n# ll\ntotal 0\ndrwxr-xr-x 2 root root 45 Jun 29 23:28 app_module_utils\nlrwxrwxrwx 1 root root 70 Jun 30 00:44 bgp-community-services -> /etc/128technology/application-modules/defaults/bgp-community-services\ndrwxr-xr-x 2 root root 86 Jun 29 23:28 defaults\nlrwxrwxrwx 1 root root 21 Jun 29 20:30 office365.py -> defaults/office365.py\n# \n")),Object(a.b)("h3",{id:"application-identification-output"},"Application Identification Output"),Object(a.b)("p",null,"Once the application identification module is setup correctly and a configuration exists, it will begin to generate JSON data in an application module file. If this file does not exist, or if it is not being updated periodically, ensure that application-identification mode module is configured on the router."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The application module file is located here")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"/var/run/128technology/application-modules/bgp-community-services.json\n")),Object(a.b)("p",null,"The contents of this file should show a JSON mapping of the user defined application names to a list of prefixes. If the module had any difficulties producing the data, it should generate an error message that can be used to help in determining the reason for the failure. The failure will also indicate which application and community string the module was processing when it encountered a failure. This may be useful in determining if the failure happened initially with the first application/community or later in the processing of the dta. Some examples are shown below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This error indicates that the routingManager API was not available to be queried. Please ensure the correct 128T software version is running on the router with this capability. ")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module-name": "bgp-community-services",\n  "duration": 60,\n  "continue-file-watch": true,\n  "services": {},\n  "error": "URLError: [Errno 111] Connection refused on application ExchangeOnline and community 12076:5010"\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This error indicates that the routingManager API was available but returned an error.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module-name": "bgp-community-services",\n  "duration": 60,\n  "continue-file-watch": true,\n  "services": {},\n  "error": "HTTPError: 502 Bad Gateway on application ExchangeOnline and community 12076:5010"\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This error indicates that routingManager did not return the expected data. Check to ensure BGP is configured correctly on the router.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module-name": "bgp-community-services",\n  "duration": 60,\n  "continue-file-watch": true,\n  "services": {},\n  "error": "AttributeError: \'str\' object has no attribute \'get\' on application ExchangeOnline and community 12076:5010"\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An empty result like this indicates that no match was found for the configured BGP community strings. Please check the received prefixes to ensure you are getting the communitie strings you expect.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module-name": "bgp-community-services",\n  "duration": 60,\n  "continue-file-watch": true,\n  "services": {}\n}\n')),Object(a.b)("h2",{id:"azure-express-route-o365-profile-definition"},"Azure Express Route O365 Profile Definition"),Object(a.b)("p",null,"The output here is provided in ",Object(a.b)("inlineCode",{parentName:"p"},"flat")," format to facilitate copy/pasting into an existing 128T conductor or router. This can be used to create a proile named ",Object(a.b)("inlineCode",{parentName:"p"},"O365")," which can be assigned to specific routers. It will define application-names ",Object(a.b)("inlineCode",{parentName:"p"},"ExchangeOnline"),", ",Object(a.b)("inlineCode",{parentName:"p"},"SharePointOnline"),", ",Object(a.b)("inlineCode",{parentName:"p"},"SkypeForBusiness"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"OtherO365")," which can each be used in the ",Object(a.b)("inlineCode",{parentName:"p"},"application-name")," field to define a service."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"config authority bgp-community-services-profile O365 name O365\nconfig authority bgp-community-services-profile O365 application ExchangeOnline application-name ExchangeOnline\nconfig authority bgp-community-services-profile O365 application ExchangeOnline bgp-community 12076:5010\nconfig authority bgp-community-services-profile O365 application SharePointOnline application-name SharePointOnline\nconfig authority bgp-community-services-profile O365 application SharePointOnline bgp-community 12076:5020\nconfig authority bgp-community-services-profile O365 application SkypeForBusiness application-name SkypeForBusiness\nconfig authority bgp-community-services-profile O365 application SkypeForBusiness bgp-community 12076:5030\nconfig authority bgp-community-services-profile O365 application OtherO365 application-name OtherO365\nconfig authority bgp-community-services-profile O365 application OtherO365 bgp-community 12076:5100\n")))}s.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=i,d=u["".concat(r,".").concat(b)]||u[b]||m[b]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);