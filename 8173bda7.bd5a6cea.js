(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(205)),i={title:"128T Installer 2.6 Release Notes",sidebar_label:2.6},s={unversionedId:"release_notes_128t_installer_2.6",id:"release_notes_128t_installer_2.6",isDocsHomePage:!1,title:"128T Installer 2.6 Release Notes",description:"Release 2.6.3",source:"@site/docs/release_notes_128t_installer_2.6.md",slug:"/release_notes_128t_installer_2.6",permalink:"/docs/release_notes_128t_installer_2.6",version:"current",lastUpdatedAt:1615852208,sidebar_label:2.6,sidebar:"docs",previous:{title:"128T Installer 2.7 Release Notes",permalink:"/docs/release_notes_128t_installer_2.7"},next:{title:"128T Installer 2.5 Release Notes",permalink:"/docs/release_notes_128t_installer_2.5"}},l=[{value:"Release 2.6.3",id:"release-263",children:[{value:"Issues Fixed",id:"issues-fixed",children:[]}]},{value:"Release 2.6.2",id:"release-262",children:[{value:"Issues Fixed",id:"issues-fixed-1",children:[]}]},{value:"Release 2.6.1",id:"release-261",children:[{value:"New Features and Improvements",id:"new-features-and-improvements",children:[]}]},{value:"Release 2.6.0",id:"release-260",children:[{value:"New Features and Improvements",id:"new-features-and-improvements-1",children:[]}]},{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Caveats",id:"caveats",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"release-263"},"Release 2.6.3"),Object(o.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-344"),' rpmdb corruption detection operation may fail on slower systems resulting in a node asset persisting in a connected state or an installation/upgrade may fail with a message of "Unable to repair RPM database"\n',Object(o.b)("em",{parentName:"li"},Object(o.b)("strong",{parentName:"em"},"Cause:"))," The rpm operation on lower end systems may exceed the time defined, resulting in a false negative response for a corrupted rpm database. An example of a lower end system is a 2 Core 4G system.")),Object(o.b)("h2",{id:"release-262"},"Release 2.6.2"),Object(o.b)("h3",{id:"issues-fixed-1"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IN-332")," - grub2-efi-x64 removed on upgrade to 128T version 4.4.2 or 4.5.1 if the conductor is running on non uEFI OS imaged hardware and the routers are running on uEFI OS imaged hardware."),Object(o.b)("p",{parentName:"li"}," Until the systems are updated with the 128T-installer 2.6.2-1 version all upgrades should be performed by importing the 128T OTP ISO on the conductor for the targeted 128T upgrade version. Removal of grub2-efi-x64 rpm and a system reboot afterwards will result in a system that will not boot. Note: If the conductors have access to the public repos, the installer will be updated through the normal upgrade process. Additional information on the import process can be found here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli_reference#import-iso"}),"pcli import iso")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installer_cli_reference#import"}),"installer import")))),Object(o.b)("h2",{id:"release-261"},"Release 2.6.1"),Object(o.b)("h3",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-267")," - Detect and correct corrupted linux rpmdb, rpmdb is used for linux package management.")),Object(o.b)("h2",{id:"release-260"},"Release 2.6.0"),Object(o.b)("h3",{id:"new-features-and-improvements-1"},"New Features and Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Support for 128T version 4.3.8")),Object(o.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-261")," - Installation using a CentOS 7.3 base is no longer supported.")),Object(o.b)("h2",{id:"caveats"},"Caveats"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IN-141")," - Unsupported installed rpms result in Canceled upgrade\n",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Symptom:"))," GUI presents a failure on upgrade with the following text provided:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Error: transaction check vs depsolve:\n")),Object(o.b)("p",{parentName:"li"},"example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Cancelling upgrade of the second node on the router due to failure on this node:\nFailed to install 128T-manifest-0:4.1.0.1.el7.centos-1.x86_64:\nError: transaction check vs depsolve:\niptables = 1.4.21-28.el7 is needed by iptables-services-1.4.21-28.el7.x86_64\n")),Object(o.b)("p",{parentName:"li"},"To diagnose the problem, try running: ",Object(o.b)("inlineCode",{parentName:"p"},"rpm -Va --nofiles --nodigest"),".\nIf this is a corrupted RPMDB, running ",Object(o.b)("inlineCode",{parentName:"p"},"rpm --rebuilddb")," may address the issue."),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Cause:"))," Installed version of the RPM's coming from a later version of the Supported 128T OS version. 128T Versions 3.2.8, 4.0.0 and 4.0.1 are supported on CentOS 7.4. Version 4.1.0 is supported on CentOS 7.5."),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Corrective Action:"))," For the offending RPM that comes from a different version of the OS than is installed and running, perform either operation:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'Remove the offending rpm (in the example above "iptables-services-1.4.21-28.el7.x86_64" would be removed'),Object(o.b)("li",{parentName:"ol"},"Setup a new repo pointing to the support CentOS vault version and downgrade the related rpms")))))}p.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);