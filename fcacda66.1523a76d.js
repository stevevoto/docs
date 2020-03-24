(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(11),o=(n(0),n(192)),i={title:"Interface Types",sidebar_label:"Interface Types"},c={id:"concepts_interface_types",title:"Interface Types",description:"**Forwarding:** An interface used to pass session traffic.",source:"@site/docs/concepts_interface_types.md",permalink:"/docs/concepts_interface_types",editUrl:"https://github.com/128technology/docs/tree/master/docs/concepts_interface_types.md",lastUpdatedAt:1584042689,sidebar_label:"Interface Types",sidebar:"docs",previous:{title:"High Availability - Theory of Operation",permalink:"/docs/concepts_ha_theoryofoperation"},next:{title:"Linux Host Networking Through 128T",permalink:"/docs/concepts_linux_host_networking"}},s=[],p={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Forwarding:")," An interface used to pass session traffic."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Non Forwarding:")," An interface that is not used to pass session traffic and used for management or conductor-specific traffic."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Non forwarding ",Object(o.b)("inlineCode",{parentName:"strong"},"external")," interface"),": An interface that is externally facing such as a management interface or an interface used to reach the conductor. There is no limit to the number of ",Object(o.b)("inlineCode",{parentName:"p"},"external")," interfaces that a user can configure per node. External interfaces can be Ethernet, LTE, PPPoE or T1 devices. They can also be configured with static IP addresses or to use DHCP."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Non forwarding ",Object(o.b)("inlineCode",{parentName:"strong"},"fabric")," interface"),": An interface that is used to connect directly to the node's HA peer. Since a direct connection from one box to the other is assumed in this case, the interface is configured in Linux as a network team. The network team configuration ensures that if a node's HA peer is rebooted that the node's interface does not get a link down event and the IP address does not disappear from Linux, which causes internal connectivity issues within the node itself. The user may configure one ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," or ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," interface per node, and that interface is used for all HA control traffic. The ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface must be an Ethernet interface with exactly one address."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Non forwarding ",Object(o.b)("inlineCode",{parentName:"strong"},"shared")," interface"),": A combination of an ",Object(o.b)("inlineCode",{parentName:"p"},"external")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface. A ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," interface serves all the same purposes as an ",Object(o.b)("inlineCode",{parentName:"p"},"external")," interface while also providing connectivity to the HA peer. A ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," interface is not directly connected to the HA peer so it is not configured as a Linux network team. The user may configure one fabric or shared interface per node, and that interface is used for all HA control traffic. The ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," interface must be an Ethernet interface with exactly one address."))}f.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),f=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=f(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=f(n),u=r,b=d["".concat(i,".").concat(u)]||d[u]||l[u]||o;return n?a.a.createElement(b,c({ref:t},p,{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);