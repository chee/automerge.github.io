"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},383:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Persistence",l={unversionedId:"cookbook/persistence",id:"cookbook/persistence",isDocsHomePage:!1,title:"Persistence",description:"When you build an app, you want to be able to save that user's data somewhere,",source:"@site/docs/cookbook/persistence.md",sourceDirName:"cookbook",slug:"/cookbook/persistence",permalink:"/docs/docs/cookbook/persistence",editUrl:"https://github.com/automerge/docs/tree/main/docs/docs/cookbook/persistence.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Real-time Collaboration",permalink:"/docs/docs/cookbook/real-time"},next:{title:"Authentication",permalink:"/docs/docs/cookbook/authentication"}},u=[{value:"Strategies",id:"strategies",children:[],level:2},{value:"Automerge Binary Files",id:"automerge-binary-files",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"persistence"},"Persistence"),(0,a.kt)("p",null,"When you build an app, you want to be able to save that user's data somewhere,\nlikely locally first and then remotely on a Cloud server, raspberry pi, mobile\nphone, or other device. "),(0,a.kt)("p",null,"Automerge is an in-memory data structure library. It does not perform any I/O,\nneither disk access nor network communication. Automerge includes\ngeneral-purpose building blocks for network protocols, but you need to use a\nseparate library to perform the actual communication (including encryption,\nauthentication, and access control). Similarly, disk persistence needs to happen\nin a separate layer outside of Automerge."),(0,a.kt)("h2",{id:"strategies"},"Strategies"),(0,a.kt)("p",null,"There are two ways you can store documents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as a log of changes: after every change you make, call ",(0,a.kt)("inlineCode",{parentName:"li"},"Automerge.getLastLocalChange(doc)")," and store the byte array that is returned; to load the document, pass all those byte arrays to ",(0,a.kt)("inlineCode",{parentName:"li"},"Automerge.applyChanges()")),(0,a.kt)("li",{parentName:"ul"},"as a whole document: use ",(0,a.kt)("inlineCode",{parentName:"li"},"Automerge.save(doc)")," to encode the whole document as a byte array; store that on the server; and use ",(0,a.kt)("inlineCode",{parentName:"li"},"Automerge.load()")," to load it again.")),(0,a.kt)("p",null,"Storing one change at a time is good for small updates to a document, since it\nwill be more compact than storing the whole document over and over again. But\nstoring the whole document will be more compact (and faster) than storing the\nwhole log of changes since the document was created. This can be tested and\nfine-tuned based on the number of changes you're saving at any one given time.\nIf you're saving hundreds of changes, it is probably more efficienty to simply\nwrite the whole document to disk using ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.save(doc)"),". If you have a long\nhistory and only want to sync one change, then using ",(0,a.kt)("inlineCode",{parentName:"p"},"getLastLocalChange")," will\nbe more efficient."),(0,a.kt)("h2",{id:"automerge-binary-files"},"Automerge Binary Files"),(0,a.kt)("p",null,"Automerge's binary format is very efficient, and uses the same data\nrepresentation in memory as on disk. In general, storing any data you get from\nthe network into the local filesystem, and loading documents from the filesystem\nfirst will improve the perceived performance of your program."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.save(doc)")," serializes the state of Automerge document ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," to a byte array\n(",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"), which you can write to disk (e.g. as a file on the filesystem if you're using\nNode.js, or to IndexedDB if you're running in a browser). The serialized data contains the full\nchange history of the document (a bit like a Git repository)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.load(byteArray)")," unserializes an Automerge document from a byte array that was produced\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.save()"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"note-specifying-actorid"},"Note: Specifying ",(0,a.kt)("inlineCode",{parentName:"h3"},"actorId")),(0,a.kt)("p",{parentName:"blockquote"},"The Automerge ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," functions take an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId")," parameter:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const actorId = '1234-abcd-56789-qrstuv'\nconst doc1 = Automerge.init(actorId)\nconst doc3 = Automerge.load(str, actorId)\n")),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId")," is a string that uniquely identifies the current node; if you omit ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId"),", a\nrandom UUID is generated. If you pass in your own ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId"),", you must ensure that there can never\nbe two different processes with the same actor ID. Even if you have two different processes\nrunning on the same machine, they must have distinct actor IDs."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Unless you know what you are doing, you should stick with the default"),", and let ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId")," be\nauto-generated."),(0,a.kt)("p",{parentName:"blockquote"},"To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"actorId")," of the current node, call ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.getActorId(doc)"),".")))}p.isMDXComponent=!0}}]);