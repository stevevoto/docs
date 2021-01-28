(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(203)),o={title:"Introduction to Plugins",sidebar_label:"Introduction"},c={unversionedId:"plugin_intro",id:"plugin_intro",isDocsHomePage:!1,title:"Introduction to Plugins",description:"128T plugins are software components that enhance the functionality and user experience of the 128T Session Smart routing platform by leveraging the extensible nature of the 128T conductor and router. Plugins can provide a robust delivery mechanism for a variety of use cases. The behavior of each plugin is specific to the use case but follow a general pattern",source:"@site/docs/plugin_intro.md",slug:"/plugin_intro",permalink:"/docs/plugin_intro",version:"current",lastUpdatedAt:1611799135,sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Initializer Preferences File Reference",permalink:"/docs/initializer_preferences"},next:{title:"BGP Community Services Plugin",permalink:"/docs/plugin_bgp_community_services"}},s=[{value:"Plugin Workflow",id:"plugin-workflow",children:[{value:"Installation and management",id:"installation-and-management",children:[]},{value:"Enabling plugin-specific configuration",id:"enabling-plugin-specific-configuration",children:[]},{value:"Installing and managing software on the router",id:"installing-and-managing-software-on-the-router",children:[]}]},{value:"Plugin Concepts",id:"plugin-concepts",children:[{value:"KNI network scripts",id:"kni-network-scripts",children:[]},{value:"Service Function Chaining",id:"service-function-chaining",children:[]},{value:"Application Identification",id:"application-identification",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"128T plugins are software components that enhance the functionality and user experience of the 128T Session Smart routing platform by leveraging the extensible nature of the 128T conductor and router. Plugins can provide a robust delivery mechanism for a variety of use cases. The behavior of each plugin is specific to the use case but follow a general pattern"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add plugin specific configuration to the conductor GUI and PCLI"),Object(r.b)("li",{parentName:"ul"},"Manage and install software on the router"),Object(r.b)("li",{parentName:"ul"},"Leverage extensible functions on the router")),Object(r.b)("h2",{id:"plugin-workflow"},"Plugin Workflow"),Object(r.b)("p",null,"Plugins enable a variety of use cases to be implemented to enhance the 128T router experience. These plugins can range from something as simple as managing system settings on the router like the ",Object(r.b)("inlineCode",{parentName:"p"},"128T-journal")," plugin for managing systemd journal size to something more advanced such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_ipsec_client"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-ipsec-client"))," which allows for the creation and management of IPSec client tunnels on the 128T router. Regardless of the usage and the complexity of the plugin they follow a general workflow."),Object(r.b)("h3",{id:"installation-and-management"},"Installation and management"),Object(r.b)("p",null,"The 128T conductor GUI provides a dashboard to view and manage all available plugins."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T Plugin Dasboard",src:n(480).default})),Object(r.b)("p",null,"The dashboard above shows the available and installed plugins. The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_cache"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-dns-cache"))," plugin in the dashboard above is available and ready to be installed on the conductor. The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_gre"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-gre"))," plugin shows a green icon meaning it has been installed and ready to be configured. The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_ipsec_client"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-ipsec-client"))," plugin has an orange icon indicating that a new version of the plugin is available for installation, though the currently installed version is still actively being used by the conductor."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Upon installation, removal or upgrade of a plugin, the Conductor must be restarted for the changes to take effect."))),Object(r.b)("h4",{id:"installing-a-new-plugin"},"Installing a new plugin"),Object(r.b)("p",null,"The available plugin can be downloaded and installed by clicking on the ",Object(r.b)("inlineCode",{parentName:"p"},"Install")," button on the bottom right and it provides feedback on the installation status and other instructions."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T Plugin Installation",src:n(481).default})),Object(r.b)("h4",{id:"upgrading-an-existing-plugin"},"Upgrading an existing plugin"),Object(r.b)("p",null,"When plugin upgrades are available, the ",Object(r.b)("inlineCode",{parentName:"p"},"Upgrade")," button on the bottom can be used to install the latest version of the plugin."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T Plugin Upgrade",src:n(482).default})),Object(r.b)("h4",{id:"removing-installed-plugin"},"Removing installed plugin"),Object(r.b)("p",null,"Installed plugin can be removed from the UI by using the ",Object(r.b)("inlineCode",{parentName:"p"},"Uninstall")," button on the bottom right."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T Plugin Uninstall",src:n(483).default})),Object(r.b)("h3",{id:"enabling-plugin-specific-configuration"},"Enabling plugin-specific configuration"),Object(r.b)("p",null,"The conductor provides extensibility APIs through which plugins can add plugin-specific configuration to the 128T conductor. This mechanism is especially useful for collecting various user inputs to drive the plugin behavior. For example, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_gre"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-gre"))," uses the configuration to obtain tunnel configuration for the router."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T GRE configuration",src:n(484).default})),Object(r.b)("p",null,"Such advanced plugins take advantage of other conductor APIs to inject derived configuration such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#kni-network-scripts"}),"knis"),", service and service-route into the configuration. This enables the plugins to better manage their feature and functionality on the router.  Such plugins are used to chain together various ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#service-function-chaining"}),"service functions")," on the router to allow additional software to be easily deployed and managed."),Object(r.b)("h3",{id:"installing-and-managing-software-on-the-router"},"Installing and managing software on the router"),Object(r.b)("p",null,"In the 128T platform architecture, ",Object(r.b)("inlineCode",{parentName:"p"},"salt")," is used as communication mechanism between router and conductor for managing the 128T software on the router. In the similar fashion, the plugins can also install additional software and manage state on the router via ",Object(r.b)("inlineCode",{parentName:"p"},"salt")," by leveraging pillar generation APIs provided by the conductor. Most plugins will typically leverage salt to perform one or all of the following functions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install an rpm along with its dependencies on the router"),Object(r.b)("li",{parentName:"ul"},"Configure additional software on the router"),Object(r.b)("li",{parentName:"ul"},"Trigger additional services or functions on the router such as systemd services etc.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Plugins rely on connectivity between the conductor and router to drive their logic. They also rely on the router to have access to the 128T RPM repository as either direct access over internet or by leveraging ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intro_upgrading#routers-with-restricted-internet-access"}),"conductor hosted repo"),"."))),Object(r.b)("h2",{id:"plugin-concepts"},"Plugin Concepts"),Object(r.b)("p",null,"Some of the more advanced plugins such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_ipsec_client"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-ipsec-client"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_gre"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-gre"))," rely on various extensibility features available on the router to perform their functions. Some of the commonly used concepts are as follows."),Object(r.b)("h3",{id:"kni-network-scripts"},"KNI network scripts"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.dpdk.org/guides/prog_guide/kernel_nic_interface.html"}),"The Kernel Network Interface (KNI)")," is a special interface which allows for communication between 128T router and the underlying operating system. Most common instance of KNI is the presence of a loopback interface called ",Object(r.b)("inlineCode",{parentName:"p"},"kni254")," on the system which is typically used to enable in-band management sessions on a 128T router. KNIs also provide an extensive set of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_kni_namespace_scripts"}),"scripting functionality")," which can be used to drive additional applications on the system such as DNS masquerade, ipsec-client using libreswan, GRE stack in linux OS etc. A more detailed guide on KNI interface scripting can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni"}),"here"),"."),Object(r.b)("h3",{id:"service-function-chaining"},"Service Function Chaining"),Object(r.b)("p",null,"One of the most common use case for plugins is the notion of service function chaining whereby ",Object(r.b)("inlineCode",{parentName:"p"},"ingress")," traffic (typically from a lan interface) is routed through the linux OS to be passed through a ",Object(r.b)("inlineCode",{parentName:"p"},"service function")," which can be used to inspect, encapsulate, transform or provide additional functionality on the incoming traffic. Once the service function in linux is applied it will result in a new set of sessions being created towards the ",Object(r.b)("inlineCode",{parentName:"p"},"egress")," interfaces (typically towards a wan interface). Such a SFC function relies on the safe and reliable 128T Session Smart routing in both directions."),Object(r.b)("p",null,Object(r.b)("img",{alt:"128T plugin sfc",src:n(485).default})),Object(r.b)("p",null,"In a SFC implementation, typically the traffic is received from the ",Object(r.b)("inlineCode",{parentName:"p"},"ingress")," interface and is processed by an ",Object(r.b)("inlineCode",{parentName:"p"},"ingress-service"),". The service would then direct the traffic towards an ",Object(r.b)("inlineCode",{parentName:"p"},"ingress")," KNI. Depending on the type of the plugin, there may be additional applications running in a network namespace. For example, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_gre"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-gre"))," plugin creates native GRE tunnels supported by Linux OS in an network namespace. This is referred to as a ",Object(r.b)("inlineCode",{parentName:"p"},"service function")," as seen in the graphic above. Once the function performs its intended role, the traffic is then forwarded through the ",Object(r.b)("inlineCode",{parentName:"p"},"egress kni")," back into the 128T router for further processing. Once the egress traffic is received (back) into 128T router, it allows the user to apply all possible routing concepts such as local breakout, secure-vector routing etc to the ",Object(r.b)("inlineCode",{parentName:"p"},"egress")," traffic. In case of the GRE plugin, for example, the tunnel IP traffic is typically forwarded to the peer endpoint via local breakout."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Consider appropriate tenancy for each side of the traffic (ingress vs egress) to not only provide appropriate security but also to avoid issues with the sessions from two sides colliding with each other."))),Object(r.b)("h3",{id:"application-identification"},"Application Identification"),Object(r.b)("p",null,"128T router have powerful application-based routing capabilities using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_appid#appid-using-modules"}),"modules")," which can provide a name to ip-prefix mapping. As the documentation suggests, the module based approach requires programming expertise and as a result lends itself very well as a plugin. Several plugins utilize the app-id feature in the product to provide a meaningful user experience. The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_dns_app_id"}),Object(r.b)("inlineCode",{parentName:"a"},"128T-dns-app-id"))," plugin, for example, combines both the SFC concept as described ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#service-function-chaining"}),"above")," in order to learn and cache DNS records routed through the 128T platform as well as leveraging the learned information to provide named routing for applications such as GSuite, Gmail etc by leveraging application-id."))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,g=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?i.a.createElement(g,c(c({ref:t},l),{},{components:n})):i.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugins_dashboard-47ad414c3d74c8b89ee2af418e173193.png"},481:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugin_install-579f3f8a30e5a4092acbb134c5fba9c2.gif"},482:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugin_upgrade-7381124d628e782cbcef07261b8d62a3.gif"},483:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugin_uninstall-1ab42e88e0cc6a43d3792ff7ebb583dd.gif"},484:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugin_gre_config-a2dc8adf736349cce65e2d6ef5ed5493.gif"},485:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plugin_sfc-036e45af50c416ee14307707cfca9502.png"}}]);