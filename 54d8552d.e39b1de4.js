(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(203)),i={title:"Forwarding Plane Resource Pools",sidebar_label:"Forwarding Plane Resource Pools"},s={unversionedId:"ts_forwarding_resource_pools",id:"ts_forwarding_resource_pools",isDocsHomePage:!1,title:"Forwarding Plane Resource Pools",description:'Critical to "right-sizing" the 128T for a given deployment is an understanding of how the forwarding plane is configured for its resource pools.  These resource pools are used for setting up sessions, forwarding tables and packet transformations as quickly and efficiently as possible.  The resource pools are proportionately sized relative to the amount of huge pages allocated during system initialization.',source:"@site/docs/ts_forwarding_resource_pools.md",slug:"/ts_forwarding_resource_pools",permalink:"/docs/ts_forwarding_resource_pools",version:"current",lastUpdatedAt:1611799135,sidebar_label:"Forwarding Plane Resource Pools",sidebar:"docs",previous:{title:"Connecting to 128T Routers from Conductor",permalink:"/docs/ts_connecting_to_routers"},next:{title:"Understanding Logs on the 128T",permalink:"/docs/ts_logs"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Critical to "right-sizing" the 128T for a given deployment is an understanding of how the forwarding plane is configured for its resource pools.  These resource pools are used for setting up sessions, forwarding tables and packet transformations as quickly and efficiently as possible.  The resource pools are proportionately sized relative to the amount of huge pages allocated during system initialization.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node2.burlma# show capacity\nTue 2019-08-27 15:54:50 UTC\n\nNode: node2\n\n===================== ========= ========== =======\n Resource              Entries   Capacity   Usage\n===================== ========= ========== =======\n access-policy-table       518       2048   25.3%\n action-pool             16277     287590   5.7%\n arp-table                   3      62359   0.0%\n fib-table                1862      16340   11.4%\n flow-table               9244     127455   7.3%\n source-tenant-table        11       2048   0.5%\n")),Object(a.b)("p",null,"System configuration plays the largest role in consuming these resource pools.  In the event that these resources are at risk of being exhausted, an alarm will be generated for each of the resource pools should they reach 85% of their capacity.  Exhaustion of any of these tables will result in an inability for the system to operate properly."),Object(a.b)("p",null,"If the system configuration is already optimized, meaning any services or tenants no longer in use are already removed, it may be time to explore migrating the 128T to a platform with more memory available. If the system has additional unused RAM, the amount of huge pages can be increased by running the initializer."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"128T can not be running while reinitializing the system. Performing this operation should be done during a maintenance window where a service disruption will have the least amount of impact."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"systemctl stop 128T\ninitialize128t\n")),Object(a.b)("p",null,"Navigating through the initializer will present an option to increase the amount of huge pages allocated to the 128T beyond the default value.  Making a change to the huge page quantity will require a reboot of the host platform."))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);