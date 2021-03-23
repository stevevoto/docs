(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(214)),i={title:"Network Address Translation (NAT)",sidebar_label:"NAT"},s={unversionedId:"config_nat",id:"config_nat",isDocsHomePage:!1,title:"Network Address Translation (NAT)",description:"Source NAT",source:"@site/docs/config_nat.md",slug:"/config_nat",permalink:"/docs/config_nat",version:"current",lastUpdatedAt:1616504959,sidebar_label:"NAT",sidebar:"docs",previous:{title:"Transitioning a Conductor from Standalone to HA",permalink:"/docs/config_transition_standalone_to_ha"},next:{title:"Open Shortest Path First (OSPF)",permalink:"/docs/config_ospf"}},c=[{value:"Source NAT",id:"source-nat",children:[]},{value:"Destination NAT",id:"destination-nat",children:[]},{value:"NAT Pools",id:"nat-pools",children:[{value:"Static NAT bindings",id:"static-nat-bindings",children:[]},{value:"Shared NAT pools",id:"shared-nat-pools",children:[]},{value:"Tenant filtering",id:"tenant-filtering",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"source-nat"},"Source NAT"),Object(r.b)("p",null,"Source NAT can be enabled on ",Object(r.b)("inlineCode",{parentName:"p"},"authority > router > node > network-interface"),". When enabling ",Object(r.b)("inlineCode",{parentName:"p"},"source-nat")," on a network-interface, all traffic egressing the interface will be network address and port translated (NAPT) to that of the address on the interface."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The port range is not configurable and ranges between 16384 to 65534, allowing for 49,150 concurrent sessions per interface."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@gouda.novigrad# show config running authority router novigrad node gouda device-interface wan network-interface wan-interface \n\nconfig\n\n    authority\n\n        router  novigrad\n            name  novigrad\n\n            node  gouda\n                name              gouda\n\n                device-interface  wan\n                    name               wan\n\n                    network-interface  wan-interface\n                        name                    wan-interface\n                        global-id               1\n                        vlan                    0\n                        type                    external\n                        conductor               false\n\n                        neighborhood            internet\n                            name  internet\n                        exit\n                        inter-router-security   interfabric\n                        prioritization-mode     local\n                        source-nat              true\n                        mtu                     1500\n                        enforced-mss            disabled\n                        icmp                    allow\n                        hostname                gouda.novigrad.net\n                        multicast-listeners     automatic\n                        multicast-report-proxy  false\n                        dhcp                    v4\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("p",null,"If support for more than 49,150 concurrent sessions per interface is needed, you can configure a ",Object(r.b)("em",{parentName:"p"},"NAT Pool")," or add additional ",Object(r.b)("inlineCode",{parentName:"p"},"address"),"es to the network-interface, expanding the source NAT capacity."),Object(r.b)("p",null,"When multiple addresses are configured, utilizing ",Object(r.b)("inlineCode",{parentName:"p"},"source-nat"),", the second address configured will only be utilized once the first is fully exhausted; so on and so forth.  Once the next configured address starts being utilized, it will remain in use until exhausted."),Object(r.b)("h2",{id:"destination-nat"},"Destination NAT"),Object(r.b)("p",null,"Static desination network address translation can be performed by configuring a ",Object(r.b)("inlineCode",{parentName:"p"},"service-route > nat-target"),". It is common to leverage the public address of the router for internal services, such as VPN. Traffic destined to the 128T, configured as a ",Object(r.b)("em",{parentName:"p"},"service")," with an ",Object(r.b)("em",{parentName:"p"},"address")," that matches that of the public-facing network-interface is then NATed to an internal private address on the LAN for the application. This setting only performs address translation and does not modify the port."),Object(r.b)("h2",{id:"nat-pools"},"NAT Pools"),Object(r.b)("p",null,"NAT pools are a construct that allow for the use of IP and port ranges to be shared across one or more network-interfaces for either source or destination NATing capabilies."),Object(r.b)("h3",{id:"static-nat-bindings"},"Static NAT bindings"),Object(r.b)("p",null,"A static NAT binding can be configured by creating an ",Object(r.b)("inlineCode",{parentName:"p"},"authority > router > nat-pool")," object and assigning it to a network-interface.  The following rules and constraints will apply to this configuration:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("em",{parentName:"li"},"nat-pool")," prefix is used to create a N:M mapping. Where each source IP (from ingress interface) is hashed to an IP address in the nat pool."),Object(r.b)("li",{parentName:"ul"},"The static ",Object(r.b)("em",{parentName:"li"},"nat-pool")," can only be configured as:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"ingress-nat-pool")," on a ",Object(r.b)("em",{parentName:"li"},"network-interface")," when peering with another 128T router"),Object(r.b)("li",{parentName:"ul"},"egress-nat-pool on a ",Object(r.b)("em",{parentName:"li"},"network-interface")," when not performing SVR"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"source-nat-pool")," on a ",Object(r.b)("em",{parentName:"li"},"service-route / next-hop")))),Object(r.b)("li",{parentName:"ul"},"128T software will not reply to ARP requests on the pool prefix on the associated interface.  Therefore the 128T relies on the pool to be routed to the 128T gateway interface by another mechanism (e.g. static-routes, BGP, etc.) by the ",Object(r.b)("em",{parentName:"li"},"next-hop")," in the network."),Object(r.b)("li",{parentName:"ul"},"Changes to the pool configuration will not affect the existing sessions as it has the potential of cascading effect on the network. These changes will resolve over time as the existing sessions naturally expire.")),Object(r.b)("p",null,"The static NAT pool will simply hash the source IP address of incoming packets to the corresponding IP address in the pool."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"nat-pool\n    name static-pool-1\n    type static\n    address-pool\n        address 10.10.10.10/31\n\nnetwork-interface\n    name    test-lan\n    address\n        ip-address 192.168.10.1\n        prefix-length 24\n    ingress-source-nat-pool static-pool-1\n")),Object(r.b)("p",null,"In the configuration snippet above, the ",Object(r.b)("em",{parentName:"p"},"192.168.10.0/24")," network for the ",Object(r.b)("inlineCode",{parentName:"p"},"test-lan")," will be source NAT\u2019d to ",Object(r.b)("inlineCode",{parentName:"p"},"10.10.10.10/31"),". Traffic from an endpoint of source address 192.168.10.10 will be source NAT\u2019d to 10.10.10.10; 192.168.10.11 will be source NAT\u2019d to 10.10.10.11 and so on. Since the NAT in the model relies on a N:M mapping this can only be configured as an ",Object(r.b)("em",{parentName:"p"},"ingress-source-nat-pool")," (on ",Object(r.b)("em",{parentName:"p"},"network-interface"),") or as a destination-nat-pool (on ",Object(r.b)("em",{parentName:"p"},"service-route / next-hop"),")."),Object(r.b)("h3",{id:"shared-nat-pools"},"Shared NAT pools"),Object(r.b)("p",null,"In some scenarios, it is desirable to share the same NAT pool across services and interfaces. This feature accommodates the same NAT pool to be configured on different interfaces. There are some considerations that should be noted for failure and recovery."),Object(r.b)("u",null,"Flow Move Considerations"),Object(r.b)("p",null,"Currently session migration is only supported for SVR sessions. This restriction exists because session migration of a non-SVR session is not guaranteed to terminate on the same server. As a result, the remote server might receive mid flow packets from a different source, resulting in undefined behavior."),Object(r.b)("u",null,"Session Recovery Considerations"),Object(r.b)("p",null,"For shared NAT pools provisioned on an HA interface that encounters a failover, the 128T software will put the interface into recovery mode to recover all sessions. At the end of the recovery period all non-discovered ports designed as free are returned to the NAT pool."),Object(r.b)("h3",{id:"tenant-filtering"},"Tenant filtering"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"nat-pool")," configuration can optionally be provisioned with a list of tenants. When the configuration has ",Object(r.b)("em",{parentName:"p"},"multiple")," IP pools available, the ",Object(r.b)("em",{parentName:"p"},"tenant")," can be used to determine which IP pool will be selected for the source NAT. Absence of a tenant implies that the IP pool is valid for all traffic. The following rules will be applied in order to determine the selection of the NAT pool:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The packet has a source tenant associated with it",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If more than one IP pool has a matching tenant, only the first IP pool is used and the hash is applied to create a session. The remainder of the matches are discarded"),Object(r.b)("li",{parentName:"ul"},"If a pool with no tenant is configured",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Same as above"))),Object(r.b)("li",{parentName:"ul"},"All IP pools have tenant configured but none of them match the source tenant",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Log the failure, increment stat and drop the packet"))))),Object(r.b)("li",{parentName:"ul"},"The packet has no source tenant associated with it",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"At least one IP pool has no tenant configured to do the source NAT otherwise this will result in the session being dropped")))),Object(r.b)("p",null,"The tenant matching rules will apply to sub-tenants as well. For example, if an IP pool allows tenant engineering, then traffic with source tenant lab.engineering will also match the pool."))}p.isMDXComponent=!0}}]);