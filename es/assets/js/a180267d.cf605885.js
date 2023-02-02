"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9623],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>d});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},h=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),p=l(a),m=o,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(d,s(s({ref:e},h),{},{components:a})):n.createElement(d,s({ref:e},h))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7574:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={title:"C\xf3mo funciona \u2012 Substrate",slug:"/como-funciona",hide_title:!0},s=void 0,i={unversionedId:"intro/how-it-works",id:"intro/how-it-works",title:"C\xf3mo funciona \u2012 Substrate",description:"TODO: translate page",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/how-it-works.md",sourceDirName:"intro",slug:"/como-funciona",permalink:"/es/4.x/como-funciona",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/how-it-works.md",tags:[],version:"current",frontMatter:{title:"C\xf3mo funciona \u2012 Substrate",slug:"/como-funciona",hide_title:!0},sidebar:"reference",previous:{title:"Por qu\xe9 WebAssembly para Smart Contracts?",permalink:"/es/4.x/por-que-webassembly-para-smart-contracts"},next:{title:"ink! vs. Solidity",permalink:"/es/4.x/ink-vs-solidity"}},c={},l=[{value:"How does ink! tie into Substrate?",id:"how-does-ink-tie-into-substrate",level:2},{value:"How does the <code>pallet-contracts</code> work?",id:"how-does-the-pallet-contracts-work",level:2},{value:"Why include <code>pallet-contracts</code> on a parachain?",id:"why-include-pallet-contracts-on-a-parachain",level:2},{value:"Use Case 1: Smart Contracts as &quot;first-class citizens&quot;",id:"use-case-1-smart-contracts-as-first-class-citizens",level:3},{value:"Use Case 2: Smart Contracts as &quot;second-class citizens&quot;",id:"use-case-2-smart-contracts-as-second-class-citizens",level:3},{value:"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama",id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama",level:3},{value:"Smart Contracts vs. Parachains",id:"smart-contracts-vs-parachains",level:2}],h={toc:l};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/substrate.svg",className:"titlePic"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TODO: translate page")),(0,o.kt)("h1",{id:"c\xf3mo-funciona--substrate"},"C\xf3mo funciona \u2012 Substrate"),(0,o.kt)("p",null,"ink! is a programming language for smart contracts; blockchains built with ",(0,o.kt)("a",{parentName:"p",href:"http://substrate.io"},"the Substrate framework"),"\ncan choose from a number of smart contract languages which one(s) they want to support.\nink! is one of them. It is an opinionated language that we have built by extending the popular Rust programming language with functionality needed to make it smart contract compatible."),(0,o.kt)("h2",{id:"how-does-ink-tie-into-substrate"},"How does ink! tie into Substrate?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate")," is a framework for building blockchains \u2013 those can be standalone blockchains or blockchains connected to ",(0,o.kt)("a",{parentName:"p",href:"http://kusama.network"},"Kusama")," or ",(0,o.kt)("a",{parentName:"p",href:"http://polkadot.network"},"Polkadot"),", so called ",(0,o.kt)("em",{parentName:"p"},"parachains"),". Substrate contains a number of modules, in Substrate terminology those are called ",(0,o.kt)("em",{parentName:"p"},"pallets"),". Substrate comes with a set of pallets for many requirements modern blockchains typically have \u2013 staking, fungible tokens, non-fungible tokens, governance, etc."),(0,o.kt)("p",null,"Substrate also ships with a module for smart contracts, this module is called ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". If a parachain is developed in Substrate it can easily add smart contract functionality by including this pallet."),(0,o.kt)("p",null,"How does ink! come into play here? ink! is a programming language, specifically it is an embedded domain-specific language for the popular Rust programming language. This means that you can use all the normal Rust syntax plus some specifics that we added to make the language suitable for the smart contract world. The ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," takes these ink! contracts and executes them in a safe manner. So in short: ",(0,o.kt)("em",{parentName:"p"},"with ink! you can write smart contracts in Rust for blockchains built with Substrate that include ",(0,o.kt)("inlineCode",{parentName:"em"},"pallet-contracts")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2129).Z,width:"2400",height:"1200"})),(0,o.kt)("h2",{id:"how-does-the-pallet-contracts-work"},"How does the ",(0,o.kt)("inlineCode",{parentName:"h2"},"pallet-contracts")," work?"),(0,o.kt)("p",null,"We intentionally designed ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," in a way that it is decoupled from the language that is used to write smart contracts. The pallet is only the execution environment and it takes WebAssembly files as input. Smart contracts for this pallet have to be compiled to the WebAssembly (Wasm) target architecture."),(0,o.kt)("p",null,"For contract developers this means they can use ink! for writing smart contracts, but can also decide on other languages. Right now three languages to choose from exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"Parity's ink!")," for Rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/ask"},"ask!")," for AssemblyScript."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/solang"},"Solang")," compiler for Solidity.")),(0,o.kt)("p",null,"It's not hard to add new languages. There just needs to be a compiler for the language down to WebAssembly, then it's possible to implement the API of ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),'. This API at the moment consists of about 15-20 functions for anything a smart contract may desire: storage access, cryptographic functionality, environmental information like block numbers, access to functions for getting random numbers or self-terminate the contract, etc. Not all of those have to be implemented in the language \u2012 the ink! "Hello, World!" requires just six API functions. The following schema depicts this relationship:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2925).Z,width:"1200",height:"967"})),(0,o.kt)("p",null,"We think this design is more future-proof than some architectures found in competing ecosystems. There is no tight coupling between language and execution environment. WebAssembly is an industry standard and a multitude of programming languages can nowadays be compiled down to WebAssembly. If in, say ten years time, researchers come up with an innovative language for writing smart contracts (or a subset of an existing language) then as long as there is a WebAssembly compiler it will be easy to make this language compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"."),(0,o.kt)("h2",{id:"why-include-pallet-contracts-on-a-parachain"},"Why include ",(0,o.kt)("inlineCode",{parentName:"h2"},"pallet-contracts")," on a parachain?"),(0,o.kt)("p",null,"There are a couple use cases for includig smart contract functionality on a parachain. We distinguish three big ones."),(0,o.kt)("h3",{id:"use-case-1-smart-contracts-as-first-class-citizens"},'Use Case 1: Smart Contracts as "first-class citizens"'),(0,o.kt)("p",null,"The most obvious use case is a parachain which provides smart contracts as a \u201cfirst-class citizen\u201d, meaning smart contracts are the central value proposition of the chain."),(0,o.kt)("p",null,"Those chains typically take the off-the-shelf ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," and create some additional innovation on top of it. Examples of this are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://astar.network"},"Astar"),": a parachain team that has built a layer on top of ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," so that contract developers can earn a passive income whenever their contracts are being used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.phala.network"},"Phala"),": a parachain team that utilizes ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," in a trusted execution environment, enabling confidential smart contract execution and interoperability."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alephzero.org"},"Aleph Zero"),": uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," in a zero-knowledge context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.t3rn.io"},"t3rn"),": uses ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," as a building block to enable multi-chain execution for smart contracts.")),(0,o.kt)("h3",{id:"use-case-2-smart-contracts-as-second-class-citizens"},'Use Case 2: Smart Contracts as "second-class citizens"'),(0,o.kt)("p",null,"There is another not so obvious use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),": smart contracts as \u201csecond-class citizens\u201d on an existing chain. By this we mean that the central value proposition of the chain has nothing to do with smart contracts, but it still includes them as an add-on."),(0,o.kt)("p",null,"We provide an API (called ",(0,o.kt)("a",{parentName:"p",href:"https://ink.substrate.io/macros-attributes/chain-extension"},"chain extensions"),") with which a parachain can expose certain parts of its business logic to smart contract developers. Through this, smart contract developers can utilize the business logic primitives of the chain to build a new application on top of it. Think for example of a decentralized exchange blockchain. This chain would in its simplest form have an order book to place bids and asks \u2012 there is no need for taking untrusted, turing complete, programs from the outside. The parachain could decide to expose the order book into smart contracts though, giving external developers the option of building new applications that utilize the order book. For example, to upload trading algorithms as smart contracts to the chain."),(0,o.kt)("p",null,"Smart contracts here are an opportunity to up the user engagement and drive usage of the chain's native token. And the billing for utilizing the chain comes already built-in with the pallet \u2012 users have to pay gas fees for the execution of their smart contract."),(0,o.kt)("h3",{id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama"},"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama"),(0,o.kt)("p",null,"A third big use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," is to prototype an idea as a proof-of-concept smart contract before leasing a dedicated parachain slot on Polkadot or Kusama."),(0,o.kt)("p",null,"The time to develop a smart contract and deploy it is shorter than the onboarding story for a parachain. One can deploy a proof-of-concept smart contract first, see if it gains traction and the idea holds up to the real world. Only subsequently, once there is a need for e.g. cheaper transaction fees, more efficient execution, or a governance mechanism for the community, the smart contract could be migrated to a dedicated parachain runtime with its own slot. ink! contracts and Substrate runtimes are both written in Rust and share similar primitives, this enables a clear path to graduate from a smart contract to its own runtime. Developers can reuse large parts of their code, their tests, as well as frontend and client code."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4289).Z,width:"2800",height:"1575"})),(0,o.kt)("h2",{id:"smart-contracts-vs-parachains"},"Smart Contracts vs. Parachains"),(0,o.kt)("p",null,"One of the first questions we typically get when somebody learns about Substrate, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract."),(0,o.kt)("p",null,"The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically refered to as its ",(0,o.kt)("em",{parentName:"p"},"state transition function"),") and can persist its modified state in a block. In Substrate terminology this state transition function is called the chain's ",(0,o.kt)("em",{parentName:"p"},"runtime"),"."),(0,o.kt)("p",null,"The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: ",(0,o.kt)("em",{parentName:"p"},"smart contracts sit on top of parachains"),". Parachains would usually be described as layer-1 blockchains \u2012 except for that they don't have to build their own security, are upgradable, and interoperable."),(0,o.kt)("p",null,"It's noteworthy that a parachain's state transition function doesn't get further validated \u2012 it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged \u2012 or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models. Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time."),(0,o.kt)("p",null,"For smart contracts, on the other hand, an existing parachain has to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow ",(0,o.kt)("em",{parentName:"p"},"permisionless")," deployment of ",(0,o.kt)("em",{parentName:"p"},"untrusted")," programs on a blockchain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," those safety pillars include mechanisms like gas metering or deposits for storing data on-chain."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To restate this important distinction: developing a parachain runtime is different from developing a smart contract \u2012 a smart contract sits on top of a parachain"),"."),(0,o.kt)("p",null,"The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime \u2012 there is too much logic in between.\nA smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9466).Z,width:"2400",height:"1200"})))}p.isMDXComponent=!0},4289:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ink-gateway-f45ef65bb203393f5fd975fd4c3e10f5.jpg"},2129:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ink-pallet-contracts-9fb60b4f162b48bbc8cd59608383f638.png"},2925:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ink-substrate-e79085d5e963e7efd3ce90f17a711ba1.png"},9466:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/smart-contract-vs-parachain-ebe1233980ba17f60e1f222b4f03966e.png"}}]);