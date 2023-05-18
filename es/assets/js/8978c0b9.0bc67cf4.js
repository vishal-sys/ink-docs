"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={title:"useCallSubscription",description:"React hook for calling a contract message on every new block."},c="useCallSubscription",s={unversionedId:"frontend/core/hooks/contracts/use-call-subscription",id:"frontend/core/hooks/contracts/use-call-subscription",title:"useCallSubscription",description:"React hook for calling a contract message on every new block.",source:"@site/docs/frontend/core/hooks/contracts/use-call-subscription.md",sourceDirName:"frontend/core/hooks/contracts",slug:"/frontend/core/hooks/contracts/use-call-subscription",permalink:"/es/frontend/core/hooks/contracts/use-call-subscription",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/hooks/contracts/use-call-subscription.md",tags:[],version:"current",frontMatter:{title:"useCallSubscription",description:"React hook for calling a contract message on every new block."},sidebar:"reference",previous:{title:"useCall",permalink:"/es/frontend/core/hooks/contracts/use-call"},next:{title:"useContract",permalink:"/es/frontend/core/hooks/contracts/use-contract"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecallsubscription"},"useCallSubscription"),(0,o.kt)("p",null,"A React hook for calling a contract message on each new block and decoding a successful\nresponse or receiving an error. This is similar to\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-call"},"useCall"),", except that there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"send()"),"\nfunction in the response. The contract message will automatically be called on each new\nblock. See ",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-call"},"useCall")," to learn about more shared\nfeatures."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallSubscription } from 'useink'\nimport metadata from 'contract/metadata.json'\n\nconst CONTRACT_ADDRESS = '...'\n\n// We define a response type so that `get.result.value.decoded` is of type SuccessfulResponse\ninterface SuccessfulResponse {\n  foo: 'bar'\n}\n\nexport const CallGetOnNewBlocks: React.FC = () => {\n  const contract = useContract(CONTRACT_ADDRESS, metadata, 'aleph') \n  const args = ['arg-1', 2]\n  const get = useCallSubscription<SuccessfulResponse>(contract, 'get', args)\n\n  return <h1>Result: {get.result?.ok ? get.result.value.decoded.foo : '--'}</h1>\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  isSubmitting: boolean;\n  result?: {\n    ok: true;\n    value: {\n      raw: ContractExecResult; \n      decoded: T; // The response is decoded using contract Metadata, and of type `T`\n    } | {\n      ok: false;\n      // error is set if a contract panics or has a failed assert(), or some other pallet errors.\n      error: DispatchError | undefined; \n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);