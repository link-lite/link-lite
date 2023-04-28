"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1664],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(2203),a=(n(79),n(8570));const r={sidebar_position:5},o="Distribution Queries",l={unversionedId:"devs/external-systems/bcos/distribution-queries",id:"devs/external-systems/bcos/distribution-queries",title:"Distribution Queries",description:"Get a task from BC|OS REST API",source:"@site/docs/devs/external-systems/bcos/distribution-queries.md",sourceDirName:"devs/external-systems/bcos",slug:"/devs/external-systems/bcos/distribution-queries",permalink:"/hutch/docs/devs/external-systems/bcos/distribution-queries",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/external-systems/bcos/distribution-queries.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"devGuide",previous:{title:"Open API (Swagger)",permalink:"/hutch/docs/devs/external-systems/bcos/open-api"},next:{title:"MinIO",permalink:"/hutch/docs/devs/external-systems/minio/"}},s={},p=[{value:"Get a task from BC|OS REST API",id:"get-a-task-from-bcos-rest-api",level:2},{value:"Sample return value",id:"sample-return-value",level:3},{value:"Uploading results for distribution queries",id:"uploading-results-for-distribution-queries",level:2},{value:"Uploading large/sensitive data",id:"uploading-largesensitive-data",level:3},{value:"Step 1.",id:"step-1",level:4},{value:"Step 2.",id:"step-2",level:4},{value:"Uploading large/sensitive data",id:"uploading-largesensitive-data-1",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distribution-queries"},"Distribution Queries"),(0,a.kt)("h2",{id:"get-a-task-from-bcos-rest-api"},"Get a task from BC|OS REST API"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"/link_connector_api/task/nextjob/{collectionId}.b")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget the ",(0,a.kt)("inlineCode",{parentName:"p"},".b")," after your collection ID.")),(0,a.kt)("admonition",{title:"Example",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If your collection ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"myCollection"),":"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"/link_connector_api/task/nextjob/myCollection.b"))),(0,a.kt)("h3",{id:"sample-return-value"},"Sample return value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"owner" : "user1",\n"code" : "GENERIC",\n"analysis" : "DISTRIBUTION",\n"uuid" : "77d85e8e-0f9d-4452-a554-8caf4c96682a",\n"collection" : "myCollection"\n}\n')),(0,a.kt)("p",null,"The code field can be one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DEMOGRAPHICS"),(0,a.kt)("li",{parentName:"ul"},"ICD-MAN"),(0,a.kt)("li",{parentName:"ul"},"GENERIC")),(0,a.kt)("h2",{id:"uploading-results-for-distribution-queries"},"Uploading results for distribution queries"),(0,a.kt)("p",null,"There are two endpoints for uploading distribution query results:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/link_connector_api/task/resultfile/{uuid}/{collectionId}")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/link_connector_api/task/result/{uuid}/{collectionId}"))),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," is the UUID that came with the distribution query and ",(0,a.kt)("inlineCode",{parentName:"p"},"collectionID")," is the collection ID."),(0,a.kt)("p",null,"Use ",(0,a.kt)("strong",{parentName:"p"},"endpoint 1.")," when you want to upload large files and/or sensitive data. ",(0,a.kt)("strong",{parentName:"p"},"Endpoint 2.")," is for when your data are small and/or not sensitive."),(0,a.kt)("h3",{id:"uploading-largesensitive-data"},"Uploading large/sensitive data"),(0,a.kt)("p",null,"There is a 2-step process for uploading large/sensitive data."),(0,a.kt)("h4",{id:"step-1"},"Step 1."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST")," to ",(0,a.kt)("strong",{parentName:"p"},"endpoint 1.")),(0,a.kt)("p",null,"The body of the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ok",\n  "protocolVersion": "v2",\n  "uuid": "308e1f8d-520c-47fa-9dee-fb99cfd770aa",\n  "queryResult": {\n    "count": 0,\n    "datasetsCount": 0,\n    "files": [\n      {\n        "file_name": "{fileName}",\n        "file_data": "QklPQkFOSwlDT0RFCURFU0NSSVBUSU9OCUNPVU5UCU1JTglR ...",\n        "file_description": null,\n        "file_size": 0,\n        "file_type": "BCOS",\n        "file_sensitive": false,\n        "file_reference": ""\n      }\n    ]\n  },\n  "message": null,\n  "collection_id": "myCollection"\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"file_name")," parameter can be one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"code.distribution",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used when the query code is ",(0,a.kt)("strong",{parentName:"li"},"GENERIC")))),(0,a.kt)("li",{parentName:"ul"},"demographics.distribution",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used when the query code is ",(0,a.kt)("strong",{parentName:"li"},"DEMOGRAPHICS")))),(0,a.kt)("li",{parentName:"ul"},"icd_level1.distribution",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used when the query code is ",(0,a.kt)("strong",{parentName:"li"},"ICD-MAN")))),(0,a.kt)("li",{parentName:"ul"},"icd_level2.distribution",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"used when the query code is ",(0,a.kt)("strong",{parentName:"li"},"ICD-MAN"))))),(0,a.kt)("p",null,"The choice depends on the type of distribution analysis being requested."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"file_data")," field needs to be a single string containing the contents of the file, encoded in base-64."),(0,a.kt)("h4",{id:"step-2"},"Step 2."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST")," to ",(0,a.kt)("strong",{parentName:"p"},"endpoint 2.")),(0,a.kt)("p",null,"The body of the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ok",\n  "protocolVersion": "v2",\n  "uuid": "308e1f8d-520c-47fa-9dee-fb99cfd770aa",\n  "queryResult": {\n    "count": 0,\n    "datasetsCount": 0,\n    "files": []\n  },\n  "message": null,\n  "collection_id": "myCollection"\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The body of this ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request is essentially the same as in Step 1. but the ",(0,a.kt)("inlineCode",{parentName:"p"},"files")," field is an empty array (",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),").")),(0,a.kt)("h3",{id:"uploading-largesensitive-data-1"},"Uploading large/sensitive data"),(0,a.kt)("p",null,"There is a single step process for uploading small/not sensitive data."),(0,a.kt)("admonition",{title:"Coming soon",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We don't have information on this yet.")))}d.isMDXComponent=!0}}]);