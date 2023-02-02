"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7593],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var i=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,a=function(t,e){if(null==t)return{};var r,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=i.createContext({}),c=function(t){var e=i.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=c(t.components);return i.createElement(o.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(r),h=a,k=p["".concat(o,".").concat(h)]||p[h]||u[h]||n;return r?i.createElement(k,l(l({ref:e},m),{},{components:r})):i.createElement(k,l({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,l=new Array(n);l[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:a,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5420:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),a=(r(7294),r(3905));const n={title:"Welcome!",hide_title:!0,slug:"/",hide_table_of_contents:!1},l=void 0,s={unversionedId:"intro/intro",id:"intro/intro",title:"Welcome!",description:"&nbsp;",source:"@site/docs/intro/intro.mdx",sourceDirName:"intro",slug:"/",permalink:"/4.x/",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/intro.mdx",tags:[],version:"current",frontMatter:{title:"Welcome!",hide_title:!0,slug:"/",hide_table_of_contents:!1},sidebar:"reference",next:{title:"Why Rust for Smart Contracts?",permalink:"/4.x/why-rust-for-smart-contracts"}},o={},c=[{value:"Learn More",id:"learn-more",level:2},{value:"Our Pitch",id:"our-pitch",level:2},{value:"Smart Contract Examples",id:"smart-contract-examples",level:2}],m={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/img/title/ink!-4.0.svg",width:"800",style:{marginBottom:10}}),(0,a.kt)("center",null,(0,a.kt)("a",{href:"https://github.com/paritytech/ink"},(0,a.kt)("img",{style:{height:25},src:"https://img.shields.io/github/v/release/paritytech/ink?label=ink!%20on%20GitHub&labelColor=white&color=blue&include_prereleases"})),"\xa0",(0,a.kt)("a",{href:"https://substrate.stackexchange.com/questions/tagged/ink?tab=Votes"},(0,a.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=StackExchange&label=ink!%20Support%20on%20StackExchange&labelColor=white&color=blue"})),"\xa0",(0,a.kt)("a",{href:"https://twitter.com/ink_lang"},(0,a.kt)("img",{style:{height:25},src:"https://img.shields.io/twitter/follow/ink_lang?label=Follow"})),(0,a.kt)("br",null),(0,a.kt)("em",null,"ink! 4.0 was published as a release candidate on Jan 31 '23.",(0,a.kt)("br",null),"We'll soon publish the full release.")),(0,a.kt)("h3",{style:{lineHeight:"1.4em",marginTop:"0.5em"}},(0,a.kt)("center",null,(0,a.kt)("em",null,"ink! is a programming language for smart contracts.",(0,a.kt)("br",null),"You can use it with blockchains built on ",(0,a.kt)("a",{href:"https://github.com/paritytech/substrate"},"Substrate"),"."))),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},(0,a.kt)("img",{src:"/img/what-is-ink.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,a.kt)("p",null,"What is Parity's ink!?",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},"\xbb view page"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},(0,a.kt)("img",{src:"/img/tutorial.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,a.kt)("p",null,"Guided Beginners Tutorial",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},"\xbb view tutorial")))),(0,a.kt)("h2",{id:"our-pitch"},"Our Pitch"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/rust.svg",width:"100"}),(0,a.kt)("p",null,"Inherent safety-guarantees with the Rust programming language.")),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/ecosystem.svg",width:"100"}),(0,a.kt)("p",null,"Ability to use all the normal Rust tooling \u2012 clippy, crates.io, IDE\u2019s, etc.")),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/interop.svg",width:"100"}),(0,a.kt)("p",null,"Interoperability with Solidity contracts."))),(0,a.kt)("br",null),"\xa0",(0,a.kt)("br",null),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/migration-path.svg",width:"100"}),(0,a.kt)("p",null,"Clear migration path for graduating to a parachain.")),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/wasm.svg",width:"100"}),(0,a.kt)("p",null,"Established industry standard for the compiler target.")),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("img",{src:"/img/icons/substrate.svg",width:"100"}),(0,a.kt)("p",null,"Native to Substrate. Complements your Substrate runtime perfectly."))),(0,a.kt)("h2",{id:"smart-contract-examples"},"Smart Contract Examples"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/flipper"},(0,a.kt)("img",{src:"/img/icons/flipper.svg",width:"100"})),(0,a.kt)("p",null,'Our "Hello, World!".',(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/flipper"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/erc20"},(0,a.kt)("img",{src:"/img/icons/erc20.svg",width:"100"})),(0,a.kt)("p",null,"An ERC-20 implementation.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/erc20"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/erc721"},(0,a.kt)("img",{src:"/img/icons/nft.svg",width:"100"})),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/erc721"},"\xbb view ERC-721"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/erc1155"},"\xbb view ERC-1155")))),(0,a.kt)("br",null),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts"},(0,a.kt)("img",{src:"/img/icons/upgradable.svg",width:"100"})),(0,a.kt)("p",null,"An upgradeable contract.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/multisig"},(0,a.kt)("img",{src:"/img/icons/multisig.svg",width:"100"})),(0,a.kt)("p",null,"A multi-signature wallet.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/multisig"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/rand-extension"},(0,a.kt)("img",{src:"/img/icons/rand-extension.svg",width:"100"})),(0,a.kt)("p",null,"Allow runtime access.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink/tree/master/examples/rand-extension"},"\xbb view example")))))}p.isMDXComponent=!0}}]);