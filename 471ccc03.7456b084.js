(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(224)),r={title:"Configuration Templates",sidebar_label:"Configuration Templates"},c={unversionedId:"config_templates",id:"config_templates",isDocsHomePage:!1,title:"Configuration Templates",description:"History",source:"@site/docs/config_templates.md",slug:"/config_templates",permalink:"/docs/config_templates",version:"current",lastUpdatedAt:1628560762,sidebar_label:"Configuration Templates",sidebar:"docs",previous:{title:"Tenants",permalink:"/docs/config_tenants"},next:{title:"Adaptive Encryption",permalink:"/docs/sec_adaptive_encrypt"}},l=[{value:"Creating a Template",id:"creating-a-template",children:[]},{value:"Copying Configuration into a Template",id:"copying-configuration-into-a-template",children:[]},{value:"Basic Mode",id:"basic-mode",children:[{value:"Marking a Field as Templated",id:"marking-a-field-as-templated",children:[]},{value:"Adding Instances",id:"adding-instances",children:[]},{value:"Generating Configuration",id:"generating-configuration",children:[]}]},{value:"Advanced Mode",id:"advanced-mode",children:[{value:"Templating Language",id:"templating-language",children:[]},{value:"The <code>{% editGroup $}</code> Tag",id:"the--editgroup--tag",children:[]},{value:"Tag Naming Conventions",id:"tag-naming-conventions",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Pulling Values from the Candidate Configuration",id:"pulling-values-from-the-candidate-configuration",children:[]},{value:"Additional Filters",id:"additional-filters",children:[]}]},{value:"Conversion Between Modes",id:"conversion-between-modes",children:[]},{value:"Configuration Wizard",id:"configuration-wizard",children:[]},{value:"Import / Export",id:"import--export",children:[]},{value:"Backing Up Templates / Storage Mechanism",id:"backing-up-templates--storage-mechanism",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"history"},"History"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Release"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Modification"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.5.0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This feature was introduced into 128T-4.5.0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.5.5"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration Wizard was added")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.5.10"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"network_hosts filter was added")))),Object(o.b)("p",null,"Configuration templates allow administrators to automate the configuration of top level resources (e.g. Routers, Tenants, Services, etc). There are two modes of templating configuration: ",Object(o.b)("strong",{parentName:"p"},"Basic")," and ",Object(o.b)("strong",{parentName:"p"},"Advanced"),". Basic mode is intended for simple templates that don't require complex logic. Advanced mode, on the other hand, exposes the full power of the underlying templating language to the administrator."),Object(o.b)("h2",{id:"creating-a-template"},"Creating a Template"),Object(o.b)("p",null,"To create a template, begin by navigating to the ",Object(o.b)("strong",{parentName:"p"},"Configuration")," page of the 128T Networking Platform. Next, click on the ",Object(o.b)("strong",{parentName:"p"},"Templates")," button in the top right action area of the page: ",Object(o.b)("img",{alt:"navigate_to_templates",src:a(475).default})),Object(o.b)("p",null,"On the templates page you will see a list of your current templates, or a button to create a new one if none exist. Click the ",Object(o.b)("strong",{parentName:"p"},"Create A Template")," button to create a new template: ",Object(o.b)("img",{alt:"templates_hero",src:a(476).default})),Object(o.b)("p",null,"Next fill out the information for your template and click ",Object(o.b)("strong",{parentName:"p"},"Save"),": ",Object(o.b)("img",{alt:"templates_new",src:a(477).default})),Object(o.b)("p",null,'You will now be returned to the list of templates and see your newly created template. If you click into it, you will see the message "',Object(o.b)("em",{parentName:"p"},"Template is empty, copy configuration into the template to populate it."),'". Follow the steps in ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#copying-configuration-into-a-template"}),"Copying Configuration into Template")," to learn how to populate it with configuration."),Object(o.b)("h2",{id:"copying-configuration-into-a-template"},"Copying Configuration into a Template"),Object(o.b)("p",null,"Instead of starting a template from scratch, it is often useful to copy existing or new configuration objects into the template body. The following button on top-level configuration object's pages can be used to copy the object into an existing template: ",Object(o.b)("img",{alt:"templates_copy",src:a(478).default})),Object(o.b)("h2",{id:"basic-mode"},"Basic Mode"),Object(o.b)("p",null,"Basic mode consists of two panes, the ",Object(o.b)("em",{parentName:"p"},"template body pane")," and the ",Object(o.b)("em",{parentName:"p"},"instances pane"),". The template body pane shows an annotated tree view of the configuration contained in the template. This represents the base configuration that will get generated for each instance of the template. Within the body you can mark fields as templated to make them a variable field for each instance (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#marking-a-field-as-templated"}),"Marking a Field as Templated"),"). The instances pane allows you to add, remove, search, and generate instances of the template. You can picture the instances as the input to a for-loop, where you iterate through each instance, substitute its values into the template body, and generate a chunk of configuration. When generating configuration from instances, the administrator can select individual or all instances to run the generation step on."),Object(o.b)("h3",{id:"marking-a-field-as-templated"},"Marking a Field as Templated"),Object(o.b)("p",null,"To mark a field in the template body as a variable field, hover over the value and click on it: ",Object(o.b)("img",{alt:"templates_mark",src:a(479).default})),Object(o.b)("p",null,"The field should turn green and indicate that it is now templated: ",Object(o.b)("img",{alt:"templates_marked",src:a(480).default})),Object(o.b)("h3",{id:"adding-instances"},"Adding Instances"),Object(o.b)("p",null,"To add an instance, click the ",Object(o.b)("strong",{parentName:"p"},"Create an Instance")," button in the right pane: ",Object(o.b)("img",{alt:"templates_add_instance",src:a(481).default})),Object(o.b)("p",null,"A new instance should have been created for you, click on it to expand it and fill it out with some info and then click ",Object(o.b)("strong",{parentName:"p"},"Save"),": ",Object(o.b)("img",{alt:"templates_instance_wizard",src:a(482).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The name of the instance does not have to match the name of the router, it can be any name of your choosing."))),Object(o.b)("p",null,"Create another instance and save it as well. Now you should have two instances."),Object(o.b)("h3",{id:"generating-configuration"},"Generating Configuration"),Object(o.b)("p",null,"To generate configuration for instances, first select the instances you want to generate, or use the check box beside the ",Object(o.b)("strong",{parentName:"p"},"Add Instance")," button to select them all: ",Object(o.b)("img",{alt:"templates_select_all_instances",src:a(483).default})),Object(o.b)("p",null,"Now click the magic wand icon in the instances pane: ",Object(o.b)("img",{alt:"templates_generate_btn",src:a(484).default})),Object(o.b)("p",null,"A wizard will appear to walk you through the generation steps and display any errors encountered along the way. When generation is finished you will see a success modal with a link to navigate to see your new configuration: ",Object(o.b)("img",{alt:"templates_generate_success",src:a(485).default})),Object(o.b)("p",null,"On the ",Object(o.b)("strong",{parentName:"p"},"Configuration")," page you will see your generated configuration: ",Object(o.b)("img",{alt:"templates_show_generated",src:a(486).default})),Object(o.b)("h2",{id:"advanced-mode"},"Advanced Mode"),Object(o.b)("p",null,"Advanced mode consists of two text based panes, the ",Object(o.b)("em",{parentName:"p"},"template body pane")," and the ",Object(o.b)("em",{parentName:"p"},"variables pane"),". The template body pane contents are written in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#templating-language"}),"Liquid templating language"),". The variables pane contents are written in JSON. When you generate output from an advanced mode template, the template body is evaluated using the variables you define, and it ",Object(o.b)("strong",{parentName:"p"},"must produce a valid configuration in JSON format"),". If the output of the generation is either not valid JSON or not valid configuration, you will be presented with information on where the failure occurred."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Any changes made to the template body pane or variables pane must be saved by clicking the Save button in the upper right portion of the page: ",Object(o.b)("img",{alt:"templates_advanced_mode_save",src:a(487).default})))),Object(o.b)("h3",{id:"templating-language"},"Templating Language"),Object(o.b)("p",null,"The body of a configuration template is written in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://shopify.github.io/liquid/"}),"Liquid")," templating language. Please refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://shopify.github.io/liquid/basics/introduction/"}),"Liquid documentation")," for the specifics of the language. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The 128T Networking Platform supports several custom tags and filters in Liquid (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"{% editGroup $}"),") that would not be parsable by other Liquid evaluators."))),Object(o.b)("h3",{id:"the--editgroup--tag"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"{% editGroup $}")," Tag"),Object(o.b)("p",null,"Unlike in basic mode, advanced mode runs configuration generation in one step and makes one, possibly large, edit. In some cases it is desirable to break this large edit up into a set of smaller edits, this is the functionality of the ",Object(o.b)("inlineCode",{parentName:"p"},"{% editGroup $}")," tag. This tag can be conceptually thought of as a separator that the generated output is split upon."),Object(o.b)("p",null,"For example, lets say you had the following template body and variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{% for instance in instances %}\n{% editgroup %}\n{\n  "authority": {\n    "router": [\n      {\n        "name": "{{instance.variables[\'name_IAPFNIn\']}}",\n        "location": "Boston, MA"\n      }\n    ]\n  }\n}\n{% endfor %}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "instances": [\n    {\n      "name": "Router1",\n      "variables": {\n        "name_IAPFNIn": "Router1"\n      }\n    },\n    {\n      "name": "Router2",\n      "variables": {\n        "name_IAPFNIn": "Router2"\n      }\n    }\n  ]\n}\n')),Object(o.b)("p",null,"After running the loop you would end up with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{% editgroup %}\n{\n  "authority": {\n    "router": [\n      {\n        "name": "Router1",\n        "location": "Boston, MA"\n      }\n    ]\n  }\n}\n{% editgroup %}\n{\n  "authority": {\n    "router": [\n      {\n        "name": "Router2",\n        "location": "Boston, MA"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"After splitting on the ",Object(o.b)("inlineCode",{parentName:"p"},"{% editgroup %}")," tag you would end up with the following chunks of config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "authority": {\n    "router": [\n      {\n        "name": "Router1",\n        "location": "Boston, MA"\n      }\n    ]\n  }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "authority": {\n    "router": [\n      {\n        "name": "Router2",\n        "location": "Boston, MA"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"This feature is also useful for initiating many top level edits that need to overlay on existing configuration."),Object(o.b)("h3",{id:"tag-naming-conventions"},"Tag Naming Conventions"),Object(o.b)("p",null,"While not enforced, the administrator is encouraged to follow the following naming convention for tag names that correspond to configuration: ",Object(o.b)("inlineCode",{parentName:"p"},"field-name_{7 Random Characters from [A-Za-a0-9]}"),". For example, a tag name for a router could look like: ",Object(o.b)("inlineCode",{parentName:"p"},"name_bZ2h9e0"),"."),Object(o.b)("h3",{id:"operations"},"Operations"),Object(o.b)("p",null,"Up until this point, all of the examples in this document have covered generated configurations that are merged into the existing configuration. In some deployments, the administrator may want to have a template that, for example, deletes configuration. The following syntax can be used to accomplish this in advanced mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{% for instance in instances %}\n{% editgroup %}\n{\n  "authority": {\n    "router": [\n      {\n        "_value": { "name": "{{instance.variables[\'name_aEayzmy\']}}" },\n        "_operation": "delete"\n      }\n    ]\n  }\n}\n{% endfor %}\n')),Object(o.b)("p",null,"Given the following variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "instances": [\n    {\n      "name": "Test1",\n      "variables": {\n        "name_aEayzmy": "Test1"\n      }\n    }\n  ]\n}\n')),Object(o.b)("p",null,"In the above example, router ",Object(o.b)("inlineCode",{parentName:"p"},"Test1")," would be deleted from the candidate configuration upon running the generation step."),Object(o.b)("p",null,"The following values are supported for the ",Object(o.b)("inlineCode",{parentName:"p"},"_operation")," field: ",Object(o.b)("inlineCode",{parentName:"p"},"merge"),", ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"replace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"delete"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"remove"),"."),Object(o.b)("h4",{id:"list-positioning"},"List Positioning"),Object(o.b)("p",null,"In addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"_operation")," property above, there is another property named ",Object(o.b)("inlineCode",{parentName:"p"},"_position"),". If, for example, you wanted to create a list item after another list item (e.g. if order matters) you could do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{% for instance in instances %}\n{% editgroup %}\n{\n  "authority": {\n    "router": [\n      {\n        "_value": { "name": "{{instance.variables[\'name_aEayzmy\']}}" },\n        "_operation": "create",\n        "_position": { "insert": "after", "keys": [{ "key": "name", "value": "Test2" }] }\n      }\n    ]\n  }\n}\n{% endfor %}\n')),Object(o.b)("p",null,"Given the following variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "instances": [\n    {\n      "name": "Test1",\n      "variables": {\n        "name_aEayzmy": "Test1"\n      }\n    }\n  ]\n}\n')),Object(o.b)("p",null,"The above would insert router ",Object(o.b)("inlineCode",{parentName:"p"},"Test1")," after router ",Object(o.b)("inlineCode",{parentName:"p"},"Test2"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"insert")," property can have any of the following values: ",Object(o.b)("inlineCode",{parentName:"p"},"first"),", ",Object(o.b)("inlineCode",{parentName:"p"},"last"),", ",Object(o.b)("inlineCode",{parentName:"p"},"before"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"after"),". If the list is of complex objects, like routers in the above example, the ",Object(o.b)("inlineCode",{parentName:"p"},"keys")," property must be specified for ",Object(o.b)("inlineCode",{parentName:"p"},"before")," and ",Object(o.b)("inlineCode",{parentName:"p"},"after"),". If instead the list was of simple strings like ",Object(o.b)("inlineCode",{parentName:"p"},'["a", "b"]'),", instead of ",Object(o.b)("inlineCode",{parentName:"p"},"keys")," you would specify a property called ",Object(o.b)("inlineCode",{parentName:"p"},"value")," which is a string to reference the item in the list that you want to target (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"value": "a"'),")."),Object(o.b)("h3",{id:"pulling-values-from-the-candidate-configuration"},"Pulling Values from the Candidate Configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"{% fromconfig path/to/a/config/value %}")," tag allows you to extract a value from the candidate configuration and use it during configuration generation. "),Object(o.b)("h4",{id:"referencing-a-leaf"},"Referencing a Leaf"),Object(o.b)("p",null,"For example, lets say you want a router's location to reference an existing router's location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "authority": {\n    "router": [\n      {\n        "name": "{{name}}",\n        "location": "{% fromconfig authority/router/nameOfTheExistingRouter/location %}"\n      }\n    ]\n  }\n}\n')),Object(o.b)("h4",{id:"referencing-a-leaf-list-by-index"},"Referencing a Leaf List by Index"),Object(o.b)("p",null,"For example, lets say that you want a router's description to be the first Conductor address defined at the authority level:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "authority": {\n    "router": [\n      {\n        "name": "{{name}}",\n        "location": "{% fromconfig authority/conductor-address[0] %}"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"Some things to note about paths to leaf lists:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Indices are zero-based, the first element in the leaf list has position 0."),Object(o.b)("li",{parentName:"ul"},"If you do not provide an index (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"authority/conductor-address"),") the first leaf list value will be used.")),Object(o.b)("p",null,"The following rules apply to all paths:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If traversing a list with multiple keys, the keys should be in model order and separated by a comma."),Object(o.b)("li",{parentName:"ul"},"Keys should be URL encoded, do not URL encode the comma for compound keys."),Object(o.b)("li",{parentName:"ul"},"Leading and trailing slashes are ignored."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Indices can only be used for leaf lists"),", you cannot reference a list by index, only by key.")),Object(o.b)("h3",{id:"additional-filters"},"Additional Filters"),Object(o.b)("p",null,"The following filters are available in addition to the built-in filters provided by Liquid."),Object(o.b)("h4",{id:"the-network_hosts-filter"},"The ",Object(o.b)("inlineCode",{parentName:"h4"},"network_hosts")," Filter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"network_hosts")," filter can be used for expanding IPv4 or IPv6 blocks as follows: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"{% assign addresses = exampleBlock | network_hosts %}\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"exampleBlock")," is ",Object(o.b)("inlineCode",{parentName:"p"},"192.168.0.1/30")," will produce the following addresses:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'["192.168.0.0", "192.168.0.1", "192.168.0.2", "192.168.0.3"]\n')),Object(o.b)("p",null,"They could then be looped over like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{% for address in addresses %}\n  {\n    "ipAddress": "{{address}}"\n  }{%- if forloop.last == false -%},{%- endif %}\n{% endfor %}\n')),Object(o.b)("h2",{id:"conversion-between-modes"},"Conversion Between Modes"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you have a schema defined in advanced mode, it will be lost when converting to basic mode."))),Object(o.b)("p",null,"When transitioning from basic to advanced mode or vice versa, data is retained and converted to the new mode. Basic mode can always be transitioned to advanced mode, but advanced mode cannot always be transitioned back to basic mode. The following conditions must be met for a template to be transitioned from advanced mode to basic mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The template body must start with:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"{% for instance in instances %}\n{% editgroup %}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The template body must end with:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"{% endfor %}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The JSON between the start and end segments of the body must be valid JSON."),Object(o.b)("li",{parentName:"ul"},"The JSON between the start and end segments of the body must be structurally valid configuration. We will trim any unrecognized fields, but for example if a field is supposed to be an array and it is a string, the conversion will fail."),Object(o.b)("li",{parentName:"ul"},"The variables pane of the template must contain valid JSON."),Object(o.b)("li",{parentName:"ul"},"There must be an array of instances in the variables JSON."),Object(o.b)("li",{parentName:"ul"},"Each instance must have a name and an optional variables object that maps tag names to the values that will be substituted in for them. For example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "instances": [\n    {\n      "name": "Router1",\n      "variables": {\n        "name_IAPFNIn": "Router1"\n      }\n    },\n    {\n      "name": "Router2",\n      "variables": {\n        "name_IAPFNIn": "Router2"\n      }\n    }\n  ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The easiest way to quickly make modifications to the structure of a template body in basic mode is to switch to advanced mode, make the edits, and then switch back to basic mode."))),Object(o.b)("h2",{id:"configuration-wizard"},"Configuration Wizard"),Object(o.b)("p",null,"In some scenarios, it may be desirable to have the best of both worlds between advanced mode and basic mode. Under the covers, the administrator needs the functionality of an advanced template, but also wants a form-based mechanism for filling out the variables. This can be accomplished with the ",Object(o.b)("strong",{parentName:"p"},"Configuration Wizard"),". To enable the ",Object(o.b)("strong",{parentName:"p"},"Configuration Wizard"),", the administrator must define a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON Schema")," for the template via the advanced view:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"templates_define_schema",src:a(488).default})),Object(o.b)("p",null,"Once an advanced template has a schema defined, clicking the template on the template index page brings the user to a form-based page for filling out the template variables:\n",Object(o.b)("img",{alt:"templates_form_wizard",src:a(489).default})),Object(o.b)("p",null,"Note that the user must click ",Object(o.b)("strong",{parentName:"p"},"Save")," at the bottom of the form page before proceeding to the generation step, otherwise their edits may be lost. The underlying advanced template can still be edited by clicking the ",Object(o.b)("inlineCode",{parentName:"p"},"View / Modify")," option on the templates index page."),Object(o.b)("h2",{id:"import--export"},"Import / Export"),Object(o.b)("p",null,"Templates support import and export functionality, both in basic and advanced mode. The ",Object(o.b)("strong",{parentName:"p"},"Import / Export")," wizard can be opened by clicking the following button in the upper right corner of the page: ",Object(o.b)("img",{alt:"templates_import_export_btn",src:a(490).default})),Object(o.b)("h2",{id:"backing-up-templates--storage-mechanism"},"Backing Up Templates / Storage Mechanism"),Object(o.b)("p",null,"Templates are stored on disk as JSON in the following location: ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/128technology/sync/templates.json"),". This file can be backed up, restored, or edited. While the 128T Networking Platform does watch this file for changes and updates it's state, it is not recommended to edit this file directly as a means to configure templates."))}b.isMDXComponent=!0},224:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(r,".").concat(m)]||d[m]||p[m]||o;return a?i.a.createElement(u,c(c({ref:t},s),{},{components:a})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},475:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_navigate-73588f621325743ffdec7bfd1f82ddb3.png"},476:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_hero-c80d567595b306bf47d0fe45a6c50532.png"},477:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_new-4df6f0ef65135ea150097377866c091f.png"},478:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_copy-b00ebf9ef755fe389c52130a5d806869.png"},479:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_mark-45293569b65a411df2aed1548a0c05e1.png"},480:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_marked-e58370657763cd6add70fd58ad4fed51.png"},481:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_add_instance-b057348646c1c2d8e6f91ca7497ddc00.png"},482:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_instance_wizard-01053f3dddb151a721ec2e66d1f4bf20.png"},483:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_select_all_instances-6a251526a2823ec10406f251f67d4e96.png"},484:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_generate_btn-89aea22e896ca48e5e5a287066f93b5e.png"},485:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_generate_success-39dfce46a0f42d37d9e4ca3369989bc2.png"},486:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_show_generated-cbdc66d9c2752ffb6f38532785007725.png"},487:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_advanced_mode_save-5db3a48745bac1e512191a0e76b1bc0c.png"},488:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_define_schema-9c0b2f0ec6610d5ef396649c8854dad4.png"},489:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_form_wizard-690df7f1fb7cc97dd86caf1f329c0958.png"},490:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/templates_import_export_btn-0fee8f8f41ff1ad8cfce55b616f34e81.png"}}]);