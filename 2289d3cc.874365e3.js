(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{188:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),f=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=f(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=f(t),u=r,b=d["".concat(a,".").concat(u)]||d[u]||l[u]||o;return t?i.a.createElement(b,c(c({ref:n},p),{},{components:t})):i.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return f}));var r=t(2),i=t(6),o=(t(0),t(188)),a={title:"Adding Interfaces to HA Team Interface",sidebar_label:"Adding Interfaces to HA Team Interface"},c={unversionedId:"config_adding_interfaces_to_ha_team",id:"config_adding_interfaces_to_ha_team",isDocsHomePage:!1,title:"Adding Interfaces to HA Team Interface",description:"This guide provides a procedure for manually adding multiple interfaces to the HA sync team interface.",source:"@site/docs/config_adding_interfaces_to_ha_team.md",slug:"/config_adding_interfaces_to_ha_team",permalink:"/docs/config_adding_interfaces_to_ha_team",version:"current",lastUpdatedAt:1594652097,sidebar_label:"Adding Interfaces to HA Team Interface",sidebar:"docs",previous:{title:"Non-forwarding HA Interfaces",permalink:"/docs/config_non_forwarding_ha_interfaces"},next:{title:"Transitioning a Conductor from Standalone to HA",permalink:"/docs/config_transition_standalone_to_ha"}},s=[],p={rightToc:s};function f(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide provides a procedure for manually adding multiple interfaces to the HA sync team interface."),Object(o.b)("p",null,"For more information regarding non-forwarding interfaces please refer to this blog: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/config_non_forwarding_ha_interfaces"}),"Configuring Non Forwarding Interfaces"),"."),Object(o.b)("p",null,"In order to configure an interface for HA sync, you must configure a non-forwarding interface of type ",Object(o.b)("inlineCode",{parentName:"p"},"fabric"),". The interface type of ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," indicates a direct link between HA peers. 128T will configure these Linux interfaces as a network team. Here is an example 128T configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@T106_DUT1.Conductor (node[name=T106_DUT3])# show\nname                      T106_DUT3\nasset-id                  T106_DUT3\nrole                      combo\n\ndevice-interface          30\n    name               30\n    type               ethernet\n    pci-address        0000:00:04.0\n    forwarding         false\n\n    network-interface  intf30\n        name       intf30\n        global-id  3\n        type       fabric\n\n        address    172.16.1.3\n            ip-address     172.16.1.3\n            prefix-length  24\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"And here are the corresponding interfaces created in Linux:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 ~]# ifconfig team-dpdk1\nteam-dpdk1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.16.1.3  netmask 255.255.255.0  broadcast 172.16.1.255\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 20203  bytes 4480216 (4.2 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 21158  bytes 5902456 (5.6 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n[root@t106-dut3 ~]# ifconfig dpdk1\ndpdk1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 21444  bytes 4960484 (4.7 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 23100  bytes 6943224 (6.6 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")),Object(o.b)("p",null,"One limitation of the non-forwarding interfaces is that the user is only allowed to configure one non-forwarding ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface in the 128T configuration.  Therefore only one interface will exist in the teamed interface in Linux. In order to add a second interface the administrator is going to have to manually tweak some ifcfg scripts. First, navigate to the directory that contains all the ifcfg scripts:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 ~]# cd /etc/sysconfig/network-scripts/\n\n[root@t106-dut3 network-scripts]# ls\ncheck-t1      ifcfg-team-dpdk1  ifdown-isdn    ifdown-t1        ifup-eth   ifup-plusb   ifup-Team\nifcfg-dpdk1   ifdown            ifdown-lte     ifdown-Team      ifup-ib    ifup-post    ifup-TeamPort\nifcfg-dpdk2   ifdown-bnep       ifdown-post    ifdown-TeamPort  ifup-ippp  ifup-ppp     ifup-tunnel\nifcfg-dpdk3   ifdown-eth        ifdown-ppp     ifdown-tunnel    ifup-ipv6  ifup-pppoe   ifup-wireless\nifcfg-eth0    ifdown-ib         ifdown-pppoe   ifup             ifup-isdn  ifup-routes  init.ipv6-global\nifcfg-kni254  ifdown-ippp       ifdown-routes  ifup-aliases     ifup-lte   ifup-sit     network-functions\nifcfg-lo      ifdown-ipv6       ifdown-sit     ifup-bnep        ifup-plip  ifup-t1      network-functions-ipv6\n")),Object(o.b)("p",null,"Examine the ifcfg script for the interface that is already a part of the network team. In this example, the interface is ",Object(o.b)("inlineCode",{parentName:"p"},"ifcfg-dpdk1"),". The interface ",Object(o.b)("inlineCode",{parentName:"p"},"dpdk1")," was used because that interface corresponds to the PCI address of the non-forwarding ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface in the 128T configuration above, in this case ",Object(o.b)("inlineCode",{parentName:"p"},"0000:00:04.0"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 network-scripts]# cat ifcfg-dpdk1\nBOOTPROTO=none\nDEVICE=dpdk1\nDEVICETYPE=TeamPort\nHWADDR=fa:16:3e:2a:ee:79\nONBOOT=yes\nTEAM_MASTER=team-dpdk1\nTYPE=Ethernet\nUSERCTL=no\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please ensure that you are not using an interface that is already being managed by 128T. The PCI address of this interface should not exist in the 128T configuration."))),Object(o.b)("p",null,"This example will configure ",Object(o.b)("inlineCode",{parentName:"p"},"dpdk2"),", which has a PCI address of ",Object(o.b)("inlineCode",{parentName:"p"},"0000:00:05.0"),". The first step is to perform an ",Object(o.b)("inlineCode",{parentName:"p"},"ifdown")," on the interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 network-scripts]# ifdown dpdk2\n")),Object(o.b)("p",null,"Now simply configure another interface's ifcfg script to match the one above, except preserve the ",Object(o.b)("inlineCode",{parentName:"p"},"DEVICE")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HWADDR")," fields of the original configuration.``"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 network-scripts]# cat ifcfg-dpdk2\nBOOTPROTO=none\nDEVICE=dpdk2\nDEVICETYPE=TeamPort\nHWADDR=fa:16:3e:ad:92:c1\nONBOOT=yes\nTEAM_MASTER=team-dpdk1\nTYPE=Ethernet\nUSERCTL=no\n")),Object(o.b)("p",null,"We can see that the interface is still down:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 network-scripts]# ifconfig\ndpdk1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 35  bytes 2760 (2.6 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\ndpdk3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fec7:52f7  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:c7:52:f7  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8  bytes 656 (656.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 8950\n        inet 192.168.1.7  netmask 255.255.255.0  broadcast 192.168.1.255\n        inet6 fe80::f816:3eff:fe60:9a72  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:60:9a:72  txqueuelen 1000  (Ethernet)\n        RX packets 74700  bytes 103933935 (99.1 MiB)\n        RX errors 23  dropped 0  overruns 0  frame 23\n        TX packets 10425  bytes 1263510 (1.2 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nkni254: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 169.254.127.127  netmask 255.255.255.254  broadcast 255.255.255.255\n        inet6 fe80::5489:42ff:fe96:fc71  prefixlen 64  scopeid 0x20<link>\n        ether 56:89:42:96:fc:71  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 16  bytes 1136 (1.1 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 258244  bytes 131164364 (125.0 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 258244  bytes 131164364 (125.0 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")),Object(o.b)("p",null,"Now that the second interface is configured, perform an ",Object(o.b)("inlineCode",{parentName:"p"},"ifup")," on the team interface, and Linux will perform an ",Object(o.b)("inlineCode",{parentName:"p"},"ifup")," on all interfaces on the team. The user will see ",Object(o.b)("inlineCode",{parentName:"p"},"dpdk2")," come up:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[root@t106-dut3 network-scripts]# ifup team-dpdk1\n\n[root@t106-dut3 network-scripts]# ifconfig\ndpdk1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 96314  bytes 20321228 (19.3 MiB)\n        RX errors 14  dropped 0  overruns 0  frame 14\n        TX packets 95410  bytes 23959816 (22.8 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\ndpdk2: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 13  bytes 1142 (1.1 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\ndpdk3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fec7:52f7  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:c7:52:f7  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8  bytes 656 (656.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 8950\n        inet 192.168.1.7  netmask 255.255.255.0  broadcast 192.168.1.255\n        inet6 fe80::f816:3eff:fe60:9a72  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:60:9a:72  txqueuelen 1000  (Ethernet)\n        RX packets 74841  bytes 103948483 (99.1 MiB)\n        RX errors 24  dropped 0  overruns 0  frame 24\n        TX packets 10540  bytes 1279138 (1.2 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nkni254: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 169.254.127.127  netmask 255.255.255.254  broadcast 255.255.255.255\n        inet6 fe80::5489:42ff:fe96:fc71  prefixlen 64  scopeid 0x20<link>\n        ether 56:89:42:96:fc:71  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 16  bytes 1136 (1.1 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 261227  bytes 132791356 (126.6 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 261227  bytes 132791356 (126.6 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nteam-dpdk1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.16.1.3  netmask 255.255.255.0  broadcast 172.16.1.255\n        inet6 fe80::f816:3eff:fe2a:ee79  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:2a:ee:79  txqueuelen 1000  (Ethernet)\n        RX packets 392  bytes 80972 (79.0 KiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 373  bytes 348552 (340.3 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")),Object(o.b)("p",null,"Lastly, verify the Router still has connectivity to its peer node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@T106_DUT3.Router# show system connectivity\nMon 2019-12-23 03:54:47 UTC\n\n============ ===================== ===========\n Local Node   Remote Node           State\n============ ===================== ===========\n T106_DUT3    T106_DUT1.Conductor   connected\n T106_DUT3    T106_DUT2.Conductor   connected\n T106_DUT3    T106_DUT4.Router      connected\n\nCompleted in 0.08 seconds\n")))}f.isMDXComponent=!0}}]);