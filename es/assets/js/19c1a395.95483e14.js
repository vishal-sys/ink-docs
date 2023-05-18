"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),s=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(f.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,m=l["".concat(f,".").concat(d)]||l[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Configuration",description:"Notification configuration and default values"},a="Configuration",c={unversionedId:"frontend/notifications/configuration",id:"frontend/notifications/configuration",title:"Configuration",description:"Notification configuration and default values",source:"@site/docs/frontend/notifications/configuration.mdx",sourceDirName:"frontend/notifications",slug:"/frontend/notifications/configuration",permalink:"/es/frontend/notifications/configuration",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/notifications/configuration.mdx",tags:[],version:"current",frontMatter:{title:"Configuration",description:"Notification configuration and default values"},sidebar:"reference",previous:{title:"Getting Started",permalink:"/es/frontend/notifications"},next:{title:"useNotifications",permalink:"/es/frontend/notifications/useNotifications"}},f={},s=[],u={toc:s},l="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NotificationsProvider")," takes ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," props with the following interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Config {\n  // The time to live in miliseconds before being removed from state\n  // Defaults to 5000 (5 seconds).\n  // Set to 0 to avoid having notifications removed\n  expiration?: number\n  // How often to check for notifications that have expired. Time in miliseconds\n  // Defaults to 500 (half a second)\n  checkInterval?: number\n}\n")))}p.isMDXComponent=!0}}]);