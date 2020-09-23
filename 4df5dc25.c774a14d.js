(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{188:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),l=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(m,s(s({ref:n},d),{},{components:t})):a.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},437:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/config_dhcp_1-db8838acfd05d9a50099dde99dd49e27.png"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(188)),i={title:"Dynamic Host Configuration Protocol (DHCP)",sidebar_label:"DHCP"},s={unversionedId:"config_dhcp",id:"config_dhcp",isDocsHomePage:!1,title:"Dynamic Host Configuration Protocol (DHCP)",description:"The Dynamic Host Configuration Protocol (DHCP) is a network management protocol used on IP networks whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.",source:"@site/docs/config_dhcp.md",slug:"/config_dhcp",permalink:"/docs/config_dhcp",version:"current",lastUpdatedAt:1595254277,sidebar_label:"DHCP",sidebar:"docs",previous:{title:"Configuring Audit Logging",permalink:"/docs/config_audit_log"},next:{title:"DNS Proxy",permalink:"/docs/config_dns_proxy"}},c=[{value:"Basic Configuration",id:"basic-configuration",children:[{value:"Vendor-Specific Information DHCP Options",id:"vendor-specific-information-dhcp-options",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],d={rightToc:c};function l(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Dynamic Host Configuration Protocol")," (",Object(o.b)("strong",{parentName:"p"},"DHCP"),") is a network management protocol used on IP networks whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."),Object(o.b)("p",null,"The DHCP protocol provides a mechanism for unprovisioned hosts to request an IP-address and configuration via broadcast requests. Based on available address pools, a DHCP server can provide a DHCP client a time-limited IP address \u201clease\u201d."),Object(o.b)("p",null,"When running in a HA configuration with two nodes, only one of the nodes will actively operate as a DHCP server for those intererfaces that are shared between both systems. Client lease information is sychronized between nodes to ensure that upon link or node failure, the newly active DHCP server will operate with the same information."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The same interface configured as a DHCP server cannot also be configured for DHCP relay."))),Object(o.b)("p",null,"Naturally the DHCP server cannot itself reside on an interface that is configured as a DHCP client."),Object(o.b)("h2",{id:"basic-configuration"},"Basic Configuration"),Object(o.b)("p",null,"A DHCP Server is configured on the ",Object(o.b)("em",{parentName:"p"},"network-interface")," as a ",Object(o.b)("em",{parentName:"p"},"host-service")," of type ",Object(o.b)("inlineCode",{parentName:"p"},"dhcp-server"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"network-interface    intf4\n    name        intf4\n    global-id   4\n    vlan        4\n    type        external\n    source-nat  false\n    mtu         9216\n\n    address     172.16.4.1\n        ip-address     172.16.4.1\n        prefix-length  24\n\n        host-service   dhcp-server\n            service-type    dhcp-server\n            server-name     128TDhcpServer4\n            max-lease-time  10\n\n            address-pool    172.16.4.161\n                start-address  172.16.4.161\n                domain-server  4.4.4.4\n                domain-name    www.128technology.com\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"The DHCP server supports setting custom options per ",Object(o.b)("em",{parentName:"p"},"dhcp-server")," instance.  Custom options are configured as type-value pairs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"custom             4\n  code   4\n  descriptime time-server\n  value  4.4.4.4\nexit\n")),Object(o.b)("p",null,"Static reservations are supported.  When configuring a static assignment within an address pool, the lease will inherit the attributes of the pool (typically this would be the ",Object(o.b)("em",{parentName:"p"},"router")," and ",Object(o.b)("em",{parentName:"p"},"domain-server"),").  If you desire to override any of the attributes of the DHCP pool, these can be configured uniquely per static assignment."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"address-pool       192.168.0.20\n    start-address      192.168.0.20\n    end-address        192.168.0.200\n    router             192.168.0.1\n    domain-server      192.168.0.1\n\n    static-assignment  192.168.0.5\n        address             192.168.0.5\n        link-layer-address  77:88:CC:00:22:11\n        domain-server       1.1.1.1\n    exit\nexit\n")),Object(o.b)("h3",{id:"vendor-specific-information-dhcp-options"},"Vendor-Specific Information DHCP Options"),Object(o.b)("p",null,"Being deployed as a router requires the 128T platform to successfully interoperate with a myriad of network elements.  These elements can change from customer to customer and use case to use case.  To ensure interoperability between these network elements it can become necessary to support Options and Vendor Extensions on top of base functional support."),Object(o.b)("p",null,"The two supported Vendor-Specific Information are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Vendor-Specific Information Option ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc2132#section-8.4"}),"RFC 2132")),Object(o.b)("li",{parentName:"ol"},"Vendor-Identifying Vendor-Specific Information Option ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc3925#section-4"}),"RFC 3925"))),Object(o.b)("h4",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Two new configuration objects have added to the ",Object(o.b)("inlineCode",{parentName:"p"},"dhcp-server")," object: ",Object(o.b)("inlineCode",{parentName:"p"},"vendor-specific-information")," and ",Object(o.b)("inlineCode",{parentName:"p"},"vendor-indentifying-vendor-specific-information"),"."),Object(o.b)("p",null,"An example ",Object(o.b)("inlineCode",{parentName:"p"},"vendor-specific-information")," DHCP option is shown below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code 72"),", AP Controller Type")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{})," network-interface dhcp-server-intf\n     name dhcp-server-intf\n     ...\n     address 192.168.1.1\n         ...\n         host-service dhcp-server\n             service-type dhcp-server\n             server-name my-dhcp-server\n             max-lease-time 3600\n             address-pool 192.168.1.100\n                 ...\n                 vendor-specific-information 72\n                     code 72\n                     description AP Controller Type\n                     value 1\n                     encoded-type uint8\n                     quantity singular\n                 exit\n                 ...\n             exit\n         exit\n     exit\n exit\n")),Object(o.b)("p",null,"An example of two ",Object(o.b)("inlineCode",{parentName:"p"},"vendor-identifying vendor-specific information")," DHCP options are shown below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code 72"),", Enterprise-Number 122 (SONY), PS Server Addresses"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code 72"),", Enterprise-Number 311 (Microsoft), Enable/Disable xBox Live")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"network-interface dhcp-server-intf\n     name dhcp-server-intf\n     ...\n     address 192.168.1.1\n         ...\n         host-service dhcp-server\n             service-type dhcp-server\n             server-name my-dhcp-server\n             max-lease-time 3600\n             address-pool 192.168.1.100\n                 ...\n                 vendor-identifying-vendor-specific-information 122 72\n                     description AP Controller addresses\n                     code 72\n                     enterprise-number 122\n                     description PS Server Addresses\n                     value 10.1.1.1\n                     value 10.1.1.2\n                     encoded-type ipv4-address\n                     quantity array\n                 exit\n                 vendor-identifying-vendor-specific-information 311 72\n                     description AP Controller addresses\n                     code 72\n                     enterprise-number 311\n                     description Enable/Disable xBox Live\n                     value false\n                     encoded-type boolean\n                     quantity singular\n                 exit\n                 ...\n             exit\n         exit\n     exit\n exit\n")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"From within the PCLI, you can execute ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/cli_reference#show-network-interface-application"}),"show network-interface application")," to show statistics related to the DHCP server as well as any active DHCP client leases."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@gouda.novigrad# show network-interface application\nTue 2020-04-21 15:26:19 UTC\n\n====================================================================================================\n Application Data\n====================================================================================================\n\n Interface:                                    gouda:wan-interface\n state:                                        Interface not configured for any managed application\n\n Interface:                                    gouda:lan-interface\n dhcp-server:\n     kea-status:\n       active (running/success) since Sat 2020-04-11 12:57:23 UTC\n     kea-ctrl-status:\n       active (running/success) since Sat 2020-04-11 12:57:23 UTC\n     metrics:\n         declined-addresses:                   0\n         pkt4-ack-sent:                        1900\n         pkt4-discover-received:               403\n         pkt4-inform-received:                 469\n         pkt4-offer-sent:                      403\n         pkt4-received:                        2317\n         pkt4-release-received:                2\n         pkt4-request-received:                1443\n         pkt4-sent:                            2303\n         reclaimed-declined-addresses:         0\n         reclaimed-leases:                     13\n         subnet[1].assigned-addresses:         24\n         subnet[1].declined-addresses:         0\n         subnet[1].reclaimed-declined-addresses:0\n         subnet[1].reclaimed-leases:           13\n         subnet[1].total-addresses:            181\n     subnets:\n         subnet:\n           current-lease-count:                24\n           current-leases:\n               lease:\n                 client-last-transaction-time: 2020-04-21 15:26:12\n                 hostname:                     homecomtsiphone\n                 hw-address:                   70:3c:69:58:01:28\n                 ip-address:                   192.168.0.36\n                 valid-lifetime:               86400\n           subnet:                             192.168.0.1/24\n\n           ...\n\n     ha-heartbeat:\n       role:                                   primary\n       state:                                  standalone\n\n Interface:                                    gouda:lan-untrusted\n state:                                        Interface not configured for any managed application\n\n Interface:                                    gouda:mgmt-interface\n state:                                        Interface not configured for any managed application\n\nCompleted in 0.76 seconds\n")),Object(o.b)("p",null,"Active client lease management can be seen in the GUI by navigating to Router > Node > DHCP Server.  It is also from within this interface that you can selectively revoke a client lease.\n",Object(o.b)("img",{alt:"config_dhcp_1",src:t(437).default})))}l.isMDXComponent=!0}}]);