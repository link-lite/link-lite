"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[199],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(2203),r=(n(79),n(8570));const i={sidebar_position:1},o="Hutch Manager",l={unversionedId:"users/getting-started/configuration/manager",id:"users/getting-started/configuration/manager",title:"Hutch Manager",description:"The app can be configured in any standard way an ASP.NET Core application can. Typically from the Azure Portal (Environment variables) or an appsettings.json.",source:"@site/docs/users/getting-started/configuration/manager.md",sourceDirName:"users/getting-started/configuration",slug:"/users/getting-started/configuration/manager",permalink:"/hutch/docs/users/getting-started/configuration/manager",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/users/getting-started/configuration/manager.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userGuide",previous:{title:"Configuration",permalink:"/hutch/docs/category/configuration"},next:{title:"Hutch Agent",permalink:"/hutch/docs/users/getting-started/configuration/agent"}},s={},u=[{value:"Available values and defaults",id:"available-values-and-defaults",level:2},{value:"Sample Production Configuration guidance",id:"sample-production-configuration-guidance",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hutch-manager"},"Hutch Manager"),(0,r.kt)("p",null,"The app can be configured in any standard way an ASP.NET Core application can. Typically from the Azure Portal (Environment variables) or an ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,r.kt)("h2",{id:"available-values-and-defaults"},"Available values and defaults"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ConnectionStrings:\n  Default: "" # the main application SQL Server database\nSerilog:\n  # ...\nOutboundEmail:\n  ServiceName: Hutch\n  FromName: No Reply\n  FromAddress: noreply@example.com\n  ReplyToAddress: ""\n  Provider: local\n\n  # If Provider == "local"\n  LocalPath: ~/temp\n\n  # If Provider == "sendgrid"\n  SendGridApiKey: ""\n\nActivitySourcePolling:\n  PollingInterval: 5 # set to a negative value will disable polling altogether\n\nRquestTaskApi:\n  BaseEndpoint: "bcos-rest/api/task"\n  QueueStatusEndpoint: "queue"\n  FetchQueryEndpoint: "nextjob"\n  SubmitResultEndpoint: "result"\n  Username: ""\n  Password: ""\n\nJobQueue:\n  HostName: ""\n  Port: 5672\n  UserName: "guest"\n  Password: "guest"\n\n# Opt in feature flags\n# sometimes features here are works in progress\nFeatureManagement:\n  UseROCrates: false # WIP\n  AllowFreeRegistration: false # By default, the app uses an Allowlist for new account registration; setting this to `true` bypasses that.\n')),(0,r.kt)("h2",{id:"sample-production-configuration-guidance"},"Sample Production Configuration guidance"),(0,r.kt)("p",null,"Set the environment to ",(0,r.kt)("inlineCode",{parentName:"p"},"Production"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_ENVIRONMENT=Production"))),(0,r.kt)("p",null,"Set the SSL certificates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_Kestrel__Certificates__Default__Path=<path>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"path"),": the path to the ",(0,r.kt)("inlineCode",{parentName:"li"},".pem")," file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_Kestrel__Certificates__Default__KeyPath=<path>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"path"),": the path to the ",(0,r.kt)("inlineCode",{parentName:"li"},".key")," file"))),(0,r.kt)("li",{parentName:"ul"},"If you are using Docker, these paths must be the paths to the certs ",(0,r.kt)("strong",{parentName:"li"},"inside the container"),". You will also need to mount the location of the certificate to the container. e.g. the directory for the certificate could be ",(0,r.kt)("inlineCode",{parentName:"li"},"/certs")," inside the container.")),(0,r.kt)("p",null,"Set the database connection string as an environment variable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_ConnectionStrings__Default=Host=<host>;Username=<username>;Port=<port>;Password=<password>;Database=<db>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host"),": the URL to your database server. If running in docker-compose, use the DB service name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username"),": the username for the DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password"),": the password for the DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port"),": the port number for the DB, e.g. 5432 for postgres"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database"),": the name of the DB on the server")))),(0,r.kt)("p",null,"Set the message queue credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__HostName=<host name>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the host of the rabbitmq server. If using docker-compose, use the queue service name."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__UserName=<username>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the username of the message queue. NB: use the same one from ",(0,r.kt)("a",{parentName:"li",href:"#message-queue"},"Message Queue")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__Password=<password>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the password of the message queue. NB: use the same one from ",(0,r.kt)("a",{parentName:"li",href:"#message-queue"},"Message Queue"))))))}c.isMDXComponent=!0}}]);