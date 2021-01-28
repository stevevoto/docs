(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return h}));var a=n(2),i=n(6),c=n(0),r=n.n(c),o=n(204),s=n(512),b=n.n(s);b.a.initialize({startOnLoad:!0});var l=function(e){var t=e.chart;return Object(c.useEffect)((function(){b.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},t)},d={title:"AT&T AVPN Configuration",sidebar_label:"AT&T AVPN Configuration"},p={unversionedId:"bcp_att_avpn_configuration",id:"bcp_att_avpn_configuration",isDocsHomePage:!1,title:"AT&T AVPN Configuration",description:"This guide is for network engineers and architects using their 128T Session Smart router to connect to AT&T\u2019s MPLS VPN (AVPN) service. It will cover:",source:"@site/docs/bcp_att_avpn_configuration.md",slug:"/bcp_att_avpn_configuration",permalink:"/docs/bcp_att_avpn_configuration",version:"current",lastUpdatedAt:1611865251,sidebar_label:"AT&T AVPN Configuration",sidebar:"docs",previous:{title:"Events",permalink:"/docs/events_events"},next:{title:"Using 128T as an NTP Server",permalink:"/docs/bcp_using_128T_as_ntp_server"}},O=[{value:"AT&amp;T Service Classes",id:"att-service-classes",children:[{value:"COS1: Real-time",id:"cos1-real-time",children:[]},{value:"COS2V: Delay-sensitive applications",id:"cos2v-delay-sensitive-applications",children:[]},{value:"COS2: Time-critical applications",id:"cos2-time-critical-applications",children:[]},{value:"COS3: Time-sensitive applications",id:"cos3-time-sensitive-applications",children:[]},{value:"COS4: Best Effort",id:"cos4-best-effort",children:[]},{value:"COS5: Scavenger",id:"cos5-scavenger",children:[]},{value:"Control Queue",id:"control-queue",children:[]}]},{value:"Service Policies",id:"service-policies",children:[]},{value:"Traffic Engineering Strategies",id:"traffic-engineering-strategies",children:[{value:"Sizing the Traffic Engineering Policy",id:"sizing-the-traffic-engineering-policy",children:[]}]},{value:"Appendix: Service Class Configuration",id:"appendix-service-class-configuration",children:[]}],m={rightToc:O};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide is for network engineers and architects using their 128T Session Smart router to connect to AT&T\u2019s MPLS VPN (AVPN) service. It will cover:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service class definitions for the various COS queues on the AT&T MPLS network"),Object(o.b)("li",{parentName:"ul"},"Strategies for mapping ",Object(o.b)("inlineCode",{parentName:"li"},"service")," configuration to the COS queues using ",Object(o.b)("inlineCode",{parentName:"li"},"service-policy")," elements"),Object(o.b)("li",{parentName:"ul"},"Guidelines for setting your ",Object(o.b)("inlineCode",{parentName:"li"},"traffic-engineering")," properties, to match the circuit profile of your AT&T MPLS link")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"While the techniques described here apply to any MPLS connection, they will be most valuable when engineering branch office (i.e., smaller) MPLS links, due to the higher likelihood of congestion."))),Object(o.b)("p",null,"This document is intended to be a companion guide to the ",Object(o.b)("em",{parentName:"p"},"AT&T Network-Based Class of Service Customer Router Configuration Guide"),". At the time of this writing, the latest version is Release 4.0, December 2016."),Object(o.b)("h2",{id:"att-service-classes"},"AT&T Service Classes"),Object(o.b)("p",null,"The AT&T AVPN MPLS network uses six distinct classes of service for carrying customer traffic, as well as a seventh \u201ccontrol\u201d queue for communication between the CE and PE router. This section describes each of the classes of service and provides 128T configuration fragments to illustrate how to configure your 128T Session Smart router to interact with the AVPN network."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This document assumes the use of a 6COS circuit profile. The 4COS circuit does not use the COS2V nor COS5 classes of service. Otherwise, the recommendations made in this document apply."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In each of the ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," configuration excerpts below, you will see it has been assigned a ",Object(o.b)("inlineCode",{parentName:"p"},"traffic-class"),". The 128T Session Smart router has four traffic classes, in order of priority: high, medium, low, best-effort. This is different from other network equipment, which may order the priorities as high, medium, best-effort, low."))),Object(o.b)("p",null,"All of the ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," elements in this section are provided as an appendix to this document, to facilitate their import (or copy/paste) into your existing 128T configuration."),Object(o.b)("h3",{id:"cos1-real-time"},"COS1: Real-time"),Object(o.b)("p",null,'The COS1 class is treated differently than the other classes on AVPN; any packets received that are marked as COS1 exceed the configured bandwidth, they are explicitly dropped ("hard policed"). Packets are identified as COS1 through the use of the "EF" DSCP marking (decimal 46).'),Object(o.b)("p",null,"COS1 is typically reserved for Voice over IP (VoIP) traffic."),Object(o.b)("p",null,"Configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS1\n\nconfig\n\n    authority\n\n        service-class  ATT-COS1\n            name           ATT-COS1\n            description    "Real-time applications (EF)"\n            dscp           46\n            traffic-class  high\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"cos2v-delay-sensitive-applications"},"COS2V: Delay-sensitive applications"),Object(o.b)("p",null,"The COS2V queue, identified through the use of the DSCP value AF41 (decimal 34), is typically reserved for video conferencing traffic."),Object(o.b)("h4",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS2V\n\nconfig\n\n    authority\n\n        service-class  ATT-COS2V\n            name           ATT-COS2V\n            description    "Delay-sensitive applications (AF41)"\n            dscp           34\n            traffic-class  medium\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"cos2-time-critical-applications"},"COS2: Time-critical applications"),Object(o.b)("p",null,"The COS2 queue, identified through the use of DSCP AF31 (decimal 26), is to be used for time-sensitive, mission-critical, low bandwidth applications. This is the recommended class VoIP signaling (e.g., SIP, H.323, SCCP), as it is low-bandwidth (typically a small number of kilobits per second) but extremely time-sensitive."),Object(o.b)("h4",{id:"configuration-1"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS2\n\nconfig\n\n    authority\n\n        service-class  ATT-COS2\n            name           ATT-COS2\n            description    "Time-sensitive mission-critical low-bandwidth applications (AF31)"\n            dscp           26\n            traffic-class  medium\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"cos3-time-sensitive-applications"},"COS3: Time-sensitive applications"),Object(o.b)("p",null,"This class of service should include all mission-critical applications that are ",Object(o.b)("em",{parentName:"p"},"interactive")," in nature; that is, they correspond to applications that are transactional in nature. In enterprises this may be a CRM system, an ERP system, or other important client/server applications."),Object(o.b)("p",null,"COS3 is distinguishable by its DSCP value of AF21 (decimal 18)."),Object(o.b)("h4",{id:"configuration-2"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS3\n\nconfig\n\n    authority\n\n        service-class  ATT-COS3\n            name           ATT-COS3\n            description    "Time-sensitive mission-critical applications (AF21)"\n            dscp           18\n            traffic-class  medium\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"cos4-best-effort"},"COS4: Best Effort"),Object(o.b)("p",null,'The "best effort" class is the one that should be used by the majority of network traffic.'),Object(o.b)("p",null,"There is no DSCP value associated with best effort traffic (decimal 0)."),Object(o.b)("h4",{id:"configuration-3"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS4\n\nconfig\n\n    authority\n\n        service-class  ATT-COS4\n            name           ATT-COS4\n            description    "Best effort (default)"\n            dscp           0\n            traffic-class  best-effort\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"cos5-scavenger"},"COS5: Scavenger"),Object(o.b)("p",null,"The last class of service for customer traffic is COS5, or scavenger. This is for all non business-oriented traffic. This typically gets the lowest allocation when assigning traffic engineering percentages, and thus will experience congestion first."),Object(o.b)("p",null,"Scavenger traffic is identified as COS5 through the use of the AF11 DSCP value (decimal 10)."),Object(o.b)("h4",{id:"configuration-4"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-COS5\n\nconfig\n\n    authority\n\n        service-class  ATT-COS5\n            name           ATT-COS5\n            description    "Scavenger (AF11)"\n            dscp           10\n            traffic-class  best-effort\n        exit\n    exit\nexit\n')),Object(o.b)("h3",{id:"control-queue"},"Control Queue"),Object(o.b)("p",null,"The control queue is used for communicating between the CE and PE router, and should typically be limited to BGP and BFD only. This is an extremely low bandwidth queue."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In many deployments the 128T does not BGP peer with the PE router, and in no deployments will the 128T send BFD to the PE router. Do not mark BFD or BGP with DSCP CS6/decimal 48. This is only presented for completeness, or when BGP peering with the PE router."))),Object(o.b)("h4",{id:"configuration-5"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@AAPCDCVACON0A.AAPCONPOD0# show config run auth service-class ATT-control\n\nconfig\n\n    authority\n\n        service-class  ATT-control\n            name           ATT-control\n            description    "Control traffic only (CS6)"\n            dscp           48\n            traffic-class  high\n        exit\n    exit\nexit\n')),Object(o.b)("h2",{id:"service-policies"},"Service Policies"),Object(o.b)("p",null,"The 128T will use ",Object(o.b)("inlineCode",{parentName:"p"},"service-policy")," to indicate which sessions need to get marked and treated with the ",Object(o.b)("inlineCode",{parentName:"p"},"session-type")," configurations. Each ",Object(o.b)("inlineCode",{parentName:"p"},"service")," should have a corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"service-policy"),", to ensure that the markings are applied and the correct ",Object(o.b)("inlineCode",{parentName:"p"},"traffic-class")," is used for traffic engineering."),Object(o.b)("p",null,"The base class ",Object(o.b)("inlineCode",{parentName:"p"},"service-policy")," configurations presented here are derived from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/bcp_service-policy_defaults"}),"BCP on Service Policy"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Base ",Object(o.b)("inlineCode",{parentName:"th"},"service-policy")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"AVPN ",Object(o.b)("inlineCode",{parentName:"th"},"service-class")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"voip-audio")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"voip-video")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS2V")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"video-streaming")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS2V")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"voip-signaling")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"data-mission-critical")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"remote-desktop")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"management-interactive")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"management-m2m")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"data-interactive")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"data-best-effort")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS4")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"data-scavenger")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS5")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"video-streaming-scavenger")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ATT-COS5")))),Object(o.b)("h2",{id:"traffic-engineering-strategies"},"Traffic Engineering Strategies"),Object(o.b)("p",null,"The 128T router uses four traffic engineering queues for prioritizing egress traffic during times of congestion or link contention. The general practice of mapping the ",Object(o.b)("inlineCode",{parentName:"p"},"traffic-class")," assignments (high, medium, low, best-effort) into the various 6COS queues is shown below."),Object(o.b)(l,{chart:"\n  graph LR\n    voip-audio --\x3e ATT-COS1\n    id1(BFD, BGP) -.-> ATT-control\n    voip-video --\x3e ATT-COS2V\n    video-streaming --\x3e ATT-COS2V\n    voip-signaling --\x3e ATT-COS2\n    data-mission-critical --\x3e ATT-COS2\n    remote-desktop --\x3e ATT-COS2\n    management-interactive --\x3e ATT-COS3\n    management-m2m --\x3e ATT-COS3\n    data-interactive --\x3e ATT-COS3\n    data-best-effort --\x3e ATT-COS4\n    data-scavenger --\x3e ATT-COS5\n    video-streaming-scavenger --\x3e ATT-COS5\n    subgraph best-effort\n    ATT-COS5\n    end\n    subgraph low\n    ATT-COS4\n    end\n    subgraph medium\n    ATT-COS2V\n    ATT-COS2\n    ATT-COS3\n    end\n    subgraph high\n    ATT-COS1\n    ATT-control\n    end\n",mdxType:"Mermaid"}),Object(o.b)("p",null,"Each AT&T AVPN circuit has a ",Object(o.b)("em",{parentName:"p"},"profile"),' associated with it (referred to as a "COS Package"), that maps to bandwidth allocations for the various COS queues. These in turn need to be mapped to the four egress traffic engineering queues on the 128T. The COS Package from AT&T is expressed as a set of six numbers (corresponding to the queues), where the first number is the percentage of the circuit bandwidth allocated for COS1, and the remaining five numbers (which sum to 100%) represent the amount of ',Object(o.b)("em",{parentName:"p"},"bandwidth remaining")," from the bandwidth not used by COS1."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Math involved."))),Object(o.b)("h3",{id:"sizing-the-traffic-engineering-policy"},"Sizing the Traffic Engineering Policy"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Traffic Class"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"high"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COS1 percentage from COS Profile")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"medium"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(sum of COS2V + COS2 + COS3) * (100% - COS1 bandwidth)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"low"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COS4 * (100% - COS1 bandwidth)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"best-effort"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COS5 * (100% - COS1 bandwidth)")))),Object(o.b)("p",null,"Example (simple COS profile for a 6COS model):"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS1"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS2V"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS2"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS3"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS4"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"COS5"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"5%"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"20%"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"20%"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"20%"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"20%"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"20%")))),Object(o.b)("p",null,"In this case, the ",Object(o.b)("inlineCode",{parentName:"p"},"high")," percentage is ",Object(o.b)("inlineCode",{parentName:"p"},"5"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"medium")," class gets 60% (20% + 20% + 20%) of the remaining 95%, which is ",Object(o.b)("inlineCode",{parentName:"p"},"57"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"low")," class gets 20% of the remaining 95%, which is ",Object(o.b)("inlineCode",{parentName:"p"},"19"),". And ",Object(o.b)("inlineCode",{parentName:"p"},"best-effort")," also gets 20%, which is ",Object(o.b)("inlineCode",{parentName:"p"},"19"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"These values are merely starting points that should line up to the COS Profile of the AT&T AVPN circuit. Further tuning is left to the discretion of the network engineer."))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"traffic-profile")," would therefore look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler# show config candidate authority traffic-profile 6COS-simple\n\nconfig\n\n   authority\n\n       traffic-profile  6COS-simple\n           name         6COS-simple\n\n           high\n               distribution  5\n           exit\n\n           medium\n               distribution  57\n           exit\n\n           low\n               distribution  19\n           exit\n\n           best-effort\n               distribution  19\n           exit\n       exit\n   exit\nexit\n")),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"traffic-profile")," is applied to a ",Object(o.b)("inlineCode",{parentName:"p"},"device-interface"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler# show config candidate authority router newton node labsystem2 device eno4 traffic-engineering\n\nconfig\n\n    authority\n\n        router  newton\n            name  newton\n\n            node  labsystem2\n                name              labsystem2\n\n                device-interface  eno4\n                    name                 eno4\n\n                    traffic-engineering\n                        transmit-cap     100000000\n                        traffic-profile  6COS-simple\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("h2",{id:"appendix-service-class-configuration"},"Appendix: Service Class Configuration"),Object(o.b)("p",null,"The following configuration output is presented here to facilitate copy/paste into your 128T conductor."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Because the ",Object(o.b)("inlineCode",{parentName:"p"},"dscp")," value is a key field for the ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," object, no two ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," configurations can share the same value. This will likely require you to delete existing ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," configuration, as the 128T ships with ",Object(o.b)("em",{parentName:"p"},"factory default")," ",Object(o.b)("inlineCode",{parentName:"p"},"service-class")," elements that will conflict with the ones presented below."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'config authority service-class ATT-COS1 name           ATT-COS1\nconfig authority service-class ATT-COS1 description    "Real-time applications (EF)"\nconfig authority service-class ATT-COS1 dscp           46\nconfig authority service-class ATT-COS1 traffic-class  high\nconfig authority service-class ATT-COS2V name           ATT-COS2V\nconfig authority service-class ATT-COS2V description    "Delay-sensitive applications (AF41)"\nconfig authority service-class ATT-COS2V dscp           34\nconfig authority service-class ATT-COS2V traffic-class  medium\nconfig authority service-class ATT-COS2 name           ATT-COS2\nconfig authority service-class ATT-COS2 description    "Time-sensitive mission-critical low-bandwidth applications (AF31)"\nconfig authority service-class ATT-COS2 dscp           26\nconfig authority service-class ATT-COS2 traffic-class  medium\nconfig authority service-class ATT-COS3 name           ATT-COS3\nconfig authority service-class ATT-COS3 description    "Time-sensitive mission-critical applications (AF21)"\nconfig authority service-class ATT-COS3 dscp           18\nconfig authority service-class ATT-COS3 traffic-class medium\nconfig authority service-class ATT-COS4 name           ATT-COS4\nconfig authority service-class ATT-COS4 description    "Best effort (default)"\nconfig authority service-class ATT-COS4 dscp           0\nconfig authority service-class ATT-COS4 traffic-class  best-effort\nconfig authority service-class ATT-COS5 name           ATT-COS5\nconfig authority service-class ATT-COS5 description    "Scavenger (AF11)"\nconfig authority service-class ATT-COS5 dscp           10\nconfig authority service-class ATT-COS5 traffic-class  best-effort\nconfig authority service-class ATT-control name           ATT-control\nconfig authority service-class ATT-control description    "Control traffic only (CS6)"\nconfig authority service-class ATT-control dscp           48\nconfig authority service-class ATT-control traffic-class  high\n')))}h.isMDXComponent=!0},728:function(e,t,n){var a={"./locale":402,"./locale.js":402};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=728}}]);