"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=a,h=g["".concat(u,".").concat(c)]||g[c]||d[c]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(2203),a=(n(79),n(8570));const l={},o="Hutch Agent",i={unversionedId:"devs/getting-started/agent",id:"devs/getting-started/agent",title:"Hutch Agent",description:"Installation",source:"@site/docs/devs/getting-started/agent.md",sourceDirName:"devs/getting-started",slug:"/devs/getting-started/agent",permalink:"/hutch/docs/devs/getting-started/agent",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/getting-started/agent.md",tags:[],version:"current",frontMatter:{},sidebar:"devGuide",previous:{title:"Getting Started",permalink:"/hutch/docs/devs/getting-started/"},next:{title:"Hutch Manager",permalink:"/hutch/docs/devs/getting-started/manager"}},u={},p=[{value:"Installation",id:"installation",level:3},{value:"Running <code>hutchagent</code>",id:"running-hutchagent",level:3},{value:"DB for logging",id:"db-for-logging",level:3},{value:"Testing and Building",id:"testing-and-building",level:3},{value:"Adding and removing deps",id:"adding-and-removing-deps",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hutch-agent"},"Hutch Agent"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"First, make sure you install ",(0,a.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installation"},(0,a.kt)("inlineCode",{parentName:"a"},"poetry")),"."),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("inlineCode",{parentName:"p"},"poetry")," installed, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry install\n")),(0,a.kt)("p",null,"and this will set up your environment to use the agent with RabbitMQ."),(0,a.kt)("p",null,"If you would like to set the agent up to work as an Azure Function, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry install -E azure-queue\n")),(0,a.kt)("p",null,"and this will set it up to work with Azure Storage Queue."),(0,a.kt)("h3",{id:"running-hutchagent"},"Running ",(0,a.kt)("inlineCode",{parentName:"h3"},"hutchagent")),(0,a.kt)("p",null,"To run ",(0,a.kt)("inlineCode",{parentName:"p"},"hutchagent"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run hutchagent\n")),(0,a.kt)("p",null,"and use ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," to shut it down."),(0,a.kt)("h3",{id:"db-for-logging"},"DB for logging"),(0,a.kt)("p",null,"The agent writes logs to a database. It also writes to the standard output as a backup in case the connection fails. The creation of the logging database is handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"HutchManager")," normally, but if you want to work with the agent without the manager for development purposes, perform the following steps:"),(0,a.kt)("p",null,"At the root of the repo run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,a.kt)("p",null,"and you will get a fresh postgresql db."),(0,a.kt)("p",null,"Then in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/HutchAgent"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run build-log-db -u <username> -p <password> -d <database> --drivername <drivername>\n")),(0,a.kt)("p",null,"Help can be found by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run build-log-db --help\n")),(0,a.kt)("h3",{id:"testing-and-building"},"Testing and Building"),(0,a.kt)("p",null,"To run the tests and build ",(0,a.kt)("inlineCode",{parentName:"p"},"hutchagent"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"sdist")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wheel"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"poetry run tox\n")),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("h3",{id:"adding-and-removing-deps"},"Adding and removing deps"),(0,a.kt)("p",null,"To add a dependency, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# For requirements\npoetry add <package_name>\n# For dev-only\npoetry add --dev <package_name>\n")),(0,a.kt)("p",null,"To remove a dependency, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# For requirements\npoetry remove <package_name>\n# For dev-only\npoetry remove --dev <package_name>\n")))}d.isMDXComponent=!0}}]);