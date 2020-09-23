(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),i=n(6),s=(n(0),n(188)),a={title:"Metrics"},r={unversionedId:"concepts_metrics",id:"concepts_metrics",isDocsHomePage:!1,title:"Metrics",description:"When querying the STATS API, you will notice the resolution of the data changes over time.  This is due to the downsampling that occurs.  Downsampling is performed to reduce the amount of data persisted to disk, ultimately purging the data from the system after a period of time.",source:"@site/docs/concepts_metrics.md",slug:"/concepts_metrics",permalink:"/docs/concepts_metrics",version:"current",lastUpdatedAt:1592651776,sidebar:"docs",previous:{title:"128T Metadata",permalink:"/docs/concepts_metadata"},next:{title:"Intra- and Inter-System Communication",permalink:"/docs/concepts_machine_communication"}},c=[{value:"In Memory Metrics",id:"in-memory-metrics",children:[]},{value:"Session Establishment Metrics",id:"session-establishment-metrics",children:[{value:"Time to Establish",id:"time-to-establish",children:[]},{value:"Sessions Reached Establishment",id:"sessions-reached-establishment",children:[]},{value:"Sessions Timed Out Before Establishment",id:"sessions-timed-out-before-establishment",children:[]},{value:"Destination Unreachable",id:"destination-unreachable",children:[]},{value:"Session Close Before TCP Establishment",id:"session-close-before-tcp-establishment",children:[]},{value:"Session Close Before TLS Establishment",id:"session-close-before-tls-establishment",children:[]},{value:"Configuration",id:"configuration",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"When querying the ",Object(s.b)("inlineCode",{parentName:"p"},"STATS")," API, you will notice the resolution of the data changes over time.  This is due to the downsampling that occurs.  Downsampling is performed to reduce the amount of data persisted to disk, ultimately purging the data from the system after a period of time."),Object(s.b)("p",null,"The system samples data every 5 seconds.  The sampling interval is configurable under ",Object(s.b)("inlineCode",{parentName:"p"},"authority > router > system > metrics > sample-period <value>"),"."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"It is not recommended to change the sample-period.  Increasing the value reduces the resolution of the information collected.  Decreasing the value will create a greater computational load on the system. The software has been tuned to operate optimally at a sampling interval of 5 seconds."))),Object(s.b)("p",null,"The full resolution of 5 second sampled data is kept for 1 hour.",Object(s.b)("br",null),"\nEvery five minutes, the sampled data is aggregated.  The 5 minute values are kept for a day.",Object(s.b)("br",null),"\nEvery hour the 5 minute values are aggregated.  The 1 hour values are kept for 6 months.",Object(s.b)("br",null),"\nAfter 6 months, the data is purged from disk.",Object(s.b)("br",null)),Object(s.b)("h3",{id:"in-memory-metrics"},"In Memory Metrics"),Object(s.b)("p",null,"Not all metrics are persisted to disk and subject to downsampling. When executing ",Object(s.b)("inlineCode",{parentName:"p"},"show stats")," commands utilizing the ",Object(s.b)("em",{parentName:"p"},"since")," argument, the command will report that the requested data will be unavailable."),Object(s.b)("p",null,"An Example of ",Object(s.b)("inlineCode",{parentName:"p"},"show stats")," command using a ",Object(s.b)("inlineCode",{parentName:"p"},"since")," argument is shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@node.router# show stats ipfix since 5:30\nTue 2020-03-15 13:07:06 UTC\nWARNING: Some metrics are not available historically. Their current values will be displayed.\nRetrieving statistics...\n\nSince: 2020-03-15 05:30:00\n\nIPFIX Stats\n-----------\n\n======================= ======== =======\n Metric                  Node     Value\n======================= ======== =======\n record-export-rate      sydney       0\n time-per-export         sydney       0\n time-per-session        sydney       0\n total-generation-time   sydney       0\n total-records           sydney       0\n\nCompleted in 0.06 seconds\n")),Object(s.b)("h2",{id:"session-establishment-metrics"},"Session Establishment Metrics"),Object(s.b)("p",null,"A key indicator of application performance is the time it takes to establish the TCP session between client and server.  This is effectively the time it takes to get to the first data packet between endpoints.  This metric is more telling than packet transmission rates because it is directional and end to end.  Importantly, this information can be used as a measure of SLA to influence path selection."),Object(s.b)("p",null,"Session establishment metrics have been created and are gathered on a per service, per interface, per destination, per traffic-class basis.  This level of granularity provides surgically accurate information on how the network treatment and performance is impacting application behavior.  A capability that is unique only to the 128T router."),Object(s.b)("p",null,"To add more context to the sessions traversing the 128T router, the newly added session establishment metrics detailed below will be collected in protocol based buckets ",Object(s.b)("em",{parentName:"p"},"TCP"),", ",Object(s.b)("em",{parentName:"p"},"UDP"),", ",Object(s.b)("em",{parentName:"p"},"ICMP"),", and ",Object(s.b)("em",{parentName:"p"},"TLS"),".  Each protocol has its own determination of what qualifications need to be met for a session to become ",Object(s.b)("em",{parentName:"p"},"established"),".  In turn there is protocol/application-specific handling of each of these, defined by what is considered ",Object(s.b)("em",{parentName:"p"},"established"),".  For the remainder of the document, the following definitions of establishment are implied per protocol:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"TCP")," - session has seen an acknowledgement to the first packet after the TCP handshake that contains payload"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"UDP")," - session has seen a packet in the reverse direction"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ICMP")," - session has seen a packet in the reverse direction"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"TLS")," - session has seen an acknowledgement to the first packet after the TLS handshake that contains payload")),Object(s.b)("h3",{id:"time-to-establish"},"Time to Establish"),Object(s.b)("p",null,"This is a grouping of 3 different metrics: min, max, and mean.  The time from session start to when it reaches the established state as defined above per-protocol.  The exception is for TLS, the start time will be at TCP establishment instead of session start."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp time-to-establishment\nTue 2020-03-31 20:33:26 UTC\nRetrieving statistics...\n\ntime-to-establishment\n---------------------\n\n======== =========== ========= =================== ==================== =============== =======\n Metric   Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n======== =========== ========= =================== ==================== =============== =======\n max      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n          t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n          t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n          t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n min      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n          t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n          t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n          t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp time-to-establishment max\nTue 2020-03-31 20:39:12 UTC\nRetrieving statistics...\n\nMaximum time to establishment\n-----------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp time-to-establishment min\nTue 2020-03-31 20:39:25 UTC\nRetrieving statistics...\n\nMinimum time to establishment\n-----------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("h3",{id:"sessions-reached-establishment"},"Sessions Reached Establishment"),Object(s.b)("p",null,"Counts of how many sessions reach the established state as defined per-protocol above."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp established\nTue 2020-03-31 20:38:29 UTC\nRetrieving statistics...\n\nTCP sessions that were successfully established\n-----------------------------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n")),Object(s.b)("h3",{id:"sessions-timed-out-before-establishment"},"Sessions Timed Out Before Establishment"),Object(s.b)("p",null,"Counts of how many sessions timed out without ever reaching establishment, as defined per-protocol above. The TLS bucket of this metric is incremented only when the TCP established state has been reached but before the TLS established state has been reached."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp timeout-before-establishment\nTue 2020-03-31 20:40:21 UTC\nRetrieving statistics...\n\nTimed out TCP sessions before establishment\n-------------------------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("h3",{id:"destination-unreachable"},"Destination Unreachable"),Object(s.b)("p",null,"Counts of how many sessions could not complete because the destination was unreachable. This is determined by receipt of an ICMP destination unreachable for the session."),Object(s.b)("p",null,"The below metrics don't apply across all of the specified protocols/applications (UDP, ICMP, TCP, TLS) and will have the specific protocol/application name in the metric."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp unreachable\nTue 2020-03-31 20:41:06 UTC\nRetrieving statistics...\n\nTCP unreachable\n---------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("h3",{id:"session-close-before-tcp-establishment"},"Session Close Before TCP Establishment"),Object(s.b)("p",null,"Counts the number of sessions that are closed by reset or fin before the session has finished the TCP handshake and data has been acknowledged.  This can be a server responding to a SYN with a reset or a proxy terminating a session it can\u2019t complete."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tcp close-before-establishment\nTue 2020-03-31 20:41:56 UTC\nRetrieving statistics...\n\nClosed TCP sessions before establishment\n----------------------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("h3",{id:"session-close-before-tls-establishment"},"Session Close Before TLS Establishment"),Object(s.b)("p",null,"Counts the number of sessions that are closed by reset or fin after TCP establishment but before the session has finished the TLS handshake and data has been acknowledged."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability tls close-before-establishment\nTue 2020-03-31 20:42:30 UTC\nRetrieving statistics...\n\nClosed TlS sessions before establishment\n----------------------------------------\n\n=========== ========= =================== ==================== =============== =======\n Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=========== ========= =================== ==================== =============== =======\n t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n t116-dut1   foo       controlKniIf        192.168.56.51        high                0\n t116-dut1   foo       controlKniIf        192.168.56.51        low                 0\n t116-dut1   foo       controlKniIf        192.168.56.51        medium              0\n\nCompleted in 0.02 seconds\n")),Object(s.b)("h3",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"In order to begin collection of the metrics described above, a service-route must be configured to enable reachability-detection."),Object(s.b)("p",null,"An example of enabled configuration is below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"service-route\n  name                   service-agent1\n  nat-target             1.2.3.4\n  service-name           web\n  service-route-policy   sap1\n  reachability-detection\n    enabled     true\n  next-hop\n    node-name   slice1\n    interface   intf1\n    gateway-ip  1.1.1.2\n")),Object(s.b)("p",null,"In order to filter reachability by destination prefix by traffic class:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@t116-dut1.t116# show stats highway destination-reachability destination-prefix 192.168.56.51 traffic-class best-effort\nTue 2020-03-31 20:44:47 UTC\nRetrieving statistics...\n\nDestination Reachability Statistics\n-----------------------------------\n\n=================================== =========== ========= =================== ==================== =============== =======\n Metric                              Node        Service   Network-interface   Destination-prefix   Traffic-class   Value\n=================================== =========== ========= =================== ==================== =============== =======\n icmp established                    t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n icmp time-to-establishment max      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n icmp time-to-establishment min      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n icmp timeout-before-establishment   t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n icmp unreachable                    t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp close-before-establishment      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp established                     t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp time-to-establishment max       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp time-to-establishment min       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp timeout-before-establishment    t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tcp unreachable                     t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tls close-before-establishment      t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tls established                     t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tls time-to-establishment max       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tls time-to-establishment min       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n tls timeout-before-establishment    t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n udp established                     t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n udp time-to-establishment max       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n udp time-to-establishment min       t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n udp timeout-before-establishment    t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n udp unreachable                     t116-dut1   foo       controlKniIf        192.168.56.51        best-effort         0\n\nCompleted in 0.03 seconds\n")))}b.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=o,h=d["".concat(a,".").concat(m)]||d[m]||f[m]||s;return n?i.a.createElement(h,r(r({ref:t},l),{},{components:n})):i.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var l=2;l<s;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);