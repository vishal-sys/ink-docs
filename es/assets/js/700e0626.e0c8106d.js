"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},i=void 0,s={unversionedId:"intro/why-webassembly",id:"version-3.x/intro/why-webassembly",title:"Why WebAssembly for Smart Contracts?",description:"* High performance: Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/intro/why-webassembly.md",sourceDirName:"intro",slug:"/why-webassembly-for-smart-contracts",permalink:"/es/3.x/why-webassembly-for-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/intro/why-webassembly.md",tags:[],version:"3.x",frontMatter:{title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},sidebar:"reference",previous:{title:"Why Rust for Smart Contracts?",permalink:"/es/3.x/why-rust-for-smart-contracts"},next:{title:"How it Works \u2012 Substrate",permalink:"/es/3.x/how-it-works"}},l={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"High performance: "),"Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Small size: "),"It facilitates small binaries to ship over the internet to devices with potentially slow internet connection. This is a great fit for the space-constrainted blockchain world."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"General VM & bytecode: "),"It was developed so that code can be deployed in any browser with the same result. Contrary to the EVM it was not developed towards a very specific use case, this has the benefit of a lot of tooling being available and large companies putting a lot of resources into furthering Wasm development."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Efficient JIT execution: "),"64 and 32-bit integer operation support that maps one-to-one with CPU instructions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Minimalistic: ")," Formal spec that fits on a single page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Deterministic execution: "),"Wasm is easily made deterministic by removing floating point operations, which is necessary for consensus algorithms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Open Standards > Custom Solutions: "),"Wasm is a standard for web browsers developed by W3C workgroup that includes Google, Mozilla, and others. There\u2019s been many years of work put into Wasm, both by compiler and standardisation teams."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Many languages available: ")," Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe, and Kotlin. This means you can write smart contracts in whichever language you\u2019re familiar with, though we\u2019re partial to Rust due to its lack of runtime overhead and inherent security properties."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Memory-safe, sandboxed, and platform-independent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"LLVM support: "),"Supported by the LLVM compiler infrastructure project, meaning that Wasm benefits from over a decade of LLVM\u2019s compiler optimisation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Large companies involved: ")," Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook.")))}m.isMDXComponent=!0}}]);