(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/encrypted-server-d280545d247086b2eb15ff2172513e18.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/encrypted-client-4151041d538535257d77fecde5061ae8.png"},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/jws-environments-d7276a90a9d07624bdc283987017122b.png"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),r=(n(0),n(82)),o={title:"Secure Connections",sidebar_label:"Secure Connections"},s={unversionedId:"manual/security",id:"manual/security",isDocsHomePage:!1,title:"Secure Connections",description:"The Interoperability Test Platform provides several ways to ensure that your",source:"@site/docs/manual/security.md",slug:"/manual/security",permalink:"/manual/security",editUrl:"https://github.com/gsmainclusivetechlab/compliance-docs/blob/develop/docs/manual/security.md",version:"current",sidebar_label:"Secure Connections",sidebar:"someSidebar",previous:{title:"Test Results",permalink:"/manual/results"},next:{title:"User Groups",permalink:"/manual/groups"}},c=[{value:"Encrypted Connections with mTLS",id:"encrypted-connections-with-mtls",children:[{value:"Proxy \u2192 Server",id:"proxy-\u2192-server",children:[]},{value:"Client \u2192 Proxy",id:"client-\u2192-proxy",children:[]}]},{value:"JSON Web Signatures (JWS)",id:"json-web-signatures-jws",children:[]}],l={rightToc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Interoperability Test Platform provides several ways to ensure that your\ntest components are behaving in a secure way."),Object(r.b)("h2",{id:"encrypted-connections-with-mtls"},"Encrypted Connections with mTLS"),Object(r.b)("p",null,"Normally, two components of a system may communicate via mutual TLS (mTLS),\nwhere both the client and the server authenticate themselves using public key\ncryptography. Since the test platform is a proxy in between these two\ncomponents, we must now consider two connections instead of one:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The connection between a client and the proxy (acting on behalf of a server)"),Object(r.b)("li",{parentName:"ol"},"The connection between the proxy (acting as a client) and the server")),Object(r.b)("p",null,"In many cases where mTLS is used, these two connections may additionally operate\nin the reverse direction (i.e. the client may also act as a server, and vice\nversa)."),Object(r.b)("p",null,"Note that in the code samples below, ",Object(r.b)("inlineCode",{parentName:"p"},"openssl")," is used. Similar operations can\nbe performed with any appropriate tool."),Object(r.b)("h3",{id:"proxy-\u2192-server"},"Proxy \u2192 Server"),Object(r.b)("p",null,"In this leg, ITP is acting as an application client, and your SUT is the\napplication server. Although this is the second leg of the connection, it needs\nto be configured first, as part of the session creation wizard:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Encrypted Server Configuration",src:n(166).default})),Object(r.b)("p",null,"It is assumed that the application server is already configured with a server\nkey and server certificate, signed by a private certificate authority (CA). In\nthe code samples below, ",Object(r.b)("inlineCode",{parentName:"p"},"ca.crt")," refers the the public certificate of the\nprivate CA, and ",Object(r.b)("inlineCode",{parentName:"p"},"ca.key")," refers to its private key."),Object(r.b)("p",null,"Firstly, the CA certificate (",Object(r.b)("inlineCode",{parentName:"p"},"ca.crt"),") can be uploaded directly. This will be\nused by ITP to verify that your server is authenticating itself correctly with a\nvalid server certificate."),Object(r.b)("p",null,"To authenticate itself to your server, ITP also needs to present a client\ncertificate signed by your private CA. In order to do this, a certificate\nsigning request (CSR) can be generated as part of the session creation wizard.\nYou can download this CSR (",Object(r.b)("inlineCode",{parentName:"p"},"client.csr"),"), and generate a client certificate\n(",Object(r.b)("inlineCode",{parentName:"p"},"client.crt"),") using the CA credentials:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"openssl x509 -req -days 365 \\\n    -in client.csr -out client.crt \\\n    -CA ca.crt -CAkey ca.key -CAcreateserial\n")),Object(r.b)("p",null,"You can now upload the client certificate to the platform and proceed to the\nnext step of session creation."),Object(r.b)("p",null,"Instead of uploading these certificates every time a new session is created, it\nis also possible to upload the certificates to a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"./groups"}),"user group"),". By\ndoing this, a dropdown will appear allowing you to select preconfigured\ncertificates directly."),Object(r.b)("h4",{id:"debugging"},"Debugging"),Object(r.b)("p",null,'It is possible to bypass this leg of the encrypted connection by disabling the\n"use encryption" setting for the component. When you do this, the URLs which are\ndisplayed will change to use the\n',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../architecture/connections#insecure-urls"}),'"insecure"')," version of the URL.\nHowever ITP will continue to present a secure mTLS server, so it will be\npossible for the Client \u2192 Proxy leg to continue to use the original secure url.\nA test failure will be logged on the test results, to indicate that an insecure\nconnection was used when a secure one was expected."),Object(r.b)("h3",{id:"client-\u2192-proxy"},"Client \u2192 Proxy"),Object(r.b)("p",null,"In this direction, ITP is acting as an application server. ITP will present a\nserver certificate (signed by its own private certificate authority), and will\nrequire that the client presents a client certificate signed by the same private\ncertificate authority (CA). To establish an encrypted connection, therefore, you\nmust obtain a signed client certificate when you create a session."),Object(r.b)("p",null,"To do this, the client must first have a private key. If you do not already have\na private key, one can be generated with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"openssl genrsa -out client.key 2048\n")),Object(r.b)("p",null,"Once you have a private key, you will need to generate a CSR (",Object(r.b)("inlineCode",{parentName:"p"},"client.csr"),").\nThis contains the information required for ITP to generate a signed certificate:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"openssl req -new -key client.key -out client.csr\n")),Object(r.b)("p",null,'Within the test session, you can click the "Download Certificates" button to\nobtain this signed certificate. After uploading ',Object(r.b)("inlineCode",{parentName:"p"},"client.csr")," in the window that\nappears, you will be able to download a zip file containing two certificates."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Test Session URL Configuration",src:n(167).default})),Object(r.b)("p",null,"One certificate will be called ",Object(r.b)("inlineCode",{parentName:"p"},"client.crt"),", which is the certificate your\nclient should present when sending a request. The other certificate is called\n",Object(r.b)("inlineCode",{parentName:"p"},"RootCA.crt"),", and your client should use this certificate as a CA certificate to\nvalidate the authenticity of ITP's server certificate."),Object(r.b)("p",null,"These two certificates will remain constant across all sessions (as long as your\nclient key does not change), so you should not need to reconfigure these\ncertificates at any stage."),Object(r.b)("h4",{id:"debugging-1"},"Debugging"),Object(r.b)("p",null,'It is possible to bypass the encrypted connection for this step by using the\n"insecure" version of the ',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../architecture/connections#insecure-urls"}),"URL"),". When\nyou use the insecure version of the URL, no mTLS checking is performed and a\ndirect HTTP connection can be used. ITP will continue to use an mTLS connection\nwhen for the Proxy \u2192 Server leg, so the server will not need to be reconfigured.\nA test failure will be logged on the test results, to indicate that an insecure\nconnection was used when a secure one was expected."),Object(r.b)("h2",{id:"json-web-signatures-jws"},"JSON Web Signatures (JWS)"),Object(r.b)("p",null,"Test cases can be defined with configuration to support\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../testcases/creating-tc#jws-signatures"}),"JWS signatures"),". This configuration\nreads values from a session's\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"./session#step-3-configure-components"}),"environment"),". As a result, selecting a\ntest case with a JWS configuration will add entries to a session's file\nenvironments:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"JWS File Environments",src:n(168).default})),Object(r.b)("p",null,"Although the names of these variables may differ, there will generally always be\ntwo variables for each component which uses JWS signatures - a private key and a\npublic key. As with all environment variables, it is possible to provide these\nthrough a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"./groups"}),"user group")," environment instead of entering them separately\nfor each new test session."),Object(r.b)("p",null,"The public key should always be provided. ITP will use this to validate the JWS\nsignature of the request when it is made. If the signature is malformed, a test\nfailure will be logged."),Object(r.b)("p",null,"The private key only needs to be provided if the component is being simulated by\nITP. In this case, ITP needs to generate the signature itself, and it will use\nthe given private key to do so. It is important that the private key matches the\npublic key, otherwise the signature will be malformed when it is validated."),Object(r.b)("p",null,"If you need to generate a new public/private key pair, you can do so using\n",Object(r.b)("inlineCode",{parentName:"p"},"openssl")," or many other tools:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"openssl genrsa -out private.key 2048\nopenssl rsa -in private.key -out public.key -pubout -outform PEM\n")),Object(r.b)("p",null,"If you already have a pair of keys, and you wish to verify that they correspond\nto one another, you can also do this with ",Object(r.b)("inlineCode",{parentName:"p"},"openssl"),". The output of the following\ntwo commands will be identical if the keys are a matching pair."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"openssl rsa -in private.key -noout -modulus | openssl md5\nopenssl rsa -pubin -in public.key -noout -modulus | openssl md5\n")))}u.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);