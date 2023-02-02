"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Reading Values from Storage",slug:"/basics/reading-values"},o=void 0,s={unversionedId:"basics/reading-values",id:"basics/reading-values",title:"Reading Values from Storage",description:"Reading from storage is where the fun begins!",source:"@site/docs/basics/reading-values.md",sourceDirName:"basics",slug:"/basics/reading-values",permalink:"/4.x/basics/reading-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/reading-values.md",tags:[],version:"current",frontMatter:{title:"Reading Values from Storage",slug:"/basics/reading-values"},sidebar:"reference",previous:{title:"Storing Values",permalink:"/4.x/basics/storing-values"},next:{title:"Mutating Storage Values",permalink:"/4.x/basics/mutating-values"}},l={},u=[{value:"Contract Functions",id:"contract-functions",level:2},{value:"Public and Private Functions",id:"public-and-private-functions",level:3},{value:"Getting a Value",id:"getting-a-value",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reading from storage is where the fun begins!"),(0,a.kt)("h2",{id:"contract-functions"},"Contract Functions"),(0,a.kt)("p",null,"As you can see in the contract template, all of your contract functions are part of your contract module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    // Public and Private functions can go here\n}\n")),(0,a.kt)("h3",{id:"public-and-private-functions"},"Public and Private Functions"),(0,a.kt)("p",null,"In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend\nbreaking up your implementation definitions for your private and public functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),(0,a.kt)("p",null,"You can also choose to split things up however is most clear for your project."),(0,a.kt)("p",null,"Note that all public functions must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," attribute."),(0,a.kt)("h2",{id:"getting-a-value"},"Getting a Value"),(0,a.kt)("p",null,"We already showed you how to initialize a storage value in the chapter ",(0,a.kt)("a",{parentName:"p",href:"/basics/storing-values"},"Storing Values"),".\nGetting the value is just as simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),(0,a.kt)("p",null,"In Rust, if the last expression in a function does not have a semicolon it will be the return value."))}p.isMDXComponent=!0}}]);