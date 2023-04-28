"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8437],{8570:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(79);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(2203),o=(r(79),r(8570));const n={},s="\ud83d\udcf6 Data Sources",i={unversionedId:"users/detailed-overview/data-sources",id:"users/detailed-overview/data-sources",title:"\ud83d\udcf6 Data Sources",description:"Data Sources provide the datasets against which Hutch will execute configured Activities.",source:"@site/docs/users/detailed-overview/data-sources.md",sourceDirName:"users/detailed-overview",slug:"/users/detailed-overview/data-sources",permalink:"/hutch/docs/users/detailed-overview/data-sources",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/users/detailed-overview/data-sources.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"\u27a1\ufe0f Activity Sources",permalink:"/hutch/docs/users/detailed-overview/activity-sources"},next:{title:"Sample Data",permalink:"/hutch/docs/category/sample-data"}},c={},u=[{value:"Datastore support",id:"datastore-support",level:2},{value:"Schema support",id:"schema-support",level:2},{value:"OMOP Common Data Model",id:"omop-common-data-model",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-data-sources"},"\ud83d\udcf6 Data Sources"),(0,o.kt)("p",null,"Data Sources provide the datasets against which Hutch will execute configured Activities."),(0,o.kt)("h2",{id:"datastore-support"},"Datastore support"),(0,o.kt)("p",null,"At this time Hutch Agents only support PostgreSQL."),(0,o.kt)("h2",{id:"schema-support"},"Schema support"),(0,o.kt)("h3",{id:"omop-common-data-model"},"OMOP Common Data Model"),(0,o.kt)("p",null,'The initially targeted "Data Source" schema for Hutch is the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/OHDSI/CommonDataModel"},"OMOP CDM")," 5.3."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../sample-data/omop-53"},"Sample Datasets for querying in the OMOP Common Data Model")))}p.isMDXComponent=!0}}]);