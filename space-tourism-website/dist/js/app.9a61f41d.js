(function(e){function t(t){for(var a,o,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({crew:"crew",destination:"destination",technology:"technology"}[e]||e)+"."+{crew:"aaa70419",destination:"92ab070a",technology:"27752a6b"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={crew:1,destination:1,technology:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({crew:"crew",destination:"destination",technology:"technology"}[e]||e)+"."+{crew:"d043ee51",destination:"d8d38c9f",technology:"752abfba"}[e]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5163:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t){const n=Object(a["F"])("router-view");return Object(a["x"])(),Object(a["f"])(n)}var r=n("6b0d"),c=n.n(r);const i={},s=c()(i,[["render",o]]);var l=s,u=n("6605");const d=e=>(Object(a["A"])("data-v-9d02711c"),e=e(),Object(a["y"])(),e),b={id:"main",class:"home page-container"},p=d(()=>Object(a["i"])("div",{class:"home__first-container"},[Object(a["i"])("h1",{class:"home__heading"},[Object(a["i"])("span",{class:"home__heading-intro text-accent ff-sans-cond uppercase"},"So, you want to travel to"),Object(a["i"])("span",{class:"home__heading-text"},"space")]),Object(a["i"])("p",{class:"home__text text-accent"}," Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience! ")],-1)),h={class:"home__second-container"},f=d(()=>Object(a["i"])("span",null,"Explore",-1));function j(e,t,n,o,r,c){const i=Object(a["F"])("router-link"),s=Object(a["F"])("Layout");return Object(a["x"])(),Object(a["f"])(s,null,{default:Object(a["M"])(()=>[Object(a["i"])("main",b,[Object(a["j"])(a["b"],{name:"text-to-bottom",appear:""},{default:Object(a["M"])(()=>[p]),_:1}),Object(a["j"])(a["b"],{name:"scale-up",appear:""},{default:Object(a["M"])(()=>[Object(a["i"])("div",h,[Object(a["j"])(i,{to:"/destination",class:"home__explore-button ff-serif text-dark bg-light uppercase"},{default:Object(a["M"])(()=>[f]),_:1})])]),_:1})])]),_:1})}var m=n("ebad"),g={name:"Home",components:{Layout:m["a"]},setup(){return Object(a["v"])(()=>{document.body.className="home-page"}),{}}};n("c664");const O=c()(g,[["render",j],["__scopeId","data-v-9d02711c"]]);var v=O;const y=[{path:"/",name:"Home",component:v},{path:"/crew",name:"Crew",component:()=>n.e("crew").then(n.bind(null,"26c6"))},{path:"/destination",name:"Destination",component:()=>n.e("destination").then(n.bind(null,"9fdb"))},{path:"/technology",name:"Technology",component:()=>n.e("technology").then(n.bind(null,"4344"))}],_=Object(u["a"])({history:Object(u["b"])(),routes:y});var w=_,x=n("5502");const k=Object(x["a"])({strict:!0,state:{jsonData:null},mutations:{setJsonData(e,t){e.jsonData=t}},actions:{async fetchJsonData({commit:e}){try{const t=await fetch("/json/data.json"),n=await t.json();e("setJsonData",n)}catch(t){console.error("Error fetching JSON data:",t)}}}});var E=k;n("c860");Object(a["e"])(l).use(w).use(E).mount("#app")},6917:function(e,t,n){e.exports=n.p+"img/logo.4b599304.svg"},"92ee":function(e,t,n){"use strict";n("b2b7")},b2b7:function(e,t,n){},c664:function(e,t,n){"use strict";n("5163")},c860:function(e,t,n){},ebad:function(e,t,n){"use strict";var a=n("7a23");function o(e,t,n,o,r,c){const i=Object(a["F"])("Header");return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])(i),Object(a["E"])(e.$slots,"default")])}var r=n("6917"),c=n.n(r);const i=e=>(Object(a["A"])("data-v-bfbf5abe"),e=e(),Object(a["y"])(),e),s={class:"header"},l={class:"header__logo"},u=i(()=>Object(a["i"])("img",{src:c.a,alt:"Space Tourism logo",class:"header__logo-img"},null,-1)),d=["aria-expanded"],b=i(()=>Object(a["i"])("span",{class:"sr-only"},"Menu",-1)),p=[b],h={class:"number","aria-hidden":"true"},f={class:"text"};function j(e,t,n,o,r,c){const i=Object(a["F"])("router-link");return Object(a["x"])(),Object(a["f"])(a["b"],{name:"nav-load",appear:""},{default:Object(a["M"])(()=>[Object(a["i"])("header",s,[Object(a["i"])("div",l,[Object(a["j"])(i,{to:"/"},{default:Object(a["M"])(()=>[u]),_:1})]),Object(a["i"])("button",{class:"header__hamburger","aria-controls":"header__nav","aria-label":"Toggle Menu","aria-expanded":o.ariaExpanded,onClick:t[0]||(t[0]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))},p,8,d),Object(a["i"])("nav",{id:"header__nav",class:Object(a["q"])(["header__nav",{"header--visible":o.navVisible}])},[Object(a["j"])(a["c"],{class:"header__nav-ul",tag:"ul",name:"nav-li-load",appear:""},{default:Object(a["M"])(()=>[(Object(a["x"])(!0),Object(a["h"])(a["a"],null,Object(a["D"])(o.navItems,e=>(Object(a["x"])(),Object(a["h"])("li",{key:e.path,class:Object(a["q"])({active:o.isActive(e.path)})},[Object(a["j"])(i,{to:e.path,class:"text-light ff-sans-cond letter-spacing-02 uppercase"},{default:Object(a["M"])(()=>[Object(a["i"])("span",h,Object(a["I"])(e.number),1),Object(a["i"])("span",f,Object(a["I"])(e.label),1)]),_:2},1032,["to"])],2))),128))]),_:1})],2)])]),_:1})}var m=n("6605"),g={name:"Header",setup(){const e=Object(a["C"])(!1),t=Object(m["c"])(),n=[{path:"/",number:"00",label:"Home"},{path:"/destination",number:"01",label:"Destination"},{path:"/crew",number:"02",label:"Crew"},{path:"/technology",number:"03",label:"Technology"}],o=e=>t.path===e,r=()=>{e.value=!e.value};Object(a["v"])(()=>{setTimeout(()=>{const e=document.getElementsByTagName("ul")[0];e.classList.add("show-loaded")},1e3)});const c=Object(a["d"])(()=>String(e.value));return{ariaExpanded:c,navVisible:e,toggleNavVisibility:r,navItems:n,isActive:o}}},O=(n("92ee"),n("6b0d")),v=n.n(O);const y=v()(g,[["render",j],["__scopeId","data-v-bfbf5abe"]]);var _=y,w={components:{Header:_}};const x=v()(w,[["render",o]]);t["a"]=x}});
//# sourceMappingURL=app.9a61f41d.js.map