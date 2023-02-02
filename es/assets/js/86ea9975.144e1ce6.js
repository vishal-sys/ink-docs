"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"Funciones de Entorno",slug:"/basics/environment-functions"},o=void 0,l={unversionedId:"basics/env-functions",id:"basics/env-functions",title:"Funciones de Entorno",description:"ink! expone una serie de funciones de entorno.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/env-functions.md",sourceDirName:"basics",slug:"/basics/environment-functions",permalink:"/es/basics/environment-functions",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/env-functions.md",tags:[],version:"current",frontMatter:{title:"Funciones de Entorno",slug:"/basics/environment-functions"},sidebar:"reference",previous:{title:"Contratos Actualizables",permalink:"/es/basics/upgradeable-contracts"},next:{title:"Chain Environment Types",permalink:"/es/basics/chain-environment-types"}},c={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ink! expone una serie de funciones de entorno.\nPuedes encontrar una descripci\xf3n completa ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions"},"aqu\xed"),"."),(0,a.kt)("p",null,"En ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"  utiliza ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env()")," para acceder a esos,\nen ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," utiliza ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env()"),".\nPor ejemplo ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env().caller()")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env().caller()"),"."),(0,a.kt)("p",null,"Algunas funciones \xfatiles incluyen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.caller.html"},(0,a.kt)("inlineCode",{parentName:"a"},"caller()")),": Devuelve la direcci\xf3n de la persona que llama del contrato ejecutado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.account_id.html"},(0,a.kt)("inlineCode",{parentName:"a"},"account_id()")),": Devuelve el account ID del contrato ejecutado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.balance.html"},(0,a.kt)("inlineCode",{parentName:"a"},"balance()")),": Devuelve el balance del contrato ejecutado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.block_number.html"},(0,a.kt)("inlineCode",{parentName:"a"},"block_number()")),": Devuelve el n\xfamero de bloque actual."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.emit_event.html"},(0,a.kt)("inlineCode",{parentName:"a"},"emit_event(\u2026)")),": Emite un evento con los datos del evento dado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.transfer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"transfer(\u2026)")),": Transfiere valor desde el contrato hasta el account ID del destino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.hash_bytes.html"},(0,a.kt)("inlineCode",{parentName:"a"},"hash_bytes(\u2026)")),": Realiza el hash criptogr\xe1fico de la entrada dada y almacena el resultado en la salida."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions"},"\u2026and many more"),".")))}u.isMDXComponent=!0}}]);