(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=r,h=l["".concat(o,".").concat(u)]||l[u]||b[u]||i;return n?a.a.createElement(h,c(c({ref:t},p),{},{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(204)),o={title:"Adaptive Encryption",sidebar_label:"Adaptive Encryption"},c={unversionedId:"sec_adaptive_encrypt",id:"sec_adaptive_encrypt",isDocsHomePage:!1,title:"Adaptive Encryption",description:"Introduction",source:"@site/docs/sec_adaptive_encrypt.md",slug:"/sec_adaptive_encrypt",permalink:"/docs/sec_adaptive_encrypt",version:"current",lastUpdatedAt:1611865251,sidebar_label:"Adaptive Encryption",sidebar:"docs",previous:{title:"Configuration Templates",permalink:"/docs/config_templates"},next:{title:"Conductor Migration",permalink:"/docs/howto_conductor_migration"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Overview",id:"overview",children:[{value:"IPSEC",id:"ipsec",children:[]},{value:"TCP",id:"tcp",children:[]}]},{value:"Non-TCP and Non-IPSEC Protocols",id:"non-tcp-and-non-ipsec-protocols",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Reporting",id:"reporting",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"In order to provide security across the WAN, the 128T Networking Platform provides the functionality to encrypt between peered routers. However, for traffic that is already encrypted by the end host, this is redundant. Adaptive Encryption is aimed at identifying the encrypted traffic and providing security for non-encrypted traffic by encrypting it through the 128T Router."),Object(i.b)("p",null,"On a service where most of the traffic is expected to be encrypted, the goal is to identify and encrypt those few sessions that are not. This eliminates the performance overhead of encrypting traffic that is already encrypted."),Object(i.b)("p",null,"Adaptive encryption only applies to payload encryption, not metadata encryption."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"When adaptive encryption is enabled and the first packet arrives in the service area, the L4 protocol determines how it is handled."),Object(i.b)("h3",{id:"ipsec"},"IPSEC"),Object(i.b)("p",null,"If the packet has an IPSEC ESP header, the stream is encrypted and the session is installed without additional encryption actions. If the packet matches the IPSEC or IPSEC-NAT session-type, it\u2019s assumed to be IPSEC and treated as IPSEC ESP."),Object(i.b)("h3",{id:"tcp"},"TCP"),Object(i.b)("p",null,"For TCP streams, TLS is currently the most widely used end-to-end encryption protocol. It is used to encrypt all HTTPS traffic.\nTLS, and other protocols that ride on top of TCP, are not seen until the 4th packet of the stream. At that point the session has been established and the router has chosen whether or not to encrypt.\nWith Adaptive Encryption enabled, the router assumes that the TCP session is likely to be encrypted. No encryption actions are installed, but a DPI action is enabled.  The DPI action looks for TLS headers after the TCP handshake is complete."),Object(i.b)("p",null,"If the DPI action sees the TLS handshake, it is disabled and the session carries on, unencrypted by the router.\nIf the DPI action does not see a TLS handshake, all packets are diverted back to the service area and the session modified for encryption. Starting with that packet, all subsequent packets on the session are encrypted over the fabric."),Object(i.b)("p",null,"It is important to note that detouring packets to the service-area for session modification is expensive. Using this feature on a service where most of the traffic is unencrypted will double the load on the service-area."),Object(i.b)("h2",{id:"non-tcp-and-non-ipsec-protocols"},"Non-TCP and Non-IPSEC Protocols"),Object(i.b)("p",null,"If a packet is plain UDP, ICMP, or any other non-TCP and non-IPSEC protocol, it is assumed to be unencrypted and is installed with encryption actions. "),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Adaptive Encryption is enabled by a boolean in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/config_reference_guide#security"}),"security-policy"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"ladmin@conductor-east-1.RTR_EAST_CONDUCTOR (security[name=aes1])# adaptive-encryption\nusage: adaptive-encryption [<boolean>]\nPrevent packets that are detected as encrypted from being encrypted again as they pass through the router.\npositional arguments:\nboolean    The value to set for this field\nboolean:\n--------\nA true or false value.\nOptions: true or false\n")),Object(i.b)("p",null,"A security-policy can be applied for multiple purposes. However, because adaptive-encryption only applies to payload encryption, ",Object(i.b)("strong",{parentName:"p"},"the adaptive encryption field only has meaning where the policy is configured on a service and encryption is also enabled.")," If the same security-policy is configured on an interface, the field has no meaning."),Object(i.b)("h2",{id:"reporting"},"Reporting"),Object(i.b)("p",null,"Use the following show commands to view statistics to verify whether the feature is active. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Number of sessions the router has detected are unencrypted:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"show stats packet-processing action success dpi unencrypted"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Number of sessions the router has detected are TLS encrypted:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"show stats packet-processing action success dpi client detected")),Object(i.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The show stats packet-processing command is also used for Application Identification and may be incremented even if Adaptive Encryption is not enabled.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Number of sessions have been modified to be encrypted:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"show stats service-area received adaptive-encryption-modify-packets")))))}d.isMDXComponent=!0}}]);