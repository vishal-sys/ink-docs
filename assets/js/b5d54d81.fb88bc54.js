"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"useTxPaymentInfo",description:"React hook for getting the payment information and gas price of a transaction"},i="useTxPaymentInfo",s={unversionedId:"frontend/core/hooks/contracts/use-tx-payment-info",id:"frontend/core/hooks/contracts/use-tx-payment-info",title:"useTxPaymentInfo",description:"React hook for getting the payment information and gas price of a transaction",source:"@site/docs/frontend/core/hooks/contracts/use-tx-payment-info.md",sourceDirName:"frontend/core/hooks/contracts",slug:"/frontend/core/hooks/contracts/use-tx-payment-info",permalink:"/frontend/core/hooks/contracts/use-tx-payment-info",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/hooks/contracts/use-tx-payment-info.md",tags:[],version:"current",frontMatter:{title:"useTxPaymentInfo",description:"React hook for getting the payment information and gas price of a transaction"},sidebar:"reference",previous:{title:"useTx",permalink:"/frontend/core/hooks/contracts/use-tx"},next:{title:"useWallet",permalink:"/frontend/core/hooks/wallets/use-wallet"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usetxpaymentinfo"},"useTxPaymentInfo"),(0,o.kt)("p",null,"A hook for getting the partial fee and weight for a transaction before signing and sending."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTxPaymentInfo } from 'useink'\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract('..address', metadata, 'astar')\n  const get = useTxPaymentInfo<boolean>(contract, 'get')\n\n  return (\n    <button onClick={get.send} disabled={get.isSubmitting}>\n      {get.result?.paritalFee ? (\n          `Gas price: ${get.result?.paritialFee.toString()}`\n        ) : '--'}\n    </button>\n  )\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface DispatchInfo {\n  readonly weight: Weight; \n  readonly partialFee: Balance;\n}\n\n// useTxPaymentInfo retun type\ninterface PaymentInfoResult {\n  isSubmitting: boolean;\n  result?: DispatchInfo;\n  send: (\n    options?: ContractOptions,\n    params?: unknown[],\n    signerOptions?: Partial<SignerOptions>,\n  ) => Promise<DispatchInfo | undefined>;\n  resolved: boolean;\n}\n")))}f.isMDXComponent=!0}}]);