(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(205)),i={title:"Waypoints and Waypoint Ports",sidebar_label:"Waypoints"},s={unversionedId:"concepts_waypoint_ports",id:"concepts_waypoint_ports",isDocsHomePage:!1,title:"Waypoints and Waypoint Ports",description:"Secure Vector Routing, the patented technique used by a 128T router to send directional, encrypted, tunnel-free traffic to its peers, creates engineered pathways between waypoints \u2013\xa0IP addresses assigned to 128T interfaces.",source:"@site/docs/concepts_waypoint_ports.md",slug:"/concepts_waypoint_ports",permalink:"/docs/concepts_waypoint_ports",version:"current",lastUpdatedAt:1615852208,sidebar_label:"Waypoints",sidebar:"docs",previous:{title:"Service and Topology Exchange Protocol (STEP)",permalink:"/docs/concepts_STEP"},next:{title:"Glossary",permalink:"/docs/concepts_glossary"}},c=[{value:"Limiting the Options",id:"limiting-the-options",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Secure Vector Routing"),", the patented technique used by a 128T router to send directional, encrypted, tunnel-free traffic to its peers, creates engineered pathways between ",Object(r.b)("em",{parentName:"p"},"waypoints")," \u2013\xa0IP addresses assigned to 128T interfaces."),Object(r.b)("p",null,'Much like an airplane pilot creates a flight plan between the source airport and destination airport, charting a series of air traffic control towers with which they will check in en route, a 128T router also creates a sort of "flight plan" for each session it forwards using SVR. Rather than using tunnels between software instances, the 128T uses a novel NATting technique to create distinct "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tuple"}),"tuples"),'" between one another, where the tuple includes a unique combination of source IP, destination IP, source port, destination port, and transport protocol.'),Object(r.b)("p",null,"On any given 128T router, each ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts_interface_types"}),"forwarding interface's"),' IP address is referred to as a "waypoint." This represents the source IP address it will use with sending SVR traffic to a peer, or the destination IP address it will use when receiving SVR traffic initiated by a peer. The ports that are used to construct unique tuples are referred to as "waypoint ports" (or sometimes, "wayports").'),Object(r.b)("p",null,"When forwarding traffic for a new session, the transmitting 128T router ",Object(r.b)("em",{parentName:"p"},"selects its own local waypoint port as well as the destination 128T router's waypoint port"),'. This is a bit unusual (and part of our "secret sauce"), in that the router maintains a free list for each of its peers.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'When learning about SVR and waypoint allocation, a frequently asked question about SVR is "how can you send more than 65,535 concurrent sessions (the limits of UDP and TCP port allocations) if you base it on port?" The answer is: because the transmitting 128T can vary its source port and send multiple sessions to the same destination port, the upper limit is much, much, much higher than 65,535. We\'ll show the math behind it shortly.'))),Object(r.b)("p",null,"By default, each 128T will allocate waypoint ports for each of its interfaces using the default range of 16,385 through 65,533, for a total of 49,148 ports. When sending traffic to a peer, the 128T will allocate an ",Object(r.b)("strong",{parentName:"p"},"even numbered")," waypoint for itself and an ",Object(r.b)("strong",{parentName:"p"},"odd numbered"),' waypoint for its peer. (We did this to avoid "glare conditions," the exceedingly unlikely chance that two devices would pick the exact same values in two directions simultaneously).'),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Here's the math."))),Object(r.b)("p",null,"Thus, each wayport on a 128T can initiate 24,574 sessions to each of 24,574 unique wayports on its peer. That's a theoretical maximum of 603,881,476 unique concurrent sessions between a pair of waypoints ",Object(r.b)("em",{parentName:"p"},"in each direction"),",\xa0disregarding the fact that most peering relationships have multiple transports \u2013 and thus more waypoints \u2013 between them."),Object(r.b)("h2",{id:"limiting-the-options"},"Limiting the Options"),Object(r.b)("p",null,'Sometimes, 603 million concurrent sessions is simply too many to handle \u2013 particularly for security-minded folks who want to limit the exposure of public-facing ports they let into their network. For example, when deploying a 128T behind a firewall and telling the owner of that firewall that you need to open up ports 16,385 through 65,533, you generally get an "oh really?" response.'),Object(r.b)("p",null,"For those that want to limit the range of waypoint ports, we allow you to configure your own range rather than adopt the default. This is configured within the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_reference_guide#port-range"}),"port-range")," element within a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_reference_guide#neighborhood"}),"neighborhood"),". "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A quick reminder on how neighborhoods work: when setting values in a neighborhood on a router, it will affect how each router that peers with it builds their ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_reference_guide#adjacency"}),"adjacency")," to it. So when you restrict the set of ports in a router's neighborhood, each peer's adjacency will reflect that restriction; thus, when that router goes to build an SVR session to that peer over that adjacency, it will know the valid range of ports to choose from."))),Object(r.b)("p",null,"Limiting this range will make your firewall team happy without putting too much of a crimp in your ability to SVR sessions. In fact, we have some customers that have limited their waypoint port allocation to only 10 ports on their head end routers! At face value this seems like it would severely restrict the number of unique, concurrent sessions that could be established by a peer, but in practice it doesn't. If a branch keeps its range to the default value of ports (49,148 ports), which can be sent to each of ten ports, you still wind up with a theoretical maximum of over 120,000 concurrent sessions ",Object(r.b)("em",{parentName:"p"},"in each direction")," to that branch over that adjacency."))}l.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,b=d["".concat(i,".").concat(u)]||d[u]||h[u]||r;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);