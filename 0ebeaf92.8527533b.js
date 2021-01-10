(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(202)),i={title:"Creating a Bootable USB from ISO",sidebar_label:"Creating Bootable USB"},c={unversionedId:"intro_creating_bootable_usb",id:"intro_creating_bootable_usb",isDocsHomePage:!1,title:"Creating a Bootable USB from ISO",description:"Introduction",source:"@site/docs/intro_creating_bootable_usb.md",slug:"/intro_creating_bootable_usb",permalink:"/docs/intro_creating_bootable_usb",version:"current",lastUpdatedAt:1610288412,sidebar_label:"Creating Bootable USB",sidebar:"docs",previous:{title:"Downloading ISOs",permalink:"/docs/intro_downloading_iso"},next:{title:"Installing From Bootable Media",permalink:"/docs/intro_installation_bootable_media"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Bootable USB",id:"bootable-usb",children:[{value:"Creating a Bootable ISO: Linux and MacOS",id:"creating-a-bootable-iso-linux-and-macos",children:[]},{value:"Creating a Bootable ISO: Windows",id:"creating-a-bootable-iso-windows",children:[]},{value:"Procedure",id:"procedure",children:[]}]},{value:"Creating a CDROM/DVD",id:"creating-a-cdromdvd",children:[]},{value:"Disk Cloning",id:"disk-cloning",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"128 Technology distributes our software as a set of applications, an ISO, or a container. The ISO is most commonly used to stage a system that does not have an operating system, or if the system is being repurposed as a 128T system. The goal of this guide is produce a bootable USB drive from a 128T ISO."),Object(r.b)("h2",{id:"bootable-usb"},"Bootable USB"),Object(r.b)("p",null,"For small deployments or a proof of concept, each ISO image can be loaded on to a bootable USB to install the operating system and 128T software. After you have created the bootable ISO, follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_installation_bootable_media"}),"instructions for installing from bootable media"),". "),Object(r.b)("h3",{id:"creating-a-bootable-iso-linux-and-macos"},"Creating a Bootable ISO: Linux and MacOS"),Object(r.b)("p",null,"Creating a bootable ISO from Linux or the MacOS is straightforward. You must have administrative privileges to the system."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the ISO for the software version to be loaded onto the USB. Use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_downloading_iso"}),"download instructions"),". ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Locate the USB volume name of the target drive (in this example, \u201cdisk2s1\u201d) with the ",Object(r.b)("inlineCode",{parentName:"p"},"diskutil")," command."))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"diskutil list\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Use the command below to copy the ISO image onto the USB. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo diskutil unmount /dev/disk2s1\nsudo dd if=~/128T-<VERSION>.el7.x86_64.iso of=/dev/disk2s1 bs=16384\ndiskutil eject /dev/disk2s1\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"<VERSION>")," is replaced with the 128T version you are interested in."),Object(r.b)("h3",{id:"creating-a-bootable-iso-windows"},"Creating a Bootable ISO: Windows"),Object(r.b)("p",null,"Before beginning, install the Rufus software ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://rufus.akeo.ie/downloads/"}),"https://rufus.akeo.ie/downloads/")," on your Windows system. ",Object(r.b)("sup",Object(n.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(r.b)("h3",{id:"procedure"},"Procedure"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch Rufus."),Object(r.b)("li",{parentName:"ol"},"Select the USB Device."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"MBR partition scheme for BIOS or UEFI"),"."),Object(r.b)("li",{parentName:"ol"},"Select the 128T ISO."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Start"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Write in ISO image mode"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"OK"),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The 128 Technology ISOs are desiged to be installed on both BIOS and uEFI partitions, however hardware support varies. Please check your hardware configuration requirements before specifying one or the other during install. "))),Object(r.b)("h2",{id:"creating-a-cdromdvd"},"Creating a CDROM/DVD"),Object(r.b)("p",null,"For systems with an onboard optical drive, it may be preferable to write the ISO to a CD, DVD, or BlueRay disk. There are many tools available on the major platforms to write ISOs to optical discs, suck as K3b, Disco, etc. Those procedures are not addressed here. "),Object(r.b)("h2",{id:"disk-cloning"},"Disk Cloning"),Object(r.b)("p",null,"Multiple installations can be performed quickly and efficiently using Disk Cloning. After the initial ISO installation and power off, the platform is generic and can be cloned to a bootable USB to create a master copy of that platform. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When using cloned images, an identical hardware platform must be used. Create a new master image for each hardware variation."))),Object(r.b)("p",null,"The cloned platform disk is then used to install the filesystem and 128T software on any number of other identical hardware platforms. "),Object(r.b)("p",null,"The high level steps are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The platform is installed using an ISO image which powers down on success."),Object(r.b)("li",{parentName:"ul"},"Use Clonezilla or other Live USB to copy the platform on to bootable media."),Object(r.b)("li",{parentName:"ul"},"Distribute the cloned disk using USB, multicast, or other technique.")),Object(r.b)("p",null,"Refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_otp_iso_install"}),"Installing from an ISO")," for installation information."),Object(r.b)("h2",{id:"further-resources"},"Further Resources"),Object(r.b)("p",null,"Additional information on Bootable USB creation tools can be found here:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/"}),"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/")),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"tested with version 2.18.1213",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0}}]);