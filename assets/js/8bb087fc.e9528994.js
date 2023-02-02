"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5592],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),i=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=i(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,c(c({ref:e},p),{},{components:n})):r.createElement(m,c({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9581:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling"},c=void 0,s={unversionedId:"basics/cross-contract-calling",id:"basics/cross-contract-calling",title:"Cross-Contract Calling",description:"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow",source:"@site/docs/basics/cross-contract-calling.md",sourceDirName:"basics",slug:"/basics/cross-contract-calling",permalink:"/4.x/basics/cross-contract-calling",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/cross-contract-calling.md",tags:[],version:"current",frontMatter:{title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling"},sidebar:"reference",previous:{title:"Trait Definitions",permalink:"/4.x/basics/trait-definitions"},next:{title:"Upgradeable Contracts",permalink:"/4.x/basics/upgradeable-contracts"}},l={},i=[{value:"How it Works",id:"how-it-works",level:3}],p={toc:i};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow\ndelegation and ink! messages can easily call other ink! messages.\nGiven another ink! contract like, we can call any of its functions."),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/delegator/lib.rs"},(0,a.kt)("inlineCode",{parentName:"a"},"delegator example contract")),"\nfor an elaborate example which uses cross-contract calling."),(0,a.kt)("h3",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"In order to deploy the delegator smart contract we first\nhave to manually put the code of the other contract, receive\nits code hash from the signalled event and put their code hash\ninto our calling smart contract."),(0,a.kt)("p",null,"The calling contract looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use other_contract::OtherContract;\n\n//--snip--\n#[ink(storage)]\nstruct MyContract {\n    /// The other contract.\n    other_contract: OtherContract,\n}\n\nimpl MyContract {\n    /// Instantiate `MyContract with the given\n    /// sub-contract codes and some initial value.\n    #[ink(constructor)]\n    pub fn new(\n        other_contract_code_hash: Hash,\n    ) -> Self {\n        let other_contract = OtherContract::new(1337)\n            .endowment(total_balance / 4)\n            .code_hash(other_contract_code_hash)\n            .instantiate()\n            .expect("failed at instantiating the `OtherContract` contract");\n        Self {\n            other_contract\n        }\n    }\n\n    /// Calls the other contract.\n    #[ink(message)]\n    pub fn call_other_contract(&self) -> i32 {\n        self.other_contract.get_value()\n    }\n}\n//--snip--\n')),(0,a.kt)("p",null,"It's ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," contains"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"other_contract/Cargo.toml")," contains this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[features]\nink-as-dependency = []\n")),(0,a.kt)("p",null,"Tells the ink! code generator to ",(0,a.kt)("strong",{parentName:"p"},"always")," or ",(0,a.kt)("strong",{parentName:"p"},"never"),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"other_contract/lib.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod other_contract {\n    /// Storage for the other contract.\n    #[ink(storage)]\n    pub struct OtherContract {\n        value: i32,\n    }\n\n    impl OtherContract {\n        /// Initializes the contract.\n        #[ink(constructor)]\n        pub fn new(value: i32) -> Self {\n            Self { value }\n        }\n\n        /// Returns the current state.\n        #[ink(message)]\n        pub fn get_value(&self) -> i32 {\n            self.value\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);