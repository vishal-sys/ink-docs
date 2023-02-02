"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Compilar tu Contrato",slug:"/getting-started/building-your-contract"},i=void 0,c={unversionedId:"getting-started/compiling",id:"getting-started/compiling",title:"Compilar tu Contrato",description:"Ejecuta el siguiente comando en tu directorio flipper para compilar tu smart contract:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started/compiling.md",sourceDirName:"getting-started",slug:"/getting-started/building-your-contract",permalink:"/es/getting-started/building-your-contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/compiling.md",tags:[],version:"current",frontMatter:{title:"Compilar tu Contrato",slug:"/getting-started/building-your-contract"},sidebar:"reference",previous:{title:"Crear un proyecto ink!",permalink:"/es/getting-started/creating-an-ink-project"},next:{title:"Arranca un Nodo Substrate",permalink:"/es/getting-started/running-substrate"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ejecuta el siguiente comando en tu directorio ",(0,a.kt)("inlineCode",{parentName:"p"},"flipper")," para compilar tu smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,a.kt)("p",null,"Este comando construir\xe1 lo siguiente para tu contrato: un binario Wasm, un fichero metadata (el cual el ABI del contrato) y un fichero ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," que agrupa a ambos. Este fichero ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," puede ser utilizado para desplegar el contrato en una red. Si todo va bien, deber\xedas ver una carpeta ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," que contiene estos ficheros:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 metadata.json\n")),(0,a.kt)("p",null,"Vamos a ver la estructura de ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadataVersion": "0.1.0",\n  "source": {...},\n  "contract": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...]\n}\n')),(0,a.kt)("p",null,"Este fichero describe todas las interfaces que pueden ser utilizadas para interactuar con tu contrato:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"types")," proporciona el personalizado ",(0,a.kt)("strong",{parentName:"li"},"data types")," utilizado en el resto del fichero JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," define todos los items ",(0,a.kt)("strong",{parentName:"li"},"storage")," controlados por tu contrato y como acceder a ellos. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec")," almacena informaci\xf3n sobre las funciones invocables como ",(0,a.kt)("strong",{parentName:"li"},"constructors")," y ",(0,a.kt)("strong",{parentName:"li"},"messages"),", un usuario\npuede llamarlas para interaccionar con el contrato. Tambi\xe9n tiene informaci\xf3n que puede ayudar como los ",(0,a.kt)("strong",{parentName:"li"},"events"),"\nque son emitidos por el contrato o cualquier ",(0,a.kt)("strong",{parentName:"li"},"docs"),".")),(0,a.kt)("p",null,"Si miras de cerca a los constructors y los messages tambi\xe9n ver\xe1s un ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," que contiene un hash de 4-bytes del nombre de la funci\xf3n\ny que es utilizado para enrutar las llamadas de tu contrato a las funciones correctas."),(0,a.kt)("p",null,"En la siguiente secci\xf3n arrancaremos un ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"Substrate Smart Contracts node"),"\ny configuraremos el ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},"Contracts UI")," para interactuar con el."),(0,a.kt)("div",{class:"translateTodo"},"## Debug vs. Release Build",(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract")," builds the contract in debug mode. This means\nthat the contract will e.g. print statements like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'ink::env::debug_println!("magic number: {}", value);\n')),(0,a.kt)("p",null,"to the node's console if debugging was enabled on the node (",(0,a.kt)("a",{parentName:"p",href:"/faq#how-do-i-print-something-to-the-console-from-the-runtime"},"instructions here"),").\nTo support functionality like this the debug build of a contract includes some\nheavy-weight logic."),(0,a.kt)("p",null,"For contracts that are supposed to run in production you should always build the\ncontract with ",(0,a.kt)("inlineCode",{parentName:"p"},"--release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build --release\n")),(0,a.kt)("p",null,"This will ensure that nothing unnecessary is compiled into the Wasm blob, making\nyour contract faster and cheaper to deploy and execute."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"With this behavior ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract")," mirrors how ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," behaves for Rust programs:\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--release")," flag has to be passed explicitly to ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build"),"."))))}p.isMDXComponent=!0}}]);