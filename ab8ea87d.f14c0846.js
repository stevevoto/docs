(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(2),a=t(6),r=(t(0),t(204)),o={title:"IPsec Client plugin",sidebar_label:"IPsec Client"},c={unversionedId:"plugin_ipsec_client",id:"plugin_ipsec_client",isDocsHomePage:!1,title:"IPsec Client plugin",description:"The 128T-ipsec-client plugin provides a way to send and encrypt traffic to IPsec endpoints through the 128T router. It is possible to configure the plugin for each router to have multiple destination IPsec endpoints and thus the 128T will failover between them. This is accomplished by performing a Service Function Chain (SFC) with Libreswan, a third-party IPsec client. By enabling this plugin, you can provide IPsec tunnel connectivity to third party providers from your 128T router.",source:"@site/docs/plugin_ipsec_client.md",slug:"/plugin_ipsec_client",permalink:"/docs/plugin_ipsec_client",version:"current",lastUpdatedAt:1612976954,sidebar_label:"IPsec Client",sidebar:"docs",previous:{title:"ICMP Reachability Detection Plugin",permalink:"/docs/plugin_icmp_reachability_detection"},next:{title:"Loopback Static Routes Plugin",permalink:"/docs/plugin_loopback_static_routes"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Profiles",id:"profiles",children:[]},{value:"Clients",id:"clients",children:[]},{value:"Generated 128T Configuration",id:"generated-128t-configuration",children:[]},{value:"User-Specific 128T Configuration",id:"user-specific-128t-configuration",children:[]},{value:"Complete Example Configuration",id:"complete-example-configuration",children:[]}]},{value:"Thirdparty Software &amp; Licenses",id:"thirdparty-software--licenses",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Data Model",id:"data-model",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Salt",id:"salt",children:[]},{value:"PCLI Enhancements",id:"pcli-enhancements",children:[]},{value:"Systemd Services",id:"systemd-services",children:[]},{value:"Failover Alarms",id:"failover-alarms",children:[]}]},{value:"Release Notes",id:"release-notes",children:[{value:"Release 1.0.6, 2.0.6",id:"release-106-206",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]},{value:"Release 1.0.5, 2.0.5",id:"release-105-205",children:[]},{value:"Release 1.0.4, 2.0.4",id:"release-104-204",children:[]},{value:"Release 1.0.1, 2.0.1",id:"release-101-201",children:[]}]}],s={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The 128T-ipsec-client plugin provides a way to send and encrypt traffic to IPsec endpoints through the 128T router. It is possible to configure the plugin for each router to have multiple destination IPsec endpoints and thus the 128T will failover between them. This is accomplished by performing a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/plugin_intro#service-function-chaining"}),"Service Function Chain (SFC)")," with Libreswan, a third-party IPsec client. By enabling this plugin, you can provide IPsec tunnel connectivity to third party providers from your 128T router."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The instructions for installing and managing the plugin can be found ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"In the below configuration examples, there are two of each plugin configuration element. The first has all configuration elements explicitly configured with the defaults if applicable and the other is the bare minimum using all of the default values. The values enclosed in ",Object(r.b)("inlineCode",{parentName:"p"},"<>")," are fields that didn\u2019t have default values specified by the plugin. If any of these optional, non-defaulted fields are unspecified, then they will use the Libreswan defaults which can be found ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://libreswan.org/man/ipsec.conf.5.html"}),"here"),". The values enclosed in ",Object(r.b)("inlineCode",{parentName:"p"},"[]")," are fields that didn't have default values specified by the plugin and will not be included in the generated 128T configuration."),Object(r.b)("h3",{id:"profiles"},"Profiles"),Object(r.b)("p",null,"Profiles are reusable IPsec settings that can be used across multiple nodes in a router and multiple IPsec endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"remote"),"s."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"router\n   ipsec-profile gateway1\n       name gateway1\n       ike-encryption aes128\n       ike-digest sha1\n       ike-modp modp1024\n       ike-v2 insist\n       authentication-protocol esp\n       phase2-encryption null\n       phase2-digest md5\n       phase2-modp modp1024\n       ike-lifetime 1h\n       connection-lifetime 8h\n       ike-retransmit-interval <ike-retransmit-interval>\n       compress false\n       perfect-forward-secrecy false\n       dpddelay <dpddelay>\n       dpdtimeout <dpdtimeout>\n       dpdaction restart\n       local-id <local-id>\n       metric <metric>\n       mtu <mtu>\n       pre-shared-key psk1\n   exit\n   ipsec-profile gateway2\n       name gateway2\n       pre-shared-key psk2\n   exit\nexit\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This plugin can only connect to IPsec endpoints that support pre-shared key authentication."))),Object(r.b)("h3",{id:"clients"},"Clients"),Object(r.b)("p",null,"Clients are a collection of remote endpoints which can be used for failover purposes."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"node\n    ipsec-client client1\n        name client1\n        enabled true\n        tenant t1\n        remote c1gateway1\n            name c1gateway1\n            host gateway1.com\n            profile gateway1\n            vector-name [vector-name]\n            tenant [tenant]\n            subnet <subnet>\n            remote-id <remote-id>\n\n        exit\n        remote c1gateway2\n            name gateway2\n            host gateway2.com\n            profile gateway2\n        exit\n    exit\nexit\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Only one ",Object(r.b)("inlineCode",{parentName:"p"},"ipsec-client")," can be configured per node, but two ",Object(r.b)("inlineCode",{parentName:"p"},"remote"),"s can be configured per client."))),Object(r.b)("h3",{id:"generated-128t-configuration"},"Generated 128T Configuration"),Object(r.b)("p",null,"A KNI per remote is created with the name of the ",Object(r.b)("inlineCode",{parentName:"p"},"remote")," and a single egress KNI is created with the name of the ",Object(r.b)("inlineCode",{parentName:"p"},"ipsec-client"),"."),Object(r.b)("h3",{id:"user-specific-128t-configuration"},"User-Specific 128T Configuration"),Object(r.b)("p",null,"To allow the maximum flexibility on getting the traffic into the plugin's network namespace and getting the traffic out, we rely on the user to configure those means (usually through services and service routes)."),Object(r.b)("p",null,"You will need to have the IPsec endpoint bound traffic sent into the KNIs with the names of the ",Object(r.b)("inlineCode",{parentName:"p"},"remote"),"s. You can use builtin 128T failover techniques due to the KNIs being reported operationally down when the corresponding tunnel is down. You will also need to configure a way for the traffic to be routed towards the IPsec endpoint after being encrypted. All of this encrypted traffic will be assigned to the ",Object(r.b)("inlineCode",{parentName:"p"},"tenant")," configured under ",Object(r.b)("inlineCode",{parentName:"p"},"ipsec-client"),"."),Object(r.b)("h3",{id:"complete-example-configuration"},"Complete Example Configuration"),Object(r.b)("p",null,"Below is an example of a complete, but minimal configuration entered by the user."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This example configuration is good to understand all of the concepts but should not be used on a system as is."))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"config\n    authority\n        tenant ipsec\n        exit\n\n        tenant lan\n        exit\n\n        service         cleartext\n            name            cleartext\n            address         1.1.1.0/24\n\n            access-policy   lan\n                source      lan\n                permission  allow\n            exit\n        exit\n\n        service         ipsec\n            name           ipsec\n            address        172.16.4.3\n\n            access-policy  ipsec\n                source      ipsec\n                permission  allow\n            exit\n        exit\n\n        router               router1\n            ipsec-profile         primary\n                name                 primary\n                pre-shared-key       somekey1\n            exit\n\n            ipsec-profile         secondary\n                name                 secondary\n                pre-shared-key       somekey2\n            exit\n\n            node node1\n                device-interface          lan\n                    name               lan\n\n                    network-interface  lanintf\n                        name          lanintf\n                        tenant        lan\n\n                        address       172.16.1.2\n                            ip-address     172.16.1.2\n                            prefix-length  24\n                            gateway        2.2.2.1\n                        exit\n                    exit\n                exit\n\n                device-interface          wan\n                    name               wan\n\n                    network-interface  wanintf\n                        name          wanintf\n\n                        address       172.16.3.2\n                            ip-address     172.16.3.2\n                            prefix-length  24\n                            gateway        172.16.3.5\n                        exit\n                    exit\n                exit\n\n                ipsec-client              client1\n                    name     client1\n                    enabled  true\n                    tenant   ipsec\n\n                    remote   rem1\n                        name     rem1\n                        host     172.16.4.3\n                        profile  primary\n                    exit\n\n                    remote   rem2\n                        name     rem2\n                        host     172.16.5.4\n                        profile  secondary\n                    exit\n                exit\n            exit\n\n            service-route         rem1\n                name          rem1\n                service-name  cleartext\n\n                next-hop      router1 rem1-intf\n                    node-name   router1\n                    interface   rem1-intf\n                    gateway-ip  169.254.129.6\n                exit\n            exit\n\n            service-route         rem2\n                name          rem2\n                service-name  cleartext\n\n                next-hop      router1 rem2-intf\n                    node-name   router1\n                    interface   rem2-intf\n                    gateway-ip  169.254.129.10\n                exit\n            exit\n\n            service-route         ipsec\n                name          ipsec\n                service-name  ipsec\n\n                next-hop      router1 wanintf\n                    node-name   router1\n                    interface   wanintf\n                    gateway-ip  172.16.3.5\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(r.b)("p",null,"Upon commit, the plugin will generate other configuration as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'config\n    authority\n        router router1\n            node node1\n                device-interface          client1\n                    name               client1\n                    description        "Auto-generated host interface for use with ipsec-client"\n                    type               host\n                    network-namespace  client1\n\n                    network-interface  client1-intf\n                        name       client1-intf\n                        type       external\n                        tenant     ipsec\n\n                        address    169.254.129.1\n                            ip-address     169.254.129.1\n                            prefix-length  30\n                            gateway        169.254.129.2\n                        exit\n                    exit\n                exit\n\n                device-interface          rem1\n                    name               rem1\n                    description        "Auto-generated host interface for use with ipsec-client"\n                    type               host\n                    network-namespace  client1\n\n                    network-interface  rem1-intf\n                        name       rem1-intf\n                        type       external\n                        tenant     _internal_\n\n                        address    169.254.129.5\n                            ip-address     169.254.129.5\n                            prefix-length  30\n                            gateway        169.254.129.6\n                        exit\n                    exit\n                exit\n\n                device-interface          rem2\n                    name               rem2\n                    description        "Auto-generated host interface for use with ipsec-client"\n                    type               host\n                    network-namespace  client1\n\n                    network-interface  rem2-intf\n                        name       rem2-intf\n                        type       external\n                        tenant     _internal_\n\n                        address    169.254.129.9\n                            ip-address     169.254.129.9\n                            prefix-length  30\n                            gateway        169.254.129.10\n                        exit\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n')),Object(r.b)("h2",{id:"thirdparty-software--licenses"},"Thirdparty Software & Licenses"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Libreswan v3.23-5.el7_5 (GNU GPLv2)")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"data-model"},"Data Model"),Object(r.b)("p",null,"If the data model doesn\u2019t appear in the PCLI or GUI, make sure that you have restarted the 128T service."),Object(r.b)("h3",{id:"logging"},"Logging"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/128technology/persistentDataManager.log")," file at trace level will hold whether the configuration generation was run as well as output and return code.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/128technology/automatedProvisioner.log")," file at trace level will hold whether the pillar generation was run as well as output and return code.\nConfiguration and pillar generation logs can be found on the conductor under ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/128technology/plugins/ipsec-client-config-generation.log")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/128technology/plugins/ipsec-client-pillar-generation.log")," respectively."),Object(r.b)("h3",{id:"salt"},"Salt"),Object(r.b)("p",null,"Salt status can be found on the conductor by utilizing the PCLI\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"show assets")," and ",Object(r.b)("inlineCode",{parentName:"p"},"show assets <asset-id>")," commands."),Object(r.b)("h3",{id:"pcli-enhancements"},"PCLI Enhancements"),Object(r.b)("p",null,"To check the status of the IPsec tunnels for a given ingress KNI, extra IPsec tunnel related output will be found in the ",Object(r.b)("inlineCode",{parentName:"p"},"show device-interface")," command."),Object(r.b)("p",null,"Example output for a healthy tunnel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@combo-west.RTR_WEST_COMBO# show device-interface name rem2\nTue 2020-06-30 16:44:39 UTC\n\n=========================================================\n combo-west:rem2\n=========================================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         22:ee:4e:b6:37:a8\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n Duplex:              full\n\n in-octets:                        9992\n in-unicast-pkts:                   161\n in-errors:                           0\n out-octets:                       6986\n out-unicast-pkts:                  161\n out-errors:                         11\n\n IPSec:\n     Tunnel Status:   Up\n     Tunnel Details:\n         Name:        ipsec-client-tunnel-secondary-rem2\n         Remote id:   172.16.5.4\n         SA creation time:\n           2020-06-30 16:37:50\n         In bytes:    0\n         Out bytes:   336\n     SA Count:        1\n\nCompleted in 0.12 seconds\n")),Object(r.b)("p",null,"Example output for a tunnel that is down:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"========================================\n combo-west:rem1\n========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         76:78:79:fc:eb:69\n\n Admin Status:        up\n Operational Status:  down\n Redundancy Status:   non-redundant\n Speed:               0\n Duplex:              unknown\n\n in-octets:                     1962932\n in-unicast-pkts:                 32710\n in-errors:                           0\n out-octets:                    1373442\n out-unicast-pkts:                32701\n out-errors:                          6\n\n IPSec:\n   Tunnel Status:     Down\n")),Object(r.b)("h3",{id:"systemd-services"},"Systemd Services"),Object(r.b)("p",null,"To check the status of the IPsec client service on the router, you can run ",Object(r.b)("inlineCode",{parentName:"p"},"show system services")," which will show all 128T related services running on the specified node. The one for this plugin is named ",Object(r.b)("inlineCode",{parentName:"p"},"128t-ipsec"),"."),Object(r.b)("p",null,"To verify that the services are running properly on the 128T router:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"systemctl status 128t-ipsec@<client>.service"))),Object(r.b)("h3",{id:"failover-alarms"},"Failover Alarms"),Object(r.b)("p",null,"If a tunnel goes down, we set the corresponding ingress KNI to be operationally down. An alarm will be created when this happens."),Object(r.b)("p",null,"Example output when the tunnel for ",Object(r.b)("inlineCode",{parentName:"p"},"rem1")," goes down:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-admin@combo-west.RTR_WEST_COMBO#",metastring:"show alarms",show:!0,alarms:!0}),"Tue 2020-06-30 16:42:50 UTC\n\n============== ===================== ========== ============= =========== ==================================\n ID             Time                  Severity   Source        Category    Message\n============== ===================== ========== ============= =========== ==================================\n combo-west:8   2020-06-30 16:32:42   critical   unavailable   interface   Intf rem1 (4) operationally down\n\nThere are 0 shelved alarms\nCompleted in 0.10 seconds\n")),Object(r.b)("h2",{id:"release-notes"},"Release Notes"),Object(r.b)("h3",{id:"release-106-206"},"Release 1.0.6, 2.0.6"),Object(r.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-1057")," Ensure all critical IPsec client directories are created during installation of the plugin."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-1053")," Added an inactive IPsec client plugin state to allow seamless migration from zscaler. The inactive state is achieved by excluding ",Object(r.b)("inlineCode",{parentName:"li"},"ipsec-client")," from the configuration."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-1046")," Provide IPsec client auto-upgrade capability while crossing the 128T version ",Object(r.b)("inlineCode",{parentName:"li"},"4.3.0")," boundary.")),Object(r.b)("h3",{id:"release-105-205"},"Release 1.0.5, 2.0.5"),Object(r.b)("h4",{id:"issues-fixed-1"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-994")," The ",Object(r.b)("inlineCode",{parentName:"li"},"ipsec-client > remote-id")," configuration is not being used correctly when generating the libreswan config.")),Object(r.b)("h3",{id:"release-104-204"},"Release 1.0.4, 2.0.4"),Object(r.b)("h4",{id:"issues-fixed-2"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-384")," Added an MTU configuration option to the ipsec profile."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-333")," The ",Object(r.b)("inlineCode",{parentName:"li"},"plugin-network")," ip prefix setting in the configuration was ignored and would instead use the default ip prefix setting."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-336")," Using the ",Object(r.b)("inlineCode",{parentName:"li"},"vector-name")," configuration option would generate invalid configuration."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-400")," Added a local subnet configuration option and enhanced the remote subnet configuration option to allow a list of values.")),Object(r.b)("h3",{id:"release-101-201"},"Release 1.0.1, 2.0.1"),Object(r.b)("h4",{id:"issues-fixed-3"},"Issues Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PLUGIN-47")," Created generic IPsec client plugin to provide connectivity to remote ipsec endpoints. This version supports a single client with up to two remote endpoints.")))}d.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);