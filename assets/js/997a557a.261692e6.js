(self.webpackChunkdataera_final=self.webpackChunkdataera_final||[]).push([[5646],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(9756),o=n(7294),a=n(3727),i=n(2263),c=n(3919),s=n(412),l=(0,o.createContext)({collectLink:function(){}}),u=n(4996),d=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,v=e.href,h=e.activeClassName,k=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,b=(0,r.Z)(e,p),N=(0,i.Z)().siteConfig.trailingSlash,C=(0,u.C)().withBaseUrl,j=(0,o.useContext)(l),O=f||v,D=(0,c.Z)(O),L=null==O?void 0:O.replace("pathname://",""),S=void 0!==L?(n=L,y&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;S&&D&&(S=(0,d.applyTrailingSlash)(S,N));var T,M=(0,o.useRef)(!1),_=m?a.OL:a.rU,x=s.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!x&&D&&null!=S&&window.docusaurus.prefetch(S),function(){x&&T&&T.disconnect()}}),[S,x,D]);var B=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,R=!S||!D||B;return S&&D&&!B&&!g&&j.collectLink(S),R?o.createElement("a",Object.assign({href:S},O&&!D&&{target:"_blank",rel:"noopener noreferrer"},b)):o.createElement(_,Object.assign({},b,{onMouseEnter:function(){M.current||null==S||(window.docusaurus.preload(S),M.current=!0)},innerRef:function(e){var t,n;x&&e&&D&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))}))).observe(t))},to:S||""},m&&{isActive:k,activeClassName:h}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],o="/"===r?"/":(n=r,t?function(e){return e.endsWith("/")?e:e+"/"}(n):function(e){return e.endsWith("/")?e.slice(0,-1):e}(n));return e.replace(r,o)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},919:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(6742),c=["components"],s={title:"Learn ReactJS component",sidebar_position:4,sidebar_label:"Learn ReactJS component"},l="Learn ReactJS component",u={unversionedId:"Docusaurus/Reactjs",id:"Docusaurus/Reactjs",isDocsHomePage:!1,title:"Learn ReactJS component",description:"Let add a small component",source:"@site/docs/Docusaurus/Reactjs.md",sourceDirName:"Docusaurus",slug:"/Docusaurus/Reactjs",permalink:"/DataEraITAssociation/docs/Docusaurus/Reactjs",editUrl:"https://github.com/DataEraITAssociation/DataEraITAssociation/tree/main/docs/Docusaurus/Reactjs.md",version:"current",sidebarPosition:4,frontMatter:{title:"Learn ReactJS component",sidebar_position:4,sidebar_label:"Learn ReactJS component"},sidebar:"tutorialSidebar",previous:{title:"Magic Tricks",permalink:"/DataEraITAssociation/docs/Docusaurus/MagicTricks"},next:{title:"Use GITHUB",permalink:"/DataEraITAssociation/docs/Docusaurus/GITHUB"}},d=[{value:"Let add a small component",id:"let-add-a-small-component",children:[]},{value:"Move the component outside my markdown file",id:"move-the-component-outside-my-markdown-file",children:[]}],p={toc:d};function m(e){var t=e.components,s=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"learn-reactjs-component"},"Learn ReactJS component"),(0,a.kt)("h2",{id:"let-add-a-small-component"},"Let add a small component"),(0,a.kt)("p",null,"At the last part of ",(0,a.kt)(i.Z,{to:"/docs/Docusaurus/Markdown#add-some-html",mdxType:"Link"},"Add some HTML"),", I mentioned about JSX . That's part of ReactJS thing. Now let's create a color style component."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"JSX stands for JavaScript XML~~~"),(0,a.kt)("p",{parentName:"div"},"You should find more detail in official document ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"Markdown Features")))),(0,a.kt)("p",null,"Now add this JSX code in order to change the color of your text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'\n<span style={{backgroundColor: "green"}}>Docusaurus green</span>\n\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"JSX is slightly different from HTML. It uses ",(0,a.kt)("inlineCode",{parentName:"li"},"className")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"class")," . "),(0,a.kt)("li",{parentName:"ul"},"In HTML, we usually wraps property value with ",(0,a.kt)("inlineCode",{parentName:"li"},'"')," like ",(0,a.kt)("inlineCode",{parentName:"li"},'<span style="background-color: green">Docusaurus green</span>'),". But in JSX, it uses Javascript object to wrap the property value as above."),(0,a.kt)("li",{parentName:"ul"},"Learn more about JSX at ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/react/react_jsx.asp"},"W3School")),(0,a.kt)("li",{parentName:"ul"},"Learn style at ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/dom-elements.html#style"},"reactjs.org"))))),(0,a.kt)("p",null,"Let's do more codes. You can change the code to a function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'\nexport function BGColor ({children, color}) {\n    return (\n        <span\n            style={{\n            backgroundColor: color\n            }}>\n            {children}\n        </span>\n    );\n};\n\n<BGColor color="#25c2a0">Docusaurus green</BGColor>\n<BGColor color="red">I\'m red color.</BGColor>\n\n')),(0,a.kt)("p",null,"Cool! now we have a component. You may change its color in your markdown file by using your component."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add component",src:n(8741).Z})),(0,a.kt)("p",null,"Look! there is a special property called ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," whose value is from the element between your new tag."),(0,a.kt)("p",null,"Meanwhile, your custom property ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," is given from ",(0,a.kt)("inlineCode",{parentName:"p"},'<BGColor color="red">')," ."),(0,a.kt)("h2",{id:"move-the-component-outside-my-markdown-file"},"Move the component outside my markdown file"),(0,a.kt)("p",null,"If you put the component code in the same markdown file, it will eventually look a mess. Let us move these code into a new file."),(0,a.kt)("p",null,"Follow the steps and see how it works."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"BGColor.js")," which is a javascript file."),(0,a.kt)("li",{parentName:"ul"},"Add the first line ",(0,a.kt)("inlineCode",{parentName:"li"},"import React from 'react';")," into your new file."),(0,a.kt)("li",{parentName:"ul"},"Cut and paste the ",(0,a.kt)("inlineCode",{parentName:"li"},"function")," from your markdown file here. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create component file",src:n(9075).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now go back to your markdown file and add a reference to your new component as below")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nimport { BGColor } from './BGColor';\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add component reference",src:n(1109).Z})),(0,a.kt)("p",null,"Now you should have more fun to code with ReactJS."))}m.isMDXComponent=!0},1109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Add_file_reference-b30f74a872e646535720f694a31874fc.png"},8741:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add_component-b3cc5624dc7fec9fd26282140cf08346.png"},9075:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create_component_file-381dc39a7e358f24f2d1d1fbdefa7934.png"}}]);