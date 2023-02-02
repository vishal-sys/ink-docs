"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Overview",slug:"/datastructures/overview"},i=void 0,s={unversionedId:"datastructures/overview",id:"datastructures/overview",title:"Overview",description:"The ink_storage crate acts as the standard storage library for ink! smart contracts.",source:"@site/docs/datastructures/overview.md",sourceDirName:"datastructures",slug:"/datastructures/overview",permalink:"/4.x/datastructures/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/datastructures/overview"},sidebar:"reference",previous:{title:"#[ink::chain_extension]",permalink:"/4.x/macros-attributes/chain-extension"},next:{title:"Working with Mapping",permalink:"/4.x/datastructures/mapping"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate acts as the standard storage library for ink! smart contracts.\nAt the moment it provides two primitives for interacting with storage,\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Mapping.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Mapping")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Lazy.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Lazy")),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," is a mapping of key-value pairs directly to the contract storage. It is very\nsimilar to traditional hash tables and comparable to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapping")," type Solidity offers.\nAs a core ingredient to the ink! language, its main advantage is being simple and\nlightweight: It favors being efficient in terms of gas costs and code size\nover providing a lot of high-level functionality found in other implementations\nlike the ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::prelude::collections::HashMap")," type.\nOverall, the ink! ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," will be solid choice for most contracts. Moreover, smart\ncontracts developers can implement advanced features themselves."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Lazy")," is a wrapper type that can be used over any other storage compatible type.\nThis allows smart contract developers fine grained manual control over the layout of\nthe contract storage by assigning a separate storage cell for the field. For example,\nit can be used to prevent the contract from eagerly loading large storage fields\nduring each contract call.\nConceivably, it may be desirable to change certain aspects on how your contract deals with\nits storage variables. You can find out more about this in the section about the ink!\n",(0,a.kt)("a",{parentName:"p",href:"https://use.ink/versioned_docs/version-4.0.0-alpha.1/datastructures/storage-layout"},"Storage Layout"),"."))}u.isMDXComponent=!0}}]);