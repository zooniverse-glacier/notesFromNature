/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return H("flexWrap")},r.flexboxlegacy=function(){return H("boxDirection")},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){return!!a.openDatabase},r.indexedDB=function(){return!!H("indexedDB",a)},r.hashchange=function(){return y("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},r.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.hsla=function(){return B("background-color:hsla(120,40%,100%,.5)"),E(j.backgroundColor,"rgba")||E(j.backgroundColor,"hsla")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return H("backgroundSize")},r.borderimage=function(){return H("borderImage")},r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return H("animationName")},r.csscolumns=function(){return H("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.cssreflections=function(){return H("boxReflect")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},r.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},r.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.24"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.24"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.options.scope,h=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===g});h.length&&(f=a.data(h[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.24"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.24"})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(f.instance!==this.currentContainer)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(c||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer))));for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.24"})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.24",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),f=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(f);a.each(d,function(a,b){if(a==="click")return;a in e?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.24"})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.24"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.24",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.24"})})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.24",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}});var m={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,b){m[b]=function(b){return Math.pow(b,a+2)}}),a.extend(m,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(m,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight(!0)/3:c.outerWidth(!0)/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0)/2:c.outerWidth(!0)/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0):c.outerWidth(!0));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
g}})(jQuery);
/*
== malihu jquery custom scrollbars plugin ==
version: 2.1
author: malihu (http://manos.malihu.gr)
plugin home: http://manos.malihu.gr/jquery-custom-content-scroller
*/
(function($){
  var methods={
    init:function(options){
      var defaults={
        set_width:false, /*optional element width: boolean, pixels, percentage*/
        set_height:false, /*optional element height: boolean, pixels, percentage*/
        horizontalScroll:false, /*scroll horizontally: boolean*/
        scrollInertia:150, /*scrolling inertia: integer (milliseconds)*/
        //scrollEasing:"easeOutCirc", [>scrolling easing: string<]
        mouseWheel:"auto", /*mousewheel support and velocity: boolean, "auto", integer*/
        autoDraggerLength:true, /*auto-adjust scrollbar dragger length: boolean*/
        scrollButtons:{ /*scroll buttons*/
          enable:false, /*scroll buttons support: boolean*/
          scrollType:"continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
          scrollSpeed:20, /*scroll buttons continuous scrolling speed: integer*/
          scrollAmount:40 /*scroll buttons pixels scroll amount: integer (pixels)*/
        },
        advanced:{
          updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
          updateOnContentResize:false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
          autoExpandHorizontalScroll:false /*auto-expand width for horizontal scrolling: boolean*/
        },
        callbacks:{
          onScroll:function(){}, /*user custom callback function on scroll event*/
          onTotalScroll:function(){}, /*user custom callback function on scroll end reached event*/
          onTotalScrollOffset:0 /*scroll end reached offset: integer (pixels)*/
        }
      },
      options=$.extend(true,defaults,options);
      /*check for touch device*/
      $(document).data("mCS-is-touch-device",false);
      if(is_touch_device()){
        $(document).data("mCS-is-touch-device",true);
      }
      function is_touch_device(){
        return !!("ontouchstart" in window) ? 1 : 0;
      }
      return this.each(function(){
        var $this=$(this);
        /*set element width/height, create markup for custom scrollbars, add classes*/
        if(options.set_width){
          $this.css("width",options.set_width);
        }
        if(options.set_height){
          $this.css("height",options.set_height);
        }
        if(!$(document).data("mCustomScrollbar-index")){
          $(document).data("mCustomScrollbar-index","1");
        }else{
          var mCustomScrollbarIndex=parseInt($(document).data("mCustomScrollbar-index"));
          $(document).data("mCustomScrollbar-index",mCustomScrollbarIndex+1);
        }
        $this.wrapInner("<div class='mCustomScrollBox' id='mCSB_"+$(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index"));
        var mCustomScrollBox=$this.children(".mCustomScrollBox");
        if(options.horizontalScroll){
          mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
          var mCSB_h_wrapper=mCustomScrollBox.children(".mCSB_h_wrapper");
          mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width":mCSB_h_wrapper.children().outerWidth(),"position":"relative"}).unwrap();
        }else{
          mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
        }
        var mCSB_container=mCustomScrollBox.children(".mCSB_container");
        if(!$(document).data("mCS-is-touch-device")){ /*not touch device - apply custom scrollbars functionality*/
          mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
          var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
          mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
          mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
          if(options.horizontalScroll){
            mCSB_dragger.data("minDraggerWidth",mCSB_dragger.width());
          }else{
            mCSB_dragger.data("minDraggerHeight",mCSB_dragger.height());
          }
          if(options.scrollButtons.enable){
            if(options.horizontalScroll){
              mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>");
            }else{
              mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>");
            }
          }
          /*mCustomScrollBox scrollTop and scrollLeft is always 0 to prevent browser focus scrolling*/
          mCustomScrollBox.bind("scroll",function(){
            mCustomScrollBox.scrollTop(0).scrollLeft(0);
          });
          /*store element options and update element*/
          $this.data({
            "horizontalScroll":options.horizontalScroll,
            "scrollInertia":options.scrollInertia,
            "scrollEasing":options.scrollEasing,
            "mouseWheel":options.mouseWheel,
            "autoDraggerLength":options.autoDraggerLength,
            "scrollButtons-enable":options.scrollButtons.enable,
            "scrollButtons-scrollType":options.scrollButtons.scrollType,
            "scrollButtons-scrollSpeed":options.scrollButtons.scrollSpeed,
            "scrollButtons-scrollAmount":options.scrollButtons.scrollAmount,
            "autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,
            "onScroll-Callback":options.callbacks.onScroll,
            "onTotalScroll-Callback":options.callbacks.onTotalScroll,
            "onTotalScroll-Offset":options.callbacks.onTotalScrollOffset
          }).mCustomScrollbar("update");
          /*window resize fn (for layouts based on percentages)*/
          if(options.advanced.updateOnBrowserResize){
            var mCSB_resizeTimeout;
            $(window).resize(function(){
              if(mCSB_resizeTimeout){
                clearTimeout(mCSB_resizeTimeout);
              }
              mCSB_resizeTimeout=setTimeout(function(){
                $this.mCustomScrollbar("update");
              },150);
            });
          }
        }else{ /*is touch device*/
          /*check for mobile os/browser not supporting overflow:auto (Android 2.xx)*/
          var ua=navigator.userAgent;
          if(ua.indexOf("Android")!=-1){
            var androidversion=parseFloat(ua.slice(ua.indexOf("Android")+8));
            if(androidversion<3){
              touchScroll("mCSB_"+$(document).data("mCustomScrollbar-index")); /*non overflow:auto fn*/
            }else{
              mCustomScrollBox.css({"overflow":"auto","-webkit-overflow-scrolling":"touch"});
            }
          }else{
            mCustomScrollBox.css({"overflow":"auto","-webkit-overflow-scrolling":"touch"});
          }
          mCSB_container.addClass("mCS_no_scrollbar mCS_touch");
          $this.data({
            "horizontalScroll":options.horizontalScroll,
            "scrollInertia":options.scrollInertia,
            "scrollEasing":options.scrollEasing,
            "autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,
            "onScroll-Callback":options.callbacks.onScroll,
            "onTotalScroll-Callback":options.callbacks.onTotalScroll,
            "onTotalScroll-Offset":options.callbacks.onTotalScrollOffset
          });
          mCustomScrollBox.scroll(function(){
            $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container); /*user custom callback functions*/
          });
          /*non overflow:auto fn
          (source: http://chris-barr.com/index.php/entry/scrolling_a_overflowauto_element_on_a_touch_screen_device/)*/
          function touchScroll(id){
            var el=document.getElementById(id),
            scrollStartPosY=0,
            scrollStartPosX=0;
            document.getElementById(id).addEventListener("touchstart",function(event){
              scrollStartPosY=this.scrollTop+event.touches[0].pageY;
              scrollStartPosX=this.scrollLeft+event.touches[0].pageX;
              /*event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div*/
            },false);
            document.getElementById(id).addEventListener("touchmove",function(event){
              /*These if statements allow the full page to scroll (not just the div) if they are
              at the top of the div scroll or the bottom of the div scroll
              The -5 and +5 below are in case they are trying to scroll the page sideways
              but their finger moves a few pixels down or up.  The event.preventDefault() function
              will not be called in that case so that the whole page can scroll.*/
              if((this.scrollTop<this.scrollHeight-this.offsetHeight && this.scrollTop+event.touches[0].pageY<scrollStartPosY-5) || (this.scrollTop!=0 && this.scrollTop+event.touches[0].pageY>scrollStartPosY+5))
                event.preventDefault();
              if((this.scrollLeft<this.scrollWidth-this.offsetWidth && this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) || (this.scrollLeft!=0&&this.scrollLeft+event.touches[0].pageX>scrollStartPosX+5))
                event.preventDefault();
              this.scrollTop=scrollStartPosY-event.touches[0].pageY;
              this.scrollLeft=scrollStartPosX-event.touches[0].pageX;
            },false);
          }
        }
        /*content resize fn (for dynamically generated content)*/
        if(options.advanced.updateOnContentResize){
          var mCSB_onContentResize;
          if(options.horizontalScroll){
            var mCSB_containerOldSize=mCSB_container.outerWidth();
            if(is_touch_device()){
              /*disable iOS webkit inertia for smooth scrolling*/
              mCustomScrollBox.css({"-webkit-overflow-scrolling":"auto"});
            }
          }else{
            var mCSB_containerOldSize=mCSB_container.outerHeight();
          }
          mCSB_onContentResize=setInterval(function(){
            if(options.horizontalScroll){
              if(options.advanced.autoExpandHorizontalScroll){
                mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
              }
              var mCSB_containerNewSize=mCSB_container.outerWidth();
            }else{
              var mCSB_containerNewSize=mCSB_container.outerHeight();
            }
            if(mCSB_containerNewSize!=mCSB_containerOldSize){
              $this.mCustomScrollbar("update");
              mCSB_containerOldSize=mCSB_containerNewSize;
            }
          },300);
        }
      });
    },

    disableMouseWheel:function(){
      var $this=$(this);
      mCustomScrollBox=$this.children(".mCustomScrollBox"),
      mCSB_container=mCustomScrollBox.children(".mCSB_container");
      mCustomScrollBox.unbind("mousewheel")
      $this.data("mouseWheel", false);
    },

    enableMouseWheel: function() {
      var $this = $(this);
      $this.data("mouseWheel", true);
      $this.mCustomScrollbar("update");
    },

    update:function(){

      var $this=$(this),
      mCustomScrollBox=$this.children(".mCustomScrollBox"),
      mCSB_container=mCustomScrollBox.children(".mCSB_container");
      if(!$(document).data("mCS-is-touch-device")){
        mCSB_container.removeClass("mCS_no_scrollbar");
      }
      var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
      mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
      mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
      if($this.data("horizontalScroll")){
        var mCSB_buttonLeft=mCSB_scrollTools.children(".mCSB_buttonLeft"),
        mCSB_buttonRight=mCSB_scrollTools.children(".mCSB_buttonRight"),
        mCustomScrollBoxW=mCustomScrollBox.width();
        if($this.data("autoExpandHorizontalScroll")){
          mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
        }
        var mCSB_containerW=mCSB_container.outerWidth();
      }else{
        var mCSB_buttonUp=mCSB_scrollTools.children(".mCSB_buttonUp"),
        mCSB_buttonDown=mCSB_scrollTools.children(".mCSB_buttonDown"),
        mCustomScrollBoxH=mCustomScrollBox.height(),
        mCSB_containerH=mCSB_container.outerHeight();
      }
      if(mCSB_containerH>mCustomScrollBoxH && !$this.data("horizontalScroll") && !$(document).data("mCS-is-touch-device")){ /*content needs vertical scrolling*/
        mCSB_scrollTools.css("display","block");
        var mCSB_draggerContainerH=mCSB_draggerContainer.height();
        /*auto adjust scrollbar dragger length analogous to content*/
        if($this.data("autoDraggerLength")){
          var draggerH=Math.round(mCustomScrollBoxH/mCSB_containerH*mCSB_draggerContainerH),
          minDraggerH=mCSB_dragger.data("minDraggerHeight");
          if(draggerH<=minDraggerH){ /*min dragger height*/
            mCSB_dragger.css({"height":minDraggerH});
          }else if(draggerH>=mCSB_draggerContainerH-10){ /*max dragger height*/
            var mCSB_draggerContainerMaxH=mCSB_draggerContainerH-10;
            mCSB_dragger.css({"height":mCSB_draggerContainerMaxH});
          }else{
            mCSB_dragger.css({"height":draggerH});
          }
          mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height":mCSB_dragger.height()+"px"});
        }
        var mCSB_draggerH=mCSB_dragger.height(),
        /*calculate and store scroll amount*/
        scrollAmount=(mCSB_containerH-mCustomScrollBoxH)/(mCSB_draggerContainerH-mCSB_draggerH);
        $this.data("scrollAmount",scrollAmount);
        /*add scrolling*/
        $this.mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
        /*scroll*/
        var mCSB_containerP=Math.abs(Math.round(mCSB_container.position().top));
        $this.mCustomScrollbar("scrollTo",mCSB_containerP,{callback:false});
      }else if(mCSB_containerW>mCustomScrollBoxW && $this.data("horizontalScroll") && !$(document).data("mCS-is-touch-device")){ /*content needs horizontal scrolling*/
        mCSB_scrollTools.css("display","block");
        var mCSB_draggerContainerW=mCSB_draggerContainer.width();
        /*auto adjust scrollbar dragger length analogous to content*/
        if($this.data("autoDraggerLength")){
          var draggerW=Math.round(mCustomScrollBoxW/mCSB_containerW*mCSB_draggerContainerW),
          minDraggerW=mCSB_dragger.data("minDraggerWidth");
          if(draggerW<=minDraggerW){ /*min dragger height*/
            mCSB_dragger.css({"width":minDraggerW});
          }else if(draggerW>=mCSB_draggerContainerW-10){ /*max dragger height*/
            var mCSB_draggerContainerMaxW=mCSB_draggerContainerW-10;
            mCSB_dragger.css({"width":mCSB_draggerContainerMaxW});
          }else{
            mCSB_dragger.css({"width":draggerW});
          }
        }
        var mCSB_draggerW=mCSB_dragger.width(),
        /*calculate and store scroll amount*/
        scrollAmount=(mCSB_containerW-mCustomScrollBoxW)/(mCSB_draggerContainerW-mCSB_draggerW);
        $this.data("scrollAmount",scrollAmount);
        /*add scrolling*/
        $this.mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
        /*scroll*/
        var mCSB_containerP=Math.abs(Math.round(mCSB_container.position().left));
        $this.mCustomScrollbar("scrollTo",mCSB_containerP,{callback:false});
      }else{ /*content does not need scrolling*/
        /*unbind events, reset content position, hide scrollbars, remove classes*/
        mCustomScrollBox.unbind("mousewheel");
        mCustomScrollBox.unbind("focusin");
        if($this.data("horizontalScroll")){
          mCSB_dragger.add(mCSB_container).css("left",0);
        }else{
          mCSB_dragger.add(mCSB_container).css("top",0);
        }
        mCSB_scrollTools.css("display","none");
        mCSB_container.addClass("mCS_no_scrollbar");
      }
    },
    scrolling:function(mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight){
      var $this=$(this);
      /*drag scrolling*/
      if(!mCSB_dragger.hasClass("ui-draggable")){ /*apply drag function once*/
        if($this.data("horizontalScroll")){
          var draggableAxis="x";
        }else{
          var draggableAxis="y";
        }
        mCSB_dragger.draggable({
          axis:draggableAxis,
          containment:"parent",
          drag:function(event,ui){
            $this.mCustomScrollbar("scroll");
            mCSB_dragger.addClass("mCSB_dragger_onDrag");
          },
          stop:function(event,ui){
            mCSB_dragger.removeClass("mCSB_dragger_onDrag");
          }
        });
      }
      mCSB_draggerContainer.unbind("click").bind("click",function(e){
        if($this.data("horizontalScroll")){
          var mouseCoord=(e.pageX-mCSB_draggerContainer.offset().left);
          if(mouseCoord<mCSB_dragger.position().left || mouseCoord>(mCSB_dragger.position().left+mCSB_dragger.width())){
            var scrollToPos=mouseCoord;
            if(scrollToPos>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
              scrollToPos=mCSB_draggerContainer.width()-mCSB_dragger.width();
            }
            mCSB_dragger.css("left",scrollToPos);
            $this.mCustomScrollbar("scroll");
          }
        }else{
          var mouseCoord=(e.pageY-mCSB_draggerContainer.offset().top);
          if(mouseCoord<mCSB_dragger.position().top || mouseCoord>(mCSB_dragger.position().top+mCSB_dragger.height())){
            var scrollToPos=mouseCoord;
            if(scrollToPos>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
              scrollToPos=mCSB_draggerContainer.height()-mCSB_dragger.height();
            }
            mCSB_dragger.css("top",scrollToPos);
            $this.mCustomScrollbar("scroll");
          }
        }
      });

      /*mousewheel scrolling*/
      if($this.data("mouseWheel")){
        var mousewheelVel=$this.data("mouseWheel");
        if($this.data("mouseWheel")==="auto"){
          mousewheelVel=8; /*default mousewheel velocity*/
          /*check for safari browser on mac osx to lower mousewheel velocity*/
          var os=navigator.userAgent;
          if(os.indexOf("Mac")!=-1 && os.indexOf("Safari")!=-1 && os.indexOf("AppleWebKit")!=-1 && os.indexOf("Chrome")==-1){
            mousewheelVel=1;
          }
        }
        mCustomScrollBox.unbind("mousewheel").bind("mousewheel",function(event,delta){
          event.preventDefault();
          var vel=Math.abs(delta*mousewheelVel);
          if($this.data("horizontalScroll")){
            var posX=mCSB_dragger.position().left-(delta*vel);
            mCSB_dragger.css("left",posX);
            if(mCSB_dragger.position().left<0){
              mCSB_dragger.css("left",0);
            }
            var mCSB_draggerContainerW=mCSB_draggerContainer.width(),
            mCSB_draggerW=mCSB_dragger.width();
            if(mCSB_dragger.position().left>mCSB_draggerContainerW-mCSB_draggerW){
              mCSB_dragger.css("left",mCSB_draggerContainerW-mCSB_draggerW);
            }
          }else{
            var posY=mCSB_dragger.position().top-(delta*vel);
            mCSB_dragger.css("top",posY);
            if(mCSB_dragger.position().top<0){
              mCSB_dragger.css("top",0);
            }
            var mCSB_draggerContainerH=mCSB_draggerContainer.height(),
            mCSB_draggerH=mCSB_dragger.height();
            if(mCSB_dragger.position().top>mCSB_draggerContainerH-mCSB_draggerH){
              mCSB_dragger.css("top",mCSB_draggerContainerH-mCSB_draggerH);
            }
          }
          $this.mCustomScrollbar("scroll");
        });
      }
      /*buttons scrolling*/
      if($this.data("scrollButtons-enable")){
        if($this.data("scrollButtons-scrollType")==="pixels"){ /*scroll by pixels*/
          var pixelsScrollTo;
          if($.browser.msie && parseInt($.browser.version)<9){ /*stupid ie8*/
            $this.data("scrollInertia",0);
          }
          if($this.data("horizontalScroll")){
            mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click mousedown mouseup mouseout",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
            /*scroll right*/
            mCSB_buttonRight.bind("click",function(e){
              e.preventDefault();
              if(!mCSB_container.is(":animated")){
                pixelsScrollTo=Math.abs(mCSB_container.position().left)+$this.data("scrollButtons-scrollAmount");
                $this.mCustomScrollbar("scrollTo",pixelsScrollTo);
              }
            });
            /*scroll left*/
            mCSB_buttonLeft.bind("click",function(e){
              e.preventDefault();
              if(!mCSB_container.is(":animated")){
                pixelsScrollTo=Math.abs(mCSB_container.position().left)-$this.data("scrollButtons-scrollAmount");
                if(mCSB_container.position().left>=-$this.data("scrollButtons-scrollAmount")){
                  pixelsScrollTo="left";
                }
                $this.mCustomScrollbar("scrollTo",pixelsScrollTo);
              }
            });
          }else{
            mCSB_buttonDown.add(mCSB_buttonUp).unbind("click mousedown mouseup mouseout",mCSB_buttonDown_stop,mCSB_buttonUp_stop);
            /*scroll down*/
            mCSB_buttonDown.bind("click",function(e){
              e.preventDefault();
              if(!mCSB_container.is(":animated")){
                pixelsScrollTo=Math.abs(mCSB_container.position().top)+$this.data("scrollButtons-scrollAmount");
                $this.mCustomScrollbar("scrollTo",pixelsScrollTo);
              }
            });
            /*scroll up*/
            mCSB_buttonUp.bind("click",function(e){
              e.preventDefault();
              if(!mCSB_container.is(":animated")){
                pixelsScrollTo=Math.abs(mCSB_container.position().top)-$this.data("scrollButtons-scrollAmount");
                if(mCSB_container.position().top>=-$this.data("scrollButtons-scrollAmount")){
                  pixelsScrollTo="top";
                }
                $this.mCustomScrollbar("scrollTo",pixelsScrollTo);
              }
            });
          }
        }else{ /*continuous scrolling*/
          if($this.data("horizontalScroll")){
            mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click mousedown mouseup mouseout",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
            /*scroll right*/
            var mCSB_buttonScrollRight,
            mCSB_draggerContainerW=mCSB_draggerContainer.width(),
            mCSB_draggerW=mCSB_dragger.width();
            mCSB_buttonRight.bind("mousedown",function(e){
              e.preventDefault();
              var draggerScrollTo=mCSB_draggerContainerW-mCSB_draggerW;
              mCSB_buttonScrollRight=setInterval(function(){
                var scrollToSpeed=Math.abs(mCSB_dragger.position().left-draggerScrollTo)*(100/$this.data("scrollButtons-scrollSpeed"));
                mCSB_dragger.stop().animate({left:draggerScrollTo},scrollToSpeed,"linear");
                $this.mCustomScrollbar("scroll");
              },20);
            });
            var mCSB_buttonRight_stop=function(e){
              e.preventDefault();
              clearInterval(mCSB_buttonScrollRight);
              mCSB_dragger.stop();
            }
            mCSB_buttonRight.bind("mouseup mouseout",mCSB_buttonRight_stop);
            /*scroll left*/
            var mCSB_buttonScrollLeft;
            mCSB_buttonLeft.bind("mousedown",function(e){
              e.preventDefault();
              var draggerScrollTo=0;
              mCSB_buttonScrollLeft=setInterval(function(){
                var scrollToSpeed=Math.abs(mCSB_dragger.position().left-draggerScrollTo)*(100/$this.data("scrollButtons-scrollSpeed"));
                mCSB_dragger.stop().animate({left:draggerScrollTo},scrollToSpeed,"linear");
                $this.mCustomScrollbar("scroll");
              },20);
            });
            var mCSB_buttonLeft_stop=function(e){
              e.preventDefault();
              clearInterval(mCSB_buttonScrollLeft);
              mCSB_dragger.stop();
            }
            mCSB_buttonLeft.bind("mouseup mouseout",mCSB_buttonLeft_stop);
          }else{
            mCSB_buttonDown.add(mCSB_buttonUp).unbind("click mousedown mouseup mouseout",mCSB_buttonDown_stop,mCSB_buttonUp_stop);
            /*scroll down*/
            var mCSB_buttonScrollDown,
            mCSB_draggerContainerH=mCSB_draggerContainer.height(),
            mCSB_draggerH=mCSB_dragger.height();
            mCSB_buttonDown.bind("mousedown",function(e){
              e.preventDefault();
              var draggerScrollTo=mCSB_draggerContainerH-mCSB_draggerH;
              mCSB_buttonScrollDown=setInterval(function(){
                var scrollToSpeed=Math.abs(mCSB_dragger.position().top-draggerScrollTo)*(100/$this.data("scrollButtons-scrollSpeed"));
                mCSB_dragger.stop().animate({top:draggerScrollTo},scrollToSpeed,"linear");
                $this.mCustomScrollbar("scroll");
              },20);
            });
            var mCSB_buttonDown_stop=function(e){
              e.preventDefault();
              clearInterval(mCSB_buttonScrollDown);
              mCSB_dragger.stop();
            }
            mCSB_buttonDown.bind("mouseup mouseout",mCSB_buttonDown_stop);
            /*scroll up*/
            var mCSB_buttonScrollUp;
            mCSB_buttonUp.bind("mousedown",function(e){
              e.preventDefault();
              var draggerScrollTo=0;
              mCSB_buttonScrollUp=setInterval(function(){
                var scrollToSpeed=Math.abs(mCSB_dragger.position().top-draggerScrollTo)*(100/$this.data("scrollButtons-scrollSpeed"));
                mCSB_dragger.stop().animate({top:draggerScrollTo},scrollToSpeed,"linear");
                $this.mCustomScrollbar("scroll");
              },20);
            });
            var mCSB_buttonUp_stop=function(e){
              e.preventDefault();
              clearInterval(mCSB_buttonScrollUp);
              mCSB_dragger.stop();
            }
            mCSB_buttonUp.bind("mouseup mouseout",mCSB_buttonUp_stop);
          }
        }
      }
      /*scrolling on element focus (e.g. via TAB key)*/
      mCustomScrollBox.unbind("focusin").bind("focusin",function(){
        mCustomScrollBox.scrollTop(0).scrollLeft(0);
        var focusedElem=$(document.activeElement);
        if(focusedElem.is("input,textarea,select,button,a[tabindex],area,object")){
          if($this.data("horizontalScroll")){
            var mCSB_containerX=mCSB_container.position().left,
            focusedElemX=focusedElem.position().left,
            mCustomScrollBoxW=mCustomScrollBox.width(),
            focusedElemW=focusedElem.outerWidth();
            if(mCSB_containerX+focusedElemX>=0 && mCSB_containerX+focusedElemX<=mCustomScrollBoxW-focusedElemW){
              /*just focus...*/
            }else{ /*scroll, then focus*/
              var moveDragger=focusedElemX/$this.data("scrollAmount");
              if(moveDragger>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
                moveDragger=mCSB_draggerContainer.width()-mCSB_dragger.width();
              }
              mCSB_dragger.css("left",moveDragger);
              $this.mCustomScrollbar("scroll");
            }
          }else{
            var mCSB_containerY=mCSB_container.position().top,
            focusedElemY=focusedElem.position().top,
            mCustomScrollBoxH=mCustomScrollBox.height(),
            focusedElemH=focusedElem.outerHeight();
            if(mCSB_containerY+focusedElemY>=0 && mCSB_containerY+focusedElemY<=mCustomScrollBoxH-focusedElemH){
              /*just focus...*/
            }else{ /*scroll, then focus*/
              var moveDragger=focusedElemY/$this.data("scrollAmount");
              if(moveDragger>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
                moveDragger=mCSB_draggerContainer.height()-mCSB_dragger.height();
              }
              mCSB_dragger.css("top",moveDragger);
              $this.mCustomScrollbar("scroll");
            }
          }
        }
      });
    },
    scroll:function(updated){
      var $this=$(this),
      mCSB_dragger=$this.find(".mCSB_dragger"),
      mCSB_container=$this.find(".mCSB_container"),
      mCustomScrollBox=$this.find(".mCustomScrollBox");
      if($this.data("horizontalScroll")){
        var draggerX=mCSB_dragger.position().left,
        targX=-draggerX*$this.data("scrollAmount"),
        thisX=mCSB_container.position().left,
        posX=Math.round(thisX-targX);
      }else{
        var draggerY=mCSB_dragger.position().top,
        targY=-draggerY*$this.data("scrollAmount"),
        thisY=mCSB_container.position().top,
        posY=Math.round(thisY-targY);
      }
      if($.browser.webkit){ /*fix webkit zoom and jquery animate*/
        var screenCssPixelRatio=(window.outerWidth-8)/window.innerWidth,
        isZoomed=(screenCssPixelRatio<.98 || screenCssPixelRatio>1.02);
      }
      if($this.data("scrollInertia")===0 || isZoomed){
        if($this.data("horizontalScroll")){
          mCSB_container.css("left",targX);
        }else{
          mCSB_container.css("top",targY);
        }
        if(!updated){
          $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container); /*user custom callback functions*/
        }
      }else{
        if($this.data("horizontalScroll")){
          mCSB_container.stop().animate({left: "-="+posX},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
            if(!updated){
              $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container); /*user custom callback functions*/
            }
          });
        }else{
          mCSB_container.stop().animate({top: "-="+posY},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
            if(!updated){
              $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container); /*user custom callback functions*/
            }
          });
        }
      }
    },
    scrollTo:function(scrollTo,options){
      var defaults={
        moveDragger:false,
        callback:true
      },
      options=$.extend(defaults,options),
      $this=$(this),
      scrollToPos,
      mCustomScrollBox=$this.find(".mCustomScrollBox"),
      mCSB_container=mCustomScrollBox.children(".mCSB_container");
      if(!$(document).data("mCS-is-touch-device")){
        var mCSB_draggerContainer=$this.find(".mCSB_draggerContainer"),
        mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
      }
      var targetPos;
      if(scrollTo){
        if(typeof(scrollTo)==="number"){ /*if integer, scroll by number of pixels*/
          if(options.moveDragger){ /*scroll dragger*/
            scrollToPos=scrollTo;
          }else{ /*scroll content by default*/
            targetPos=scrollTo;
            scrollToPos=Math.round(targetPos/$this.data("scrollAmount"));
          }
        }else if(typeof(scrollTo)==="string"){ /*if string, scroll by element position*/
          var target;
          if(scrollTo==="top"){ /*scroll to top*/
            target=0;
          }else if(scrollTo==="bottom" && !$this.data("horizontalScroll")){ /*scroll to bottom*/
            target=mCSB_container.outerHeight()-mCustomScrollBox.height();
          }else if(scrollTo==="left"){ /*scroll to left*/
            target=0;
          }else if(scrollTo==="right" && $this.data("horizontalScroll")){ /*scroll to right*/
            target=mCSB_container.outerWidth()-mCustomScrollBox.width();
          }else if(scrollTo==="first"){ /*scroll to first element position*/
            target=$this.find(".mCSB_container").find(":first");
          }else if(scrollTo==="last"){ /*scroll to last element position*/
            target=$this.find(".mCSB_container").find(":last");
          }else{ /*scroll to element position*/
            target=$this.find(scrollTo);
          }
          if(target.length===1){ /*if such unique element exists, scroll to it*/
            if($this.data("horizontalScroll")){
              targetPos=target.position().left;
            }else{
              targetPos=target.position().top;
            }
            if($(document).data("mCS-is-touch-device")){
              scrollToPos=targetPos;
            }else{
              scrollToPos=Math.ceil(targetPos/$this.data("scrollAmount"));
            }
          }else{
            scrollToPos=target;
          }
        }
        /*scroll to*/
        if($(document).data("mCS-is-touch-device")){ /*is touch device*/
          if($this.data("horizontalScroll")){
            mCustomScrollBox.stop().animate({scrollLeft:scrollToPos},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
              if(options.callback){
                $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container);
              }
            });
          }else{
            mCustomScrollBox.stop().animate({scrollTop:scrollToPos},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
              if(options.callback){
                $this.mCustomScrollbar("callbacks",mCustomScrollBox,mCSB_container);
              }
            });
          }
        }else{ /*not touch device*/
          if($this.data("horizontalScroll")){
            if(scrollToPos>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
              scrollToPos=mCSB_draggerContainer.width()-mCSB_dragger.width();
            }
            mCSB_dragger.css("left",scrollToPos);
          }else{
            if(scrollToPos>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
              scrollToPos=mCSB_draggerContainer.height()-mCSB_dragger.height();
            }
            mCSB_dragger.css("top",scrollToPos);
          }
          if(options.callback){
            $this.mCustomScrollbar("scroll");
          }else{
            $this.mCustomScrollbar("scroll",true);
          }
        }

      }
    },
    callbacks:function(mCustomScrollBox,mCSB_container){
      var $this=$(this);
      if(!$(document).data("mCS-is-touch-device")){ /*not touch device*/
        if($this.data("horizontalScroll")){
          var mCSB_containerX=Math.round(mCSB_container.position().left);
          if(mCSB_containerX<0 && mCSB_containerX<=mCustomScrollBox.width()-mCSB_container.outerWidth()+$this.data("onTotalScroll-Offset")){
            $this.data("onTotalScroll-Callback").call();
          }else{
            $this.data("onScroll-Callback").call();
          }
        }else{
          var mCSB_containerY=Math.round(mCSB_container.position().top);
          if(mCSB_containerY<0 && mCSB_containerY<=mCustomScrollBox.height()-mCSB_container.outerHeight()+$this.data("onTotalScroll-Offset")){
            $this.data("onTotalScroll-Callback").call();
          }else{
            $this.data("onScroll-Callback").call();
          }
        }
      }else{ /*is touch device*/
        if($this.data("horizontalScroll")){
          var mCustomScrollBoxX=Math.round(mCustomScrollBox.scrollLeft());
          if(mCustomScrollBoxX>0 && mCustomScrollBoxX>=mCSB_container.outerWidth()-$this.width()-$this.data("onTotalScroll-Offset")){
            $this.data("onTotalScroll-Callback").call();
          }else{
            $this.data("onScroll-Callback").call();
          }
        }else{
          var mCustomScrollBoxY=Math.round(mCustomScrollBox.scrollTop());
          if(mCustomScrollBoxY>0 && mCustomScrollBoxY>=mCSB_container.outerHeight()-$this.height()-$this.data("onTotalScroll-Offset")){
            $this.data("onTotalScroll-Callback").call();
          }else{
            $this.data("onScroll-Callback").call();
          }
        }
      }
    }
  }
  $.fn.mCustomScrollbar=function(method){
    if(methods[method]){
      return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
    }else if(typeof method==="object" || !method){
      return methods.init.apply(this,arguments);
    }else{
      $.error("Method "+method+" does not exist");
    }
  };
})(jQuery);
/*
 * jQuery UI addresspicker @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   jquery.ui.autocomplete.js
 */
(function( $, undefined ) {

  $.widget( "ui.addresspicker", {
    options: {
        appendAddressString: "",
        draggableMarker: true,
        regionBias: null,
        mapOptions: {
            zoom: 5,
            center: new google.maps.LatLng(46, 2),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        elements: {
            map: false,
            lat: false,
            lng: false,
            locality: false,
            country: false,
            type: false
        }
    },

    marker: function() {
      return this.gmarker;
    },

    map: function() {
      return this.gmap;
    },

    updatePosition: function() {
      this._updatePosition(this.gmarker.getPosition());
    },

    reloadPosition: function() {
      this.gmarker.setVisible(true);
      this.gmarker.setPosition(new google.maps.LatLng(this.lat.val(), this.lng.val()));
      this.gmap.setCenter(this.gmarker.getPosition());
    },

    selected: function() {
      return this.selectedResult;
    },

    _create: function() {
      this.geocoder = new google.maps.Geocoder();
      this.element.autocomplete({
        source: $.proxy(this._geocode, this),
        focus:  $.proxy(this._focusAddress, this),
        select: $.proxy(this._selectAddress, this),
        open: function(event, ui){

          var // positioning
          top  = $("#autocomplete").parent().offset().top + 40,
          left = $("#autocomplete").parent().offset().left + $("#autocomplete").parent().outerWidth(true) - $("#autocomplete").parent().css("marginRight").replace("px", "") -  $(".ui-autocomplete").outerWidth(true) - 5;

          $(".ui-autocomplete").css({ top: top, left: left });

        }
      });

      this.lat      = $(this.options.elements.lat);
      this.lng      = $(this.options.elements.lng);
      this.locality = $(this.options.elements.locality);
      this.country  = $(this.options.elements.country);
      this.type     = $(this.options.elements.type);

      if (this.options.elements.map) {
        this.mapElement = $(this.options.elements.map);
        this._initMap();
      }

    },

    _initMap: function() {
      if (this.lat && this.lat.val()) {
        this.options.mapOptions.center = new google.maps.LatLng(this.lat.val(), this.lng.val());
      }

      this.gmap = new google.maps.Map(this.mapElement[0], this.options.mapOptions);
      this.gmarker = new google.maps.Marker({
        position: this.options.mapOptions.center,
        map:this.gmap,
        draggable: this.options.draggableMarker});
      google.maps.event.addListener(this.gmarker, 'dragend', $.proxy(this._markerMoved, this));
      this.gmarker.setVisible(false);
    },

    _updatePosition: function(location) {
      if (this.lat) {
        this.lat.val(location.lat());
      }
      if (this.lng) {
        this.lng.val(location.lng());
      }
    },

    _markerMoved: function() {
      this._updatePosition(this.gmarker.getPosition());
    },

    // Autocomplete source method: fill its suggests with google geocoder results
    _geocode: function(request, response) {
        var address = request.term, self = this;
        this.geocoder.geocode({
            'address': address + this.options.appendAddressString,
            'region': this.options.regionBias
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    results[i].label =  results[i].formatted_address;
                };
            }
            response(results.slice(0, 3));
        })
    },

    _findInfo: function(result, type) {
      for (var i = 0; i < result.address_components.length; i++) {
        var component = result.address_components[i];
        if (component.types.indexOf(type) !=-1) {
          return component.long_name;
        }
      }
      return false;
    },

    _focusAddress: function(event, ui) {
      var address = ui.item;
      if (!address) {
        return;
      }

      if (this.gmarker) {
        this.gmarker.setPosition(address.geometry.location);
        this.gmarker.setVisible(true);

        this.gmap.fitBounds(address.geometry.viewport);
      }
      this._updatePosition(address.geometry.location);

      if (this.locality) {
        this.locality.val(this._findInfo(address, 'locality'));
      }
      if (this.country) {
        this.country.val(this._findInfo(address, 'country'));
      }
      if (this.type) {
        this.type.val(address.types[0]);
      }
    },

    _selectAddress: function(event, ui) {
      this.selectedResult = ui.item;
    }
  });

  $.extend( $.ui.addresspicker, {
    version: "@VERSION"
  });

  // make IE think it doesn't suck
  if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
      for(var i=0; i<this.length; i++){
        if(this[i]==obj){
          return i;
        }
      }
      return -1;
    }
  }

})( jQuery );
///////////////////////////////////////////////////////////////////////////////
//
// jquery.stylishSelect
// Version: 1.0 (2010-02-20)
//
// Copyright (c) 2010 Scott W. Bradley (scottwb@gmail.com)
//
// Dual licensed under the MIT and GPL licenses:
//   http://www.opensource.org/licenses/mit-license.php
//   http://www.gnu.org/licenses/gpl.html
//
///////////////////////////////////////////////////////////////////////////////
(function($){
    $.fn.stylishSelect = function(options) {

        ////////////////////////////////////////////////////////////
        // Private Methods
        ////////////////////////////////////////////////////////////
        
        // Handler to detect when the parent form of a given select
        // element has been reset, to find the new selected option
        // of the select and act like it was clicked.
        var _onReset = function(elem) {
            var $select = $(elem);
            var idx = (elem.selectedIndex < 0) ? 0 : elem.selectedIndex;
            $('ul', $select.parent()).each(function() {
                $('a:eq(' + idx + ')', this).click();
            });
        };

        // Closes all open selects.
        var _closeAllSelects = function() {
            $('.ssSelectWrapper.expanded').removeClass('expanded');
            $('.ssSelectWrapper ul:visible').hide();
        };
        
        var _enableSelect = function(elem) {
            var $select  = $(elem);
            var $wrapper = $select.siblings('.ssSelectWrapper');
            elem.disabled = false;
            $wrapper.removeClass('disabled');
        };
        
        var _disableSelect = function(elem) {
            var $select  = $(elem);
            var $wrapper = $select.siblings('.ssSelectWrapper');
            elem.disabled = true;
            $wrapper.addClass('disabled');
        };

        // Clears out all options and repopulates them from the original
        // select.
        var _updateOptions = function(elem) {
            var $select = $(elem);
            var $wrapper = $select.siblings('.ssSelectWrapper');

            // If select is disabled, set the wrapper to disabled.
            if (elem.disabled) {
                $wrapper.addClass('disabled');
            }

            // Clear out options and repopulate with new ones.
            var $ul = $wrapper.find('ul').find('li').remove().end().hide();
            $('option', $select).each(function(i) {
                if (this.disabled) {
                    $ul.append(
                        '<li><span class="disabled" index="' + i + '">' +
                        this.text                                       +
                        '</span></li>'
                    );
                }
                else {
                    $ul.append(
                        '<li><a href="#" index="' + i + '">' +
                        this.text                            +
                        '</a></li>'
                    );
                }
            });

            // Add click handlers for the options.
            $ul.find('a').click(function() {
                var $link = $(this);
                var linkIndex = $link.attr('index');

                // Unselect previous option, select this option, and
                // update the menu's text label.
                $('a.selected', $wrapper).removeClass('selected');
                $link.addClass('selected');
                $('span:eq(0)', $wrapper).html($link.html());

                // Set the newly selected option in the original select
                /// and fire the select's onchange event.
                if ((elem.selectedIndex != linkIndex)) {
                    elem.selectedIndex = linkIndex;
                    $(elem).trigger('change');
                }

                // Hide the drop-down list.
                $wrapper.removeClass('expanded');
                $ul.hide();

                return false;
            });

            // Set the default
            $('a:eq(' + elem.selectedIndex + ')', $ul).click();
        };
 
        // Initialize the given select element with stylishSelect.
        var _initSelect = function(elem) {
            var $select = $(elem);
            var zIndex  = $select.css('zIndex')*1;
            zIndex      = (zIndex) ? zIndex : 0;

            // First, wrap the select.
            $select.wrap(
                $('<div class="stylishSelectWrapper"></div>').css({zIndex:100-zIndex})
            );

            // Have to wait until after wrapping to get the correct width.
            var width = parseInt($select.css('width'));

            // Add a class to hide the select and add our custom HTML after it.
            $select.addClass('ssHidden').after(
                '<div class="ssSelectWrapper">'             +
                '  <div>'                                   +
                '    <span class="ssText"></span>'          +
                '    <span class="ssOpenButton"></span>'    + 
                '  </div>'                                  +
                '  <ul></ul>'                               +
                '</div>'
            );
            
            // Get the wrapper we just added and force it to have the same
            // width as the original select.
            var $wrapper = $select.siblings('.ssSelectWrapper').css({
                width : width + 'px'
            });

            // Set the width of the text area wrapper to be the width of
            // the whole thing minus the width of the open button.
            $('.ssText', $wrapper).width(
                width - parseInt($('.ssOpenButton', $wrapper).css('width'))
            );

            // Add the standard iframe hack for IE6 to hide the select.
            if ($.browser.msie && $.browser.version < 7) {
                $select.after(
                    $(
                        '<iframe src="javascript:\'\';"' +
                        '        marginwidth="0"' +
                        '        marginheight="0"' +
                        '        align="bottom"' +
                        '        scrolling="no"' +
                        '        tabIndex="-1"' +
                        '        frameborder="0"></iframe>'
                    ).css({
                        height : $select.height() + 4 + 'px'
                    })
                );
            }

            // Add the options.
            _updateOptions(elem);
            
            // Add click handler to text/open-button that expands/collapses
            // the drop-down.
            $('div', $wrapper).click(function() {
                if ($wrapper.hasClass('disabled')) {
                    return false;
                }

                var $ul = $(this).siblings('ul');

                if ($ul.css('display') == 'none') {
                    // Drop-down wasn't showing.
                    // Immediately close all others and add the 'expanded'
                    // class to this one.
                    // Toggling to expand is handled below.
                    _closeAllSelects();
                    $wrapper.addClass('expanded');
                }
                else {
                    // Drop-down was already showing.
                    // Remove the 'expanded' class.
                    // Toggling to collapse is handled below.
                    $wrapper.removeClass('expanded');
                }
                
                // Expand/collapse the select that was just clicked.
                $ul.slideToggle('fast');

                return false;
            });

            // Handle the parent form being reset.
            $select.parents('form').bind(
                'reset',
                function() {
                    window.setTimeout(
                        function() {
                            _onReset(elem);
                        },
                        10
                    );
                }
            );
            
            // Hide the original select.
            $('.ssHidden').css({opacity:0});
        };

        // Setup a click handler for clicks *outside* of the select.
        $(document).mousedown(function(event) {
            if ($(event.target).parents('.ssSelectWrapper').length === 0) {
                _closeAllSelects();
            }
        });

        // Extend and initialize each given select element.
        return this.each(function() {
            // Add public methods directly on DOM element.
            this.ssDisable = function() { _disableSelect(this); };
            this.ssEnable  = function() { _enableSelect(this);  };
            this.ssUpdate  = function() { _updateOptions(this); };

            // Initialize with stylishSelect.
            _initSelect(this);
        });

    }; // end plugin

})(jQuery);
/**
* Stylish Select 0.4.6 - jQuery plugin to replace a select drop down box with a stylable unordered list
* http://github.com/scottdarby/Stylish-Select
* 
* Requires: jQuery 1.3 or newer
* 
* Contributions from Justin Beasley: http://www.harvest.org/ Anatoly Ressin: http://www.artazor.lv/ Wilfred Hughes: https://github.com/Wilfred
* 
* Dual licensed under the MIT and GPL licenses.
*/
(function($){
    //add class to html tag
    $('html').addClass('stylish-select');

    //Cross-browser implementation of indexOf from MDN: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(searchElement /*, fromIndex */){
            if (this === void 0 || this === null)
                throw new TypeError();

            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0)
                return -1;

            var n = 0;
            if (arguments.length > 0){
                n = Number(arguments[1]);
                if (n !== n) // shortcut for verifying if it's NaN
                    n = 0;
                else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }

            if (n >= len)
                return -1;

            var k = n >= 0
            ? n
            : Math.max(len - Math.abs(n), 0);

            for (; k < len; k++){
                if (k in t && t[k] === searchElement)
                    return k;
            }
            return -1;
        };
    }

    //utility methods
    $.fn.extend({
        getSetSSValue: function(value){
            if (value){
                //set value and trigger change event
                $(this).val(value).change();
                return this;
            } else {
                return $(this).find(':selected').val();
            }
        },
        //added by Justin Beasley
        resetSS: function(){
            var oldOpts = $(this).data('ssOpts');
            $this = $(this);
            $this.next().remove();
            //unbind all events and redraw
            $this.unbind('.sSelect').sSelect(oldOpts);
        }
    });

    $.fn.sSelect = function(options){
        return this.each(function(){
            var defaults = {
                defaultText:    'Please select',
                animationSpeed: 0, //set speed of dropdown
                ddMaxHeight:    '120', //set css max-height value of dropdown
                containerClass: '' //additional classes for container div
            };

            //initial variables
            var opts = $.extend(defaults, options),
            $input = $(this),
            $containerDivText    = $('<div class="selectedTxt"><span></span></div>'),
            $containerDiv        = $('<div class="newListSelected ' + opts.containerClass + '"></div>'),
            $containerDivWrapper = $('<div class="SSContainerDivWrapper" style="visibility:hidden;"></div>'),
            $newUl               = $('<ul class="newList"></ul>'),
            itemIndex            = -1,
            currentIndex         = -1,
            prevIndex            = -1,
            keys                 = [],
            prevKey              = false,
            prevented            = false,
            $newLi;

            //added by Justin Beasley
            $(this).data('ssOpts',options);

            // Get parent width to set to the elements :)
            defaults.width = $(this).parent().width();

            //build new list
            $containerDiv.insertAfter($input);
            $containerDiv.attr("tabindex", $input.attr("tabindex") || "0");
            $containerDivText.prependTo($containerDiv);
            $newUl.appendTo($containerDiv);
            $newUl.wrap($containerDivWrapper);
            $containerDivWrapper = $newUl.parent();
            $input.hide();

            // Set width dimensions
            $containerDiv.find('.selectedTxt').width(defaults.width - 18);
            $containerDiv.find('.SSContainerDivWrapper').width(defaults.width);

            //added by Justin Beasley (used for lists initialized while hidden)
            $containerDivText.data('ssReRender',!$containerDivText.is(':visible'));


            //test for optgroup
            if ($input.children('optgroup').length == 0){
                $input.children().each(function(i){
                    var option = $(this).text();
                    var key = $(this).val();

                    //add first letter of each word to array
                    keys.push(option.charAt(0).toLowerCase());
                    if ($(this).attr('selected') == 'selected' || $(this).attr('selected') == true){
                        opts.defaultText = option;
                        currentIndex = prevIndex = i;
                    }
                    $newUl.append($('<li style="' + (i==0? 'display:none' : '') + '"><a href="JavaScript:void(0);">'+option+'</a></li>').data('key', key));

                });
                //cache list items object
                $newLi = $newUl.children().children();

            } else { //optgroup
                $input.children('optgroup').each(function(){
                    var optionTitle = $(this).attr('label'),
                    $optGroup = $('<li class="newListOptionTitle">'+optionTitle+'</li>'),
                    $optGroupList = $('<ul></ul>');

                    $optGroup.appendTo($newUl);
                    $optGroupList.appendTo($optGroup);

                    $(this).children().each(function(){
                        ++itemIndex;
                        var option = $(this).text();
                        var key = $(this).val();
                        //add first letter of each word to array
                        keys.push(option.charAt(0).toLowerCase());
                        if ($(this).attr('selected') == 'selected' || $(this).attr('selected') == true)
                        {
                            opts.defaultText = option;
                            currentIndex = prevIndex = itemIndex;
                        }
                        $optGroupList.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));
                    })
                });
                //cache list items object
                $newLi = $newUl.find('ul li a');
            }

            //get heights of new elements for use later

            var _height = 15 * $newUl.find('li').size();
            
            //$newUl.height(_height);
            //$containerDivWrapper.height(_height);


            var newUlHeight = _height,
            containerHeight = _height,
            newLiLength     = $newLi.length;


            //check if a value is selected
            if (currentIndex != -1){
                navigateList(currentIndex);
            } else {
                //set placeholder text
                $containerDivText.html(opts.defaultText + '<span></span>');
            }

            //decide if to place the new list above or below the drop-down
            function newUlPos(){
                var containerPosY = $containerDiv.offset().top,
                docHeight         = $(window).height(),
                scrollTop         = $(window).scrollTop();

                //if height of list is greater then max height, set list height to max height value
                if (newUlHeight > parseInt(opts.ddMaxHeight)){
                    newUlHeight = parseInt(opts.ddMaxHeight);
                }

                // containerPosY = containerPosY-scrollTop;
                // if (containerPosY+newUlHeight >= docHeight){
                //     $newUl.css({
                //         height: newUlHeight
                //     });
                //     $containerDivWrapper.css({
                //         top:    '-'+newUlHeight+'px',
                //         height: newUlHeight
                //     });
                //     $input.onTop = true;
                // } else {

                    $newUl.css({
                        height: newUlHeight + 'px'
                    });
                    $containerDivWrapper.css({
                        top:     containerHeight - 3 +'px',
                        height: newUlHeight + 'px'
                    });
                    $input.onTop = false;
                //}
            }

            //run function on page load
            newUlPos();

            //run function on browser window resize
            $(window).bind('resize.sSelect scroll.sSelect', newUlPos);

            //positioning
            function positionFix(){
                $containerDiv.css('position','relative');
            }

            function positionHideFix(){
                $containerDiv.css(
                {
                    position: 'static'
                });
            }

            $containerDivText.bind('click.sSelect',function(event){
                event.stopPropagation();


                //added by Justin Beasley
                if($(this).data('ssReRender')){
                	//var _height = 15 * $newUl.find('li').size();
                  newUlHeight = $newUl.height('').height();
                  //newUlHeight = _height;
                  $containerDivWrapper.height('');
                  containerHeight = $containerDiv.height();
                  //containerHeight = _height;

                  $(this).data('ssReRender',false);
                  newUlPos();
                }

                //hide all menus apart from this one
                $('.SSContainerDivWrapper')
                .not($(this).next())
                .hide()
                .parent()
                .css('position', 'static')
                .removeClass('newListSelFocus');

                if ($containerDivWrapper.is(':visible')) {
                	$(this).closest('.newListSelected').removeClass('newListOpened');
                } else {
                	$(this).closest('.newListSelected').addClass('newListOpened');
                }

                //show/hide this menu
                $containerDivWrapper.toggle();

                // HACK for lionbars
                if ($newUl.attr('vratio')==undefined) {
									$newUl.lionbars();
                }
                
                positionFix();

                //scroll list to selected item
                if(currentIndex == -1) currentIndex = 0;
                $newLi.eq(currentIndex).focus();
            });

            function closeDropDown(fireChange, resetText){
                if(fireChange == true){
                    prevIndex = currentIndex;
                    $input.change();
                }

                if(resetText == true){
                    currentIndex = prevIndex;
                    navigateList(currentIndex);
                }

                $containerDivText.closest('.newListSelected').removeClass('newListOpened newListSelHover');
                $containerDivWrapper.hide();
                positionHideFix();
            }

            $newLi.bind('click.sSelect',function(e){
                var $clickedLi = $(e.target);

                //update counter
                currentIndex = $newLi.index($clickedLi);

                //remove all hilites, then add hilite to selected item
                prevented = true;
                navigateList(currentIndex, true);
                closeDropDown();
            });

            $newLi.bind('mouseenter.sSelect',
                function(e){
                    var $hoveredLi = $(e.target);
                    $hoveredLi.addClass('newListHover');
                }).bind('mouseleave.sSelect',
                function(e){
                    var $hoveredLi = $(e.target);
                    $hoveredLi.removeClass('newListHover');
                });

            function navigateList(currentIndex, fireChange){
                if(currentIndex == -1){
                    $containerDivText.html(opts.defaultText + '<span></span>');
                    $newLi.removeClass('hiLite');
                } else {
                    $newLi.removeClass('hiLite')
                    .eq(currentIndex)
                    .addClass('hiLite');

                    var text = $newLi.eq(currentIndex).text(),
                    val = $newLi.eq(currentIndex).parent().data('key');

                    try {
                        $input.val(val)
                    } catch(ex) {
                        // handle ie6 exception
                        $input[0].selectedIndex = currentIndex;
                    }

                    $containerDivText.html(text + '<span></span>');

                    //only fire change event if specified
                    if(fireChange == true){
                        prevIndex = currentIndex;
                        $input.change();
                    }

                    if ($containerDivWrapper.is(':visible')){
                        $newLi.eq(currentIndex).focus();
                    }
                }
            }

            $input.bind('change.sSelect',function(event){
                var $targetInput = $(event.target);
                //stop change function from firing
                if (prevented == true){
                    prevented = false;
                    return false;
                }
                var $currentOpt  = $targetInput.find(':selected');
                currentIndex = $targetInput.find('option').index($currentOpt);
                navigateList(currentIndex);
            });

            //handle up and down keys
            function keyPress(element){
                //when keys are pressed
                $(element).unbind('keydown.sSelect').bind('keydown.sSelect',function(e){
                    var keycode = e.which
                    	, shift = e.shiftKey;

                    //prevent change function from firing
                    prevented = true;

                    switch(keycode){
                        case 40: //down
                        case 39: //right
                            incrementList();
                            return false;
                            break;
                        case 38: //up
                        case 37: //left
                            decrementList();
                            return false;
                            break;
                        case 33: //page up
                        case 36: //home
                            gotoFirst();
                            return false;
                            break;
                        case 34: //page down
                        case 35: //end
                            gotoLast();
                            return false;
                            break;
                        case 13: //enter
                        case 27: //esc
                            closeDropDown(true);
                            return false;
                            break;
                        case 9: //tab
                            closeDropDown(true);
                            if (!shift) {
                            	nextFormElement();
                            } else {
                            	previousFormElement();
                            }

                            return false;
                            break;
                    }

                    //check for keyboard shortcuts
                    keyPressed = String.fromCharCode(keycode).toLowerCase();
                    
                    var currentKeyIndex = keys.indexOf(keyPressed);

                    if (typeof currentKeyIndex != 'undefined'){ //if key code found in array
                        ++currentIndex;
                        currentIndex = keys.indexOf(keyPressed, currentIndex); //search array from current index

                        if (currentIndex == -1 || currentIndex == null || prevKey != keyPressed){
                            // if no entry was found or new key pressed search from start of array
                            currentIndex = keys.indexOf(keyPressed);
                        }

                        navigateList(currentIndex);
                        //store last key pressed
                        prevKey = keyPressed;
                        return false;
                    }
                });
            }

            function incrementList(){
                if (currentIndex < (newLiLength-1)){
                    ++currentIndex;
                    navigateList(currentIndex);
                }
            }

            function decrementList(){
                if (currentIndex > 0){
                    --currentIndex;
                    navigateList(currentIndex);
                }
            }

            function gotoFirst(){
                currentIndex = 0;
                navigateList(currentIndex);
            }

            function gotoLast(){
                currentIndex = newLiLength-1;
                navigateList(currentIndex);
            }

            $containerDiv.bind('click.sSelect',function(e){
                e.stopPropagation();
                keyPress(this);
            });

            $containerDiv.bind('focus.sSelect',function(){
                $(this).addClass('newListSelFocus');
                keyPress(this);
            });

            $containerDiv.bind('blur.sSelect',function(){
                $(this).removeClass('newListSelFocus');
            });

            //hide list on blur
            $(document).bind('click.sSelect',function(){
                $containerDiv.removeClass('newListSelFocus');
                if ($containerDivWrapper.is(':visible')){
                    closeDropDown(false, true);
                } else {
                    closeDropDown(false);
                }
            });

            //select next form element in document
            function nextFormElement() {
                var fields = $('body').find('button,input,textarea,select');
                var index = fields.index($input);

                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }
                return false;
            }


            //select next form element in document
            function previousFormElement() {
                var fields = $('body').find('button,input,textarea,select');
                var index = fields.index($input);
                if (index > -1 && (index - 1) > 0) {
                    fields.eq(index - 1).focus();
                }
                return false;
            }


            // handle focus on original select element
            $input.focus(function(){
                $input.next().focus();
            })

            //add classes on hover
            $containerDivText.bind('mouseenter.sSelect',
                function(e){
                    var $hoveredTxt = $(e.target);
                    $hoveredTxt.parent().addClass('newListSelHover');
                }).bind('mouseleave.sSelect',
                function(e){
                    var $hoveredTxt = $(e.target);
                    $hoveredTxt.parent().removeClass('newListSelHover');
                });

            //reset left property and hide
            $containerDivWrapper.css({
                left: '0',
                display: 'none',
                visibility: 'visible'
            });

        });

    };
})(jQuery);







// LION BARS v0.3
(function( $ ) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    };
	$.fn.lionbars = function(options) {
		options = options || {};
		autohide = options.autohide;
		
		// Flags
		var timeout,
			HDragging=false,
			VDragging=false,
			activeScroll=0,
			activeWrap=0,
			eventX,
			eventY,
			mouseX,
			mouseY,
			currentRatio,
			initPos,
			scrollValue,
			hideTimeoutSet=false,
			vEventFired = false,
			hEventFired = false;
		
		// Initialization
		var elements = $(this),
			id = 0,
			vScrollWidth=0, hScrollWidth=0,
			addHScroll=false, addVScroll=false,
			paddingTop=0, paddingLeft=0, paddingBottom=0, paddingRight=0,
			borderTop=0, borderRight=0, borderBottom=0, borderLeft=0,
			scrollHeight=0, scrollWidth=0, offsetWidth=0, offsetHeight=0, clientWidth=0, clientHeight=0,
			vRatio=0, hRatio=0,
			vSliderHeight=0, hSliderHeight=0,
			vLbHeight=0, hLbHeight=0;
		
		// Main Loop
		mainLoop();
		
		function mainLoop() {
			for (var i=0; elements[i] !== undefined; i++) {
				if (needScrollbars(elements[i]) && !$(elements[i]).hasClass('nolionbars')) {
					// add the element to the main array
					target = elements[i];
					
					// get some values before the element is wrapped
					getDimentions(target);
					
					// wrap the element
					wrap(target, addVScroll, addHScroll);
					
					// hide the default scrollbar
					hideScrollbars(target, addVScroll, addHScroll);
					
					// Calculate the size of the scrollbars
					reduceScrollbarsWidthHeight(target);
					setSlidersHeight(target);
					
					// Set variables needed to calculate scroll speed, etc.
					setScrollRatios(target);
					
					// Set events
					setEvents(target);
					
					// prepare for next element
					resetVars();

				}
			}
		}
		
		// Set document events
		$(document).mousemove(function(e) {
			if (VDragging) {
				mouseY = e.pageY;
				activeWrap.scrollTop((initPos + mouseY - eventY) * Math.abs(currentRatio));
			}
			if (HDragging) {
				mouseX = e.pageX;
				activeWrap.scrollLeft((initPos + mouseX - eventX) * Math.abs(currentRatio));
			}
		});
		$(document).mouseup(function(e) {
			if (VDragging) {
				VDragging = false;
			}
			if (HDragging) {
				HDragging = false;
			}
		});
		
		// Core functions
		function setEvents(elem) {
			var el = $(elem);
			
			if (addVScroll || addHScroll) {
				el.find('.lb-wrap').scroll(function(e) {
					el.find('.lb-v-scrollbar-slider').css({ "top" : -$(this).scrollTop()/el.attr('vratio') });
					el.find('.lb-h-scrollbar-slider').css({ "left" : -$(this).scrollLeft()/el.attr('hratio') });
					
					if (el.find('.lb-v-scrollbar').height() == (parseInt(el.find('.lb-v-scrollbar-slider').css('top')) + el.find('.lb-v-scrollbar-slider').height())
						&& typeof(options.reachedBottom) == 'function'
						&& !vEventFired
					) {
						vEventFired = true;
						var self = $(this);
						
						options.reachedBottom.apply($(this).children('.lb-content'), [function () {
							getDimentions($(self).parent(), {
								height: $(self).children('.lb-content').get(0).scrollHeight,
								width: $(self).children('.lb-content').get(0).scrollWidth
							});
							
							// Calculate the size of the scrollbars
							reduceScrollbarsWidthHeight($(self).parent());
							setSlidersHeight($(self).parent());
							
							// Set variables needed to calculate scroll speed, etc.
							setScrollRatios($(self).parent());
							
							// prepare for next element
							resetVars();
							
							vEventFired = false;
						}]);
					}
					
					if (el.find('.lb-h-scrollbar').width() == (parseInt(el.find('.lb-h-scrollbar-slider').css('left')) + el.find('.lb-h-scrollbar-slider').width())
						&& typeof(options.reachedRight) == 'function'
						&& !hEventFired
					) {
						hEventFired = true;
						var self = $(this);
						
						options.reachedRight.apply($(this).children('.lb-content'), [function () {
							getDimentions($(self).parent(), {
								height: $(self).children('.lb-content').get(0).scrollHeight,
								width: $(self).children('.lb-content').get(0).scrollWidth
							});
							
							// Calculate the size of the scrollbars
							reduceScrollbarsWidthHeight($(self).parent());
							setSlidersHeight($(self).parent());
							
							// Set variables needed to calculate scroll speed, etc.
							setScrollRatios($(self).parent());
							
							// prepare for next element
							resetVars();
							
							hEventFired = false;
						}]);
					}
					
					if (autohide) {
						el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeIn(150);
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeOut(150);
						}, 2000);
					}
				});
			}
			
			if (addVScroll) {
				el.find('.lb-v-scrollbar-slider').mousedown(function(e) {
					eventY = e.pageY;
				
					VDragging = true;
					activeScroll = $(this);
					activeWrap = el.find('.lb-wrap');
					currentRatio = activeWrap.parent().attr('vratio');
					initPos = activeScroll.position().top;
					return false;
				});
				el.find('.lb-v-scrollbar').mousedown(function(e) {
					if (!$(e.target).hasClass('lb-v-scrollbar-slider')) {
						el.find('.lb-wrap').scrollTop((e.pageY - $(this).offset().top) * Math.abs(el.attr('vratio')) - $(this).find('.lb-v-scrollbar-slider').height()/2);
					}
					return false;
				});
			}
			
			if (addHScroll) {
				el.find('.lb-h-scrollbar-slider').mousedown(function(e) {
					eventX = e.pageX;
					
					HDragging = true;
					activeScroll = $(this);
					activeWrap = el.find('.lb-wrap');
					currentRatio = activeWrap.parent().attr('hratio');
					initPos = activeScroll.position().left;
					return false;					
				});
				el.find('.lb-h-scrollbar').mousedown(function(e) {
					if (!$(e.target).hasClass('lb-h-scrollbar-slider')) {
						el.find('.lb-wrap').scrollLeft((e.pageX - $(this).offset().left) * Math.abs(el.attr('hratio')) - $(this).find('.lb-h-scrollbar-slider').width()/2);
					}
					return false;
				});
			}
			
			if ((addVScroll || addHScroll) && autohide) {
				el.find('.lb-v-scrollbar, .lb-h-scrollbar').hide();
				
				el.hover(function() {
				}, function() {
					el.find('.lb-v-scrollbar, .lb-h-scrollbar').fadeOut(150);
				});
			}
		}
		function setScrollRatios(elem) {
			vRatio = (offsetHeight - $(elem).find('.lb-wrap').get(0).scrollHeight - borderTop - borderBottom)/(vLbHeight - vSliderHeight);
			hRatio = (offsetWidth - $(elem).find('.lb-wrap').get(0).scrollWidth - borderLeft - borderRight)/(hLbHeight - hSliderHeight);
			
			var el = $(elem);
			el.attr('vratio', vRatio);
			el.attr('hratio', hRatio);
		}
		function setSlidersHeight(elem) {
			var el = $(elem);
			var hmin, hmax, gap;
			
			if (el.find('.lb-v-scrollbar').length != 0) {
				hmin = 20;
				gap = offsetHeight - el.find('.lb-v-scrollbar').height();
				hmax = offsetHeight - gap - hmin;
				vSliderHeight = Math.round((offsetHeight*hmax)/scrollHeight);
				vSliderHeight = (vSliderHeight < hmin) ? hmin : vSliderHeight;
			}
			
			if (el.find('.lb-h-scrollbar').length != 0) {
				hmin = 20;
				gap = offsetWidth - el.find('.lb-h-scrollbar').width();
				hmax = offsetWidth - gap - hmin;
				hSliderHeight = Math.round((offsetWidth*hmax)/scrollWidth);
				hSliderHeight = (hSliderHeight < hmin) ? hmin : hSliderHeight;
			}
			el.find('.lb-v-scrollbar-slider').css({ "height" : vSliderHeight });
			el.find('.lb-h-scrollbar-slider').css({ "width" : hSliderHeight });
		}
		function resetVars() {
			vScrollWidth = 0;
			hScrollWidth = 0;
			addHScroll=false;
			addVScroll=false;
			paddingTop = 0;
			paddingLeft = 0;
			paddingBottom = 0;
			paddingRight = 0;
			borderTop = 0;
			borderLeft = 0;
			borderBottom = 0;
			borderRight = 0;
			scrollHeight = 0;
			scrollWidth = 0;
			offsetWidth = 0;
			offsetHeight = 0;
			clientWidth = 0;
			clientHeight = 0;
			// vRatio = 0;
			// hRatio = 0;
			vSliderHeight = 0;
			hSliderHeight = 0;
			vLbHeight = 0;
			hLbHeight = 0;
		}
		function reduceScrollbarsWidthHeight(elem) {
			var el = $(elem);
			
			if (addVScroll && addHScroll) {
				vLbHeight = el.height()-12;
				hLbHeight = el.width()-12;
				el.find('.lb-v-scrollbar').css({ "height" : vLbHeight });
				el.find('.lb-h-scrollbar').css({ "width" : hLbHeight });
			} else {
				vLbHeight = el.height()-4;
				hLbHeight = el.width()-4;
				el.find('.lb-v-scrollbar').css({ "height" : vLbHeight });
				el.find('.lb-h-scrollbar').css({ "width" : hLbHeight });
			}
		}
		function hideScrollbars(elem, vscroll, hscroll) {
			var el = $(elem);
			
			if (vscroll || hscroll) {
				el.css({ "overflow" : 'hidden' });
				movePadding(el, el.find('.lb-wrap'));
				resizeMainBox(el);
				resizeInnerWrap(el, el.find('.lb-wrap'));
			}
		}
		function resizeMainBox(elem) {
			var el = $(elem);
			el.css({ "width" : el.width() + paddingLeft + paddingRight, "height" : el.height() + paddingTop + paddingBottom });
		}
		function movePadding(from, to) {
			var fromEl = $(from);
			var toEl = $(to);
			
			fromEl.css({ "padding" : 0 });
			toEl.css({
				"padding-top" : paddingTop+'px',
				"padding-left" : paddingLeft+'px',
				"padding-bottom" : paddingBottom+'px',
				"padding-right" : paddingRight+'px' 
			});
		}
		function resizeInnerWrap(main, child) {
			var mainEl = $(main);
			var childEl = $(child);
			mainEl.css({ "position" : 'relative' });
			childEl.css({
				"width" : mainEl.width()+vScrollWidth - paddingLeft - paddingRight, 
				"height" : mainEl.height()+hScrollWidth - paddingTop - paddingBottom 
			});
		}
		function setVScrollbarWidth(elem) {
			var el = $(elem);
			el.css({ "overflow" : 'auto' });
			vScrollWidth = offsetWidth - clientWidth - borderLeft - borderRight;
			el.css({ "overflow" : 'hidden' });
		}
		function setHScrollbarWidth(elem) {
			var el = $(elem);
			el.css({ "overflow" : 'auto' });
			hScrollWidth = offsetHeight - clientHeight - borderTop - borderBottom;
			el.css({ "overflow" : 'hidden' });
		}
		function wrap(elem, vscroll, hscroll) {
			var el = $(elem);
			var elemId = el.attr('id');
			var wrap = 0;
			
			if (elemId !== undefined) {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'-'+elemId+'"></div>');
				wrap = $('#lb-wrap-'+id+'-'+elemId);
			} else {
				el.wrapInner('<div class="lb-wrap" id="lb-wrap-'+id+'"></div>');
				wrap = $('#lb-wrap-'+id);
			}
			wrap.wrapInner('<div class="lb-content"></div>');
			if (vscroll) {
				el.prepend('<div class="lb-v-scrollbar"></div>');
				el.find('.lb-v-scrollbar').append('<div class="lb-v-scrollbar-slider"></div>');
			}
			if (hscroll) {
				el.prepend('<div class="lb-h-scrollbar"></div>');
				el.find('.lb-h-scrollbar').append('<div class="lb-h-scrollbar-slider"></div>');
			}

			// preparation for the next element
			id = id + 1;
		}
		function needScrollbars(elem) {
			var el = $(elem);
			addVScroll = false;
			addHScroll = false;
			
			getPadding(el);
			getBorders(el);
			
			el.css({ "overflow" : 'hidden' });
			
			// check for vertical scrollbars

			if (el.get(0).scrollHeight > el.get(0).clientHeight) {
				addVScroll = true;
				// setVScrollbarWidth(el);
			}

			// check for horizontal scrollbars
			if (el.get(0).scrollWidth > el.get(0).clientWidth) {
				addHScroll = true;
				// setHScrollbarWidth(el);
			}
			
			el.css({ "overflow" : 'auto' });
			
			if (addVScroll || addHScroll) {
 				return true;
 			}
		}
		function getPadding(elem) {
			var el = $(elem);
			
			paddingTop = parseInt(el.css('padding-top').replace('px', ''));
			paddingLeft = parseInt(el.css('padding-left').replace('px', ''));
			paddingBottom = parseInt(el.css('padding-bottom').replace('px', ''));
			paddingRight = parseInt(el.css('padding-right').replace('px', ''));
		}
		function getBorders(elem) {
			var el = $(elem);
			
			borderTop = parseInt(el.css('border-top-width').replace('px', ''));
			borderRight = parseInt(el.css('border-right-width').replace('px', ''));
			borderBottom = parseInt(el.css('border-bottom-width').replace('px', ''));
			borderLeft = parseInt(el.css('border-left-width').replace('px', ''));
		}
		function getDimentions(elem, scroll) {
			var el = $(elem).get(0);
			
			scrollHeight = (typeof(scroll) != 'undefined') ? scroll.height : el.scrollHeight;
			scrollWidth = (typeof(scroll) != 'undefined') ? scroll.width : el.scrollWidth;
			clientHeight = el.clientHeight;
			clientWidth = el.clientWidth;
			offsetHeight = el.offsetHeight;
			offsetWidth = el.offsetWidth;
			
			setVScrollbarWidth($(elem));
			setHScrollbarWidth($(elem));
		}
		
		return this.each(function() {
			//var $this = $(this);
		});
	};
})( jQuery );/*!
* jScrollPane - v2.0.0beta12 - 2012-07-24
* http://jscrollpane.kelvinluck.com/
*
* Copyright (c) 2010 Kelvin Luck
* Dual licensed under the MIT and GPL licenses.
*/


(function($,window,undefined){

  $.fn.jScrollPane = function(settings)
  {
    // JScrollPane "class" - public methods are available through $('selector').data('jsp')
    function JScrollPane(elem, s)
    {
      var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
      percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
      verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
      verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
      horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
      reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
      wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
      originalElement = elem.clone(false, false).empty(),
      mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

      originalPadding = elem.css('paddingTop') + ' ' +
        elem.css('paddingRight') + ' ' +
        elem.css('paddingBottom') + ' ' +
        elem.css('paddingLeft');
      originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
        (parseInt(elem.css('paddingRight'), 10) || 0);

      function initialise(s)
      {

        var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
        hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
        maintainAtBottom = false, maintainAtRight = false;

        settings = s;

        if (pane === undefined) {
          originalScrollTop = elem.scrollTop();
          originalScrollLeft = elem.scrollLeft();

          elem.css(
            {
              overflow: 'hidden',
              padding: 0
            }
          );
          // TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
          // come back to it later and check once it is unhidden...
          paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
          paneHeight = elem.innerHeight();

          elem.width(paneWidth);

          pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
          container = $('<div class="jspContainer" />')
          .css({
            'width': paneWidth + 'px',
            'height': paneHeight + 'px'
          }
          ).append(pane).appendTo(elem);

        } else {
          elem.css('width', '');

          maintainAtBottom = settings.stickToBottom && isCloseToBottom();
          maintainAtRight  = settings.stickToRight  && isCloseToRight();

          hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

          if (hasContainingSpaceChanged) {
            paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
            paneHeight = elem.innerHeight();
            container.css({
              width: paneWidth + 'px',
              height: paneHeight + 'px'
            });
          }

          // If nothing changed since last check...
          if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
            elem.width(paneWidth);
            return;
          }
          previousContentWidth = contentWidth;

          pane.css('width', '');
          elem.width(paneWidth);

          container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
        }

        pane.css('overflow', 'auto');

        if (s.contentWidth) {
          contentWidth = s.contentWidth;
        } else {
          contentWidth = pane[0].scrollWidth;
        }

        contentHeight = pane[0].scrollHeight;
        pane.css('overflow', '');

        percentInViewH = contentWidth / paneWidth;
        percentInViewV = contentHeight / paneHeight;

        isScrollableV = percentInViewV > 1;
        isScrollableH = percentInViewH > 1;


        if (!(isScrollableH || isScrollableV)) {
          elem.removeClass('jspScrollable');
          pane.css({
            top: 0,
            width: container.width() - originalPaddingTotalWidth
          });
          removeMousewheel();
          removeFocusHandler();
          removeKeyboardNav();
          removeClickOnTrack();
        } else {
          elem.addClass('jspScrollable');

          isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);

          if (isMaintainingPositon) {
            lastContentX = contentPositionX();
            lastContentY = contentPositionY();
          }

          initialiseVerticalScroll();
          initialiseHorizontalScroll();
          resizeScrollbars();

          if (isMaintainingPositon) {
            scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
            scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
          }

          initFocusHandler();
          initMousewheel();
          initTouch();

          if (settings.enableKeyboardNavigation) {
            initKeyboardNav();
          }
          if (settings.clickOnTrack) {
            initClickOnTrack();
          }

          observeHash();
          if (settings.hijackInternalLinks) {
            hijackInternalLinks();
          }
        }

        if (settings.autoReinitialise && !reinitialiseInterval) {
          reinitialiseInterval = setInterval(
            function()
            {
              initialise(settings);
            },
            settings.autoReinitialiseDelay
          );
        } else if (!settings.autoReinitialise && reinitialiseInterval) {
          clearInterval(reinitialiseInterval);
        }

        originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
        originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

        elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
      }

      function initialiseVerticalScroll()
      {
        if (isScrollableV) {

          container.append(
            $('<div class="jspVerticalBar" />').append(
              $('<div class="jspCap jspCapTop" />'),
              $('<div class="jspTrack" />').append(
                $('<div class="jspDrag" />').append(
                  $('<div class="jspDragTop" />'),
                  $('<div class="jspDragBottom" />')
                )
              ),
              $('<div class="jspCap jspCapBottom" />')
            )
          );

          verticalBar = container.find('>.jspVerticalBar');
          verticalTrack = verticalBar.find('>.jspTrack');
          verticalDrag = verticalTrack.find('>.jspDrag');

          if (settings.showArrows) {
            arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
              'mousedown.jsp', getArrowScroll(0, -1)
            ).bind('click.jsp', nil);
            arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
              'mousedown.jsp', getArrowScroll(0, 1)
            ).bind('click.jsp', nil);
            if (settings.arrowScrollOnHover) {
              arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
              arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
            }

            appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
          }

          verticalTrackHeight = paneHeight;
          container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
            function()
            {
              verticalTrackHeight -= $(this).outerHeight();
            }
          );


          verticalDrag.hover(
            function()
            {
              verticalDrag.addClass('jspHover');
            },
            function()
            {
              verticalDrag.removeClass('jspHover');
            }
          ).bind(
            'mousedown.jsp',
            function(e)
            {
              // Stop IE from allowing text selection
              $('html').bind('dragstart.jsp selectstart.jsp', nil);

              verticalDrag.addClass('jspActive');

              var startY = e.pageY - verticalDrag.position().top;

              $('html').bind(
                'mousemove.jsp',
                function(e)
                {
                  positionDragY(e.pageY - startY, false);
                }
              ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
              return false;
            }
          );
          sizeVerticalScrollbar();
        }
      }

      function sizeVerticalScrollbar()
      {
        verticalTrack.height(verticalTrackHeight + 'px');
        verticalDragPosition = 0;
        scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

        // Make the pane thinner to allow for the vertical scrollbar
        pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

        // Add margin to the left of the pane if scrollbars are on that side (to position
        // the scrollbar on the left or right set it's left or right property in CSS)
        try {
          if (verticalBar.position().left === 0) {
            pane.css('margin-left', scrollbarWidth + 'px');
          }
        } catch (err) {
        }
      }

      function initialiseHorizontalScroll()
      {
        if (isScrollableH) {

          container.append(
            $('<div class="jspHorizontalBar" />').append(
              $('<div class="jspCap jspCapLeft" />'),
              $('<div class="jspTrack" />').append(
                $('<div class="jspDrag" />').append(
                  $('<div class="jspDragLeft" />'),
                  $('<div class="jspDragRight" />')
                )
              ),
              $('<div class="jspCap jspCapRight" />')
            )
          );

          horizontalBar = container.find('>.jspHorizontalBar');
          horizontalTrack = horizontalBar.find('>.jspTrack');
          horizontalDrag = horizontalTrack.find('>.jspDrag');

          if (settings.showArrows) {
            arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
              'mousedown.jsp', getArrowScroll(-1, 0)
            ).bind('click.jsp', nil);
            arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
              'mousedown.jsp', getArrowScroll(1, 0)
            ).bind('click.jsp', nil);
            if (settings.arrowScrollOnHover) {
              arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
              arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
            }
            appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
          }

          horizontalDrag.hover(
            function()
            {
              horizontalDrag.addClass('jspHover');
            },
            function()
            {
              horizontalDrag.removeClass('jspHover');
            }
          ).bind(
            'mousedown.jsp',
            function(e)
            {
              // Stop IE from allowing text selection
              $('html').bind('dragstart.jsp selectstart.jsp', nil);

              horizontalDrag.addClass('jspActive');

              var startX = e.pageX - horizontalDrag.position().left;

              $('html').bind(
                'mousemove.jsp',
                function(e)
                {
                  positionDragX(e.pageX - startX, false);
                }
              ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
              return false;
            }
          );
          horizontalTrackWidth = container.innerWidth();
          sizeHorizontalScrollbar();
        }
      }

      function sizeHorizontalScrollbar()
      {
        container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
          function()
          {
            horizontalTrackWidth -= $(this).outerWidth();
          }
        );

        horizontalTrack.width(horizontalTrackWidth + 'px');
        horizontalDragPosition = 0;
      }

      function resizeScrollbars()
      {
        if (isScrollableH && isScrollableV) {
          var horizontalTrackHeight = horizontalTrack.outerHeight(),
          verticalTrackWidth = verticalTrack.outerWidth();
          verticalTrackHeight -= horizontalTrackHeight;
          $(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
            function()
            {
              horizontalTrackWidth += $(this).outerWidth();
            }
          );
          horizontalTrackWidth -= verticalTrackWidth;
          paneHeight -= verticalTrackWidth;
          paneWidth -= horizontalTrackHeight;
          horizontalTrack.parent().append(
            $('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
          );
          sizeVerticalScrollbar();
          sizeHorizontalScrollbar();
        }
        // reflow content
        if (isScrollableH) {
          pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
        }
        contentHeight = pane.outerHeight();
        percentInViewV = contentHeight / paneHeight;

        if (isScrollableH) {
          horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
          if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
            horizontalDragWidth = settings.horizontalDragMaxWidth;
          } else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
            horizontalDragWidth = settings.horizontalDragMinWidth;
          }
          horizontalDrag.width(horizontalDragWidth + 'px');
          dragMaxX = horizontalTrackWidth - horizontalDragWidth;
          _positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
        }
        if (isScrollableV) {
          verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
          if (verticalDragHeight > settings.verticalDragMaxHeight) {
            verticalDragHeight = settings.verticalDragMaxHeight;
          } else if (verticalDragHeight < settings.verticalDragMinHeight) {
            verticalDragHeight = settings.verticalDragMinHeight;
          }
          verticalDrag.height(verticalDragHeight + 'px');
          dragMaxY = verticalTrackHeight - verticalDragHeight;
          _positionDragY(verticalDragPosition); // To update the state for the arrow buttons
        }
      }

      function appendArrows(ele, p, a1, a2)
      {
        var p1 = "before", p2 = "after", aTemp;

        // Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
        // at the top or the bottom of the bar?
        if (p == "os") {
          p = /Mac/.test(navigator.platform) ? "after" : "split";
        }
        if (p == p1) {
          p2 = p;
        } else if (p == p2) {
          p1 = p;
          aTemp = a1;
          a1 = a2;
          a2 = aTemp;
        }

        ele[p1](a1)[p2](a2);
      }

      function getArrowScroll(dirX, dirY, ele)
      {
        return function()
        {
          arrowScroll(dirX, dirY, this, ele);
          this.blur();
          return false;
        };
      }

      function arrowScroll(dirX, dirY, arrow, ele)
      {
        arrow = $(arrow).addClass('jspActive');

        var eve,
        scrollTimeout,
        isFirst = true,
        doScroll = function()
        {
          if (dirX !== 0) {
            jsp.scrollByX(dirX * settings.arrowButtonSpeed);
          }
          if (dirY !== 0) {
            jsp.scrollByY(dirY * settings.arrowButtonSpeed);
          }
          scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
          isFirst = false;
        };

        doScroll();

        eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
        ele = ele || $('html');
        ele.bind(
          eve,
          function()
          {
            arrow.removeClass('jspActive');
            scrollTimeout && clearTimeout(scrollTimeout);
            scrollTimeout = null;
            ele.unbind(eve);
          }
        );
      }

      function initClickOnTrack()
      {
        removeClickOnTrack();
        if (isScrollableV) {
          verticalTrack.bind(
            'mousedown.jsp',
            function(e)
            {
              if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                var clickedTrack = $(this),
                offset = clickedTrack.offset(),
                direction = e.pageY - offset.top - verticalDragPosition,
                scrollTimeout,
                isFirst = true,
                doScroll = function()
                {
                  var offset = clickedTrack.offset(),
                  pos = e.pageY - offset.top - verticalDragHeight / 2,
                  contentDragY = paneHeight * settings.scrollPagePercent,
                  dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
                  if (direction < 0) {
                    if (verticalDragPosition - dragY > pos) {
                      jsp.scrollByY(-contentDragY);
                    } else {
                      positionDragY(pos);
                    }
                  } else if (direction > 0) {
                    if (verticalDragPosition + dragY < pos) {
                      jsp.scrollByY(contentDragY);
                    } else {
                      positionDragY(pos);
                    }
                  } else {
                    cancelClick();
                    return;
                  }
                  scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                  isFirst = false;
                },
                cancelClick = function()
                {
                  scrollTimeout && clearTimeout(scrollTimeout);
                  scrollTimeout = null;
                  $(document).unbind('mouseup.jsp', cancelClick);
                };
                doScroll();
                $(document).bind('mouseup.jsp', cancelClick);
                return false;
              }
            }
          );
        }

        if (isScrollableH) {
          horizontalTrack.bind(
            'mousedown.jsp',
            function(e)
            {
              if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                var clickedTrack = $(this),
                offset = clickedTrack.offset(),
                direction = e.pageX - offset.left - horizontalDragPosition,
                scrollTimeout,
                isFirst = true,
                doScroll = function()
                {
                  var offset = clickedTrack.offset(),
                  pos = e.pageX - offset.left - horizontalDragWidth / 2,
                  contentDragX = paneWidth * settings.scrollPagePercent,
                  dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
                  if (direction < 0) {
                    if (horizontalDragPosition - dragX > pos) {
                      jsp.scrollByX(-contentDragX);
                    } else {
                      positionDragX(pos);
                    }
                  } else if (direction > 0) {
                    if (horizontalDragPosition + dragX < pos) {
                      jsp.scrollByX(contentDragX);
                    } else {
                      positionDragX(pos);
                    }
                  } else {
                    cancelClick();
                    return;
                  }
                  scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                  isFirst = false;
                },
                cancelClick = function()
                {
                  scrollTimeout && clearTimeout(scrollTimeout);
                  scrollTimeout = null;
                  $(document).unbind('mouseup.jsp', cancelClick);
                };
                doScroll();
                $(document).bind('mouseup.jsp', cancelClick);
                return false;
              }
            }
          );
        }
      }

      function removeClickOnTrack()
      {
        if (horizontalTrack) {
          horizontalTrack.unbind('mousedown.jsp');
        }
        if (verticalTrack) {
          verticalTrack.unbind('mousedown.jsp');
        }
      }

      function cancelDrag()
      {
        $('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

        if (verticalDrag) {
          verticalDrag.removeClass('jspActive');
        }
        if (horizontalDrag) {
          horizontalDrag.removeClass('jspActive');
        }
      }

      function positionDragY(destY, animate)
      {
        if (!isScrollableV) {
          return;
        }
        if (destY < 0) {
          destY = 0;
        } else if (destY > dragMaxY) {
          destY = dragMaxY;
        }

        // can't just check if(animate) because false is a valid value that could be passed in...
        if (animate === undefined) {
          animate = settings.animateScroll;
        }
        if (animate) {
          jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
        } else {
          verticalDrag.css('top', destY);
          _positionDragY(destY);
        }

      }

      function _positionDragY(destY)
      {
        if (destY === undefined) {
          destY = verticalDrag.position().top;
        }

        container.scrollTop(0);
        verticalDragPosition = destY;

        var isAtTop = verticalDragPosition === 0,
        isAtBottom = verticalDragPosition == dragMaxY,
        percentScrolled = destY/ dragMaxY,
        destTop = -percentScrolled * (contentHeight - paneHeight);

        if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
          wasAtTop = isAtTop;
          wasAtBottom = isAtBottom;
          elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
        }

        updateVerticalArrows(isAtTop, isAtBottom);
        pane.css('top', destTop);
        elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
      }

      function positionDragX(destX, animate)
      {
        if (!isScrollableH) {
          return;
        }
        if (destX < 0) {
          destX = 0;
        } else if (destX > dragMaxX) {
          destX = dragMaxX;
        }

        if (animate === undefined) {
          animate = settings.animateScroll;
        }
        if (animate) {
          jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
        } else {
          horizontalDrag.css('left', destX);
          _positionDragX(destX);
        }
      }

      function _positionDragX(destX)
      {
        if (destX === undefined) {
          destX = horizontalDrag.position().left;
        }

        container.scrollTop(0);
        horizontalDragPosition = destX;

        var isAtLeft = horizontalDragPosition === 0,
        isAtRight = horizontalDragPosition == dragMaxX,
        percentScrolled = destX / dragMaxX,
        destLeft = -percentScrolled * (contentWidth - paneWidth);

        if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
          wasAtLeft = isAtLeft;
          wasAtRight = isAtRight;
          elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
        }

        updateHorizontalArrows(isAtLeft, isAtRight);
        pane.css('left', destLeft);
        elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
      }

      function updateVerticalArrows(isAtTop, isAtBottom)
      {
        if (settings.showArrows) {
          arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
          arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
        }
      }

      function updateHorizontalArrows(isAtLeft, isAtRight)
      {
        if (settings.showArrows) {
          arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
          arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
        }
      }

      function scrollToY(destY, animate)
      {
        var percentScrolled = destY / (contentHeight - paneHeight);
        positionDragY(percentScrolled * dragMaxY, animate);
      }

      function scrollToX(destX, animate)
      {
        var percentScrolled = destX / (contentWidth - paneWidth);
        positionDragX(percentScrolled * dragMaxX, animate);
      }

      function scrollToElement(ele, stickToTop, animate)
      {
        var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

        // Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
        // errors from the lookup...
        try {
          e = $(ele);
        } catch (err) {
          return;
        }
        eleHeight = e.outerHeight();
        eleWidth= e.outerWidth();

        container.scrollTop(0);
        container.scrollLeft(0);

        // loop through parents adding the offset top of any elements that are relatively positioned between
        // the focused element and the jspPane so we can get the true distance from the top
        // of the focused element to the top of the scrollpane...
        while (!e.is('.jspPane')) {
          eleTop += e.position().top;
          eleLeft += e.position().left;
          e = e.offsetParent();
          if (/^body|html$/i.test(e[0].nodeName)) {
            // we ended up too high in the document structure. Quit!
            return;
          }
        }

        viewportTop = contentPositionY();
        maxVisibleEleTop = viewportTop + paneHeight;
        if (eleTop < viewportTop || stickToTop) { // element is above viewport
          destY = eleTop - settings.verticalGutter;
        } else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
          destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
        }
        if (destY) {
          scrollToY(destY, animate);
        }

        viewportLeft = contentPositionX();
        maxVisibleEleLeft = viewportLeft + paneWidth;
        if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
          destX = eleLeft - settings.horizontalGutter;
        } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
          destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
        }
        if (destX) {
          scrollToX(destX, animate);
        }

      }

      function contentPositionX()
      {
        return -pane.position().left;
      }

      function contentPositionY()
      {
        return -pane.position().top;
      }

      function isCloseToBottom()
      {
        var scrollableHeight = contentHeight - paneHeight;
        return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
      }

      function isCloseToRight()
      {
        var scrollableWidth = contentWidth - paneWidth;
        return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
      }

      function initMousewheel()
      {
        container.unbind(mwEvent).bind(
          mwEvent,
          function (event, delta, deltaX, deltaY) {
            var dX = horizontalDragPosition, dY = verticalDragPosition;
            jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
            // return true if there was no movement so rest of screen can scroll
            return dX == horizontalDragPosition && dY == verticalDragPosition;
          }
        );
      }

      function removeMousewheel()
      {
        container.unbind(mwEvent);
      }

      function nil()
      {
        return false;
      }

      function initFocusHandler()
      {
        pane.find(':input,a').unbind('focus.jsp').bind(
          'focus.jsp',
          function(e)
          {
            scrollToElement(e.target, false);
          }
        );
      }

      function removeFocusHandler()
      {
        pane.find(':input,a').unbind('focus.jsp');
      }

      function initKeyboardNav()
      {
        var keyDown, elementHasScrolled, validParents = [];
        isScrollableH && validParents.push(horizontalBar[0]);
        isScrollableV && validParents.push(verticalBar[0]);

        // IE also focuses elements that don't have tabindex set.
        pane.focus(
          function()
          {
            elem.focus();
          }
        );

        elem.attr('tabindex', 0)
        .unbind('keydown.jsp keypress.jsp')
        .bind(
          'keydown.jsp',
          function(e)
          {
            if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
              return;
            }
            var dX = horizontalDragPosition, dY = verticalDragPosition;
            switch(e.keyCode) {
              case 40: // down
              case 38: // up
              case 34: // page down
              case 32: // space
              case 33: // page up
              case 39: // right
              case 37: // left
                keyDown = e.keyCode;
                keyDownHandler();
                break;
              case 35: // end
                scrollToY(contentHeight - paneHeight);
                keyDown = null;
                break;
              case 36: // home
                scrollToY(0);
                keyDown = null;
                break;
            }

            elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
            return !elementHasScrolled;
          }
        ).bind(
          'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
          function(e)
          {
            if (e.keyCode == keyDown) {
              keyDownHandler();
            }
            return !elementHasScrolled;
          }
        );

        if (settings.hideFocus) {
          elem.css('outline', 'none');
          if ('hideFocus' in container[0]){
            elem.attr('hideFocus', true);
          }
        } else {
          elem.css('outline', '');
          if ('hideFocus' in container[0]){
            elem.attr('hideFocus', false);
          }
        }

        function keyDownHandler()
        {
          var dX = horizontalDragPosition, dY = verticalDragPosition;
          switch(keyDown) {
            case 40: // down
              jsp.scrollByY(settings.keyboardSpeed, false);
              break;
            case 38: // up
              jsp.scrollByY(-settings.keyboardSpeed, false);
              break;
            case 34: // page down
            case 32: // space
              jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
              break;
            case 33: // page up
              jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
              break;
            case 39: // right
              jsp.scrollByX(settings.keyboardSpeed, false);
              break;
            case 37: // left
              jsp.scrollByX(-settings.keyboardSpeed, false);
              break;
          }

          elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
          return elementHasScrolled;
        }
      }

      function removeKeyboardNav()
      {
        elem.attr('tabindex', '-1')
        .removeAttr('tabindex')
        .unbind('keydown.jsp keypress.jsp');
      }

      function observeHash()
      {
        if (location.hash && location.hash.length > 1) {
          var e,
          retryInt,
          hash = escape(location.hash.substr(1)) // hash must be escaped to prevent XSS
          ;
          try {
            e = $('#' + hash + ', a[name="' + hash + '"]');
          } catch (err) {
            return;
          }

          if (e.length && pane.find(hash)) {
            // nasty workaround but it appears to take a little while before the hash has done its thing
            // to the rendered page so we just wait until the container's scrollTop has been messed up.
            if (container.scrollTop() === 0) {
              retryInt = setInterval(
                function()
                {
                  if (container.scrollTop() > 0) {
                    scrollToElement(e, true);
                    $(document).scrollTop(container.position().top);
                    clearInterval(retryInt);
                  }
                },
                50
              );
            } else {
              scrollToElement(e, true);
              $(document).scrollTop(container.position().top);
            }
          }
        }
      }

      function hijackInternalLinks()
      {
        // only register the link handler once
        if ($(document.body).data('jspHijack')) {
          return;
        }

        // remember that the handler was bound
        $(document.body).data('jspHijack', true);

        // use live handler to also capture newly created links
        $(document.body).delegate('a[href*=#]', 'click', function(event) {
          // does the link point to the same page?
          // this also takes care of cases with a <base>-Tag or Links not starting with the hash #
          // e.g. <a href="index.html#test"> when the current url already is index.html
          var href = this.href.substr(0, this.href.indexOf('#')),
          locationHref = location.href,
          hash,
          element,
          container,
          jsp,
          scrollTop,
          elementTop;
          if (location.href.indexOf('#') !== -1) {
            locationHref = location.href.substr(0, location.href.indexOf('#'));
          }
          if (href !== locationHref) {
            // the link points to another page
            return;
          }

          // check if jScrollPane should handle this click event
          hash = escape(this.href.substr(this.href.indexOf('#') + 1));

          // find the element on the page
          element;
          try {
            element = $('#' + hash + ', a[name="' + hash + '"]');
          } catch (e) {
            // hash is not a valid jQuery identifier
            return;
          }

          if (!element.length) {
            // this link does not point to an element on this page
            return;
          }

          container = element.closest('.jspScrollable');
          jsp = container.data('jsp');

          // jsp might be another jsp instance than the one, that bound this event
          // remember: this event is only bound once for all instances.
          jsp.scrollToElement(element, true);

          if (container[0].scrollIntoView) {
            // also scroll to the top of the container (if it is not visible)
            scrollTop = $(window).scrollTop();
            elementTop = element.offset().top;
            if (elementTop < scrollTop || elementTop > scrollTop + $(window).height()) {
              container[0].scrollIntoView();
            }
          }

          // jsp handled this event, prevent the browser default (scrolling :P)
          event.preventDefault();
        });
      }

      // Init touch on iPad, iPhone, iPod, Android
      function initTouch()
      {
        var startX,
        startY,
        touchStartX,
        touchStartY,
        moved,
        moving = false;

        container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
          'touchstart.jsp',
          function(e)
          {
            var touch = e.originalEvent.touches[0];
            startX = contentPositionX();
            startY = contentPositionY();
            touchStartX = touch.pageX;
            touchStartY = touch.pageY;
            moved = false;
            moving = true;
          }
        ).bind(
          'touchmove.jsp',
          function(ev)
          {
            if(!moving) {
              return;
            }

            var touchPos = ev.originalEvent.touches[0],
            dX = horizontalDragPosition, dY = verticalDragPosition;

            jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);

            moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;

            // return true if there was no movement so rest of screen can scroll
            return dX == horizontalDragPosition && dY == verticalDragPosition;
          }
        ).bind(
          'touchend.jsp',
          function(e)
          {
            moving = false;
            /*if(moved) {
              return false;
              }*/
          }
        ).bind(
          'click.jsp-touchclick',
          function(e)
          {
            if(moved) {
              moved = false;
              return false;
            }
          }
        );
      }

      function destroy(){
        var currentY = contentPositionY(),
        currentX = contentPositionX();
        elem.removeClass('jspScrollable').unbind('.jsp');
        elem.replaceWith(originalElement.append(pane.children()));
        originalElement.scrollTop(currentY);
        originalElement.scrollLeft(currentX);

        // clear reinitialize timer if active
        if (reinitialiseInterval) {
          clearInterval(reinitialiseInterval);
        }
      }

      // Public API
      $.extend(
        jsp,
        {
          // Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
          // was initialised). The settings object which is passed in will override any settings from the
          // previous time it was initialised - if you don't pass any settings then the ones from the previous
          // initialisation will be used.
          reinitialise: function(s)
          {
            s = $.extend({}, settings, s);
            initialise(s);
          },
          // Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
          // that it can be seen within the viewport. If stickToTop is true then the element will appear at
          // the top of the viewport, if it is false then the viewport will scroll as little as possible to
          // show the element. You can also specify if you want animation to occur. If you don't provide this
          // argument then the animateScroll value from the settings object is used instead.
          scrollToElement: function(ele, stickToTop, animate)
          {
            scrollToElement(ele, stickToTop, animate);
          },
          // Scrolls the pane so that the specified co-ordinates within the content are at the top left
          // of the viewport. animate is optional and if not passed then the value of animateScroll from
          // the settings object this jScrollPane was initialised with is used.
          scrollTo: function(destX, destY, animate)
          {
            scrollToX(destX, animate);
            scrollToY(destY, animate);
          },
          // Scrolls the pane so that the specified co-ordinate within the content is at the left of the
          // viewport. animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          scrollToX: function(destX, animate)
          {
            scrollToX(destX, animate);
          },
          // Scrolls the pane so that the specified co-ordinate within the content is at the top of the
          // viewport. animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          scrollToY: function(destY, animate)
          {
            scrollToY(destY, animate);
          },
          // Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
          // is optional and if not passed then the value of animateScroll from the settings object this
          // jScrollPane was initialised with is used.
          scrollToPercentX: function(destPercentX, animate)
          {
            scrollToX(destPercentX * (contentWidth - paneWidth), animate);
          },
          // Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
          // is optional and if not passed then the value of animateScroll from the settings object this
          // jScrollPane was initialised with is used.
          scrollToPercentY: function(destPercentY, animate)
          {
            scrollToY(destPercentY * (contentHeight - paneHeight), animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollBy: function(deltaX, deltaY, animate)
          {
            jsp.scrollByX(deltaX, animate);
            jsp.scrollByY(deltaY, animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollByX: function(deltaX, animate)
          {
            var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
            percentScrolled = destX / (contentWidth - paneWidth);
            positionDragX(percentScrolled * dragMaxX, animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollByY: function(deltaY, animate)
          {
            var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
            percentScrolled = destY / (contentHeight - paneHeight);
            positionDragY(percentScrolled * dragMaxY, animate);
          },
          // Positions the horizontal drag at the specified x position (and updates the viewport to reflect
          // this). animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          positionDragX: function(x, animate)
          {
            positionDragX(x, animate);
          },
          // Positions the vertical drag at the specified y position (and updates the viewport to reflect
          // this). animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          positionDragY: function(y, animate)
          {
            positionDragY(y, animate);
          },
          // This method is called when jScrollPane is trying to animate to a new position. You can override
          // it if you want to provide advanced animation functionality. It is passed the following arguments:
          //  * ele          - the element whose position is being animated
          //  * prop         - the property that is being animated
          //  * value        - the value it's being animated to
          //  * stepCallback - a function that you must execute each time you update the value of the property
          // You can use the default implementation (below) as a starting point for your own implementation.
          animate: function(ele, prop, value, stepCallback)
          {
            var params = {};
            params[prop] = value;
            ele.animate(
              params,
              {
                'duration'	: settings.animateDuration,
                'easing'	: settings.animateEase,
                'queue'		: false,
                'step'		: stepCallback
              }
            );
          },
          enableMouseWheel: function()
          {
            container.unbind(mwEvent).bind(
              mwEvent,
              function (event, delta, deltaX, deltaY) {
                var dX = horizontalDragPosition, dY = verticalDragPosition;
                jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
                // return true if there was no movement so rest of screen can scroll
                return dX == horizontalDragPosition && dY == verticalDragPosition;
              }
            );
          },
          disableMouseWheel: function()
          {
            container.unbind(mwEvent);
          },
          // Returns the current x position of the viewport with regards to the content pane.
          getContentPositionX: function()
          {
            return contentPositionX();
          },
          // Returns the current y position of the viewport with regards to the content pane.
          getContentPositionY: function()
          {
            return contentPositionY();
          },
          // Returns the width of the content within the scroll pane.
          getContentWidth: function()
          {
            return contentWidth;
          },
          // Returns the height of the content within the scroll pane.
          getContentHeight: function()
          {
            return contentHeight;
          },
          // Returns the horizontal position of the viewport within the pane content.
          getPercentScrolledX: function()
          {
            return contentPositionX() / (contentWidth - paneWidth);
          },
          // Returns the vertical position of the viewport within the pane content.
          getPercentScrolledY: function()
          {
            return contentPositionY() / (contentHeight - paneHeight);
          },
          // Returns whether or not this scrollpane has a horizontal scrollbar.
          getIsScrollableH: function()
          {
            return isScrollableH;
          },
          // Returns whether or not this scrollpane has a vertical scrollbar.
          getIsScrollableV: function()
          {
            return isScrollableV;
          },
          // Gets a reference to the content pane. It is important that you use this method if you want to
          // edit the content of your jScrollPane as if you access the element directly then you may have some
          // problems (as your original element has had additional elements for the scrollbars etc added into
          // it).
          getContentPane: function()
          {
            return pane;
          },
          // Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
          // animateScroll value from settings is used instead.
          scrollToBottom: function(animate)
          {
            positionDragY(dragMaxY, animate);
          },
          // Hijacks the links on the page which link to content inside the scrollpane. If you have changed
          // the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
          // contents of your scroll pane will work then call this function.
          hijackInternalLinks: $.noop,
          // Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
          // initialised.
          destroy: function()
          {
            destroy();
          }
        }
      );

      initialise(s);
    }

    // Pluginifying code...
    settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

    // Apply default speed
    $.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
      settings[this] = settings[this] || settings.speed;
    });

    return this.each(
      function()
      {
        var elem = $(this), jspApi = elem.data('jsp');
        if (jspApi) {
          jspApi.reinitialise(settings);
        } else {
          $("script",elem).filter('[type="text/javascript"],:not([type])').remove();
          jspApi = new JScrollPane(elem, settings);
          elem.data('jsp', jspApi);
        }
      }
    );
  };

  $.fn.jScrollPane.defaults = {
    showArrows					: false,
    maintainPosition			: true,
    stickToBottom				: false,
    stickToRight				: false,
    clickOnTrack				: true,
    autoReinitialise			: false,
    autoReinitialiseDelay		: 500,
    verticalDragMinHeight		: 0,
    verticalDragMaxHeight		: 99999,
    horizontalDragMinWidth		: 0,
    horizontalDragMaxWidth		: 99999,
    contentWidth				: undefined,
    animateScroll				: false,
    animateDuration				: 300,
    animateEase					: 'linear',
    hijackInternalLinks			: false,
    verticalGutter				: 4,
    horizontalGutter			: 4,
    mouseWheelSpeed				: 0,
    arrowButtonSpeed			: 0,
    arrowRepeatFreq				: 50,
    arrowScrollOnHover			: false,
    trackClickSpeed				: 0,
    trackClickRepeatFreq		: 70,
    verticalArrowPositions		: 'split',
    horizontalArrowPositions	: 'split',
    enableKeyboardNavigation	: true,
    hideFocus					: false,
    keyboardSpeed				: 0,
    initialDelay                : 300,        // Delay before starting repeating
    speed						: 30,		// Default speed when others falsey
    scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
  };

})(jQuery,this);

//fgnass.github.com/spin.js#v1.2.6
!function(e,t,n){function o(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function u(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function f(e,t,n,r){var o=["opacity",t,~~(e*100),n,r].join("-"),u=.01+n/r*100,f=Math.max(1-(1-e)/t*(100-u),e),l=s.substring(0,s.indexOf("Animation")).toLowerCase(),c=l&&"-"+l+"-"||"";return i[o]||(a.insertRule("@"+c+"keyframes "+o+"{"+"0%{opacity:"+f+"}"+u+"%{opacity:"+e+"}"+(u+.01)+"%{opacity:1}"+(u+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+f+"}"+"}",a.cssRules.length),i[o]=1),o}function l(e,t){var i=e.style,s,o;if(i[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(o=0;o<r.length;o++){s=r[o]+t;if(i[s]!==n)return s}}function c(e,t){for(var n in t)e.style[l(e,n)||n]=t[n];return e}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function p(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var r=["webkit","Moz","ms","O"],i={},s,a=function(){var e=o("style",{type:"text/css"});return u(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},v=function m(e){if(!this.spin)return new m(e);this.opts=h(e||{},m.defaults,d)};v.defaults={},h(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,r=t.el=c(o(0,{className:n.className}),{position:"relative",width:0,zIndex:n.zIndex}),i=n.radius+n.length+n.width,u,a;e&&(e.insertBefore(r,e.firstChild||null),a=p(e),u=p(r),c(r,{left:(n.left=="auto"?a.x-u.x+(e.offsetWidth>>1):parseInt(n.left,10)+i)+"px",top:(n.top=="auto"?a.y-u.y+(e.offsetHeight>>1):parseInt(n.top,10)+i)+"px"})),r.setAttribute("aria-role","progressbar"),t.lines(r,t.opts);if(!s){var f=0,l=n.fps,h=l/n.speed,d=(1-n.opacity)/(h*n.trail/100),v=h/n.lines;(function m(){f++;for(var e=n.lines;e;e--){var i=Math.max(1-(f+e*v)%h*d,n.opacity);t.opacity(r,n.lines-e,i,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/l))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function i(e,r){return c(o(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:r,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*n+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var n=0,r;for(;n<t.lines;n++)r=c(o(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:s&&f(t.opacity,t.trail,n,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&u(r,c(i("#000","0 0 4px #000"),{top:"2px"})),u(e,u(r,i(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),function(){function e(e,t){return o("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=c(o("group"),{behavior:"url(#default#VML)"});!l(t,"transform")&&t.adj?(a.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function s(){return c(e("group",{coordsize:i+" "+i,coordorigin:-r+" "+ -r}),{width:i,height:i})}function l(t,i,o){u(a,u(c(s(),{rotation:360/n.lines*t+"deg",left:~~i}),u(c(e("roundrect",{arcsize:n.corners}),{width:r,height:n.width,left:n.radius,top:-n.width>>1,filter:o}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var r=n.length+n.width,i=2*r,o=-(n.width+n.length)*2+"px",a=c(s(),{position:"absolute",top:o,left:o}),f;if(n.shadow)for(f=1;f<=n.lines;f++)l(f,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(f=1;f<=n.lines;f++)l(f);return u(t,a)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):s=l(t,"animation")}(),typeof define=="function"&&define.amd?define(function(){return v}):e.Spinner=v}(window,document);/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

var Mustache;

(function (exports) {
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports; // CommonJS
  } else if (typeof define === "function") {
    define(exports); // AMD
  } else {
    Mustache = exports; // <script>
  }
}((function () {
  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.5.2";
  exports.tags = ["{{", "}}"];

  exports.parse = parse;
  exports.clearCache = clearCache;
  exports.compile = compile;
  exports.compilePartial = compilePartial;
  exports.render = render;

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Renderer = Renderer;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  // OSWASP Guidelines: escape all non alphanumeric characters in ASCII space.
  var jsCharsRe = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm;

  function quote(text) {
    var escaped = text.replace(jsCharsRe, function (c) {
      return "\\u" + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    });

    return '"' + escaped + '"';
  }

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export these utility functions.
  exports.isWhitespace = isWhitespace;
  exports.isArray = isArray;
  exports.quote = quote;
  exports.escapeRe = escapeRe;
  exports.escapeHtml = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Renderer() {
    this.clearCache();
  }

  Renderer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Renderer.prototype.compile = function (tokens, tags) {
    if (typeof tokens === "string") {
      tokens = parse(tokens, tags);
    }

    var fn = compileTokens(tokens),
        self = this;

    return function (view) {
      return fn(Context.make(view), self);
    };
  };

  Renderer.prototype.compilePartial = function (name, tokens, tags) {
    this._partialCache[name] = this.compile(tokens, tags);
    return this._partialCache[name];
  };

  Renderer.prototype.render = function (template, view) {
    var fn = this._cache[template];

    if (!fn) {
      fn = this.compile(template);
      this._cache[template] = fn;
    }

    return fn(view);
  };

  Renderer.prototype._section = function (name, context, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(context.push(value[i]), this);
        }

        return buffer;
      }

      return value ? callback(context.push(value), this) : "";
    case "function":
      // TODO: The text should be passed to the callback plain, not rendered.
      var sectionText = callback(context, this),
          self = this;

      var scopedRender = function (template) {
        return self.render(template, context);
      };

      return value.call(context.view, sectionText, scopedRender) || "";
    default:
      if (value) {
        return callback(context, this);
      }
    }

    return "";
  };

  Renderer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // From the spec: inverted sections may render text once based on the
    // inverse value of the key. That is, they will be rendered if the key
    // doesn't exist, is false, or is an empty list.
    if (value == null || value === false || (isArray(value) && value.length === 0)) {
      return callback(context, this);
    }

    return "";
  };

  Renderer.prototype._partial = function (name, context) {
    var fn = this._partialCache[name];

    if (fn) {
      return fn(context);
    }

    return "";
  };

  Renderer.prototype._name = function (name, context, escape) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    var string = (value == null) ? "" : String(value);

    if (escape) {
      return escapeHtml(string);
    }

    return string;
  };

  /**
   * Low-level function that compiles the given `tokens` into a
   * function that accepts two arguments: a Context and a
   * Renderer. Returns the body of the function as a string if
   * `returnBody` is true.
   */
  function compileTokens(tokens, returnBody) {
    var body = ['""'];
    var token, method, escape;

    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token.type) {
      case "#":
      case "^":
        method = (token.type === "#") ? "_section" : "_inverted";
        body.push("r." + method + "(" + quote(token.value) + ", c, function (c, r) {\n" +
          "  " + compileTokens(token.tokens, true) + "\n" +
          "})");
        break;
      case "{":
      case "&":
      case "name":
        escape = token.type === "name" ? "true" : "false";
        body.push("r._name(" + quote(token.value) + ", c, " + escape + ")");
        break;
      case ">":
        body.push("r._partial(" + quote(token.value) + ", c)");
        break;
      case "text":
        body.push(quote(token.value));
        break;
      }
    }

    // Convert to a string body.
    body = "return " + body.join(" + ") + ";";

    // Good for debugging.
    // console.log(body);

    if (returnBody) {
      return body;
    }

    // For great evil!
    return new Function("c, r", body);
  }

  function escapeTags(tags) {
    if (tags.length === 2) {
      return [
        new RegExp(escapeRe(tags[0]) + "\\s*"),
        new RegExp("\\s*" + escapeRe(tags[1]))
      ];
    }

    throw new Error("Invalid tags: " + tags.join(" "));
  }

  /**
   * Forms the given linear array of `tokens` into a nested tree structure
   * where tokens that represent a section have a "tokens" array property
   * that contains all tokens that are in that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];
    var token, section;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      switch (token.type) {
      case "#":
      case "^":
        token.tokens = [];
        sections.push(token);
        collector.push(token);
        collector = token.tokens;
        break;
      case "/":
        if (sections.length === 0) {
          throw new Error("Unopened section: " + token.value);
        }

        section = sections.pop();

        if (section.value !== token.value) {
          throw new Error("Unclosed section: " + section.value);
        }

        if (sections.length > 0) {
          collector = sections[sections.length - 1].tokens;
        } else {
          collector = tree;
        }
        break;
      default:
        collector.push(token);
      }
    }

    // Make sure there were no open sections when we're done.
    section = sections.pop();

    if (section) {
      throw new Error("Unclosed section: " + section.value);
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var lastToken;

    for (var i = 0; i < tokens.length; ++i) {
      var token = tokens[i];

      if (lastToken && lastToken.type === "text" && token.type === "text") {
        lastToken.value += token.value;
        tokens.splice(i--, 1); // Remove this token from the array.
      } else {
        lastToken = token;
      }
    }
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  function parse(template, tags) {
    tags = tags || exports.tags;

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var tokens = [],      // Buffer to hold the tokens
        spaces = [],      // Indices of whitespace tokens on the current line
        hasTag = false,   // Is there a {{tag}} on the current line?
        nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    var stripSpace = function () {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var type, value, chr;

    while (!scanner.eos()) {
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push({type: "text", value: chr});

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error("Unclosed tag at " + scanner.pos);
      }

      tokens.push({type: type, value: value});

      if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      }

      // Set the tags for the next time around.
      if (type === "=") {
        tags = value.split(spaceRe);
        tagRes = escapeTags(tags);
      }
    }

    squashTokens(tokens);

    return nestTokens(tokens);
  }

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default renderer.
  var _renderer = new Renderer();

  /**
   * Clears all cached templates and partials.
   */
  function clearCache() {
    _renderer.clearCache();
  }

  /**
   * High-level API for compiling the given `tokens` down to a reusable
   * function. If `tokens` is a string it will be parsed using the given `tags`
   * before it is compiled.
   */
  function compile(tokens, tags) {
    return _renderer.compile(tokens, tags);
  }

  /**
   * High-level API for compiling the `tokens` for the partial with the given
   * `name` down to a reusable function. If `tokens` is a string it will be
   * parsed using the given `tags` before it is compiled.
   */
  function compilePartial(name, tokens, tags) {
    return _renderer.compilePartial(name, tokens, tags);
  }

  /**
   * High-level API for rendering the `template` using the given `view`. The
   * optional `partials` object may be given here for convenience, but note that
   * it will cause all partials to be re-compiled, thus hurting performance. Of
   * course, this only matters if you're going to render the same template more
   * than once. If so, it is best to call `compilePartial` before calling this
   * function and to leave the `partials` argument blank.
   */
  function render(template, view, partials) {
    if (partials) {
      for (var name in partials) {
        compilePartial(name, partials[name]);
      }
    }

    return _renderer.render(template, view);
  }

  return exports;
}())));
// entry point
(function() {
  var nfn = window.nfn = {};

  window.nfn.config          = {};
  window.nfn.core            = {};
  window.nfn.ui              = {};
  window.nfn.ui.model        = {};
  window.nfn.ui.view         = {};
  window.nfn.ui.collection   = {};
  window.nfn.ui.common       = {};

  /**
  * global variables
  */
  window.JST = window.JST || {};

  nfn.init = function(ready) {
    // define a simple class
    var Class = nfn.Class = function() {};
    _.extend(Class.prototype, Backbone.Events);

    nfn._loadJST();
    window.nfn.god = new Backbone.Model();

    ready && ready();
  };
})();
/**
* Global configuration
*/

(function() {

  Config = Backbone.Model.extend({

    VERSION: 1,

    //error track
    REPORT_ERROR_URL: '/api/v0/error',
    ERROR_TRACK_ENABLED: false

  });

  nfn.config = new Config();

})();
/**
* logging
*/

(function() {

  // Error management
  nfn.core.Error = Backbone.Model.extend({
    url: nfn.config.REPORT_ERROR_URL,
    initialize: function() {
      this.set({browser: JSON.stringify($.browser) });
    }
  });

  nfn.core.ErrorList = Backbone.Collection.extend({
    model: nfn.core.Error
  });

  /** contains all of the app errors */
  nfn.errors = new nfn.core.ErrorList();

  // error tracking!
  if(nfn.config.ERROR_TRACK_ENABLED) {
    window.onerror = function(msg, url, line) {
      nfn.errors.create({
        msg: msg,
        url: url,
        line: line
      });
    };
  }


  // logging
  var _fake_console = function() {};
  _fake_console.prototype.error = function(){};
  _fake_console.prototype.log= function(){};

  //IE7 love
  if(typeof console !== "undefined") {
    _console = console;
  } else {
    _console = new _fake_console();
  }

  nfn.core.Log = Backbone.Model.extend({

    error: function() {
      _console.error.apply(_console, arguments);
      nfn.errors.create({
        msg: Array.prototype.slice.call(arguments).join('')
      });
    },

    log: function() {
      _console.log.apply(_console, arguments);
    },

    info: function() {
      _console.log.apply(_console, arguments);
    },

    debug: function() {
      _console.log.apply(_console, arguments);
    }
  });

})();

nfn.log = new nfn.core.Log({tag: 'nfn'});

// =================
// profiler
// =================

(function() {
  function Profiler() {}
  Profiler.times = {};
  Profiler.new_time = function(type, time) {
      var t = Profiler.times[type] = Profiler.times[type] || {
          max: 0,
          min: 10000000,
          avg: 0,
          total: 0,
          count: 0
      };

      t.max = Math.max(t.max, time);
      t.total += time;
      t.min = Math.min(t.min, time);
      ++t.count;
      t.avg = t.total/t.count;
      this.callbacks && this.callbacks[type] && this.callbacks[type](type, time);
  };

  Profiler.new_value = Profiler.new_time;

  Profiler.print_stats = function() {
      for(k in Profiler.times) {
          var t = Profiler.times[k];
          console.log(" === " + k + " === ");
          console.log(" max: " + t.max);
          console.log(" min: " + t.min);
          console.log(" avg: " + t.avg);
          console.log(" total: " + t.total);
      }
  };

  Profiler.get = function(type) {
      return {
          t0: null,
          start: function() { this.t0 = new Date().getTime(); },
          end: function() {
              if(this.t0 !== null) {
                  Profiler.new_time(type, this.time = new Date().getTime() - this.t0);
                  this.t0 = null;
              }
          }
      };
  };

  if(typeof(nfn) !== "undefined") {
    nfn.core.Profiler = Profiler;
  } else {
    window.Profiler = Profiler;
  }

  //mini jquery
  var $ = $ || function(id) {
      var $el = {};
      if(id.el) {
        $el.el = id.el;
      } else if(id.clientWidth) {
        $el.el = id;
      } else {
        $el.el = id[0] === '<' ? document.createElement(id.substr(1, id.length - 2)): document.getElementById(id);
      }
      $el.append = function(html) {
        html.el ?  $el.el.appendChild(html.el) : $el.el.innerHTML += html;
        return $el;
      }
      $el.attr = function(k, v) { this.el.setAttribute(k, v); return this;}
      $el.css = function(prop) {
          for(var i in prop) { $el.el.style[i] = prop[i]; }
          return $el;
      }
      $el.width = function() {  return this.el.clientWidth; };
      $el.html = function(h) { $el.el.innerHTML = h; return this; }
      return $el;
  }

  function CanvasGraph(w, h) {
      this.el = document.createElement('canvas');
      this.el.width = w;
      this.el.height = h;
      this.el.style.float = 'left';
      this.el.style.border = '3px solid rgba(0,0,0, 0.2)';
      this.ctx = this.el.getContext('2d');

      var barw = w;

      this.value = 0;
      this.max = 0;
      this.min = 0;
      this.pos = 0;
      this.values = [];

      this.reset = function() {
          for(var i = 0; i < barw; ++i){
              this.values[i] = 0;
          }
      }
      this.set_value = function(v) {
          this.value = v;
          this.values[this.pos] = v;
          this.pos = (this.pos + 1)%barw;

          //calculate the max
          this.max = v;
          for(var i = 0; i < barw; ++i){
            var _v = this.values[i];
            this.max = Math.max(this.max, _v);
            //this.min = Math.min(v, _v);
          }
          this.scale = this.max;
          this.render();
      }

      this.render = function() {
          this.el.width = this.el.width;
          for(var i = 0; i < barw; ++i){
              var p = barw - i - 1;
              var v = (this.pos + p)%barw;
              v = 0.9*h*this.values[v]/this.scale;
              this.ctx.fillRect(p, h - v, 1, v);
          }
      }

      this.reset();
  }

  Profiler.ui = function() {
    Profiler.callbacks = {};
    var _$ied;
    if(!_$ied){
        _$ied = $('<div>').css({
          'position': 'fixed',
          'bottom': 10,
          'left': 10,
          'zIndex': 20000,
          'width': $(document.body).width() - 80,
          'border': '1px solid #CCC',
          'padding': '10px 30px',
          'backgroundColor': '#fff',
          'fontFamily': 'helvetica neue,sans-serif',
          'fontSize': '14px',
          'lineHeight': '1.3em'
        });
        $(document.body).append(_$ied);
    }
    this.el = _$ied;
    var update = function() {
        for(k in Profiler.times) {
          var pid = '_prof_time_' + k;
          var p = $(pid);
          if(!p.el) {
            p = $('<div>').attr('id', pid)
            p.css({
              'margin': '0 0 20px 0',
              'border-bottom': '1px solid #EEE'
            });
            var t = Profiler.times[k];
            var div = $('<div>').append('<h1>' + k + '</h1>').css({
              'font-weight': 'bold',
              'margin': '10px 0 30px 0'
            })
            for(var c in t) {
              p.append(
                div.append($('<div>').append('<span style="display: inline-block; width: 60px;font-weight: 300;">' + c + '</span><span style="font-size: 21px" id="'+  k + "-" + c + '"></span>').css({ padding: '5px 0' })));
            }
            _$ied.append(p);
            var graph = new CanvasGraph(250, 100);
            p.append(graph);
            Profiler.callbacks[k] = function(k, v) {
              graph.set_value(v);
            }
          }
          // update ir
          var t = Profiler.times[k];
          for(var c in t) {
            $(k + "-" + c).html(t[c].toFixed(2));
          }
        }
    }
    setInterval(function() {
      update();
    }, 1000);
    /*var $message = $('<li>'+message+' - '+vars+'</li>').css({
        'borderBottom': '1px solid #999999'
      });
      _$ied.find('ol').append($message);
      _.delay(function() {
        $message.fadeOut(500);
      }, 2000);
    };
    */
  };

})();
/**
 * template system
 * usage:
   var tmpl = new nfn.core.Template({
     template: "hi, my name is {{ name }}",
     type: 'mustache' // undescore by default
   });
   console.log(tmpl.render({name: 'rambo'})));
   // prints "hi, my name is rambo"


   you could pass the compiled tempalte directly:

   var tmpl = new nfn.core.Template({
     compiled: function() { return 'my compiled template'; }
   });
 */

nfn.core.Template = Backbone.Model.extend({

  initialize: function() {
    this.bind('change', this._invalidate);
    this._invalidate();
  },

  url: function() {
    return this.get('template_url');
  },

  parse: function(data) {
    return {
      'template': data
    };
  },

  _invalidate: function() {
    this.compiled = null;
    if(this.get('template_url')) {
      this.fetch();
    }
  },

  compile: function() {
    var tmpl_type = this.get('type') || 'underscore';
    var fn = nfn.core.Template.compilers[tmpl_type];
    if(fn) {
      return fn(this.get('template'));
    } else {
      nfn.log.error("can't get rendered for " + tmpl_type);
    }
    return null;
  },

  /**
  * renders the template with specified vars
  */
  render: function(vars) {
    var c = this.compiled = this.compiled || this.get('compiled') || this.compile();
    var r = nfn.core.Profiler.get('template_render');
    r.start();
    var rendered = c(vars);
    r.end();
    return rendered;
  },

  asFunction: function() {
    return _.bind(this.render, this);
  }

}, {
  compilers: {
    'underscore': _.template,
    'mustache': typeof(Mustache) === 'undefined' ? null: Mustache.compile
  },
  compile: function(tmpl, type) {
    var t = new nfn.core.Template({
      template: tmpl,
      type: type || 'underscore'
    });
    return _.bind(t.render, t);
  }
}
);

nfn.core.TemplateList = Backbone.Collection.extend({

  model: nfn.core.Template,

  getTemplate: function(template_name) {
    if(this.namespace) {
      template_name = this.namespace + template_name;
    }
    var t = this.find(function(t) {
      return t.get('name') === template_name;
    });
    if(t) {
      return _.bind(t.render, t);
    }
    nfn.log.error(template_name+" not found");
    return null;
  }
});

/**
* global variable
*/
nfn.templates = new nfn.core.TemplateList();

/**
* load JST templates.
* rails creates a JST variable with all the templates.
* This functions loads them as default into cbd.template
*/
nfn._loadJST = function() {
  if(typeof(window.JST) !== undefined) {
    nfn.templates.reset(
      _(JST).map(function(tmpl, name) {
        return { name: name, compiled: tmpl };
      })
    );
  }
};

(function() {

  /**
  * Base View for all CartoDB views.
  * DO NOT USE Backbone.View directly
  */
  var View = nfn.core.View = Backbone.View.extend({

    constructor: function(options) {
      this._models = [];
      this._subviews = {};
      Backbone.View.call(this, options);
      View.viewCount++;
      View.views[this.cid] = this;
      this._created_at = new Date();
      nfn.core.Profiler.new_value('total_views', View.viewCount);
    },

    add_related_model: function(m) {
      this._models.push(m);
    },

    addView: function(v) {
      this._subviews[v.cid] = v;
      v._parent = this;
    },

    removeView: function(v) {
      delete this._subviews[v.cid];
    },

    clearSubViews: function() {
      _(this._subviews).each(function(v) {
        v.clean();
      });
      this._subviews = {};
    },

    /**
    * this methid clean removes the view
    * and clean and events associated. call it when
    * the view is not going to be used anymore
    */
    clean: function() {
      var self = this;
      this.trigger('clean');
      this.clearSubViews();
      // remove from parent
      if(this._parent) {
        this._parent.removeView(this);
      }
      this.remove();
      this.unbind();
      // remove model binding
      _(this._models).each(function(m) {
        m.unbind(null, null, self);
      });
      this._models = [];
      View.viewCount--;
      delete View.views[this.cid];
    },

    /**
    * utility methods
    */

    getTemplate: function(tmpl) {
      if(this.options.template) {
        return  _.template(this.options.template);
      }
      return nfn.templates.getTemplate(tmpl);
    },

    show: function() {
      this.$el.show();
    },

    hide: function() {
      this.$el.hide();
    }

  }, {
    viewCount: 0,
    views: {},

    /**
    * when a view with events is inherit and you want to add more events
    * this helper can be used:
    * var MyView = new core.View({
    *  events: nfn.core.View.extendEvents({
    *      'click': 'fn'
    *  })
    * });
    */
    extendEvents: function(newEvents) {
      return function() {
        return _.extend(newEvents, this.constructor.__super__.events);
      };
    },

    /**
    * search for views in a view and check if they are added as subviews
    */
    runChecker: function() {
      _.each(nfn.core.View.views, function(view) {
        _.each(view, function(prop, k) {
          if( k !== '_parent' &&
            view.hasOwnProperty(k) &&
            prop instanceof nfn.core.View &&
          view._subviews[prop.cid] === undefined) {
            console.log("=========");
            console.log("untracked view: ");
            console.log(prop.el);
            console.log('parent');
            console.log(view.el);
            console.log(" ");
          }
        });
      });
    }
  });

})();
nfn.ui.model.GOD = Backbone.Model.extend({ });

nfn.ui.collection.Tooltips = Backbone.Collection.extend({
  model: nfn.ui.model.Tooltip
});

nfn.ui.view.GOD = nfn.core.View.extend({

  /*hideTooltips: function() {

    var that = this;

    this.tooltips.each(function(tooltip) {

      tooltip.set("hidden", true);
      that.tooltips.remove(tooltip);

    });

  },*/

  triggerCallbacks: function() {

    for (var i = 0; i<= this.items.length - 1; i++) {

      var item = this.items[i];

      try {

        item.callback && item.callback();

      } catch (e) { }

    }

    this.items = [];

  },

  add: function(item, callback) {

    this.items.push({ item: item, callback: callback });

  },

  initialize: function() {

    var that = this;

    $(document).on("click", function(e) {

      that.triggerCallbacks();

    });

    this.items = [];

  }

});

// Widget --------------------------------------

nfn.ui.model.Widget = Backbone.Model.extend({ });

nfn.ui.view.Widget = nfn.core.View.extend({

  defaults: {
    speed: 300
  },

  initialize: function() {
    _.bindAll( this, "toggle", "toggleDraggable", "toggleResizable", "onStopDragging", "onStopResizing" );

    this.model.bind("change:hidden",    this.toggle);
    this.model.bind("change:draggable", this.toggleDraggable);
    this.model.bind("change:resizable", this.toggleResizable);
  },

  setLeft: function(x, animated) {

    var y = this.model.get("top");
    this.setPosition(x, y, animated);

    return this;

  },

  setTop: function(y, animated) {

    var x = this.model.get("left");
    this.setPosition(x, y, animated);

    return this;

  },

  setBottom: function(y, animated) {

    var x = this.model.get("left");
    this.setPosition(x, y, animated);

    return this;

  },

  setWidth: function(w, animated) {

    this.model.set("width", w);

    if (animated) {
      this.$el.animate({ width: w }, this.defaults.speed);
    } else {
      this.$el.css({ width: w });
    }

    return this;

  },

  setHeight: function(h, animated) {

    this.model.set("height", h);

    if (animated) {
      this.$el.animate({ height: h }, this.defaults.speed);
    } else {
      this.$el.css({ height: h });
    }

    return this;

  },


  setSize: function(w, h, animated) {

    this.model.set("width", w);
    this.model.set("height", h);

    if (animated) {
      this.$el.animate({ width: w, height: h }, this.defaults.speed);
    } else {
      this.$el.css({ width: w, height: h });
    }

    return this;

  },

  setDimensions: function(dimensions) {

    this.setPosition(dimensions.x, dimensions.y);
    this.setSize(dimensions.w, dimensions.h);

    return this;

  },

  width: function() {

    if ( this.model.get("width") == undefined )
      this.model.set("width", this.$el.width());

    return this.model.get("width");

  },

  height: function() {

    if ( this.model.get("height") == undefined )
      this.model.set("height", this.$el.height());

    return this.model.get("height");

  },

  left: function() {

    if ( this.model.get("left") == undefined )
      this.model.set("left", this.$el.position().left);

    return this.model.get("left");

  },

  top: function() {

    if ( this.model.get("top") == undefined )
      this.model.set("top", this.$el.position().top);

    return this.model.get("top");

  },

  bottom: function() {

    if ( this.model.get("bottom") == undefined )
      this.model.set("bottom", this.$el.position().bottom);

    return this.model.get("bottom");

  },

  getSize: function() {

    return { w: this.model.get("width"), h: this.model.get("height") };

  },

  getDimensions: function() {

    return {
      x: this.model.get("left"),
      y: this.model.get("top"),
      w: this.model.get("width"),
      h: this.model.get("height")
    };

  },

  setPosition: function(left, top, animated) {

    this.model.set("top", top);
    this.model.set("left", left);

    if (animated) {
      this.$el.animate({ top: top, left: left }, this.defaults.speed);
    } else {
      this.$el.css({ top: top, left: left });
    }

    return this;

  },

  getPosition: function() {

    return { x: this.model.get("left"), y: this.model.get("top") };

  },

  absoluteVerticalCenter: function(animated) {

    var x = $(document).width() /2 - this.width()/2;

    this.model.set("left", x);

    if (animated) {
      this.$el.animate({ left: x }, this.defaults.speed );
    } else {
      this.$el.css({ left: x });
    }

  },

  animate: function(properties, animated, callback) {

    var that = this;

    _.each(properties, function(value, property) {
      that.model.set(property, value);
    });

    if (animated) {

      this.$el.animate( properties, this.defaults.speed, function() {
        callback && callback();
      });

    } else {
      this.$el.css(properties);
      callback && callback();
    }

  },

  verticalCenter: function(w, animated) {

    var x = w/2 - this.width()/2;

    this.model.set("left", x);

    if (animated) {
      this.$el.animate({ left: x }, this.defaults.speed );
    } else {
      this.$el.css({ left: x });
    }

  },

  center: function(w, h, animated) {

    var x = w/2 - this.width()/2;
    var y = h/2 - this.height()/2;

    this.model.set("left", x);
    this.model.set("top", y);

    if (animated) {

      this.$el.animate({ left: x, top: y }, this.defaults.speed );

    } else {

      this.$el.css({ left: x, top: y });

    }

  },

  toggle: function() {

    if (this.model.get("hidden")) {

      this.$el.fadeOut(this.defaults.speed);

    } else {

      this.$el.fadeIn(this.defaults.speed);

    }

  },

  show: function(callback) {
    this.model.set("hidden", false);

    callback && callback();

    return this;
  },

  hide: function(callback) {
    this.model.set("hidden", true);

    callback && callback();

    return this;
  },

  setResizable: function(resizable) {

    this.model.set("resizable", resizable);

  },

  toggleResizable: function() {

    var that = this;

    if (this.model.get("resizable")) {

      this.$el.resizable({ disabled: false, stop: this.onStopResizing })

    } else {

      this.$el.resizable('destroy');
      this.$el.find(".ui-resizable-handle").remove(); // remove the handlers

    }

  },

  setDraggable: function(draggable) {
    this.model.set("draggable", draggable);
  },

  toggleDraggable: function() {
    var that = this;

    if (this.model.get("draggable")) {
      if (this.model.get('containment')) {
        this.$el.draggable({ containment: this.model.get("containment"), axis: 'y', stop: this.onStopDragging})
      } else {
        this.$el.draggable({ disabled: false, axis: 'y', stop: this.onStopDragging })
      }
    } else {
      this.$el.draggable({ disabled: true });
    }
  },

  onStopDragging: function(e, el) {
    this.setPosition(el.position.left, el.position.top);
  },

  onStopResizing: function(e, el) {
    this.setSize(el.size.width, el.size.height);
  },
});


// Spinner ---------------------------------------

nfn.ui.model.Spinner = Backbone.Model.extend({
});

nfn.ui.view.Spinner = nfn.ui.view.Widget.extend({

  className: 'loader',

  defaults: {
    settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#fff' }
  },

  initialize: function() {

    _.bindAll( this, "toggle", "toggleSpin" );

    this.settings = this.defaults.settings;

    if (this.options.settings) this.settings = this.options.settings;

    this.add_related_model(this.model);

    this.model.bind("change:hidden",  this.toggle);
    this.model.bind("change:animate", this.toggleSpin);

    this.parent = this.options.parent;

  },

  toggleSpin: function() {

    if (this.model.get("animate")) {

      this.spinner =  new Spinner(this.settings).spin();
      this.$el.append( this.spinner.el );

    } else {
      this.spinner.stop();
    }

  },

  //toggle: function() {
    //var that = this;

    //if (this.model.get("hidden")) {

      //this.$el.animate({ top: this.top() - 50, opacity: 0 }, this.defaults.speed, function() {
        //that.setTop(that.top() - 50);
        //$(this).hide();
      //});

    //} else {

      //this.setTop($(document).height()/2 - this.height()/2 + 50 );
      //this.setTop(this.$el.parent().height()/2 - this.height()/2 + 50 );

      //this.$el.css({ opacity: 0 }, 250 );

      //this.$el.show();

      //this.$el.animate({ top: this.top() - 50, opacity: 1 }, this.defaults.speed, function() {
      //that.setTop(that.top() - 50);
        //$(this).show();
      //});
    //}
  //},

  spin: function() {
    this.model.set("animate", true);

  },

  stop: function() {
    this.model.set("animate", false);
  },

  render: function() {

    return this.$el;

  }

});

// Backdrop --------------------------------------

nfn.ui.model.Backdrop = Backbone.Model.extend({ });

nfn.ui.view.Backdrop = nfn.ui.view.Widget.extend({

  className: 'backdrop',

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  render: function() {

    return this.$el;

  }

});
// Tooltip --------------------------------------

nfn.ui.model.Tooltip = Backbone.Model.extend({

  defaults: {

    currentPhoto: 0,
    photoCount: 0

  }

});

nfn.ui.view.Tooltip = nfn.ui.view.Widget.extend({

  defaults: {

    speed: 250

  },

  className: 'tooltip',

  events: {

    "click .main"      : "onMainClick",
    "click .secondary" : "onSecondaryClick",
    "click .action"    : "onActionClick"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updateTemplate", "onKeyUp", "loadPhoto", "updateCurrentPhoto" );

    this.add_related_model(this.model);

    var template = this.model.get("template") || $("#tooltip-template").html();

    this.template = new nfn.core.Template({
      template: template,
      type: 'mustache'
    });

    this.model.bind("change:hidden",       this.toggle);
    this.model.bind("change:urls",         this.loadPhoto);
    this.model.bind("change:template",     this.updateTemplate);
    this.model.bind("change:currentPhoto", this.updateCurrentPhoto);

    // Loads the spinner
    this.spinner = new nfn.ui.view.Spinner({
      model: new nfn.ui.model.Spinner(),
      parent: this
    });

    this.addView(this.spinner);

    $(document).on("keyup", this.onKeyUp);

    this.parent = this.options.parent;

  },

  onKeyUp: function(e) {

    if (e.which == 27) this.onEscKey();

  },

  onEscKey: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onEscKey");

  },

  onMainClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onMainClick");

  },

  onSecondaryClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onSecondaryClick");

  },

  onActionClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.trigger("onActionClick");

  },

  updateTemplate: function() {

    this.template = new nfn.core.Template({
      template: this.model.get("template")
    });

    this.$el.find("*").remove();
    this.render();

  },

  onClick: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();
    e && e.stopPropagation();

  },

  nextPhoto: function() {

    var currentPhoto = this.model.get("currentPhoto");

    if (currentPhoto + 1 >= this.model.get("photoCount")) {
      this.model.set("currentPhoto", 0);
    } else {
      this.model.set("currentPhoto", currentPhoto + 1);
    }

  },

  previousPhoto: function() {

    var currentPhoto = this.model.get("currentPhoto");

    if (currentPhoto - 1 < 0) {
      this.model.set("currentPhoto", this.model.get("photoCount") - 1 );
    } else {
      this.model.set("currentPhoto", currentPhoto - 1);
    }

  },

  updateCurrentPhoto: function() {

    var
    urls = this.model.get("urls"),
    url  = urls[this.model.get("currentPhoto")];

    this.showPhoto(url);

  },

  showPhoto: function(url) {

    var that = this;

    this.spinner.show().spin();

    var $img = $("<img width='180px' height='100px' />");

    this.$el.find("img").fadeOut(250, function() {
      $(this).remove(); // let's get rid of the old image
    });

    this.$el.prepend($img);

    $img.attr("src", url);

    this.$el.imagesLoaded(function() {
      that.spinner.hide(function() {
        $img.fadeIn(that.defaults.speed);
      });
    });

  },

  loadPhoto: function() {

    var that = this;

    var urls = this.model.get("urls");

    // In case we do this.model.set("urls", "http://placehold.it/100x100");
    if ( Object.prototype.toString.call( urls ) !== '[object Array]' ) {

      this.model.set({ urls: [this.model.get("urls")], silent: true });
      urls = this.model.get("urls");

    }

    this.model.set("photoCount", urls.length);

  },

  render: function() {

    var that = this;

    this.$el.append(this.template.render( this.model.toJSON() ));

    this.$mainButton      = this.$el.find(".main");
    this.$secondaryButton = this.$el.find(".secondary");

    this.$title           = this.$el.find(".title");
    this.$description     = this.$el.find(".description");

    this.$title.html(this.model.get("title"));
    this.$description.html(this.model.get("description"));

    if (this.model.get("urls")) {

      var
      urls = this.model.get("urls"),
      $img = $("<img width='180px' height='100px' />");

      this.model.set("photoCount", urls.length);

      this.$el.append(this.spinner.render());
      this.spinner.show().spin();

      this.$el.prepend($img);

      if (urls.length > 1) {

        this.$mainButton.text("More");

      } else {

        this.$mainButton.hide();

      }

      $img.attr("src", urls[0]);

      this.$el.imagesLoaded(function() {
        that.spinner.hide(function() {
          $img.fadeIn(that.defaults.speed);
        });
      });

    }


    this.$el.on("click", this.onClick);

    return this.$el;

  }

});
// StatusBar -------------------------------------

nfn.ui.model.StatusBar = Backbone.Model.extend({ });

nfn.ui.view.StatusBar = nfn.ui.view.Widget.extend({

  events: {

    //"click .btn.close" : "close"

  },

  className: 'statusbar',

  initialize: function() {

    _.bindAll( this, "toggle", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  close: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

  },

  render: function() {

    this.$el.append(this.template.render(this.model.toJSON()));

    this.$title       = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$counter     = this.$el.find(".counter");
    this.$closeButton = this.$el.find(".btn.close");

    return this.$el;

  }

});

// Transcriptions -------------------------------------
nfn.ui.model.Transcription = Backbone.Model.extend({ });

nfn.ui.collection.Transcriptions = Backbone.Collection.extend({
  model: nfn.ui.model.Transcription,
});

// Lines
nfn.ui.model.Line = Backbone.Model.extend({
  defaults: function() {
    this.transcriptions = new nfn.ui.collection.Transcriptions();
  }
});

nfn.ui.collection.Lines = Backbone.Collection.extend({
  model: nfn.ui.model.Line,
});
// TRANSCRIBER -----------------------------------

nfn.ui.model.Transcriber = Backbone.Model.extend({

  defaults: {
    visible: true,
    type: 'default'
  },

  nextRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord + 1);
  },

  previousRecord: function() {
    var currentRecord = this.get("currentRecord");
    this.set("currentRecord", currentRecord - 1);
  },

  nextStep: function() {
    var currentStep = this.get("currentStep");

    if (currentStep + 1 >= this.get("stepsCount")) {
      this.set("currentStep", 0);
    } else {
      this.set("currentStep", currentStep + 1);
    }
  },

  previousStep: function() {
    var currentStep = this.get("currentStep");

    if (currentStep - 1 < 0) {
      this.set("currentStep", this.get("stepsCount") );
    } else {
      this.set("currentStep", currentStep - 1);
    }
  },

  previousLine: function() {
    var currentLine = this.get('currentLine');

    if (currentLine - 1 < 0) {
      this.set('currentLine', 0);
    } else {
      this.set('currentLine', currentLine - 1);
    }
  },

  nextLine: function() {
    var currentLine = this.get('currentLine');
    this.set('currentLine', currentLine + 1);
  }
});


// TRANSCRIBER ---------------------------------

nfn.ui.view.Transcriber = nfn.core.View.extend({

  className: "transcriber",

  initialize: function() {

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.render();

  },

  enableBackspace: function() {

    $(document).unbind("keydown.backspace");

  },

  disableBackspace: function() {

    $(document).bind("keydown.backspace", function(e) {
      var nodeName = e.target.nodeName.toLowerCase();

      if (e.which === 8) {
        if ((nodeName === 'input' && e.target.type === 'text') || nodeName === 'textarea') {
          // do nothing
        } else {
          e.preventDefault();
        }
      }
    });

  },

  nextRecord: function() {
    this.model.nextRecord();
  },

  previousRecord: function() {
    this.model.previousRecord();
  },

  nextStep: function() {
    this.model.nextStep();
  },

  previousStep: function() {
    this.model.previousStep();
  },

  previousLine: function() {
    this.model.previousLine();
  },

  nextLine: function() {
    this.model.nextLine();
  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
    }
  },

  loadLargePhoto: function(url, callback) {
    this.model.set("big-url", url);
  },

  loadPhoto: function(url, callback) {

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

    this.showPhoto(this.photos.length - 1);

  },

  addPhoto: function(url, callback) {

    var that = this;

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

  },

  render: function() {

    this.$el.addClass(this.model.get("type"));

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    return this.$el;
  }

});
// Photos -----------------------------------

nfn.ui.model.Photo = Backbone.Model.extend({ });

nfn.ui.view.Photo = nfn.core.View.extend({

  options: {

    delay: 0

  },

  initialize: function() {

    _.bindAll( this, "toggle", "appendPhoto" );

    this.parent = this.options.parent;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

  },

  toggle: function() {

    if (this.model.get("hidden")) {
      this.$el.fadeOut(250);
    } else {
      this.$el.fadeIn(250);
    }

  },

  show: function() {
    this.model.set("hidden", false);
  },

  hide: function() {
    this.model.set("hidden", true);
  },

  appendPhoto: function($img) {
    //console.log(this.parent.$el.find(".photos .mCSB_container"));
    this.parent.$el.find(".photos .mCSB_container").append($img);
  },

  render: function() {

    var that = this;

    var $img = this.$el = $("<img />");

    this.$el.attr("src", this.model.get("url"));

    //console.log(this.$el);
    this.$el.imagesLoaded(function() {
      //console.log('photos loaded');
      // Removes the previous image
      that.parent.$el.find(".photos img").remove();
      that.parent.addScroll();
      that.appendPhoto(that.$el);

      that.show();

      that.parent.enableMouseWheel();

      var callback = that.model.get("callback") ;

      callback && callback();

    });

  }

});

nfn.ui.collection.Photos = Backbone.Collection.extend({
  model: nfn.ui.model.Photo
});
// Closer ---------------------------------------

nfn.ui.model.Closer = Backbone.Model.extend({ });

nfn.ui.view.Closer = nfn.ui.view.Widget.extend({
  className: 'closer',
  events: {
    "click .close" : 'close'
  },

  initialize: function() {
    _.bindAll(this, 'toggle', 'close');
    this.add_related_model(this.model);
    this.model.bind('change:hidden', this.toggle);

    // Options parsing.
    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.onClose = this.options.onClose;
  },

  close: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.onClose();

    this.hide();
  },

  render: function() {
    this.$el.append(this.template.render());
    return this.$el;
  },
});

nfn.ui.view.BirdPhoto = nfn.ui.view.Photo.extend({

  initialize: function() {

    _.bindAll( this, "toggle", "appendPhoto" );

    this.parent = this.options.parent;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

  },

  appendPhoto: function($img) {
    this.parent.$el.find(".photos .jspPane").append($img);
  },

  render: function() {

    var that = this;

    var $img = this.$el = $("<img />");

    this.$el.attr("src", this.model.get("url"));

    this.$el.imagesLoaded(function() {

      // Removes the previous image
      that.parent.$el.find(".photos img").remove();
      that.parent.addScroll();
      that.appendPhoto(that.$el);

      that.show();

      that.parent.api.reinitialise();
      that.parent.enableMouseWheel();
      that.parent.resize();

      var callback = that.model.get("callback") ;

      callback && callback();

    });

  }

});

nfn.ui.collection.Photos = Backbone.Collection.extend({
  model: nfn.ui.model.Photo
});

// DOUBLE PAGE TRANSCRIBER --------------------------------
Spine = require('spine');

// Replace the previous line with this one when running the tests
// Spine = { trigger: function() {} };

nfn.ui.model.DoublePage = nfn.ui.model.Transcriber.extend({
  defaults: {
    type: 'birds',
    mousewheel_enabled: true
  }
});

nfn.ui.view.DoublePage = nfn.ui.view.Transcriber.extend({
  initialize: function() {
    var that = this;

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    _.bindAll( this, "updateInputField", "updatePlaceholder", "updateWidget", "toggleMouseWheel", "onResize" );
    this.add_related_model(this.model);
    this.model.bind("change:mousewheel_enabled", this.toggleMouseWheel);

    this.photos = new nfn.ui.collection.Photos();
    this.lines = new nfn.ui.collection.Lines();

    this.addViews();

    this.guide = [
      {
        title: 'Code' ,
        description: 'It\'s a 4 digit number located at the top right of the page. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Code',
        type: "text",
        dataType: "code",
        validate: true,
        inputWidth: 180,
        position: {y: 0}
      }, {
        title: 'Species',
        description: '2 or 3 latin words in the first line, next to the margin. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Species',
        type: "text",
        inputWidth: 180
      }, {
        title: 'Location',
        description: 'A place name, in the second line. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Location',
        type: "location",
        inputWidth: 240,
        position: {  x: 1000 }
      }, {
        title: 'Collection date ',
        description: 'A date in the third line. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'COLLECTION DATE. ex. Aug 1982',
        type: "text",
        inputWidth: 270,
        position: { x: 0 }
      }, {
        title: 'Collector',
        description: 'A person name in the same line than the date. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Collector',
        type: "text",
        inputWidth: 140
      }, {
        title: 'Transferrer',
        description: 'A person name at the top right of the record. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'Transferrer',
        type: "text",
        inputWidth: 180
      }, {
        title: 'Transfer date',
        description: 'A date under the transferrer. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: 'TRANSFER DATE. ex. Nov 2002',
        type: "text",
        inputWidth: 240
      }, {
        title: 'Additional information',
        description: 'Can you detect this information?. <a href="#" class="example" data-src="http://placehold.it/357x191">See example</a> | <a href="#" class="skip">Skip field</a>',
        placeholder: ['gender', 'age', 'register'],
        type: "extra",
        inputWidth: 390
      }
    ];

    this.model.set("currentRecord", 0);
    this.model.set('currentLine', -1);
    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.statusBar.$counter.text(model.get("currentRecord"));
    });

    this.model.bind("change:currentStep", function() {
      that.updateStepCounter();
      that.updateWidget();

      that.updateInputField();
      that.updatePlaceholder();
    });

    this.model.bind('change:currentLine', function() {
      console.log(that.model);
      if (that.model.get('currentStep') != 0) {
        that.model.set("currentStep", 1);
      }
    });

    this.render();
  },

  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
    }
  },

  loadPhoto: function(url, callback) {

    var photo = new nfn.ui.view.BirdPhoto({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

    this.showPhoto(this.photos.length - 1);

  },

  addPhoto: function(url, callback) {

    var that = this;

    var photo = new nfn.ui.view.BirdPhoto({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

  },

  getPendingFieldCount: function() {
    if (typeof this.lines == 'undefined') {
      return this.guide.length;
    } else {
      console.log(this.lines, this.model.get('currentLine'));
      return (this.guide.length - this.lines.at(this.model.get('currentLine')).transcriptions.length);
    }
  },

  updateStepCounter: function() {
    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));
  },

  updateWidget: function() {
    var currentStep = this.model.get("currentStep")
      , currentLine = this.model.get('currentLine')
      , stepGuide = this.guide[currentStep];

    this.transcriberWidget.model.set({
      title:       stepGuide.title,
      description: stepGuide.description,
      type:        stepGuide.type,
      inputWidth:  stepGuide.inputWidth
    });

    // Scrolls the page
    if (stepGuide.position) {

      if ( stepGuide.position.x != null && stepGuide.position.y == null ) {

        this.api.scrollToX(stepGuide.position.x, true);

      } else if ( stepGuide.position.y != null && !stepGuide.position.x == null ) {

        this.api.scrollToY(stepGuide.position.y, true);

      } else if ( stepGuide.position.x != null && stepGuide.position.y != null ) {

        this.api.scrollTo(stepGuide.position.x, stepGuide.position.y, true);
      }
    }

    this.transcriberWidget.clearInput();

  },

  addViews: function() {

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.BirdsWidget({
      model: new nfn.ui.model.BirdsWidget({
        containment: ".photos"
      }),
      template: $("#transcriber-birds-widget-template").html(),
      parent: this
    });

    this.addView(this.transcriberWidget);

    // Loads the status bar
    this.statusBar = new nfn.ui.view.StatusBar({

      model: new nfn.ui.model.StatusBar({
        title: "Birds Collection",
        description: "from The Natural History Museum of London"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the spinner
    this.spinner = new nfn.ui.view.Spinner({
      model: new nfn.ui.model.Spinner(),
      parent: this
    });

    this.addView(this.spinner);

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });

    this.addView(this.backdrop);

  },

  startTranscribing: function() {
    this.model.set("currentStep", 0);
    this.model.set("currentLine", 0);
    this.disableMouseWheel();
  },

  finishTranscribing: function() {
    Spine.trigger("finishedBirdsTranscription", this.lines)

    this.enableMouseWheel();
    this.model.set("currentStep", 0);
    this.model.set("currentLine", 0);
    this.nextRecord();
    this.transcriberWidget.model.set("description", "Drag & resize the viewer to the record you want to transcribe.");
    this.transcriberWidget.updateDescription();

  },

  updateInputField: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];


  },

  updatePlaceholder: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);

  },

  validateCurrentStep: function() {

    var currentStep = this.guide[this.model.get("currentStep")];

    if (currentStep.validate == false || !"validate" in currentStep) {
      return true;
    } else {

      if (currentStep.dataType == "code") return this.validateCode(this.transcriberWidget.getValue());
      else return true;
    }

  },

  // true if val only contains numbers (even padding zeroes)
  validateCode: function(val) {

    if (val.length != 4) return false;

    return /^\d+$/.test(val);

  },

  saveCurrentStep: function() {
    if (this.lines.at(this.model.get('currentLine'))) {
      var line = this.lines.at(this.model.get('currentLine'));
    } else {
      var line = new nfn.ui.model.Line();
      this.lines.push(line);
    }

    if (line.transcriptions.at(this.model.get('currentStep'))) {
      var transcription = line.transcriptions.at(this.model.get('currentStep'));
      transcription.set('value', this.transcriberWidget.getValue());
    } else {
      var transcription = new nfn.ui.model.Transcription({
        step: this.model.get('currentStep'),
        value: this.transcriberWidget.getValue()
      });
      line.transcriptions.push(transcription);
    }

    // if (this.transcriptions.at(this.model.get("currentStep"))) {
    //   var transcription = this.transcriptions.at(this.model.get("currentStep"));
    //   transcription.set("value", this.transcriberWidget.getValue());
    // } else {
    //   var transcription = new nfn.ui.model.Transcription({
    //     step:  this.model.get("currentStep"),
    //     value: this.transcriberWidget.getValue()
    //   });

    //   this.transcriptions.push(transcription);
    // }
  },

  onResize: function() {
    if (this.model.get("mousewheel_enabled") == true) {
      if (this.api) this.api.reinitialise();

      this.resize();
    }
  },

  resize: function() {
    this.$el.find(".photos, .jspPane, .jspContainer").css("width", "100%");
  },

  addScroll: function() {
    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").jScrollPane();
      this.api = this.$el.find(".photos").data('jsp');
    }
  },

  toggleMouseWheel: function() {

    if (this.model.get("mousewheel_enabled")) {

      this.api.enableMouseWheel();
      $(".jspHorizontalBar, .jspVerticalBar").fadeIn(250);

    } else {

      this.api.disableMouseWheel();
      $(".jspHorizontalBar, .jspVerticalBar").fadeOut(250);
    }

  },

  enableMouseWheel: function() {

    this.model.set("mousewheel_enabled", true);

  },

  disableMouseWheel: function() {

    this.model.set("mousewheel_enabled", false);

  },


  render: function() {

    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    this.transcriberWidget.setWidth($(document).width(), true);

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    $("body").append(this.$el);

    $(window).on("resize", this.onResize);

    return this.$el;
  }

});
// BirdsWidget -------------------------------------------
nfn.ui.model.BirdsWidget = Backbone.Model.extend({
  defaults: {
    speed: 250,
    input_hidden:       true,
    start_hidden:       false,
    steps_hidden:       true,
    finish_hidden:      true,
  }
});

nfn.ui.view.BirdsWidget = nfn.ui.view.Widget.extend({
  className: 'birds-widget bar',
  events: {
    'click .btn.ok': 'ok',
    'click .btn.finish': 'showFinishTooltip',
    'click .btn.start': 'start',
    'click .example': 'showExample',
    'click .btn.nextLine': 'nextLine',
    'click .skip': 'showSkipTooltip',
    'click .step': 'showStepTooltip'
  },

  initialize: function() {
    _.bindAll( this, "toggle", "start", "skip", "closeFinishTooltip", "closeExampleTooltip", "closeSkipTooltip", "closeStepTooltip", "toggleInput", "toggleStartButton", "toggleDraggable", "toggleSteps", "updatePlaceholder", "updateTitle", "updateDescription", "updateType", "resizeInput", "onStopDragging", "toggleResizable", "onStopResizing", "showExample", "showSkipTooltip", "gotoStep" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
      type: 'mustache'
    });

    this.templates["location"] = new nfn.core.Template({
      template: '<input type="text" id="autocomplete" placeholder="" />',
      type: 'mustache'
    });

    this.templates["extra"] = new nfn.core.Template({
      template: $("#extra-input-template").html(),
      type: 'mustache'
    });

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:title",         this.updateTitle);
    this.model.bind("change:description",   this.updateDescription);

    this.model.bind("change:hidden",        this.toggle);

    this.model.bind("change:draggable",     this.toggleDraggable);
    this.model.bind("change:resizable",     this.toggleResizable);

    this.model.bind("change:steps_hidden",  this.toggleSteps);
    this.model.bind("change:input_hidden",  this.toggleInput);
    this.model.bind("change:start_hidden",  this.toggleStartButton);

    this.model.bind("change:placeholder",   this.updatePlaceholder);
    this.model.bind("change:type",          this.updateType);
    this.model.bind("change:inputWidth",    this.resizeInput);

    this.parent = this.options.parent;
  },

  ok: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (this.parent.validateCurrentStep()) {

      this.parent.saveCurrentStep();
      this.parent.nextStep();

    } else {

      console.log("the code doesn't validate");

    }

    //this.clearInput();
    this.closeTooltips();

  },


  skip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();              // TODO: add test

    this.clearInput();
    this.parent.nextStep();

  },

  finish: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.showStartButton();

    this.hideInput();
    this.hideSteps();
    this.model.set("description", "Drag & resize the viewer to the record you want to transcribe.");

    this.setDraggable(true);
    this.setResizable(true);

    this.parent.saveCurrentStep();
    this.parent.finishTranscribing();

  },

  nextLine: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.closeTooltips();

    this.parent.api.scrollByY(38, true);
    this.parent.saveCurrentStep();
    this.parent.nextLine();
  },

  showFinishTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.saveCurrentStep();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.skipTooltip) this.createSkipTooltip(e);

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.exampleTooltip) this.createExampleTooltip(e);

  },

  gotoStep: function(e, i) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeStepTooltip();
    this.parent.model.set("currentStep", i);

  },

  showStepTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.stepTooltip) this.createStepTooltip(e);

  },

  createStepTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.stepTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip step",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-step-template").html(),
        links: this.parent.guide
      })

    });

    this.addView(this.stepTooltip);

    var that = this;

    this.stepTooltip.bind("onEscKey", this.closeStepTooltip);

    this.$el.append(this.stepTooltip.render());
    this.stepTooltip.show();

    var
    targetWidth  = $(e.target).width()/2,
    marginRight  = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x            = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.stepTooltip.width()  + 30,
    y            = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.stepTooltip.height() - 17;

    var top = this.$el.offset().top - this.stepTooltip.$el.height() + 130;

    if (top < 0) {
      y = Math.abs(this.$el.offset().top  - $(e.target).offset().top) + 45;
      this.stepTooltip.$el.addClass("ne");
    } else {
      this.stepTooltip.$el.removeClass("ne");
    }

    this.stepTooltip.setPosition(x, y);

    var currentStep = this.parent.model.get("currentStep");

    this.stepTooltip.$el.find("li:nth-child(" + (currentStep + 1) + ")").addClass("selected");

    this.stepTooltip.$el.find("a").on("click", function(e) {
      var i = $(this).parent().index();
      that.gotoStep(e, i);
    });


    GOD.add(this.stepTooltip, this.closeStepTooltip);

  },

  closeStepTooltip: function(callback) {

    if (!this.stepTooltip) return;

    this.stepTooltip.hide();
    this.stepTooltip.clean();
    delete this.stepTooltip;

    callback && callback();

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

  },

  createSkipTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see examples that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.skipTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.skipTooltip);

    var that = this;

    this.skipTooltip.bind("onEscKey",         this.closeSkipTooltip);
    this.skipTooltip.bind("onSecondaryClick", this.closeSkipTooltip);

    this.skipTooltip.bind("onMainClick",      function() {

      that.closeSkipTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.skipTooltip.render());

    this.skipTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.skipTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.skipTooltip.height() - 40

    this.skipTooltip.setPosition(x, y);

    GOD.add(this.skipTooltip, this.closeSkipTooltip);

  },

  createExampleTooltip: function(e) {

    var
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    this.exampleTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip with-spinner",

      model: new nfn.ui.model.Tooltip({
        main: main,
        urls: [url],
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.exampleTooltip);

    var that = this;

    this.exampleTooltip.bind("onEscKey",    this.closeExampleTooltip);
    this.exampleTooltip.bind("onMainClick", this.closeExampleTooltip);

    this.$el.append(this.exampleTooltip.render());

    this.exampleTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.exampleTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.exampleTooltip.height() - 40

    this.exampleTooltip.setPosition(x, y);

    GOD.add(this.exampleTooltip, this.closeExampleTooltip);

  },

  createFinishTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.finishTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.finishTooltip);

    var that = this;

    this.finishTooltip.bind("onEscKey",         this.closeFinishTooltip);
    this.finishTooltip.bind("onSecondaryClick", this.closeFinishTooltip);
    this.finishTooltip.bind("onMainClick",      function() {

      that.closeFinishTooltip(function() {
        that.finish();
      })

    });

    this.$el.append(this.finishTooltip.render());
    this.finishTooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.finishTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.finishTooltip.height() - 40

    this.finishTooltip.setPosition(x, y);

    GOD.add(this.finishTooltip, this.closeFinishTooltip);

  },

  closeFinishTooltip: function(callback) {

    if (!this.finishTooltip) return;

    this.finishTooltip.hide();
    this.finishTooltip.clean();
    delete this.finishTooltip;

    callback && callback();

  },

  closeExampleTooltip: function(callback) {

    if (!this.exampleTooltip) return;

    this.exampleTooltip.hide();
    this.exampleTooltip.clean();
    delete this.exampleTooltip;

    callback && callback();

  },

  closeSkipTooltip: function(callback) {

    if (!this.skipTooltip) return;

    this.skipTooltip.hide();
    this.skipTooltip.clean();
    delete this.skipTooltip;

    callback && callback();

  },

  updatePlaceholder: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else if ( type == 'extra' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".gender").attr("placeholder",   placeholders[0]);
      this.$input.find(".age").attr("placeholder", placeholders[1]);
      this.$input.find(".register").attr("placeholder",  placeholders[2]);

    } else if ( type == 'date' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder",   placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder",  placeholders[2]);
    }
  },

  updateTitle: function() {

    var that = this;

    this.$title.fadeOut(200, function() {
      that.$title.text(that.model.get("title"));
      that.$title.fadeIn(200);
    });

  },

  updateDescription: function() {

    var that = this;

    this.$description.fadeOut(200, function() {
      that.$description.html(that.model.get("description"));

      that.$exampleLink = that.$description.find(".example");
      that.$skipLink    = that.$description.find(".skip");

      that.$description.fadeIn(200);
    });

  },

  updateType: function() {

    var type = this.model.get("type");

    this.$el.find(".input_field").removeClass("text");
    this.$el.find(".input_field").removeClass("date");
    this.$el.find(".input_field").removeClass("extra");
    this.$el.find(".input_field").removeClass("location");
    this.$el.find(".input_field").addClass(type);

    if ( type == 'text' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field .extra_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'location' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field .extra_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

      this.$input.addresspicker();

    } else if ( type == 'extra' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'date' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .extra_field").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

    this.clearInput();
    // this.focus();
  },

  focus: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.focus();

    } else if ( type == 'date' ) {

      this.$input[0].focus();

    }

  },

  resizeInput: function() {

    var type  = this.model.get("type");
    var width = this.model.get("inputWidth");

    if ( type == 'text' || type == 'location' ) {

      this.$el.find(".input_field").animate({ width: width }, true);
      this.$el.find(".input_field input").animate({ width: width - 45 }, true);

    } else if ( type == 'extra' ) {

      this.$el.find(".input_field").animate({ width: width }, true);

    }

  },

  start: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.showInput();

    if (this.parent) this.parent.startTranscribing();

    // this.setDraggable(false);
    this.setResizable(false);

    this.hideStartButton();
    this.showSteps();
  },

  toggleStartButton: function() {
    var that = this
      , speed = this.model.defaults.speed;

    if (this.model.get("start_hidden")) {
      this.$startButton.fadeOut(speed, function() {
        that.$nextLineButton.fadeIn(speed);
        that.$finishButton.fadeIn(speed);
      });
    } else {
      this.$nextLineButton.fadeOut(speed);
      this.$finishButton.fadeOut(speed, function() {
        that.$startButton.fadeIn(speed);
      });
    }
  },

  showStartButton: function() {
    this.model.set("start_hidden", false);
    this.model.set("finish_hidden", true);
  },

  hideStartButton: function() {
    this.model.set("start_hidden", true);
    this.model.set("finish_hidden", false);
  },

  showSteps: function() {
    this.model.set("steps_hidden", false);
  },

  hideSteps: function() {
    this.model.set("steps_hidden", true);
  },

  toggleSteps: function() {
    if (this.model.get("steps_hidden")) {
      this.$step.fadeOut(this.defaults.speed);
    } else {
      this.$step.fadeIn(this.defaults.speed);
    }
  },

  toggleInput: function() {

    if (this.model.get("input_hidden")) {

      this.$input.parent().fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
      });

    } else {

      this.$input.parent().fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
      });

    }

  },

  showInput: function() {

    this.model.set("input_hidden", false);

  },

  hideInput: function() {

    this.model.set("input_hidden", true);

  },

  clearInput: function() {

    this.$input.val("");

  },

  getValue: function() {
    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      return this.$input.val();

    } else if ( type == 'extra') {

      var gender    = this.$el.find(".gender").val();
      var age       = this.$el.find(".age").val();
      var register  = this.$el.find(".register").val();

      return [gender, age, register];

    } else if ( type == 'date') {

      var month = this.$el.find(".month").val();
      var day   = this.$el.find(".day").val();
      var year  = this.$el.find(".year").val();

      if (month && day && year) {
        return month + "/" + day + "/" + year;
      } else {
        return "";
      }

    }

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$title        = this.$el.find(".title");
    this.$description  = this.$el.find(".description");

    this.$okButton     = this.$el.find(".btn.ok");
    this.$startButton  = this.$el.find(".btn.start");
    this.$nextLineButton = this.$el.find(".btn.nextLine");
    this.$finishButton = this.$el.find(".btn.finish");

    this.$exampleLink  = this.$el.find(".example");
    this.$skipLink     = this.$el.find(".skip");

    this.$input        = this.$el.find('.input_field input[type="text"]');

    this.$step         = this.$el.find(".step");

    return this.$el;

  }

});

// HERBARIUM TRANSCRIBER ------------------------------------------
Spine = require('spine')

// Replace the previous line with this one when running the tests
 //Spine = { trigger: function() {} };

nfn.ui.model.Herbarium = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'sernac',
    visible: true
  }

});

nfn.ui.view.HerbariumTranscriber = nfn.ui.view.Transcriber.extend({

  initialize: function() {
    var that = this;

    _.bindAll( this, "addScroll", "updateInputField", "updatePlaceholder", "updateHelper", "getStepData", "updateStepCounter", "addMagnifier", "onMouseDown", "onMouseUp", "onResize" );

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [
      {
        title: 'State' ,
        description: 'It is the full state name or it’s abbreviation (e.g. FL for Florida). <a href="#" class="example">See example</a>',
        examples: [ "nfn/ui/herbarium/examples/ex_state.png" ],
        placeholder: 'State',
        type: "text",
        inputWidth: 540
      }, {
        title: 'County' ,
        description: 'This is the county name found on the record. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_county.png"],
        placeholder: 'County',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Scientific name',
        description: 'This is the species name string, usually including at least genus and species. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_scientific_name.png"],
        placeholder: 'Scientific name',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Scientific author',
        description: 'This a full or sir name found with the species name, it tells us who named it. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_scientific_name_details.png"],
        placeholder: 'Scientific author',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Location',
        description: 'A place name or geographic description of where the specimen was found. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_location_description.png"],
        placeholder: 'Location',
        type: "text",
        inputWidth: 650
      }, {
        title: 'Habitat and description',
        description: 'A short description of the specimen and its habitat. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_habitat.png"],
        placeholder: 'Habitat & Description',
        type: "text",
        inputWidth: 600
      }, {
        title: 'Collected by',
        description: 'The name the person that collected this specimen. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_by.png"],
        placeholder: 'Collected by',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Number',
        description: 'A number (or code) assigned to the collection, usually appears after Collectors name. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_record_number.png"],
        placeholder: 'Number',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Collection date ',
        description: 'Please collect the collection date as you see it. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_date.png"],
        placeholder: ['day', 'month', 'year'],
        type: "date",
        inputWidth: 700
      }
    ];

    this.disableBackspace();

    this.model.set("currentRecord", 0);

    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.statusBar.$counter.text(model.get("currentRecord"));
    });

    this.model.bind("change:currentStep", function() {

      that.updateStepCounter();
      that.updateHelper();

      that.updateInputField();
      that.updatePlaceholder();

    });

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();

    this.render();

  },

  close: function() {

    this.launcher.disable();
    this.launcher.hide();

    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.startTranscribing();

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();

  },

  addViews: function() {

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.HerbariumWidget({
      model: new nfn.ui.model.HerbariumWidget(),
      template: $("#transcriber-herbarium-widget-template").html(),
      parent: this
    });

    this.addView(this.transcriberWidget);

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });

    this.addView(this.backdrop);

    // Loads the highlight
    this.highlight = new nfn.ui.view.Highlight({
      model: new nfn.ui.model.Highlight(),
      template: $("#highlight-template").html(),
      parent: this
    });

    this.addView(this.highlight);

    this.spinner = new nfn.ui.view.Spinner({ // Loads the spinner
      model: new nfn.ui.model.Spinner(),
      settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
      parent: this
    });

    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.Helper({
      model: new nfn.ui.model.Helper(),
      template: $("#helper-template").html(),
      parent: this
    });

    this.addView(this.helper);

    // Loads the helper
    this.statusBar = new nfn.ui.view.StatusBar({

      model: new nfn.ui.model.StatusBar({
        title: "Herbarium Collection",
        description: "from SERNEC"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the magnifier
    this.magnifier = new nfn.ui.view.Magnifier({
      model: new nfn.ui.model.Magnifier(),
      parent: this,
      template: $("#magnifier-template").html()
    });

    this.addView(this.magnifier);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });

    this.addView(this.selection);

    // Loads the launcher
    this.launcher = new nfn.ui.view.Launcher({
      model: new nfn.ui.model.Launcher(),
      template: $("#launcher-template").html(),
      parent: this
    });

    this.addView(this.launcher);
  },

  addPhoto: function(url, callback) {

    var that = this;

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this

    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);

  },

  skip: function() {

    this.launcher.disable();

    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    var that = this;

    var callback = function () {

      that.startTranscribing();
      that.spinner.hide();

      $(".photos img").animate({ marginLeft: "0" }, 500);
      that.$backgroundMessage.fadeOut(250);

    };

    var that = this;

    Spine.trigger("finishedSernacTranscription", this.transcriptions)

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

  },

  finish: function() {

    this.$backgroundMessage.html("<h1>Thanks!</h1><p>You really did a great job transcribing that page.</p><p class='loading'>Loading next one...</p>");

    this.launcher.disable();

    this.backdrop.hide();
    this.closer.clean();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.nextRecord();

    var that = this;

    var callback = function () {
      that.startTranscribing();
      that.spinner.hide();
      $(".photos img").animate({ marginLeft: "0" }, 500);

      that.$backgroundMessage.fadeOut(250, function() {
        that.$backgroundMessage.html("");
      });

    };

    var that = this;

    Spine.trigger("finishedSernacTranscription", this.transcriptions)

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();

  },


  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    this.$backgroundMessage.fadeIn(250);

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
      photo.get("view").$el.css("margin-left", 1500);
    }

  },

  addSelection: function() {
    if (this.$el.find(".selection").length <= 0)
      this.$el.append(this.selection.render());
  },

  removeSelection: function() {
    this.selection.remove();
  },

  updateSelection: function(startX, startY, endX, endY) {

    var
    dw         = $(document).width(),
    dh         = $(document).height();

    var s = {};

    if (endX > startX) { // right

      s = { right: "auto", left:  startX , width: endX - startX };
      this.selection.model.set("left", startX);

    } else { // left

      s = { left:"auto", width: startX - endX, right: dw -startX };
      this.selection.model.set("left", endX);

    }

    if (endY > startY) { // bottom

      style = { bottom: "auto", top: startY, height: (endY - startY) };
      this.selection.model.set("top",  startY);

    } else { // top

      style = { top: "auto", height: startY - endY , bottom: dh - startY};
      this.selection.model.set("top",  endY);

    }

    s = $.extend(s, style);
    s = $.extend({ visibility: "visible" }, s);

    this.selection.model.set("width",  Math.abs(endX - startX));
    this.selection.model.set("height", Math.abs(endY - startY));

    this.selection.$el.css(s);
  },

  addHighlight: function(dimensions) {

    this.highlight.show();
    this.highlight.create(dimensions);
    this.$el.find(".photos").removeClass("selectable");
    this.launcher.enable();
    this.disableMouseWheel();

  },

  addMagnifier: function() {

    if (this.selection.isDefined()) {

      var dimensions = this.highlight.getDimensions();

      var $img = this.$el.find(".photos img:first-child");
      var $img2x = $img.clone();

      var
      x = Math.abs($img.offset().left - dimensions.x),
      y = Math.abs($img.offset().top - dimensions.y),
      w = dimensions.w,
      h = dimensions.h;

      this.model.set("currentStep", 0);

      this.updateSelection(x, y, x+w, y+h);

      // Size of the magnifier
      w = 640;
      h = 480;

      var that = this;

      this.launcher.hide(function() {

        that.highlight.hide();

        // Setting up the magnifier
        that.magnifier.create({ x: $(document).width()/2 - w/2, y: $(document).height()/2 - h/2, w: w, h: h });
        that.magnifier.$el.css({ left: "50%", marginLeft: -1*w/2 });
        that.magnifier.$el.empty();
        that.magnifier.$el.append($img2x);

        $img2x.attr("src", that.model.get("big-url"));

        var spinner = new nfn.ui.view.Spinner({ // Loads the spinner
          model: new nfn.ui.model.Spinner(),
          settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
          parent: this
        });

        window.spinner = spinner;

        that.magnifier.$el.append(spinner.render());

        spinner.show().spin();

        $img2x.imagesLoaded(function() {
          spinner.hide().stop();
        });

        var magnifierWidth = that.magnifier.width();
        that.magnifier.render();

        // Setting up the transcription view
        that.removeSelection();
        that.backdrop.show();

        // Loads the Closer
        that.closer = new nfn.ui.view.Closer({
          model: new nfn.ui.model.Closer(),
          template: $("#closer-template").html(),
          onClose: function () {
            // A silly amount of calls to reset the UI.
            that.highlight.clear();
            that.launcher.disable();

            that.backdrop.hide();
            that.helper.hide();
            that.highlight.hide();
            that.launcher.show();
            that.magnifier.hide();
            that.selection.hide();
            that.transcriberWidget.hide();

            that.startTranscribing();
            that.enableMouseWheel();
          }
        });

        // Add the close button
        var closerX = that.magnifier.left() + that.magnifier.width() + 10
          , closerY = that.magnifier.top();
        that.closer.$el.css({left: closerX, top: closerY});
        that.$el.append(that.closer.render());
        that.closer.show();

        var // add the helper widget
        helperX = that.magnifier.left(),
        helperY = that.magnifier.top() - that.helper.height() - 35;

        that.helper.setWidth(magnifierWidth).setPosition(helperX, helperY)
        that.helper.$el.css({ left: "50%", marginLeft: -1*magnifierWidth/2 });
        that.helper.show();

        var // add the transcriber widget
        twX = "50%",
        twY = that.magnifier.top() + that.magnifier.height() + 10;

        that.transcriberWidget.setWidth(magnifierWidth).setPosition(twX, twY);
        that.transcriberWidget.resize();
        that.transcriberWidget.show();

        if ($.browser.msie && $.browser.version == 8) {
          $img2x.css({ top: -1*selection_y, left: -1*selection_x });
        } else {
          $img2x.css({ top: -2*y, left: -2*x });
        }
      });

    }
  },

  stopTranscribing: function() {
    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");
  },

  startTranscribing: function() {
    if (this.launcher.model.get("hidden")) {
      this.launcher.$el.css({ left: "50%", marginLeft: -1*this.launcher.width()/2 });
      this.launcher.show();
    }

    this.$el.find(".photos").addClass("selectable");
    this.$el.find(".photos").on("mousedown", this.onMouseDown);

    this.$el.on("mouseup", this.onMouseUp);
  },

  onMouseUp: function() {

    if (this.model.get("isDown")) {

      if ( this.selection.isDefined() ) {

        this.model.set("isDown", false);

        this.addHighlight(this.selection.getDimensions());
        this.stopTranscribing();
        this.removeSelection();
        this.launcher.show();
      }
    }

  },

  onMouseDown: function(e) {

    var
    that = this,
    initialxpos = e.pageX,
    initialypos = e.pageY;

    this.model.set("isDown", true);

    this.selection.$el.css("visibility", "hidden");
    this.addSelection();

    this.$el.mousemove(function(e){
      that.updateSelection(initialxpos, initialypos, e.pageX, e.pageY);
    });
  },

  getPendingFieldCount: function() {

    return (this.guide.length - this.transcriptions.length);

  },

  updateStepCounter: function() {

    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));

  },

  updateInputField: function() {

    var
    value       = "",
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // gets stored value
      value = transcription.get("value");

      if (transcription.get("type") == 'date') {

        var month = transcription.get("month");
        var day   = transcription.get("day");
        var year  = transcription.get("year");

        this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, month: month, day: day, year: year });
      } else {
        this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, value: value });
      }
    } else {

      this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, value: value });
    }

  },

  updatePlaceholder: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);

  },

  updateHelper: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.helper.model.set("title",       stepGuide.title);
    this.helper.model.set("description", stepGuide.description);
    this.helper.model.set("urls",        stepGuide.examples);

  },

  getStepData: function(step) {

    return this.transcriptions.find(function(transcription) {
      return transcription.get("step") === step;
    });

  },

  saveCurrentStep: function() {

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // if there's a transcription already

      var value = this.transcriberWidget.getValue();

      if (_.isString(value)) {
        transcription.set("value", value);
      } else {
        transcription.set({ month: value["month"], day:   value["day"], year:  value["year"] });
      }

    } else { // if not, we create a new transcription

      var value = this.transcriberWidget.getValue();

      if (_.isString(value)) {

        transcription = new nfn.ui.model.Transcription({
          step:  this.model.get("currentStep"),
          type:  "text",
          value: value
        });


      } else {

        transcription = new nfn.ui.model.Transcription({
          step:  this.model.get("currentStep"),
          type:  "date",
          month: value["month"],
          day:   value["day"],
          year:  value["year"]
        });

      }

      this.transcriptions.push(transcription);

    }

    //console.log("STATUS", this.transcriptions.toJSON());

  },

  onResize: function() {

    //console.log(this.launcher.$el);

  },

  addScroll: function() {

    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").mCustomScrollbar();
    }

  },

  enableMouseWheel: function() {

    this.$el.find(".photos").mCustomScrollbar("enableMouseWheel");

  },

  disableMouseWheel: function() {

    this.$el.find(".photos").mCustomScrollbar("disableMouseWheel");

  },

  render: function() {
    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    this.$el.append(this.launcher.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find(".message");

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on("dragstart", ".photos img", function() {
      return false;
    });

    var that = this;

    $(window).on("resize", this.onResize);

    $(document).on("mouseover", ".mCSB_scrollTools", function() {
      that.stopTranscribing();
    });

    $(document).on("mouseleave", ".mCSB_scrollTools", function() {
      that.startTranscribing();
    });

    $("body").append(this.$el);

    this.launcher.setDraggable(true);

    return this.$el;
  }

});

// HerbariumWidget --------------------------------------

nfn.ui.model.HerbariumWidget = Backbone.Model.extend({ });

nfn.ui.view.HerbariumWidget = nfn.ui.view.Widget.extend({

  className: 'sernac-widget bar',

  events: {

    "click .btn.ok" :            "ok",
    'keypress input[type=text]': "onEnter",
    "click .step" :              "showStepTooltip",
    "click .btn.finish" :        "showFinishTooltip",
    "click .skip" :              "showSkipTooltip"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "toggleOk", "onEnter", "updatePlaceholder", "updateValue", "updateDate", "updateType", "createStepTooltip", "closeTooltip", "closeErrorTooltip", "closeFinishTooltip", "closeStepTooltip", "gotoStep", "showExample" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
      type: 'mustache'
    });

    this.templates["location"] = new nfn.core.Template({
      template: '<input type="text" id="autocomplete" placeholder="" />',
      type: 'mustache'
    });

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:placeholder", this.updatePlaceholder);
    this.model.bind("change:type",        this.updateType);
    this.model.bind("change:value",       this.updateValue);

    this.model.bind("change:month",       this.updateDate);
    this.model.bind("change:day",         this.updateDate);
    this.model.bind("change:year",        this.updateDate);

    this.model.bind("change:draggable",   this.toggleDraggable);
    this.model.bind("change:resizable",   this.toggleResizable);
    this.model.bind("change:ok_enabled",  this.toggleOk);

    this.parent = this.options.parent;

  },

  skip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltip();               // TODO: add test
    this.parent.helper.closeTooltip(); // TODO: add test

    this.clearInput();
    this.parent.nextStep();
  },

  onEnter: function(e) {
    if (e.keyCode != 13) return;

    this.ok();
  },

  ok: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    GOD.triggerCallbacks(); // this closes the tooltips (TODO: add test)

    var type  = this.model.get("type");

    var isEmpty = true;

    if ( ( type == undefined || type == 'text' || type == 'location' ) && this.$input.val() ) isEmpty = false;
    else if (type == 'date') {
      isEmpty = !$(this.$input[0]).val() && !$(this.$input[1]).val() && !$(this.$input[2]).val()
    }

    if (!isEmpty) {
      this.parent.saveCurrentStep();
      this.clearInput();

      // Shall we go to the next record or the next step?
      if (this.parent.getPendingFieldCount() == 0) {
        this.parent.finish();
      } else {
        this.parent.nextStep();
      }
    } else { // don't store or advance when the input field is empty
      this.showErrorTooltip("Empty field", "Please, write a value or use the skip field option below");
    }
  },

  toggleOk: function() {
    if (this.model.get("ok_enabled")) {
      this.$okButton.removeClass("disabled");
    } else {
      this.$okButton.addClass("disabled");
    }
  },

  enableOk: function(callback) {
    this.model.set("ok_enabled", true);

    callback && callback();

    return this;
  },

  disableOk: function(callback) {
    this.model.set("ok_enabled", false);

    callback && callback();

    return this;
  },

  gotoStep: function(e, i) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeStepTooltip();
    this.parent.model.set("currentStep", i);

    this.clearInput();
    this.focus();

  },

  showErrorTooltip: function(title, description) {

    this.closeTooltips();

    if (!this.errorTooltip) this.createErrorTooltip(title, description);

  },

  closeErrorTooltip: function(callback) {

    var that = this;

    if (!this.errorTooltip) return;

    this.errorTooltip.hide();
    this.errorTooltip.clean();
    delete this.errorTooltip;

    this.$errorIndicator.fadeOut(100, function() {
      that.$okButton.fadeIn(100);
    });

    callback && callback();

  },

  createErrorTooltip: function(title, description) {

    var
    main        = "Finish",
    secondary   = "Cancel";

    this.errorTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip error",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-error-template").html(),
        title: title,
        description: description
      })

    });

    this.addView(this.errorTooltip);

    var that = this;

    this.errorTooltip.bind("onEscKey",         this.closeErrorTooltip);
    this.errorTooltip.bind("onSecondaryClick", this.closeErrorTooltip);
    this.errorTooltip.bind("onMainClick",      function() {

      that.closeErrorTooltip(function() {
        //that.finish();
      })

    });

    this.$okButton.fadeOut(100, function() {
      that.$errorIndicator.fadeIn(100);
    });

    this.$el.append(this.errorTooltip.render());

    this.errorTooltip.show();

    var
    $element    = this.$okButton,
    targetWidth = $element.width()/2,
    marginRight = 8,
    x           = Math.abs(this.$el.offset().left - $element.offset().left) - this.errorTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $element.offset().top)  - this.errorTooltip.height() - 40

    this.errorTooltip.setPosition(x, y);
    GOD.add(this.errorTooltip, this.closeErrorTooltip);

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see <a href='#' class='action' data-action='show-example'>examples</a> that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.tooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({ title: title, description: description, main: main, secondary: secondary })
    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onEscKey",         this.closeTooltip);
    this.tooltip.bind("onSecondaryClick", this.closeTooltip);
    this.tooltip.bind("onActionClick",    this.showExample);

    this.tooltip.bind("onMainClick",      function() {

      that.closeTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.tooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);
    GOD.add(this.tooltip, this.closeTooltip);

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.helper.showExample();

  },

  closeTooltip: function(callback) {

    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  showStepTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.stepTooltip) this.createStepTooltip(e);

  },

  createStepTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.stepTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip step",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-step-template").html(),
        links: this.parent.guide
      })

    });

    this.addView(this.stepTooltip);

    var that = this;

    this.stepTooltip.bind("onEscKey", this.closeStepTooltip);

    this.$el.append(this.stepTooltip.render());
    this.stepTooltip.show();

    var
    $target     = this.$step,
    targetWidth = $target.width()/2,
    marginRight = parseInt($target.css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $target.offset().left) - this.stepTooltip.width() + 30,
    y           = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.stepTooltip.height() - 17

    this.stepTooltip.setPosition(x, y);


    this.parent.transcriptions.each(function(transcription) {

      if (transcription.get("type") == 'date' && ( transcription.get("month") || transcription.get("day") || transcription.get("year") ) ) {
        that.stepTooltip.$el.find("li:nth-child(" + (transcription.get("step") + 1) + ")").addClass("completed");
      } else if (transcription.get("value")) {
        that.stepTooltip.$el.find("li:nth-child(" + (transcription.get("step") + 1) + ")").addClass("completed");
      }

    });

    var currentStep = this.parent.model.get("currentStep");

    this.stepTooltip.$el.find("a").on("click", function(e) {
      var i = $(this).parent().index();
      that.gotoStep(e, i);
    });


    GOD.add(this.stepTooltip, this.closeStepTooltip);

  },

  closeStepTooltip: function(callback) {

    if (!this.stepTooltip) return;

    this.stepTooltip.hide();
    this.stepTooltip.clean();
    delete this.stepTooltip;

    this.focus();

    callback && callback();

  },

  showFinishTooltip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);
  },

  closeTooltips: function() {
    GOD.triggerCallbacks();
  },

  createFinishTooltip: function(e) {
    if (this.parent.getPendingFieldCount() == 0) {
      var title = 'Thank you!',
        description = 'Onto the next record.',
        main = 'Next',
        secondary = 'Cancel';
    } else {
      var title = 'Are you sure?',
        description = '',
        main = 'Finish',
        secondary = 'Cancel';

      if (this.parent.getPendingFieldCount() == 1) {
        description = "There is still <a href='#'>1 empty field</a> for this record that should be completed before finishing.";
      } else {
        description = "There are still <a href='#'> " + this.parent.getPendingFieldCount() + " empty fields</a> for this record that should be completed before finishing.";
      }
    }

    this.finishTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })
    });

    this.addView(this.finishTooltip);

    var that = this;

    this.finishTooltip.bind("onEscKey",         this.closeFinishTooltip);
    this.finishTooltip.bind("onSecondaryClick", this.closeFinishTooltip);
    this.finishTooltip.bind("onMainClick",      function() {

      that.closeFinishTooltip(function() {
        that.finish();
      })
    });

    this.$el.append(this.finishTooltip.render());
    this.finishTooltip.show();

    this.finishTooltip.$el.find(".description > a").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      that.showStepTooltip();
    });

    var
    $target     = this.$finishButton,
    targetWidth = $target.width()/2,
    marginRight = parseInt($target.css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $target.offset().left) - this.finishTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.finishTooltip.height() - 40

    this.finishTooltip.setPosition(x, y);
    GOD.add(this.finishTooltip, this.closeFinishTooltip);
  },

  closeFinishTooltip: function(callback) {
    if (!this.finishTooltip) return;

    this.finishTooltip.hide();
    this.finishTooltip.clean();
    delete this.finishTooltip;

    callback && callback();
  },

  finish: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.parent.finish();
  },

  clearInput: function() {
    this.$input.val("");
  },

  resize: function() {

    var that = this;

    var type  = this.model.get("type");
    var width = this.model.get("inputWidth");

    // Centers the widget horizontally and resizes the input field
    if ( type == 'text' || type == 'location' ) {

      if (this.$input.parent().width() > width - 300) {

        this.$input.parent().animate({ width: width - 300  }, 200, function() {
          that.$input.width(width - 300 - 40);
          that.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        });

      } else {

        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        this.$input.parent().delay(50).animate({ width: width - 300  }, 200);
        this.$input.width(width - 300 - 40);

      }
    } else if ( type == 'date' ) {

      if ($(".input_field.date").width() > width - 290) {

        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true, function() {
          $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);
        });

      } else {

        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);


      }

    }

  },

  getValue: function() {
    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      return this.$input.val();

    } else if ( type == 'date') {

      var month = $(this.$input[0]).val();
      var day   = $(this.$input[1]).val();
      var year  = $(this.$input[2]).val();

      return { month: month, day: day, year: year };

    }

  },

  updatePlaceholder: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else if ( type == 'date' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder",   placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder",  placeholders[2]);

    }

    this.resize();
    this.focus();

  },

  focus: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.focus();

    } else if ( type == 'date' ) {

      this.$input[0].focus();

    }

  },

  updateDate: function() {

    var month = this.model.get("month");
    var day   = this.model.get("day");
    var year  = this.model.get("year");

    this.$el.find(".month").val(month);
    this.$el.find(".day").val(day);
    this.$el.find(".year").val(year);

  },

  updateValue: function() {

    this.$input.val("");

    var
    value = this.model.get("value"),
    type  = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.val(value);

    }

  },

  updateType: function() {

    var type = this.model.get("type");

    this.$el.find(".input_field").removeClass("text");
    this.$el.find(".input_field").removeClass("date");
    this.$el.find(".input_field").removeClass("location");
    this.$el.find(".input_field").addClass(type);

    if ( type == 'text' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'location' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

      this.$input.addresspicker();

    } else if ( type == 'date' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$errorIndicator  = this.$el.find(".error");
    this.$okButton        = this.$el.find(".btn.ok");
    this.$skip            = this.$el.find(".skip");
    this.$finishButton    = this.$el.find(".btn.finish");
    this.$step            = this.$el.find(".step");
    this.$input           = this.$el.find('.input_field input[type="text"]');

    return this.$el;

  }

});


// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {

    "click .btn.start": "start",
    "click .skip":      "showSkipTooltip",
    "click .example":   "showExample"

  },

  className: "launcher bar",

  initialize: function() {

    _.bindAll( this, "start", "skip", "showSkipTooltip", "closeSkipTooltip", "toggle", "toggleDraggable", "toggleResizable", "onStopDragging", "onStopResizing", "updateMessage", "toggleButton", "showExample", "closeTooltip", "_showStart", "_hideStart", "_showSkip", "_hideSkip" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",     this.toggle);
    this.model.bind("change:disabled",   this.toggleButton);
    this.model.bind("change:message",    this.updateMessage);

    this.model.bind("change:draggable",     this.toggleDraggable);
    this.model.bind("change:resizable",     this.toggleResizable);

    this.parent = this.options.parent;
  },

  updateMessage: function() {

    var that = this;

    this.$message.delay(200).fadeOut(this.defaults.speed, function() {
      $(this).html(that.model.get("message"));
      $(this).fadeIn(that.defaults.speed);
    });

  },

  toggleButton: function() {

    if (this.model.get("disabled") == true) {
      this._hideStart(this._showSkip);
    } else {
      this._hideSkip(this._showStart);
    }

  },

  toggle: function() {
    var that = this;

    if (this.model.get("hidden")) {

      this.$el.animate({ bottom: this.bottom() , opacity: 0 }, this.defaults.speed, function() {
        that.setBottom(that.bottom() );
        $(this).hide();
      });

    } else {

      this.$el.css({ opacity: 0 }, 250 );

      this.$el.show();
      this.$el.animate({ bottom: this.bottom() , opacity: 1 }, this.defaults.speed, function() {
      that.setBottom(that.bottom() );
        $(this).show();
      });
    }
  },

  _showStart: function(callback) {

    if (!this.$startButton.hasClass("hidden")) {

      callback && callback();

    } else {

      this.$startButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });

    }

  },

  _hideStart: function(callback) {

    if (this.$startButton.hasClass("hidden")) {
      callback && callback();
    } else {
      this.$startButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  _showSkip: function(callback) {

    if (!this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });

    }

  },

  _hideSkip: function(callback) {

    if (this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  enable: function() {
    this.model.set({ disabled: false, message: "Specimen label selected" });
  },

  disable: function() {
    this.model.set({ disabled: true, message: "Drag a square around the specimen label" });
  },

  start: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.skipTooltip) this.createSkipTooltip(e);

  },

  createSkipTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u>" + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Skip record",
    secondary   = "Cancel";

    this.skipTooltip = new nfn.ui.view.Tooltip({

      template: $("#tooltip-step-template").html(),

      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.skipTooltip);

    var that = this;

    this.skipTooltip.bind("onEscKey",         this.closeSkipTooltip);
    this.skipTooltip.bind("onSecondaryClick", this.closeSkipTooltip);

    this.skipTooltip.bind("onMainClick",      function() {

      that.closeSkipTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.skipTooltip.render());

    this.skipTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.skipTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.skipTooltip.height() - 40

    this.skipTooltip.setPosition(x, y);

    GOD.add(this.skipTooltip, this.closeSkipTooltip);

  },

  closeSkipTooltip: function(callback) {

    if (!this.skipTooltip) return;

    this.skipTooltip.hide();
    this.skipTooltip.clean();

    delete this.skipTooltip;

    callback && callback();

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

  },

  skip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.skip();

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var main = "Close";
    var url = this.$el.find(".example").attr("data-src")

    this.tooltip = new nfn.ui.view.Tooltip({

      className: "tooltip with-spinner",

      model: new nfn.ui.model.Tooltip({
        main: main,
        urls: [url],
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onMainClick",   this.closeTooltip);
    this.tooltip.bind("onEscKey",      this.closeTooltip);

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    skipWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-left").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + skipWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

  },

  closeTooltip: function(callback) {

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  render: function() {

    var $el = this.$el;

    $el.append(this.template.render());

    this.$startButton = $el.find(".btn.start");
    this.$skipButton  = $el.find(".skip");
    this.$message     = $el.find("span");
    this.$exampleLink = $el.find(".example");

    return $el;
  }

});

// Magnifier ---------------------------------------

nfn.ui.model.Magnifier = Backbone.Model.extend({ });

nfn.ui.view.Magnifier  = nfn.ui.view.Widget.extend({
  className: 'magnifier',

  initialize: function() {
    _.bindAll(this, "toggle");

    this.add_related_model(this.model);
    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;
  },

  create: function(dimensions) {
    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }
    this.show();

    this.setDimensions(dimensions);
  },

  render: function() {
    return this.$el;
  }
});

// Selection ---------------------------------------

nfn.ui.model.Selection = Backbone.Model.extend({ });

nfn.ui.view.Selection  = nfn.ui.view.Widget.extend({

  className: 'selection',

  initialize: function() {

    this.parent = this.options.parent;
  },

  clear: function() {

    this.model.clear();

  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  setPosition: function(left, top) {

    this.model.set("top", top);
    this.model.set("left", left);

    this.$el.css({ top: top, left: left});

  },

  remove: function() {
    this.$el.remove();
  },

  render: function() {

    return this.$el;

  }

});
// Highlight ---------------------------------------

nfn.ui.model.Highlight = Backbone.Model.extend({ });

nfn.ui.view.Highlight = nfn.ui.view.Widget.extend({

  className: 'highlight',

  events: {

    "click"        : "start",
    "click .close" : "close"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "start", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  clear: function() {

    this.model.clear();

  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  create: function(dimensions) {

    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }

    this.setDimensions(dimensions);
  },

  start: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent)
      this.parent.addMagnifier();

  },

  close: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent) {

      this.parent.launcher.disable();
      this.parent.startTranscribing();
      this.parent.enableMouseWheel();

    }

    this.hide();


  },

  render: function() {

    this.$el.append(this.template.render());

    this.$closeButton = this.$el.find(".close");

    return this.$el;

  }

});


// Helper ---------------------------------------

nfn.ui.model.Helper = Backbone.Model.extend({
});

nfn.ui.view.Helper = nfn.ui.view.Widget.extend({

  className: 'helper bar',

  events: {

    "click .example"      : "showExample"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "updateTitle", "updateDescription", "showExample", "closeTooltip", "nextPhoto" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:title",       this.updateTitle);
    this.model.bind("change:description", this.updateDescription);

    this.parent = this.options.parent;

  },

  updateTitle: function() {

    var that = this;

    this.$title.fadeOut(200, function() {
      that.$title.text(that.model.get("title"));
      that.$title.fadeIn(200);
    });

  },

  updateDescription: function() {

    var that = this;

    this.$description.fadeOut(200, function() {
      that.$description.html(that.model.get("description"));
      that.$description.fadeIn(200);
      that.$exampleLink = that.$description.find(".example");
    });

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    that = this,
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    if (url) {

      this.tooltip = new nfn.ui.view.Tooltip({

        className: "tooltip with-spinner upsidedown",

        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: [url],
          template: $("#tooltip-example-template").html()
        })

      });

    } else if (this.model.get("urls")) {

      this.tooltip = new nfn.ui.view.Tooltip({

        className: "tooltip with-spinner upsidedown",

        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: that.model.get("urls"),
          template: $("#tooltip-example-template").html()
        })

      });

    }

    this.addView(this.tooltip);

    this.tooltip.bind("onMainClick", this.nextPhoto);
    this.tooltip.bind("onEscKey", this.closeTooltip);

    this.$el.append(this.tooltip.render());

    this.tooltip.show();

    var $target = this.$el.find(".example");

    if (e) $target = $(e.target);

    var
    linkWidth   = $target.width()/2,
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top) + 30;

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

    // Loads the Closer
    closer = new nfn.ui.view.Closer({
      model: new nfn.ui.model.Closer(),
      template: $("#closer-template").html(),
      onClose: function () {
        that.closeTooltip();
      }
    });

    // Add the close button
    var closerX = this.tooltip.left() + this.tooltip.width() + 12
      , closerY = this.tooltip.top();
    closer.$el.css({left: closerX, top: closerY});
    this.$el.append(closer.render());
    closer.show();
  },

  nextPhoto: function(callback) {

    this.tooltip.nextPhoto();

  },

  closeTooltip: function(callback) {
    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$title       = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$exampleLink = this.$el.find(".example");

    return this.$el;

  }

});

// BUGS TRANSCRIBER ------------------------------------------
Spine = require('spine')

nfn.ui.model.Bugs = nfn.ui.model.Transcriber.extend({

  defaults: {
    type: 'sernac bugs'
  }

});

nfn.ui.view.BugsTranscriber = nfn.ui.view.Transcriber.extend({

  initialize: function() {
    var that = this;

    _.bindAll( this, "addScroll", "updateInputField", "updatePlaceholder", "updateHelper", "getStepData", "updateStepCounter", "addMagnifier", "onMouseDown", "onMouseUp", "onResize" );

    if (this.options.model === undefined) {
      throw new TypeError("you should specify a model");
    }

    this.add_related_model(this.model);

    this.guide = [
      {
        title: 'Locality' ,
        description: 'Locality Description. <a href="#" class="example">See example</a>',
        examples: [ "nfn/ui/herbarium/examples/ex_state.png" ],
        placeholder: 'Locality',
        type: "text",
        inputWidth: 540
      }, {
        title: 'County' ,
        description: 'This is the county name found on the record. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_county.png"],
        placeholder: 'County',
        type: "text",
        inputWidth: 540
      }, {
        title: 'State' ,
        description: 'This is the state name found on the record. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_state.png"],
        placeholder: 'State',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Date collection',
        description: 'Date specimen collected. Likely below the location. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_date.png"],
        placeholder: ['day', 'month', 'year'],
        type: "date",
        inputWidth: 700
      }, {
        title: 'Collected by',
        description: 'The name the person that collected this specimen. <a href="#" class="example">See example</a>',
        examples: ["nfn/ui/herbarium/examples/ex_recorded_by.png"],
        placeholder: 'Collected by',
        type: "text",
        inputWidth: 540
      }, {
        title: 'Host',
        description: 'The scientific name of the plant or animal that the specimen was found on. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/herbarium/examples/ex_county.png'],
        placeholder: 'Host',
        type: 'text',
        inputWidth: 540
      }, {
        title: 'Elevation',
        description: 'The elevation where the specimen was found. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/herbarium/examples/ex_county.png'],
        placeholder: 'Elevation',
        type: 'text',
        inputWidth: 540
      }, {
        title: 'Latitude',
        description: 'The latitude where the specimen was found. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/herbarium/examples/ex_county.png'],
        placeholder: 'Latitude',
        type: 'text',
        inputWidth: 540
      }, {
        title: 'Longitude' ,
        description: 'The longitude where the specimen was found. <a href="#" class="example">See example</a>',
        examples: ['nfn/ui/herbarium/examples/ex_county.png'],
        placeholder: 'Longitude',
        type: 'text',
        inputWidth: 540
      }
    ];


    this.model.set("currentRecord", 0);

    this.model.set("currentStep", -1);
    this.model.set("stepsCount", this.guide.length);

    this.model.bind("change:currentRecord", function(model) {
      that.statusBar.$counter.text(model.get("currentRecord"));
    });

    this.model.bind("change:currentStep", function() {
      that.updateStepCounter();
      that.updateHelper();

      that.updateInputField();
      that.updatePlaceholder();
    });

    this.photos         = new nfn.ui.collection.Photos();
    this.transcriptions = new nfn.ui.collection.Transcriptions();

    this.addViews();

    this.render();
  },

  addViews: function() {

    // Loads the transcriber widget
    this.transcriberWidget = new nfn.ui.view.HerbariumWidget({
      model: new nfn.ui.model.HerbariumWidget(),
      template: $("#transcriber-herbarium-widget-template").html(),
      parent: this
    });

    this.addView(this.transcriberWidget);

    // Loads the backdrop
    this.backdrop = new nfn.ui.view.Backdrop({
      model: new nfn.ui.model.Backdrop(),
      parent: this
    });

    this.addView(this.backdrop);

    // Loads the highlight
    this.highlight = new nfn.ui.view.Highlight({
      model: new nfn.ui.model.Highlight(),
      template: $("#highlight-template").html(),
      parent: this
    });

    this.addView(this.highlight);

    this.spinner = new nfn.ui.view.Spinner({ // Loads the spinner
      model: new nfn.ui.model.Spinner(),
      settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
      parent: this
    });

    this.addView(this.spinner);

    // Loads the helper
    this.helper = new nfn.ui.view.BugsHelper({
      model: new nfn.ui.model.BugsHelper(),
      template: $("#helper-template").html(),
      parent: this
    });

    this.addView(this.helper);

    // Loads the helper
    this.statusBar = new nfn.ui.view.StatusBar({

      model: new nfn.ui.model.StatusBar({
        title: "Bugs and Such",
        description: "from CalBug"
      }),

      template: $("#statusbar-template").html(),
      parent: this
    });

    this.addView(this.statusBar);

    // Loads the magnifier
    this.magnifier = new nfn.ui.view.Magnifier({
      model: new nfn.ui.model.Magnifier(),
      parent: this
    });

    this.addView(this.magnifier);

    // Loads the selection
    this.selection = new nfn.ui.view.Selection({
      model: new nfn.ui.model.Selection(),
      parent: this
    });

    this.addView(this.selection);

    // Loads the launcher
    // this.launcher = new nfn.ui.view.Launcher({
    //   model: new nfn.ui.model.Launcher(),
    //   template: $("#launcher-template").html(),
    //   parent: this
    // });

    // this.addView(this.launcher);
  },

  addPhoto: function(url, callback) {
    var that = this;

    var photo = new nfn.ui.view.Photo({
      model: new nfn.ui.model.Photo({ url: url }),
      parent: this
    });

    photo.model.set("view", photo);

    callback && photo.model.set("callback", callback);

    this.photos.push(photo.model);
  },


  skip: function() {
    this.launcher.disable();

    this.backdrop.hide();
    this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    var that = this;

    var callback = function () {
      that.startTranscribing();
      that.spinner.hide();

      $(".photos img").animate({ marginLeft: "0" }, 500);
      that.$backgroundMessage.fadeOut(250);

    };

    var that = this;

    Spine.trigger("finishedBugsTranscription", this.transcriptions)

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

  },

  finish: function() {

    this.$backgroundMessage.html("<h1>Thanks!</h1><p class='loading'>Loading next bug...</p>");

    // this.launcher.disable();

    this.backdrop.hide();
    // this.magnifier.hide();
    this.helper.hide();
    this.transcriberWidget.hide();

    this.nextRecord();

    var that = this;

    var callback = function () {
      that.startTranscribing();
      that.spinner.hide();
      $(".photos img").animate({ marginLeft: "0" }, 500);

      that.$backgroundMessage.fadeOut(250, function() {
        that.$backgroundMessage.html("");
      });

    };

    var that = this;

    Spine.trigger("finishedBugsTranscription", this.transcriptions)

    $(".photos img").animate({ marginLeft: -2*$(document).width() }, 500);

    this.helper.closeTooltip();             // TODO: add test
    this.transcriberWidget.closeTooltip();  // TODO: add test

    delete this.transcriptions;
    this.transcriptions = new nfn.ui.collection.Transcriptions();

  },


  showPhoto: function(i) {
    var that = this;

    this.$el.append(this.spinner.render());
    this.spinner.show().spin();

    this.$backgroundMessage.fadeIn(250);

    var photo = this.photos.at(i);

    if (photo) {
      photo.get("view").render();
      photo.get("view").$el.css("margin-left", 1500);
    }

  },

  addSelection: function() {
    if (this.$el.find(".selection").length <= 0)
      this.$el.append(this.selection.render());
  },

  removeSelection: function() {
    this.selection.remove();
  },

  updateSelection: function(startX, startY, endX, endY) {

    var
    dw         = $(document).width(),
    dh         = $(document).height();

    var s = {};

    if (endX > startX) { // right

      s = { right: "auto", left:  startX , width: endX - startX };
      this.selection.model.set("left", startX);

    } else { // left

      s = { left:"auto", width: startX - endX, right: dw -startX };
      this.selection.model.set("left", endX);

    }

    if (endY > startY) { // bottom

      style = { bottom: "auto", top: startY, height: (endY - startY) };
      this.selection.model.set("top",  startY);

    } else { // top

      style = { top: "auto", height: startY - endY , bottom: dh - startY};
      this.selection.model.set("top",  endY);

    }

    s = $.extend(s, style);
    s = $.extend({ visibility: "visible" }, s);

    this.selection.model.set("width",  Math.abs(endX - startX));
    this.selection.model.set("height", Math.abs(endY - startY));

    this.selection.$el.css(s);
  },

  addHighlight: function(dimensions) {

    this.highlight.show();
    this.highlight.create(dimensions);
    this.$el.find(".photos").removeClass("selectable");
    this.launcher.enable();
    this.disableMouseWheel();

  },

  addMagnifier: function() {

    if (this.selection.isDefined()) {

      var dimensions = this.highlight.getDimensions();

      var $img = this.$el.find(".photos img:first-child");
      var $img2x = $img.clone();

      var
      x = Math.abs($img.offset().left - dimensions.x),
      y = Math.abs($img.offset().top - dimensions.y),
      w = dimensions.w,
      h = dimensions.h;

      this.model.set("currentStep", 0);

      this.updateSelection(x, y, x+w, y+h);

      // Size of the magnifier
      w = 640;
      h = 480;

      var that = this;

      this.launcher.hide(function() {

        that.highlight.hide();

        that.magnifier.create({ x: $(document).width()/2 - w/2, y: $(document).height()/2 - h/2, w: w, h: h });
        that.magnifier.$el.css({ left: "50%", marginLeft: -1*w/2 });
        that.magnifier.$el.empty();
        that.magnifier.$el.append($img2x);

        $img2x.attr("src", that.model.get("big-url"));

        var spinner = new nfn.ui.view.Spinner({ // Loads the spinner
          model: new nfn.ui.model.Spinner(),
          settings: { lines: 10, length: 3, width: 4, radius: 8, color: '#333333' },
          parent: this
        });

        window.spinner = spinner;

        that.magnifier.$el.append(spinner.render());

        spinner.show().spin();

        $img2x.imagesLoaded(function() {
          spinner.hide().stop();
        });

        that.removeSelection();

        that.backdrop.show();

        var magnifierWidth = that.magnifier.width();

        var // add the helper widget
        helperX = that.magnifier.left(),
        helperY = that.magnifier.top() - that.helper.height() - 35;

        that.helper.setWidth(magnifierWidth).setPosition(helperX, helperY)
        that.helper.$el.css({ left: "50%", marginLeft: -1*magnifierWidth/2 });
        that.helper.show();

        var // add the transcriber widget
        twX = "50%",
        twY = that.magnifier.top() + that.magnifier.height() + 10;

        that.transcriberWidget.setWidth(magnifierWidth).setPosition(twX, twY).show();

        if ($.browser.msie && $.browser.version == 8) {
          $img2x.css({ top: -1*selection_y, left: -1*selection_x });
        } else {
          $img2x.css({ top: -2*y, left: -2*x });
        }
      });

    }
  },

  stopTranscribing: function() {

    this.model.set("isDown", false);
    this.$el.find(".photos").off("mousedown");
    this.$el.off("mouseup");

  },

  startTranscribing: function() {
    this.model.set("currentStep", 0);

     // add the helper widget
    var helperY = $(document).height() - this.helper.height() - 110;

    this.helper.setPosition(0, helperY)
    this.helper.$el.css({ left: "50%", marginLeft: -1*this.helper.width()/2 });
    this.helper.show();

    // add the transcriber widget
    var twX = "50%"
      , twY = this.helper.top() + this.helper.height() + 35;

    this.transcriberWidget.$el.css({ left: "50%", marginLeft: -1*this.transcriberWidget.width()/2 });
    this.transcriberWidget.setPosition(twX, twY);
    this.transcriberWidget.show();
  },

  onMouseUp: function() {

    if (this.model.get("isDown")) {

      if ( this.selection.isDefined() ) {

        this.model.set("isDown", false);

        this.addHighlight(this.selection.getDimensions());
        this.stopTranscribing();
        this.removeSelection();
        this.launcher.show();
      }
    }

  },

  onMouseDown: function(e) {

    var
    that = this,
    initialxpos = e.pageX,
    initialypos = e.pageY;

    this.model.set("isDown", true);

    this.selection.$el.css("visibility", "hidden");
    this.addSelection();

    this.$el.mousemove(function(e){
      that.updateSelection(initialxpos, initialypos, e.pageX, e.pageY);
    });
  },

  getPendingFieldCount: function() {

    return (this.guide.length - this.transcriptions.length);

  },

  updateStepCounter: function() {

    var currentStep = this.model.get("currentStep") + 1;
    this.transcriberWidget.$step.text( currentStep + "/" + this.model.get("stepsCount"));

  },

  updateInputField: function() {

    var
    value       = "",
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) { // gets stored value
      value = transcription.get("value");
    }

    this.transcriberWidget.model.set({ type: stepGuide.type, inputWidth: stepGuide.inputWidth, value: value });
    this.helper.setWidth(this.transcriberWidget.width());
  },

  updatePlaceholder: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.transcriberWidget.model.set("placeholder", stepGuide.placeholder);

  },

  updateHelper: function() {

    var
    currentStep = this.model.get("currentStep"),
    stepGuide   = this.guide[currentStep];

    this.helper.model.set("title",       stepGuide.title);
    this.helper.model.set("description", stepGuide.description);
    this.helper.model.set("urls",        stepGuide.examples);

  },

  getStepData: function(step) {

    return this.transcriptions.find(function(transcription) {
      return transcription.get("step") === step;
    });

  },

  saveCurrentStep: function() {

    var transcription = this.getStepData(this.model.get("currentStep"));

    if (transcription) {

      transcription.set("value", this.transcriberWidget.getValue());

    } else {

      transcription = new nfn.ui.model.Transcription({
        step:  this.model.get("currentStep"),
        value: this.transcriberWidget.getValue()
      });

      this.transcriptions.push(transcription);

    }

    //console.log("STATUS", this.transcriptions.toJSON());

  },

  onResize: function() {

    //console.log(this.launcher.$el);

  },

  addScroll: function() {

    if (!this.model.get("scrollbar")) {
      this.model.set("scrollbar", true);
      this.$el.find(".photos").mCustomScrollbar();
    }

  },

  enableMouseWheel: function() {

    this.$el.find(".photos").mCustomScrollbar("enableMouseWheel");

  },

  disableMouseWheel: function() {

    this.$el.find(".photos").mCustomScrollbar("disableMouseWheel");

  },

  render: function() {
    this.$el.addClass(this.model.get("type"));

    this.$el.append(this.backdrop.render());
    // this.$el.append(this.launcher.render());
    this.$el.append(this.helper.render());
    this.$el.append(this.statusBar.render());
    this.$el.append(this.transcriberWidget.render());

    // Adds the message placeholder
    this.$el.append('<div class="message" />');
    this.$backgroundMessage = this.$el.find(".message");

    // Adds the photo placeholder
    this.$el.append('<div class="photos" />');

    // This prevents the image to be draggable (hack for Firefox)
    $(document).on("dragstart", ".photos img", function() {
      return false;
    });

    var that = this;

    $(window).on("resize", this.onResize);

    // $(document).on("mouseover", ".mCSB_scrollTools", function() {
    //   that.stopTranscribing();
    // });

    // $(document).on("mouseleave", ".mCSB_scrollTools", function() {
    //   that.startTranscribing();
    // });

    $("body").append(this.$el);

    // this.launcher.setDraggable(true);

    return this.$el;
  }

});

// BugsWidget --------------------------------------

nfn.ui.model.BugsWidget = Backbone.Model.extend({ });

nfn.ui.view.BugsWidget = nfn.ui.view.Widget.extend({
  className: 'bugs-widget bar',

  events: {
    "click .btn.ok" :            "ok",
    'keypress input[type=text]': "onEnter",
    "click .step" :              "showStepTooltip",
    "click .btn.finish" :        "showFinishTooltip",
    "click .skip" :              "showSkipTooltip"
  },

  initialize: function() {
    _.bindAll( this, "toggle", "toggleOk", "onEnter", "updatePlaceholder", "updateValue", "updateType", "createStepTooltip", "closeTooltip", "closeErrorTooltip", "closeFinishTooltip", "closeStepTooltip", "gotoStep" );

    this.template = new nfn.core.Template({
      template: this.options.template
    });

    this.templates = [];

    this.templates["text"] = new nfn.core.Template({
      template: '<input type="text" placeholder="" />',
      type: 'mustache'
    });

    this.templates["location"] = new nfn.core.Template({
      template: '<input type="text" id="autocomplete" placeholder="" />',
      type: 'mustache'
    });

    this.templates["date"] = new nfn.core.Template({
      template: $("#date-input-template").html(),
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:placeholder", this.updatePlaceholder);
    this.model.bind("change:type",        this.updateType);
    this.model.bind("change:value",       this.updateValue);

    this.model.bind("change:draggable",     this.toggleDraggable);
    this.model.bind("change:resizable",     this.toggleResizable);
    this.model.bind("change:ok_enabled",  this.toggleOk);

    this.parent = this.options.parent;
  },

  skip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltip();               // TODO: add test
    this.parent.helper.closeTooltip(); // TODO: add test

    this.clearInput();
    this.parent.nextStep();
  },

  onEnter: function(e) {
    if (e.keyCode != 13) return;

    this.ok();
  },

  ok: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    GOD.triggerCallbacks(); // this close the tooltips (TODO: add test)

    if (this.$input.val()) { // don't store or advance when the input field is empty
      this.parent.saveCurrentStep();
      this.clearInput();

      // Shall we go to the next record or the next step?
      if (this.parent.getPendingFieldCount() == 0) {
        this.parent.finish();
      } else {
        this.parent.nextStep();
      }
    } else {
      this.showErrorTooltip("Empty field", "Please, write a value or use the skip field option below");
    }
  },

  toggleOk: function() {
    if (this.model.get("ok_enabled")) {
      this.$okButton.removeClass("disabled");
    } else {
      this.$okButton.addClass("disabled");
    }
  },

  enableOk: function(callback) {
    this.model.set("ok_enabled", true);

    callback && callback();

    return this;
  },

  disableOk: function(callback) {
    this.model.set("ok_enabled", false);

    callback && callback();

    return this;
  },

  gotoStep: function(e, i) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeStepTooltip();
    this.parent.model.set("currentStep", i);

    this.clearInput();
    this.focus();

  },

  showErrorTooltip: function(title, description) {

    this.closeTooltips();

    if (!this.errorTooltip) this.createErrorTooltip(title, description);

  },

  closeErrorTooltip: function(callback) {

    var that = this;

    if (!this.errorTooltip) return;

    this.errorTooltip.hide();
    this.errorTooltip.clean();
    delete this.errorTooltip;

    this.$errorIndicator.fadeOut(100, function() {
      that.$okButton.fadeIn(100);
    });

    callback && callback();

  },

  createErrorTooltip: function(title, description) {

    var
    main        = "Finish",
    secondary   = "Cancel";

    this.errorTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip error",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-error-template").html(),
        title: title,
        description: description
      })

    });

    this.addView(this.errorTooltip);

    var that = this;

    this.errorTooltip.bind("onEscKey",         this.closeErrorTooltip);
    this.errorTooltip.bind("onSecondaryClick", this.closeErrorTooltip);
    this.errorTooltip.bind("onMainClick",      function() {

      that.closeErrorTooltip(function() {
        //that.finish();
      })

    });

    this.$okButton.fadeOut(100, function() {
      that.$errorIndicator.fadeIn(100);
    });

    this.$el.append(this.errorTooltip.render());

    this.errorTooltip.show();

    var
    $element    = this.$okButton,
    targetWidth = $element.width()/2,
    marginRight = 8,
    x           = Math.abs(this.$el.offset().left - $element.offset().left) - this.errorTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $element.offset().top)  - this.errorTooltip.height() - 40

    this.errorTooltip.setPosition(x, y);
    GOD.add(this.errorTooltip, this.closeErrorTooltip);

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "If you can’t find the value, you can see <a href='#'>examples</a> that surely will help you",
    main        = "Skip field",
    secondary   = "Cancel";

    this.tooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({ title: title, description: description, main: main, secondary: secondary })
    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onEscKey",         this.closeTooltip);
    this.tooltip.bind("onSecondaryClick", this.closeTooltip);
    this.tooltip.bind("onMainClick",      function() {

      that.closeTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    targetWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.tooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);
    GOD.add(this.tooltip, this.closeTooltip);

  },

  closeTooltip: function(callback) {

    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  showStepTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.stepTooltip) this.createStepTooltip(e);

  },

  createStepTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u> " + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Finish",
    secondary   = "Cancel";

    this.stepTooltip = new nfn.ui.view.Tooltip({

      className: "tooltip step",

      model: new nfn.ui.model.Tooltip({
        template: $("#tooltip-step-template").html(),
        links: this.parent.guide
      })

    });

    this.addView(this.stepTooltip);

    var that = this;

    this.stepTooltip.bind("onEscKey", this.closeStepTooltip);

    this.$el.append(this.stepTooltip.render());
    this.stepTooltip.show();

    var
    $target     = this.$step,
    targetWidth = $target.width()/2,
    marginRight = parseInt($target.css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $target.offset().left) - this.stepTooltip.width() + 30,
    y           = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.stepTooltip.height() - 17

    this.stepTooltip.setPosition(x, y);

    this.parent.transcriptions.each(function(transcription) {

      if (transcription.get("value")) {
        that.stepTooltip.$el.find("li:nth-child(" + (transcription.get("step") + 1) + ")").addClass("completed");
      }

    });

    var currentStep = this.parent.model.get("currentStep");

    this.stepTooltip.$el.find("a").on("click", function(e) {
      var i = $(this).parent().index();
      that.gotoStep(e, i);
    });


    GOD.add(this.stepTooltip, this.closeStepTooltip);

  },

  closeStepTooltip: function(callback) {

    if (!this.stepTooltip) return;

    this.stepTooltip.hide();
    this.stepTooltip.clean();
    delete this.stepTooltip;

    this.focus();

    callback && callback();

  },

  showFinishTooltip: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.finishTooltip) this.createFinishTooltip(e);
  },

  closeTooltips: function() {
    GOD.triggerCallbacks();
  },

  createFinishTooltip: function(e) {
    if (this.parent.getPendingFieldCount() == 0) {
      var title = 'Thank you!',
        description = 'Onto the next record.',
        main = 'Next',
        secondary = 'Cancel';
    } else {
      var title = 'Are you sure?',
        description = '',
        main = 'Finish',
        secondary = 'Cancel';

      if (this.parent.getPendingFieldCount() == 1) {
        description = "There is still <a href='#'>1 empty field</a> for this record that should be completed before finishing.";
      } else {
        description = "There are still <a href='#'> " + this.parent.getPendingFieldCount() + " empty fields</a> for this record that should be completed before finishing.";
      }
    }

    this.finishTooltip = new nfn.ui.view.Tooltip({
      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })
    });

    this.addView(this.finishTooltip);

    var that = this;

    this.finishTooltip.bind("onEscKey",         this.closeFinishTooltip);
    this.finishTooltip.bind("onSecondaryClick", this.closeFinishTooltip);
    this.finishTooltip.bind("onMainClick",      function() {

      that.closeFinishTooltip(function() {
        that.finish();
      })
    });

    this.$el.append(this.finishTooltip.render());
    this.finishTooltip.show();

    this.finishTooltip.$el.find(".description > a").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      that.showStepTooltip();
    });

    var
    $target     = this.$finishButton,
    targetWidth = $target.width()/2,
    marginRight = parseInt($target.css("margin-right").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - $target.offset().left) - this.finishTooltip.width() / 2 + targetWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - $target.offset().top)  - this.finishTooltip.height() - 40

    this.finishTooltip.setPosition(x, y);
    GOD.add(this.finishTooltip, this.closeFinishTooltip);
  },

  closeFinishTooltip: function(callback) {
    if (!this.finishTooltip) return;

    this.finishTooltip.hide();
    this.finishTooltip.clean();
    delete this.finishTooltip;

    callback && callback();
  },

  finish: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.clearInput();
    this.parent.finish();
  },

  clearInput: function() {
    this.$input.val("");
  },

  resize: function() {

    var that = this;

    var type  = this.model.get("type");
    var width = this.model.get("inputWidth");

    // Centers the widget horizontally and resizes the input field
    if ( type == 'text' || type == 'location' ) {

      if (this.$input.parent().width() > width - 300) {

        this.$input.parent().animate({ width: width - 300  }, 200, function() {
          that.$input.width(width - 300 - 40);
          that.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        });

      } else {

        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        this.$input.parent().delay(50).animate({ width: width - 300  }, 200);
        this.$input.width(width - 300 - 40);

      }
    } else if ( type == 'date' ) {

      if ($(".input_field.date").width() > width - 290) {

        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true, function() {
          $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);
        });

      } else {

        console.log('b');
        this.animate({ width: width, marginLeft: -1*width/2, left: "50%" }, true);
        $(".input_field.date").delay(50).animate({ width: width - 290  }, 150);


      }

    }

  },

  getValue: function() {
    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      return this.$input.val();

    } else if ( type == 'date') {

      var month = this.$el.find(".month").val();
      var day   = this.$el.find(".day").val();
      var year  = this.$el.find(".year").val();

      if (month && day && year) {
        return month + "/" + day + "/" + year;
      } else {
        return "";
      }

    }

  },

  updatePlaceholder: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.attr("placeholder", this.model.get("placeholder"));

    } else if ( type == 'date' ) {

      var placeholders = this.model.get("placeholder");

      this.$input.find(".day").attr("placeholder", placeholders[0]);
      this.$input.find(".month").attr("placeholder", placeholders[1]);
      this.$input.find(".year").attr("placeholder", placeholders[2]);

    }

    this.resize();
    this.focus();

  },

  focus: function() {

    var type = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.focus();

    } else if ( type == 'date' ) {

      this.$input[0].focus();

    }

  },

  updateValue: function() {

    this.$input.val("");

    var
    value = this.model.get("value"),
    type  = this.model.get("type");

    if ( type == 'text' || type == 'location' ) {

      this.$input.val(value);

    } else if ( type == 'date' ) {

      var date = value.split("/");

      var month = date[0];
      var day   = date[1];
      var year  = date[2];

      var month = this.$el.find(".month").val(month);
      var day   = this.$el.find(".day").val(day);
      var year  = this.$el.find(".year").val(year);

    }

  },

  updateType: function() {

    var type = this.model.get("type");

    this.$el.find(".input_field").removeClass("text");
    this.$el.find(".input_field").removeClass("date");
    this.$el.find(".input_field").removeClass("location");
    this.$el.find(".input_field").addClass(type);

    if ( type == 'text' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    } else if ( type == 'location' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field .date_field").remove();

      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

      this.$input.addresspicker();

    } else if ( type == 'date' ) {

      this.$el.find(".input_field input").remove();
      this.$el.find(".input_field").append( this.templates[type].render() );
      this.$input = this.$el.find('.input_field input');

    }

  },

  render: function() {

    this.$el.append(this.template.render());

    this.$errorIndicator  = this.$el.find(".error");
    this.$okButton        = this.$el.find(".btn.ok");
    this.$skip            = this.$el.find(".skip");
    this.$finishButton    = this.$el.find(".btn.finish");
    this.$step            = this.$el.find(".step");
    this.$input           = this.$el.find('.input_field input[type="text"]');

    return this.$el;

  }

});


// Launcher --------------------------------------

nfn.ui.model.Launcher = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

nfn.ui.view.Launcher = nfn.ui.view.Widget.extend({

  events: {

    "click .btn.start": "start",
    "click .skip":      "showSkipTooltip",
    "click .example":   "showExample"

  },

  className: "launcher bar",

  initialize: function() {

    _.bindAll( this, "start", "skip", "showSkipTooltip", "closeSkipTooltip", "toggle", "toggleDraggable", "toggleResizable", "onStopDragging", "onStopResizing", "updateMessage", "toggleButton", "showExample", "closeTooltip", "_showStart", "_hideStart", "_showSkip", "_hideSkip" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",     this.toggle);
    this.model.bind("change:disabled",   this.toggleButton);
    this.model.bind("change:message",    this.updateMessage);

    this.model.bind("change:draggable",     this.toggleDraggable);
    this.model.bind("change:resizable",     this.toggleResizable);

    this.parent = this.options.parent;
  },

  updateMessage: function() {

    var that = this;

    this.$message.delay(200).fadeOut(this.defaults.speed, function() {
      $(this).html(that.model.get("message"));
      $(this).fadeIn(that.defaults.speed);
    });

  },

  toggleButton: function() {

    if (this.model.get("disabled") == true) {
      this._hideStart(this._showSkip);
    } else {
      this._hideSkip(this._showStart);
    }

  },

  toggle: function() {
    var that = this;

    if (this.model.get("hidden")) {

      this.$el.animate({ bottom: this.bottom() , opacity: 0 }, this.defaults.speed, function() {
        that.setBottom(that.bottom() );
        $(this).hide();
      });

    } else {

      this.$el.css({ opacity: 0 }, 250 );

      this.$el.show();
      this.$el.animate({ bottom: this.bottom() , opacity: 1 }, this.defaults.speed, function() {
      that.setBottom(that.bottom() );
        $(this).show();
      });
    }
  },

  _showStart: function(callback) {

    if (!this.$startButton.hasClass("hidden")) {

      callback && callback();

    } else {

      this.$startButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });

    }

  },

  _hideStart: function(callback) {

    if (this.$startButton.hasClass("hidden")) {
      callback && callback();
    } else {
      this.$startButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  _showSkip: function(callback) {

    if (!this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeIn(this.defaults.speed, function() {
        $(this).removeClass("hidden");
        callback && callback();
      });

    }

  },

  _hideSkip: function(callback) {

    if (this.$skipButton.hasClass("hidden")) {
      callback && callback();
    } else {

      this.$skipButton.fadeOut(this.defaults.speed, function() {
        $(this).addClass("hidden");
        callback && callback();
      });
    }

  },

  enable: function() {
    this.model.set({ disabled: false, message: "Specimen label selected" });
  },

  disable: function() {
    this.model.set({ disabled: true, message: "Drag a square around the specimen label" });
  },

  start: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.model.get("disabled")) this.parent.addMagnifier();

  },

  showSkipTooltip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.closeTooltips();

    if (!this.skipTooltip) this.createSkipTooltip(e);

  },

  createSkipTooltip: function(e) {

    var
    title       = "Are you sure?",
    description = "There are still <u>" + this.parent.getPendingFieldCount() + " empty fields</u> for this record that should be completed before finishing.",
    main        = "Skip record",
    secondary   = "Cancel";

    this.skipTooltip = new nfn.ui.view.Tooltip({

      template: $("#tooltip-step-template").html(),

      model: new nfn.ui.model.Tooltip({
        title: title,
        description: description,
        main: main,
        secondary: secondary
      })

    });

    this.addView(this.skipTooltip);

    var that = this;

    this.skipTooltip.bind("onEscKey",         this.closeSkipTooltip);
    this.skipTooltip.bind("onSecondaryClick", this.closeSkipTooltip);

    this.skipTooltip.bind("onMainClick",      function() {

      that.closeSkipTooltip(function() {
        that.skip();
      })

    });

    this.$el.append(this.skipTooltip.render());

    this.skipTooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - $(e.target).offset().left) - this.skipTooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - $(e.target).offset().top)  - this.skipTooltip.height() - 40

    this.skipTooltip.setPosition(x, y);

    GOD.add(this.skipTooltip, this.closeSkipTooltip);

  },

  closeSkipTooltip: function(callback) {

    if (!this.skipTooltip) return;

    this.skipTooltip.hide();
    this.skipTooltip.clean();

    delete this.skipTooltip;

    callback && callback();

  },

  closeTooltips: function() {

    GOD.triggerCallbacks();

  },

  skip: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    this.parent.skip();

  },

  showExample: function(e) {

    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);

  },

  createTooltip: function(e) {

    var main = "Close";
    var url = this.$el.find(".example").attr("data-src")

    this.tooltip = new nfn.ui.view.Tooltip({

      className: "tooltip with-spinner",

      model: new nfn.ui.model.Tooltip({
        main: main,
        urls: [url],
        template: $("#tooltip-example-template").html()
      })

    });

    this.addView(this.tooltip);

    var that = this;

    this.tooltip.bind("onMainClick", this.closeTooltip);
    this.tooltip.bind("onEscKey", this.closeTooltip);

    this.$el.append(this.tooltip.render());
    this.tooltip.show();

    var
    skipWidth   = $(e.target).width()/2,
    marginRight = parseInt($(e.target).css("margin-left").replace("px", ""), 10),
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + skipWidth - marginRight,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top)  - this.tooltip.height() - 40

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

  },

  closeTooltip: function(callback) {

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();

  },

  render: function() {

    var $el = this.$el;

    $el.append(this.template.render());

    this.$startButton = $el.find(".btn.start");
    this.$skipButton  = $el.find(".skip");
    this.$message     = $el.find("span");
    this.$exampleLink = $el.find(".example");

    return $el;
  }

});

// Magnifier ---------------------------------------

nfn.ui.model.Magnifier = Backbone.Model.extend({ });

nfn.ui.view.Magnifier  = nfn.ui.view.Widget.extend({

  className: 'magnifier',

  initialize: function() {

    _.bindAll( this, "toggle" );

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;


  },

  create: function(dimensions) {
    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }
    this.show();

    this.setDimensions(dimensions);
  },

  render: function() {

    return this.$el;

  }

});

// Selection ---------------------------------------

nfn.ui.model.Selection = Backbone.Model.extend({ });

nfn.ui.view.Selection  = nfn.ui.view.Widget.extend({

  className: 'selection',

  initialize: function() {

    this.parent = this.options.parent;
  },

  clear: function() {

    this.model.clear();

  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  setPosition: function(left, top) {

    this.model.set("top", top);
    this.model.set("left", left);

    this.$el.css({ top: top, left: left});

  },

  remove: function() {
    this.$el.remove();
  },

  render: function() {

    return this.$el;

  }

});
// Highlight ---------------------------------------

nfn.ui.model.Highlight = Backbone.Model.extend({ });

nfn.ui.view.Highlight = nfn.ui.view.Widget.extend({

  className: 'highlight',

  events: {

    "click"        : "start",
    "click .close" : "close"

  },

  initialize: function() {

    _.bindAll( this, "toggle", "start", "close" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden", this.toggle);

    this.parent = this.options.parent;

  },

  clear: function() {

    this.model.clear();

  },

  isDefined: function() {

    if (this.model.get("top") && this.model.get("left") && this.model.get("height") && this.model.get("width")) return true;
    else return false;

  },

  create: function(dimensions) {

    if (this.parent.$el.find("." + this.className).length <= 0) {
      this.parent.$el.append(this.render());
    }

    this.setDimensions(dimensions);
  },

  start: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent)
      this.parent.addMagnifier();

  },

  close: function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();

    if (this.parent) {

      this.parent.launcher.disable();
      this.parent.startTranscribing();
      this.parent.enableMouseWheel();

    }

    this.hide();


  },

  render: function() {

    this.$el.append(this.template.render());

    this.$closeButton = this.$el.find(".close");

    return this.$el;

  }

});


// Helper ---------------------------------------

nfn.ui.model.BugsHelper = Backbone.Model.extend({
});

nfn.ui.view.BugsHelper = nfn.ui.view.Widget.extend({
  className: 'helper bar',

  events: {
    "click .example"      : "showExample"
  },

  initialize: function() {
    _.bindAll( this, "toggle", "updateTitle", "updateDescription", "showExample", "closeTooltip", "nextPhoto" );

    this.template = new nfn.core.Template({
      template: this.options.template,
      type: 'mustache'
    });

    this.add_related_model(this.model);

    this.model.bind("change:hidden",      this.toggle);
    this.model.bind("change:title",       this.updateTitle);
    this.model.bind("change:description", this.updateDescription);

    this.parent = this.options.parent;
  },

  updateTitle: function() {
    var that = this;

    this.$title.fadeOut(200, function() {
      that.$title.text(that.model.get("title"));
      that.$title.fadeIn(200);
    });
  },

  updateDescription: function() {
    var that = this;

    this.$description.fadeOut(200, function() {
      that.$description.html(that.model.get("description"));
      that.$description.fadeIn(200);
      that.$exampleLink = that.$description.find(".example");
    });
  },

  showExample: function(e) {
    e && e.preventDefault();
    e && e.stopImmediatePropagation();

    if (!this.tooltip) this.createTooltip(e);
  },

  createTooltip: function(e) {
    var
    that = this,
    main = "Close",
    url  = this.$el.find(".example").attr("data-src");

    if (url) {
      this.tooltip = new nfn.ui.view.Tooltip({
        className: "tooltip with-spinner",
        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: [url],
          template: $("#tooltip-example-template").html()
        })
      });
    } else if (this.model.get("urls")) {
      this.tooltip = new nfn.ui.view.Tooltip({
        className: "tooltip with-spinner",
        model: new nfn.ui.model.Tooltip({
          main: main,
          urls: that.model.get("urls"),
          template: $("#tooltip-example-template").html()
        })
      });
    }

    this.addView(this.tooltip);

    this.tooltip.bind("onMainClick", this.nextPhoto);
    this.tooltip.bind("onEscKey", this.closeTooltip);

    this.$el.append(this.tooltip.render());

    this.tooltip.show();

    var
    linkWidth   = $(e.target).width()/2,
    x           = Math.abs(this.$el.offset().left - this.$exampleLink.offset().left) - this.tooltip.width() / 2 + linkWidth - 10,
    y           = Math.abs(this.$el.offset().top  - this.$exampleLink.offset().top) - this.tooltip.height() - 30;

    this.tooltip.setPosition(x, y);

    GOD.add(this.tooltip, this.closeTooltip);

    // Loads the Closer
    closer = new nfn.ui.view.Closer({
      model: new nfn.ui.model.Closer(),
      template: $("#closer-template").html(),
      onClose: function () {
        that.closeTooltip();
      }
    });
    this.addView(closer);

    // Add the close button
    var closerX = this.tooltip.left() + this.tooltip.width() + 12
      , closerY = this.tooltip.top();
    closer.$el.css({left: closerX, top: closerY});
    this.$el.append(closer.render());
    closer.show();
  },

  nextPhoto: function(callback) {
    this.tooltip.nextPhoto();
  },

  closeTooltip: function(callback) {
    if (!this.tooltip) return;

    this.tooltip.hide();
    this.tooltip.clean();
    delete this.tooltip;

    callback && callback();
  },

  render: function() {
    this.$el.append(this.template.render());

    this.$title       = this.$el.find(".title");
    this.$description = this.$el.find(".description");
    this.$exampleLink = this.$el.find(".example");

    return this.$el;
  }
});

