(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0ab6":function(e,t,r){var n=r("3053"),o=n.Global;function i(){return o.sessionStorage}function c(e){return i().getItem(e)}function a(e,t){return i().setItem(e,t)}function u(e){for(var t=i().length-1;t>=0;t--){var r=i().key(t);e(c(r),r)}}function s(e){return i().removeItem(e)}function l(){return i().clear()}e.exports={name:"sessionStorage",read:c,write:a,each:u,remove:s,clearAll:l}},"0e54":function(e,t,r){var n=r("3053"),o=n.Global,i=n.trim;e.exports={name:"cookieStorage",read:a,write:s,each:u,remove:l,clearAll:f};var c=o.document;function a(e){if(!e||!p(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(c.cookie.replace(new RegExp(t),"$1"))}function u(e){for(var t=c.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(i(t[r])){var n=t[r].split("="),o=unescape(n[0]),a=unescape(n[1]);e(a,o)}}function s(e,t){e&&(c.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function l(e){e&&p(e)&&(c.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function f(){u((function(e,t){l(t)}))}function p(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(c.cookie)}},2609:function(e,t,r){},"291b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:e.toggleMode}},[r("i",{staticClass:"fas fa-list"})]),r("div",{staticClass:"articles"},e._l(e.currentContents,(function(t){return r("Preview",{attrs:{doc:t,mode:e.previewMode}})})),1)])},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=(r("8ded"),r("e6c4")),a=r("2f62");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={components:{Preview:c["a"]},computed:s({},Object(a["c"])(["currentContents","pickedDoc","previewMode"]),{},Object(a["b"])(["rootCollection","currentCollection"])),data:function(){return{editor:void 0,delta:void 0}},methods:{toggleMode:function(){this.$store.commit("TOGGLE_PREVIEW_MODE")}}},f=l,p=(r("e4c5"),r("2877")),d=Object(p["a"])(f,n,o,!1,null,"8e8be5f4",null);t["default"]=d.exports},3053:function(e,t,r){(function(t){var r=c(),n=a(),o=u(),i="undefined"!==typeof window?window:t;function c(){return Object.assign?Object.assign:function(e,t,r,n){for(var o=1;o<arguments.length;o++)f(Object(arguments[o]),(function(t,r){e[r]=t}));return e}}function a(){if(Object.create)return function(e,t,n,o){var i=l(arguments,1);return r.apply(this,[Object.create(e)].concat(i))};{function e(){}return function(t,n,o,i){var c=l(arguments,1);return e.prototype=t,r.apply(this,[new e].concat(c))}}}function u(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function s(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function l(e,t){return Array.prototype.slice.call(e,t||0)}function f(e,t){d(e,(function(e,r){return t(e,r),!1}))}function p(e,t){var r=h(e)?[]:{};return d(e,(function(e,n){return r[n]=t(e,n),!1})),r}function d(e,t){if(h(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))return e[n]}function h(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function g(e){return e&&"[object Function]"==={}.toString.call(e)}function v(e){return e&&"[object Object]"==={}.toString.call(e)}e.exports={assign:r,create:n,trim:o,bind:s,slice:l,each:f,map:p,pluck:d,isList:h,isFunction:g,isObject:v,Global:i}}).call(this,r("c8ba"))},"369f":function(e,t,r){},"3c3f":function(e,t){e.exports={name:"memoryStorage",read:n,write:o,each:i,remove:c,clearAll:a};var r={};function n(e){return r[e]}function o(e,t){r[e]=t}function i(e){for(var t in r)r.hasOwnProperty(t)&&e(r[t],t)}function c(e){delete r[e]}function a(e){r={}}},4442:function(e,t,r){var n=r("3053"),o=n.Global;e.exports={name:"oldIE-userDataStorage",write:s,read:l,each:f,remove:p,clearAll:d};var i="storejs",c=o.document,a=v(),u=(o.navigator?o.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function s(e,t){if(!u){var r=g(e);a((function(e){e.setAttribute(r,t),e.save(i)}))}}function l(e){if(!u){var t=g(e),r=null;return a((function(e){r=e.getAttribute(t)})),r}}function f(e){a((function(t){for(var r=t.XMLDocument.documentElement.attributes,n=r.length-1;n>=0;n--){var o=r[n];e(t.getAttribute(o.name),o.name)}}))}function p(e){var t=g(e);a((function(e){e.removeAttribute(t),e.save(i)}))}function d(){a((function(e){var t=e.XMLDocument.documentElement.attributes;e.load(i);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(i)}))}var h=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function g(e){return e.replace(/^\d/,"___$&").replace(h,"___")}function v(){if(!c||!c.documentElement||!c.documentElement.addBehavior)return null;var e,t,r,n="script";try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+n+">document.w=window</"+n+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,r=e.createElement("div")}catch(o){r=c.createElement("div"),e=c.body}return function(t){var n=[].slice.call(arguments,0);n.unshift(r),e.appendChild(r),r.addBehavior("#default#userData"),r.load(i),t.apply(this,n),e.removeChild(r)}}},"497a":function(e,t,r){"use strict";var n=r("2609"),o=r.n(n);o.a},"49d7":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"editor-wrapper",class:{readOnly:e.readOnly}},[r("button",{on:{click:e.toggleEditMode}},[e._v("edit")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.readOnly,expression:"!readOnly"}],staticClass:"operations"},[r("button",{on:{click:e.createDoc}},[e._v("save as new")]),e.pickedDoc?r("button",{on:{click:e.saveDoc}},[e._v("save")]):e._e()]),r("div",{attrs:{id:"text-editor"}})])},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("9339"),a=r.n(c),u=(r("8ded"),r("e6c4")),s=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={components:{Preview:u["a"]},mounted:function(){var e=this,t=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],r={modules:{toolbar:t},placeholder:"Compose an epic...",readOnly:this.readOnly,theme:"snow"},n=document.querySelector("#text-editor"),o=new a.a(n,r);if(this.editor=o,o.on("text-change",(function(){e.delta=e.editor.getContents()})),this.pickedDoc){var i=JSON.parse(this.pickedDoc.deltaString);this.editor.setContents(i)}},computed:f({},Object(s["c"])(["currentContents","pickedDoc","readOnly"]),{},Object(s["b"])(["rootCollection","currentCollection"])),data:function(){return{editor:void 0,delta:void 0,previewMode:"card"}},watch:{readOnly:function(){!0===this.readOnly?this.editor.disable():this.editor.enable()},pickedDoc:{deep:!0,handler:function(){if(this.pickedDoc){var e=JSON.parse(this.pickedDoc.deltaString);this.editor.setContents(e)}else this.clearEditor()}}},methods:{toggleMode:function(){"card"===this.previewMode?this.previewMode="line":"line"===this.previewMode&&(this.previewMode="card")},toggleEditMode:function(){this.$store.commit("TOGGLE_MODE",this.doc)},clearEditor:function(){this.editor.setContents([]),this.editor.setText("")},readDocs:function(){this.$store.dispatch("readDocs")},createDoc:function(){this.$store.dispatch("writeDoc",{delta:this.delta})},saveDoc:function(){this.$store.dispatch("writeDoc",{delta:this.delta,docID:this.pickedDoc.id})}}},d=p,h=(r("b395"),r("2877")),g=Object(h["a"])(d,n,o,!1,null,null,null);t["default"]=g.exports},8111:function(e,t,r){e.exports=[r("add5"),r("ca7c"),r("4442"),r("0e54"),r("0ab6"),r("3c3f")]},"81a5":function(module,exports){"object"!==typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,(function(e){var t=meta[e];return"string"===typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function str(e,t){var r,n,o,i,c,a=gap,u=t[e];switch(u&&"object"===typeof u&&"function"===typeof u.toJSON&&(u=u.toJSON(e)),"function"===typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,c=[],"[object Array]"===Object.prototype.toString.apply(u)){for(i=u.length,r=0;r<i;r+=1)c[r]=str(r,u)||"null";return o=0===c.length?"[]":gap?"[\n"+gap+c.join(",\n"+gap)+"\n"+a+"]":"["+c.join(",")+"]",gap=a,o}if(rep&&"object"===typeof rep)for(i=rep.length,r=0;r<i;r+=1)"string"===typeof rep[r]&&(n=rep[r],o=str(n,u),o&&c.push(quote(n)+(gap?": ":":")+o));else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(o=str(n,u),o&&c.push(quote(n)+(gap?": ":":")+o));return o=0===c.length?"{}":gap?"{\n"+gap+c.join(",\n"+gap)+"\n"+a+"}":"{"+c.join(",")+"}",gap=a,o}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!==typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"===typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"===typeof r&&(indent=r);if(rep=t,t&&"function"!==typeof t&&("object"!==typeof t||"number"!==typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!==typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,n,o=e[t];if(o&&"object"===typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"===typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},"8ded":function(e,t,r){var n=r("e675"),o=r("8111"),i=[r("b904")];e.exports=n.createStore(o,i)},add5:function(e,t,r){var n=r("3053"),o=n.Global;function i(){return o.localStorage}function c(e){return i().getItem(e)}function a(e,t){return i().setItem(e,t)}function u(e){for(var t=i().length-1;t>=0;t--){var r=i().key(t);e(c(r),r)}}function s(e){return i().removeItem(e)}function l(){return i().clear()}e.exports={name:"localStorage",read:c,write:a,each:u,remove:s,clearAll:l}},afec:function(e,t,r){},b395:function(e,t,r){"use strict";var n=r("afec"),o=r.n(n);o.a},b904:function(e,t,r){function n(){return r("81a5"),{}}e.exports=n},ca7c:function(e,t,r){var n=r("3053"),o=n.Global;e.exports={name:"oldFF-globalStorage",read:c,write:a,each:u,remove:s,clearAll:l};var i=o.globalStorage;function c(e){return i[e]}function a(e,t){i[e]=t}function u(e){for(var t=i.length-1;t>=0;t--){var r=i.key(t);e(i[r],r)}}function s(e){return i.removeItem(e)}function l(){u((function(e,t){delete i[e]}))}},e4c5:function(e,t,r){"use strict";var n=r("369f"),o=r.n(n);o.a},e675:function(e,t,r){var n=r("3053"),o=n.slice,i=n.pluck,c=n.each,a=n.bind,u=n.create,s=n.isList,l=n.isFunction,f=n.isObject;e.exports={createStore:h};var p={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(r,n){e.call(t,t._deserialize(r),(n||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return h.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return h(this.storage,this.plugins,e)}};function d(){var e="undefined"==typeof console?null:console;if(e){var t=e.warn?e.warn:e.log;t.apply(e,arguments)}}function h(e,t,r){r||(r=""),e&&!s(e)&&(e=[e]),t&&!s(t)&&(t=[t]);var n=r?"__storejs_"+r+"_":"",h=r?new RegExp("^"+n):null,g=/^[a-zA-Z0-9_\-]*$/;if(!g.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var v={_namespacePrefix:n,_namespaceRegexp:h,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(n){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){var t=o(arguments,0),n=this;function i(){if(r)return c(arguments,(function(e,r){t[r]=e})),r.apply(n,t)}var a=[i].concat(t);return e.apply(n,a)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(n){r=e}return void 0!==r?r:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(s(e))c(e,(function(e){t._addPlugin(e)}));else{var r=i(this.plugins,(function(t){return e===t}));if(!r){if(this.plugins.push(e),!l(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!f(n))throw new Error("Plugins must return an object of function properties");c(n,(function(r,n){if(!l(r))throw new Error("Bad plugin property: "+n+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,n)}))}}},addStorage:function(e){d("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},b=u(v,p,{plugins:[]});return b.raw={},c(b,(function(e,t){l(e)&&(b.raw[t]=a(b,e))})),c(e,(function(e){b._addStorage(e)})),c(t,(function(e){b._addPlugin(e)})),b}},e6c4:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-wrapper",class:e.wrapperClass},[r("div",{attrs:{id:"doc-"+e.doc.id}}),r("div",{staticClass:"cover"}),r("div",{staticClass:"op-panel"},[r("div",{staticClass:"btns"},[r("button",{on:{click:e.toggleFavorite}},[r("i",{staticClass:"far fa-star"})]),r("button",{on:{click:e.viewDoc}},[r("i",{staticClass:"fas fa-eye"})]),r("button",{on:{click:e.editDoc}},[r("i",{staticClass:"fas fa-edit"})])])])])},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("9339"),a=r.n(c),u=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={props:{doc:{required:!0,type:Object},mode:{required:!1,type:String,default:"line"}},computed:l({},Object(u["c"])(["pickedDoc"]),{wrapperClass:function(){var e;return e=!!this.pickedDoc&&this.pickedDoc.id===this.doc.id,{picked:e,"preview-card":"card"===this.mode,"preview-line":"line"===this.mode}},createdTime:function(){var e,t=new Date(parseInt(this.doc.timeStamps[0]));return e="Created: ".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),e},lastModify:function(){var e,t=new Date(parseInt(this.doc.timeStamps[this.doc.timeStamps.length-1]));return e="Modified: ".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),e}}),mounted:function(){var e={readOnly:!0},t=document.querySelector("#doc-".concat(this.doc.id)),r=new a.a(t,e);this.delta=JSON.parse(this.doc.deltaString),r.setContents(this.delta)},data:function(){return{delta:void 0,textString:void 0}},methods:{toggleFavorite:function(){},viewDoc:function(){this.pickDoc(),this.$router.push("/editor")},pickDoc:function(){this.$store.commit("PICK_DOC",this.doc)},editDoc:function(){},deleteDoc:function(e){this.$store.dispatch("deleteDoc",this.doc),e.stopPropagation()}}},p=f,d=(r("497a"),r("2877")),h=Object(d["a"])(p,n,o,!1,null,null,null);t["a"]=h.exports}}]);
//# sourceMappingURL=about.8ca973ea.js.map