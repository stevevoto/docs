(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(188)),i={title:"128T ZScaler Plugin 1.1 Release Notes",sidebar_label:"1.1"},s={unversionedId:"release_notes_128t_zscaler_1.1",id:"release_notes_128t_zscaler_1.1",isDocsHomePage:!1,title:"128T ZScaler Plugin 1.1 Release Notes",description:"Special Considerations",source:"@site/docs/release_notes_128t_zscaler_1.1.md",slug:"/release_notes_128t_zscaler_1.1",permalink:"/docs/release_notes_128t_zscaler_1.1",version:"current",lastUpdatedAt:1592651776,sidebar_label:"1.1",sidebar:"docs",previous:{title:"128T SIP ALG Plugin 2.1 Release Notes",permalink:"/docs/release_notes_128t_sip_alg_2.1"}},c=[{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Release 1.1.2",id:"release-112",children:[{value:"Issues Fixed",id:"issues-fixed",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(o.b)("p",null,"After upgrading to this version, a 128T service restart will be needed on the conductor. Note: If this is an HA conductor, restart the backup (non-primary) conductor node first, wait until all processes are running and then restart the primary conductor node. ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl restart 128T")),Object(o.b)("h2",{id:"release-112"},"Release 1.1.2"),Object(o.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PLUGIN-135")," Resolved incompatible inclusion of dependent package version which would result in asset failures with the message: ",Object(o.b)("inlineCode",{parentName:"li"},"Plugins highstate: [\"No matching sls found for '_states' in env 'plugins'\"]"),".")))}u.isMDXComponent=!0}}]);