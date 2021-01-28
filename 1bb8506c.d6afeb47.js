(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{203:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||s;return t?i.a.createElement(m,r(r({ref:n},l),{},{components:t})):i.a.createElement(m,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=b;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var l=2;l<s;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(2),i=t(6),s=(t(0),t(203)),a={title:"Automated Provisioner: Salt Minion",sidebar_label:"AP: Salt Minion"},r={unversionedId:"ts_ap_salt_minion",id:"ts_ap_salt_minion",isDocsHomePage:!1,title:"Automated Provisioner: Salt Minion",description:"This document describes the process for troubleshooting issues with Automated Provisioning (AP) using Salt.",source:"@site/docs/ts_ap_salt_minion.md",slug:"/ts_ap_salt_minion",permalink:"/docs/ts_ap_salt_minion",version:"current",lastUpdatedAt:1611799135,sidebar_label:"AP: Salt Minion",sidebar:"docs",previous:{title:"Application Troubleshooting",permalink:"/docs/ts_applications"},next:{title:"CPU Spikes",permalink:"/docs/ts_cpu_spikes"}},c=[{value:"Symptoms",id:"symptoms",children:[]},{value:"Root Cause",id:"root-cause",children:[]},{value:"Steps to Rectify",id:"steps-to-rectify",children:[{value:"Diagnosing the issues",id:"diagnosing-the-issues",children:[]}]}],l={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document describes the process for troubleshooting issues with Automated Provisioning (AP) using Salt."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'The terms "master" and "conductor" are used interchangeably throughout this document. "Master" refers to the salt-master process running on conductor, which orchestrates tasks for AP.  Also the terms "minion", "salt-minion" and "asset" are used interchangeably throughout this document. "Minion" runs on an "asset", or system hosting a 128T router. Minions are responsible for carrying out tasks on the host, given to it by the master.'))),Object(s.b)("h2",{id:"symptoms"},"Symptoms"),Object(s.b)("p",null,"There are several conditions which are symptomatic of issues which may be affecting AP, such as asset disconnected from conductor and general asset errors. These can be seen from conductor CLI using the ",Object(s.b)("inlineCode",{parentName:"p"},"show assets")," command with a provided asset-id. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@node1.conductor# show assets asset-id\nMon 2019-08-21 19:45:35 EDT\n\n=======================================\n asset-id\n=======================================\n Router:                  my-router\n Node:                    node1\n Current Version:         None\n Status:                  disconnected\n\n -----------------------------\n Software Versions Information\n -----------------------------\n Refresh In Progress:     False\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"admin@node1.conductor# show assets asset-id\nMon 2019-08-26 19:45:12 EDT\n\n=============================================================================\n asset-id\n=============================================================================\n Router:                  my-router\n Node:                    node1\n Current Version:         4.1.4-1.el7.centos\n Status:                  running\n Failed Status:           running\n\n ------\n Errors\n ------\n reverse-ssh_conductor1_login_unit: Unable to manage file: Message timed out\n")),Object(s.b)("h2",{id:"root-cause"},"Root Cause"),Object(s.b)("p",null,"At certain times some errors that are seen may be transient during periods of intermittent connectivity, or while the salt master corrects things found in the incorrect state on the minion. Errors that persist are often the result of issues with connectivity between the minion and conductor, or the minion timing out tying to complete tasks given to it by the master."),Object(s.b)("h2",{id:"steps-to-rectify"},"Steps to Rectify"),Object(s.b)("p",null,"Throughout the lifecycle of a 128T asset, some errors are normal and will clear on their own over time. The first steps are to ensure there is working connectivity between the minion and the master."),Object(s.b)("h3",{id:"diagnosing-the-issues"},"Diagnosing the issues"),Object(s.b)("p",null,"The following steps can help diagnose issues with salt-minion which may be affecting AP:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Ensure that the ",Object(s.b)("inlineCode",{parentName:"li"},"salt-minion")," process is running:")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"[t128@host ~]$ sudo systemctl status salt-minion\n\u25cf salt-minion.service - The Salt Minion\n   Loaded: loaded (/usr/lib/systemd/system/salt-minion.service; enabled; vendor preset: disabled)\n  Drop-In: /usr/lib/systemd/system/salt-minion.service.d\n           \u2514\u2500restartAlways.conf\n   Active: active (running) since Wed 2019-08-28 09:23:19 PDT; 6min ago\n     Docs: man:salt-minion(1)\n           file:///usr/share/doc/salt/html/contents.html\n           https://docs.saltstack.com/en/latest/contents.html\n Main PID: 5036 (salt-minion)\n    Tasks: 14\n   Memory: 92.0M\n   CGroup: /system.slice/salt-minion.service\n           \u251c\u25005036 /usr/bin/python /usr/bin/salt-minion\n           \u251c\u25005039 /usr/bin/python /usr/bin/salt-minion\n           \u2514\u25005058 /usr/bin/python /usr/bin/salt-minion\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Ensure the host has a working route to conductor by inspecting the route table. For example the following host has a default route via the ",Object(s.b)("inlineCode",{parentName:"li"},"kni254")," data interface:")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"[t128@host ~]$ ip r l\ndefault via 169.254.127.126 dev kni254\n169.254.0.0/16 dev kni254 scope link metric 1009\n169.254.127.126/31 dev kni254 proto kernel scope link src 169.254.127.127\n169.254.253.128/30 dev habr proto kernel scope link src 169.254.253.130 metric 425\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Verify that the minion is successfully opening connections to the master on TCP port 4505 and 4506. For example, you can use the ",Object(s.b)("inlineCode",{parentName:"li"},"ss")," Linux utility to look for active sockets:")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),'[t128@host ~]$ sudo ss -ptn | grep -E \'(4505|4506)\'\nESTAB      0      162    169.254.127.127:39308              128.128.128.128:4506                users:(("salt-minion",pid=5234,fd=24))\nESTAB      0      0      169.254.127.127:35024              128.128.128.128:4505                users:(("salt-minion",pid=5234,fd=19),("salt-minion",pid=5039,fd=19))\n')),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Connections on TCP port 4506 are transient, and only exist when the minion needs to report information back to the master. Seeing a none, or a varying number of connections being opened on TCP port 4506 is normal."))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If you suspect network issues are impacting the minion's ability to function, you can further diagnose by verifying packets are flowing as expected on the wire using ",Object(s.b)("inlineCode",{parentName:"li"},"tcpdump"),". For example:")),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"[t128@host ~]$ sudo tcpdump -i any 'tcp port 4505 or tcp port 4506' -nnN\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on any, link-type LINUX_SLL (Linux cooked), capture size 262144 bytes\n09:34:55.380670 IP 128.128.128.128.4505 > 169.254.127.127.35024: Flags [.], ack 1309158047, win 219, options [nop,nop,TS val 2905329152 ecr 1874888070], length 0\n09:34:55.380703 IP 169.254.127.127.35024 > 128.128.128.128.4505: Flags [.], ack 1, win 544, options [nop,nop,TS val 1874908102 ecr 2905322513], length 0\n09:34:56.892259 IP 169.254.127.127.39500 > 128.128.128.128.4506: Flags [S], seq 1973885769, win 29200, options [mss 1460,sackOK,TS val 1874909613 ecr 0,nop,wscale 7], length 0\n09:34:56.982670 IP 128.128.128.128.4506 > 169.254.127.127.39500: Flags [S.], seq 2047989050, ack 1973885770, win 26847, options [mss 1460,sackOK,TS val 2905330754 ecr 1874909613,nop,wscale 7], length 0\n09:34:56.982752 IP 169.254.127.127.39500 > 128.128.128.128.4506: Flags [.], ack 1, win 229, options [nop,nop,TS val 1874909704 ecr 2905330754], length 0\n09:34:56.983720 IP 169.254.127.127.39500 > 128.128.128.128.4506: Flags [P.], seq 1:499, ack 1, win 229, options [nop,nop,TS val 1874909705 ecr 2905330754], length 498\n09:34:57.073622 IP 128.128.128.128.4506 > 169.254.127.127.39500: Flags [.], ack 499, win 219, options [nop,nop,TS val 2905330844 ecr 1874909705], length 0\n09:34:57.075619 IP 128.128.128.128.4506 > 169.254.127.127.39500: Flags [P.], seq 1:85, ack 499, win 219, options [nop,nop,TS val 2905330847 ecr 1874909705], length 84\n09:34:57.075648 IP 169.254.127.127.39500 > 128.128.128.128.4506: Flags [.], ack 85, win 229, options [nop,nop,TS val 1874909797 ecr 2905330847], length 0\n09:34:57.077239 IP 169.254.127.127.39500 > 128.128.128.128.4506: Flags [F.], seq 499, ack 85, win 229, options [nop,nop,TS val 1874909798 ecr 2905330847], length 0\n09:34:57.168641 IP 128.128.128.128.4506 > 169.254.127.127.39500: Flags [F.], seq 85, ack 500, win 219, options [nop,nop,TS val 2905330940 ecr 1874909798], length 0\n")),Object(s.b)("p",null,"If the ",Object(s.b)("inlineCode",{parentName:"p"},"salt-minion")," does not appear to be attempting connections to master, or has healthy connections to conductor but continues to have persistent errors, you can try restarting ",Object(s.b)("inlineCode",{parentName:"p"},"salt-minion"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"sudo systemctl restart salt-minion\n")),Object(s.b)("p",null,"If it appears there are connectivity issues that are preventing AP from functioning, correct any networking issues that exist."))}p.isMDXComponent=!0}}]);