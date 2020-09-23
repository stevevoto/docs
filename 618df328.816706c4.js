(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(188)),o={title:"Monitoring Head End Routers",sidebar_label:"Monitoring Head End Routers"},s={unversionedId:"bcp_monitoring_headends",id:"bcp_monitoring_headends",isDocsHomePage:!1,title:"Monitoring Head End Routers",description:"Best Practices: Monitoring Head End Routers",source:"@site/docs/bcp_monitoring_headends.md",slug:"/bcp_monitoring_headends",permalink:"/docs/bcp_monitoring_headends",version:"current",lastUpdatedAt:1592651776,sidebar_label:"Monitoring Head End Routers",sidebar:"docs",previous:{title:"LTE Peering",permalink:"/docs/bcp_lte_peering"},next:{title:"Using Saltstack at Scale With 128T",permalink:"/docs/bcp_salt_pillars"}},l=[{value:"Best Practices: Monitoring Head End Routers",id:"best-practices-monitoring-head-end-routers",children:[{value:"Platform Fundamentals",id:"platform-fundamentals",children:[]},{value:"128T Software Fundamentals",id:"128t-software-fundamentals",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"best-practices-monitoring-head-end-routers"},"Best Practices: Monitoring Head End Routers"),Object(i.b)("p",null,"While every network implementation has its own unique characteristics, there are some attributes that are common to all network topologies \u2013\xa0particularly those built with the 128T Session Smart router. This Best Practices document lists some foundational metrics and data to monitor for system performance and health, and is intended as a baseline upon which network administrators can build."),Object(i.b)("p",null,"128 Technology provides a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugin_monitoring_agent"}),"Monitoring Agent plugin")," that dramtically simplifies the data collection process. This is generally preferred to legacy data collection techniques (e.g., SNMP) as it is much more scalable and has a variety of flexible output formats."),Object(i.b)("h3",{id:"platform-fundamentals"},"Platform Fundamentals"),Object(i.b)("p",null,"Each 128T router is running on a computer, and that computer may be either physical or virtual. It is important to monitor various attributes of the underlying platform to ensure a healthy, stable platform. This includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CPU utilization"),'. A 128T router running as a head end will "pin" a number of CPU cores for its packet forwarding engine. The number of cores is established at the time the software is installed, using a platform assessment algorithm, but may be modified by a user using the ',Object(i.b)("inlineCode",{parentName:"li"},"forwarding-core-count")," configuration option within the 128T data model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Memory"),". The 128T router should have a fairly predictable pattern of memory utilization. There may be periodic peaks of activity as various system processes run; e.g., database downsampling, resynchronizing with a peer, applying configuration, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Disk"),". All 128T log files will rotate through a fixed number of iterations (twenty five, including the active log). Thus the disk utilization should stay relatively constant."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"System sensors"),". This includes things such as the platform temperature, fan speeds, etc. (physical machines only). All computers have onboard temperature sensors, report fan RPM, among other metrics. These should be monitored to ensure proper operating conditions per the manufacturer's guidelines."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Link state"),". One of the fundamentals for monitoring any network device, knowing when links are up or down is a critical piece of information.")),Object(i.b)("h3",{id:"128t-software-fundamentals"},"128T Software Fundamentals"),Object(i.b)("p",null,"Generally, each head end router connects to dozens or hundreds of branch routers, and frequently over multiple transport circuits. The primary focus for monitoring a head end router is to ensure that is fit for aggregating and forwarding traffic to and from the branch routers. The important metrics to consider are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RIB size"),". The 128T router's Routing Information Base (RIB) is the accumulation of all routes that the device uses for making traffic forwarding decisions. These are acquired through configuration or through routing protocols. In general, a head end router's RIB should have a predictable number of routes. Variability in the number of RIB entries is due to routing changes, configuration changes, or peer availability."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Session count"),". As a head end router processes traffic, this will create sessions in the router's ",Object(i.b)("em",{parentName:"li"},"session table"),". In general, the volume of traffic a router processes should be periodic; for example, in a retail deployment the traffic patterns should ebb and flow with each retail location's hours of operation. While every network will have different periodic frequencies, virtually all networks will process traffic in a fairly predictable pattern. Large spikes in sessions can be due to misbehaving or misconfigured devices, upstream servers that are not responsive to client requests, security scanning software, or denial of services attack."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Session arrival/session departure rates"),". As with session counts, session arrival and departure rates are typically predictably periodic for most deployments. When there is a sharp increase in the rate of session arrivals, it generally means a network scan or denial of service attack is underway. When there is a sharp increase in the rate of session departures, it may mean there is a problem with a particular application or network path."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Interface bandwidth"),". Another fundamental property of any network appliance, understanding the bandwidth utilization on all interfaces will help identify potential sources of congestion."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Peer path flaps"),'. A "peer path" is a BFD-validated path used for ',Object(i.b)("em",{parentName:"li"},"Secure Vector Routes")," between 128T peers. Head end systems are aggregation points for many peer paths from branch locations; any network disruption at or near the head end will cause large numbers of peer path flaps. The number of peer path flaps in a steady state network should ideally be as close to zero as possible.")))}u.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);