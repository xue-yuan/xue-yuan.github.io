(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:"background: "+(t.dark?t.darkTheme:t.lightTheme)+"; transition-delay: 0.01s"},[a("v-app-bar",{attrs:{app:"",dark:t.dark}},[a("div",{staticClass:"ml-auto"},[a("a",{attrs:{to:"/"}},[t._v("🧬")])]),a("v-spacer"),a("div",{staticClass:"ml-auto my-auto pt-4 mr-2"},[a("keep-alive",[a("v-switch",{attrs:{disabled:"",label:(t.dark?"Light":"Dark")+" Mode",inset:"",color:"white",dark:t.dark},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1)],1)],1),a("v-content",[a("v-container",[a("router-view",{attrs:{dark:t.dark}})],1)],1),a("v-footer")],1)},o=[],i={name:"App",components:{},data:function(){return{dark:!1,darkTheme:"#212121",lightTheme:"#FFFFFF"}},methods:{},computed:{}},s=i,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),p=a("40dc"),v=a("a523"),f=a("a75b"),h=a("553a"),b=a("2fa4"),m=a("b73d"),k=Object(l["a"])(s,n,o,!1,null,null,null),g=k.exports;d()(k,{VApp:u["a"],VAppBar:p["a"],VContainer:v["a"],VContent:f["a"],VFooter:h["a"],VSpacer:b["a"],VSwitch:m["a"]});var w=a("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test"},[a("h1",[t._v("This is test page.")])])}],T={name:"Test"},C=T,O=Object(l["a"])(C,y,x,!1,null,null,null),V=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile py-12"},[a("v-card",{staticClass:"mx-auto",attrs:{hover:"",shaped:"","max-width":"900",dark:t.dark}},[a("v-card-text",{staticClass:"pb-0 px-10 pt-5"},[a("p",[t._v("xueyuan.dev")])]),a("v-tabs",{staticClass:"px-5 pb-10",attrs:{color:"teal lighten-1","slider-color":"teal lighten-1",right:"",dark:t.dark}},[a("v-tab",{attrs:{dark:t.dark}},[t._v("About")]),a("v-tab",{attrs:{dark:t.dark}},[t._v("Project")]),a("v-tab",{attrs:{dark:t.dark}},[t._v("Article")]),a("v-tab-item",{attrs:{"background-color":"primary"}},[a("v-container",{attrs:{dark:t.dark}},[a("v-card-text",{attrs:{dark:t.dark}},[a("p",{staticClass:"display-1 teal--text"},[t._v("Denon⚡️")]),a("p",{staticClass:"grey--text"},[t._v("I code, therefore I am.")]),a("div",{staticClass:"text-center"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"pink lighten-2",dark:"",to:"https://github.com/xue-yuan"}},[t._v(" GITHUB "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fab fa-github")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"amber lighten-3",dark:"",to:"https://linkedin.com/in/denon9527"}},[t._v(" LINKEDIN "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fab fa-linkedin")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"green lighten-3",dark:"",to:"https://www.instagram.com/___xueyuan"}},[t._v(" INSTAGRAM "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fab fa-instagram")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"indigo lighten-2",dark:"",to:"https://open.spotify.com/user/uisuell"}},[t._v(" SPOTIFY "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fab fa-spotify")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"purple lighten-3",dark:"",to:"https://medium.com/@denon.d"}},[t._v(" MEDIUM "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fab fa-medium")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"red lighten-3",dark:"",to:"https://blog.xueyuan.dev"}},[t._v(" BLOG "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fas fa-mug-hot")])],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"min-width":"150",color:"blue lighten-2",dark:"",to:"mailto://denon@xueyuan.dev"}},[t._v(" MAIL ME "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("fas fa-envelope")])],1)],1)],1)],1)])],1)],1),a("v-tab-item",{staticClass:"text-center",style:"background: "+(t.dark?t.darkTheme:t.lightTheme)+";"}),a("v-tab-item",{style:"background: "+(t.dark?t.darkTheme:t.lightTheme)+";"})],1)],1)],1)},A=[],F={name:"Profile",props:["dark"],data:function(){return{darkTheme:"#212121",lightTheme:"#FAFAFA"}},methods:{}},P=F,I=a("8336"),S=a("b0af"),E=a("99d9"),M=a("62ad"),N=a("132d"),B=a("0fd9"),$=a("71a3"),D=a("c671"),L=a("fe57"),G=Object(l["a"])(P,j,A,!1,null,null,null),U=G.exports;d()(G,{VBtn:I["a"],VCard:S["a"],VCardText:E["a"],VCol:M["a"],VContainer:v["a"],VIcon:N["a"],VRow:B["a"],VTab:$["a"],VTabItem:D["a"],VTabs:L["a"]}),r["a"].use(_["a"]);var J=[{path:"*",name:"Unknown",component:U},{path:"/",name:"Profile",component:U},{path:"/test",name:"Test",component:V},{path:"/http*",beforeEnter:function(t){window.open(t.fullPath.substring(1),"_blank")}},{path:"/mailto*",beforeEnter:function(t){window.open(t.fullPath.substring(1),"_blank")}}],R=new _["a"]({routes:J}),q=R,H=a("2f62");r["a"].use(H["a"]);var K=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=(a("15f5"),a("f309"));r["a"].use(Y["a"]);var z=new Y["a"]({icons:{iconfont:"fa"}});r["a"].config.productionTip=!1,new r["a"]({router:q,store:K,vuetify:z,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.53959b68.js.map