(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(205)),o={title:"GRE Plugin",sidebar_label:"GRE"},c={unversionedId:"plugin_gre",id:"plugin_gre",isDocsHomePage:!1,title:"GRE Plugin",description:"The 128T GRE plugin can be used for creating IPv4 GRE tunnels between a 128T router and a remote GRE tunnel destination. For services such as Zscaler, this provides better throughput compared to other tunneling mechanisms.",source:"@site/docs/plugin_gre.md",slug:"/plugin_gre",permalink:"/docs/plugin_gre",version:"current",lastUpdatedAt:1615853318,sidebar_label:"GRE",sidebar:"docs",previous:{title:"DNS Cache Plugin",permalink:"/docs/plugin_dns_cache"},next:{title:"ICMP Reachability Detection Plugin",permalink:"/docs/plugin_icmp_reachability_detection"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Remote GRE tunnel information",id:"remote-gre-tunnel-information",children:[]},{value:"Tunnel ICMP health check parameters",id:"tunnel-icmp-health-check-parameters",children:[]},{value:"128T services to transport over the tunnel",id:"128t-services-to-transport-over-the-tunnel",children:[]},{value:"WAN interfaces for sending the tunnel packets",id:"wan-interfaces-for-sending-the-tunnel-packets",children:[]},{value:"Other configuration",id:"other-configuration",children:[]}]},{value:"Debugging &amp; Troubleshooting",id:"debugging--troubleshooting",children:[{value:"Config Generation",id:"config-generation",children:[]},{value:"GRE Tunnel not working on the router",id:"gre-tunnel-not-working-on-the-router",children:[]},{value:"Tunnel operation",id:"tunnel-operation",children:[]}]},{value:"Release Notes",id:"release-notes",children:[{value:"Release 3.0.0",id:"release-300",children:[]},{value:"Release 1.1.3, 2.1.3",id:"release-113-213",children:[]},{value:"Release 1.1.2, 2.1.2",id:"release-112-212",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The 128T GRE plugin can be used for creating IPv4 GRE tunnels between a 128T router and a remote GRE tunnel destination. For services such as Zscaler, this provides better throughput compared to other tunneling mechanisms."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The instructions for installing and managing the plugin can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The GRE plugin can be configured on an individual router. In order to configure the tunnel, it is important to collect the following information up-front:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Remote tunnel information"),Object(i.b)("li",{parentName:"ul"},"Ingress traffic to be sent through the tunnel"),Object(i.b)("li",{parentName:"ul"},"WAN interfaces to be used for sending the tunnel traffic")),Object(i.b)("h3",{id:"remote-gre-tunnel-information"},"Remote GRE tunnel information"),Object(i.b)("h4",{id:"tunnel-information"},"Tunnel information"),Object(i.b)("p",null,"First and foremost, it is important to identify the address and other probe parameter for the remote GRE endpoints."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 gre\n\nconfig\n\n    authority\n\n        router  router1\n            name  router1\n\n            gre\n                enabled       true\n\n                destination   pri-tunnel\n                    name  pri-tunnel\n                    host  192.168.20.13\n                exit\n\n                destination   sec-tunnel\n                    name  sec-tunnel\n                    host  192.168.30.14\n\n                    icmp-keep-alive\n                        link-test-interval  10\n                        number-of-retries   5\n                        retry-interval      5\n                    exit\n                exit\n\n                enabled-node  node1\n                    node-name    node1\n                    tenant       _internal_\n                    destination  pri-tunnel\n                    destination  sec-tunnel\n                exit\n            exit\n        exit\n    exit\nexit\n\nadmin@node1.conductor1#\n")),Object(i.b)("p",null,"In the above example, you will notice there are two tunnels configured on the router. Each ",Object(i.b)("inlineCode",{parentName:"p"},"destination")," represents a single tunnel interface and allows the user to configure an IPv4 address for the destination. The ",Object(i.b)("inlineCode",{parentName:"p"},"enabled-node")," configuration allows the user to control which 128T router node will be operating which tunnel. In addition the ",Object(i.b)("inlineCode",{parentName:"p"},"enabled-node > tenant")," can be used to apply a specific tenant for the GRE tunnel traffic. For each destination on each enabled-node, the 128T router creates a unique KNI interface and the configured tenant is applied to this interface."),Object(i.b)("h3",{id:"tunnel-icmp-health-check-parameters"},"Tunnel ICMP health check parameters"),Object(i.b)("p",null,"The GRE tunnels do not have an inherent mechanism to detect the availability of remote peers.  As a result, the GRE plugin allows the user to configure ICMP probes to the destination. The configuration is enabled by default with the following settings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"icmp-keep-alive\n    link-test-interval  10\n    number-of-retries   5\n    retry-interval      5\nexit\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The time interval for the attributes are in seconds."))),Object(i.b)("p",null,"Every ",Object(i.b)("inlineCode",{parentName:"p"},"link-test-interval")," an icmp check is performed to determine the availability of the remote tunnel peer. For an unresponsive peer, a total of ",Object(i.b)("inlineCode",{parentName:"p"},"number-of-retries + 1")," icmp ping attempts will be made within the ",Object(i.b)("inlineCode",{parentName:"p"},"retry-interval"),". If the peer does not respond to any of these ping attempts, then its considered as down. In the above config, assuming an unresponsive peer, first ping is sent at 10 seconds, followed by 5 more pings at 1 second interval each. In total taking the system about 15 seconds and 6 pings to detect a peer as down. Once a peer is considered down, the next attempt to detect the tunnel liveliness is made after 10 seconds (or the ",Object(i.b)("inlineCode",{parentName:"p"},"link-test-interval"),")."),Object(i.b)("p",null,"In the above example, the two tunnels ",Object(i.b)("inlineCode",{parentName:"p"},"pri-tunnel")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sec-tunnel")," create two additional KNI interfaces called ",Object(i.b)("inlineCode",{parentName:"p"},"gre-0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gre-1")," respectively. When a tunnel is determined to be non-responsive, the corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"gre-x")," interface is brought down. For example, in the above config, when the ",Object(i.b)("inlineCode",{parentName:"p"},"pri-tunnel")," goes down, the corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"gre-0")," interface is brought down as well. This allows for traffic to fail over to a secondary tunnel if available. More details on this will be explained later in the document."),Object(i.b)("h4",{id:"icmp-health-check-to-private-address"},"ICMP health check to private address"),Object(i.b)("h5",{id:"version-history"},"Version History"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Modification"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.1.0, 2.1.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"icmp-keep-alive > address-type")," was introduced")))),Object(i.b)("p",null,"Some GRE tunnel providers require the endpoint to ping an internal private address to detect the tunnel liveliness. The ",Object(i.b)("inlineCode",{parentName:"p"},"icmp-keep-alive > address-type")," can be used to configure a private address for keep-alive detection. Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"gre\n    enabled         true\n    plugin-network  192.168.10.0/28\n\n    destination     pri-tunnel\n        name             pri-tunnel\n        host             192.168.20.13\n\n        icmp-keep-alive\n            address-type  custom\n            address       192.168.10.13\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"In the above configuration, the ",Object(i.b)("inlineCode",{parentName:"p"},"address-type > custom")," is used to set a private icmp-address of ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.10.13"),". In doing so, the icmp-health check algorithm described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#tunnelicmp_health_check_parameters"}),"above")," will be run on the private address of ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.10.13")," instead of the default ",Object(i.b)("inlineCode",{parentName:"p"},"destination > host"),". The behavior in terms of declaring the tunnel as down and continuous monitoring remains the same."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When using a private ICMP address, its important to also use an in-subnet address for the generated KNIs. This can be accomplished by configuring the appropriate ",Object(i.b)("inlineCode",{parentName:"p"},"plugin-network")," as illustrated in the example above."))),Object(i.b)("h3",{id:"128t-services-to-transport-over-the-tunnel"},"128T services to transport over the tunnel"),Object(i.b)("p",null,"Next step is to identify the the prefix or the subnet to be transported over the tunnel. In some cases, it might be desirable to transport all internet traffic through the tunnel, so the prefix could be as simple as 0.0.0.0/0. This can be done by capturing the prefix in a 128T service and setting the next-hop as the ",Object(i.b)("inlineCode",{parentName:"p"},"gre-x")," interfaces. As noted in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#tunnelicmp_health_check_parameters"}),"previous section"),", each destination on a given node corresponds to a ",Object(i.b)("inlineCode",{parentName:"p"},"gre-x")," inteface. By configuring the next-hop as the appropriate GRE interfaces, it allows the incoming traffic to be service-function chained to a GRE tunnel towards a WAN interface."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service lan-svc\n\nconfig\n\n    authority\n\n        service  lan-svc\n            name           lan-svc\n            address        192.168.10.0/24\n\n            access-policy  lan\n                source  lan\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route lan-svc-rte-primary\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  lan-svc-rte-primary\n                name          lan-svc-rte-primary\n                service-name  lan-svc\n\n                next-hop      node1 gre-0-intf\n                    node-name   node1\n                    interface   gre-0-intf\n                    gateway-ip  169.254.132.10\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route lan-svc-rte-secondary\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  lan-svc-rte-secondary\n                name          lan-svc-rte-secondary\n                service-name  lan-svc\n\n                next-hop      node1 gre-1-intf\n                    node-name   node1\n                    interface   gre-1-intf\n                    gateway-ip  169.254.132.14\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"In the example above, all the ",Object(i.b)("inlineCode",{parentName:"p"},"lan")," tenant traffic in the ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.10.0/24")," subnet will be sent to the ",Object(i.b)("inlineCode",{parentName:"p"},"gre-0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gre-1")," network interfaces. These ",Object(i.b)("inlineCode",{parentName:"p"},"gre-x-intf")," are auto generated by the conductor and correspond to the configured destination. In the above config, when the ",Object(i.b)("inlineCode",{parentName:"p"},"gre-0")," interface will be used as primary target for lan subnet while that tunnel is up. If the ",Object(i.b)("inlineCode",{parentName:"p"},"pri-tunnel")," goes down, all new sessions will automatically be routed to the ",Object(i.b)("inlineCode",{parentName:"p"},"sec-tunnel")," via the ",Object(i.b)("inlineCode",{parentName:"p"},"gre-1")," interface."),Object(i.b)("h3",{id:"wan-interfaces-for-sending-the-tunnel-packets"},"WAN interfaces for sending the tunnel packets"),Object(i.b)("p",null,"Another piece of configuration that is auto-generated is the service corresponding to the two configured tunnels. In the above example, the two tunnels ",Object(i.b)("inlineCode",{parentName:"p"},"pri-tunnel")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sec-tunnel")," will trigger two auto-generated services, one for each of the destination. The generated service will look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service gre_router1__internal__0\n\nconfig\n\n    authority\n\n        service  gre_router1__internal__0\n            name                  gre_router1__internal__0\n\n            applies-to            router\n                type         router\n                router-name  router1\n            exit\n\n            transport             gre\n                protocol  gre\n            exit\n\n            transport             icmp\n                protocol  icmp\n            exit\n            address               192.168.20.13\n\n            access-policy         _internal_\n                source      _internal_\n                permission  allow\n            exit\n            share-service-routes  false\n        exit\n    exit\nexit\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service gre_router1__internal__1\n\nconfig\n\n    authority\n\n        service  gre_router1__internal__1\n            name                  gre_router1__internal__1\n\n            applies-to            router\n                type         router\n                router-name  router1\n            exit\n\n            transport             gre\n                protocol  gre\n            exit\n\n            transport             icmp\n                protocol  icmp\n            exit\n            address               192.168.30.14\n\n            access-policy         _internal_\n                source      _internal_\n                permission  allow\n            exit\n            share-service-routes  false\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"The next step, is to configure the service-routes or other routing configuration for these generated services. Typically, such routes are directed towards the WAN interface and user has full control over how & where this traffic can be routed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route pri_tunnel_rte\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  pri_tunnel_rte\n                name          pri_tunnel_rte\n                service-name  gre_router1__internal__0\n\n                next-hop      node1 dpdk2-wan1-intf\n                    node-name        node1\n                    interface        dpdk2-wan1-intf\n                    source-nat-pool  gre-dpdk2-nat-pool\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route sec_tunnel_rte\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  sec_tunnel_rte\n                name          sec_tunnel_rte\n                service-name  gre_router1__internal__1\n\n                next-hop      node1 dpdk3-wan2-intf\n                    node-name        node1\n                    interface        dpdk3-wan2-intf\n                    source-nat-pool  gre-dpdk3-nat-pool\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("h4",{id:"static-source-nat-considerations"},"Static Source NAT considerations"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This section can be skipped for WAN interface types of PPPoE and LTE"))),Object(i.b)("p",null,"Please note that the ",Object(i.b)("inlineCode",{parentName:"p"},"next-hop")," is making use of a ",Object(i.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," called ",Object(i.b)("inlineCode",{parentName:"p"},"gre-dpdk2-nat-pool")," for example. This nat-pool is necessary for performing a source nat of the GRE tunnel traffic depending on which egress interface are being used."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"network-interface > source-nat")," flag does not support GRE, hence the ",Object(i.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," is required."))),Object(i.b)("p",null,"The sample ",Object(i.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," configuration is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 nat-pool gre-dpdk2-nat-pool\n\nconfig\n\n    authority\n\n        router  router1\n            name      router1\n\n            nat-pool  gre-dpdk2-nat-pool\n                name          gre-dpdk2-nat-pool\n\n                address-pool  192.168.20.12/32\n                    address      192.168.20.12/32\n                    tenant-name  _internal_\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 nat-pool gre-dpdk3-nat-pool\n\nconfig\n\n    authority\n\n        router  router1\n            name      router1\n\n            nat-pool  gre-dpdk3-nat-pool\n                name          gre-dpdk3-nat-pool\n\n                address-pool  192.168.30.12/32\n                    address      192.168.30.12/32\n                    tenant-name  _internal_\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("h3",{id:"other-configuration"},"Other configuration"),Object(i.b)("h4",{id:"mss-clamping"},"MSS Clamping"),Object(i.b)("h5",{id:"version-history-1"},"Version History"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Release"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Modification"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.1.0, 2.1.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"enforced-mss")," was introduced")))),Object(i.b)("p",null,"The TCP MSS (maximum segment size) is the amount of data that the interface is willing to accept in a single TCP segment. This option is negotiated by the client and server based on their local environments. However, tunneling adds extra overhead in terms of packet bytes so its important to be able to adjust the MSS (maximum segment-size) for TCP connections by the routers. By default, the ",Object(i.b)("inlineCode",{parentName:"p"},"enforced-mss")," is set to be ",Object(i.b)("inlineCode",{parentName:"p"},"path-mtu")," which allows us to automatically adjust the MSS based on the MTU of the tunnel interface. In addition, user can override the value to a static number as shown in the example below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"gre\n    enabled         true\n    plugin-network  192.168.10.0/28\n\n    destination     dut3-tunnel\n        name             dut3-tunnel\n        host             192.168.20.13\n        enforced-mss     1300\n    exit\nexit\n")),Object(i.b)("h2",{id:"debugging--troubleshooting"},"Debugging & Troubleshooting"),Object(i.b)("h3",{id:"config-generation"},"Config Generation"),Object(i.b)("p",null,"When the plugin is installed on the conductor, each commit triggers two scripts called ",Object(i.b)("inlineCode",{parentName:"p"},"generate_confguration")," and ",Object(i.b)("inlineCode",{parentName:"p"},"generate_pillar")," to auto-generate KNI, services etc and to generate pillar data for each router. Please check the following locations for debugging information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Logs for the config and pillar generation for each commit can be found here")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/var/log/128technology/plugins/gre-generate-config.log\n/var/lib/128technology/plugins/pillar/gre/<router>.sls\n")),Object(i.b)("h3",{id:"gre-tunnel-not-working-on-the-router"},"GRE Tunnel not working on the router"),Object(i.b)("p",null,"When the config and pillar data are successfully generated, a ",Object(i.b)("inlineCode",{parentName:"p"},"t128-setup-gre")," RPM is installed on the router itself. As part of this process, a script called ",Object(i.b)("inlineCode",{parentName:"p"},"handle_gre_config")," is executed which will create all the necessary config etc on the running system."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Logs for the config generation on the router can be found here")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/var/log/128technology/plugins/gre-handle-config.log\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Debugging the runtime status of the GRE tunnels can be done by monitoring the journal for the following tags")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"journalctl -t /monitoring_script.par -t /init.par\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For debugging the linux network namespace, here are some of the common commands along with the relevant output of how a healthy system would look like")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ip netns pri-tunnel ip addr")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# ip netns pri-tunnel ip addr\n...\n\n4: pri-tunnel-t0@NONE: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1476 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/gre 169.254.132.2 peer 192.168.20.13\n    inet6 fe80::5efe:a9fe:8402/64 scope link\n       valid_lft forever preferred_lft forever\n108: pri-tunnel: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether ca:9f:53:9a:de:c2 brd ff:ff:ff:ff:ff:ff\n    inet 169.254.132.2/30 brd 169.254.132.3 scope global pri-tunnel\n       valid_lft forever preferred_lft forever\n    inet6 fe80::c89f:53ff:fe9a:dec2/64 scope link\n       valid_lft forever preferred_lft forever\n110: gre-0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 9e:20:89:e4:49:3f brd ff:ff:ff:ff:ff:ff\n    inet 169.254.132.10/30 brd 169.254.132.11 scope global gre-0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::9c20:89ff:fee4:493f/64 scope link\n       valid_lft forever preferred_lft forever\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ip netns pri-tunnel ip route show table all ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# ip netns pri-tunnel ip route show table all\ndefault via 169.254.132.9 dev gre-0 table 128\ndefault dev pri-tunnel-t0 scope link\n192.168.20.13 via 169.254.132.1 dev pri-tunnel\n169.254.0.0/16 dev pri-tunnel scope link metric 1108\n169.254.0.0/16 dev gre-0 scope link metric 1110\n169.254.132.0/30 dev pri-tunnel proto kernel scope link src 169.254.132.2\n169.254.132.8/30 dev gre-0 proto kernel scope link src 169.254.132.10\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ip netns pri-tunnel ip rule list ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# ip netns pri-tunnel ip rule list\n0:      from all lookup local\n32765:  from all iif pri-tunnel-t0 lookup 128\n32766:  from all lookup main\n32767:  from all lookup default\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ip netns exec pri-tunnel iptables -nvL ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# ip netns exec pri-tunnel iptables -nvL\nChain INPUT (policy ACCEPT 13167 packets, 474K bytes)\n pkts bytes target     prot opt in     out     source               destination\n\nChain FORWARD (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination\n    0     0 TCPMSS     tcp  --  pri-tunnel-t0 *       0.0.0.0/0            0.0.0.0/0            tcp flags:0x06/0x02 TCPMSS clamp to PMTU\n\nChain OUTPUT (policy ACCEPT 14014 packets, 505K bytes)\n pkts bytes target     prot opt in     out     source               destination\n")),Object(i.b)("h3",{id:"tunnel-operation"},"Tunnel operation"),Object(i.b)("p",null,"The status of the tunnel and other data is available via the auto generated tunnel interfaces. Here's an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@node1.conductor1# show device-interface router router1 name pri-tunnel\nTue 2020-03-24 03:22:37 UTC\n\n===========================================\n node1.router1:pri-tunnel\n===========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         ea:a6:fe:1c:3d:70\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n\n in-octets:                     6243918\n in-unicast-pkts:                104054\n in-errors:                           0\n out-octets:                    4691030\n out-unicast-pkts:               100393\n out-errors:                          0\n\n GRE::\n   icmp-probe-status:\n     attempts:        45008\n     elapsed:         0.006435333052650094\n     last_attempt:    1585020151.1222534\n     status:          up\n   stats:\n     RX errors::\n       crc:           0\n       fifo:          0\n       frame:         0\n       length:        0\n       missed:        0\n     RX::\n       bytes:         380\n       dropped:       0\n       errors:        0\n       mcast:         0\n       overrun:       0\n       packets:       7\n     TX errors::\n       aborted:       0\n       fifo:          0\n       heartbeat:     0\n       transns:       0\n       window:        0\n     TX::\n       bytes:         692\n       carrier:       106\n       collsns:       4\n       dropped:       0\n       errors:        110\n       packets:       11\n\nCompleted in 0.07 seconds\n")),Object(i.b)("p",null,"In addition, a ",Object(i.b)("inlineCode",{parentName:"p"},"ping-monitor")," service is started for each configured tunnel, the ",Object(i.b)("inlineCode",{parentName:"p"},"systemctl status ping-monitor-namespace@<tunnel-name>")," can be used to query the status of the ping service."),Object(i.b)("h2",{id:"release-notes"},"Release Notes"),Object(i.b)("h3",{id:"release-300"},"Release 3.0.0"),Object(i.b)("h4",{id:"issues-fixed"},"Issues Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PLUGIN-768")," Support the GRE plugin in 128T versions ",Object(i.b)("inlineCode",{parentName:"li"},"5.1.0")," and greater."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PLUGIN-611")," Added support for plugin state. Plugin state information can be accessed on the PCLI using ",Object(i.b)("inlineCode",{parentName:"li"},"show plugins state [router <router>] [node <node>] [{detail | summmary}] 128T-gre"))),Object(i.b)("h3",{id:"release-113-213"},"Release 1.1.3, 2.1.3"),Object(i.b)("h4",{id:"issues-fixed-1"},"Issues Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"PLUGIN-799")," Pillar data for GRE tunnel is false by default"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Resolution"))," Set the enabled key to true by default when generating the pillar data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"PLUGIN-479")," Address range checking not valid for GRE tunnel"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Resolution"))," Use non-strict mode when getting plugin network in config generation"))),Object(i.b)("h3",{id:"release-112-212"},"Release 1.1.2, 2.1.2"),Object(i.b)("h4",{id:"issues-fixed-2"},"Issues Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"PLUGIN-677")," GRE plugin doesn't start up correctly post reboot"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Resolution"))," Implemented a config watcher service to handle startup conditions and dynamically apply configuration changes at runtime."))))}p.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);