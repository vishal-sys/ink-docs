"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),v=o,d=f["".concat(i,".").concat(v)]||f[v]||p[v]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={title:"useEvents",description:"React hook for fetching contract events from state"},a="useEvents",c={unversionedId:"frontend/core/hooks/contracts/use-events",id:"frontend/core/hooks/contracts/use-events",title:"useEvents",description:"React hook for fetching contract events from state",source:"@site/docs/frontend/core/hooks/contracts/use-events.md",sourceDirName:"frontend/core/hooks/contracts",slug:"/frontend/core/hooks/contracts/use-events",permalink:"/es/frontend/core/hooks/contracts/use-events",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/hooks/contracts/use-events.md",tags:[],version:"current",frontMatter:{title:"useEvents",description:"React hook for fetching contract events from state"},sidebar:"reference",previous:{title:"useEventSubscription",permalink:"/es/frontend/core/hooks/contracts/use-event-subscription"},next:{title:"useTx",permalink:"/es/frontend/core/hooks/contracts/use-tx"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],l={toc:u},f="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useevents"},"useEvents"),(0,o.kt)("p",null,"A hook for fetching contract events from state after you have subscribed by calling\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-event-subscription"},"useEventSubscription"),". You can\nfilter for specific events by passing in a case-sensitive array of event names. "),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEvents, useEventSubscription, useContract } from 'useink'\nimport metadata from 'metadata.json'\n\nconst CONTRACT_ADDRESS = '..'\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract(CONTRACT_ADDRESS, metadata)\n  useEventSubscription(contract) // Only subscribe to a contract's events one time.\n  const { events: allContractEvents } = useEvents(contract?.address) // fetch a specific contracts events from state\n  const { events: fooBarEvents } = useEvents(contract?.address, ['Foo', 'Bar']) // only fetch Events Foo and Bar from state\n\n  return (\n    <div>\n      <ul>\n        {allContractEvents.map(e => (\n          <li key={e.id}>\n            {e.name}: Do something with the args -> {JSON.stringify(e.args)}\n          </li>\n        ))}\n      </ul>\n\n      <ul>\n        {fooBarEvents.map(e => (\n          <li key={e.id}>\n            {e.name}: Do something with the args -> {JSON.stringify(e.args)}\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  events: {\n      id: string;\n      createdAt: number;\n      name: string; // The name of the event emitted\n      args: unknown[]; // human-readable values emitted in the event\n    }[];\n  // A function to remove an event from state. Useful when a user closes a snackbar notification, etc\n  removeEvent: (args: { address: string, id: string }) => void;\n}\n")))}p.isMDXComponent=!0}}]);