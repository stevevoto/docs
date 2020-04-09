(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(11),a=(r(0),r(239)),l={title:"128T Installer 2.3.0 Release Notes",sidebar_label:"2.3.0"},s={id:"release_notes/128t_installer_release_notes_2.3.0",title:"128T Installer 2.3.0 Release Notes",description:"## Issues Fixed",source:"@site/docs/release_notes/128t_installer_release_notes_2.3.0.md",permalink:"/docs/release_notes/128t_installer_release_notes_2.3.0",editUrl:"https://github.com/128technology/docs/tree/master/docs/release_notes/128t_installer_release_notes_2.3.0.md",lastUpdatedAt:1586452018,sidebar_label:"2.3.0",sidebar:"docs",previous:{title:"128T Installer 2.2.0 Release Notes",permalink:"/docs/release_notes/128t_installer_release_notes_2.2.0"},next:{title:"128T Installer 2.3.1 Release Notes",permalink:"/docs/release_notes/128t_installer_release_notes_2.3.1"}},i=[{value:"Issues Fixed",id:"issues-fixed",children:[]},{value:"Caveats",id:"caveats",children:[]}],c={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"issues-fixed"},"Issues Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"IN-150"),' 128T Upgrade terminates with "Unhandled exception: OSError"'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"IN-154")," Installer rollback does not work offline")),Object(a.b)("h2",{id:"caveats"},"Caveats"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"IN-126")," - Installation does not fully complete but returns Success"),Object(a.b)("p",{parentName:"li"},"   Symptom: When performing an upgrade, the installer will complete however not all packages will be updated and the following Error can be seen in the log:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'"Curl error (6): Couldn\'t resolve host name for https://mirrors.128technology.com/reposnaps/Mirrors/11_01_2018/CentOS/7.5.1804/updates/x86_64/mirror-list.html\n [Could not resolve host: mirrors.128technology.com; Unknown error]"\n\nCause: The router node could not resolve the 128T software repository\n')),Object(a.b)("p",{parentName:"li"},"   Corrective Action: When performing the upgrade from less than 4.1.x to 4.1.x, ensure internet or Conductor access (where Conducted hosted services are enabled)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"IN-141")," - Unsupported installed rpms result in Canceled upgrade"),Object(a.b)("p",{parentName:"li"},'   Symptom: GUI presents a failure on upgrade with the following text provided: "Error: transaction check vs depsolve:"'),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"  example:\n")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"  \"Cancelling upgrade of the second node on the router due to failure on this node: Failed to install 128T-manifest-0:4.1.0.1.el7.centos-1.x86_64:\n   Error: transaction check vs depsolve:\n   iptables = 1.4.21-28.el7 is needed by iptables-services-1.4.21-28.el7.x86_64\n   To diagnose the problem, try running: 'rpm -Va --nofiles --nodigest'.\n   You probably have corrupted RPMDB, running 'rpm --rebuilddb' might fix the issue.\"\n")),Object(a.b)("p",{parentName:"li"},"   Cause: Installed version of the RPM's come from a later version of the Supported 128T OS version. 128T Versions 3.2.8, 4.0.0 and 4.0.1 are supported on CentOS 7.4. Version 4.1.0 is supported on CentOS 7.5."),Object(a.b)("p",{parentName:"li"},"   Corrective Action: For the offending RPM that comes from a different version of the OS than is installed and running, perform either operation:"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Remove the offending rpm (in the example above "iptables-services-1.4.21-28.el7.x86_64" would be removed)')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setup a new repo pointing to the support CentOS vault version and downgrade the related rpms"))))))}p.isMDXComponent=!0},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,s({ref:t},c,{components:r})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);