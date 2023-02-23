"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[397],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(2203),a=(n(79),n(8570));const o={},l="Hutch Worker",i={unversionedId:"devs/getting-started/worker",id:"devs/getting-started/worker",title:"Hutch Worker",description:"Installation",source:"@site/docs/devs/getting-started/worker.md",sourceDirName:"devs/getting-started",slug:"/devs/getting-started/worker",permalink:"/hutch/docs/devs/getting-started/worker",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/getting-started/worker.md",tags:[],version:"current",frontMatter:{},sidebar:"devGuide",previous:{title:"\ud83d\udca1 pnpm cheatsheet",permalink:"/hutch/docs/devs/getting-started/pnpm-cheatsheet"},next:{title:"External Systems",permalink:"/hutch/docs/category/external-systems"}},p={},d=[{value:"Installation",id:"installation",level:3},{value:"DB for logging",id:"db-for-logging",level:3},{value:"Building",id:"building",level:3},{value:"Adding and removing deps",id:"adding-and-removing-deps",level:3}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hutch-worker"},"Hutch Worker"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"First, make sure you install ",(0,a.kt)("a",{parentName:"p",href:"https://hatch.pypa.io/latest/install/"},(0,a.kt)("inlineCode",{parentName:"a"},"hatch")),"."),(0,a.kt)("p",null,"Run the following commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/HutchWorker"),"."),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("inlineCode",{parentName:"p"},"hatch")," installed, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch env create\n")),(0,a.kt)("p",null,"and this will set up your environment to use the worker with RabbitMQ and Postgres."),(0,a.kt)("p",null,"If you would like to set the worker up to work with another database, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch env create mysql\n")),(0,a.kt)("p",null,"for MySQL, or:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch env create sqlserver\n")),(0,a.kt)("p",null,"to work with SQL Server."),(0,a.kt)("h3",{id:"db-for-logging"},"DB for logging"),(0,a.kt)("p",null,"The worker writes logs to a database. It also writes to the standard output as a backup in case the connection fails. The creation of the logging database is handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"HutchManager")," normally, but if you want to work with the worker without the manager for development purposes, perform the following steps:"),(0,a.kt)("p",null,"At the root of the repo run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,a.kt)("p",null,"and you will get a fresh postgresql db."),(0,a.kt)("p",null,"Then in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/HutchWorker"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch run [env:]build-log-db -u <username> -p <password> -d <database> --drivername <drivername>\n")),(0,a.kt)("p",null,"Help can be found by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch run [env:]build-log-db --help\n")),(0,a.kt)("h3",{id:"building"},"Building"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hatch build\n")),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("p",null,"To add a shared library to the build, such as those in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory of the repo, in ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml"),", go to the section named ",(0,a.kt)("inlineCode",{parentName:"p"},"[tool.hatch.build.targets.wheel.force-include]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[tool.hatch.build.targets.sdist.force-include]")," and add the relative path to the packages you wish to include like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"../../lib/name_of_shared_lib = shared_lib"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended that you add your shared libs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," folder at the root of the repo. Make sure they contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file (which can be empty).")),(0,a.kt)("h3",{id:"adding-and-removing-deps"},"Adding and removing deps"),(0,a.kt)("p",null,"To add a dependency to the whole project, in ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml"),", go to ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"[project]")," and add the name of the package you wish to add to the list. You should also add a version number to get more repeatable builds."),(0,a.kt)("p",null,"If you want to only add dependencies to a non-default environment, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlserver"),", go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"[tool.hatch.envs.<env_name>]")," sections in ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," and add the dependency to the ",(0,a.kt)("inlineCode",{parentName:"p"},"extra-dependencies")," list. The other dependencies are inherited from the default environment."),(0,a.kt)("p",null,"Further information about adding dependencies to a hatch ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://hatch.pypa.io/latest/config/dependency/"},"on the hatch site")))}c.isMDXComponent=!0}}]);