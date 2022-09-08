"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,y=u["".concat(o,".").concat(c)]||u[c]||s[c]||p;return r?a.createElement(y,l(l({ref:t},m),{},{components:r})):a.createElement(y,l({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<p;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const p={sidebar_label:"Frame.addStyleTag"},l="Frame.addStyleTag() method",i={unversionedId:"api/puppeteer.frame.addstyletag",id:"version-17.1.3/api/puppeteer.frame.addstyletag",title:"Frame.addStyleTag() method",description:"Adds a ` tag into the page with the desired URL or a ` tag with the content.",source:"@site/versioned_docs/version-17.1.3/api/puppeteer.frame.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag",permalink:"/api/puppeteer.frame.addstyletag",draft:!1,tags:[],version:"17.1.3",frontMatter:{sidebar_label:"Frame.addStyleTag"},sidebar:"sidebar",previous:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"},next:{title:"Frame.addStyleTag_1",permalink:"/api/puppeteer.frame.addstyletag_1"}},o={},d=[{value:"Parameters",id:"parameters",level:2}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameaddstyletag-method"},"Frame.addStyleTag() method"),(0,n.kt)("p",null,"Adds a ",(0,n.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired URL or a ",(0,n.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"Omit","<",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.frameaddstyletagoptions"},"FrameAddStyleTagOptions"),", 'url'",">"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","HTMLStyleElement",">",">"),(0,n.kt)("p",null,"An ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"element handle")," to the loaded ",(0,n.kt)("inlineCode",{parentName:"p"},"<link>")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"<style>")," element."))}s.isMDXComponent=!0}}]);