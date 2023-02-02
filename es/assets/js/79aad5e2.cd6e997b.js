"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7323],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={title:"#[ink(message)]",slug:"/macros-attributes/message"},s=void 0,i={unversionedId:"macros-attributes/message",id:"macros-attributes/message",title:"#[ink(message)]",description:"Aplicable a m\xe9todos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/message.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/message",permalink:"/es/4.x/macros-attributes/message",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/message.md",tags:[],version:"current",frontMatter:{title:"#[ink(message)]",slug:"/macros-attributes/message"},sidebar:"reference",previous:{title:"#[ink(impl)]",permalink:"/es/4.x/macros-attributes/impl"},next:{title:'#[ink(namespace = "\u2026")]',permalink:"/es/4.x/macros-attributes/namespace"}},l={},c=[{value:"Valor de retorno de los mensajes",id:"valor-de-retorno-de-los-mensajes",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aplicable a m\xe9todos."),(0,r.kt)("p",null,"Marca un m\xe9todo para el struct storage de ink! como mensaje haciendo que este disponible para la API al llamar al contrato."),(0,r.kt)("p",null,"Date cuenta que todas las funciones p\xfablicas deben utilizar el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),"."),(0,r.kt)("p",null,"Al menos debe haber un m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," definido."),(0,r.kt)("p",null,"Los m\xe9todos marcados con ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," son especiales de un modo que son dispatchables\nen la invocaci\xf3n del contrato. El conjunto de mensajes de ink! definidos por los smart contract ink!\ndefined su superficie API con los usuarios que est\xe1n permitidos interactuar."),(0,r.kt)("p",null,"Un smart contract de ink! puede tener multiples mensajes ink! definidos."),(0,r.kt)("p",null,"Un mensaje ink! con un receptor  ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," solo puede leer el estado mientras un mensaje ink!\ncon un receptor ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self")," puede mutar el storage del contrato."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn purely_reading(&self, from: AccountId) {\n    // implementaci\xf3n actual\n}\n\n#[ink(message)]\npub fn mutates_storage(&mut self, from: AccountId) {\n    // implementaci\xf3n actual\n}\n")),(0,r.kt)("h2",{id:"valor-de-retorno-de-los-mensajes"},"Valor de retorno de los mensajes"),(0,r.kt)("p",null,"El valor de returno de un mensaje tiene que implementar  ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),"."),(0,r.kt)("p",null,"Es notable que la colecci\xf3n bajo  ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," \u2012 como por ejemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," \u2012\nno implementa ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),". Esto quiere decir que no puedes solo retornar un ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," desde un mensaje ink!.\nEsta restricci\xf3n es intencional \u2012 devolviendo una estructura de datos completa con un contenido potencialmente ilimitado\nes un anti patr\xf3n para smart contracts. Simplemente piensa en como de impredecible ser\xedan los costes del gas."),(0,r.kt)("p",null,"Si tu ",(0,r.kt)("em",{parentName:"p"},"realmente")," necesitas devolver una estructura de datos entera entonces utiliza un de\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink_prelude")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec"),"). Estas implementan ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),"."),(0,r.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("p",null,"Dada la definici\xf3n del contrato ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," de arriba a\xf1adimos las definiciones ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),"\ncomo vemos a continuaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Voltea el valor actual.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Devuelve el valor actual.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);