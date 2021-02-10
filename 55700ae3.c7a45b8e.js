(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(204)),i={title:"Set Hostname"},l={unversionedId:"plugin_set_hostname",id:"plugin_set_hostname",isDocsHomePage:!1,title:"Set Hostname",description:"Set the system hostname of a 128T node to the default value of node.router or define a custom hostname. Where node and router are set to the respective values defined in 128T configuration.",source:"@site/docs/plugin_set_hostname.md",slug:"/plugin_set_hostname",permalink:"/docs/plugin_set_hostname",version:"current",lastUpdatedAt:1612976954,sidebar:"docs",previous:{title:"Mosh Plugin",permalink:"/docs/plugin_mosh"},next:{title:"SIP ALG Plugin",permalink:"/docs/plugin_sip_alg"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Enabled",id:"enabled",children:[]},{value:"Disabled",id:"disabled",children:[]}]},{value:"Caveat",id:"caveat",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Set the system hostname of a 128T node to the default value of ",Object(o.b)("inlineCode",{parentName:"p"},"node.router")," or define a custom hostname. Where ",Object(o.b)("inlineCode",{parentName:"p"},"node")," and ",Object(o.b)("inlineCode",{parentName:"p"},"router")," are set to the respective values defined in 128T configuration."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"The Set Hostname plugin is obtained from the official 128T software repository."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The instructions for installing and managing the plugin can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugin_intro#installation-and-management"}),"here"),"."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The plugin confiugration is managed at the node level. If ",Object(o.b)("inlineCode",{parentName:"p"},"enabled"),", the plugin will auto-generate a hostname of ",Object(o.b)("inlineCode",{parentName:"p"},"node.router")," unless the ",Object(o.b)("inlineCode",{parentName:"p"},"hostname")," field is configured to a value besides ",Object(o.b)("inlineCode",{parentName:"p"},"auto"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," the hostname will remain as currently set."),Object(o.b)("h3",{id:"enabled"},"Enabled"),Object(o.b)("p",null,"Either of the below examples will result in ",Object(o.b)("inlineCode",{parentName:"p"},"node.router")," as the hostname."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"set-hostname\n    enabled   true\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"set-hostname\n    enabled   true\n    hostname  auto\nexit\n")),Object(o.b)("p",null,"The below example will set the hostname to ",Object(o.b)("inlineCode",{parentName:"p"},"custom-name"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"set-hostname\n    enabled   true\n    hostname  custom-name\nexit\n")),Object(o.b)("h3",{id:"disabled"},"Disabled"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"set-hostname\n    enabled   false\nexit\n")),Object(o.b)("h2",{id:"caveat"},"Caveat"),Object(o.b)("p",null,"Ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"PS1")," shell variable includes ",Object(o.b)("inlineCode",{parentName:"p"},"\\H")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"\\h")," to view the full hostname otherwise in the ",Object(o.b)("inlineCode",{parentName:"p"},"node.router")," case you will only see the ",Object(o.b)("inlineCode",{parentName:"p"},"node")," component, but the system hostname will be accurate."))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);