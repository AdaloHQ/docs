(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(93)),c={id:"introduction",title:"Introduction"},i={unversionedId:"docs/basics/introduction",id:"docs/basics/introduction",isDocsHomePage:!1,title:"Introduction",description:"Adalo offers a large selection of components to use in apps, but there are still many more components that have not been built yet. Thus, we created the Component Marketplace_** to enable external developers to write their own components. Developers can publish Libraries* to the marketplace, which consist of **_Components*.",source:"@site/docs/docs/basics/introduction.md",permalink:"/docs/basics/introduction",lastUpdatedAt:1625582095,sidebar:"docs",next:{title:"Tutorial",permalink:"/docs/basics/tutorial"}},s=[{value:"How do I become an Adalo developer?",id:"how-do-i-become-an-adalo-developer",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Creating your first component",id:"creating-your-first-component",children:[]},{value:"Standards",id:"standards",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Adalo offers a large selection of components to use in apps, but there are still many more components that have not been built yet. Thus, we created the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Component Marketplace"))," to enable external developers to write their own components. Developers can publish ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Libraries"))," to the marketplace, which consist of ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Components")),"."),Object(a.b)("h4",{id:"what-is-a-library"},"What is a library?"),Object(a.b)("p",null,"A library is a collection of components that a developer can package together into an npm package."),Object(a.b)("h4",{id:"what-is-a-component"},"What is a component?"),Object(a.b)("p",null,"A component is an individual functional unit within Adalo. Text, buttons, and images are all different components."),Object(a.b)("h3",{id:"how-do-i-become-an-adalo-developer"},"How do I become an Adalo developer?"),Object(a.b)("p",null,"To become an Adalo developer, you must ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"enabling-dev-mode"}),"enable developer mode"),"."),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"In order to develop external components for Adalo, you must use macOS >= 10.10, or GNU/Linux kernel >= 2.6.32, and have ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node")," ",Object(a.b)("inlineCode",{parentName:"p"},">=10.2")," installed. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../workflow/testing"}),"testing")," for the prerequisites required to test on mobile."),Object(a.b)("p",null,"These docs assume you understand Javascript fundamentals and the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://flaviocopes.com/ecmascript/"}),"EMCAScript 2015")," standard, and have a working knowledge of both ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/"}),"React Native"),"."),Object(a.b)("h3",{id:"creating-your-first-component"},"Creating your first component"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create-adalo-component")," is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo. See more in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"create-adalo-component"}),"Creating A Component"),"."),Object(a.b)("h3",{id:"standards"},"Standards"),Object(a.b)("p",null,"In order to have your library accepted into the marketplace, you must make sure your component abides by our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/standards/philosophy"}),"standards"),". Most importantly, make sure that your component is:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single-purpose. Each component should be designed to solve one specific use case."),Object(a.b)("li",{parentName:"ul"},"Cross-platform. Each component should be compatible across web, iOS, and Android."),Object(a.b)("li",{parentName:"ul"},"Highly configurable. Each component should have a large variety of settings, both functionally and stylistically, to enable app creators to have maximum control over the component.")),Object(a.b)("p",null,'Pay close attention to the "cross-platform" standard. ',Object(a.b)("strong",{parentName:"p"},"We fully expect you to test your component on all three platforms before you submit it for review.")," You can use either React or React Native Web on web, but you must write React Native code for mobile. If the library you use for mobile is not React Native Web compatible, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/cross-platform"}),"Cross-Platform Compatibility"),". Also see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/testing"}),"Testing")," for information on testing your component on each platform."))}p.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);