(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(204)),o={title:"Tuning BFD Settings",sidebar_label:"Tuning BFD"},s={unversionedId:"howto_tune_bfd",id:"howto_tune_bfd",isDocsHomePage:!1,title:"Tuning BFD Settings",description:'The BFD protocol is defined in RFC 5880, which describes the basics of it\'s state machine. When two 128T routers are configured to be peered together, they will begin to send BFD packets to each other to establish peer reach-ability (UDP port 1280). The state will be "down" until a three-way BFD handshake occurs, in which case the state will transition to become "up."',source:"@site/docs/howto_tune_bfd.md",slug:"/howto_tune_bfd",permalink:"/docs/howto_tune_bfd",version:"current",lastUpdatedAt:1611865251,sidebar_label:"Tuning BFD",sidebar:"docs",previous:{title:"Adding a Trusted Certificate",permalink:"/docs/howto_trusted_ca_certificate"},next:{title:"Application Troubleshooting",permalink:"/docs/ts_applications"}},l=[{value:"128T Peer BFD Settings",id:"128t-peer-bfd-settings",children:[]},{value:"Asynchronous Control Mode",id:"asynchronous-control-mode",children:[]},{value:"Damping",id:"damping",children:[]},{value:"Echo Mode",id:"echo-mode",children:[]},{value:"Visibility into BFD",id:"visibility-into-bfd",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The BFD protocol is defined in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc5880"}),"RFC 5880"),', which describes the basics of it\'s state machine. When two 128T routers are configured to be peered together, they will begin to send BFD packets to each other to establish peer reach-ability (UDP port 1280). The state will be "down" until a three-way BFD handshake occurs, in which case the state will transition to become "up."'),Object(i.b)("p",null,"Throughout the life cycle of the BFD peering relationship between 128T routers, two different kinds of BFD operating modes are used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"BFD asynchronous control mode")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"BFD echo mode"))),Object(i.b)("h3",{id:"128t-peer-bfd-settings"},"128T Peer BFD Settings"),Object(i.b)("p",null,"For a given peering relationship between 128T routers, the following settings are available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  bfd\n      state                       enabled\n      desired-tx-interval         1000\n      required-min-rx-interval    500\n      required-min-echo-interval  1000\n      authentication-type         sha256\n      multiplier                  3\n      link-test-interval          10\n      link-test-length            10\n  exit\n")),Object(i.b)("h3",{id:"asynchronous-control-mode"},"Asynchronous Control Mode"),Object(i.b)("p",null,"Asynchronous control mode messages are used between 128T router peers to establish and maintain peering state. In other words, it is the exchange of these messages that determine if a peer is up or down. These messages are exchanged between router waypoints, with both routers periodically transmitting async mode messages to their peers, as well as expecting to receive and process async mode messages from their peers."),Object(i.b)("p",null,"The following BFD settings influence how a 128T uses async mode messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"desired-tx-interval\nrequired-min-rx-interval\nmultiplier\n")),Object(i.b)("p",null,'These settings are used in a negotiation between two 128T peers. They are used in determining precisely when each router should send, and expect to receive async control mode messages. They are also used in determining the length of time that must pass without receiving messages from a peer, before that peer is deemed to be "down."'),Object(i.b)("p",null,"The below setting on a 128T router communicates to its peer how often (in milliseconds) the router wishes to transmit BFD async mode packets:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"desired-tx-interval\n")),Object(i.b)("p",null,'In other words, "',Object(i.b)("em",{parentName:"p"},"I'd like to send to you at this interval."),'"'),Object(i.b)("p",null,"The below setting on a 128T router communicates to it's peer the minimum interval (in milliseconds) between BFD async mode packets that it is capable of receiving:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"required-min-rx-interval\n")),Object(i.b)("p",null,'In other words, "',Object(i.b)("em",{parentName:"p"},"don't send to me at less than this interval."),'"'),Object(i.b)("p",null,"Once the 128T routers establish communication with each other, each peer gains knowledge of the intervals their peer wishes to transmit async control mode messages to them at, as well as the minimum intervals the peer is able to receive at. Based on this knowledge, they will each begin to transmit async control mode messages at either their own ",Object(i.b)("inlineCode",{parentName:"p"},"desired-tx-interval")," time or their peers ",Object(i.b)("inlineCode",{parentName:"p"},"required-min-rx-interval")," time, whichever is greater."),Object(i.b)("p",null,'The below setting goes into a calculation for a 128T router to determine how long it should go without receiving an async mode packet from it\'s peer, before it declares it "down":'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"multiplier\n")),Object(i.b)("p",null,"Initially this time is effectively the ",Object(i.b)("inlineCode",{parentName:"p"},"multiplier")," times the router's own ",Object(i.b)("inlineCode",{parentName:"p"},"required-min-rx-interval"),". However, once the router has learned the ",Object(i.b)("inlineCode",{parentName:"p"},"desired-tx-interval")," of its peer, it will then understand the interval it should expect to receive messages from the peer. At that point, it will take the greater of either it's own ",Object(i.b)("inlineCode",{parentName:"p"},"required-min-rx-interval"),", or the peer's ",Object(i.b)("inlineCode",{parentName:"p"},"desired-tx-interval")," it has learned, and multiply that value by its ",Object(i.b)("inlineCode",{parentName:"p"},"multiplier")," to become the length of time without receiving messages before it deems the peer down."),Object(i.b)("p",null,'In other words, "',Object(i.b)("em",{parentName:"p"},"if I don't receive a message in the amount of time that is my multiplier times either my configured ",Object(i.b)("inlineCode",{parentName:"em"},"required-min-rx-interval"),", or my peer's ",Object(i.b)("inlineCode",{parentName:"em"},"desired-tx-interval")," that I've learned (whichever is greater), I'll deem the peer to be down."),'"'),Object(i.b)("p",null,'If both router peers use the default settings above, you should expect to see them transmit async control mode messages every 1000ms, or 1s. If one or both peers do not receive an async control mode packet in 3x1000ms (3s), it will consider the peer to be "down."'),Object(i.b)("h3",{id:"damping"},"Damping"),Object(i.b)("p",null,"BFD is used to detect path failures between routers. BFD notifies the load-balancer and other peer-path observers when there is packet loss between peering routers, or if the link fails. In many cases it becomes critical to minimize session failovers to prevent the session from oscillating between paths, to reduce unnecessary changes to routing tables, prevent consumption of valuable system resources, and avert needless convergence impact. 128T routers have a hold down timer that can be configured to prevent BFD from making immediate updates until the timer has expired. This method works well when the characteristic of the link is well known and a predetermined value can be assigned to the timer."),Object(i.b)("p",null,"In cases where link characteristics change or are unpredictable, the 128T router can dynamically adjust BFD notification periods and reduce excessive notifications to clients. This prevents unnecessary instability in the network, minimizing unnecessary failovers and flapping links. "),Object(i.b)("p",null,"Simple BFD damping (hold-down timer) is enabled by default, and can be disabled by an administrator. Dynamic BFD Damping is enabled by an administrator using the ",Object(i.b)("inlineCode",{parentName:"p"},"dynamic-damping")," configuration field. "),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Initial Hold Down Timer:")," The minimum amount of time BFD must wait before beginning notifications. The default is 5 seconds, and can be configured to be any value lower than the ",Object(i.b)("inlineCode",{parentName:"p"},"maximum-hold-down-time"),". The hold-down-timer will not accept a value of 0. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maximum Hold Down Timer:")," The maximum amount of time that BFD must wait before it begins notifications. This timer only applies when BFD damping is enabled. The default value for this is 3600 s (or 1 hour). The network administrator may configure this to be any value higher than the initial",Object(i.b)("inlineCode",{parentName:"p"},"hold-down-time"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dynamic Damping:")," Disabled by default. When enabled, the 128T router uses the ",Object(i.b)("inlineCode",{parentName:"p"},"hold-down-time")," and ",Object(i.b)("inlineCode",{parentName:"p"},"maximum-hold-down-time")," parameters to dynamically adjust the damping timer to ensure that excessive BFD flaps are not affecting the system negatively. This prevents the effect of oscillations, or flapping, caused by BFD and underperforming (or volatile) links. It ensures stability of the entire network and reduces the events requiring the network administrator's attention."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Element"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parent Configuration"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hold-down-time"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BFD (router, peer, neighborhood, adjacency)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Seconds"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: 5 Range: 1-300")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dynamic-damping"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BFD (router, peer, neighborhood, adjacency)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enumeration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enabled/Disabled Default: Disabled")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"maximum-hold-down-time"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BFD (router, peer, neighborhood, adjacency)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Seconds"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default: 3600 (1 hour) Only configurable when dynamic-damping is enabled. Must be greater than hold-down-time.")))),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"config authority\n    router Router1\n        bfd\n            State enabled\n            Hold-down-time 10\n            Damping Enabled\n            Maximum-hold-down-time 60\n        Peer foo\n            Bfd\n                Hold-down-time 3\n                Damping disabled\n        Node bar\n            Device-interface dev1\n                Network-interface net1\n                    Neighborhood n1\n                        Bfd\n                            Hold-down-time 30\n                            Damping Enabled\n                            Maximum-hold-down-time 600\n                    Adjacenency 1.1.1.1 peer1\n                        Bfd\n                            Hold-down-time 300\n                            Damping Disabled\n")),Object(i.b)("p",null,"If damping is disabled, the configured ",Object(i.b)("inlineCode",{parentName:"p"},"hold-down-time")," will be used with the current existing ",Object(i.b)("inlineCode",{parentName:"p"},"hold-down-time")," logic. For additional information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_reference_guide#bfd-router"}),"BFD Router")," in the Configuration Element Reference Guide."),Object(i.b)("h3",{id:"echo-mode"},"Echo Mode"),Object(i.b)("p",null,"Echo mode messages are used between 128T router peers to measure path quality, including jitter, packet loss, and latency (JPL). Echo mode messages are transmitted from one router to its peer, which simply echoes them back to the originating router. In contrast to async control mode messages, which are conversations between peer BFD agents, echo mode messages are one routers' conversation with itself via its router peer."),Object(i.b)("p",null,"The below sets how often (in seconds) a 128T router will perform a test of path quality using BFD echo mode messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"link-test-interval\n")),Object(i.b)("p",null,"The below sets the number of echo mode packets to be used when performing a path quality test using BFD echo mode messages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"link-test-length\n")),Object(i.b)("p",null,"The below sets the minimum amount of time between echo packets that a particular peer is able to handle. This gets communicated in BFD messages as a means of telling a peer what it can handle, and is useful as a means of a router preventing a peer from overloading it with echo mode packets."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"required-min-echo-interval\n")),Object(i.b)("p",null,"If both router peers use the default settings above, you should expect to see each router independently perform echo mode tests every 10s, consisting of 10 echo mode packets sent to its peer in rapid succession. Upon receipt, the peer will echo them back to the originating router, which will measure JPL."),Object(i.b)("h3",{id:"visibility-into-bfd"},"Visibility into BFD"),Object(i.b)("p",null,'Visibility into the status of the BFD async control mode can be seen as "up" or "down" in PCLI commands such as the one below. They can also be seen in the topology view of the GUI and alarms are generated whenever a BFD detects paths are down:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"show peers\n")),Object(i.b)("p",null,"Visibility into the measured results of BFD echo mode can be seen on a per service-route basis using the one below. This shows data from a running average of multiple successive echo mode tests:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"show load-balancer\n")),Object(i.b)("p",null,"On a per-peer basis, this command shows results from echo mode measurements, however, this is NOT the same running average as data seen in ",Object(i.b)("inlineCode",{parentName:"p"},"show load-balancer"),"  it is simply the raw data resulting from the last time a test was performed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"show stats bfd by-peer-path\n")))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);