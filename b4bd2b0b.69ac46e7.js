(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(201)),o={title:"Management Traffic over Forwarding Interfaces",sidebar_label:"Management over Forwarding"},c={unversionedId:"config_management_over_forwarding",id:"config_management_over_forwarding",isDocsHomePage:!1,title:"Management Traffic over Forwarding Interfaces",description:"Management traffic is any service that makes direct contact to another asset, either to retrieve or interface with the configuration and status of hardware components (conductor to router), the core operating system (NTP), features of user interfaces to the OS (DNS), or the business application, sometimes taking subsequent action to maintain or change configurations. All actions ultimately provide underlying support to the service being delivered by the managed resource to its users. Access is typically controlled via a set of privileges and will usually allow either modification and/or viewing of sensitive system configurations. Management traffic includes three categories: management, monitoring, and data backups and restores.",source:"@site/docs/config_management_over_forwarding.md",slug:"/config_management_over_forwarding",permalink:"/docs/config_management_over_forwarding",version:"current",lastUpdatedAt:1595457929,sidebar_label:"Management over Forwarding",sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/config_ldap"},next:{title:"Configuring High Availability (128T Router)",permalink:"/docs/config_ha"}},s=[{value:"Benefits",id:"benefits",children:[]},{value:"Management Services",id:"management-services",children:[]},{value:"Configuration",id:"configuration",children:[{value:"DNS",id:"dns",children:[]},{value:"Management Vectors",id:"management-vectors",children:[]},{value:"Utility Address",id:"utility-address",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"User Defined Services",id:"user-defined-services",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Management traffic is any service that makes direct contact to another asset, either to retrieve or interface with the configuration and status of hardware components (conductor to router), the core operating system (NTP), features of user interfaces to the OS (DNS), or the business application, sometimes taking subsequent action to maintain or change configurations. All actions ultimately provide underlying support to the service being delivered by the managed resource to its users. Access is typically controlled via a set of privileges and will usually allow either modification and/or viewing of sensitive system configurations. Management traffic includes three categories: management, monitoring, and data backups and restores."),Object(r.b)("p",null,"Networking equipment's management traffic typically traverses a separate physical interface for the purposes of network isolation and policing."),Object(r.b)("p",null,"Depending on the nature and size of a deployment, the hardware platform may not have the required number of physical interfaces to separate management traffic. In these cases, the forwarding WAN interface can be leveraged for management traffic."),Object(r.b)("h2",{id:"benefits"},"Benefits"),Object(r.b)("p",null,"When using a separate ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_interface_types"}),"non-forwarding")," interface for management traffic, packet forwarding is managed by Linux's routing table. Leveraging 128T's native routing capabilities for management traffic provides additional security, segmentation and advanced routing policy."),Object(r.b)("p",null,"When provisioning management traffic to traverse forwarding interfaces, those interfaces will continue to be available for management related functions (e.g., ssh) even when the 128T is not running, yet will still be protected by firewall rules that match the respective policy. This is particularly important during maintenance operations when the 128T software is taken offline for an upgrade."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Once a forwarding interface is provisioned for management traffic, any existing OS configuration for that interface such as ifcfg and firewall rules will be overwritten to match the 128T configuration."))),Object(r.b)("h2",{id:"management-services"},"Management Services"),Object(r.b)("p",null,"One of the strengths of the 128T data model is to dynamically apply policy only as needed. As it relates to management traffic, service policy will only be created for those management applications provisioned. The list of applications natively supported are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/concepts_machine_communication#router-to-conductor-connectivity"}),"Conductor traffic"),". This works in tandem with ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/bcp_conductor_deployment"}),"conductor services")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#webserver"}),"Web server access")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#address"}),"PCLI/SSH")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#dns"}),"DNS")," traffic for FQDN resolution"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#ntp"}),"NTP")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#repository"}),"Software Updates")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#snmp-server"}),"SNMP")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#syslog"}),"Syslog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_reference_guide#syslog"}),"IPFIX"))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"When enabled, a default route will be configured in Linux's routing table to send all traffic to the interface ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_kni"}),Object(r.b)("inlineCode",{parentName:"a"},"kni254")),", which is the pathway into the 128T packet forwarding engine. Thus, standard 128T forwarding rules apply: any traffic originated by the host operating system that does not match a configured service will be dropped. Services and corresponding service routes are automatically created for the applications listed ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#management-services"}),"above"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Because a default route is added in Linux, all traffic not captured by a static route, will be sent to the 128T. This means that the traffic will either be dropped, or match an existing service and route."))),Object(r.b)("p",null,"For each of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#management-services"}),"management services")," configured, the 128T will automatically generate corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"service")," and ",Object(r.b)("inlineCode",{parentName:"p"},"service-route")," configurations for forwarding the respective traffic. The generated configuration objects will all start with the prefix ",Object(r.b)("inlineCode",{parentName:"p"},"_management_"),"."),Object(r.b)("p",null,"Each of the service and service-routes share one important attribute: they are created with the ",Object(r.b)("inlineCode",{parentName:"p"},"generated")," flag set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". If you want to make any modifications to the generated services, you must first set ",Object(r.b)("inlineCode",{parentName:"p"},"generated")," to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", or else your configuration changes will be stripped upon the next time the configuration is committed. For more information on configuration work-flows involving the ",Object(r.b)("inlineCode",{parentName:"p"},"generated")," flag, refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_basics#generated-configuration"}),"128T software documentation"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"management")," interfaces cannot be used on device-interface types of ",Object(r.b)("inlineCode",{parentName:"p"},"host")," or ",Object(r.b)("inlineCode",{parentName:"p"},"bridge"),"."))),Object(r.b)("h3",{id:"dns"},"DNS"),Object(r.b)("p",null,"DNS servers can be configured within ",Object(r.b)("inlineCode",{parentName:"p"},"authority > router > dns-config > address")," in one of two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"automatic")," - if the management interface is configured for DHCP, then the DNS server(s) learned through the DHCP lease are used"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"static")," - up to two DNS server addresses can be configured",Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"These addresses are assumed to be reachable via the configured management interface(s)."))))),Object(r.b)("p",null,"If static DNS servers are configured and a network-interface is configured to obtain its address via DHCP, the DNS servers learned through the lease are ordered after any statically defined entries."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Configuring ",Object(r.b)("inlineCode",{parentName:"p"},"dns-config > address")," is required, however setting ",Object(r.b)("inlineCode",{parentName:"p"},"dns-config > address")," to ",Object(r.b)("inlineCode",{parentName:"p"},"automatic")," is only allowed when a management interface is enabled for DHCP."))),Object(r.b)("h3",{id:"management-vectors"},"Management Vectors"),Object(r.b)("p",null,"When provisioning multiple management interfaces, a ",Object(r.b)("em",{parentName:"p"},"management vector")," is used to provide preference amongst the interfaces."),Object(r.b)("p",null,"When the 128T service is not running, a default route is created for the interface configured as management with the lowest metric (if multiple management interfaces are configured)."),Object(r.b)("p",null,"For example, the following 128T configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"network-interface  wan1-intf\n    name               wan1-intf\n    conductor          true\n    default-route      true\n    source-nat         true\n    management         true\n    management-vector\n        name      mgmt-vec-1\n        priority  20\n    exit\nexit\n")),Object(r.b)("p",null,"Will produce the corresponding configuration within Linux:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"# ip route\ndefault dev wan1-intf scope link metric 20\n")),Object(r.b)("h3",{id:"utility-address"},"Utility Address"),Object(r.b)("p",null,"Management interfaces can be configured for redundancy between nodes of a HA pair by provisioning ",Object(r.b)("inlineCode",{parentName:"p"},"authority > router > node > device-interface > shared-phys-address"),". If the interface is redundant and management, a ",Object(r.b)("inlineCode",{parentName:"p"},"authority > router > node > device-interface > network-interface > address > utility-ip-address")," is required on the network-interface. This address is assigned to the Linux interface when 128T is not running with the original MAC address, not the virtual ",Object(r.b)("inlineCode",{parentName:"p"},"shared-phys-address")," from 128T configuration. The ",Object(r.b)("inlineCode",{parentName:"p"},"utility-ip-address")," must be unique per node across the router."),Object(r.b)("h3",{id:"sample-configuration"},"Sample Configuration"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"config\n    authority\n        conductor-address  192.168.1.12\n        router             Router1\n            name                      Router1\n            dns-config                automatic\n                mode              automatic\n            exit\n            node                      Node1\n                name              Node1\n                device-interface  node1-mgmt\n                    name               node1-mgmt\n                    type               ethernet\n                    pci-address        0000:00:03.0\n                    forwarding         true\n                    network-interface  node1-mgmt-intf\n                        name               node1-mgmt-intf\n                        global-id          3\n                        conductor          true\n                        default-route      true\n                        source-nat         true\n                        management         true\n                        management-vector\n                            name      mgmt-vec-1\n                            priority  20\n                        exit\n                        dhcp               v4\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"router > node > device-interface > network-interface > source-nat")," must be set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when using management over forwarding since all management traffic will originate from ",Object(r.b)("inlineCode",{parentName:"p"},"169.254.x.x"),".\n",Object(r.b)("inlineCode",{parentName:"p"},"router > node > device-interface > network-interface > default-route")," must also be set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to ensure that Linux uses the network interface as its preferred route for traffic originating from the host OS."))),Object(r.b)("h3",{id:"user-defined-services"},"User Defined Services"),Object(r.b)("p",null,"For any other service not defined by the default management services list, the user can configure a ",Object(r.b)("em",{parentName:"p"},"service")," to best suit their needs. It is necessary to configure the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/bcp_tenants#the-internal-tenant"}),Object(r.b)("em",{parentName:"a"},"internal"))," tenant within the ",Object(r.b)("inlineCode",{parentName:"p"},"access-policy")," of the service to allow traffic originating from the Linux host."))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,f=b["".concat(o,".").concat(p)]||b[p]||m[p]||r;return n?i.a.createElement(f,c(c({ref:t},d),{},{components:n})):i.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);