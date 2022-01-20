(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/comphome-ea2fd4f64ae81e16702092b766a70efa.png"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/compsessioninfo-6ff7d348ee477181b5fff1c64d9cdf43.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/compselectsut-87ca032e2366621fce05ec734cf0ea2f.png"},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/compsessionconfigure-f376b258afb9d5a1184c1a462d746c9f.png"},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/compsessionscreen-3bc1c60f572ef7dbaaf00398888f7503.png"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(2),o=n(6),i=(n(0),n(75)),r={title:"Test Sessions",sidebar_label:"Test Sessions"},a={unversionedId:"manual/session",id:"manual/session",isDocsHomePage:!1,title:"Test Sessions",description:"The execution of tests on the Mobile Money API Compliance Platform is performed",source:"@site/docs/manual/session.md",slug:"/manual/session",permalink:"/manual/session",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/manual/session.md",version:"current",sidebar_label:"Test Sessions",sidebar:"someSidebar",previous:{title:"Quick Guide for Tests",permalink:"/manual/quickguide"},next:{title:"Test Results",permalink:"/manual/results"}},c=[{value:"Creating a Test Session",id:"creating-a-test-session",children:[{value:"Step 1: Session Setup",id:"step-1-session-setup",children:[]},{value:"Step 2: SUT Selection",id:"step-2-sut-selection",children:[]},{value:"Step 3: Configure components",id:"step-3-configure-components",children:[]}]},{value:"Running Tests",id:"running-tests",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'The execution of tests on the Mobile Money API Compliance Platform is performed\nthrough the creation of sessions. Sessions are defined by a selection of test\ncases. During the creation of a session, the user selects the test cases to be\nincluded, selects any SUTs and configures their address and encryption details.\nAfter creation, it is possible to run tests by clicking the "Run Test Case"\nbutton. The newly-created session is available on the home screen of the platform (as\nshown in the picture below), allowing the user to consult previously run tests,\ndelete and run new tests.'),Object(i.b)("p",null,"Home screen with the user sessions: ",Object(i.b)("img",{alt:"Comp Home",src:n(165).default})),Object(i.b)("h2",{id:"creating-a-test-session"},"Creating a Test Session"),Object(i.b)("p",null,"To create a session you must perform three main steps: Session Setup, SUT\nSelection and SUT Configuration."),Object(i.b)("h3",{id:"step-1-session-setup"},"Step 1: Session Setup"),Object(i.b)("p",null,"In this step, you can add information about the session you are creating:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Name:")," Alias used to name the session. This name will be visible in the\ndashboard."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description:")," Information about the session, to help explain the purpose of\nthe session."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Test Cases:")," All use case and test cases which are relevant for the\ncurrently-selected SUT type are displayed here. You can select any set of test\ncases to run during this session."),Object(i.b)("p",null,"Step 1 - Session Setup form: ",Object(i.b)("img",{alt:"Compliance Session Info",src:n(166).default})),Object(i.b)("h3",{id:"step-2-sut-selection"},"Step 2: SUT Selection"),Object(i.b)("p",null,"In this step, you may select any number of SUTs to take part in the test. If you\nselect no components, the test will be fully simulated by the platform, and you\nwill be able to view an end-to-end execution of the test case without any\nexternal systems. On the other hand, if you select all components as SUTs, the\nplatform will simply act as a proxy layer between the components, with no\nbehaviour simulated at all."),Object(i.b)("p",null,'For each SUT selected, you will need to enter a URL which the test platform will\nuse to send requests. If you wish to use an mTLS encrypted connection to your\nsystem, you should select "Use Encryption" and provide appropriate certificates.\nFor more details on the certificate upload process, please see Secure Connections.'),Object(i.b)("p",null,"Step 2 - Selecting the system under test:\n",Object(i.b)("img",{alt:"Compliance Session SUT Selection",src:n(167).default})),Object(i.b)("h3",{id:"step-3-configure-components"},"Step 3: Configure components"),Object(i.b)("p",null,"During the execution of the tests, your SUT will need to communicate with other\ncomponents (such as the Service Provider simulator). In step 3 of the session creation wizard,\nyou will be presented with the URLs that your SUT should use for this\ncommunication. These URLs can also be retrieved after the session has been\ncreated from the session results page."),Object(i.b)("p",null,"Step 3 - Component URLs:\n",Object(i.b)("img",{alt:"Comp Session Configure Components",src:n(168).default})),Object(i.b)("p",null,"In the screenshot above, Mobile Money API Provider is a SUT, and it should use the URL provided to\nsend any requests intended for the Service Provider."),Object(i.b)("p",null,"As described in Connections, the URLs provided at\nthis stage are dynamic, and include the session UUID. If your user is a member\nof a group, you can select the session as the default session for your group\ninstead, which will provide a static group URL at this stage instead."),Object(i.b)("p",null,"Finally, this page is also where environment variables are configured for the\nsession. These environment variables will affect the behaviour of the test\ncases, so it is important to match the variable names that are used in the test\ncase. The environment variable ",Object(i.b)("em",{parentName:"p"},"names")," which are used in the selected test cases\nwill be set up automatically. These should be further documented in the test\ncase preconditions, and it is possible to adjust the session environment\nvariables at any time. If you are a member of a ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"./groups"}),"user group"),', you can\nalso "merge" the currently configured environment with a group environment which\nis preconfigured within your group.'),Object(i.b)("p",null,"After the session has been created, you will be able to see the test cases\nselected during creation. From there, it is possible to select a specific test\ncase and proceed with the test execution."),Object(i.b)("p",null,"Example of session main screen after its creation:\n",Object(i.b)("img",{alt:"Session Screen",src:n(169).default})),Object(i.b)("h2",{id:"running-tests"},"Running Tests"),Object(i.b)("p",null,'Once your test session has been created, you can trigger the execution of a test\nby clicking the "Run Test Case" button. If the flow begins with a request from a\nsimulator, the first steps will automatically be executed. If the flow begins\nwith a request from a SUT, the platform will listen for the incoming request\nfrom the component.'),Object(i.b)("p",null,'In the case that the flow begins with a SUT, it is also possible to trigger\nexecution of a test case implicitly by sending the first test request without\nfirst clicking on the "Run Test Case" button. If you do this, it is important to\nensure that all selected test cases in the session are unambiguous in terms of\npath and trigger, otherwise the request may be associated with a different test\ncase than the one you were expecting.'))}u.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var s=n(0),o=n.n(s);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=s,f=p["".concat(r,".").concat(h)]||p[h]||b[h]||i;return n?o.a.createElement(f,a(a({ref:t},l),{},{components:n})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);