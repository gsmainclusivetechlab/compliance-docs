(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{104:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},105:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71),c=n(72),l=n(21),i=n(89),s=n(2),u=n(6),p=n(73),m=n(84),d=n(86),y=n(87),f=n(88),h=n(85),b=n(74),g=n(76),v=n(54),k=n.n(v);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function O(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),y=c.items,f=c.label,h=j(c,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&c.collapsed)})),v=g[0],O=g[1];Object(a.useEffect)((function(){h&&!b&&v&&O(!1)}),[h,b,v]);var E=Object(a.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===y.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[k.a.menuLinkText]=!i,t)),onClick:i?E:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list"},y.map((function(e){return r.a.createElement(C,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function E(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(b.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function C(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(E,e)}}var N=function(e){var t,n,o=e.path,l=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,g=Object(a.useState)(!1),v=g[0],j=g[1],O=Object(c.a)(),E=O.siteConfig,N=(E=void 0===E?{}:E).themeConfig,x=(N=void 0===N?{}:N).navbar,w=(x=void 0===x?{}:x).title,P=void 0===w?"":w,T=x.hideOnScroll,_=void 0!==T&&T,S=O.isClient,L=Object(f.a)(),D=L.logoLink,I=L.logoLinkProps,B=L.logoImageUrl,M=L.logoAlt,A=Object(m.a)().isAnnouncementBarClosed,R=Object(h.a)().scrollY;Object(d.a)(v);var W=Object(y.a)();return Object(a.useEffect)((function(){W===y.b.desktop&&j(!1)}),[W]),r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=_,t))},_&&r.a.createElement(b.a,Object(s.a)({tabIndex:-1,className:k.a.sidebarLogo,to:D},I),null!=B&&r.a.createElement("img",{key:S,src:B,alt:M}),null!=P&&r.a.createElement("strong",null,P)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":v},n[k.a.menuWithAnnouncementBar]=!A&&0===R,n))},r.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!v)}},v?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},w={Prism:n(19).a,theme:x};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=/\r\n|\r|\n/,S=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},L=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},D=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=T({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=T({},n,{backgroundColor:null}),r};function I(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),P(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?D(e.theme,e.language):void 0;return t.themeDict=n})),P(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=T({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?T({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),P(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),P(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=T({},I(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?T({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(_),d=m.length;l.push({types:u,content:m[0]});for(var y=1;y<d;y++)S(l),i.push(l=[]),l.push({types:u,content:m[y]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return S(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),M=n(104),A=n.n(M),R=n(105),W=n.n(R),F={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=n(80),z=function(){var e=Object(c.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object($.a)().isDarkTheme,a=t.theme||F,r=t.darkTheme||a;return n?r:a},J=n(55),H=n.n(J),U=/{([\d,-]+)}/,X=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},Y=/title=".*"/,q=function(e){var t=e.children,n=e.className,o=e.metastring,l=Object(c.a)().siteConfig.themeConfig.prism,i=void 0===l?{}:l,u=Object(a.useState)(!1),m=u[0],d=u[1],y=Object(a.useState)(!1),f=y[0],h=y[1];Object(a.useEffect)((function(){h(!0)}),[]);var b=Object(a.useRef)(null),g=[],v="",k=z();if(o&&U.test(o)){var j=o.match(U)[1];g=W.a.parse(j).filter((function(e){return e>0}))}o&&Y.test(o)&&(v=o.match(Y)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);var E=t.replace(/\n$/,"");if(0===g.length&&void 0!==O){for(var C,N="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return X(["js","jsBlock"]);case"jsx":case"tsx":return X(["js","jsBlock","jsx"]);case"html":return X(["js","jsBlock","html"]);case"python":case"py":return X(["python"]);default:return X()}}(O),P=t.replace(/\n$/,"").split("\n"),T=0;T<P.length;){var _=T+1,S=P[T].match(x);if(null!==S){switch(S.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=_+",";break;case"highlight-start":C=_;break;case"highlight-end":N+=C+"-"+(_-1)+","}P.splice(T,1)}else T+=1}g=W.a.parse(N),E=P.join("\n")}var L=function(){A()(E),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(B,Object(s.a)({},w,{key:String(f),theme:k,code:E,language:O}),(function(e){var t,n,a=e.className,o=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,v&&r.a.createElement("div",{style:o,className:H.a.codeBlockTitle},v),r.a.createElement("div",{className:H.a.codeBlockContent},r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(H.a.copyButton,(t={},t[H.a.copyButtonWithTitle]=v,t)),onClick:L},m?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(p.a)(a,H.a.codeBlock,(n={},n[H.a.codeBlockWithTitle]=v,n))},r.a.createElement("div",{className:H.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},i({token:e,key:t})))})))}))))))}))},G=(n(56),n(57)),K=n.n(G),Q=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),l=Object(c.a)().siteConfig,i=(l=void 0===l?{}:l).themeConfig,s=(i=void 0===i?{}:i).navbar,m=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==m&&m;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[K.a.enhancedAnchor]=!d,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},V=n(58),Z=n.n(V),ee={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(q,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(b.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:Z.a.mdxCodeBlock},e))},h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6")},te=n(90),ne=n(77),ae=n(79),re=n(59),oe=n.n(re);function ce(e){var t=e.version,n=e.isLast?[t,"latest"]:[t];return r.a.createElement(ae.a,null,r.a.createElement("meta",{name:"docsearch:version",content:n.join(",")}))}function le(e){var t,n,a=e.currentDocRoute,l=e.versionMetadata,s=e.children,u=Object(c.a)(),p=u.siteConfig,m=u.isClient,d=l.permalinkToSidebar,y=l.docsSidebars,f=l.version,h=l.isLast,b=d[a.path],g=y[b];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{version:f,isLast:h}),r.a.createElement(i.a,{key:m},r.a.createElement("div",{className:oe.a.docPage},g&&r.a.createElement("div",{className:oe.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{key:b,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:oe.a.docMainContainer},r.a.createElement(o.a,{components:ee},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(ne.matchPath)(a.pathname,e)}));return o?r.a.createElement(le,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(te.default,e)}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);