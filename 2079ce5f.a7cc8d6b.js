(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{188:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||b[h]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(188)),o={title:"Using Saltstack at Scale With 128T",sidebar_label:"Saltstack at Scale With 128T"},l={unversionedId:"bcp_salt_pillars",id:"bcp_salt_pillars",isDocsHomePage:!1,title:"Using Saltstack at Scale With 128T",description:"Introduction",source:"@site/docs/bcp_salt_pillars.md",slug:"/bcp_salt_pillars",permalink:"/docs/bcp_salt_pillars",version:"current",lastUpdatedAt:1592651776,sidebar_label:"Saltstack at Scale With 128T",sidebar:"docs",previous:{title:"Monitoring Head End Routers",permalink:"/docs/bcp_monitoring_headends"},next:{title:"SD-WAN Design Guide",permalink:"/docs/bcp_sdwan_design_guide"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Using Salt with 128T",id:"using-salt-with-128t",children:[]},{value:"Using Salt Pillars",id:"using-salt-pillars",children:[]},{value:"A Better Approach: Map Files",id:"a-better-approach-map-files",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This guide is intended to provide methods for users to implement custom Saltstack functionality in a performant way that will not affect their ability to provision new systems at scale."),Object(i.b)("p",null,"This guide is not intended to teach the users how to use Saltstack. This document will reference the Salt top file and Salt pillars. Some good resources for these topics are:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.saltstack.com/en/latest/ref/states/top.html"}),"Salt Top File")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.saltstack.com/en/latest/topics/tutorials/pillar.html"}),"Salt Pillars")),Object(i.b)("h2",{id:"using-salt-with-128t"},"Using Salt with 128T"),Object(i.b)("p",null,"The 128T Conductor uses different Salt environments to logically separate the 128T specific Salt state and modules from any custom Salt modules implemented by the user. The locations for each environment are defined in the Salt Master configuration file on the Conductor."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/etc/128technology/salt/master"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"file_roots:\n  128T:\n    - /usr/lib/128technology/python/salt/file_roots\n  base:\n    - /srv/salt\n  plugins:\n    - /var/lib/128technology/plugins/salt\n\npillar_roots:\n  128T:\n    - /usr/lib/128technology/python/salt/pillar\n  base:\n    - /srv/pillar\n  plugins:\n    - /var/lib/128technology/plugins/pillar\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"128T")," and ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," environments are managed by the Conductor and should not be modified. The ",Object(i.b)("inlineCode",{parentName:"p"},"base")," environment is left for the user to implement any custom Salt logic for their specific deployment. When a Salt Minion connects to the 128T Conductor the Salt Master will execute the Salt highstate for each Salt environment automatically. The highstate consists of the states listed in the ",Object(i.b)("inlineCode",{parentName:"p"},"top.sls")," for each environment. By default the ",Object(i.b)("inlineCode",{parentName:"p"},"top.sls")," for the ",Object(i.b)("inlineCode",{parentName:"p"},"base")," environment performs a dummy state meant to serve as an example to users, but can be modified to perform states for the users specific deployment:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/top.sls"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"base:\n  '*':\n    - dummy\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/dummy.sls"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"/dev/null:\n  file.touch:\n    - name: /dev/null\n")),Object(i.b)("h2",{id:"using-salt-pillars"},"Using Salt Pillars"),Object(i.b)("p",null,"Pillars are tree-like structures of data defined on the Salt Master and passed through to Salt Minions. Salt pillars are intended to be used for confidential information as the information is encrypted and sent securely to the respective Salt Minion. The Salt Minion uses the pillar data assigned to its Minion ID to render Salt states before executing them. The following is an example of a common approach for using Salt pillars."),Object(i.b)("p",null,"The pillar top file defines which pillars apply to which Salt Minions:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/pillar/top.sls"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"base:\n  '*':\n    - common\n  'Router1NodeA':\n    - router1A\n  'Router1NodeB':\n    - router1B\n\n   ...\n\n  'Router999NodeA':\n    - router999A\n  'Router999NodeB':\n    - router999B\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ellipsis is not part of the syntax, it serves to illustrate there are a large number of Salt Minions"))),Object(i.b)("p",null,"Each pillar file defined above contains the variables for a specific Salt Minion:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/pillar/router1A.sls"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"configured_interfaces:\n  - name: eth0\n    address: '192.168.1.1'\n    netmask: '255.255.255.254'\n    gateway: '192.168.1.2\n  - name: eth1\n    address: '172.16.0.1'\n    netmask: '255.255.255.0'\n    gateway: '172.16.0.100'\n\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/pillar/router1B.sls"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"configured_interfaces:\n  - name: eth0\n    address: '192.168.1.2'\n    netmask: '255.255.255.254'\n    gateway: '192.168.1.1'\n  - name: eth1\n    address: '172.16.0.2'\n    netmask: '255.255.255.0'\n    gateway: '172.16.0.100'\n")),Object(i.b)("p",null,"The pillar data can be accessed as variables in Salt states and the Salt Minion will automatically render the state with the correct pillar information when the state is executed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"{%- set configured_interfaces = pillar.get('configured_interfaces') %}\n{%- for interface in configured_interfaces %}\n\nInterface {{ interface.name }}:\n  network.managed:\n    - enabled: True\n    - type: eth\n    - ipaddr: {{ interface.address }}\n    - netmask: {{ interface.netmask }}\n    - gateway: {{ interface.gateway }}\n    - dns:\n      - 8.8.8.8\n      - 8.8.4.4\n")),Object(i.b)("p",null,"This approach quickly breaks down at scale. Each time a highstate is run the Salt Master needs to parse the pillar top file and decide which pillar files apply to each Salt Minion. The top file supports glob matching and is not always a simple 1:1 match from Salt Minion ID to pillar file, therefore the entire file needs to be parsed each time a highstate is performed. Next, the Salt Master encrypts the pillar data and sends it securely to each Salt Minion. These operations become extremely costly and profiling shows the Salt Master spends 95% of its compute time compiling pillar data if the pillar top file contains more than one thousand individual pillar files. The Salt Master becomes unable to process incoming minion requests and cannot communicate with more than ~250 minions concurrently. The Salt Master's ten worker threads saturate to 100% CPU usage and impact the performance of the rest of the 128T processes operating on the Conductor."),Object(i.b)("h2",{id:"a-better-approach-map-files"},"A Better Approach: Map Files"),Object(i.b)("p",null,"Pillar files are best used only for sensitive data like passwords or SSH keys. Any other data should be converted to use map files instead. The swap from pillar files to map files is very simple."),Object(i.b)("p",null,"Move all pillar files from the pillar directory ",Object(i.b)("inlineCode",{parentName:"p"},"/srv/pillar/")," to a new data directory within the Salt file roots ",Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/data")," and rename the pillar files to have the extension matching their data type instead of the ",Object(i.b)("inlineCode",{parentName:"p"},".sls")," extension:"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In this example the map files for each Salt Minion contain contents formatted in YAML so the file extension becomes ",Object(i.b)("inlineCode",{parentName:"p"},".yaml"),". Salt also supports map files formatted in JSON, which would result in the ",Object(i.b)("inlineCode",{parentName:"p"},".json")," extension instead."))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/data/"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"-rw-r--r-- 1 root root 473 May  6 23:06 common.yaml\n-rw-r--r-- 1 root root  74 May  6 23:06 router1A.yaml\n-rw-r--r-- 1 root root  74 May  6 23:06 router1B.yaml\n-rw-r--r-- 1 root root  74 May  6 23:06 router2A.yaml\n-rw-r--r-- 1 root root  74 May  6 23:06 router2B.yaml\n...\n-rw-r--r-- 1 root root  74 May  6 23:06 router999A.yaml\n-rw-r--r-- 1 root root  74 May  6 23:06 router999B.yaml\n")),Object(i.b)("p",null,"Now convert all Salt states to access the information from the map file instead of the pillar file."),Object(i.b)("p",null,"Before:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"{%- set configured_interfaces = pillar.get('configured_interfaces') %}\n")),Object(i.b)("p",null,"After:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"{%- import_yaml 'data/%s.yaml' % opts.id as data %}\n{%- set configured_interfaces = data.get('configured_interfaces') %}\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In this example the map files for each Salt Minion are named after the Salt Minion ID. The first line uses the Salt Minion ID to form the file name."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In this example the map files are formatted in YAML so the Salt state uses the ",Object(i.b)("inlineCode",{parentName:"p"},"import_yaml")," keyword to load the data. If the user chose to format their map files in JSON then the Salt state would use the ",Object(i.b)("inlineCode",{parentName:"p"},"import_json")," keyword instead."))),Object(i.b)("p",null,"There is no need to manually sync the map file from the data directory on the Salt Master to the Salt Minions. Since the map files located at ",Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/data")," are placed within the Salt file roots ",Object(i.b)("inlineCode",{parentName:"p"},"/srv/salt/")," the Salt Minion can fetch them from the Salt Master automatically. Within the states the data file path is referenced as ",Object(i.b)("inlineCode",{parentName:"p"},"data/")," as seen in the first line of the example above because the Salt state's root directory is the Salt file roots."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"With the Salt pillar approach the Salt Master renders the entire pillar top file and encrypts the pillar data each time it needs to perform highstate. With the map file approach the Salt Master simply executes the highstate and the Salt Minion will fetch the correct map file automatically and render the information locally, saving lots of CPU cycles on the Salt Master. With either approach the data is retrieved over an encrypted SSH tunnel between Salt Minion and Salt Master. The only downside with the map approach is that the data is not encrypted on the Salt Minion when cached locally, which is why the map approach should not be used for sensitive data."),Object(i.b)("p",null,"Pillars can still be used at scale provided that the pillar top file is small. One example would be using Salt pillars to set the same root password on all managed 128T Routers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"base:\n  '*':\n    - password\n")))}p.isMDXComponent=!0}}]);