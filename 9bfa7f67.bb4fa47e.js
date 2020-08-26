(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(6),a=(t(0),t(96)),c={id:"create-adalo-component",title:"Creating a Component"},i={unversionedId:"docs/basics/create-adalo-component",id:"docs/basics/create-adalo-component",isDocsHomePage:!1,title:"Creating a Component",description:"create-adalo-component is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo.",source:"@site/docs/docs/basics/create-adalo-component.md",permalink:"/docs/basics/create-adalo-component",lastUpdatedAt:1598476114,sidebar:"docs",previous:{title:"Enabling Developer Mode",permalink:"/docs/basics/enabling-dev-mode"},next:{title:"Library Configuration",permalink:"/docs/basics/library-config"}},l=[{value:"Creating a new library",id:"creating-a-new-library",children:[]}],p={rightToc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"create-adalo-component")," is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo."),Object(a.b)("p",null,"It sets up your base environment for building custom components for adalo by installing the required dependencies, adding scripts for development as well as giving you a basic starter ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.json")," and a basic component."),Object(a.b)("h2",{id:"creating-a-new-library"},"Creating a new library"),Object(a.b)("p",null,"You'll need to have ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node")," ",Object(a.b)("inlineCode",{parentName:"p"},">=10.2")," on your machine, and you need to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/basics/enabling-dev-mode"}),"enable developer mode")," on your Adalo account. Then to create a component, run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx create-adalo-component my-component\ncd my-component\n\n# login with your adalo credentials\nnpx adalo login\n\n# start the development server\nnpx adalo dev\n")),Object(a.b)("p",null,"...then go to Adalo and add a new component to one of your screens. In the ",Object(a.b)("strong",{parentName:"p"},"Add"),' menu you should see a new section called "Development" where you\'ll find your new component.'))}d.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);