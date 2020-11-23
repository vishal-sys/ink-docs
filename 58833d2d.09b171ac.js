(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(108)),i={title:"Overview",slug:"/datastructures/custom"},c={unversionedId:"datastructures/overview",id:"datastructures/overview",isDocsHomePage:!1,title:"Overview",description:"The ink_storage crate acts as the standard storage library for ink! smart contracts.",source:"@site/docs/datastructures/overview.md",slug:"/datastructures/custom",permalink:"/ink-docs/datastructures/custom",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/overview.md",version:"current",sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/ink-docs/ink-macros-attributes/topic"},next:{title:"Working with Datastructures",permalink:"/ink-docs/datastructures/hashmap"}},s=[],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate acts as the standard storage library for ink! smart contracts.\nIt provides all the necessary tools and data structures to organize and operate the contract's storage intuitively and efficiently."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_storage/collections/"}),"You can find the crates documentation for all ink! data structures here.")),Object(o.b)("p",null,"At the moment we provide these data structures:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.BinaryHeap.html"}),Object(o.b)("inlineCode",{parentName:"a"},"BinaryHeap")),":\tA priority queue implemented with a binary heap."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.BitStash.html"}),Object(o.b)("inlineCode",{parentName:"a"},"BitStash"))," A stash for bits operating on the contract storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Bitvec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Bitvec"))," A storage bit vector."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.HashMap.html"}),Object(o.b)("inlineCode",{parentName:"a"},"HashMap")),"\tA hash map operating on the contract storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.SmallVec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"SmallVec"))," A contiguous growable array type."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Stash.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Stash")),"\tA stash data structure operating on contract storage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://paritytech.github.io/ink/ink_storage/collections/struct.Vec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Vec")),"\tA contiguous growable array type, written ",Object(o.b)("inlineCode",{parentName:"li"},"Vec<T>")," but pronounced 'vector'.")),Object(o.b)("p",null,"Data structures provided by the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate are inherently lazy;\nthey are either high-level lazy or low-level lazy data structures.\nThe difference between high-level and low-level lies in the distinction in how these data structures are aware\nof the elements that they operate on."),Object(o.b)("p",null,"For ",Object(o.b)("em",null,"high-level")," data structures they are fully aware about the elements they contain, do all the clean-up by themselves so the user can concentrate on the business logic."),Object(o.b)("p",null,"For ",Object(o.b)("em",null,"low-level")," data structures the responsibility about the elements lies in the hands of the contract author.\nAlso they operate on cells (",Object(o.b)("inlineCode",{parentName:"p"},"Option<T>"),") instead of entities of type ",Object(o.b)("inlineCode",{parentName:"p"},"T"),". But what does that mean exactly?"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," type caches their entities and acts lazily on the storage.\nThis means that a read or write operation is only performed when it really needs to\nin order to satisfy other inputs."),Object(o.b)("p",null,"Data types such as Rust primitives ",Object(o.b)("inlineCode",{parentName:"p"},"i32")," or Rust's very own ",Object(o.b)("inlineCode",{parentName:"p"},"Vec")," or data structures\ncan also be used to operate on the contract's storage, however, they will load their\ncontents eagerly which is often not what you want."),Object(o.b)("p",null,"An example follows with the below contract storage and a message that operates on either of the two fields."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct TwoValues {\n    offset: i32,\n    a: i32,\n    b: i32,\n}\n\nimpl TwoValues {\n    #[ink(message)]\n    pub fn set(&mut self, which: bool, new_value: i32) {\n        match which {\n            true  => { self.a = self.offset + new_value; },\n            false => { self.b = self.offset + new_value; },\n        }\n    }\n}\n")),Object(o.b)("p",null,"Whenever we call ",Object(o.b)("inlineCode",{parentName:"p"},"TwoValues::set")," always both ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," are loaded despite the fact the we only operate on one of them at a time. This is very costly since storage accesses are in fact database look-ups.\nIn order to prevent this eager loading of storage contents we can make use of ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," or other lazy data structures defined in that crate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct TwoValues {\n    offset: i32,\n    a: ink_storage::Lazy<i32>,\n    b: ink_storage::Lazy<i32>,\n}\n\nimpl TwoValues {\n    #[ink(message)]\n    pub fn set(&mut self, which: bool, new_value: i32) {\n        match which {\n            true  => { self.a = offset + new_value; },\n            false => { self.b = offset + new_value; },\n        }\n    }\n}\n")),Object(o.b)("p",null,"Now ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," are only loaded when the contract really needs their values.\nNote that ",Object(o.b)("inlineCode",{parentName:"p"},"offset")," remained ",Object(o.b)("inlineCode",{parentName:"p"},"i32")," since it is always needed and could spare the minor overhead of the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Lazy")," wrapper."))}u.isMDXComponent=!0}}]);