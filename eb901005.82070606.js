(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(188)),o={title:"PCLI Packet Capture"},c={unversionedId:"ts_packet_capture",id:"ts_packet_capture",isDocsHomePage:!1,title:"PCLI Packet Capture",description:"PCAPs are one of the most useful tools to debug traffic issues on a 128T Router(s) as well as wider networking issues. The nature of troubleshooting is that it is transitory; once the problem has been identified, the system state should be restored to its previous state (or possibly with necessary modifications as a result of the troubleshooting exercise). This guide walks through the approaches for applying dynamic capture filters to the 128T Networking Platform.",source:"@site/docs/ts_packet_capture.md",slug:"/ts_packet_capture",permalink:"/docs/ts_packet_capture",version:"current",lastUpdatedAt:1594066878,sidebar:"docs",previous:{title:"MAC Address Uniqueness on 128T",permalink:"/docs/ts_mac_uniqueness"},next:{title:"T1 Troubleshooting",permalink:"/docs/ts_t1_troubleshooting"}},s=[{value:"Packet Capture per Device Interface",id:"packet-capture-per-device-interface",children:[{value:"create capture-filter",id:"create-capture-filter",children:[]},{value:"delete capture-filter",id:"delete-capture-filter",children:[]},{value:"show capture-filter",id:"show-capture-filter",children:[]}]},{value:"Selective Packet Capture",id:"selective-packet-capture",children:[{value:"Default Mode",id:"default-mode",children:[]},{value:"Creating Selective Packet Capture",id:"creating-selective-packet-capture",children:[]},{value:"Removing Selective Packet Capture",id:"removing-selective-packet-capture",children:[]},{value:"Showing Selective Packet Captures",id:"showing-selective-packet-captures",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PCAPs are one of the most useful tools to debug traffic issues on a 128T Router(s) as well as wider networking issues. The nature of troubleshooting is that it is transitory; once the problem has been identified, the system state should be restored to its previous state (or possibly with necessary modifications as a result of the troubleshooting exercise). This guide walks through the approaches for applying dynamic capture filters to the 128T Networking Platform."),Object(i.b)("h2",{id:"packet-capture-per-device-interface"},"Packet Capture per Device Interface"),Object(i.b)("p",null,"Enabling packet capture through configuration, while useful for defining filters that will survive a reboot, can pose challenges while debugging. Pending configuration changes may exist, requiring reverting the configuration so as to apply a capture filter. Thankfully there exists a dynamic way to apply capture filters to a device interface that does not require making configuration changes."),Object(i.b)("p",null,"When using dynamic capture filters, the following rules apply:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creating or removing a dynamic capture filter does not persist and will not survive a restart of the 128T software"),Object(i.b)("li",{parentName:"ul"},"Interactions exist with configured capture filters",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If capture filters exist within the configuration and a configuration change happens that does not impact static capture filters, the configuration change will not affect dynamic capture filters"),Object(i.b)("li",{parentName:"ul"},"If static capture filters exist within the configuration, and if a configuration change modifies the static capture filters, all dynamic capture filters will be removed")))),Object(i.b)("p",null,"Three commands provide the capabilities to manage dynamic capture filters."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/cli_reference#create-capture-filter"}),"create capture-filter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/cli_reference#delete-capture-filter"}),"delete capture-filter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/cli_reference#show-capture-filters"}),"show capture-filter"))),Object(i.b)("h3",{id:"create-capture-filter"},"create capture-filter"),Object(i.b)("p",null,"Dynamic capture filters use Berkeley Packet Filter (BPF) syntax, the same as statically configured capture filters. If the syntax is not correct, the filter will be rejected. Please refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://biot.com/capstats/bpf.html"}),"online BPF documentation")," for syntax help. If a capture filter already exists, the create operation will be ignored."),Object(i.b)("p",null,"The syntax for creating a capture filter can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> create capture-filter\n  usage: capture-filter [force] [router <router>] [node <node>]\n                         device-interface <device-interface> <capture-filter>\n  Creates capture-filter from highway at the specified node\n  keyword arguments:\n  device-interface    The device interface on which to create the capture\n                      filter\n  force               Skip confirmation prompt\n  node                The node on which to create the capture filter\n  router              The router on which to create the capture filter\n  positional arguments:\n  capture-filter      The capture-filter to create (Uses BPF syntax)\n")),Object(i.b)("h3",{id:"delete-capture-filter"},"delete capture-filter"),Object(i.b)("p",null,"This command can be used to remove dynamic capture filters as well as temporarily removing any static capture filtered added through configuration.  The command will return an error if the capture filter is not present."),Object(i.b)("p",null,"The syntax for removing a capture filter can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> delete capture-filter\n  usage: capture-filter [force] [router <router>] [node <node>]\n                        device-interface <device-interface> <capture-filter>\n  Deletes capture-filter from highway at the specified node\n  keyword arguments:\n  device-interface    The device interface on which to delete the capture\n                      filter\n  force               Skip confirmation prompt\n  node                The node on which to remove the capture filter\n  router              The router on which to remove the capture filter\n\n  positional arguments:\n  capture-filter    The capture-filter to remove (Uses BPF syntax)\n")),Object(i.b)("p",null,"The keyword ",Object(i.b)("inlineCode",{parentName:"p"},"all")," can be used as an argument to ",Object(i.b)("inlineCode",{parentName:"p"},"device-interface")," to remove all capture filters on a particular node and router.  Omitting ",Object(i.b)("inlineCode",{parentName:"p"},"capture-filter")," from the command will remove all capture filters for a specified device interface."),Object(i.b)("h3",{id:"show-capture-filter"},"show capture-filter"),Object(i.b)("p",null,"In order to display both static and dynamic capture filters, the ",Object(i.b)("em",{parentName:"p"},"show capture-filters")," PCLI command will reflect the current state capture filters."),Object(i.b)("p",null,"The syntax for displaying static and dynamic capture filters can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> show capture-filters\n  usage: capture-filters [device-interface <device-interface>]\n                         [force] [router <router>] [node <node>]\n  Show active capture-filters\n  keyword arguments:\n  device-interface    Device interface on which to show capture-filters\n  force               Skip confirmation prompt\n  node                The node on which to show capture-filters\n  router              The router on which to show capture-filters\n")),Object(i.b)("h2",{id:"selective-packet-capture"},"Selective Packet Capture"),Object(i.b)("p",null,"While a powerful tool, it can be difficult to isolate a particular set of packets pertaining to a service using device-interface packet captures; especially if the session that is being tracked is an SVR session, where the IPs and L4 ports will be NATed. To simplify the troubleshooting effort, selective packet captures provides filtering controls beyond what is capable with BPF, and affords the administrator the ability to match traffic by service. A powerful capability of this feature is to apply a trace not only on the ingress node where the capture is defined, but also triggering traces on every subsequent 128T node the session traverses."),Object(i.b)("p",null,"Selective capture can operate in one of two modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"local-only")," mode will trigger a capture only on the node to which the command is issued"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"default")," mode will propagate the capture to all subsequent 128T nodes the session traverses")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Much like per device interface packet captures, selective packet captures will not survive a restart of the 128T."))),Object(i.b)("h3",{id:"default-mode"},"Default Mode"),Object(i.b)("p",null,"There are four locations within the 128T wherein capturing packets will provide full visibility into the behavior of a packet."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Forward flow of a session arriving on the ingress interface (before any NATing has been applied)"),Object(i.b)("li",{parentName:"ol"},"Forward flow of a session leaving the egress interface (post NAT with decrypted metadata)"),Object(i.b)("li",{parentName:"ol"},"Reverse flow of a session arriving on the egress interface"),Object(i.b)("li",{parentName:"ol"},"Reverse flow of a session leaving the ingress interface")),Object(i.b)("p",null,"When creating a selective capture filter on the LAN interface, sessions will be tagged with an action that will capture all packets for the session at each of the four points listed above. Additionally, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/concepts_metadata"}),"metadata")," will indicate to subsequent 128T nodes/routers to enable the packet capture for this session. Each 128T node will install capture filters in each of the four capture points for the same session. A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tcpdump.org/pcap.html"}),"PCAP")," file will be created on each node, containing the name of the service captured."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Typical Network Diagram",src:r(738).default})),Object(i.b)("p",null,"Referencing the above diagram, a capture on node1.routerA will create PCAPs for a single session on each of the 12 points shown."),Object(i.b)("h4",{id:"local-mode"},"Local Mode"),Object(i.b)("p",null,"When creating selective packet captures in ",Object(i.b)("em",{parentName:"p"},"local-mode"),', a user can initiate a capture filter, targeting a particular node. No other "downstream" nodes will capture this session.'),Object(i.b)("h3",{id:"creating-selective-packet-capture"},"Creating Selective Packet Capture"),Object(i.b)("p",null,"Executing ",Object(i.b)("inlineCode",{parentName:"p"},"create session-capture")," will create a file with the name ",Object(i.b)("inlineCode",{parentName:"p"},"128T_service_<service-name>.pcap")," on each node the session traverses. Additionally, ",Object(i.b)("inlineCode",{parentName:"p"},"INFO")," level logging for session setup and tear down will be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"serviceArea.log"),". All sessions captured for the same service, even if they match more than one filter will be added to the same file and the \u201c.pcap\u201d file."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There is no mechanism to stop a capture for an existing session once the capture is in progress. Each session defaults to capturing 100 packets."))),Object(i.b)("p",null,"The syntax for creating a selective capture filter can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> create session-capture\nusage: session-capture [source-ip <source-ip>] [source-port <source-port>] [destination-ip <destination-ip>] [destination-port <destination-port>] [protocol <protocol>] [session-count\n                       <session-count>] [packet-count <packet-count>] [local-only] [force] [router <router>] [node <node>] service <service>\n\nCreates a session capture at the specified node for service\n\nWhen destination or source IPs are not specified, any IP will be matched.\nWhen destination or source port is not provided, port range of 0-65535 is used.\nWhen protocol is not provided, all protocols will be matched.\nWhen session-count is not specified, default will be unlimited.\nWhen packet-count is not specified, default is 100 packets in each direction for each session matched.\n\nkeyword arguments:\ndestination-ip      The destination IP address/prefix to match\ndestination-port    The destination port to match (can be a range)\nforce               Skip confirmation prompt\nlocal-only          Session capture is local to the node\nnode                The ingress node on which to create the session capture\npacket-count        The number of packets to capture per session, in each direction\nprotocol            The protocol to match (in decimal or by name, eg 'tcp')\nrouter              The router on which to create the session capture\nservice             The service on which to create the session capture\nsession-count       The number of sessions to capture\nsource-ip           The source IP address/prefix to match\nsource-port         The source port to match (can be a range)\n")),Object(i.b)("h3",{id:"removing-selective-packet-capture"},"Removing Selective Packet Capture"),Object(i.b)("p",null,"The selective packet capture can be removed by specifying the filter or by the uniquely generated capture id which is displayed in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#showing-selective-packet-captures"}),"show command"),":"),Object(i.b)("p",null,"The syntax for removing a selective capture filter can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> delete session-capture\nusage: session-capture [source-ip <source-ip>] [source-port <source-port>] [destination-ip <destination-ip>] [destination-port <destination-port>] [protocol <protocol>] [session-count\n                       <session-count>] [packet-count <packet-count>] [local-only] [force] [router <router>] [node <node>] service <service>\n\nDeletes session-capture from selected service\n\nkeyword arguments:\ndestination-ip      The destination IP address/prefix to match\ndestination-port    The destination port to match (can be a range)\nforce               Skip confirmation prompt\nlocal-only          Session capture is local to the node\nnode                The node on which to remove the session-capture filter\npacket-count        The number of packets to capture per session, in each direction\nprotocol            The protocol to match (in decimal or by name, eg 'tcp')\nrouter              The router on which to remove the session-capture filter\nservice             The service on which to create the session capture\nsession-count       The number of sessions to capture\nsource-ip           The source IP address/prefix to match\nsource-port         The source port to match (can be a range)\n\nsubcommands:\nby-id    Deletes session-capture from selected service\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> delete session-capture by-id\nusage: by-id [force] [router <router>] [node <node>] service <service> <capture-id>\n\nDeletes session-capture from selected service\n\nkeyword arguments:\nforce      Skip confirmation prompt\nnode       The node on which to remove the session-capture filter\nrouter     The router on which to remove the session-capture filter\nservice    The service on which to create the session capture\n\npositional arguments:\ncapture-id    The session-capture to remove.\n")),Object(i.b)("p",null,"If the selective capture is created for a limited number of sessions, once all the sessions have been captured, the capture will remove itself. Issuing a command to remove the capture will stop any new captures for new sessions on that service and any session that is still active will continue capturing until the packet count reaches the specified or default termination count."),Object(i.b)("h3",{id:"showing-selective-packet-captures"},"Showing Selective Packet Captures"),Object(i.b)("p",null,"The syntax for displaying selective packet capture filters can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> show session-captures\nusage: session-captures [{id <id> | detail}] [service <service>] [force] [router <router>] [node <node>]\n\nShow active session-captures\n\nkeyword arguments:\ndetail     display session-captures in detail\nforce      Skip confirmation prompt\nid         The session-capture to show in detail\nnode       The node on which to show session-captures\nrouter     The router on which to show session-captures\nservice    Service for which to show session-captures\n")),Object(i.b)("p",null,"The output from the show command will display currently enabled capture filters as well as the session IDs for those sessions that were captured.  With no parameters, the command will display a summary of all captures for all services.  Below is a sample output, with two captures for service \u201cwest\u201d, and one capture for service \u201ceast\u201d, with one active session being captured."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"========= ==== =================== =================== ========== ==================== =================\n Service   Id   Source              Destination         Protocol   Remaining Sessions   Active Sessions\n========= ==== =================== =================== ========== ==================== =================\n west       2   0.0.0.0/0:0-65535   0.0.0.0/0:0-65535   tcp        unlimited                          0\n west       5   0.0.0.0/0:0-65535   0.0.0.0/0:0-65535   icmp       unlimited                          1\n east       1   0.0.0.0/0:0-65535   0.0.0.0/0:0-65535   icmp       unlimited                          0\n")),Object(i.b)("p",null,"If you specify the service and capture ID via arguments, you will see details of the sessions being captured.  In the above example you can see that service \u201cwest\u201d has an active session on capture ",Object(i.b)("inlineCode",{parentName:"p"},"5"),".  The detailed view can be seen below, where it shows session \u201c1640858e-fe6a-44cd-b38a-7d479a68418\u201d is actively being captured:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),">> show session-captures service west id 5\nMon 2020-06-08 11:32:57 EDT\n\n\n=============================================\n Router: Novigrad\n=============================================\n ===========================================\n  Service: west\n  Id:      5\n ===========================================\n  Filter:\n    source-ip:        0.0.0.0/0\n    source-port:      0-65535\n    destination-ip:   0.0.0.0/0\n    destination-port: 0-65535\n    protocol:         icmp\n    packet-count:     100\n    session-count:    unlimited\n\n  Sessions:\n    active:           1\n      1640858e-fe6a-44cd-b38a-7d479a68418\n    remaining:        unlimited\n")))}p.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,b=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},738:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ts_packet_capture_selective_capture-a7d0ffc17c76e290192dabd14883ee9c.png"}}]);