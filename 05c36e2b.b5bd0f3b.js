(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{224:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(224)),l={title:"128T 5.3 Release Notes",sidebar_label:"5.3"},o={unversionedId:"release_notes_128t_5.3",id:"release_notes_128t_5.3",isDocsHomePage:!1,title:"128T 5.3 Release Notes",description:"Issues resolved in a release are merged into subsequent releases chronologically AND numerically.",source:"@site/docs/release_notes_128t_5.3.md",slug:"/release_notes_128t_5.3",permalink:"/docs/release_notes_128t_5.3",version:"current",lastUpdatedAt:1628560762,sidebar_label:"5.3",sidebar:"docs",previous:{title:"128T-4.2.0",permalink:"/docs/api_rest_4.2.0"},next:{title:"128T 5.2 Release Notes",permalink:"/docs/release_notes_128t_5.2"}},s=[{value:"Release 5.3.0",id:"release-530",children:[{value:"New Features and Improvements",id:"new-features-and-improvements",children:[]},{value:"Upgrade Considerations",id:"upgrade-considerations",children:[]},{value:"Resolved Issues",id:"resolved-issues",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Issues resolved in a release are merged into subsequent releases chronologically AND numerically. "),Object(i.b)("p",{parentName:"div"},"If you do not see an issue listed below, it may have been resolved in another recently released version. A link to the Release Notes for the most recent chronological release of SSR / 128T Software is provided."),Object(i.b)("p",{parentName:"div"},"Alternatively, refer to the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/about_releases"}),"List of Releases"))," page for release dates and links to all SSR / 128T Release Notes; or, if you know the Issue ID Number, enter that into the Search field at the top right of this page. "))),Object(i.b)("h2",{id:"release-530"},"Release 5.3.0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Release Date:")," August 6, 2021"),Object(i.b)("h3",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-31910 Configuration Performance Improvements:")," Enhanced the configuration management subsystem, dramatically increasing the speed of config validation, edit, and commit operations. These improvements are most noticeable on large scale deployments on conductors managing over 1,000 routers.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-35414 Refresh actions now available for individual sections on the Router Page:")," The Device interface, Network Interface, and Peer Paths table sections now can be refreshed independently.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-38244 The Routers Page is easier to Search:")," Added a column selector and a search matching system to make the search function more granular. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-38445 ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/ts_packet_capture#session-capture-in-the-gui"}),"GUI Session Capture"),":")," Added pages to the user interface that allow you to view and configure capture information.  ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-39293 and I95-40139 GUI Plugin Details and Commands:")," Added pages to the user interface that allow you to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/plugin_intro#installation-and-management"}),"run the commands that are bundled with the installed plugins"),". ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40458 Added the ability to toggle between Advanced and Basic Configuration mode:")," Added the option to limit the main configuration screen to the most frequently used fields, or display all configuration options. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40532 Added Tenant prefix support on network interface:")," This provides a simpler way to configure the tenant prefixes on a per branch basis.")),Object(i.b)("h3",{id:"upgrade-considerations"},"Upgrade Considerations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before upgrading to version 5.3.0, please review the ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/intro_upgrade_considerations"}),"5.3.0 Upgrade Considerations")," page. Several modifications have been made to the process for verifying configurations, which will impact existing configurations.")),Object(i.b)("h3",{id:"resolved-issues"},"Resolved Issues"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-39457 ServiceSecurityCheck validator should check for next-peer in service-route:")," A missing validation check on ",Object(i.b)("inlineCode",{parentName:"p"},"next-peer")," service routes allows the configuration to be committed without presenting an error, preventing the establishment of an SVR session. This issue has been resolved in 5.3.0."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"To reconcile pre-5.3.0 configurations:"))," Manually configure a security policy on each service with a ",Object(i.b)("inlineCode",{parentName:"p"},"peer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"next-peer")," service route. "))))),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-19871 Unknown session-type mismatched:")," When a session-type does not have a match, the ",Object(i.b)("inlineCode",{parentName:"li"},"Unclassified")," service-class is used when it is available.**")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-34951 Creating a new interface autofills incorrect data:")," Resolved an issue where data for an existing interface is autofilled for a new interface. The New Interface screen now displays fields correctly. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-39713 Access policy object screen has incorrect heading text:")," The heading for the access policy setting has been changed to display the correct heading text.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-39954 Conductor Service Generation Service Policy cannot be set:")," Resolved a ",Object(i.b)("inlineCode",{parentName:"li"},"management-service-generation")," validation error. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40124 GRE Interface not inherting teneancy from parent:")," The GRE Interface now inherts teneancy and neighborhood configuration from parent.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40144 EoSVR with outbound only sessions showing errors:")," Resolved an issue where EoSVR with outbound only sessions may show errors when FPM is turned on, and will not contribute to FPM data.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40168 ",Object(i.b)("inlineCode",{parentName:"strong"},"show udp-transform")," not providing result details:")," The ",Object(i.b)("inlineCode",{parentName:"li"},"show udp-tranform")," reason field now provides correct details.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40191 Office365 service failing on bootup:")," This issue has been resolved.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40239 CVE-2021-26937:")," This vulnerability has been resolved.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40241 RHSA-2020:1180:")," Resolved RHSA-2020:1180 by deprecating package ImageMagick.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40242 CESA-2021:0856 advisory:")," This vulnerability has been resolved. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40298 Local Validation not the default:")," When running validate or commit from the PCLI on a Conductor, local validation is now the default instead of distributed validation.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40304 Allow for duplicate domain names:")," When the same domain name appears for multiple categories, the system will preserve the first such entry and ignore the rest.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40334 ",Object(i.b)("inlineCode",{parentName:"strong"},"show service-path")," shows BGPoSVR for an EoSVR interface:")," Resolved the issue where ",Object(i.b)("inlineCode",{parentName:"li"},"ethernet-over-svr")," routes would be displayed as ",Object(i.b)("inlineCode",{parentName:"li"},"bgp-over-svr")," in the output. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40349 Improve Session Not Found Message:")," The message is now more user-friendly. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40380 Routers Page facet selector requires a search value:")," Removed a condition causing the facets to be ignored when the search bar is empty.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40407 Conductor CLI complains that it is a managed router:")," This issue has been resolved. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40429 Unable to make local router changes:")," Resolved an issue where any local changes were overwritten immediately, rather than when the configuration on the conductor was committed.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40435 Loss of HA headend after configuration changes to spoke:")," Resoved an issue where configuration changes to traffic-engineering when HA is enabled force the interface into standby mode.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40460 The Download Quickstart link in Firefox does not download the file:")," This issue has been resolved. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40473 API Username not being recorded:")," Resolved an issue where the ",Object(i.b)("inlineCode",{parentName:"li"},"modify_user")," event was omitting the ",Object(i.b)("inlineCode",{parentName:"li"},"fullName")," modified field.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40489 ISO missing 128T-minion-connector rpm:")," The 128T-minion-connector plugin rpm was not included in the 5.1 OTP ISO. This has been corrected in the 128T-5.1.3-1.el7.OTP.v3.x86_64.iso ISO.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40577 Import certificate webserver not copying the private key:")," This issue has been resolved.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40669 Reverse SSH config file only generated if remote login enabled:")," The reverse SSH config file is now generated correctly. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40682 GUI login page keeps focus on the last selected element:")," The Login page now focuses on the username field after an invalid login.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-40888",Object(i.b)("inlineCode",{parentName:"strong"},"show application modules status")," generating an unhandled error:")," Resolved an issue with ",Object(i.b)("inlineCode",{parentName:"li"},"show application modules status")," causing unhandled errors.")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-41116 Authentication Error after Upgrade:")," Resolved an issue where performing an upgrade, then a rollback, then upgrade, blocked validation. ")),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"I95-41275 Synchronization unable to complete:")," Resolved an issue where a previous failure prevents synchronization. ")))}b.isMDXComponent=!0}}]);