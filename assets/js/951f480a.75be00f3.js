"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8661],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8059:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:8},l="Remote storage",c={unversionedId:"tutorial/remote-storage",id:"tutorial/remote-storage",isDocsHomePage:!1,title:"Remote storage",description:"One of the key problems in local-first applications is how to save data on a remote device so it can be retrieved by collaborators. For example, if I add items to the todo list and shut my laptop, I want other people to be able to see my new changes while I'm offline.",source:"@site/docs/tutorial/remote-storage.md",sourceDirName:"tutorial",slug:"/tutorial/remote-storage",permalink:"/docs/tutorial/remote-storage",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/remote-storage.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Multi-user apps",permalink:"/docs/tutorial/sync-changes"},next:{title:"Extra Credit",permalink:"/docs/tutorial/extra-credit"}},p=[{value:"File",id:"file",children:[],level:2},{value:"File server",id:"file-server",children:[],level:2},{value:"Uploading files",id:"uploading-files",children:[],level:2},{value:"Download files",id:"download-files",children:[],level:2},{value:"Exercise",id:"exercise",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-storage"},"Remote storage"),(0,a.kt)("p",null,"One of the key problems in local-first applications is how to save data on a remote device so it can be retrieved by collaborators. For example, if I add items to the todo list and shut my laptop, I want other people to be able to see my new changes while I'm offline."),(0,a.kt)("p",null,"There are many ways to do this. One option is to have a server peer which behaves similarly to a client peer, but is always online. This server peer can participate in the sync protocol over WebSockets, and you can use the Rust, Node.js, Python, or C Automerge libraries on the server side. It can even store these intermediate changesets in a database like MongoDB."),(0,a.kt)("p",null,"However, this approach can be complicated and reduce the perceived performance of the application, because of the number of round-trips involved in the sync protocol. In this tutorial we will offer an even simpler solution that will work for the majority of use cases. "),(0,a.kt)("h2",{id:"file"},"File"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.save(doc)")," is a powerful tool. It serializes the Automerge document history into a compact binary format. This binary format can be saved as a file, and sent to a server, downloaded to the filesystem, put on a USB stick, or sent over email. "),(0,a.kt)("p",null,"To do this in our tutorial, let's create a server in Node.js that has to HTTP routes: GET and PUT a file with a docId."),(0,a.kt)("h2",{id:"file-server"},"File server"),(0,a.kt)("p",null,"Here is a gist that will give you a basic server you can use in this demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://gist.github.com/8577a591087f1818097da868c84c992c.git\nnpm i \n")),(0,a.kt)("p",null,"Or, copy and paste this file to ",(0,a.kt)("inlineCode",{parentName:"p"},"server.js")," and install the related dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst path = require('path')\nconst fs = require('fs')\nconst cors = require('cors')\nconst bodyParser = require('body-parser')\nconst Automerge = require('automerge')\n\nlet app = express()\nvar options = {\n    inflate: true,\n    limit: '100kb',\n    type: 'application/octet-stream'\n};\napp.use(bodyParser.raw(options));\n\ntry { \n    fs.mkdirSync(path.join(__dirname, 'data'))\n} catch (err) {\n    if (err.code !== 'EEXIST') {\n        console.error(err)\n    } \n}\n\n\napp.use(cors())\n\napp.get('/:id', (req, res) => {\n    let id = req.params.id\n    let filename = path.join(__dirname, 'data', id)\n    fs.stat(filename, (err, stats) => {\n        if (err) {\n            console.error(err)\n            res.status(404).send('Not found')\n        } else { \n            res.sendFile(filename)\n            console.log('sending')\n        }\n    })\n})\n\napp.post('/:id', (req, res) => {\n    let id = req.params.id\n    fs.writeFileSync(path.join(__dirname, 'data', id), req.body)\n    res.status(200).send('ok')\n})\n\nconst port = 5000\n\napp.listen(5000, () => {\n    console.log('listening on http://localhost:' + port)\n})\n")),(0,a.kt)("h2",{id:"uploading-files"},"Uploading files"),(0,a.kt)("p",null,"You can then serialize the Automerge document to a binary and send it to the fileserver. Call this function in your ",(0,a.kt)("inlineCode",{parentName:"p"},"observer.observe")," function so that the file is saved to the remote every time you make a change."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function saveToRemote (docId, doc) {\n  let binary = Automerge.save(doc)\n  return fetch(`http://localhost:5000/${docId}`, {\n    body: binary,\n    method: "post",\n    headers: {\n      "Content-Type": "application/octet-stream",\n    }\n  })\n}\n')),(0,a.kt)("h2",{id:"download-files"},"Download files"),(0,a.kt)("p",null,"When you load the application for the first time, you want to get the item from the remote server and merge those changes locally. Automerge BinaryDocuments must be an ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayBuffer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getItem (docId) {\n  const response = await fetch(`http://localhost:5000/${docId}`)\n  if (response.status !== 200) throw new Error('No saved draft for doc with id=' + docId)\n  const respbuffer = await response.arrayBuffer()\n  if (respbuffer.byteLength === 0) throw new Error('No saved draft for doc with id=' + docId)\n  const view = new Uint8Array(respbuffer)\n  return Automerge.load(view as Automerge.BinaryDocument)\n}\n")),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"There is a bug in our implementation. There is a ",(0,a.kt)("strong",{parentName:"p"},"race condition"),". That happens when a bug appears based on the timing of actions between two or mor processes. If two devices are uploading the document in rapid succession, they could override each other's files in the remote storage server, resulting in a remote copy contains one or another's edits, but not the merged set of both user's edits. "),(0,a.kt)("p",null,"Modify the server to remove this race condition. Before overriding a local file, the server should check the local filesystem for an existing copy. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.merge")," on the incoming and local file before saving it to disk."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hints")),(0,a.kt)("p",null,"There are multiple ways to solve this problem, and it's very open ended. You could also solve this on the client, by fetching files and merging with them before saving to the server."),(0,a.kt)("p",null,"In this experimental ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alexjg/automerge-todomvc-http"},"React demo"),", you can see how a python fileserver can be used to store automerge files. You could also use a Cloud service like Amazon S3 or Digital Ocean Spaces as a remote storage location."))}u.isMDXComponent=!0}}]);