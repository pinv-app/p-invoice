!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("pinv-inovice",[],e):"object"==typeof exports?exports["pinv-inovice"]=e():t["pinv-inovice"]=e()}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=126)}([function(t,e,n){var r=n(19),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(38),o=n(43);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(5),o=n(39),i=n(40),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(0).Symbol;t.exports=r},function(t,e,n){var r=n(66),o=n(67),i=n(68),a=n(69),u=n(70);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(28);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(2)(Object,"create");t.exports=r},function(t,e,n){var r=n(84);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(17);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(51),o=n(58),i=n(26);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(2)(n(0),"Map");t.exports=r},function(t,e,n){var r=n(76),o=n(83),i=n(85),a=n(86),u=n(87);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(1),o=n(17),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(3),o=n(11);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(53),o=n(4),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,n){(function(t){var r=n(0),o=n(54),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,n(23)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(55),o=n(56),i=n(57),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},function(t,e,n){var r=n(18),o=n(13);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(6),o=n(71),i=n(72),a=n(73),u=n(74),c=n(75);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(88),o=n(4);t.exports=function t(e,n,i,a,u){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,i,a,t,u))}},function(t,e,n){var r=n(89),o=n(92),i=n(93);t.exports=function(t,e,n,a,u,c){var s=1&n,f=t.length,p=e.length;if(f!=p&&!(s&&p>f))return!1;var l=c.get(t),v=c.get(e);if(l&&v)return l==e&&v==t;var b=-1,_=!0,d=2&n?new r:void 0;for(c.set(t,e),c.set(e,t);++b<f;){var h=t[b],y=e[b];if(a)var x=s?a(y,h,b,e,t,c):a(h,y,b,t,e,c);if(void 0!==x){if(x)continue;_=!1;break}if(d){if(!o(e,(function(t,e){if(!i(d,e)&&(h===t||u(h,t,n,a,c)))return d.push(e)}))){_=!1;break}}else if(h!==y&&!u(h,y,n,a,c)){_=!1;break}}return c.delete(t),c.delete(e),_}},function(t,e,n){var r=n(11);t.exports=function(t){return t==t&&!r(t)}},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},function(t,e,n){var r=n(34),o=n(10);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},function(t,e,n){var r=n(1),o=n(16),i=n(113),a=n(116);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,n){var r=n(36),o=n(44),i=Object.prototype.hasOwnProperty,a=o((function(t,e,n){i.call(t,n)?t[n].push(e):r(t,n,[e])}));t.exports=a},function(t,e,n){var r=n(37);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(2),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(18),o=n(41),i=n(11),a=n(20),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:u).test(a(t))}},function(t,e,n){var r=n(5),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(42),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(0)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(45),o=n(46),i=n(63),a=n(1);t.exports=function(t,e){return function(n,u){var c=a(n)?r:o,s=e?e():{};return c(n,t,i(u,2),s)}}},function(t,e){t.exports=function(t,e,n,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];e(r,a,n(a),t)}return r}},function(t,e,n){var r=n(47);t.exports=function(t,e,n,o){return r(t,(function(t,r,i){e(o,t,n(t),i)})),o}},function(t,e,n){var r=n(48),o=n(62)(r);t.exports=o},function(t,e,n){var r=n(49),o=n(12);t.exports=function(t,e){return t&&r(t,e,o)}},function(t,e,n){var r=n(50)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}},function(t,e,n){var r=n(52),o=n(21),i=n(1),a=n(22),u=n(24),c=n(25),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),p=!n&&!f&&a(t),l=!n&&!f&&!p&&c(t),v=n||f||p||l,b=v?r(t.length,String):[],_=b.length;for(var d in t)!e&&!s.call(t,d)||v&&("length"==d||p&&("offset"==d||"parent"==d)||l&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,_))||b.push(d);return b}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(3),o=n(13),i=n(4),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(19),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,n(23)(t))},function(t,e,n){var r=n(59),o=n(60),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(61)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(26);t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var i=n.length,a=e?i:-1,u=Object(n);(e?a--:++a<i)&&!1!==o(u[a],a,u););return n}}},function(t,e,n){var r=n(64),o=n(111),i=n(122),a=n(1),u=n(123);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?a(t)?o(t[0],t[1]):r(t):u(t)}},function(t,e,n){var r=n(65),o=n(110),i=n(32);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},function(t,e,n){var r=n(27),o=n(29);t.exports=function(t,e,n,i){var a=n.length,u=a,c=!i;if(null==t)return!u;for(t=Object(t);a--;){var s=n[a];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<u;){var f=(s=n[a])[0],p=t[f],l=s[1];if(c&&s[2]){if(void 0===p&&!(f in t))return!1}else{var v=new r;if(i)var b=i(p,l,f,t,e,v);if(!(void 0===b?o(l,p,3,i,v):b))return!1}}return!0}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(7),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(7);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(7);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(7);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(6);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(6),o=n(14),i=n(15);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(77),o=n(6),i=n(14);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(78),o=n(79),i=n(80),a=n(81),u=n(82);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(8);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(8);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(9);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(27),o=n(30),i=n(94),a=n(98),u=n(105),c=n(1),s=n(22),f=n(25),p="[object Object]",l=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,b,_){var d=c(t),h=c(e),y=d?"[object Array]":u(t),x=h?"[object Array]":u(e),g=(y="[object Arguments]"==y?p:y)==p,j=(x="[object Arguments]"==x?p:x)==p,m=y==x;if(m&&s(t)){if(!s(e))return!1;d=!0,g=!1}if(m&&!g)return _||(_=new r),d||f(t)?o(t,e,n,v,b,_):i(t,e,y,n,v,b,_);if(!(1&n)){var w=g&&l.call(t,"__wrapped__"),O=j&&l.call(e,"__wrapped__");if(w||O){var S=w?t.value():t,z=O?e.value():e;return _||(_=new r),b(S,z,n,v,_)}}return!!m&&(_||(_=new r),a(t,e,n,v,b,_))}},function(t,e,n){var r=n(15),o=n(90),i=n(91);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,t.exports=a},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(5),o=n(95),i=n(28),a=n(30),u=n(96),c=n(97),s=r?r.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,n,r,s,p,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=u;case"[object Set]":var b=1&r;if(v||(v=c),t.size!=e.size&&!b)return!1;var _=l.get(t);if(_)return _==e;r|=2,l.set(t,e);var d=a(v(t),v(e),r,s,p,l);return l.delete(t),d;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},function(t,e,n){var r=n(0).Uint8Array;t.exports=r},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},function(t,e,n){var r=n(99),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,a,u){var c=1&n,s=r(t),f=s.length;if(f!=r(e).length&&!c)return!1;for(var p=f;p--;){var l=s[p];if(!(c?l in e:o.call(e,l)))return!1}var v=u.get(t),b=u.get(e);if(v&&b)return v==e&&b==t;var _=!0;u.set(t,e),u.set(e,t);for(var d=c;++p<f;){var h=t[l=s[p]],y=e[l];if(i)var x=c?i(y,h,l,e,t,u):i(h,y,l,t,e,u);if(!(void 0===x?h===y||a(h,y,n,i,u):x)){_=!1;break}d||(d="constructor"==l)}if(_&&!d){var g=t.constructor,j=e.constructor;g==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j||(_=!1)}return u.delete(t),u.delete(e),_}},function(t,e,n){var r=n(100),o=n(102),i=n(12);t.exports=function(t){return r(t,i,o)}},function(t,e,n){var r=n(101),o=n(1);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(103),o=n(104),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),(function(e){return i.call(t,e)})))}:o;t.exports=u},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(106),o=n(14),i=n(107),a=n(108),u=n(109),c=n(3),s=n(20),f=s(r),p=s(o),l=s(i),v=s(a),b=s(u),_=c;(r&&"[object DataView]"!=_(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=_(new o)||i&&"[object Promise]"!=_(i.resolve())||a&&"[object Set]"!=_(new a)||u&&"[object WeakMap]"!=_(new u))&&(_=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case b:return"[object WeakMap]"}return e}),t.exports=_},function(t,e,n){var r=n(2)(n(0),"DataView");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Promise");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Set");t.exports=r},function(t,e,n){var r=n(2)(n(0),"WeakMap");t.exports=r},function(t,e,n){var r=n(31),o=n(12);t.exports=function(t){for(var e=o(t),n=e.length;n--;){var i=e[n],a=t[i];e[n]=[i,a,r(a)]}return e}},function(t,e,n){var r=n(29),o=n(112),i=n(119),a=n(16),u=n(31),c=n(32),s=n(10);t.exports=function(t,e){return a(t)&&u(e)?c(s(t),e):function(n){var a=o(n,t);return void 0===a&&a===e?i(n,t):r(e,a,3)}}},function(t,e,n){var r=n(33);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},function(t,e,n){var r=n(114),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=a},function(t,e,n){var r=n(115);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},function(t,e,n){var r=n(15);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(117);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(5),o=n(118),i=n(1),a=n(17),u=r?r.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e,n){var r=n(120),o=n(121);t.exports=function(t,e){return null!=t&&o(t,e,r)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(34),o=n(21),i=n(1),a=n(24),u=n(13),c=n(10);t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,p=!1;++s<f;){var l=c(e[s]);if(!(p=null!=t&&n(t,l)))break;t=t[l]}return p||++s!=f?p:!!(f=null==t?0:t.length)&&u(f)&&a(l,f)&&(i(t)||o(t))}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(124),o=n(125),i=n(16),a=n(10);t.exports=function(t){return i(t)?r(a(t)):o(t)}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,n){var r=n(33);t.exports=function(t){return function(e){return r(e,t)}}},function(t,e,n){"use strict";n.r(e);const r=(t,e=2)=>+o(t,e),o=(t,e=2)=>{const n="string"==typeof t?parseFloat(t):t;return(Math.round(1e6*(n+1e-8))/1e6).toFixed(e)};var i=n(35);const a=(t,e)=>{const{product:n={}}=e,{pricing:r={},subtotal:o}=n,{tax:i={}}=r,{name:a="",value:u="",nature:c=""}=i;return{name:a,value:u,nature:c,subtotal:t.subtotal+o}};function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){return u(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function f(t){u(1,arguments);var e=s(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function l(t,e){u(2,arguments);var n=s(t),r=p(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}const v=(t=new Date,e)=>{if(!Array.isArray(e)||0===e.length)return e;const n=c(new Date(t))?new Date(t):new Date;return n.setHours(12,0,0,0),e.map(t=>{const{deadline:e=0,end_month:r=!1}=t;let o;o=e%30==0&&r?f(function(t,e){u(2,arguments);var n=s(t),r=p(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var o=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var a=i.getDate();return o>=a?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}(n,e/30)):r?f(l(n,e)):l(n,e),o.setHours(12,0,0,0);let i=c(t.payment_date)&&t.payed?new Date(t.payment_date):o;return i.setHours(12,0,0,0),{...t,payment_date:new Date(i).toISOString(),expiration_date:new Date(o).toISOString()}})},b=(t=[],e,n)=>{const o=t.length;let i=0,a=0,u=0;const{it:c}=e||{},{esigibilita_iva:s="I"}=c||{};return a="S"===s?(n.total||0)-(Number(n.tax)||0):n.total||0,u=100*Number(n.tax||0)/a,t.map((t,e)=>{e===o-1&&(t.percentage=100-i),i+=t.percentage;const n=Math.round(a*t.percentage/100*100)/100,c=Math.round(n*u/100*100)/100,s=Math.round(100*(n-c))/100;return t.total=r(n),t.tax=r(c),t.subtotal=r(s),t})};e.default=t=>{if(!t)throw new Error("No invoice received as argument!");const{item:e=[],date:n,payment_option:o,sold_by_weight:u,invoice_option:c}=t,s=e.map(t=>((t,e)=>{const{quantity:n=1,product:{pricing:{list:o=0,tax:{value:i=0,name:a="0",nature:u=""}={}}={},weight:{net:c=0}={}}={}}=t,{sold_by_weight:s}=e||{};let f;f=r(s&&0!==c?o*c:n*o,6);const{pricing:p}=t.product||{},l={...p,list:o,tax:{value:i,name:a,nature:u}},v={...t.product,pricing:l,subtotal:f,tax:i};return{...t,product:v}})(t,{sold_by_weight:u}));const f=((t,e,n)=>{const{invoice_option:{it:{gestione_separata_inps:o=!1,gestione_contributo_previdenziale:i=!1,gestione_ritenuta_dacconto:a=!1,gestione_marca_da_bollo:u=!1,ritenuta_dacconto:c="",percentuale_ritenuta_dacconto:s="",cliente_paga_marca_da_bollo:f=!1,marca_da_bollo:p=0,rivalsa_inps:l={tax:null,valore:null},contributo_previdenziale:v={tax:"",valore:"",percentuale:"",tipo:""}}={}}={},total_price:{out_subtotal:b=[],it:{imponibile_previdenziale:_=0,imponibile_ritenuta:d=0}={}}={}}=n||{};let h=e.reduce((t,e)=>("N1"===e.nature&&(t+=e.subtotal),t),0),y=e.reduce((t,e)=>t+e.tax,0),x=t+y;const g=t-h;let j=0,m=0,w=0,O="",S=0,z=0;const A={contributo_previdenziale:0,imponibile_previdenziale:_,imponibile_ritenuta:d,ritenuta_dacconto:0,rivalsa_inps:0};if(i?(j=parseFloat(v.valore)||0,w=parseFloat(v.tax||0),O=v.nature||"",A.imponibile_previdenziale=parseFloat(v.percentuale||100)*g/100):A.imponibile_previdenziale=0,o&&(S=parseFloat(l.valore)||0,z=parseFloat(l.tax)||0,A.rivalsa_inps=g*S/100),m=Number(A.imponibile_previdenziale),A.contributo_previdenziale=m*j/100,A.rivalsa_inps){const t=A.rivalsa_inps*z/100;y+=t,e.push({name:"",value:z.toString(),tax:r(t),subtotal:r(A.rivalsa_inps),nature:""})}if(i){const t=A.contributo_previdenziale*w/100;y+=t,e.push({name:v.nome||"",value:w.toString(),tax:r(t),subtotal:r(A.contributo_previdenziale),nature:O})}return x=t+y+A.rivalsa_inps,i&&"TC07"===v.tipo?x-=A.contributo_previdenziale:x+=A.contributo_previdenziale,a&&parseFloat(c)>0&&(A.imponibile_ritenuta=parseFloat(s||100)*g/100,A.ritenuta_dacconto=A.imponibile_ritenuta*parseFloat(c)/100,x-=A.ritenuta_dacconto),u&&f&&(x+=Number(p||0)),b.forEach(({subtotal:t})=>x+=t),{taxes:e,subtotal:r(t),tax:r(y),total:r(x),it:{contributo_previdenziale:A.contributo_previdenziale.toString(),imponibile_previdenziale:A.imponibile_previdenziale.toString(),imponibile_ritenuta:A.imponibile_ritenuta.toString(),ritenuta_dacconto:A.ritenuta_dacconto.toString(),rivalsa_inps:A.rivalsa_inps.toString()}}})(r(s.reduce((t,{product:e={}})=>t+e.subtotal||0,0)),(t=>{const e={name:"",value:"",nature:"",subtotal:0,tax:0},n=i(t,"product.pricing.tax.name"),o=[];for(const t in n){const r=n[t].reduce(a,e);o.push(r)}return o.map(t=>({name:t.name,value:t.value,nature:t.nature,subtotal:r(t.subtotal),tax:r(t.subtotal*parseFloat(t.value)/100)}))})(s),t),p=((t,e,n,r)=>b(v(r,t),e,n))(o,c,f,n);return{...t,item:s,total_price:f,payment_option:p}}}])}));