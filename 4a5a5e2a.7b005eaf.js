(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(11),o=(n(0),n(223)),r={title:"Border Gateway Protocol (BGP)",sidebar_label:"BGP"},c={id:"howto_bgp",title:"Border Gateway Protocol (BGP)",description:"Border Gateway Protocol, a.k.a, BGP is a standard exterior gateway protocol developed for exchanging routing and reachability information between Autonomous Systems, a collection of IP routing prefixes managed by a single administrative entity. BGP makes routing decisions based on paths and network policies and is mainly used by Service Providers. BGP can also be used for routing within an autonomous system using its flavor iBGP, which is less popular than other IGP protocols such as OSPF, EIGRP, etc.",source:"@site/docs/howto_bgp.md",permalink:"/docs/howto_bgp",editUrl:"https://github.com/128technology/docs/tree/master/docs/howto_bgp.md",lastUpdatedAt:1586828518,sidebar_label:"BGP",sidebar:"docs",previous:{title:"Configuration Templates",permalink:"/docs/config_templates"},next:{title:"Conductor Migration",permalink:"/docs/howto_conductor_migration"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"BGP Configuration when peer is non-128T",id:"bgp-configuration-when-peer-is-non-128t",children:[]},{value:"BGP over SVR",id:"bgp-over-svr",children:[]},{value:"BGP Verification",id:"bgp-verification",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Border Gateway Protocol, a.k.a, BGP is a standard exterior gateway protocol developed for exchanging routing and reachability information between Autonomous Systems, a collection of IP routing prefixes managed by a single administrative entity. BGP makes routing decisions based on paths and network policies and is mainly used by Service Providers. BGP can also be used for routing within an autonomous system using its flavor iBGP, which is less popular than other IGP protocols such as OSPF, EIGRP, etc."),Object(o.b)("p",null,"Learning routes from BGP simplifies enterprise configuration and integration with Secure Vector Routing. BGP over SVR enables easy distribution of service route information when traffic between 128T peers flows through the internet and adds the security of SVR to the BGP peering."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"This section presumes that the reader has a running 128T system and wants to add configuration to support and configure BGP. The running 128T system includes configuration for basic platform functionality (e.g., router, node, device-interface, network-interface) and basic routing configuration (e.g., tenants, services, etc.). Refer to the 128T ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/concepts_glossary"}),"data model")," and the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/cli_reference"}),"Configuration Guide")," for a better understanding about 128T networking."),Object(o.b)("h2",{id:"bgp-configuration-when-peer-is-non-128t"},"BGP Configuration when peer is non-128T"),Object(o.b)("p",null,"The BGP configuration exists in the routing configuration container in the 128T data model. For any routing configuration, static or dynamic, a default routing instance called ",Object(o.b)("inlineCode",{parentName:"p"},"default-instance"),", must be defined in the 128T configuration template.\nAssuming that BGP is configured on the peering router with router ID 1.1.1.1 as AS 6000 and the 128T router as the BGP peer, we can configure BGP on our 128T using the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# local-as 100\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# router-id 1.1.1.128\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# address-family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# exit\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# neighbor 1.1.1.1\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# neighbor-as 6000\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# address-family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# next-hop-self true\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])#exit admin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# exit\n")),Object(o.b)("p",null,"Under the default routing instance, specify the routing protocol as BGP using ",Object(o.b)("inlineCode",{parentName:"p"},"routing-protocol bgp"),". Once inside the routing-protocol element, specify the ",Object(o.b)("inlineCode",{parentName:"p"},"local-as <as number>")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"router-id <loopback ip>"),". Now, specify the address family as ",Object(o.b)("inlineCode",{parentName:"p"},"ipv4-unicast"),"."),Object(o.b)("p",null,"Next, configure the neighbor by specifying the neighbor address using ",Object(o.b)("inlineCode",{parentName:"p"},"neighbor <loopback ip>")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"neighbor-as <as number>"),". Under the neighbor element configure the address family using ",Object(o.b)("inlineCode",{parentName:"p"},"address-family ipv4-unicast")," and enable ",Object(o.b)("inlineCode",{parentName:"p"},"next-hop-self")," as ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"During advertisement, the non-directly connected routers to an external peer need to learn how to reach an advertised route. To provide this information to the non-directly connected as well as iBGP peers, ",Object(o.b)("strong",{parentName:"p"},"next-hop-self")," command is used."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For BGP neighbor configuration, the ",Object(o.b)("inlineCode",{parentName:"p"},"local-as")," command (under the neighbor instance) can be leveraged when you want to use a specific AS number for your router while peering with that particular neighbor. Note that this AS number ",Object(o.b)("strong",{parentName:"p"},"cannot"),"  be the same as the actual AS number that is configured directly under the routing-protocol instance."))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# local-as 100 admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# router-id 1.1.1.128\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# address-family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# exit\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# neighbor 1.1.1.1\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# neighbor-as 6000\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# local-as 62000\n")),Object(o.b)("p",null,"Go up to the protocol level and issue a ",Object(o.b)("inlineCode",{parentName:"p"},"show")," command to view the BGP config prior to committing any changes. An example BGP configuration might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# show\ntype            bgp\nlocal-as        100\nrouter-id       1.1.1.128\n\naddress-family  ipv4-unicast\n    afi-safi           ipv4-unicast\nexit\n\nneighbor        1.1.1.1\n    neighbor-address   1.1.1.1\n    neighbor-as        6000\n    shutdown           false\n    \n    \n    address-family     ipv4-unicast\n        afi-safi       ipv4-unicast\n        next-hop-self  true\n    exit\nexit\n")),Object(o.b)("p",null,"To advertise routes to BGP, configure the network to be advertised under the address-family of the router. You may also apply a policy to the advertised route using ",Object(o.b)("inlineCode",{parentName:"p"},"policy <>")," command."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can configure the policies directly under the authority level routing configuration, i.e., ",Object(o.b)("inlineCode",{parentName:"p"},"config > authority > routing > filters/policies"),". You must create a filter to match the desired traffic and then create a policy based on that filter. Refer to the ",Object(o.b)("em",{parentName:"p"},"filters/policies guide")," for detailed information."))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing- protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# address- family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# network 172.16.255.0/30\nadmin@branchoffice1.seattlesite1 (network[network- address=172.16.255.0/30])# policy allow\nadmin@branchoffice1.seattlesite1 (network[network- address=172.16.255.0/30])# exit\n")),Object(o.b)("p",null,"To redistribute connected, static, service and/or OSPF routes specifying ",Object(o.b)("inlineCode",{parentName:"p"},"redistribute <connected/static/service/ospf>")," within the routing protocol element of the default- routing instance."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# redistribute connected\n")),Object(o.b)("p",null,"While configuring iBGP, you may need to enable the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Route Reflector"))," option to facilitate easy learning of routes. Your 128T can be configured as a route reflector client for a particular neighbor under the specific neighbor configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# neighbor 1.1.1.1\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=1.1.1.1])# address-family ipv4-unicast\ndmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# route-reflector client true\ndmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# exit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# show\nafi-safi         ipv4-unicast\nnext-hop-self    true\n\nroute-reflector\n    client  true\nexit\n")),Object(o.b)("p",null,"When configuring iBGP, the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Confederation"))," feature may come in handy when dealing with an enormous autonomous system. This feature allows you to break up the AS into smaller sub-autonomous systems. Confederation can be directly configured under the routing protocol element. Here, 65535 is the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"confederation identifier AS number"))," and, 1100 and 2200 are the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"member AS"))," numbers of that confederation AS."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\n*admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# confederation identifier 65535\n*admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# confederation member-as 1100\n*admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# confederation member-as 2200\n*admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# exit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"*admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# show\ntype.           bgp\nlocal-as        100\nrouter-id       10.128.128.2\n\nconfederation\n    identifier  65535\n    member-as   1100\n    member-as   2200\nexit\n")),Object(o.b)("h2",{id:"bgp-over-svr"},"BGP over SVR"),Object(o.b)("p",null,"BGP over SVR can be used when peering with a 128T. This provides the benefit of Secure Vector Routing for all BGP traffic flowing to-and-from the 128T peers. To begin configuring BGP over SVR, ensure that the running 128T system has configuration for basic platform functionality."),Object(o.b)("p",null,"Next, we need to configure a ",Object(o.b)("em",{parentName:"p"},"routing interface"),", which is similar to a loopback interface on traditional routers. Unlike normal loopback BGP peering, this IP address does not need to be routable on the transport network as it will never see the wire. A BGP peer will be created on this interface. The conductor will then trigger on this and configure a few more pieces (autogenerated) to activate BGP over SVR, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"bgp_speaker")," tenant"),Object(o.b)("li",{parentName:"ul"},"Auto-generated BGP services and service routes"),Object(o.b)("li",{parentName:"ul"},"Router Peers")),Object(o.b)("p",null,"Those peerings will then be protected by SVR."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"One must use a conductor for BGP over SVR as a manual configuration is unsupported."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If the WAN interface of your 128T or the interface facing the 128T-BGP peer is already part of a neighborhood, then ensure that their topology type (",Object(o.b)("inlineCode",{parentName:"p"},"network-interface > neighborhoods > topology"),") is such that it allows the routers to form peering relationships for the auto-generated peer service routes, e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"mesh-mesh"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mesh-hub"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mesh-spoke")," or ",Object(o.b)("inlineCode",{parentName:"p"},"hub-spoke"),". More information on neighborhoods can be found in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/concepts_glossary#neighborhoods"}),"glossary")))),Object(o.b)("p",null,"Next, configure a BGP instance with the router\u2019s local AS and a router ID that matches the self-routing interface IP. For each BGP over SVR peer, use a neighbor address of the neighbor routing interface IP address. Next, configure the normal BGP peer configuration options such as the timers and address families that are needed. In address-family IPv4-unicast ",Object(o.b)("inlineCode",{parentName:"p"},"next-hop-self")," must be set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"If BGP over SVR is with eBGP, set the ",Object(o.b)("inlineCode",{parentName:"p"},"multihop ttl")," to at least 2."),Object(o.b)("p",null,"Configuration Template:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n  authority\n    router <router name> routing default-instance\n      type default-instance\n      interface rtg-int\n        name rtg-int\n        ip-address <self rtg-int ip>\n      exit\n      routing-protocol bgp\n        type bgp\n        local-as <local as>\n        router-id <self rtg-int ip>\n        neighbor <neighbor rtg-int ip>\n          neighbor-address <neighbor rtg-int ip>\n          neighbor-as <neighbor as>\n          timers\n            hold-time 9\n            keepalive-interval 3\n          exit\n          address-family ipv4-unicast\n            afi-safi ipv4-unicast\n            next-hop-self true\n          exit\n          transport\n            local-address\n              routing-interface rtg-int\n            exit\n          exit\n          multihop\n            ttl 255\n          exit\n        exit\n      exit\n    exit\n  exit\nexit\n")),Object(o.b)("p",null,"Sample Configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# config auth admin@branchoffice1.seattlesite1 (authority)# router seattlesite1 admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# routing default-instance\nadmin@branchoffice1.seattlesite1 (routing[type=default-instance])# interface bgp-int-seattle\nadmin@branchoffice1.seattlesite1 (interface[name=bgp-int-seattle])# ip- address 10.128.128.2\nadmin@branchoffice1.seattlesite1 (interface[name=bgp-int-seattle])# exit admin@branchoffice1.seattlesite1 (routing[type=default-instance])# routing-protocol bgp\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# local-as 100 admin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# router-id 10.128.128.2\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# address- family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# exit\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# neighbor 10.128.128.1\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=10.128.128.1])# neighbor-as 300\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=10.128.128.1])# address-family ipv4-unicast\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# next-hop-self true\nadmin@branchoffice1.seattlesite1 (address-family[afi-safi=ipv4-unicast])# exit\nadmin@branchoffice1.seattlesite1 (neighbor[neighbor-address=10.128.128.1])# transport\nadmin@branchoffice1.seattlesite1 (transport)# local-address admin@branchoffice1.seattlesite1 (local-address)# routing-interface bgp-int-seattle\nadmin@branchoffice1.seattlesite1 (local-address)# exit admin@branchoffice1.seattlesite1 (transport)# exit admin@branchoffice1.seattlesite1 (neighbor[neighbor-address=10.128.128.1])# multihop\nadmin@branchoffice1.seattlesite1 (multihop)# ttl 5 admin@branchoffice1.seattlesite1 (multihop)# exit admin@branchoffice1.seattlesite1 (neighbor[neighbor-address=10.128.128.1])# exit\nadmin@branchoffice1.seattlesite1 (routing-protocol[type=bgp])# exit admin@branchoffice1.seattlesite1 (routing[type=default-instance])# exit admin@branchoffice1.seattlesite1 (router[name=seattlesite1])# exit admin@branchoffice1.seattlesite1 (authority)# exit admin@branchoffice1.seattlesite1#\n")),Object(o.b)("h2",{id:"bgp-verification"},"BGP Verification"),Object(o.b)("p",null,"Issue the command ",Object(o.b)("inlineCode",{parentName:"p"},"show bgp")," on your router:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# show bgp\nWed 2019-02-20 23:14:58 UTC\nBGP table version is 12, local router ID is 10.128.128.2, vrf id 0\nStatus codes:  s suppressed, d damped, h history, * valid, > best, = multipath,\n               i internal, r RIB-failure, S Stale, R Removed\nNexthop codes: @NNN nexthop's vrf id, < announce-nh-self\nOrigin codes: i - IGP, e - EGP, ? - incomplete\n\n   Network          Next Hop            Metric LocPrf Weight Path\n   10.128.128.2/32  10.128.128.3                           0 200 300 ?\n   10.128.128.3/32  10.128.128.3                           0 200 300 ?\n   128.128.128.1/32 10.128.128.3                           0 200 300 ?\n   128.128.128.128/32\n                    10.128.128.3                           0 200 300 ?\n   172.16.128.2/32  10.128.128.3                           0 200 300 ?\n   172.16.255.0/30  0.0.0.0                  0         32768 i\n   172.26.128.0/30  10.128.128.3                           0 200 300 i\n\nDisplayed  7 routes and 7 total paths\n")),Object(o.b)("p",null,"In addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"show bgp")," branch of output, you will now see contributions to the RIB from BGP in the output of ",Object(o.b)("inlineCode",{parentName:"p"},"show rib"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@branchoffice1.seattlesite1# show rib\nWed 2018-08-22 16:50:00 UTC\nCodes: K - kernel route, C - connected, S - static, R - RIP,\n       O - OSPF, I - IS-IS, B - BGP, P - PIM, T - Table, V - VNC,\n       V - VNC-Direct,\n       > - selected route, * - FIB route\n\nB   1.1.1.0/24 [20/0] via 1.1.1.1 inactive, 22:28:18\nC>* 1.1.1.0/24 is directly connected, g4\nB>* 2.2.2.0/24 [20/0] via 1.1.1.1, g4, 22:28:18\nB>* 3.3.3.0/24 [20/0] via 1.1.1.1, g4, 22:28:18\nC>* 10.0.128.0/31 is directly connected, g1\nK>* 128.128.128.1/32 is directly connected, Null0, bh\nK>* 128.128.128.128/32 is directly connected, Null0, bh\nC>* 169.254.127.126/31 is directly connected, g4294967294\nS>* 172.16.128.2/32 [1/0] via 10.0.128.1, g1\nK   172.16.128.2/32 is directly connected, Null0, bh\nK>* 172.26.128.2/32 is directly connected, Null0, bh\nC>* 192.168.64.0/24 is directly connected, g2\n\nCompleted in 0.09 seconds\n")))}b.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),f=i,u=d["".concat(r,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(u,c({ref:t},l,{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);