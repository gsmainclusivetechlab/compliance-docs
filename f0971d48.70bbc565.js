(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),i=(a(0),a(82)),c={title:"ITP Use Cases",sidebar_label:"Introduction"},s={unversionedId:"testcases/intro",id:"testcases/intro",isDocsHomePage:!1,title:"ITP Use Cases",description:"What is a Use Case?",source:"@site/docs/testcases/intro.md",slug:"/testcases/intro",permalink:"/testcases/intro",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/testcases/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Installation Guide",permalink:"/installation"},next:{title:"List of ITP Use Cases",permalink:"/testcases/uclist"}},o=[{value:"What is a Use Case?",id:"what-is-a-use-case",children:[]},{value:"Transaction Elements",id:"transaction-elements",children:[]},{value:"Transaction Actions",id:"transaction-actions",children:[]}],b={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"what-is-a-use-case"},"What is a Use Case?"),Object(i.b)("p",null,'Within the interoperability test platform (ITP), "',Object(i.b)("em",{parentName:"p"},"Use Cases"),'" (UC) represent\nthe different goals that actors within the system may have. For example, a\npeer-to-peer (P2P) transfer of money would constitute a use case, as would\npayment to a merchant for some service. Use cases capture the business and user\nrequirements to demonstrate precisely what to expect from the system. A use case\nincludes all possible paths through a given user/system interaction - both the\nprimary and alternative flows.'),Object(i.b)("p",null,"The primary path (also called ",Object(i.b)("em",{parentName:"p"},"happy flow"),") is the main flow to be tested, where\nit is possible to satisfy all user needs. Alternative paths include several\nother situations that are related to the use case, even if they are not desired,\nor less frequent. These alternative flows often include errors, and are also\ncalled ",Object(i.b)("em",{parentName:"p"},"unhappy flows"),'. Each of these flows is represented by a "Test Case"\nwithin the platform.'),Object(i.b)("p",null,"This section of the documentation includes more information about use cases in\ngeneral, and about the use cases which the GSMA have made available to test\nwithin the Interoperability Test Platform. To see more about the different paths\navailable to test within each use case, please see the list of available\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./tclist"}),"test cases"),"."),Object(i.b)("h3",{id:"transaction-elements"},"Transaction Elements"),Object(i.b)("p",null,"The use cases represent the different kinds of Mobile Money transactions\navailable for testing in the platform. Each use case is composed of a set of\ntransaction elements which are used to define its main characteristics. These\nelements are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Transaction Scenarios:")," A Transaction Scenario represents one of the several\nways of using mobile money and is directly related to the objective that the use\ncase validates."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Initiating Party:")," The Initiating Party specifies the actor who initiated the\ntransaction."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Initiator Type:")," The start of the transaction can occur from different\nsources that are defined by Initiator Type. This source also limits the types of\ntransactions that can occur."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Transaction Scenarios"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiating Party"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiator Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transfer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Consumer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Deposit"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payee"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Business")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Withdrawal"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Service Provider"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Device")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payment"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Mobile Money Operator"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Agent")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Refund"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(i.b)("p",null,'These elements can be combined in different ways to define the use case under\nevaluation. For example, in a merchant-initiated merchant payment transaction we\nthe Transaction Scenario would be "',Object(i.b)("em",{parentName:"p"},"payment"),'", the Initiating Party would be\n"',Object(i.b)("em",{parentName:"p"},"payee"),'" and the Initiator Type would be "',Object(i.b)("em",{parentName:"p"},"business"),'. If the transaction was\ninitiated by a POS, the type would change to "',Object(i.b)("em",{parentName:"p"},"device"),'".'),Object(i.b)("h3",{id:"transaction-actions"},"Transaction Actions"),Object(i.b)("p",null,"In addition to the set of ",Object(i.b)("strong",{parentName:"p"},"transaction elements")," mentioned earlier, each\ntransaction consists of one or more ",Object(i.b)("strong",{parentName:"p"},"actions")," defined by the services\navailable in the APIs."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Action"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Participant"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Retrieve information related to the FSP representing the participant")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Party"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Retrieve financial information about a party in a transaction")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quote"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculate all values that can influence a transaction, such as fees and commissions")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transfer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Performs the transfer of funds from Payer to Payee")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Authorization"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Obtain the necessary credentials to carry out a transaction on devices such as POS, ATM, etc")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Request"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Request the transfer of funds by Payer who can approve or reject the request")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Information"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Obtain information regarding a financial transaction")))))}l.isMDXComponent=!0},82:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,s(s({ref:t},b),{},{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);