(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(82)),c={title:"Development Tools"},i={unversionedId:"contributors-guide/tools",id:"contributors-guide/tools",isDocsHomePage:!1,title:"Development Tools",description:"CLI Tools",source:"@site/docs/contributors-guide/tools.md",slug:"/contributors-guide/tools",permalink:"/contributors-guide/tools",editUrl:"https://github.com/gsmainclusivetechlab/compliance-docs/blob/develop/docs/contributors-guide/tools.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/contributors-guide/contributing"},next:{title:"Writing New Code",permalink:"/contributors-guide/new-code"}},l=[{value:"CLI Tools",id:"cli-tools",children:[{value:"<code>docker</code>",id:"docker",children:[]},{value:"<a name='docker-compose'></a>3. <code>docker-compose</code>",id:"3-docker-compose",children:[]},{value:"<code>git</code>",id:"git",children:[]},{value:"<code>npm</code>",id:"npm",children:[]}]},{value:"Non-CLI Tools",id:"non-cli-tools",children:[{value:"Github",id:"github",children:[]},{value:"Postman",id:"postman",children:[]},{value:"IDE",id:"ide",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cli-tools"},"CLI Tools"),Object(r.b)("p",null,"Throughout this guide, we assume the presence on your development machine of the\nfollowing tools:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#docker"}),Object(r.b)("inlineCode",{parentName:"a"},"docker"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#docker-compose"}),Object(r.b)("inlineCode",{parentName:"a"},"docker-compose"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#git"}),Object(r.b)("inlineCode",{parentName:"a"},"git"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#npm"}),Object(r.b)("inlineCode",{parentName:"a"},"npm"))," (optionally, yarn)")),Object(r.b)("h3",{id:"docker"},Object(r.b)("inlineCode",{parentName:"h3"},"docker")),Object(r.b)("p",null,"The interoperability test platform is built using\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker"),", which means that each component can run on\nany environment which supports Docker. Installation guides are available for\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/ubuntu/"}),"Ubuntu"),",\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"macOS")," and\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"Windows"),"."),Object(r.b)("p",null,"You can check that Docker has been correctly installed by running the following\ncommands on your machine:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ docker --version\n#  Docker version 19.03.11, build 42e35e61f3\n")),Object(r.b)("h3",{id:"3-docker-compose"},Object(r.b)("a",{name:"docker-compose"}),"3. ",Object(r.b)("inlineCode",{parentName:"h3"},"docker-compose")),Object(r.b)("p",null,"Each ITP component is developed using microservices which are coordinated using\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker-compose")),". On Windows and macOS,\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," should be installed automatically with Docker. On a Linux host,\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," must be installed separately using\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"this guide"),"."),Object(r.b)("p",null,"You can check that ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," has been correctly installed by running the\nfollowing commands on your machine:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose --version\n#  docker-compose version 1.26.0, build d4451659\n")),Object(r.b)("h3",{id:"git"},Object(r.b)("inlineCode",{parentName:"h3"},"git")),Object(r.b)("p",null,"We recommend the use of ",Object(r.b)("inlineCode",{parentName:"p"},"git")," to download source code and fetch updates.\nInstallation guides for ",Object(r.b)("inlineCode",{parentName:"p"},"git")," for all platforms can be found\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"here"),"."),Object(r.b)("h3",{id:"npm"},Object(r.b)("inlineCode",{parentName:"h3"},"npm")),Object(r.b)("h4",{id:"macos"},"macOS"),Object(r.b)("p",null,"Use homebrew to install ",Object(r.b)("inlineCode",{parentName:"p"},"node")," and ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," together."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"brew install node\n")),Object(r.b)("h4",{id:"linux"},"Linux"),Object(r.b)("p",null,"Follow the installation guide\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/download/package-manager/"}),"here")),Object(r.b)("h4",{id:"windows"},"Windows"),Object(r.b)("p",null,"Follow the installation guide\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/download/package-manager/#windows"}),"here")),Object(r.b)("h2",{id:"non-cli-tools"},"Non-CLI Tools"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#github"}),"Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#postman"}),"Postman")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#ide"}),"IDE")," (optional)")),Object(r.b)("h3",{id:"github"},"Github"),Object(r.b)("p",null,"All of the ITP repositories are available on Github. While you don't need a\nGitHub account to download and play around with the code, you must have your own\nGitHub account set up in order to contribute."),Object(r.b)("h3",{id:"postman"},"Postman"),Object(r.b)("p",null,"Postman is a tool for exploring and testing APIs. You can download it from\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"here"),"."),Object(r.b)("p",null,"Alternatively on recent versions of Linux, you may run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install postman\n")),Object(r.b)("h3",{id:"ide"},"IDE"),Object(r.b)("p",null,"When writing code, you may wish to use an IDE instead of a simple text editor.\nThere are plenty available out there, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://atom.io/"}),"Atom")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.jetbrains.com/webstorm/"}),"Webstorm")," (free 30 day trial)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.jetbrains.com/phpstorm/"}),"PhpStorm")," (free 30 day trial)")))}p.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||r;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var b=2;b<r;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);