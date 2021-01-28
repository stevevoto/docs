(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(203)),r=n(242),s={title:"Installing From the OTP ISO",sidebar:"Installing From the OTP ISO"},l={unversionedId:"intro_installation_otp_iso",id:"intro_installation_otp_iso",isDocsHomePage:!1,title:"Installing From the OTP ISO",description:"The OTP installation process produces a Router installed with 128T software set to factory defaults. Upon completing the OTP installation process, the default behavior is to provision the device to be configured with a DHCP client on the first ethernet port and DHCP server listening on all other ports.",source:"@site/docs/intro_installation_otp_iso.mdx",slug:"/intro_installation_otp_iso",permalink:"/docs/intro_installation_otp_iso",version:"current",lastUpdatedAt:1611845263},c=[{value:"Disk Cloning",id:"disk-cloning",children:[]},{value:"Installing 128T with the ISO",id:"installing-128t-with-the-iso",children:[]},{value:"Bootstrapping",id:"bootstrapping",children:[{value:"Hostname and Salt Minion Identifier",id:"hostname-and-salt-minion-identifier",children:[]},{value:"QuickStart Location",id:"quickstart-location",children:[]},{value:"Image Validation",id:"image-validation",children:[]},{value:"Scriptlets",id:"scriptlets",children:[]},{value:"Bootstrapping Flow Chart",id:"bootstrapping-flow-chart",children:[]}]},{value:"QuickStart file via REST",id:"quickstart-file-via-rest",children:[{value:"Testing",id:"testing",children:[]}]}],p={rightToc:c};function b(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The OTP installation process produces a Router installed with 128T software set to factory defaults. Upon completing the OTP installation process, the default behavior is to provision the device to be configured with a DHCP client on the first ethernet port and DHCP server listening on all other ports. "),Object(o.b)("p",null,"If you have performed the conductor and router configuration procedures in the previous sections, then the Bootstrapping procedure will use the Quickstart file generated by the Conductor to finalize the 128T configuration. After performing the QuickStart operation, the 128T will have connectivity to its Conductor, have downloaded the latest configuration, and begin operation. These defaults ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#quickstart-location"}),"can be changed")," to suit your needs."),Object(o.b)("h3",{id:"disk-cloning"},"Disk Cloning"),Object(o.b)("p",null,"Disk Cloning allows you to create a generic router platform image that can be used to perform multiple installations quickly and efficiently. After the initial ISO installation and power off, the platform is generic and can be cloned to a disk to create a copy of that platform. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When using cloned images, an identical hardware platform must be used. Create a new disk image for each hardware variation."))),Object(o.b)("p",null,"The cloned platform disk is then used to install the filesystem and 128T software on any number of other identical hardware platforms. "),Object(o.b)("p",null,"The general process for disk cloning is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The platform is installed using an ISO image which powers down on success."),Object(o.b)("li",{parentName:"ol"},"Use Clonezilla or other Live USB to make a copy of the platform."),Object(o.b)("li",{parentName:"ol"},"Distribute the cloned disk using USB, multicast, or other technique."),Object(o.b)("li",{parentName:"ol"},"Start each platform after installation."),Object(o.b)("li",{parentName:"ol"},"Allow each platform to bootstrap and then reboot."),Object(o.b)("li",{parentName:"ol"},"Verify the platform validation report.xs")),Object(o.b)("h2",{id:"installing-128t-with-the-iso"},"Installing 128T with the ISO"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intro_installation_bootable_media"}),"instructions")," for installing the OTP ISO from bootable media. After installation, the platform will power off."),Object(o.b)("h2",{id:"bootstrapping"},"Bootstrapping"),Object(o.b)("p",null,"After the initial installation and poweroff, the system is generic - it has no specific configuration. Once the platform is started again, an automated script performs bootstrapping of the platform. This script is a single run service unit that executes ",Object(o.b)("strong",{parentName:"p"},"once")," during the first bootup, and performs the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Configure Hostname and Salt Minion Identifier."),Object(o.b)("li",{parentName:"ol"},"Configure 128T and network interfaces."),Object(o.b)("li",{parentName:"ol"},"Enable 128T and salt-minion service."),Object(o.b)("li",{parentName:"ol"},"Write a Result Report."),Object(o.b)("li",{parentName:"ol"},"Reboot.")),Object(o.b)("p",null,"After reboot, the 128T service will be configured and running."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is important to note that after the OS installation the dhclient is configured across all network interfaces until the platform has completed Bootstrapping."))),Object(o.b)("h3",{id:"hostname-and-salt-minion-identifier"},"Hostname and Salt Minion Identifier"),Object(o.b)("p",null,"The hostname and salt minion identifier are set to the same value during the bootstrapping process."),Object(o.b)("p",null,"If the system serial number is provisioned (seen by ",Object(o.b)("inlineCode",{parentName:"p"},"dmidecode --string system-serial-number"),") this value will be used. Otherwise use the first MAC address found in the format of: ",Object(o.b)("inlineCode",{parentName:"p"},"mac-<address>")),Object(o.b)("h3",{id:"quickstart-location"},"QuickStart Location"),Object(o.b)("p",null,"The Bootstrapper will set 128T configuration via a QuickStart file that can be present in a number of locations:"),Object(o.b)("p",null,"The QuickStart file can be placed in the root of an attached USB drive. i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"/bootstrap.quickstart"),'. The USB drive MUST be named "BOOTSTRAP" in all caps.'),Object(o.b)("p",null,"If an attached USB drive is not found with the file in root, then the process will look for the QuickStart file ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/128technology/bootstrap.quickstart"),".\nIf no file source is present, the Bootstrapper will execute HTTP GET requests to the following endpoints in an attempt to download the QuickStart File from a server. The REST response is explained in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#quickstart-file-via-rest"}),"REST details"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"1. `http://quickstart.128t-bootstrap.local/quickstart/<identifier>`\n2. `http://192.168.128.128/quickstart/<identifier>`\n> Where `<identifier>` will be the minion-id as determined by the algorithm discussed in the [above](#hostname-and-salt-minion-identifier) section. Typically, it will be the system serial number.\n")),Object(o.b)("p",null,"If none of the above are successful, it will use OTP defaults, which sets up DHCP client on the first ethernet port and a DHCP server listening on all other ports."),Object(o.b)("h3",{id:"image-validation"},"Image Validation"),Object(o.b)("p",null,"Once the platform has been rebooted after bootstrapping has completed, there is a bootstrap validation report located at the root filesystem (",Object(o.b)("inlineCode",{parentName:"p"},"/root/128T-bootstrap.txt"),") containing details about the steps taken. Additionally, the file ",Object(o.b)("inlineCode",{parentName:"p"},"/root/128T-bootstrap.json")," contains the same information in JSON format. The report contains a message that includes additional details for each step."),Object(o.b)("p",null,"Shown below is the location of the bootstrap report as well as an example of the contents"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@sn123456789 ~]# cat /root/128T-bootstrap.txt\n+--------------------+--------+---------------------------------+\n| Label              | Result | Message                         |\n+--------------------+--------+---------------------------------+\n| Minion ID          | True   | mac-000000                      |\n| Hostname           | True   | mac-000000                      |\n| Clock Sync         | True   |                                 |\n| Initialize 128T    | True   | node.Router                     |\n| Enable 128T        | True   |                                 |\n| Enable salt-minion | True   |                                 |\n| Factory Defaults   | True   | http://192.168.0.100/quickstart |\n| Ifgcfg files       | True   |                                 |\n+--------------------+--------+---------------------------------+\n")),Object(o.b)("h3",{id:"scriptlets"},"Scriptlets"),Object(o.b)("p",null,"In addition to the above steps, the Bootstrap utility supports executing pre- and post- scriptlets on a USB drive for further customisation of the platform. The scriptlets will be executed as the first step and last steps in the bootstrap process."),Object(o.b)("p",null,"The names and locations for the scriptlets are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If scriptlet exists at the root of USB drive and is called \u201c/pre-bootstrap\u201d, it will be the first step.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Otherwise, try to use /etc/128technology/pre-bootstrap."))),Object(o.b)("li",{parentName:"ul"},"If scriptlet exists at the root of USB drive and is called \u201c/post-bootstrap\u201d, it will be the last step. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Otherwise, try to use /etc/128technology/post-bootstrap.")))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The scriptlets must have executable permissions to be executed properly."))),Object(o.b)("p",null,"Any stdout/stderr output generated from the scriptlets will be logged for you in ",Object(o.b)("inlineCode",{parentName:"p"},"/var/log/128T-bootstrap/<scriptlet-name>-scriptlet.log"),"."),Object(o.b)("h3",{id:"bootstrapping-flow-chart"},"Bootstrapping Flow Chart"),Object(o.b)("p",null,"The diagram below shows the procedure the Bootstrap utility follows during the first bootup of the platform after the ISO installation has completed. "),Object(o.b)(r.a,{chartCode:"\n    st=>start: Start\n      bs=>operation: Check for Pre-Bootstrap Scriptlet\n      usb1=>condition: On USB?\n      def1=>condition: Default?\n      es=>inputoutput: Execute Pre-Bootstrap Scriptlet\n      smh=>operation: Set Minion ID\nSet Hostname\nSynchronize Clock\n      sfd=>operation: Set 128T Factory Defaults\n      usb2=>condition: On USB?\n      def2=>condition: Default?\n      rest=>condition: REST get?\n      aq=>inputoutput: Apply quickstart.txt\n      aotpd=>inputoutput: Apply OTP Defaults\n      ist=>operation: Setup IFCFG\nEnable salt-minion\nEnable 128T\n      pbs=>operation: Check for Post-Bootstrap Scriptlet\n      usb3=>condition: On USB?\n      def3=>condition: Default?\n      es2=>inputoutput: Execute Post-Bootstrap Scriptlet\n      fin=>operation: Finalize\n      wbr=>subroutine: Write Bootstrap Report\n      reb=>operation: Reboot\n      e=>end: End\n    st->bs->usb1\n    usb1(no)->def1\n    usb1(yes)->es\n    def1(yes)->es\n    def1(no)->smh\n    es->smh\n    smh->sfd->usb2\n    usb2(no, right)->def2\n    usb2(yes, right)->aq\n    def2(yes)->aq\n    def2(no)->rest\n    rest(no)->aotpd\n    rest(yes)->aq->ist\n    aotpd->ist->pbs->usb3\n    usb3(yes)->es2\n    usb3(no)->def3\n    def3(yes)->es2->fin\n    def3(no)->fin\n    fin->wbr->reb->e\n  ",mdxType:"Flowchart"}),Object(o.b)("h2",{id:"quickstart-file-via-rest"},"QuickStart file via REST"),Object(o.b)("p",null,"If no bootstrap file is present on the USB device or disk, the Bootstrapper will execute HTTP GET requests in an attempt to download the QuickStart file from a server."),Object(o.b)("p",null,"The server must respond to the HTTP GET request with valid JSON data that is of format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n  \u201cquickstart\u201d: \u201c<quickstart-file-contents>\u201d,\n  \u201cpassword\u201d: \u201cthis-is-my-password\u201d\n}\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The response must be URL-encoded, otherwise the client will not decode the data correctly."))),Object(o.b)("p",null,"The password data within the JSON is required if the QuickStart file was encrypted when exported from the 128T Conductor."),Object(o.b)("h3",{id:"testing"},"Testing"),Object(o.b)("p",null,"The Bootstrap utility provides an entrypoint to test your QuickStart Server. By executing the below command, the client will make requests to URLs and attempt to download and decode the QuickStart file. It will NOT apply the QuickStart to the platform - only test the process."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ bootstrap128t rest-test -i <test-identifier>\n")),Object(o.b)("p",null,"Or, if you want to test a specific url:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ bootstrap128t rest-test -i <test-identifier> --url <a-fully-qualified-url>\n")))}b.isMDXComponent=!0},242:function(t,e,n){"use strict";var a=n(3),i=n(0),o=n.n(i),r=n(8),s=n.n(r),l=n(7),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={},n}Object(a.a)(e,t);var i=e.prototype;return i.componentDidMount=function(){l.a.canUseDOM&&this.setState({Flowchart:n(277).default})},i.render=function(){var t=this.state.Flowchart,e=this.props,n=e.chartCode,a=e.scale,i=void 0===a?.7:a;return l.a.canUseDOM&&t?o.a.createElement("div",{style:{overflowX:"scroll"}},o.a.createElement(t,{options:{scale:i},chartCode:n})):o.a.createElement("div",null)},e}(o.a.Component);c.propTypes={chartCode:s.a.string.isRequired,scale:s.a.number},e.a=c}}]);