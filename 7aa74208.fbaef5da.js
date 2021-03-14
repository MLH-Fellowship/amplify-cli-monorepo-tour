(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,u=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(u,l(l({ref:t},m),{},{components:n})):a.a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(114)),o={id:"amplify-env",title:"Amplify Multienv",sidebar_label:"Amplify Multienv",slug:"/amplify-cli/amplify-env"},l={unversionedId:"amplify-cli/amplify-env",id:"amplify-cli/amplify-env",isDocsHomePage:!1,title:"Amplify Multienv",description:"Amplify CLI supports creating multiple backend environments. Each Amplify backend environment is a container for the categories added to your project. You can find more information about multi-environment feature here.",source:"@site/docs/amplify-cli/amplify-env.md",slug:"/amplify-cli/amplify-env",permalink:"/amplify-cli-monorepo-tour/docs/amplify-cli/amplify-env",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-cli/amplify-env.md",version:"current",sidebar_label:"Amplify Multienv",sidebar:"docs",previous:{title:"Amplify CLI Package",permalink:"/amplify-cli-monorepo-tour/docs/amplify-cli/"}},c=[{value:"<code>add.ts</code>",id:"addts",children:[]},{value:"<code>checkout.ts</code>",id:"checkoutts",children:[]},{value:"<code>get.ts</code>",id:"getts",children:[]},{value:"<code>import.ts</code>",id:"importts",children:[]},{value:"<code>list.ts</code>",id:"listts",children:[]},{value:"<code>pull.ts</code>",id:"pullts",children:[]},{value:"<code>remove.ts</code>",id:"removets",children:[]}],m={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Amplify CLI supports creating multiple backend environments. Each Amplify backend environment is a container for the categories added to your project. You can find more information about multi-environment feature ",Object(r.b)("a",{parentName:"p",href:"https://docs.amplify.aws/cli/teams/overview"},"here"),"."),Object(r.b)("p",null,"The code for multi-environment resides in the ",Object(r.b)("inlineCode",{parentName:"p"},"packages/amplify-cli/src/commands/env")," directory. It has the following files for each command -"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 add.ts\n\u251c\u2500\u2500 checkout.ts\n\u251c\u2500\u2500 get.ts\n\u251c\u2500\u2500 import.ts\n\u251c\u2500\u2500 list.ts\n\u251c\u2500\u2500 pull.ts\n\u2514\u2500\u2500 remove.ts\n")),Object(r.b)("p",null,"The code in these files mostly uses functions defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"context")," object. Following is the overview of what each file is responsible for and how it works."),Object(r.b)("h3",{id:"addts"},Object(r.b)("inlineCode",{parentName:"h3"},"add.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env add"),", which is essentially ",Object(r.b)("inlineCode",{parentName:"li"},"amplify init"),". So, this file just calls the ",Object(r.b)("inlineCode",{parentName:"li"},"init")," function.")),Object(r.b)("h3",{id:"checkoutts"},Object(r.b)("inlineCode",{parentName:"h3"},"checkout.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env checkout <envname>"),"."),Object(r.b)("li",{parentName:"ul"},"It first checks the input to make sure a valid environment name has been passed. The ",Object(r.b)("inlineCode",{parentName:"li"},"context")," object is used to get the list of all available environment (",Object(r.b)("inlineCode",{parentName:"li"},"context.amplify.getEnvDetails()"),")."),Object(r.b)("li",{parentName:"ul"},"Then, it uses the ",Object(r.b)("inlineCode",{parentName:"li"},"stateManager")," from ",Object(r.b)("inlineCode",{parentName:"li"},"amplify-cli-core")," to set the current environment to the environment name provided."),Object(r.b)("li",{parentName:"ul"},"Once that is done, it sets up the ",Object(r.b)("inlineCode",{parentName:"li"},"context")," object to reflect the new environment."),Object(r.b)("li",{parentName:"ul"},"Finally, it initializes each ",Object(r.b)("inlineCode",{parentName:"li"},"providerModule")," with the settings for new environment.")),Object(r.b)("h3",{id:"getts"},Object(r.b)("inlineCode",{parentName:"h3"},"get.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env get <envname>"),", through which you can list all details for ",Object(r.b)("inlineCode",{parentName:"li"},"<envname>")," environment. Details include the AWS Region, IAM roles, S3 bucket and stack information."),Object(r.b)("li",{parentName:"ul"},"It gets a list of environments using ",Object(r.b)("inlineCode",{parentName:"li"},"getEnvDetails()")," and performs a search for the input ",Object(r.b)("inlineCode",{parentName:"li"},"<envname>"),". If found, it uses the ",Object(r.b)("inlineCode",{parentName:"li"},"printEnvInfo")," function found in ",Object(r.b)("inlineCode",{parentName:"li"},"packages/amplify-cli/src/commands/helpers/envUtils.ts"),".")),Object(r.b)("h3",{id:"importts"},Object(r.b)("inlineCode",{parentName:"h3"},"import.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env import <envname>"),", through which you can import an existing environment from the cloud."),Object(r.b)("li",{parentName:"ul"},"It parses the input command, and checks if the config provided by the environment is valid."),Object(r.b)("li",{parentName:"ul"},"Then, it uses the ",Object(r.b)("inlineCode",{parentName:"li"},"getLocalAWSInfo")," function defined in ",Object(r.b)("inlineCode",{parentName:"li"},"stateManager")," to actually fetch the specified environment."),Object(r.b)("li",{parentName:"ul"},"Finally, it adds the fetched environment to the current context.")),Object(r.b)("h3",{id:"listts"},Object(r.b)("inlineCode",{parentName:"h3"},"list.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env list"),", through which you list all existing environments currently available."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"getEnvDetails")," function from current ",Object(r.b)("inlineCode",{parentName:"li"},"context")," object is used to get the list of all available environment (",Object(r.b)("inlineCode",{parentName:"li"},"context.amplify.getEnvDetails()"),")."),Object(r.b)("li",{parentName:"ul"},"After that, it formats and prints the data to the console.")),Object(r.b)("h3",{id:"pullts"},Object(r.b)("inlineCode",{parentName:"h3"},"pull.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env pull <envname>"),", through which you can pull the current environment from the cloud. If the ",Object(r.b)("inlineCode",{parentName:"li"},"--restore")," flag is specified, it will overwrite any local changes."),Object(r.b)("li",{parentName:"ul"},"The inner workings of this are similar to the ",Object(r.b)("inlineCode",{parentName:"li"},"import")," command. It uses the ",Object(r.b)("inlineCode",{parentName:"li"},"context")," object's ",Object(r.b)("inlineCode",{parentName:"li"},"constructExeInfo")," function to fetch the latest changes to the current environment from the cloud, and then re-initializes the current environment based on the fetched data.")),Object(r.b)("h3",{id:"removets"},Object(r.b)("inlineCode",{parentName:"h3"},"remove.ts")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Used for ",Object(r.b)("inlineCode",{parentName:"li"},"amplify env remove <envname>"),", through which you can remove both the local and the cloud environments, including all provisioned services and resources."),Object(r.b)("li",{parentName:"ul"},"First, it checks whether the envname provided is a valid one. Next, it asks for confirmation from the user through the ",Object(r.b)("inlineCode",{parentName:"li"},"getConfirmation()")," function."),Object(r.b)("li",{parentName:"ul"},"Finally, it uses the ",Object(r.b)("inlineCode",{parentName:"li"},"removeFromCloud()")," function from ",Object(r.b)("inlineCode",{parentName:"li"},"context")," to delete resources through CloudFormation and uses ",Object(r.b)("inlineCode",{parentName:"li"},"stateManager.setLocalAWSInfo")," to remove the environment locally.")))}s.isMDXComponent=!0}}]);