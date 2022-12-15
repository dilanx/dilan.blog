"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={date:new Date("2022-12-14T00:00:00.000Z"),authors:["dilan"],tags:["guides","react","javascript","typescript","beginner"],image:"/img/a-comprehensive-react-tutorial-for-beginners/preview.jpg",base:"a-comprehensive-react-tutorial-for-beginners"},i="A Comprehensive React Tutorial for Beginners",s={permalink:"/a-comprehensive-react-tutorial-for-beginners",source:"@site/blog/a-comprehensive-react-tutorial-for-beginners.md",title:"A Comprehensive React Tutorial for Beginners",description:"React is a powerful JavaScript library for building interactive user interfaces (and it's the most popular one, too). Its component-based architecture allows for complex UIs just by combining small and isolated pieces of code. In combination with JSX, you can easily write your entire UI in JavaScript using a familiar HTML-like syntax. There's an official tutorial where they walk you through the basics of React by making a tic-tac-toe game, and I highly recommend checking that out for a good overview of what React is. However, since the introduction of hooks, a lot of React code you'll see today is written using function components as opposed to the class component alternative, so here's a tutorial for that. They already made tic-tac-toe, so let's make Wordle!",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"guides",permalink:"/tags/guides"},{label:"react",permalink:"/tags/react"},{label:"javascript",permalink:"/tags/javascript"},{label:"typescript",permalink:"/tags/typescript"},{label:"beginner",permalink:"/tags/beginner"}],readingTime:24.855,hasTruncateMarker:!0,authors:[{name:"Dilan Nair",title:"Software Developer",url:"https://www.dilanxd.com",icon:{letters:"DN",font:"bold 1.3rem Charter"},key:"dilan"}],frontMatter:{date:"2022-12-14T00:00:00.000Z",authors:["dilan"],tags:["guides","react","javascript","typescript","beginner"],image:"/img/a-comprehensive-react-tutorial-for-beginners/preview.jpg",base:"a-comprehensive-react-tutorial-for-beginners"},nextItem:{title:"How Paper Manages Hundreds of Thousands of Lines of Data",permalink:"/how-paper-manages-hundreds-of-thousands-of-lines-of-data"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," is a powerful JavaScript library for building interactive user interfaces (and it's the most popular one, too). Its ",(0,o.kt)("strong",{parentName:"p"},"component"),"-based architecture allows for complex UIs just by combining small and isolated pieces of code. In combination with ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),", you can easily write your entire UI in JavaScript using a familiar HTML-like syntax. There's an official ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/tutorial/tutorial.html"},"tutorial")," where they walk you through the basics of React by making a tic-tac-toe game, and I highly recommend checking that out for a good overview of what React is. However, since the introduction of ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),", a lot of React code you'll see today is written using function components as opposed to the class component alternative, so here's a tutorial for that. They already made tic-tac-toe, so let's make Wordle!"))}u.isMDXComponent=!0}}]);