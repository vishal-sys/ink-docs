"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Introducci\xf3n",slug:"/datastructures/overview"},i=void 0,c={unversionedId:"datastructures/overview",id:"datastructures/overview",title:"Introducci\xf3n",description:"El crate ink_storage actua como la librer\xeda de storage est\xe1ndar para ink! smart contracts. En",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/datastructures/overview.md",sourceDirName:"datastructures",slug:"/datastructures/overview",permalink:"/es/4.x/datastructures/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/overview.md",tags:[],version:"current",frontMatter:{title:"Introducci\xf3n",slug:"/datastructures/overview"},sidebar:"reference",previous:{title:"#[ink::chain_extension]",permalink:"/es/4.x/macros-attributes/chain-extension"},next:{title:"Trabajando con Mapping",permalink:"/es/4.x/datastructures/mapping"}},s={},l=[{value:"Carga impaciente",id:"carga-impaciente",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"El crate ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," actua como la librer\xeda de storage est\xe1ndar para ink! smart contracts. En\neste momento solo proporciona una \xfanica primitiva de bajo nivel para interactuar con el storage,\nel ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"El ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," es un mapping de pares clave-valor directamente con el storage del contrato. Su principal\nventaja es que es simple y ligero. Como tal, no proporciona ninguna funcionalidad de alto nivel,\ncomo la iteraci\xf3n o la limpieza autom\xe1tica. Los autores de smart contracts deberan implementar\ncualquier funcionalidad de alto nivel ellos mismos."),(0,r.kt)("h2",{id:"carga-impaciente"},"Carga impaciente"),(0,r.kt)("p",null,"Cuando se ejecuta un contrato, todos los campos del strust ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct se extraer\xe1n del almacenamiento,\nindependientemente de si se utilizan o no durante la ejecuci\xf3n del mensaje."),(0,r.kt)("p",null,"Los autores de smart contract deben ser conscientes de este comportamiento desde que potencialmente\npuede afectar al rendimiento del contrato. Por ejemplo, consideta el siguiente storage struct: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct EagerLoading {\n    a: i32,\n    b: ink_prelude::vec::Vec<i32>,\n}\n\nimpl EagerLoading {\n    #[ink(message)]\n    pub fn read_a(&self) {\n        let a = self.a;\n    }\n}\n")),(0,r.kt)("p",null,"En ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerLoading::read_a()")," solo leemos el storage item ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". Sin embargo, el storage item ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\nigualmente sera cargado desde el storage. Como recordatorio, esto significa acceder la base de datos\nsubyancente y decodificar con SCALE el valor. Esto puede incurrir en altos costes, especialmente\na medida que crece el n\xfamero de elementos en ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Carga impaciente ",(0,r.kt)("strong",{parentName:"p"},"no")," aplica a los campos ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),", sin embargo, como las b\xfasquedas clave en las asignaciones\nse realizan directamente desde el storage del contrato.")))}u.isMDXComponent=!0}}]);