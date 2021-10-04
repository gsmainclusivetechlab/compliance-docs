(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{126:function(e,t){},127:function(e,t){},155:function(e,t){},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=n(0),s=n.n(r),o=n(74),l=n(147),c=function(e){var t=e.timeout,n=void 0===t?1e3:t,a=Object(i.a)(e,["timeout"]),o=Object(r.useState)(!1),c=o[0],d=o[1];return Object(r.useEffect)((function(){setTimeout((function(){return d(!0)}),n)}),[]),c?s.a.createElement(l.a,a):s.a.createElement("p",null,"Loading...")},d={title:"Overview",sidebar_label:"Overview"},b={unversionedId:"architecture/overview",id:"architecture/overview",isDocsHomePage:!1,title:"Overview",description:"This section describes the high-level architecture of the Compliance Platform. The platform was designed to be scalable and integrate with novel",source:"@site/docs/architecture/overview.mdx",slug:"/architecture/overview",permalink:"/architecture/overview",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/architecture/overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"The GSMA Mobile Money API Compliance Platform",permalink:"/"},next:{title:"Test Case Matching",permalink:"/architecture/matching"}},m=[{value:"Core Test Platform",id:"core-test-platform",children:[{value:"Frontend",id:"frontend",children:[]},{value:"Test Manager",id:"test-manager",children:[]},{value:"Proxy",id:"proxy",children:[]}]},{value:"Simulators",id:"simulators",children:[]},{value:"System Under Test",id:"system-under-test",children:[]}],h={rightToc:m};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section describes the high-level architecture of the Compliance Platform. The platform was designed to be scalable and integrate with novel\nsystems in future, and so it was designed around a flexible architecture\nconsisting of three sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core Test Platform"),Object(o.b)("li",{parentName:"ul"},"Simulators"),Object(o.b)("li",{parentName:"ul"},"Systems Under Test (SUTs)")),Object(o.b)("h2",{id:"core-test-platform"},"Core Test Platform"),Object(o.b)("p",null,"The core test platform presents a frontend interface to manage users, sessions\nand test cases. In addition, it presents a proxy layer which is capable of\nintercepting and validating every message between simulators and SUTs. The\nplatform uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://laravel.com/"}),"Laravel"),", a web application framework built\nwith PHP."),Object(o.b)("h3",{id:"frontend"},"Frontend"),Object(o.b)("p",null,"The frontend is responsible for rendering the user interface and uses two main\ntechnologies: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vuejs.org/"}),"Vue.js")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tabler.io/"}),"Tabler"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vue.js: Used to build a single page application, rendered through\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://inertiajs.com/"}),"Inertia.js"),"."),Object(o.b)("li",{parentName:"ul"},"Tabler: Provides the admin and dashboard layout to build the UI, using\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://getbootstrap.com/"}),"Bootstrap")," internally.")),Object(o.b)("h3",{id:"test-manager"},"Test Manager"),Object(o.b)("p",null,"The core of the test platform is the test manager. Test cases define the\nexecution flow of tests, as well as defining schema validation and business rule\nvalidations. Schema validation is performed automatically bsed on an OpenAPI\nSpecification (powered by\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/thephpleague/openapi-psr7-validator"}),"OpenAPI PSR-7 Message Validator"),"),\nwhile business rule validations are controlled by custom logic defined inside\nthe test case definition."),Object(o.b)("h3",{id:"proxy"},"Proxy"),Object(o.b)("p",null,"In order to provide an end-to-end test, the platform must be able to follow all\nmessages exchanged between entities. All messages within the system pass through\na proxy layer, allowing the platform to store and validate messages before\nforwarding them to the correct recipient. When the receiver sends an HTTP\nresponse, that too will be validated before forwarding back to the original\nsender."),Object(o.b)("p",null,"This diagram illustrates communication through the proxy layer."),Object(o.b)(c,{timeout:1e3,options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2];\n      edge [ fontname="var(--ifm-font-family)", penwidth=2];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      serviceprovider [ label="Service Provider"]\n      mmap [ label="Mobile Money Provider"]\n      Comp [ label="Compliance Platform"]\n      subgraph sim {\n        rank="same"\n        serviceprovider -> mmap -> serviceprovider [ style="dashed"]\n      }\n      Comp -> {serviceprovider mmap } [dir="both"]\n      subgraph cluster_key {\n        style=invis;\n        {\n          node [ width=0.5, height=0.3, label="", style="invis" ];\n          rank = same;\n          edge[ minlen = 2 ];\n          leg1 -> leg2[ label="Actual Message" ];\n          leg2 -> leg4[ style = dashed, label="Logical Message"];\n        }\n      }\n      mmap -> leg2 [style=invis] ;\n    }\n',mdxType:"DelayedGraphviz"}),Object(o.b)("h2",{id:"simulators"},"Simulators"),Object(o.b)("p",null,"Every component in the system may be either a simulated component, or a real\ncomponent known as a SUT. The behaviour of simulated components is entirely\ndefined within the test case file. Within the file, a series of test steps is\ndefined, with each step including a sample ",Object(o.b)("inlineCode",{parentName:"p"},"request")," and ",Object(o.b)("inlineCode",{parentName:"p"},"response"),". By playing\nback these requests and responses in sequence, a full system flow can be\nsimulated."),Object(o.b)("h2",{id:"system-under-test"},"System Under Test"),Object(o.b)("p",null,'Any of the simulated requests and responses can be replaced by a real message\ngenerated by a live system. This live system is known as a "System Under Test"\n(SUT). When creating a test session, any component can be selected to be a SUT\nfor the duration of this session. Once it is selected, it replaces the simulator\nrepresenting that component for the duration of the test, and becomes\nresponsible for generating all requests and responses from that component.'))}p.isMDXComponent=!0}}]);