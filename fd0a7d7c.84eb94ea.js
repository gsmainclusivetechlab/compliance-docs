(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(6),c=(a(0),a(75)),b={title:"Mobile Money API Compliance Test Cases",sidebar_label:"List of Test Cases"},i={unversionedId:"testcases/tclist",id:"testcases/tclist",isDocsHomePage:!1,title:"Mobile Money API Compliance Test Cases",description:"Where a Compliance Use Case represents the different goals that",source:"@site/docs/testcases/tclist.md",slug:"/testcases/tclist",permalink:"/testcases/tclist",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/testcases/tclist.md",version:"current",sidebar_label:"List of Test Cases",sidebar:"someSidebar",previous:{title:"List of Mobile Money API Use Cases",permalink:"/testcases/uclist"},next:{title:"Quick Guide for Tests",permalink:"/manual/quickguide"}},l=[{value:'List of Test Cases <a name="tc"></a>',id:"list-of-test-cases",children:[{value:'Payee-Initiated Merchant Payment <a name="pimp"></a>',id:"payee-initiated-merchant-payment",children:[]},{value:'Customer-Initiated Merchant Payment <a name="cimp"></a>',id:"customer-initiated-merchant-payment",children:[]},{value:'Disbursements <a name="disbmt"></a>',id:"disbursements",children:[]},{value:'Account Information <a name="accinf"></a>',id:"account-information",children:[]},{value:'Transactions <a name="txn"></a>',id:"transactions",children:[]},{value:'Refunds &amp; Reversals <a name="r&r"></a>',id:"refunds--reversals",children:[]},{value:'General <a name="gen"></a>',id:"general",children:[]}]}],O={rightToc:l};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Where a Compliance ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/testcases/intro"}),"Use Case")," represents the different goals that\nactors within the system might have, a ",Object(c.b)("em",{parentName:"p"},"test case"),' represents a specific path\ntaken to achieve a goal. Test cases are separated into "',Object(c.b)("em",{parentName:"p"},"happy"),'" and "',Object(c.b)("em",{parentName:"p"},"unhappy"),'"\nso that they cover all the possibilities for a use case. Tests typically include\nseveral alternative paths that evaluate the exceptions and errors in the use\ncase. It is also possible that there are several happy paths, addressing\ndifferent business rules that result in different expected outcomes.'),Object(c.b)("p",null,"All test cases currently available on the Mobile Money API Compliance Platform are\nlisted below. As new test cases are created, the documentation, and therefore\nthe list, will be updated. The list of test cases is split according to use\ncases and contains the following attributes:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Code:")," Code that identifies the test case in relation to the\nothers. The code consists of two parts: an acronym that is directly related to\nthe use case, and a code that differentiates tests for the test group to which\nit belongs."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Scenario:")," This field is made up of properties that define the\nscenario in which the test case is being executed. These are the specific\nparameters that define a scenario, such as: fees and commissions involved, use\nof an account lookup system, currencies supported by the provider, etc."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Status:"),' Expected results after running the test case. The result indicates\nwhether the evaluated path is a "happy" flow or "unhappy" flow.'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Results:")," The results field indicates the expected behaviour for test cases\nunder validation. Particularly when dealing with rejected transactions, the\nvalue of this attribute gives a better understanding of the reason for not\ncarrying out the transaction."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Error Number:")," Indicates the number of the current error for the test case.\nThis will generally be a 3-digit (for HTTP errors) or 4-digit (for MMAPI\nerrors) error code, which can be understood with reference to the documentation\nfor the APIs under test. A reference to the business rules error codes can be found ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://compliance.mobilemoneyapi.io/tutorials#mobile-money-api-businessrules"}),"here")),Object(c.b)("h2",{id:"list-of-test-cases"},"List of Test Cases ",Object(c.b)("a",{name:"tc"})),Object(c.b)("h3",{id:"payee-initiated-merchant-payment"},"Payee-Initiated Merchant Payment ",Object(c.b)("a",{name:"pimp"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, debitParty sent)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, debitParty and creditParty sent)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP300"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, auth code, debitParty sent)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP400"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (polling)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, debitParty and creditParty sent, error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP4002"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, auth code, debitParty sent, business error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP4003"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (callback, auth code, debitParty sent, format error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"PIMP4004"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-initiated merchant payment (polling, error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")))),Object(c.b)("h3",{id:"customer-initiated-merchant-payment"},"Customer-Initiated Merchant Payment ",Object(c.b)("a",{name:"cimp"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (callback, creditParty sent) Transaction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (callback, debitParty and creditParty sent)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP300"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (auth code)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP400"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (polling, debitParty and creditParty sent)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (callback, debitParty and creditParty sent, error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP4002"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (auth code, error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CIMP4003"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customer-initiated merchant payment (polling, debitParty and creditParty sent, error)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")))),Object(c.b)("h3",{id:"disbursements"},"Disbursements ",Object(c.b)("a",{name:"disbmt"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make Individual Disbursement with Callback \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make Individual Disbursement with Polling \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT300"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make 1-Step Bulk Disbursement with Callback \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT400"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make 2-Step Bulk Disbursement with Callback \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT500"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursements by Service Provider"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT600"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursements Completed by Service Provider"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT700"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursement Rejected - Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make Individual Disbursement with Callback \u2013 Failure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4002"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make Individual Disbursement with Polling \u2013 Failure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4003"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make 1-Step Bulk Disbursement with Callback \u2013 Failure - Returned Async"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4004"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make 1-Step Bulk Disbursement with Callback \u2013 Failure - Returned Sync"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4005"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make 2-Step Bulk Disbursement with Callback \u2013 Failure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4006"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursement (failure)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4007"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursement Completed (failure)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"DISBMT4008"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Bulk Disbursement Rejected (failure)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")))),Object(c.b)("h3",{id:"account-information"},"Account Information ",Object(c.b)("a",{name:"accinf"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ACCINF100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Obtain a Merchant Account Balance \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ACCINF200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Payments for a Merchant \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ACCINF300"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Payments for a Merchant with offsets and limits \u2013 Success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ACCINF400"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Obtain a Merchant Account Balance \u2013 Failure to Identify the Target Resource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ACCINF4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Payments for a Merchant \u2013Failure - due to Format Error (invalid identifierType)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"400")))),Object(c.b)("h3",{id:"transactions"},"Transactions ",Object(c.b)("a",{name:"txn"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TXN100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Transaction by reference - success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TXN4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve Transaction by reference - failure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"400")))),Object(c.b)("h3",{id:"refunds--reversals"},"Refunds & Reversals ",Object(c.b)("a",{name:"r&r"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"R&R100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Request Merchant Payment Refund"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"R&R200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Request Merchant Payment Reversal"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"R&R4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Request Merchant Payment Refund (failure)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"R&R4002"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Request Merchant Payment Reversal (failure)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"204")))),Object(c.b)("h3",{id:"general"},"General ",Object(c.b)("a",{name:"gen"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"GEN100"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check for service availability"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"GEN200"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve a missing API response - success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"GEN4001"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieve a missing API response - failure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"401")))))}j.isMDXComponent=!0},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=j(a),m=n,s=p["".concat(b,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(s,i(i({ref:t},O),{},{components:a})):r.a.createElement(s,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var O=2;O<c;O++)b[O]=a[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);