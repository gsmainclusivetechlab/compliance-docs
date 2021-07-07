(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-group-4ce6f22a5493de266d1e94bde5506984.png"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(82)),o={title:"User Groups",sidebar_label:"User Groups"},s={unversionedId:"manual/groups",id:"manual/groups",isDocsHomePage:!1,title:"User Groups",description:"User groups are a useful feature to share test sessions within a team.",source:"@site/docs/manual/groups.md",slug:"/manual/groups",permalink:"/manual/groups",editUrl:"https://github.com/gsmainclusivetechlab/compliance-docs/blob/develop/docs/manual/groups.md",version:"current",sidebar_label:"User Groups",sidebar:"someSidebar",previous:{title:"Secure Connections",permalink:"/manual/security"},next:{title:"Introduction",permalink:"/contributors-guide/contributing"}},c=[{value:"Creating a User Group",id:"creating-a-user-group",children:[]},{value:"Inviting Users",id:"inviting-users",children:[]},{value:"Group Environments",id:"group-environments",children:[]},{value:"Group Certificates",id:"group-certificates",children:[]}],l={rightToc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"User groups are a useful feature to share test sessions within a team.\nAdditionally, configuration options for new sessions can be attached to the user\ngroup to allow simpler session creation."),Object(i.b)("h2",{id:"creating-a-user-group"},"Creating a User Group"),Object(i.b)("p",null,'Platform administrators can create a new user group by clicking on the cog in\nthe top right corner of the page, and then selecting "Groups". From this page, a\n"New Group" button is displayed.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"New Group Form",src:n(165).default})),Object(i.b)("p",null,"Each new group requires a name, and must also define one or more email filters.\nThese email filters are used to ensure users cannot accidentally be invited to\njoin a group to which they should not have access. To allow access to all users\nof a particular email domain, you can add a filter that looks like\n",Object(i.b)("inlineCode",{parentName:"p"},"@my-domain.com"),". This will allow ",Object(i.b)("inlineCode",{parentName:"p"},"john@my-domain.com")," and ",Object(i.b)("inlineCode",{parentName:"p"},"jane@my-domain.com"),"\nto both be invited to the group. Alternatively, if you would like to restrict\naccess to the group to a specific set of email addresses, you can enter the\nentire email addresses as a filter directly."),Object(i.b)("h2",{id:"inviting-users"},"Inviting Users"),Object(i.b)("p",null,'All new groups are empty to start with. To invite a new user, click on the\n"Invitations" tab on a group page, and then click on "Invite Member". You will\nbe able to enter the email address of the user you wish to invite. Note that\nthis email address must match the filter that was defined when the group was\ncreated.'),Object(i.b)("p",null,"An invitation email will be sent to the email address, which will contain a\nregistration link. After completing the registration form, the user will be able\nto log in, and will automatically be a member of the group."),Object(i.b)("p",null,"The first user to join a group is automatically marked as a group admin. Group\nadmins can invite and promote other users to the role of group admin. In this\nway, the platform administrator can invite a single group admin, and allow them\nto invite any other team members as required."),Object(i.b)("p",null,'In some cases, someone may already have a user account as part of a different\ngroup. For example, a GSMA developer may wish to be invited to multiple user\ngroups for member organisations, in order to assist with their tests. In this\ncase, it will not be possible to create a new invitation in the normal way.\nInstead, a group admin can click the "Add Member" button on the "Members" tab of\nthe group page, and select the user directly. Note that the user\'s email address\nwill still need to match the group\'s domain filters as if they were being\ninvited directly.'),Object(i.b)("p",null,'Changing a group\'s email filters can only be done by a platform administrator.\nTo do this, click on the cog in the top right corner of the page, and then\nselect "Groups". By clicking the three dots to the right of a group\'s name, the\nadmin can select "Edit" and adjust the email filter as desired.'),Object(i.b)("h2",{id:"group-environments"},"Group Environments"),Object(i.b)("p",null,'As an alternative to defining environment variables when a session is created,\nit is possible for group members to create group environments with preconfigured\nvariables. This can be done from the "Environments" tab of the group page. A\ngroup environment must be named so that it is recognisable when the session is\ncreated. Any variable names can be used in a group environment, and their values\nwill be merged with those that have already been provided by the user when a\nsession is created.'),Object(i.b)("p",null,"In addition to being more convenient to define environment variables centrally,\ngroup environments can increase security by reducing the number of people who\nneed to have access to sensitive data. For example, JWS private keys can be\nuploaded to a group environment without giving access to the keys themselves to\ngroup users."),Object(i.b)("h2",{id:"group-certificates"},"Group Certificates"),Object(i.b)("p",null,'Just as environment variables can be preconfigured to avoid re-entry when a\nsession is created, so can encrypted connection details. this is done from the\n"Certificates" tab of the group page. A name must be provided for the\ncertificate collection, so that it can be chosen when a session is created.\nAfter this, a CA certificate can be provided (for ITP to validate the\nauthenticity of a server SUT), along with a signed client certificate (for ITP\nto use to prove its own identity to a server SUT). In order to help generate\nthis signed client certificate, a button is also available on this page to\ndownload a Certificate Signing Request (CSR) from ITP.'),Object(i.b)("p",null,"For more details about encryption certifictes, see\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./security"}),"Secure Connections"),"."))}u.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);