(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(204)),o={title:"Manually Installing the 128T",sidebar_label:"Manually Installing the 128T"},l={unversionedId:"intro_installation_installer",id:"intro_installation_installer",isDocsHomePage:!1,title:"Manually Installing the 128T",description:"This section describes the manual installation process for the 128T. For automated installation see Installing from Bootable Media.",source:"@site/docs/intro_installation_installer.md",slug:"/intro_installation_installer",permalink:"/docs/intro_installation_installer",version:"current",lastUpdatedAt:1611865251,sidebar_label:"Manually Installing the 128T",sidebar:"docs",previous:{title:"Conductor High Availability for Cloud Deployments",permalink:"/docs/intro_initialize_HA_conductor"},next:{title:"Upgrading the 128T Networking Platform",permalink:"/docs/intro_upgrading"}},s=[{value:"Install Using 128T-installer",id:"install-using-128t-installer",children:[{value:"Initialize the 128T Node",id:"initialize-the-128t-node",children:[]},{value:"Verify Installation",id:"verify-installation",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section describes the manual installation process for the 128T. For automated installation see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_installation_bootable_media"}),"Installing from Bootable Media"),". "),Object(r.b)("h2",{id:"install-using-128t-installer"},"Install Using 128T-installer"),Object(r.b)("p",null,"The 128T router software installer package is hosted in the 128 Technology software repository, located at yum.128technology.com. During installation the system will need access to the internet to retrieve software applications and libraries. Please ensure the system can reach the public internet prior to commencing. For offline installation instructions, follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_installation_bootable_media"}),"instructions for installing from bootable media"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch a Linux command prompt."),Object(r.b)("li",{parentName:"ol"},"Enter the command to install the Yum repository that corresponds to the 128T software installer.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo yum install http://yum.128technology.com/installer/repo.rpm\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Enter the command to download the installer.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo yum install 128T-installer\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To avoid SSH session timeout during installation, it is strongly recommended to use the Screen utility when performing a manual installation."))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Create a screen and attach to it.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"screen -d -m -s <name-of-screen-session>\nscreen -x <name-of-screen-session>\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Enter the command to launch the interactive installer wizard.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo install128t\n")),Object(r.b)("p",null,"The 128T installer splash screen appears."),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Enter")," key to select ",Object(r.b)("strong",{parentName:"p"},"Begin")," and start the installation wizard."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Items that have a hotkey have a bold or alternate color letter within the element. If two items have the same hotkey, pressing the hotkey in succession will toggle among all items with a common hotkey shortcut.")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"To select a radio button option, navigate to the radio button using the arrow keys or ",Object(r.b)("strong",{parentName:"p"},"Tab")," key and press the Space bar. Pressing the ",Object(r.b)("strong",{parentName:"p"},"Enter")," key will execute the function highlighted at the bottom of the pane, typically ",Object(r.b)("em",{parentName:"p"},"OK")," or ",Object(r.b)("em",{parentName:"p"},"Back"),". Additionally, you can navigate fields using the ",Object(r.b)("strong",{parentName:"p"},"Tab")," key."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted, open the client certificate you received as part of your 128T purchase. Copy the entire contents, ",Object(r.b)("em",{parentName:"p"},"including the Certificate and Private key information"),", and paste it into the Client Certificate window of the install wizard.",Object(r.b)("br",null),"The content must begin with the line ",Object(r.b)("inlineCode",{parentName:"p"},"-----BEGIN\xa0CERTIFICATE-----")," and end with ",Object(r.b)("inlineCode",{parentName:"p"},"-----END\xa0RSA\xa0PRIVATE\xa0KEY-----"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Tab")," key after pasting the client certificate to select the ",Object(r.b)("strong",{parentName:"p"},"OK")," button, and press ",Object(r.b)("strong",{parentName:"p"},"Enter"),"."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"This is performed more easily when accessing the target machine over SSH\xa0using terminal software, rather than interacting with the target machine directly. Alternatively, you can also store the certificate as /etc/pki/128technology/release.pem to avoid having to copy and paste."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"From the Version Selection window, select your desired version from the list and select ",Object(r.b)("strong",{parentName:"p"},"OK")," to continue. The installation begins, and may take several minutes to download and install.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Enter")," key to select ",Object(r.b)("strong",{parentName:"p"},"OK")," and close the installer. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Detach from the Screen utility."))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"ctrl+a\nd\n")),Object(r.b)("p",null,"Upon completing the installation, the installer automatically launches the Initializer."),Object(r.b)("h3",{id:"initialize-the-128t-node"},"Initialize the 128T Node"),Object(r.b)("p",null,"The 128T Initializer is a complementary application to the installer that tunes your operating system, prepares the platform to run the 128T software, and creates the bootstrapping files necessary to load the software. The Initializer is automatically launched once the 128T Installation wizard is complete."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the 128T Initializer wizard screen, use the space bar to select either a ",Object(r.b)("strong",{parentName:"p"},"Router")," or ",Object(r.b)("strong",{parentName:"p"},"Conductor\xa0"),"role for the 128T\xa0node and press the ",Object(r.b)("strong",{parentName:"p"},"Enter")," key to select ",Object(r.b)("strong",{parentName:"p"},"OK"),".\n",Object(r.b)("img",{alt:"128T Role",src:a(280).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For 128T routers, you will be prompted for the IP\xa0address(es) of your 128T conductor(s). If you have conductors, enter their administrative addresses here, and this node will retrieve its configuration from the conductor. If you have only one conductor (i.e., a standalone conductor), leave the field labeled 2nd Conductor Address blank. If you have no conductors, choose ",Object(r.b)("strong",{parentName:"p"},"Skip"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When asked ",Object(r.b)("em",{parentName:"p"},"What kind of Router node is this?"),", select from the following options:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Identify the Node",src:a(281).default})))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Standalone:")," This router has no highly available peer, and is not currently planned for high availability."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"1st HA\xa0Node:")," This router is the first node of a high availability pair. You will be prompted for the\xa0High Availability address of this node. Note:\xa0The address ",Object(r.b)("em",{parentName:"li"},"must"),"\xa0be reachable by the 2nd HA\xa0Node."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"2nd HA\xa0Node:")," This router is the second node of a high availability pair, where the first node has been initialized. You will be prompted for the High Availability address of the first node.")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Enter the following system properties on the Node Info screen:")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Node Information",src:a(282).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Node Name:")," The unique name of the system within your 128T Router or Conductor, for example ",Object(r.b)("em",{parentName:"li"},"labsystem1"),". By default this field uses the Linux system's hostname.",Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Both routers and conductors can consist of one node (for standalone systems) or two nodes (for highly available systems).")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Router/Conductor Name:")," The name of the Router or Conductor system as a whole. When referring to a running 128T software instance, it is identifiable by the full name of ",Object(r.b)("inlineCode",{parentName:"li"},"nodeName.routerName"),"; e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"labsystem1.boston"),". The full system name is reflected in the PCLI prompt as discussed in the Document Conventions section of this document.")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Advanced")," button allows you to specify the number of CPU\xa0cores to be allocated for running your 128T routing software."),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is only recommended for experienced users. This setting is intended to optimize the forwarding capabilites of the 128T platform beyond the default settings for the target platform."),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("strong",{parentName:"p"},"Advanced")," selection is only available when configuring a 128T Router.")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the ",Object(r.b)("strong",{parentName:"p"},"Password Setup")," screen, create a password for the 128T Admin user. The administrator password must be at least 8 characters long, contain at least 1 uppercase letter, at least 1 lowercase letter, at least 1 number, and cannot repeat characters more than 3 times."),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Resetting a password requires entering the old password. If a password is lost or forgotten and the account is inaccessible, the account cannot be recovered. Please keep password records accessible and secure. "))))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Password Setup",src:a(283).default})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the ",Object(r.b)("strong",{parentName:"p"},"Anonymous Data Collection")," screen, select either ",Object(r.b)("strong",{parentName:"p"},"Accept")," or ",Object(r.b)("strong",{parentName:"p"},"Disable")," to enable or disable the process that measures the health of your 128T router and components.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Enter")," key to select ",Object(r.b)("strong",{parentName:"p"},"OK"),". The Initializer performs a hardware compatibility check. The compatibility check may fail due to warnings or failure notices, which are displayed in the output script. If no failures are present, you can choose to continue with the installation even if multiple warnings exist. For information on why a specific test may have failed or generated a warning, contact 128T technical support.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When prompted, either reboot your system or start 128T."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Initializer Complete",src:a(284).default})))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If installing the 128T software for the first time, a system reboot is required."))),Object(r.b)("h3",{id:"verify-installation"},"Verify Installation"),Object(r.b)("p",null,"After installing the 128T Routing Software it is important to verify that the installation was completed successfully."),Object(r.b)("h4",{id:"to-verify-the-128t-installation"},"To Verify the 128T Installation:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch a command prompt window.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Execute the\xa0command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo systemctl status 128T\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Result:"),"\xa0The service is listed as ",Object(r.b)("em",{parentName:"p"},"Active (running)"),".",Object(r.b)("br",null),"If the service is listed as ",Object(r.b)("em",{parentName:"p"},"Inactive"),", run the ",Object(r.b)("inlineCode",{parentName:"p"},"sudo systemctl start 128T"),"\xa0command. This may take several minutes to fully launch the service.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the service is listed as ",Object(r.b)("em",{parentName:"p"},"Active"),", log into the system as Admin using the system default password.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"p"},"Result:"),"\xa0The installation is verified.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Close the command prompt window."))))}b.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(h,l(l({ref:t},c),{},{components:a})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},280:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/intro_install_initializer_role-f3fd68b423dd7653ff0c8d0ca784ebe5.png"},281:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/intro_install_initializer_HASetup-482fdda2449228e0480f9aec1fc1e51e.png"},282:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/intro_install_initializer_nodeinfo-8f8ac95da736a253b2b93f9e9cb30dce.png"},283:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/intro_install_initializer_password-b0b00f5ec3f59aa4c144af02e6574cce.png"},284:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/intro_install_initializer_complete-c3a3bb4dc9122bad4fc41e931bdf8a38.png"}}]);