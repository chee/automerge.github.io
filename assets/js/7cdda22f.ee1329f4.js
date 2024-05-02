"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2392],{5871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(4848),a=n(8453);const s={sidebar_position:1},i="Storage",r={id:"under-the-hood/storage",title:"Storage",description:"In the getting started section we introduced a simple application which synchronized the value of a counter between any number of tabs. If you close all the tabs and open a new one you will see that the value of the counter is persisted. How is this working? What's going on?",source:"@site/docs/under-the-hood/storage.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/storage",permalink:"/docs/under-the-hood/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/under-the-hood/storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modeling Data",permalink:"/docs/cookbook/modeling-data"},next:{title:"Merge Rules",permalink:"/docs/under-the-hood/merge_rules"}},h={},c=[{value:"Under the hood",id:"under-the-hood",level:2},{value:"The storage model",id:"the-storage-model",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"storage",children:"Storage"}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/docs/quickstart",children:"getting started"})," section we introduced a simple application which synchronized the value of a counter between any number of tabs. If you close all the tabs and open a new one you will see that the value of the counter is persisted. How is this working? What's going on?"]}),"\n",(0,o.jsxs)(t.p,{children:["Before we dive into that, try this experiment. Modify the definition of the ",(0,o.jsx)(t.code,{children:"repo"})," in ",(0,o.jsx)(t.code,{children:"main.tsx"})," to look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"const repo = new Repo({\n  network: [], // This part means that we're not sending live changes anywhere\n  storage: new IndexedDBStorageAdapter(),\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now if you open two tabs with the same URL (including the hash component, the easiest way to achieve this is to open one tab and then duplicate it) you'll notice that the counter value is not updated live between tabs. However, if you increment the count in both tabs and then refresh either tab the count will include the increments from the other tab."}),"\n",(0,o.jsx)(t.p,{children:"Clearly there is more going on here than just saving the current state of the document somewhere."}),"\n",(0,o.jsx)(t.h2,{id:"under-the-hood",children:"Under the hood"}),"\n",(0,o.jsxs)(t.p,{children:["Both tabs initialize a ",(0,o.jsx)(t.code,{children:"Repo"})," pointing at an IndexedDB storage adapter, because the tabs are on the same domain this means they have access to the same storage."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's mess around with this in the browser. First, clear your local IndexedDB for the ",(0,o.jsx)(t.code,{children:"localhost"})," domain, then open ",(0,o.jsx)(t.code,{children:"http://localhost:5173"})," (without a hash component). The browser will update to contain a hash component with the document ID in it. In this example the URL in the browser window is ",(0,o.jsx)(t.code,{children:"http://localhost:5173/#automerge:3RFyJzsLsZ7MsbG98rcuZ4FqtGW7"}),", so the document URL is ",(0,o.jsx)(t.code,{children:"automerge:3RFyJzsLsZ7MsbG98rcuZ4FqtGW7"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Open the browser tools and take a look at IndexedDB you'll see a database called ",(0,o.jsx)(t.code,{children:"automerge"})," and within that an object store called ",(0,o.jsx)(t.code,{children:"automerge"}),". For me, in Firefox, this looks like:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"IndexedDB browser tools",src:n(4254).A+"",width:"1010",height:"756"})}),"\n",(0,o.jsxs)(t.p,{children:["You can see that there is a key which looks roughly like our document URL (it doesn't have the ",(0,o.jsx)(t.code,{children:"automerge:"})," prefix) and some kind of value. If we expand that we see:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"IndexedDB detailed",src:n(6409).A+"",width:"1010",height:"956"})}),"\n",(0,o.jsxs)(t.p,{children:["If you're not familiar with IndexedDB this might be a little confusing. IndexedDB is a sort of key/value store where the keys are arrays. So what we are seeing here is a binary array (the ",(0,o.jsx)(t.code,{children:"binary: Object"})," part in the above screenshot) stored under the key ",(0,o.jsx)(t.code,{children:'["3RFyJzsLsZ7MsbG98rcuZ4FqtGW7", "incremental", "0290cdc2dcebc1ecb3115c3635bf1cb0f857ce971d9aab1c44a0d3ab19a88cd8"]'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:['Okay, so creating a document (which is what happens when we load the page) stores a binary array under some key in the object database. This binary array is a single "incremental" change. An incremental change is not the entire history of the document but just some set of changes to the document. In this case it\'s the change that initializes the document with a ',(0,o.jsx)(t.code,{children:'"counter"'})," field."]}),"\n",(0,o.jsx)(t.p,{children:'Now click the "count" button and take another look at the IndexedDB.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"IndexedDB snapshot",src:n(4053).A+"",width:"1010",height:"956"})}),"\n",(0,o.jsxs)(t.p,{children:["Well, there's still one entry, but it's changed. The ",(0,o.jsx)(t.code,{children:'[.., "incremental", ..]'})," key has been deleted and replaced with ",(0,o.jsx)(t.code,{children:'[.., "snapshot", ..]'}),". What's happened here? Every time you make a change automerge-repo saves that change to your storage adapters. Occasionally automerge-repo will decide that it's time to \"compact\" the document, it will take every change that has been written to storage so far (in this case, every key beginning with ",(0,o.jsx)(t.code,{children:"[<document URL>, .., ..]"})," and combine them into a single snapshot and then save it as this ",(0,o.jsx)(t.code,{children:'[.., "snapshot", ..]'})," key."]}),"\n",(0,o.jsx)(t.p,{children:"All well and good in one tab. Open a new tab with the same URL (including the hash) and click the count button a few times in both tabs. If you look at the IndexedDB browser tools (in either tab, it's shared between them) you'll something like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"IndexedDB many keys",src:n(424).A+"",width:"1010",height:"778"})}),"\n",(0,o.jsx)(t.p,{children:"You can see here that there are two snapshot files. This is because when each tab compacts incremental changes and then deletes the original incremental files, it only deletes the incremental changes it had previously loaded. This is what makes it safe to use concurrently, because it only deletes data which is incorporated into the compacted document. But the real magic comes with how this is loaded. If you load another tab with the same URL it will sum the counts from both the previous tabs. This works because when the repo starts up it loads all the changes it can find in storage and merges them which it can do because automerge is a CRDT."}),"\n",(0,o.jsx)(t.h2,{id:"the-storage-model",children:"The storage model"}),"\n",(0,o.jsx)(t.p,{children:"The objective of the storage engine in automerge-repo is to be easy to implement over a wide range of backing stores (e.g. an S3 bucket, or a postgres database, or a local directory) and support compaction without requiring any concurrency control on the part of the implementor. Compaction is crucial to make the approach of storing every change that is made to a document feasible."}),"\n",(0,o.jsx)(t.p,{children:"The simplest model of storage is a key/value model. We could attempt to build storage on top of such a model by using the document ID as a key, appending new changes for a document to that key and occasionally compacting the document and rewriting the value at that key entirely. The problem with this is that it makes it complicated to use the storage engine from multiple processes. Imagine multiple processes are making changes to a document and writing them to the storage backend. If both of these processes decide to compact at the same time then the storage engine would need to have some kind of transaction to ensure that between the time a compacting process read from storage and then wrote to it no other process added new changes to storage. This is not hard for something like a postgres database, but it's very fiddly for simple mediums like a directory on the local filesystem."}),"\n",(0,o.jsxs)(t.p,{children:["What we want to be able to do then is to know that if we are writing a compacted document to storage we will never overwrite data which contains changes we did not compact. Conveniently the set of changes in the document is uniquely identified by the heads of the document. This means that if we use the tuple ",(0,o.jsx)(t.code,{children:"(document ID, <heads of document>)"})," as the key to the storage we know that even if we overwrite data another process has written it must contain the same changes as the data we are writing."]}),"\n",(0,o.jsxs)(t.p,{children:["Of course, we also want to remove the un-compacted data. A compacting process can't just delete everything because another process might have written new changes since it started compaction. Each process then needs to keep track of every change it has loaded from storage and then when compacting ",(0,o.jsx)(t.em,{children:"only delete those changes"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The upshot of all this then is that our model for storage is not a key value store with document IDs as keys and byte arrays as values, but instead a slightly more complex model where the keys are arrays of the form ",(0,o.jsx)(t.code,{children:"[<document ID>, <chunk type>, <chunk identifier>]"})," where chunk type is either ",(0,o.jsx)(t.code,{children:'"snapshot"'}),' or "',(0,o.jsx)(t.code,{children:'incremental"'}),' and the chunk ID is either the heads of the documnt at compaction time or the hash of the change bytes respectively. The storage backend then must implement range queries so the storage system can do things like "load all the chunks for document ID x".']}),"\n",(0,o.jsx)(t.p,{children:"In typescript that looks like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export type StorageKey = string[];\n\nexport abstract class StorageAdapter {\n  abstract load(key: StorageKey): Promise<Uint8Array | undefined>;\n  abstract save(key: StorageKey, data: Uint8Array): Promise<void>;\n  abstract remove(key: StorageKey): Promise<void>;\n  abstract loadRange(\n    keyPrefix: StorageKey,\n  ): Promise<{ key: StorageKey; data: Uint8Array }[]>;\n  abstract removeRange(keyPrefix: StorageKey): Promise<void>;\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6409:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/indexedb-screenshot-detailed-6e26f5cc4a19c298e08b9b87fda60113.png"},424:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/indexeddb-screenshot-manykeys-a64d03070537caf6e7d5e8b41ac813d9.png"},4053:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/indexeddb-screenshot-snapshot-33bb8a01fef928c7aae538dcaed88de4.png"},4254:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/indexeddb-screenshot-f0b20167b650af36cf404b5b19f829fd.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);