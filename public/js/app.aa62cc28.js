(function(e){function t(t){for(var n,o,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==u[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},u={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c4d46242","chunk-2d21d4e4":"1f7f99c2","chunk-a226b712":"abdd2d4d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1,"chunk-a226b712":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"881ae61a","chunk-2d21d4e4":"31d6cfe0","chunk-a226b712":"b2d942c6"}[e]+".css",u=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===u))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===n||l===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}u[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container"},[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)],1)},u=[],a=(r("d3b7"),r("5530")),s=r("2f62"),c={components:{Navbar:function(){return r.e("chunk-2d21d4e4").then(r.bind(null,"d178"))},Errors:function(){return r.e("chunk-a226b712").then(r.bind(null,"df21"))}},computed:Object(a["a"])({},Object(s["c"])(["error"]))},i=c,l=r("2877"),f=Object(l["a"])(i,o,u,!1,null,null,null),p=f.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},h=[],g={name:"Home",components:{}},b=g,v=Object(l["a"])(b,m,h,!1,null,null,null),w=v.exports;n["default"].use(d["a"]);var y=[{path:"/",name:"Home",component:w,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return r.e("about").then(r.bind(null,"a55b"))},meta:{requiresAuth:!1}},{path:"/register",name:"register",component:function(){return r.e("about").then(r.bind(null,"73cf"))},meta:{requiresAuth:!1}},{path:"/profile",name:"profile",component:function(){return r.e("about").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}],_=new d["a"]({mode:"history",base:"/",routes:y}),k=_,O=(r("96cf"),r("1da1")),j=r("7338"),x=r.n(j),A={token:localStorage.getItem("token")||"",user:{},status:"",error:null},S={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},E={login:function(e,t){var r=e.commit;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("auth_request"),e.prev=1,e.next=4,x.a.post("/api/users/login",t);case 4:return n=e.sent,n.data.success&&(o=n.data.token,u=n.data.user,localStorage.setItem("token",o),x.a.defaults.headers.common["Authorization"]=o,r("auth_success",o,u)),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](1),r("auth_error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},register:function(e,t){var r=e.commit;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r("register_request"),e.next=4,x.a.post("/api/users/register",t);case 4:return n=e.sent,void 0!==n.data.success&&r("register_success"),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](0),r("register_err",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(e){var t=e.commit;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return t("logout"),delete x.a.defaults.headers.common["Authorization"],e.abrupt("return");case 5:case"end":return e.stop()}}),e)})))()},getProfile:function(e){var t=e.commit;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("profile_request"),e.next=3,x.a.get("/api/users/profile");case 3:return r=e.sent,t("user_profile",r.data.user),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()}},q={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success"},register_request:function(e){e.status="loading"},register_success:function(e){e.status="success"},logout:function(e){e.token="",e.status="",e.user=""},profile_request:function(e){e.staus="loading"},user_profile:function(e,t){e.user=t},auth_error:function(e,t){e.error=t.response.data.msg},register_err:function(e,t){e.error=t.response.data.msg}},P={state:A,getters:S,actions:E,mutations:q};n["default"].use(s["a"]);var C=new s["a"].Store({modules:{Auth:P},state:{},mutations:{},actions:{}}),R=r("cca1"),T=r.n(R);r("8842");n["default"].use(T.a),n["default"].config.productionTip=!1,n["default"].prototype.$http=x.a;var N=localStorage.getItem("token");N&&(n["default"].prototype.$http.defaults.headers.common["Authorization"]=N),new n["default"]({router:k,store:C,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.aa62cc28.js.map