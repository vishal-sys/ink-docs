"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},i=void 0,l={unversionedId:"getting-started/compiling",id:"getting-started/compiling",title:"Compile Your Contract",description:"Run the following command in your flipper directory to compile your smart contract:",source:"@site/docs/getting-started/compiling.md",sourceDirName:"getting-started",slug:"/getting-started/building-your-contract",permalink:"/4.x/getting-started/building-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/compiling.md",tags:[],version:"current",frontMatter:{title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},sidebar:"reference",previous:{title:"Creating an ink! Project",permalink:"/4.x/getting-started/creating-an-ink-project"},next:{title:"Run a Substrate Node",permalink:"/4.x/getting-started/running-substrate"}},c={},s=[{value:"Debug vs. Release Build",id:"debug-vs-release-build",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Run the following command in your ",(0,a.kt)("inlineCode",{parentName:"p"},"flipper")," directory to compile your smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,a.kt)("p",null,"This command will build the following for your contract: a Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file which bundles both. This ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file can be used to\ndeploy your contract to a chain. If all goes well, you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," folder which\ncontains these files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 metadata.json\n")),(0,a.kt)("p",null,"Let's take a look at the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": {...},\n  "contract": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...],\n  "version": "4"\n}\n')),(0,a.kt)("p",null,"This file describes all the interfaces that can be used to interact with your contract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"types")," provides the custom ",(0,a.kt)("strong",{parentName:"li"},"data types")," used throughout the rest of the JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," defines all the ",(0,a.kt)("strong",{parentName:"li"},"storage")," items managed by your contract and how to ultimately access them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec")," stores information about the callable functions like ",(0,a.kt)("strong",{parentName:"li"},"constructors")," and ",(0,a.kt)("strong",{parentName:"li"},"messages")," a\nuser can call to interact with the contract. It also has helpful information like the ",(0,a.kt)("strong",{parentName:"li"},"events"),"\nthat are emitted by the contract or any ",(0,a.kt)("strong",{parentName:"li"},"docs"),".\n")),(0,a.kt)("p",null,"If you look closely at the constructors and messages, you will also notice a ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."),(0,a.kt)("p",null,"In the next section we will start a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"Substrate Smart Contracts node"),"\nand configure the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},"Contracts UI")," to interact with it."),(0,a.kt)("h2",{id:"debug-vs-release-build"},"Debug vs. Release Build"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract")," builds the contract in debug mode. This means\nthat the contract will e.g. print statements like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'ink::env::debug_println!("magic number: {}", value);\n')),(0,a.kt)("p",null,"to the node's console if debugging was enabled on the node (",(0,a.kt)("a",{parentName:"p",href:"/faq#how-do-i-print-something-to-the-console-from-the-runtime"},"instructions here"),").\nTo support functionality like this the debug build of a contract includes some\nheavy-weight logic."),(0,a.kt)("p",null,"For contracts that are supposed to run in production you should always build the\ncontract with ",(0,a.kt)("inlineCode",{parentName:"p"},"--release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build --release\n")),(0,a.kt)("p",null,"This will ensure that nothing unnecessary is compiled into the Wasm blob, making\nyour contract faster and cheaper to deploy and execute."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"With this behavior ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract")," mirrors how ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," behaves for Rust programs:\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--release")," flag has to be passed explicitly to ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build"),".")))}p.isMDXComponent=!0}}]);