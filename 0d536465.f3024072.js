(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{203:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return l}));var o=t(2),a=t(6),r=(t(0),t(203)),i={title:"Transitioning a Conductor from Standalone to HA",sidebar_label:"Transitioning a Conductor from Standalone to HA"},c={unversionedId:"config_transition_standalone_to_ha",id:"config_transition_standalone_to_ha",isDocsHomePage:!1,title:"Transitioning a Conductor from Standalone to HA",description:"This guide provides a procedure for transitioning a standalone 128T Conductor to an HA 128T Conductor.",source:"@site/docs/config_transition_standalone_to_ha.md",slug:"/config_transition_standalone_to_ha",permalink:"/docs/config_transition_standalone_to_ha",version:"current",lastUpdatedAt:1611799135,sidebar_label:"Transitioning a Conductor from Standalone to HA",sidebar:"docs",previous:{title:"Adding Interfaces to HA Team Interface",permalink:"/docs/config_adding_interfaces_to_ha_team"},next:{title:"Network Address Translation (NAT)",permalink:"/docs/config_nat"}},d=[],s={rightToc:d};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide provides a procedure for transitioning a standalone 128T Conductor to an HA 128T Conductor."),Object(r.b)("p",null,"This example starts with a standalone Conductor named ",Object(r.b)("inlineCode",{parentName:"p"},"Conductor")," and one node named ",Object(r.b)("inlineCode",{parentName:"p"},"T104_DUT1"),", along with a single managed Router named ",Object(r.b)("inlineCode",{parentName:"p"},"Router"),", which has two nodes ",Object(r.b)("inlineCode",{parentName:"p"},"T104_DUT3")," and ",Object(r.b)("inlineCode",{parentName:"p"},"T104_DUT4"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# show assets\nWed 2019-12-04 18:27:59 UTC\n\n=========== =========== =========== ============== ========= ========\n Router      Node        Asset Id    128T Version   Status    Errors\n=========== =========== =========== ============== ========= ========\n Conductor   T104_DUT1   T104_DUT1   4.2.0-2.el7    running        0\n Router      T104_DUT3   T104_DUT3   4.2.0-2.el7    running        0\n             T104_DUT4   T104_DUT4   4.2.0-2.el7    running        0\n\nCompleted in 0.14 seconds\n")),Object(r.b)("p",null,"This is the starting basic configuration on the standalone Conductor node:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markup"}),"admin@T104_DUT1.Conductor# configure authority router Conductor\nadmin@T104_DUT1.Conductor (router[name=Conductor])# show\nname  Conductor\n\nnode  T104_DUT1\n    name              T104_DUT1\n    asset-id          T104_DUT1\n    role              conductor\nexit\n")),Object(r.b)("p",null,"The first step is to configure the second Conductor node. If you start with the same basic configuration for the second node then you will see warnings below when you attempt to validate. The first warning states that a non-forwarding interfaces between the Conductor nodes needs to be configured to establish connectivity. For more information regarding non-forwarding interfaces please refer to this blog: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/config_non_forwarding_ha_interfaces"}),"Configuring Non Forwarding Interfaces"),". The second warning states that 128T needs to be restarted after creating a new node.  This will be addressed later."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# configure authority router Conductor\nadmin@T104_DUT1.Conductor (router[name=Conductor])# show\nname  Conductor\n\nnode  T104_DUT1\n    name              T104_DUT1\n    asset-id          T104_DUT1\n    role              conductor\nexit\n\nnode  T104_DUT2\n    name              T104_DUT2\n    asset-id          T104_DUT2\n    role              conductor\nexit\n\nadmin@T104_DUT1.Conductor# validate\nValidating...\nWarnings:\n1. Router 'Conductor' is missing a non-forwarding fabric or shared interface on each node. The router may not have inter node\nconnectivity unless the interfaces were set up manually.\nreported by router 'Conductor'\n\n    config\n        authority\n            router Conductor\n\n2. The field 'name' cannot be created while the system is running. To apply the configuration, 'T104_DUT1.Conductor' and\n'T104_DUT2.Conductor' must be restarted after committing this change.\nreported by router 'Conductor'\n\n    config\n        authority\n            router Conductor\n                node T104_DUT2\n\nCandidate configuration is valid\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"While the conductor is not 128T router, it shares the same configuration model as the router and therefore is configured as a ",Object(r.b)("inlineCode",{parentName:"p"},"router"),"."))),Object(r.b)("p",null,"Next, configure two non-forwarding interfaces so connectivity can be established between both Conductor nodes.  Once the configuration has been created, you should see that validation warning go away:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# configure authority router Conductor\nadmin@T104_DUT1.Conductor (router[name=Conductor])# show\nname  Conductor\n\nnode  T104_DUT1\n    name              T104_DUT1\n    asset-id          T104_DUT1\n\n    device-interface  mgmt\n        name               mgmt\n        type               ethernet\n        pci-address        0000:00:04.0\n        forwarding         false\n\n        network-interface  ha-fabric\n            name     ha-fabric\n            type     fabric\n\n            address  172.16.1.1\n                ip-address     172.16.1.1\n                prefix-length  24\n                gateway        172.16.1.201\n            exit\n        exit\n    exit\nexit\n\nnode  T104_DUT2\n    name              T104_DUT2\n    asset-id          T104_DUT2\n    role              conductor\n\n    device-interface  mgmt\n        name               mgmt\n        type               ethernet\n        pci-address        0000:00:04.0\n        forwarding         false\n\n        network-interface  ha-fabric\n            name     ha-fabric\n            type     fabric\n\n            address  172.16.1.2\n                ip-address     172.16.1.2\n                prefix-length  24\n                gateway        172.16.1.201\n            exit\n        exit\n    exit\nexit\n\nadmin@T104_DUT1.Conductor (router[name=Conductor])# validate\nValidating...\nWarnings:\n1. The field 'name' cannot be created while the system is running. To apply the configuration, 'T104_DUT1.Conductor' and\n'T104_DUT2.Conductor' must be restarted after committing this change.\nreported by router 'Conductor'\n\n    config\n        authority\n            router Conductor\n                node T104_DUT2\n\nCandidate configuration is valid\n")),Object(r.b)("p",null,"Commit the configuration, then stop 128T on the standalone Conductor node by dropping into the Linux shell and executing ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl stop 128T"),". Wait for 128T to completely stop. The user can monitor the status of the service with ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl status 128T"),"."),Object(r.b)("p",null,"Once 128T is fully stopped, the user needs to make changes to the salt minion configuration file. Since the Conductor was installed as a Standalone Conductor, the salt minion config is initialized with the loopback address. The user need to fix it manually to be the IP address of our management interface because when the second Conductor node is installed, it uses the IP address in these files to learn the management IP address of its peer node. Here is what the salt minion config look like before any modification:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"[root@t104-dut1 ~]# cat /etc/salt/minion\nauth_safemode: True\nautoload_dynamic_modules: False\nenable_legacy_startup_events: False\ninclude: /usr/lib/128technology/python/salt/file_roots/_beacons/*.conf\nlog_level_logfile: debug\nmaster:\n  - 127.0.0.1\nmaster_alive_interval: 30\nmaster_tries: -1\nping_interval: 1\nrandom_reauth_delay: 120\nrecon_default: 5000\nrecon_max: 30000\nrecon_randomize: True\ntcp_authentication_retries: -1\ntcp_keepalive_cnt: 3\ntcp_keepalive_idle: 5\ntcp_keepalive_intvl: 10\ntransport: tcp\n")),Object(r.b)("p",null,"Now here is what it looks like after the management IP address has been properly updated:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markup"}),"auth_safemode: True\nautoload_dynamic_modules: False\nenable_legacy_startup_events: False\ninclude: /usr/lib/128technology/python/salt/file_roots/_beacons/*.conf\nlog_level_logfile: debug\nmaster:\n  - 172.16.1.1\nmaster_alive_interval: 30\nmaster_tries: -1\nping_interval: 1\nrandom_reauth_delay: 120\nrecon_default: 5000\nrecon_max: 30000\nrecon_randomize: True\ntcp_authentication_retries: -1\ntcp_keepalive_cnt: 3\ntcp_keepalive_idle: 5\ntcp_keepalive_intvl: 10\ntransport: tcp\n")),Object(r.b)("p",null,"At this point, the first Conductor node is still stopped and it is time to install the second Conductor node. The user will launch the interactive installer to install the second node. You need to double check that the node name entered in the interactive installer matches the node name in the configuration. Wait for the interactive installer to finish then pick yes when it prompts the user to reboot. While the second node is rebooting, this is a good time to double check the ",Object(r.b)("em",{parentName:"p"},"global.init")," file and salt minion configuration file on the first Conductor node have been modified and the second Conductor node has been added:"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When installing a new HA node (conductor or router), ensure that the same version is being installed on both nodes."))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'[root@t104-dut1 ~]# cat /etc/128technology/global.init\n{\n  "init" : {\n    "control" : {},\n    "conductor" : {\n      "T104_DUT1" : {\n        "host" : "172.16.1.1"\n      },\n      "T104_DUT2" : {\n        "host" : "172.16.1.2"\n      }\n    },\n    "routerName" : "Conductor"\n  }\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"[root@t104-dut1 ~]# cat /etc/salt/minion\nauth_safemode: True\nautoload_dynamic_modules: False\nenable_legacy_startup_events: False\ninclude: /usr/lib/128technology/python/salt/file_roots/_beacons/*.conf\nlog_level_logfile: debug\nmaster:\n  - 172.16.1.1\n  - 172.16.1.2\nmaster_alive_interval: 30\nmaster_tries: -1\nping_interval: 1\nrandom_reauth_delay: 120\nrecon_default: 5000\nrecon_max: 30000\nrecon_randomize: True\ntcp_authentication_retries: -1\ntcp_keepalive_cnt: 3\ntcp_keepalive_idle: 5\ntcp_keepalive_intvl: 10\ntransport: tcp\n")),Object(r.b)("p",null,"Now that the ",Object(r.b)("em",{parentName:"p"},"global.init")," and salt minion config look correct we can restart the salt-minion so it picks up the config changes and then start 128T. From the Linux shell first execute ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl restart salt-minion")," then ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl start 128T"),". Once they are up login and verify they both have connectivity to each other:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# show system connectivity\nWed 2019-12-04 20:35:35 UTC\n\n===================== ===================== ===========\n Local Node            Remote Node           State\n===================== ===================== ===========\n T104_DUT1.Conductor   T104_DUT2.Conductor   connected\n T104_DUT1.Conductor   T104_DUT3.Router      connected\n T104_DUT1.Conductor   T104_DUT4.Router      connected\n\nCompleted in 0.11 seconds\n")),Object(r.b)("p",null,"Note that the second Conductor node will not have connectivity to any managed routers yet, we will address that next:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT2.Conductor# show system connectivity\nWed 2019-12-04 20:44:18 UTC\n\n===================== ===================== ==============\n Local Node            Remote Node           State\n===================== ===================== ==============\n T104_DUT2.Conductor   T104_DUT1.Conductor   connected\n T104_DUT2.Conductor   T104_DUT3.Router      disconnected\n T104_DUT2.Conductor   T104_DUT4.Router      disconnected\n\nCompleted in 0.12 seconds\n")),Object(r.b)("p",null,"In order for this procedure to work correctly, the user should have the ",Object(r.b)("inlineCode",{parentName:"p"},"conductor-address")," field configured for their standalone Conductor, which is the public IP address of the Conductor:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# configure authority\nadmin@T104_DUT1.Conductor (authority)# conductor-address\n192.168.1.8\n")),Object(r.b)("p",null,"The next step is to configure the second Conductor node as well as a ",Object(r.b)("inlineCode",{parentName:"p"},"conductor-address")," for the second Conductor node. This example shows the second ",Object(r.b)("inlineCode",{parentName:"p"},"conductor-address")," being configured:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor (authority)# conductor-address 192.168.1.13\nadmin@T104_DUT1.Conductor (authority)# conductor-address\n192.168.1.8\n192.168.1.13\n")),Object(r.b)("p",null,"Adding the second conductor address will also produce a new validation warning, which is expected:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor (router[name=Conductor])# validate\nValidating...\nWarnings:\n1. Incorrectly modifying this field can result in permanent loss of connectivity to managed routers and will require manual intervention\nto fix. Make sure the configured address is valid and reachable before committing this change\nreported by router 'Conductor'\n\n    config\n        authority\n            conductor-address\n\nCandidate configuration is valid\n")),Object(r.b)("p",null,"Commit this configuration and you see all managed assets disconnect and reconnect because the new Conductor IP address was added and the minion was restarted:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# show assets\nWed 2019-12-04 19:00:17 UTC\n\n=========== =========== =========== ============== ============== ========\n Router      Node        Asset Id    128T Version   Status         Errors\n=========== =========== =========== ============== ============== ========\n Conductor   T104_DUT1   T104_DUT1   4.2.0-2.el7    running             0\n             T104_DUT2   T104_DUT2   4.2.0-2.el7    running             0\n Router      T104_DUT3   T104_DUT3   None           connected           0\n             T104_DUT4   T104_DUT4   None           connected           0\n\nCompleted in 0.14 seconds\n")),Object(r.b)("p",null,"Wait until all assets transition back into the ",Object(r.b)("inlineCode",{parentName:"p"},"running")," state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT1.Conductor# show assets\nWed 2019-12-04 19:01:59 UTC\n\n=========== =========== =========== ============== ============== ========\n Router      Node        Asset Id    128T Version   Status         Errors\n=========== =========== =========== ============== ============== ========\n Conductor   T104_DUT1   T104_DUT1   4.2.0-2.el7    running             0\n             T104_DUT2   T104_DUT2   4.2.0-2.el7    running             0\n Router      T104_DUT3   T104_DUT3   4.2.0-2.el7    running             0\n             T104_DUT4   T104_DUT4   4.2.0-2.el7    running             0\n\nCompleted in 0.16 seconds\n")),Object(r.b)("p",null,"There is no need to restart 128T on any managed routers all of them will properly recognize the new Conductor!"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@T104_DUT3.Router# show system connectivity\nSun 2019-12-08 14:26:10 UTC\n\n============ ===================== ===========\n Local Node   Remote Node           State\n============ ===================== ===========\n T104_DUT3    T104_DUT1.Conductor   connected\n T104_DUT3    T104_DUT2.Conductor   connected\n T104_DUT3    T104_DUT4.Router      connected\n\nCompleted in 0.04 seconds\n")))}l.isMDXComponent=!0}}]);