(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(11),o=(n(0),n(223)),r={title:"High Availability - Theory of Operation",sidebar_label:"HA - Theory of Operation"},s={id:"concepts_ha_theoryofoperation",title:"High Availability - Theory of Operation",description:"This document describes the most common set of deployment models for taking two instances of 128T routing software (referred to as \u201cnodes\u201d) and deploying those nodes together to provide high availability. The 128T routing software presents several deployment options for high availability, including:",source:"@site/docs/concepts_ha_theoryofoperation.md",permalink:"/docs/concepts_ha_theoryofoperation",editUrl:"https://github.com/128technology/docs/tree/master/docs/concepts_ha_theoryofoperation.md",lastUpdatedAt:1586828518,sidebar_label:"HA - Theory of Operation",sidebar:"docs",previous:{title:"Application Discovery",permalink:"/docs/concepts_application_discovery"},next:{title:"Interface Types",permalink:"/docs/concepts_interface_types"}},c=[{value:"Intended Audience",id:"intended-audience",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Theory of Operation",id:"theory-of-operation",children:[{value:"Dual Node High Availability",id:"dual-node-high-availability",children:[]},{value:"Dual Router High Availability",id:"dual-router-high-availability",children:[]}]},{value:"Terminology",id:"terminology",children:[]},{value:"Modeling",id:"modeling",children:[{value:"Active/Standby Model",id:"activestandby-model",children:[]},{value:"Active/Standby Model with Fabric Interface",id:"activestandby-model-with-fabric-interface",children:[]},{value:"Active/Active Model",id:"activeactive-model",children:[]},{value:"Hybrid Models",id:"hybrid-models",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes the most common set of deployment models for taking two instances of 128T routing software (referred to as \u201cnodes\u201d) and deploying those nodes together to provide high availability. The 128T routing software presents several deployment options for high availability, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Dual node high availability"),': where two nodes form one logical router, with shared state and a "fabric" backplane between them.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Dual router high availability"),": where two nodes form two logical routers, with no shared state. This is a familiar approach to administrators accustomed to deploying pairs of legacy routing platforms.")),Object(o.b)("p",null,"This document will describe the benefits and caveats of each of these models, as well as delving into other architectural decisions that should be considered when deploying highly available systems."),Object(o.b)("h2",{id:"intended-audience"},"Intended Audience"),Object(o.b)("p",null,"This document is intended for network architects, and is to be used as a guideline during the network design phase of deployment."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"High availability (or \u201cHA\u201d) is the practice of deploying additional network elements for traffic resiliency, to account for link or system downtime. In general, 128 Technology, Inc. encourages the deployment of highly available routers and conductors, as this will provide service continuity in the event of network failures, software faults, or hardware downtime (both scheduled and unscheduled)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are other types of protection afforded 128T-powered networks, including path protection (via peer path selection) and link impairment protection (via session resiliency features, packet duplication, packet retransmitions, etc.), but these are not a consequence of supplying two nodes to mitigate the impact of failures."))),Object(o.b)("p",null,"This document will define the terms used to describe the 128T router\u2019s implementation of high availability, describe the various configurable elements associated with high availability, and how they can be set and/or tuned in order to afford maximal protection against failures. It also presents various common topologies, to assist in selecting the best model for any given deployment."),Object(o.b)("p",null,"In general, the configurations presented in this document will be presented in a \u201cvanilla\u201d fashion \u2013 without undue service configuration, tenant configuration, traffic policies, etc. \u2013 except where necessary to illustrate specific use cases relevant to high availability behavior."),Object(o.b)("h2",{id:"theory-of-operation"},"Theory of Operation"),Object(o.b)("p",null,"Deploying a highly available solution offers protection from failures or maintenance operations that could impact service. Generally speaking, the protections that high availability offers can be grouped in to several categories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Software protection"),": the software components on a node can stop (due to upgrade, software fault, reboot, etc.) the companion components on a highly available counterpart can resume operation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Hardware protection"),": the platform on which the software runs can stop (due to replacement, hardware failure, power failure, etc.) while the companion highly available platform assumes control of all shared interfaces. Note that for the purposes of this document, Virtual Machines (VM) will be treated as hardware components unless specifically called out otherwise."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Link protection"),": a single link can fail and not interrupt service, if there are shared forwarding interfaces and/or fabric interfaces (more on this later).")),Object(o.b)("p",null,"The 128T offers all three types of protections listed above in each of its HA models. It does so by deploying two nodes that operate in concert (as either one logical router or as two logical routers) to provide service continuity in the event of failure. Each of the nodes contains a full set of software processes necessary for forwarding traffic, running routing protocols, communicating with its peers and management systems, etc. This allows a 128T to run independently in the event that its HA counterpart is unavailable."),Object(o.b)("h3",{id:"dual-node-high-availability"},"Dual Node High Availability"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"dual node high availability")," design is a longstanding deployment model supported by the 128T. In this design two nodes share one common set of state; because the 128T is stateful (i.e., it retains some residual information about each active session for the lifetime of that session) it must share this information with its counterpart to protect active sessions in the event of any impairment. This model is exemplified by using a ",Object(o.b)("em",{parentName:"p"},"redundancy link"),", a dedicated connection between the two systems where session state is exchanged."),Object(o.b)("h4",{id:"redundancy-link"},"Redundancy Link"),Object(o.b)("p",null,"Configured within the 128T software (and implemented as a ",Object(o.b)("em",{parentName:"p"},"team interface"),' in Linux), this is typically implemented as a cross connect cable between two colocated systems. The "cross connect cable" is a logical concept and also includes connections between virtual machines. Also, the cross connect cable may be implemented between geographically diverse locations.'),Object(o.b)("p",null,"For more information about configuring redundant interfaces see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_non_forwarding_ha_interfaces"}),"Non-forwarding HA Interfaces"),"."),Object(o.b)("p",null,"The 128T configuration model only supports one redundancy link to be configured. However, it is possible to configure a second redundancy link manually. For instructions, refer to the guide ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_adding_interfaces_to_ha_team"}),"Adding Interfaces to HA Team Interface")," for configuring additional redundancy links."),Object(o.b)("h4",{id:"about-state-synchronization"},"About State Synchronization"),Object(o.b)("p",null,"This state sharing occurs via a high-performance database that is available to both nodes. As sessions are established through a 128T node, the receiving node consults this database to determine whether this session had previously been established via its counterpart. If it does not find any information, it processes this session as new, and it inserts state information into the shared database. In this way, session continuity is preserved irrespective of which node is active at the outset of an established session."),Object(o.b)("p",null,"For 128T routers, session state synchronization for a session will occur only after a number of packets have been exchanged bi-directionally. This is to avoid the overhead of state synchronization for short-lived sessions (fewer than twelve packets), where a client reinitiating the session anew is as efficient as recovery."),Object(o.b)("p",null,"128T conductors also leverage the redundancy link for state synchronization, to checkpoint the status of connected systems, configuration updates, and alarms."),Object(o.b)("h4",{id:"leader-election"},"Leader Election"),Object(o.b)("p",null,"In addition to state synchronization, the 128T software also uses the redundancy link for ",Object(o.b)("em",{parentName:"p"},"leader election"),' \u2013 the term used to describe the negotiation between the two systems for determining which is more fit for active duty. Because the 128T software is comprised of a number of discrete software processes (daemons), there are actually multiple "leaders" for each dual node HA system simultaneously. Below is the sample output of the command ',Object(o.b)("inlineCode",{parentName:"p"},"show system processes node all")," from a highly available system:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@BEACON00128A.BEACON00128# show sys proc node all\nFri 2020-02-28 10:47:26 UTC\n\n============== ============================= ========= ========= =======\n Node           Process                       Status    Primary   Role\n============== ============================= ========= ========= =======\n BEACON00128A   accessManager                 running             combo\n BEACON00128A   analyticsReporter             running             combo\n BEACON00128A   applicationFrameworkManager   running             combo\n BEACON00128A   conflux                       running             combo\n BEACON00128A   databaseQueryCoordinator      running             combo\n BEACON00128A   dynamicPeerUpdateManager      running   N         combo\n BEACON00128A   fastLane                      running             combo\n BEACON00128A   highwayManager                running             combo\n BEACON00128A   nodeMonitor                   running             combo\n BEACON00128A   persistentDataManager         running             combo\n BEACON00128A   redisServerManager            running   N         combo\n BEACON00128A   routingManager                running   Y         combo\n BEACON00128A   secureCommunicationManager    running             combo\n BEACON00128A   securityKeyManager            running   N         combo\n BEACON00128A   snmpTrapAgent                 running             combo\n BEACON00128A   stateMonitor                  running             combo\n BEACON00128A   systemServicesCoordinator     running             combo\n BEACON00128B   accessManager                 running             combo\n BEACON00128B   analyticsReporter             running             combo\n BEACON00128B   applicationFrameworkManager   running             combo\n BEACON00128B   conflux                       running             combo\n BEACON00128B   databaseQueryCoordinator      running             combo\n BEACON00128B   dynamicPeerUpdateManager      running   Y         combo\n BEACON00128B   fastLane                      running             combo\n BEACON00128B   highwayManager                running             combo\n BEACON00128B   nodeMonitor                   running             combo\n BEACON00128B   persistentDataManager         running             combo\n BEACON00128B   redisServerManager            running   Y         combo\n BEACON00128B   routingManager                running   N         combo\n BEACON00128B   secureCommunicationManager    running             combo\n BEACON00128B   securityKeyManager            running   Y         combo\n BEACON00128B   snmpTrapAgent                 running             combo\n BEACON00128B   stateMonitor                  running             combo\n BEACON00128B   systemServicesCoordinator     running             combo\n")),Object(o.b)("p",null,"This is a list of the system processes that make up a 128T router. (There is a similar, but different set that exists on a 128T conductor.) The fourth column in the output shows whether a process is primary (has leadership) or not. As you can see in this output, it is not unusual for one node to be leader for some processes and not others; for example, ",Object(o.b)("inlineCode",{parentName:"p"},"BEACON00128A")," is the leader for ",Object(o.b)("inlineCode",{parentName:"p"},"routingManager"),", whereas ",Object(o.b)("inlineCode",{parentName:"p"},"BEACON00128B")," is the leader for ",Object(o.b)("inlineCode",{parentName:"p"},"securityKeyManager"),"."),Object(o.b)("p",null,"Each of the processes indicated with a ",Object(o.b)("inlineCode",{parentName:"p"},"Y")," or ",Object(o.b)("inlineCode",{parentName:"p"},"N")," undergo leader election and remain in constant communication with one another, whereas the processes that do not have any indicator will run on both systems autonomously. Failure events will oftentimes re-trigger a leader election process to ensure the fittest system is in control."),Object(o.b)("h3",{id:"dual-router-high-availability"},"Dual Router High Availability"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"dual router high availability"),' design is where two individual 128T software instances are coupled together to provide continuity in the event of a failure. While there is no state synchronized between the two devices (since there is no redundancy link), they are redundant to one another by upstream 128T devices detecting a failure and routing around it. Note that "detecting a failure" entails routing protocol convergence and/or SVR path failure determination.'),Object(o.b)("p",null,"The dual router high availability design has some distinct advantages over the dual node design:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fewer port requirements."),Object(o.b)("li",{parentName:"ul"},"Fewer moving parts. Because there is no dependency on synchronizing a shared database, electing leaders between paired nodes, or sharing state, the implementation is more resilient.")),Object(o.b)("p",null,"It does come with some tradeoffs, however:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"More rigid restrictions on the network topology (IGP/EGP)."),Object(o.b)("li",{parentName:"ul"},"Certain 128T features are not usable and/or must be disabled, notably source NAT and TCP state enforcement."),Object(o.b)("li",{parentName:"ul"},"Shared interfaces cannot be used.")),Object(o.b)("h2",{id:"terminology"},"Terminology"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dual Node High Availability"),": a deployment model where two instances (nodes) of 128T software are coupled as a single, logical router."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dual Router High Availability"),": a deployment model where two instances (nodes) of 128T software are coupled as distinct, single node routers."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Fabric link"),': a connection between two nodes in a dual node high availability deployment. This link is used for forwarding traffic between the two nodes, analogous to a backplane "fabric" on a chassis-based router. This is also sometimes referred to as an ',Object(o.b)("em",{parentName:"p"},"inter-node link"),' or a "dogleg."'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Inter-router link"),": a connection between two routers in a dual router high availability deployment. This link is used for forwarding traffic between the two routers much in the same way as a fabric link does between nodes. Generally we run iBGP as an IGP over this inter-router link."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Redundancy link"),": a connection between two nodes in a dual node high availability deployment, used exclusively for synchronizing state between them. (No traffic is forwarded on this link.)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Redundancy group"),": a configuration construct for combining interfaces into a collection that ",Object(o.b)("em",{parentName:"p"},"shares fate"),', such that if one interface goes down, the other interface(s) in the group are administratively failed over along with it. This is useful in deployments where two nodes are configured as mirror images of one another in an "active/standby" configuration.'),Object(o.b)("h2",{id:"modeling"},"Modeling"),Object(o.b)("p",null,"In general terms, high availability is an expense incurred to guard against failure scenarios; typically, high availability models are ",Object(o.b)("em",{parentName:"p"},"not")," intended to protect against all possible failure scenarios, but the most common ones (e.g., software failure, hardware failure, circuit failure). It is impractical, and in some cases impossible, to guard against multiple concurrent failures. Thus, a tolerance profile should be constructed to include the failure scenarios that are most common, most impactful, or both."),Object(o.b)("p",null,"When deploying a high availability 128T router, there are several options available depending on (Ethernet) port availability, and the tolerance profile. The two main considerations when designing a high availability 128T router are interface failure protections and platform protections (inclusive of hardware and software)."),Object(o.b)("p",null,"Interface protections allow for service continuity when an interface fails, or is otherwise disabled. Each interface that is to be protected has presence on both nodes in an HA couplet, which will have ramifications on the hardware platform that is selected. In a simple example, two nodes each have a single LAN and WAN interface, and these are protected. Adding a second WAN provider will incur an additional Ethernet interface on one node, but protecting it requires an additional Ethernet interface on its counterpart. Alternatively, you could deploy two independent WAN connections on each node (e.g., ISP 1 and ISP 2 on one node, ISP 3 and ISP 4 on the other node) and consume the same number of ports, but without any specific protection around any interface or ISP failure."),Object(o.b)("p",null,"While the 128T platform affords you many flexibilities in your modeling, let's start with some simple assumptions and build upon them."),Object(o.b)("h3",{id:"activestandby-model"},"Active/Standby Model"),Object(o.b)("p",null,"The simplest model is the active/standby model, where both nodes are configured as mirror images of one another. The LAN and WAN interfaces are protected, and there is a redundancy link between the two nodes to synchronize state. In this model, you will need to configure a set of ",Object(o.b)("inlineCode",{parentName:"p"},"redundancy-group")," configurations, one for each node."),Object(o.b)("p",null,"This configuration protects against a LAN interface failure, a WAN interface failure, and a platform failure."),Object(o.b)("h3",{id:"activestandby-model-with-fabric-interface"},"Active/Standby Model with Fabric Interface"),Object(o.b)("p",null,"This model builds upon the previous by adding a fabric interface. The fabric interface between the nodes gives them a path to reach the active LAN or WAN interface, should packets arrive that need forwarding but the local LAN/WAN interface is unusable."),Object(o.b)("p",null,"In the Active/Standby Model with Fabric Interface, the ",Object(o.b)("inlineCode",{parentName:"p"},"redundancy-group")," configuration is no longer mandatory; it can be used to govern administrative preference over which node in a pair is active when all interfaces are usable across the router. A ",Object(o.b)("inlineCode",{parentName:"p"},"redundancy-group")," can also be used to put both LAN and WAN traffic on a single node when there is only one interface impaired, but this is strictly administrative preference."),Object(o.b)("p",null,"This model is advantaged over the standard active/standby model, in that it protects against the failure mode where dissimilar links are down on each system (e.g., the LAN interface on node 1 is down and the WAN interface on node 2 is down). This comes at the cost of one additional Ethernet port on each node, to account for the fabric link."),Object(o.b)("h3",{id:"activeactive-model"},"Active/Active Model"),Object(o.b)("p",null,"The Active/Active model is one where each node in the router has (at least) one unique interface per node that is not represented on its counterpart. Generally speaking, this model has a protected LAN interface and dissimilar WAN interfaces (e.g., node 1 uses ISP 1, node 2 uses ISP 2). Just as with the Active/Standby model, you can elect to add a fabric interface \u2013 and in fact it is quite common to do so. (Without a fabric interface, only one ISP can be used at a time and it is arguably equivalent to an Active/Standby model.) With a fabric interface in place, the router will use the appropriate egress ISP based on the policies provisioned in the 128T, assuming all ISPs are active, which may mean that traffic arrives on one node and egresses via a separate node."),Object(o.b)("p",null,'This model is advantaged over Active/Standby in that you get the benefit of "SD-WAN," able to leverage the best ISP path for a given type of traffic at any point in time. Yet if any platform failure occurs, each node has the ability to continue processing traffic to the array of ISPs available to it.'),Object(o.b)("h4",{id:"activeactive-with-no-shared-interfaces"},"Active/Active with no Shared Interfaces"),Object(o.b)("p",null,"There are certain features which may be unavailable when not using shared interfaces, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"source-nat")," \u2013 when there's no shared interface, there's no way to synchronize dynamically allocated source ports."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"transport-state-enforcement")," \u2013\xa0this feature will not work without synchronizing data between systems.")),Object(o.b)("h3",{id:"hybrid-models"},"Hybrid Models"),Object(o.b)("p",null,"Hybrid models include multiple LAN interfaces and multiple WAN interfaces, some or all of which may be protected. (These deployments may include ",Object(o.b)("inlineCode",{parentName:"p"},"redundancy-group")," configurations, to ensure the coupled interfaces are always co-active on the same node.) Hybrid models should include a fabric interface between the nodes."),Object(o.b)("p",null,"This model is used when there are multiple LAN interfaces, and one or more need protection. It requires the maximum number of Ethernet interfaces, and is the most complex configuration model."))}d.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,p=u["".concat(r,".").concat(b)]||u[b]||h[b]||o;return n?i.a.createElement(p,s({ref:t},l,{components:n})):i.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);