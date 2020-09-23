(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(188)),o={title:"Using 128T as an NTP Server",sidebar_label:"Branch NTP Service"},c={unversionedId:"bcp_using_128T_as_ntp_server",id:"bcp_using_128T_as_ntp_server",isDocsHomePage:!1,title:"Using 128T as an NTP Server",description:"In many hub-and-spoke deployments, devices at the spoke locations are accustomed to using either public services (such as time.nist.gov or pool.ntp.org) or self-hosted NTP services as their clock source. Rather than carry this traffic on the WAN, this document demonstrates how 128T can provide NTP services for devices at the branch, avoiding unnecessary WAN traffic, and ensuring that all branch devices use a consistent clock source.",source:"@site/docs/bcp_using_128T_as_ntp_server.md",slug:"/bcp_using_128T_as_ntp_server",permalink:"/docs/bcp_using_128T_as_ntp_server",version:"current",lastUpdatedAt:1600363329,sidebar_label:"Branch NTP Service",sidebar:"docs",previous:{title:"AT&T AVPN Configuration",permalink:"/docs/bcp_att_avpn_configuration"},next:{title:"Conductor Deployment Patterns",permalink:"/docs/bcp_conductor_deployment"}},s=[{value:"Overview",id:"overview",children:[{value:"Configuring Devices to use the 128T as an NTP Server",id:"configuring-devices-to-use-the-128t-as-an-ntp-server",children:[]},{value:"Capturing all Inbound NTP",id:"capturing-all-inbound-ntp",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In many hub-and-spoke deployments, devices at the spoke locations are accustomed to using either public services (such as ",Object(i.b)("inlineCode",{parentName:"p"},"time.nist.gov")," or ",Object(i.b)("inlineCode",{parentName:"p"},"pool.ntp.org"),") or self-hosted NTP services as their clock source. Rather than carry this traffic on the WAN, this document demonstrates how 128T can provide NTP services for devices at the branch, avoiding unnecessary WAN traffic, and ensuring that all branch devices use a consistent clock source."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All of the recommendations in this document presume that the administrator has already set up the 128T to clock off of an upstream source."))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"There are two, somewhat complementary approaches to using a branch 128T as an NTP server:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Issuing the 128T's address as the NTP server in DHCP repsonses and/or configuring devices to use the 128T's LAN interface as an NTP server"),Object(i.b)("li",{parentName:"ul"},"Capturing all inbound NTP (using a service that captures 123/UDP), and handling that traffic locally")),Object(i.b)("h3",{id:"configuring-devices-to-use-the-128t-as-an-ntp-server"},"Configuring Devices to use the 128T as an NTP Server"),Object(i.b)("p",null,"This is straightforward configuration for both the end devices as well as for the 128T itself. In the example below, we will assume that the 128T's LAN IP address is ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.1.1"),". Consider the following configuration excerpt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-config",metastring:"{19,24-29}","{19,24-29}":!0}),'node  node1\n    name              node1\n    device-interface  lan\n        name               lan\n        network-interface  lan0\n            name                   lan0\n            description            "Branch LAN"\n            address                192.168.1.1\n                ip-address     192.168.1.1\n                prefix-length  24\n                host-service   dhcp-server\n                    service-type  dhcp-server\n                    address-pool  192.168.1.100\n                        start-address      192.168.1.100\n                        end-address        192.168.1.199\n                        router             192.168.1.1\n                        domain-server      1.1.1.1\n                        domain-server      1.0.0.1\n                        ntp-server         192.168.1.1\n                    exit\n                exit\n                host-service   custom\n                    service-type   custom\n                    transport      udp\n                        protocol    udp\n                        port-range  123\n                            start-port  123\n                        exit\n                    exit\n                    access-policy  trusted\n                        source  trusted\n                    exit\n                    access-policy  guest\n                        source  guest\n                    exit\n                    access-policy  corporate\n                        source  corporate\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n')),Object(i.b)("p",null,"There are two principle components to this configuration excerpt, with respect to NTP treatment: the ",Object(i.b)("inlineCode",{parentName:"p"},"host-service")," specifying NTP (using 123/UDP), and the ",Object(i.b)("inlineCode",{parentName:"p"},"ntp-server")," configuration within the ",Object(i.b)("inlineCode",{parentName:"p"},"address-pool"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ntp-server")," configuration will offer the 128T's LAN interface (192.168.1.1) as the NTP server to use when issuing DHCP leases."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Any devices that have static IP assignments will need to have the NTP server configured accordingly."))),Object(i.b)("p",null,"The custom ",Object(i.b)("inlineCode",{parentName:"p"},"host-service")," configuration shown here will direct any traffic sent to 192.168.1.1:123/UDP to the Linux host subsystem on the 128T device, where the ",Object(i.b)("inlineCode",{parentName:"p"},"ntpd")," running on the host platform will reply. As seen in the configuration example above, it is important to ensure that every ",Object(i.b)("inlineCode",{parentName:"p"},"tenant")," population that can access that LAN interface is allowed access to the ",Object(i.b)("inlineCode",{parentName:"p"},"host-service")," through the use of an ",Object(i.b)("inlineCode",{parentName:"p"},"access-policy")," statement. (In our example, we have three tenants on the LAN: ",Object(i.b)("em",{parentName:"p"},"trusted"),", ",Object(i.b)("em",{parentName:"p"},"guest"),", and ",Object(i.b)("em",{parentName:"p"},"corporate"),")."),Object(i.b)("h3",{id:"capturing-all-inbound-ntp"},"Capturing all Inbound NTP"),Object(i.b)("p",null,"An alternative/complementary approach to assigning the 128T's LAN interface is to \"catch\" all inbound traffic for 123/UDP and forcibly redirect it to the 128T's NTP process. This is necessary in many occasions when the NTP server for a given client platform on the LAN is hardcoded, as is the case for many small embedded platforms and Internet of Things (IoT) devices."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This configuration will catch ",Object(i.b)("em",{parentName:"p"},"all"),' inbound NTP. If you have devices at the branch that require precision timekeeping from external sources, adjust your service definitions and/or your tenant definitions accordingly to ensure the traffic does not match the "catch-all" service.'))),Object(i.b)("p",null,"The configuration will match all traffic arriving based solely on its port and protocol, and send it to the 128T's Linux subsystem. Here is a relevant configuration excerpt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.fiedler# show config running authority service ntp-iot\nconfig\n    authority\n        service  inbound-ntp\n            name                  inbound-ntp\n            applies-to           router-group\n                type        router-group\n                group-name  branches\n            exit\n            description           "Local NTP"\n            scope                 private\n            transport             udp\n                protocol    udp\n                port-range  123\n                    start-port  123\n                    end-port    123\n                exit\n            exit\n            address               0.0.0.0/0\n            access-policy         trusted\n                source      trusted\n            exit\n            access-policy         guest\n                source      guest\n            exit\n            access-policy         corporate\n                source      corporate\n            exit\n            share-service-routes  false\n        exit\n    exit\nexit\n')),Object(i.b)("p",null,"This configuration will match any destination IP address (",Object(i.b)("inlineCode",{parentName:"p"},"0.0.0.0/0"),") for NTP (123/UDP). As in the previous example, we've added ",Object(i.b)("inlineCode",{parentName:"p"},"access-policy")," statements for the three tenants that we see on the LAN segments at our branch locations. Likewise, we've added a ",Object(i.b)("inlineCode",{parentName:"p"},"applies-to")," configuration block, to ensure that this service is only pushed down to the routers we've tagged as belonging to the ",Object(i.b)("inlineCode",{parentName:"p"},"branches")," group."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Do not also add the ",Object(i.b)("inlineCode",{parentName:"p"},"_internal_")," tenant to the ",Object(i.b)("inlineCode",{parentName:"p"},"access-policy")," list, as this is (typically) the tenant that the 128T will use when sending traffic outbound to external NTP servers. We want to ensure the 128T \u2013 and only the 128T \u2013 clocks off of an external source."))),Object(i.b)("p",null,"On each router, we'll configure a ",Object(i.b)("inlineCode",{parentName:"p"},"service-route")," that looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@labsystem1.fiedler# show config runn authority router branch1 service-route rte_inbound-ntp\n\nconfig\n    authority\n        router  branch1\n            name           branch1\n            service-route  rte_inbound-ntp\n                name          rte_inbound-ntp\n                service-name  inbound-ntp\n                nat-target    169.254.127.127\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"service-route")," leverages ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_linux_host_networking"}),"Linux host networking")," to send packets to ",Object(i.b)("inlineCode",{parentName:"p"},"ntpd")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"kni254")," interface present on all 128T devices."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"Avoiding unnecessary WAN traffic is always a welcome change, Using the 128T to provide NTP clock to devices at the branch ensures a consistent time source for a collection of devices that are logically grouped already."))}l.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);