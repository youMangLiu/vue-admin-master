webpackJsonp([2],{517:function(t,e,n){n(979);var r=n(136)(n(713),n(987),"data-v-5e801943",null);t.exports=r.exports},552:function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=i(e),this.reject=i(n)}var i=n(206);t.exports.f=function(t){return new r(t)}},564:function(t,e,n){var r=n(137),i=n(49)("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},565:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},566:function(t,e,n){var r=n(67),i=n(60),o=n(552);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},567:function(t,e,n){var r=n(67),i=n(206),o=n(49)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}},568:function(t,e,n){var r,i,o,a=n(207),s=n(603),u=n(208),c=n(139),l=n(33),f=l.process,d=l.setImmediate,h=l.clearImmediate,p=l.MessageChannel,m=l.Dispatch,v=0,g={},b=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},y=function(t){b.call(t.data)};d&&h||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++v]=function(){s("function"==typeof t?t:Function(t),e)},r(v),v},h=function(t){delete g[t]},"process"==n(137)(f)?r=function(t){f.nextTick(a(b,t,1))}:m&&m.now?r=function(t){m.now(a(b,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=y,r=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",y,!1)):r="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:h}},596:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(599),o=r(i),a=n(138),s=r(a),u=n(631),c=r(u);n(140);s.default.defaults.headers.common.Authorization=localStorage.getItem("token"),s.default.interceptors.request.use(function(t){return c.default.start(),t},function(t){return o.default.reject(t)}),e.default=s.default},597:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(596),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={getUser:function(t,e){return i.default.get("/api/user",{params:t}).then(e)},delUser:function(t,e){return i.default.delete("/api/delete/"+t).then(e)},getRoomList:function(t,e){return i.default.get("/api/room",{params:t}).then(e)}}},598:function(t,e,n){"use strict";function r(t,e){for(var e=e-(t+"").length,n=0;n<e;n++)t="0"+t;return t}Object.defineProperty(e,"__esModule",{value:!0});var i=/([yMdhsm])(\1*)/g;e.default={getQueryStringByName:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e),r="";return null!=n&&(r=n[2]),e=null,n=null,null==r||""==r||"undefined"==r?"":r},formatDate:{format:function(t,e){return e=e||"yyyy-MM-dd",e.replace(i,function(e){switch(e.charAt(0)){case"y":return r(t.getFullYear(),e.length);case"M":return r(t.getMonth()+1,e.length);case"d":return r(t.getDate(),e.length);case"w":return t.getDay()+1;case"h":return r(t.getHours(),e.length);case"m":return r(t.getMinutes(),e.length);case"s":return r(t.getSeconds(),e.length)}})},parse:function(t,e){var n=e.match(i),r=t.match(/(\d)+/g);if(n.length==r.length){for(var o=new Date(1970,0,1),a=0;a<n.length;a++){var s=parseInt(r[a]);switch(n[a].charAt(0)){case"y":o.setFullYear(s);break;case"M":o.setMonth(s-1);break;case"d":o.setDate(s);break;case"h":o.setHours(s);break;case"m":o.setMinutes(s);break;case"s":o.setSeconds(s)}}return o}return null}}}},599:function(t,e,n){t.exports={default:n(600),__esModule:!0}},600:function(t,e,n){n(210),n(211),n(212),n(611),n(612),n(613),t.exports=n(66).Promise},601:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},602:function(t,e,n){var r=n(207),i=n(605),o=n(604),a=n(67),s=n(209),u=n(610),c={},l={},e=t.exports=function(t,e,n,f,d){var h,p,m,v,g=d?function(){return t}:u(t),b=r(n,f,e?2:1),y=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(h=s(t.length);h>y;y++)if((v=e?b(a(p=t[y])[0],p[1]):b(t[y]))===c||v===l)return v}else for(m=g.call(t);!(p=m.next()).done;)if((v=i(m,b,p.value,e))===c||v===l)return v};e.BREAK=c,e.RETURN=l},603:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},604:function(t,e,n){var r=n(89),i=n(49)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},605:function(t,e,n){var r=n(67);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},606:function(t,e,n){var r=n(49)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},607:function(t,e,n){var r=n(33),i=n(568).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,u="process"==n(137)(a);t.exports=function(){var t,e,n,c=function(){var r,i;for(u&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){a.nextTick(c)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve();n=function(){l.then(c)}}else n=function(){i.call(r,c)};else{var f=!0,d=document.createTextNode("");new o(c).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},608:function(t,e,n){var r=n(51);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},609:function(t,e,n){"use strict";var r=n(33),i=n(66),o=n(52),a=n(50),s=n(49)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},610:function(t,e,n){var r=n(564),i=n(49)("iterator"),o=n(89);t.exports=n(66).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},611:function(t,e,n){"use strict";var r,i,o,a,s=n(90),u=n(33),c=n(207),l=n(564),f=n(88),d=n(60),h=n(206),p=n(601),m=n(602),v=n(567),g=n(568).set,b=n(607)(),y=n(552),_=n(565),w=n(566),x=u.TypeError,k=u.process,S=u.Promise,M="process"==l(k),P=function(){},F=i=y.f,j=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n(49)("species")]=function(t){t(P,P)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof e}catch(t){}}(),T=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},U=function(t,e){if(!t._n){t._n=!0;var n=t._c;b(function(){for(var r=t._v,i=1==t._s,o=0;n.length>o;)!function(e){var n,o,a,s=i?e.ok:e.fail,u=e.resolve,c=e.reject,l=e.domain;try{s?(i||(2==t._h&&E(t),t._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===e.promise?c(x("Promise-chain cycle")):(o=T(n))?o.call(n,u,c):u(n)):c(r)}catch(t){l&&!a&&l.exit(),c(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&D(t)})}},D=function(t){g.call(u,function(){var e,n,r,i=t._v,o=L(t);if(o&&(e=_(function(){M?k.emit("unhandledRejection",i,t):(n=u.onunhandledrejection)?n({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=M||L(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},E=function(t){g.call(u,function(){var e;M?k.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),U(e,!0))},C=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw x("Promise can't be resolved itself");(e=T(t))?b(function(){var r={_w:n,_d:!1};try{e.call(t,c(C,r,1),c(R,r,1))}catch(t){R.call(r,t)}}):(n._v=t,n._s=1,U(n,!1))}catch(t){R.call({_w:n,_d:!1},t)}}};j||(S=function(t){p(this,S,"Promise","_h"),h(t),r.call(this);try{t(c(C,this,1),c(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(608)(S.prototype,{then:function(t,e){var n=F(v(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&U(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=c(C,t,1),this.reject=c(R,t,1)},y.f=F=function(t){return t===S||t===a?new o(t):i(t)}),f(f.G+f.W+f.F*!j,{Promise:S}),n(91)(S,"Promise"),n(609)("Promise"),a=n(66).Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var e=F(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!j),"Promise",{resolve:function(t){return w(s&&this===a?S:this,t)}}),f(f.S+f.F*!(j&&n(606)(function(t){S.all(t).catch(P)})),"Promise",{all:function(t){var e=this,n=F(e),r=n.resolve,i=n.reject,o=_(function(){var n=[],o=0,a=1;m(t,!1,function(t){var s=o++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--a||r(n))},i)}),--a||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=F(e),r=n.reject,i=_(function(){m(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},612:function(t,e,n){"use strict";var r=n(88),i=n(66),o=n(33),a=n(567),s=n(566);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},613:function(t,e,n){"use strict";var r=n(88),i=n(552),o=n(565);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},631:function(t,e,n){var r,i;!function(o,a){r=a,void 0!==(i="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=i)}(0,function(){function t(t,e,n){return t<e?e:t>n?n:t}function e(t){return 100*(-1+t)}function n(t,n,r){var i;return i="translate3d"===c.positionUsing?{transform:"translate3d("+e(t)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},i.transition="all "+n+"ms "+r,i}function r(t,e){return("string"==typeof t?t:a(t)).indexOf(" "+e+" ")>=0}function i(t,e){var n=a(t),i=n+e;r(n,e)||(t.className=i.substring(1))}function o(t,e){var n,i=a(t);r(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function a(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function s(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var u={};u.version="0.2.0";var c=u.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};u.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(c[e]=n);return this},u.status=null,u.set=function(e){var r=u.isStarted();e=t(e,c.minimum,1),u.status=1===e?null:e;var i=u.render(!r),o=i.querySelector(c.barSelector),a=c.speed,s=c.easing;return i.offsetWidth,l(function(t){""===c.positionUsing&&(c.positionUsing=u.getPositioningCSS()),f(o,n(e,a,s)),1===e?(f(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){f(i,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){u.remove(),t()},a)},a)):setTimeout(t,a)}),this},u.isStarted=function(){return"number"==typeof u.status},u.start=function(){u.status||u.set(0);var t=function(){setTimeout(function(){u.status&&(u.trickle(),t())},c.trickleSpeed)};return c.trickle&&t(),this},u.done=function(t){return t||u.status?u.inc(.3+.5*Math.random()).set(1):this},u.inc=function(e){var n=u.status;return n?("number"!=typeof e&&(e=(1-n)*t(Math.random()*n,.1,.95)),n=t(n+e,0,.994),u.set(n)):u.start()},u.trickle=function(){return u.inc(Math.random()*c.trickleRate)},function(){var t=0,e=0;u.promise=function(n){return n&&"resolved"!==n.state()?(0===e&&u.start(),t++,e++,n.always(function(){e--,0===e?(t=0,u.done()):u.set((t-e)/t)}),this):this}}(),u.render=function(t){if(u.isRendered())return document.getElementById("nprogress");i(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=c.template;var r,o=n.querySelector(c.barSelector),a=t?"-100":e(u.status||0),l=document.querySelector(c.parent);return f(o,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(r=n.querySelector(c.spinnerSelector))&&s(r),l!=document.body&&i(l,"nprogress-custom-parent"),l.appendChild(n),n},u.remove=function(){o(document.documentElement,"nprogress-busy"),o(document.querySelector(c.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&s(t)},u.isRendered=function(){return!!document.getElementById("nprogress")},u.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var l=function(){function t(){var n=e.shift();n&&n(t)}var e=[];return function(n){e.push(n),1==e.length&&t()}}(),f=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n,r=i.length,o=t.charAt(0).toUpperCase()+t.slice(1);r--;)if((n=i[r]+o)in e)return n;return t}function n(n){return n=t(n),o[n]||(o[n]=e(n))}function r(t,e,r){e=n(e),t.style[e]=r}var i=["Webkit","O","Moz","ms"],o={};return function(t,e){var n,i,o=arguments;if(2==o.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&r(t,n,i);else r(t,o[1],o[2])}}();return u})},713:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(214),o=r(i),a=n(598),s=r(a),u=n(597),c=r(u);e.default={data:function(){return{filters:{unick:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{unick:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""},addFormVisible:!1,addLoading:!1,addFormRules:{unick:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{name:"",sex:-1,age:0,birth:"",addr:""}}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.page};""!==this.filters.unick&&(e.unick=this.filters.unick),this.listLoading=!0,c.default.getUser(e,function(e){t.users=e.data.list,t.total=parseInt(e.data.count),t.listLoading=!1}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){this.page=t,this.loadData()},handleDel:function(t,e){var n=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){n.listLoading=!0,c.default.delUser(e.uid,function(t){n.listLoading=!1,n.$notify({message:t.data.msg}),n.loadData()})}).catch(function(){n.$notify({message:"删除失败"})})},handleEdit:function(t,e){this.editFormVisible=!0,this.editForm=(0,o.default)({},e)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},editSubmit:function(){var t=this;this.$refs.editForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var e=(0,o.default)({},t.editForm);e.birth=e.birth&&""!=e.birth?s.default.formatDate.format(new Date(e.birth),"yyyy-MM-dd"):"",editUser(e).then(function(e){t.editLoading=!1,t.$message({message:"提交成功",type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.getUsers()})})})},addSubmit:function(){var t=this;this.$refs.addForm.validate(function(e){e&&t.$confirm("确认提交吗？","提示",{}).then(function(){t.addLoading=!0;var e=(0,o.default)({},t.addForm);e.birth=e.birth&&""!=e.birth?s.default.formatDate.format(new Date(e.birth),"yyyy-MM-dd"):"",addUser(e).then(function(e){t.addLoading=!1,t.$message({message:"提交成功",type:"success"}),t.$refs.addForm.resetFields(),t.addFormVisible=!1,t.getUsers()})})})},selsChange:function(t){this.sels=t},batchRemove:function(){var t=this,e=this.sels.map(function(t){return t.uid}).toString(),n=this.sels.map(function(t){return t.uuid}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){t.listLoading=!0;var r={uids:e,uuids:n};batchRemoveUser(r).then(function(e){t.listLoading=!1,t.$message({message:"删除成功",type:"success"}),t.getUsers()})}).catch(function(){})}}}},720:function(t,e,n){e=t.exports=n(511)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Table.vue",sourceRoot:""}])},979:function(t,e,n){var r=n(720);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(512)("3e67bde8",r,!0)},987:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[n("el-form",{attrs:{inline:!0,model:t.filters}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"姓名"},model:{value:t.filters.unick,callback:function(e){t.$set(t.filters,"unick",e)},expression:"filters.unick"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.loadData}},[t._v("查询")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.users,"highlight-current-row":""},on:{"selection-change":t.selsChange}},[n("el-table-column",{attrs:{prop:"uid",label:"序号",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"uuid",label:"游戏ID",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"unick",label:"用户昵称",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"uphone",label:"手机号",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return["error"===t.row.uface?n("div",[n("img",{attrs:{src:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",alt:"",height:"50px"}})]):n("div",[n("img",{attrs:{src:t.row.uface,alt:"",height:"50px"}})])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"uemail",label:"邮箱",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"usex",label:"性别",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"uvip",label:"vip等级",width:"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"u_token",label:"游客key",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"u_type",label:"游客",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"用户状态",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"regist_ip",label:"注册地址",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"regist_time",label:"注册时间",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"login_ip",label:"登录ip",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"login_time",label:"登录时间",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ugold",label:"金币数量",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ubank",label:"保险柜(银行)金币数量",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ucard",label:"房卡数量",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"roomid",label:"当前所在房间",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.handleDel(e.$index,e.row)}}},[t._v("\n                    移除\n                ")])]}}])})],1),t._v(" "),n("el-col",{staticClass:"toolbar",attrs:{span:24}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.17872b8521c57d810871.js.map