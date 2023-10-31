"use strict";(self.webpackChunkcompliance_docs=self.webpackChunkcompliance_docs||[]).push([[490],{1084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var s=n(5893),i=n(1151);const a={title:"Test Case Matching",sidebar_label:"Test Case Matching"},r=void 0,c={id:"architecture/matching",title:"Test Case Matching",description:"A single testing session will contain tests for multiple use cases, each of",source:"@site/docs/architecture/matching.mdx",sourceDirName:"architecture",slug:"/architecture/matching",permalink:"/architecture/matching",draft:!1,unlisted:!1,editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/architecture/matching.mdx",tags:[],version:"current",frontMatter:{title:"Test Case Matching",sidebar_label:"Test Case Matching"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/architecture/overview"},next:{title:"Introduction",permalink:"/testcases/intro"}},o={},l=[{value:"Test Triggers",id:"test-triggers",level:2},{value:"Identical Requests",id:"identical-requests",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A single testing session will contain tests for multiple use cases, each of\nwhich may contain multiple test cases. This is useful for rapid testing under a\nvariety of conditions, but means the platform must automatically identify which\ntest case is being executed when a request arrives at the platform. For example,\na session may contain two flows which differ only in whether a quote is accepted\nor rejected by a remote DFSP. In this case, the test platform must identify\nwhich flow is being executed, in order validate the requests and instruct the\nremote DFSP simulator to accept or reject the quote."}),"\n",(0,s.jsx)(t.p,{children:"For every test case within the session, the first unmatched step is selected to\ncompare against the incoming request. For test cases which have not yet been\nstarted, the very first step of the test case is selected. First, the request's\nbasic characteristics are considered to determine which of the test steps may\nmatch. These characteristics are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The request ",(0,s.jsx)(t.strong,{children:"method"})," (",(0,s.jsx)(t.code,{children:"GET"}),", ",(0,s.jsx)(t.code,{children:"POST"}),", ",(0,s.jsx)(t.code,{children:"PUT"}),", etc)"]}),"\n",(0,s.jsxs)(t.li,{children:["The request ",(0,s.jsx)(t.strong,{children:"path"})," (",(0,s.jsx)(t.code,{children:"/transactions"}),", ",(0,s.jsx)(t.code,{children:"/batchtransactions/{batchId}"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["The request ",(0,s.jsx)(t.strong,{children:"source and destination components"})," (",(0,s.jsx)(t.code,{children:"Mobile Money API Provider"}),",\n",(0,s.jsx)(t.code,{children:"Service Provider"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is frequently the case that multiple test steps will still be possible\nmatches at this stage, since many test cases test fairly similar flows. In the\nexample given above for example, these characteristics would be identical for\nboth the accepted and rejected cases, since both follow the same basic flow of\nrequests. To disambiguate between them, a further check is required, known as\ntest ",(0,s.jsx)(t.em,{children:"triggers"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"test-triggers",children:"Test Triggers"}),"\n",(0,s.jsx)(t.p,{children:"A test trigger takes the form of a JSON object which must be present within the\nbody of a request for it to match against the test step. For example, a test\nstep might be defined with a trigger of:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{ "amount": 20.03 }\n'})}),"\n",(0,s.jsx)(t.p,{children:"If a request arrives at the platform with a body containing the following, the\ntest case would be considered a match:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "payerid": { "type": "MSISDN", "id": "123456789" },\n  "amount": 20.03,\n  "currency": "EUR"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"However, a request with this body would not be considered a match:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "payerid": { "type": "MSISDN", "id": "123456789" },\n  "amount": 20.04,\n  "currency": "EUR"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this way, multiple test cases can be defined unambiguously while sharing\nalmost identical flows. Returning to the example above, the accepted case may be\ndefined with a trigger of ",(0,s.jsx)(t.code,{children:'{"amount": 20.03}'})," while the rejected case is defined\nwith a trigger of ",(0,s.jsx)(t.code,{children:'{"amount": 20.04}'}),". The two test cases can then be executed\nin any order (or even simultaneously) with no conflict between them."]}),"\n",(0,s.jsx)(t.p,{children:'If a test case has a trigger, it will be defined in the "Precondition" section of the test case page. An example can be found below:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trigger_example",src:n(7780).Z+"",width:"273",height:"324"})}),"\n",(0,s.jsx)(t.h2,{id:"identical-requests",children:"Identical Requests"}),"\n",(0,s.jsx)(t.p,{children:"In the case that neither the request body nor the request path contain any data\nwhich may be used as a trigger, it is not currently possible to disambiguate any\nfurther. As a result, it is not possible to execute multiple test cases\nsimultaneously, since the platform will not be able to determine which test case\nis under execution."}),"\n",(0,s.jsxs)(t.p,{children:["To allow testing such similar scenarios, the compliance platform defines an option\n",(0,s.jsx)(t.code,{children:"FORCE_SEQUENTIAL_TESTS"}),' which is false by default. When the option is enabled,\ntest executions are expected to be sequential - so a single session should never\nhave two parallel test runs. By making this assumption, it becomes possible to\nunambiguously select one of several identical test cases by simply clicking the\n"Run Test Case" button for the desired test case. This will initiate the test\ncase execution, and any requests received by the platform will be automatically\nmatched to the current test case until the test run is complete.']})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7780:function(e,t,n){t.Z=n.p+"assets/images/triggerexample-39a6d51fe55599849a31ce5adaf85cdd.png"},1151:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);