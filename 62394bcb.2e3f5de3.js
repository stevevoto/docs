(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(217)),o={title:"Ethernet Over Secure Vector Routing",sidebar_label:"Ethernet Over Secure Vector Routing"},c={unversionedId:"concepts_EthOverSVR",id:"concepts_EthOverSVR",isDocsHomePage:!1,title:"Ethernet Over Secure Vector Routing",description:"Ethernet Over SVR (EoSVR) is a proprietary 128 Technology protocol that extends the Ethernet broadcast domain across multiple sites. EoSVR provides a site to site ethernet broadcast domain between 128T routers with increased security and efficiency, without the overhead of IP packet encapsulation.",source:"@site/docs/concepts_EthOverSVR.md",slug:"/concepts_EthOverSVR",permalink:"/docs/concepts_EthOverSVR",version:"current",lastUpdatedAt:1620232074,sidebar_label:"Ethernet Over Secure Vector Routing",sidebar:"docs",previous:{title:"Application Identification",permalink:"/docs/concepts_appid"},next:{title:"High Availability - Theory of Operation",permalink:"/docs/concepts_ha_theoryofoperation"}},s=[{value:"Packet Types",id:"packet-types",children:[{value:"Non-IP, Multicast and broadcast Traffic",id:"non-ip-multicast-and-broadcast-traffic",children:[]},{value:"IP Traffic",id:"ip-traffic",children:[]},{value:"VxLAN Traffic",id:"vxlan-traffic",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ethernet Over SVR (EoSVR) is a proprietary 128 Technology protocol that extends the Ethernet broadcast domain across multiple sites. EoSVR provides a site to site ethernet broadcast domain between 128T routers with increased security and efficiency, without the overhead of IP packet encapsulation.  "),Object(i.b)("p",null,"Layer 2 and IP traffic destined for your LAN arrives on the 128T Router and is transported over an Ethernet Over SVR bridge to the destination 128T router within the customer network. The bridge is configured between not more than two routers, and the configuration is validated before committing it to the running config."),Object(i.b)("p",null,"EoSVR is only supported for point to point layer 2 services, and provides the following advantages over traditional MPLS networks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Eliminates additional CE routers needed to deploy MPLS pseudowires."),Object(i.b)("li",{parentName:"ul"},"First packet processing with metadata for VxLAN packets eliminates the need to tunnel the VxLAN packet within another IP packet (e.g. GRE)."),Object(i.b)("li",{parentName:"ul"},"SVR packets can travel over multiple transport types (Internet or MPLS), providing multipath failover redundancy. "),Object(i.b)("li",{parentName:"ul"},"Increased security; SVR packets are encrypted and authenticated.")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/config_EthoSVR"}),"Configuring Ethernet over SVR")," for configuration information. "),Object(i.b)("h2",{id:"packet-types"},"Packet Types"),Object(i.b)("p",null,"There are four types of packets that are enabled for Ethernet Over SVR:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Non-IP, multicast, and broadcast packets."),Object(i.b)("li",{parentName:"ul"},"IP packets."),Object(i.b)("li",{parentName:"ul"},"VxLAN packets carrying Non-IP packets."),Object(i.b)("li",{parentName:"ul"},"VxLAN packets carrying IP packets.")),Object(i.b)("h3",{id:"non-ip-multicast-and-broadcast-traffic"},"Non-IP, Multicast and broadcast Traffic"),Object(i.b)("p",null,"Non-IP (ARP, CDP, LLDP, etc), multicast, and broadcast traffic are encapsulated within an IP payload and transported as an SVR packet. Once marked as EoSVR, the flow is given a high timeout, allowing the flow to be reused for all non-IP packets.\nAll SVR capabilities are available for non-IP encapsulated packets including failover, service policy enforcement, and multi-hop. EoSVR is backward compatible with all existing routers, and can be enabled on a per end point basis."),Object(i.b)("p",null,"Each router with an EoSVR bridge auto generates a new, specific service and service-route for EoSVR traffic, allowing remote routers with the same bridge name to access the EoSVR bridge. When the bridge name is manually specified, a new service-route is introduced."),Object(i.b)("p",null,"Non-IP traffic is unidirectional. For example, router R1 and router R2 have the same bridge name configured. An ARP request on EoSVR bridge on router R1 creates a session to R2 via SVR. The ARP reply from R2 creates another session to R1. These sessions will timeout if no other non-IP packets are detected."),Object(i.b)("h4",{id:"tunneling"},"Tunneling"),Object(i.b)("p",null,"There is an option to encapsulate and tunnel all traffic if necessary. In this case, even the IP traffic will be tunneled under the session. Q-in-Q traffic is treated as non-ip traffic and uses the same session."),Object(i.b)("h3",{id:"ip-traffic"},"IP Traffic"),Object(i.b)("p",null,"All IP traffic is sent over SVR with the following new fields in the metadata:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Source MAC"),Object(i.b)("li",{parentName:"ul"},"Destination MAC")),Object(i.b)("p",null,"The first packet carries the metadata containing the L2 information to the final 128T router. There the ethernet header is replaced with the fields above, and the packet is sent to the final destination."),Object(i.b)("p",null,"The new metadata field avoids tunneling the entire IP packet inside another IP packet. The first packet carries the layer 2 information. Any subsequent packets that are sent without metadata have the layer 2 information restored at the final 128T router, which extends the broadcast domain."),Object(i.b)("p",null,"Flows setup for IP Traffic are bidirectional. These packets are expected to be in the same broadcast domain, and the ethernet address is preserved at the final 128T router."),Object(i.b)("h3",{id:"vxlan-traffic"},"VxLAN Traffic"),Object(i.b)("p",null,"VxLAN traffic is is identified by having a destination port of 4789. When VxLAN traffic arrives on a 128T Router, a service is defined to carry the traffic. This service will have a service-route with a next-hop to the peer 128T router. Because VxLAN traffic is unidirectional, two services are used to transport VxLAN traffic from one 128T router to another, one in each direction. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"128T R1 Service")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Service Vxlan_To_R2\n  protocol UDP\n  Port 4789\n  Address 1.1.1.0/24\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"128T R2 Service")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"Service Vxlan_To_R1\n  protocol UDP\n  Port 4789\n  Address 2.2.2.0/24\n")),Object(i.b)("p",null,"If more addresses are involved, they are added to the existing service. All VxLAN traffic is sent over SVR with new fields in ebedded in the metadata. "))}p.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);