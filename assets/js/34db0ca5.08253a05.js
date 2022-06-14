"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4227],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Overview",slug:"/macros-attributes"},u=void 0,l={unversionedId:"macros-attributes/overview",id:"macros-attributes/overview",title:"Overview",description:"An ink! module is the module that is flagged by #[ink::contract] containing all the ink! definitions.",source:"@site/docs/macros-attributes/overview.md",sourceDirName:"macros-attributes",slug:"/macros-attributes",permalink:"/macros-attributes",draft:!1,editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/macros-attributes"},sidebar:"reference",previous:{title:"Metadata",permalink:"/metadata"},next:{title:"#[ink::contract]",permalink:"/macros-attributes/contract"}},s={},p=[{value:"Merging Attributes",id:"merging-attributes",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ink! module is the module that is flagged by ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," containing all the ink! definitions.\nAll ink! attributes are available to specify inside an ink! module."),(0,o.kt)("h2",{id:"merging-attributes"},"Merging Attributes"),(0,o.kt)("p",null,"It is possible to merge attributes that share a common flagged entity.\nThe example below demonstrates this for a payable message with a custom selector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\n#[ink(payable)]\n#[ink(selector = "0xCAFEBABE")]\npub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {\n    // actual implementation\n}\n')),(0,o.kt)("p",null,"We can also write the above ink! message definition in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message, payable, selector = "0xCAFEBABE")]\npub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {\n    // actual implementation\n}\n')))}f.isMDXComponent=!0}}]);