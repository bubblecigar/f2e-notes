(function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i={app:0},c=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8ca973ea"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ebce6e78"}[e]+".css",i=s.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/f2e-notes/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("User")]),e._v("|\n    "),n("router-link",{attrs:{to:"/editor"}},[e._v("Editor")]),e._v("|\n    "),n("router-link",{attrs:{to:"/articles"}},[e._v("Articles")])],1),n("router-view")],1)},i=[],c={},a=c,s=(n("5c0b"),n("2877")),u=Object(s["a"])(a,o,i,!1,null,null,null),l=u.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.signUp}},[e._v("signUp")]),n("button",{on:{click:e.logIn}},[e._v("logIn")]),n("button",{on:{click:e.signOut}},[e._v("signOut")]),n("span",[e._v("loginMsg:"+e._s(e.loginMsg))]),e.currentUser?n("span",[e._v("currentUser:"+e._s(e.currentUser.email))]):e._e()])},f=[],m=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),g=n("2f62");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(m["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={data:function(){return{email:"",password:""}},computed:v({},Object(g["c"])(["currentUser","loginMsg"])),methods:{signUp:function(){this.$store.dispatch("signUp",{email:this.email,password:this.password})},logIn:function(){this.$store.dispatch("logIn",{email:this.email,password:this.password})},signOut:function(){this.$store.dispatch("signOut")}}},O=b,y=(n("6d2c"),Object(s["a"])(O,d,f,!1,null,"78c94a42",null)),_=y.exports,w=n("59ca"),S=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyAny1czFKbCJFQkTJ-ZBmilKNg2PKW4TMk",authDomain:"f2e-notes.firebaseapp.com",databaseURL:"https://f2e-notes.firebaseio.com",projectId:"f2e-notes",storageBucket:"f2e-notes.appspot.com",messagingSenderId:"462440924352",appId:"1:462440924352:web:9f29b3799311defbaa9925"});w["initializeApp"](S);var E=w;r["a"].use(p["a"]);var C=new p["a"]({routes:[{path:"/",name:"home",component:_},{path:"/editor",name:"editor",component:function(){return n.e("about").then(n.bind(null,"49d7"))},meta:{requiresAuth:!0}},{path:"/articles",name:"articles",component:function(){return n.e("about").then(n.bind(null,"291b"))},meta:{requiresAuth:!0}}]});C.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth})),o=E.auth().currentUser;r&&!o?n("/"):n()}));var P=C;r["a"].use(g["a"]),E.auth().onAuthStateChanged((function(e){U.commit("SET_CURRENT_USER",e),U.getters.rootCollection&&U.getters.rootCollection.onSnapshot((function(e){U.dispatch("readDocs")}))}));var T,U=new g["a"].Store({state:{currentUser:null,loginMsg:null,currentCollections:[],currentContents:[],previewMode:"card",pickedDoc:null,readOnly:!0},getters:{rootCollection:function(e){return e.currentUser?E.firestore().collection("users").doc("uid").collection(e.currentUser.uid):null},currentCollection:function(e,t){if(!e.currentUser)return null;if(!e.currentCollections.length)return t.rootCollection;var n=e.currentCollections.join("/sub/");return t.rootCollection.doc("/sub/".concat(n))}},mutations:{SET_CURRENT_USER:function(e,t){e.currentUser=t},SET_LOGIN_MSG:function(e,t){e.loginMsg=t},CLEAR_CURRENT_CONTENTS:function(e){e.currentContents.splice(0)},PICK_DOC:function(e,t){e.pickedDoc=t},DROP_DOC:function(e){e.pickedDoc=null},TOGGLE_MODE:function(e){e.readOnly=!e.readOnly},TOGGLE_PREVIEW_MODE:function(e){"card"===e.previewMode?e.previewMode="line":"line"===e.previewMode&&(e.previewMode="card")}},actions:{deleteDoc:function(e,t){e.commit("DROP_DOC"),E.firestore().doc(t.fullPath).delete().then((function(){console.log("Document deleted")})).catch((function(e){console.log(e)}))},readDocs:function(e){e.commit("CLEAR_CURRENT_CONTENTS"),e.getters.currentCollection.get().then((function(t){t.docs.forEach((function(t){e.state.currentContents.push(t.data())}))}))},writeDoc:function(e,t){var n=t.delta,r=t.docID;r||(r="".concat(Date.now()));var o=JSON.stringify(n),i=e.getters.currentCollection;i.doc(r).get().then((function(t){if(t.exist)i.doc(r).update({timeStamps:E.firestore.FieldValue.arrayUnion("".concat(Date.now())),deltaString:o});else{var n={id:r,creator:e.state.currentUser.email,timeStamps:[r],deltaString:o,fullPath:t.ref.path};i.doc(r).set(n),e.commit("PICK_DOC",n)}})).catch((function(e){console.log(e)}))},signUp:function(e,t){var n=t.email,r=t.password;E.auth().createUserWithEmailAndPassword(n,r).then((function(t){e.commit("SET_LOGIN_MSG",{msg:"Account  has been successfully created!",type:"success"})})).catch((function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})}))},logIn:function(e,t){var n=t.email,r=t.password;E.auth().signInWithEmailAndPassword(n,r).then((function(t){e.commit("SET_LOGIN_MSG",{msg:"Successfully sign in!",type:"success"})})).catch((function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})}))},signOut:function(e){E.auth().signOut().then((function(t){e.commit("SET_LOGIN_MSG",{msg:"Successfully sign out.",type:"success"})})).catch((function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})}))}}}),j=U;n("9339");r["a"].config.productionTip=!1,E.auth().onAuthStateChanged((function(e){T||(T=new r["a"]({el:"#app",router:P,store:j,render:function(e){return e(l)}}))}))},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"6d2c":function(e,t,n){"use strict";var r=n("929e"),o=n.n(r);o.a},"929e":function(e,t,n){},e332:function(e,t,n){}});
//# sourceMappingURL=app.23c22da5.js.map