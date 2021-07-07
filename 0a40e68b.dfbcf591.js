(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t){},107:function(e,t){},121:function(e,t){},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n(2),i=n(6),a=(n(0),n(82)),s=n(91),r={slug:"/",title:"The Interoperability Test Platform",sidebar_label:"About"},l={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"The Interoperability Test Platform",description:"The GSMA Inclusive Tech Lab continues to support the mobile money industry to",source:"@site/docs/home.mdx",slug:"/",permalink:"/",editUrl:"https://github.com/gsmainclusivetechlab/compliance-docs/blob/develop/docs/home.mdx",version:"current",sidebar_label:"About",sidebar:"someSidebar",next:{title:"How to Use this Documentation",permalink:"/docsguide"}},c=[],u={rightToc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The GSMA Inclusive Tech Lab continues to support the mobile money industry to\ndevelop the mobile financial ecosystem and enable a broad range of digital\ntransactions. It makes mobile wallets central to the lives of the financially\nexcluded and underserved, providing them with better solutions to manage their\nfinancial resources and face economic shocks. Mobile money is poised to evolve\nfrom a platform of 500 million accounts to reach more than a billion emerging\nmarket consumers, bringing financial access to the previously underserved and\nexcluded."),Object(a.b)("p",null,"The GSMA Inclusive Tech Lab has published a set of harmonised Mobile Money\nApplication Programming Interfaces (APIs), and now is looking at how to expand\nthe Mobile Money market through interoperability. The GSMA is working with its\nmembers, and mobile money industry partners to support the interoperability\nmarket using the Mojaloop technology. Thus, the Inclusive Tech Lab has dedicated\nefforts to create a platform for interoperability testing."),Object(a.b)("p",null,'The test environment is composed of a portal, test controller and set of\nsimulators, each of which can be replaced with "real" operational software to be\ntested. The diagram below describes an example of this flow.'),Object(a.b)(s.a,{timeout:1e3,options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2];\n      edge [ fontname="var(--ifm-font-family)", penwidth=2];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      simulator1 [ label="Simulator 1"]\n      sut [ label="System \nUnder Test"]\n      simulator2 [ label="Simulator 2"]\n      simulatorN [ label="Simulator N"]\n      ITP [ label="Test Platform"]\n      subgraph sim {\n        rank="same"\n        simulator1 -> sut -> simulator2 -> simulatorN -> simulator2 -> sut -> simulator1[ style="dashed"]\n      }\n      ITP -> {simulator1 sut simulator2 simulatorN} [dir="both"]\n      subgraph cluster_key {\n        style=invis;\n        {\n          node [ width=0.5, height=0.3, label="", style="invis" ];\n          rank = same;\n          edge[ minlen = 2 ];\n          leg1 -> leg2[ label="Actual Message" ];\n          leg2 -> leg4[ style = dashed, label="Logical Message"];\n        }\n      }\n      sut -> leg2 [style=invis] ;\n      simulator2 -> leg2 [style=invis] ;\n    }\n',mdxType:"DelayedGraphviz"}),Object(a.b)("p",null,"The Interoperability Test Platform allows the user to choose one of the\ncomponents in the diagram above to assess its behaviour in different scenarios.\nThis allows the interoperability of the system to be tested through several test\ncases, evaluating the different paths that transactions can take. This project\nis still growing and our goal is to add more components and assessment\nscenarios. The Interoperability Test Platform is also released under the MIT\nlicense, which allows interested parties to use and modify the platform and its\nsource code."))}m.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(6),i=n(111),a=n(0),s=n.n(a),r=function(e){var t=e.timeout,n=void 0===t?1e3:t,r=Object(o.a)(e,["timeout"]),l=Object(a.useState)(!1),c=l[0],u=l[1];return Object(a.useEffect)((function(){setTimeout((function(){return u(!0)}),n)}),[]),c?s.a.createElement(i.a,r):s.a.createElement("p",null,"Loading...")}}}]);