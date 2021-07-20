(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),s=(n(0),n(223)),i={title:"MAC Address Uniqueness on 128T",sidebar_label:"MAC Address Uniqueness"},o={unversionedId:"ts_mac_uniqueness",id:"ts_mac_uniqueness",isDocsHomePage:!1,title:"MAC Address Uniqueness on 128T",description:"Each Ethernet device uses an address referred to as the Media Access Control (MAC) address that allows other devices to communicate with it at the Data Link layer. These addresses must be unique on each L2 (broadcast) domain, in order to ensure that Ethernet frames are sent to the appropriate device.",source:"@site/docs/ts_mac_uniqueness.md",slug:"/ts_mac_uniqueness",permalink:"/docs/ts_mac_uniqueness",version:"current",lastUpdatedAt:1626807344,sidebar_label:"MAC Address Uniqueness",sidebar:"docs",previous:{title:"Understanding Logs on the 128T",permalink:"/docs/ts_logs"},next:{title:"Packet Capture",permalink:"/docs/ts_packet_capture"}},d=[{value:"The Symptoms",id:"the-symptoms",children:[]},{value:"The Resolution",id:"the-resolution",children:[]}],c={rightToc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Each Ethernet device uses an address referred to as the Media Access Control (MAC) address that allows other devices to communicate with it at the Data Link layer. These addresses must be unique on each L2 (broadcast) domain, in order to ensure that Ethernet frames are sent to the appropriate device."),Object(s.b)("p",null,'Because two devices with the same MAC on the same L2 broadcast domain are indistinguishable from one another, this is often leveraged by equipment manufaturers for the purposes of interface failover; deliberately deploying two devices with the same MAC on the same broadcast domain, and controlling which of them "owns" the interface lets adjacent devices continue to communicate with the same L2 destination when ownership changes from one piece of equipment to another.'),Object(s.b)("p",null,'The 128T router uses this technique for its "protected interface" failover; by assigning the same ',Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," on two interfaces spanning two nodes that comprise a router, you can have those nodes elect an active owner of the interface, and transfer ownership to the partner node in the event of a failure."),Object(s.b)("p",null,"Thus, enabling this behavior only requires assigning a unique ",Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," that is shared between the two devices. Furthermore, for the reasons mentioned above, this ",Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," must be otherwise unique on its broadcast domain."),Object(s.b)("p",null,"We have observed cases where broadcast domains span ",Object(s.b)("em",{parentName:"p"},"much further")," than anticipated, and reusing the same ",Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," on two routers many miles apart has contributed to difficult-to-diagnose issues. In one instance, a nationwide enterprise branch location shared a common broadcast domain with anoter branch location over 12 miles away, using the same ISP."),Object(s.b)("p",null,'Furthermore, data suggests that the issue may not necessarily be limited to broadcast domains; if an ISP uses shared DHCP servers that cover many broadcast domains, these may be unwilling to issue DHCP leases to two different broadcast domains if the DHCP requests share a common L2 source address. For this reason, in the remainder of the document we will refer to the problem as existing in a common "domain," which may represent either a broadcast domain or a DHCP domain.'),Object(s.b)("h2",{id:"the-symptoms"},"The Symptoms"),Object(s.b)("p",null,'If MAC addresses are not unique in a domain, this will lead to peculiar behavior as observed by the network admin. An interface may suddenly "lose" its IP address, and dutifully send DHCP requests to acquire a new address, but have those requests go unanswered. Then, without warning, it will suddenly spring to life and acquire an IP address.'),Object(s.b)("p",null,"When you see a DHCP-enabled interface that has an ",Object(s.b)("inlineCode",{parentName:"p"},"<empty>")," value for its address, this is a possible culprit. An example is below (output is truncated to fit the page):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@SOL2035P3A.SOL2035P3# show network-interface node all\nThu 2019-05-09 13:23:49 UTC\n\n=========== ============ ========= ============= ========== ==================== \n Router      Node          Device   Name          DHCP       Address\n=========== ============ ========= ============= ========== ====================\n SOL2035P3   SOL2035P3A         2   ha-fabric     disabled   169.254.255.0/31\n SOL2035P3   SOL2035P3A         3   pos           disabled   10.120.135.1/25\n SOL2035P3   SOL2035P3A         3   utility       disabled   10.120.135.161/27\n SOL2035P3   SOL2035P3A         3   voice         disabled   10.120.135.193/27\n SOL2035P3   SOL2035P3A         4   DIA           v4         <empty>/32    \n")),Object(s.b)("p",null,"As you can see here, the DIA interface has no IP address. Capturing packets on that interface (using a ",Object(s.b)("inlineCode",{parentName:"p"},"len>0")," filter or equivalent) will confirm that the interface is sending DHCP requests. However, if the ISP has already issued a DHCP lease for the MAC address requesting an IP address, these requests may go unanswered."),Object(s.b)("h2",{id:"the-resolution"},"The Resolution"),Object(s.b)("p",null,"To avoid colliding MAC addresses within a domain, we must ensure each is unique. In one representative deployment, the enterprise uses four digit numbers to uniquely identify each location. Thus, we leveraged the last two octets of the ",Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," to insert this four digit identifier. For example, the branch 1234 uses the MAC address ",Object(s.b)("inlineCode",{parentName:"p"},"5a:1f:2b:57:12:34"),", and the branch 5678 uses the MAC address ",Object(s.b)("inlineCode",{parentName:"p"},"5a:1f:2b:57:56:78"),'. While this does not guarantee that MAC addresses are unique within a domain (since another device could conceivably have one of those two addresses "natively"), the chances are far, far more remote.'),Object(s.b)("p",null,"To rectify the problem, we must change the ",Object(s.b)("inlineCode",{parentName:"p"},"shared-phys-address")," on both the A and B nodes in a router."),Object(s.b)("p",null,"Additionally, for specific deployments where the two nodes in a router are not persistently connected to the same L2 interface at the same time, we recommend configuring Linux's MAC address on that interface to match the one that will be used by the 128T software. (This is because we have observed certain business-class DIA circuits that will only issue one IP/MAC binding at a time, and if Linux has a different MAC than 128T, the host's MAC may take a lease at the expense of 128T's MAC.)"),Object(s.b)("p",null,"This is done by editing the ",Object(s.b)("inlineCode",{parentName:"p"},"MACADDR")," field within ",Object(s.b)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/ifcfg-<ifname>"),". Ensure this matches the MAC configured within 128T's configuration."),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'This is NOT TO BE DONE for "traditional" high availability deployments where both interfaces are plugged into the same L2 broadcast domain at the same time. This is because stopping 128T on one node will cause Linux to ARP out for the MAC address, which will cause disruption to service for its counterpart that is still running.'))))}u.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,b=h["".concat(i,".").concat(p)]||h[p]||l[p]||s;return n?r.a.createElement(b,o(o({ref:t},c),{},{components:n})):r.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);