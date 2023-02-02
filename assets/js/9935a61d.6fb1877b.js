"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Contract Template",hide_title:!0,slug:"/basics/contract-template"},i=void 0,s={unversionedId:"basics/contract-template",id:"basics/contract-template",title:"Contract Template",description:"On this page we'll go over how to create a basic contract and explain",source:"@site/docs/basics/contract-template.md",sourceDirName:"basics",slug:"/basics/contract-template",permalink:"/4.x/basics/contract-template",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/contract-template.md",tags:[],version:"current",frontMatter:{title:"Contract Template",hide_title:!0,slug:"/basics/contract-template"},sidebar:"reference",previous:{title:"Troubleshooting",permalink:"/4.x/getting-started/troubleshooting"},next:{title:"Storing Values",permalink:"/4.x/basics/storing-values"}},c={},l=[{value:"Creating a template",id:"creating-a-template",level:2},{value:"Template Content",id:"template-content",level:2},{value:"<code>Cargo.toml</code>",id:"cargotoml",level:3},{value:"<code>lib.rs</code>",id:"librs",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/macro.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"contract-template"},"Contract Template"),(0,r.kt)("p",null,"On this page we'll go over how to create a basic contract and explain\nits elements."),(0,r.kt)("h2",{id:"creating-a-template"},"Creating a template"),(0,r.kt)("p",null,"Change into your working directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract new foobar\n")),(0,r.kt)("p",null,"This will create a new project folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd foobar/\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," file you find initial scaffolded code, which you can use as a starting point."),(0,r.kt)("p",null,"Quickly check that it compiles and the trivial tests pass with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,r.kt)("p",null,"Also check that you can build the Wasm file by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,r.kt)("p",null,"If everything looks good, then we are ready to start programming!"),(0,r.kt)("h2",{id:"template-content"},"Template Content"),(0,r.kt)("p",null,"The template contains scaffolded code that provides a starting point\nfor writing an ink! contract. In the following we'll take a look\nat what the files contain.\nThe files you get locally will look similar, just that we added\nexplanatory comments here."),(0,r.kt)("h3",{id:"cargotoml"},(0,r.kt)("inlineCode",{parentName:"h3"},"Cargo.toml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "foobar"\nversion = "0.1.0"\nauthors = ["[your_name] <[your_email]>"]\nedition = "2021"\n\n[dependencies]\n# The `ink` crate contains the ink! eDSL and re-exports\n# a number of other ink! specific crates. For example,\n# `ink::env` is the `ink_env` crate that contains functions\n# to interact with a contract\'s environment (querying information\n# about a caller, the current block number, etc.).\nink = { version = "4.0.0-beta", default-features = false }\n\n# Substrate blockchains use the SCALE codec for anything to\n# do with data encoding/decoding. If an ink! contract is called\n# the passed values have to be SCALE-encoded and return values\n# have to be SCALE-decoded. All values that are put into a\n# contract\'s storage are SCALE-encoded as well.\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\n\n# This crate is used to write information about a contract\'s\n# types into the contract\'s metadata (i.e. its ABI). This is\n# needed so that a client knows that a contract message requires\n# e.g. an Array and that it has to SCALE-encode the value as an Array.\nscale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }\n\n[dev-dependencies]\n# This developer dependency is for the End-to-End testing framework.\nink_e2e = { path = "../../crates/e2e" }\n\n[lib]\nname = "foobar"\npath = "lib.rs"\n\n# This setting typically specifices that you\'d like the compiler to\n# create a dynamic system library. For WebAssembly though it specifies\n# that the compiler should create a `*.wasm` without a start function.\ncrate-type = [\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    "scale/std",\n    "scale-info/std",\n]\nink-as-dependency = []\n\n# This feature is just a convention, so that the end-to-end tests\n# are only executed if `cargo test` is explicitly invoked with\n# `--features e2e-tests`.\ne2e-tests = []\n')),(0,r.kt)("h3",{id:"librs"},(0,r.kt)("inlineCode",{parentName:"h3"},"lib.rs")),(0,r.kt)("p",null,"Every ink! contract is required to contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exactly one ",(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(storage)]")," struct."),(0,r.kt)("li",{parentName:"ul"},"At least one ",(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(constructor)]")," function."),(0,r.kt)("li",{parentName:"ul"},"At least one ",(0,r.kt)("inlineCode",{parentName:"li"},"#[ink(message)]")," function.")),(0,r.kt)("p",null,"The scaffolded code will look similar to the following, we've\nchanged the comments though to explain what is going on there\non a high level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// If the `std` feature from the `Cargo.toml` is not enabled\n// we switch on `no_std`, this has the effect of Rusts standard\n// library not being included in our contract.\n//\n// The Rust standard library is OS-dependent and Wasm is\n// architecture independent.\n#![cfg_attr(not(feature = "std"), no_std)]\n\n// This is the ink! macro, the starting point for your contract.\n// Everything below it might look like Rust code, but it is actually\n// run through a parser in ink!.\n#[ink::contract]\npub mod flipper {\n    /// This is the contract\'s storage.\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// A constructor that the contract can be initialized with.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            /* --snip-- */\n        }\n\n        /// An alternative constructor that the contract can be\n        /// initialized with.\n        #[ink(constructor)]\n        pub fn new_default() -> Self {\n            /* --snip-- */\n        }\n\n        /// A state-mutating function that the contract exposes to the\n        /// outside world.\n        /// \n        /// By default functions are private, they have to be annotated\n        /// with `#[ink(message)]` and `pub` to be available from the\n        /// outside.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            /* --snip-- */\n        }\n\n        /// A public contract function that has no side-effects.\n        /// \n        /// Note that while purely reading functions can be invoked\n        /// by submitting a transaction on-chain, this is usually\n        /// not done as they have no side-effects and the transaction\n        /// costs would be wasted.\n        /// Instead those functions are typically invoked via RPC to\n        /// return a contract\'s state.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            /* --snip-- */\n        }\n    }\n\n    #[cfg(test)]\n    mod tests {\n        use super::*;\n\n        /// This attribute denotes that the test is executed in\n        /// a simulated, mocked blockchain environment. There are\n        /// functions available to influence how the test environment\n        /// is configured (e.g. setting an account to a specified balance).\n        #[ink::test]\n        fn default_works() {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n\n    #[cfg(all(test, feature = "e2e-tests"))]\n    mod e2e_tests {\n        use super::*;\n        use ink_e2e::build_message;\n\n        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;\n\n        /// With this attribute the contract will be compiled and deployed\n        /// to a Substrate node that is required to be running in the\n        /// background.\n        ///\n        /// We offer API functions that enable developers to then interact\n        /// with the contract. ink! will take care of putting contract calls\n        /// into transactions that will be submitted to the Substrate chain.\n        ///\n        /// Developers can define assertions on the outcome of their transactions,\n        /// such as checking for state mutations, transaction failures or\n        /// incurred gas costs.\n        #[ink_e2e::test]\n        async fn it_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n}\n')))}d.isMDXComponent=!0}}]);