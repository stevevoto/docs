(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(204)),o={title:"Getting Started with the 128T Networking Platform",sidebar_lable:"Getting Started with the 128T Networking Platform"},s={unversionedId:"intro_getting_started",id:"intro_getting_started",isDocsHomePage:!1,title:"Getting Started with the 128T Networking Platform",description:"Introduction",source:"@site/docs/intro_getting_started.md",slug:"/intro_getting_started",permalink:"/docs/intro_getting_started",version:"current",lastUpdatedAt:1611865251,sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/CONTRIBUTING"},next:{title:"System Requirements",permalink:"/docs/intro_system_reqs"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"128T Conductor",id:"128t-conductor",children:[]},{value:"128T Session Smart Router",id:"128t-session-smart-router",children:[{value:"Secure Vector Routing (SVR)",id:"secure-vector-routing-svr",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Routing with Words",id:"routing-with-words",children:[]}]},{value:"Session-Aware Data Plane",id:"session-aware-data-plane",children:[]},{value:"High Availability and Resilience",id:"high-availability-and-resilience",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"The 128T Networking Platform is the first 100% software-defined, session-based distributed IP routing and network services platform designed from the ground-up with an application and service-centric context.  The platform consists of two primary components: the 128T Session Smart Router and the 128T Conductor. Together, they form a single logical control plane that is highly distributed, and a data plane that is truly session-aware. The 128T Networking Platform supports a wide range of deployment models scaling from a small branch office to a high capacity edge router to a hyper-scale software-defined data center."),Object(r.b)("h2",{id:"128t-conductor"},"128T Conductor"),Object(r.b)("p",null,"The 128T Conductor is a centralized management and policy engine that provides orchestration, administration, provisioning, monitoring, and analytics for distributed 128T Session Smart Routers \u2013 while maintaining a network-wide, multi-tenant service, and policy data model."),Object(r.b)("h2",{id:"128t-session-smart-router"},"128T Session Smart Router"),Object(r.b)("p",null,"The 128T Session Smart Router combines a service-centric control plane and a session-aware data plane to offer all IP routing tables, feature-rich policy management, advanced data collection, and analytics in addition to high-speed packet forwarding, classification, and security functions."),Object(r.b)("h3",{id:"secure-vector-routing-svr"},"Secure Vector Routing (SVR)"),Object(r.b)("p",null,"The 128T Networking Platform introduces Secure Vector Routing, an innovative approach to IP routing that eliminates the need for tunnel-based overlay networks. The 128T Networking Platform and its Secure Vector Routing make existing networks dramatically simpler, smarter, more secure and seamless. SVR comprises two unique control plane and data plane components, the service-centric control plane and the session-aware data plane. "),Object(r.b)("h3",{id:"data-model"},"Data Model"),Object(r.b)("p",null,"At the core of the SVR control plane is a service-based data model, which provides the language for describing the network\u2019s services, tenancy, and associated policies. The SVR data model is global and location independent, meaning every router in an SVR fabric shares the same service-based policies and topology, at all times \u2013 no matter where it is. The service-centric data model is expressed in YANG and exposed via northbound REST, GraphQL, and NETCONF APIs to deliver a full suite of application and orchestration integration services."),Object(r.b)("h3",{id:"routing-with-words"},"Routing with Words"),Object(r.b)("p",null,"To simplify routing, addressing, and access control, SVR uses the concept of \u201cRouting with Words.\u201d This is where services are described and communicated across the network in plain language, and aligned with the principles of Named Data Networking. In place of routes solely defined by IP addresses and CIDR blocks, SVR uses a URL-like Qualified Service Name (QSN) where service-based routes are described by name and carry a hierarchical multi-tenancy context."),Object(r.b)("h2",{id:"session-aware-data-plane"},"Session-Aware Data Plane"),Object(r.b)("p",null,"The session-aware data plane makes dynamic forwarding and policy decisions based on SVR\u2019s distributed service-centric control plane, the unique attributes and policies of sessions, and real-time network monitoring. SVR-based routers, deployed at network edges, transform a stateless L2 fabric or L3 network data plane into one that is fully session-aware. This is made possible through the combination of three features: session detection and control, waypoint setting, and session-based signaling (metadata). A session-aware data plane creates end-to-end route vectors that are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Deterministic")," \u2013 Session traffic is steered in segments between waypoints, with enforced flow symmetry, all without tunnel-based overlays. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Secure")," \u2013 Each route vector controls the directionality of the session with its initiation. Every session is authenticated at each hop. Payload encryption is defined per service and applied per session. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dynamic")," \u2013 Paths are established dynamically based on application policies and network state. Statically provisioned stateful tunnels are replaced with a model based on session state, where sessions are created on-demand and terminated when they\u2019re no longer needed. Link and endpoint session load balancing is native. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Multi-tenant")," \u2013 Hierarchical multi-tenancy and secure segmentation is supported end-to-end across network and NAT (network address translation) boundaries.")),Object(r.b)("h2",{id:"high-availability-and-resilience"},"High Availability and Resilience"),Object(r.b)("p",null,"The 128 Technology platform has been designed to provide High Availability to provide stateful failover in addition to load sharing. The 128T solution can utilize redundant or alternate paths between nodes in a network to reroute traffic, improve resiliency, and maximize throughput. These maximally diverse paths can provide link and node protection.\nThe solution operates in active/active clustering mode. Routers are grouped together as a pair of nodes, with each unit processing traffic and sharing the network load. Each router consists of two units acting as a stateful HA pair. Active/active clustering provides stateful failover in addition to load sharing. A fabric link between the routers is used to route traffic between them in case of failure. All information between the routers are shared using highly efficient in-memory databases to minimize bandwidth usage and to enable instantaneous information exchange. All processes in a 128T router are self-resilient. They can regenerate themselves independently in case of process failures or exceptions."))}l.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||r;return n?i.a.createElement(m,s(s({ref:t},d),{},{components:n})):i.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);