(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return i.p+"js/"+({crew:"crew",destination:"destination",technology:"technology"}[e]||e)+"."+{crew:"41ff78ae",destination:"783e6e1d",technology:"8e12b266"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={crew:1,destination:1,technology:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({crew:"crew",destination:"destination",technology:"technology"}[e]||e)+"."+{crew:"59b90a6c",destination:"4358715f",technology:"61ac10e6"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"013c":function(e,t,n){},5337:function(e,t,n){"use strict";n("6008")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t){const n=Object(a["F"])("router-view");return Object(a["x"])(),Object(a["f"])(n)}var r=n("6b0d"),c=n.n(r);const s={},i=c()(s,[["render",o]]);var l=i,u=n("6605");const d=e=>(Object(a["A"])("data-v-3e65dc5a"),e=e(),Object(a["y"])(),e),b={id:"main",class:"home page-container"},p=d(()=>Object(a["i"])("div",{class:"home__first-container"},[Object(a["i"])("h1",{class:"home__heading"},[Object(a["i"])("span",{class:"home__heading-intro text-accent ff-sans-cond uppercase"},"So, you want to travel to"),Object(a["i"])("span",{class:"home__heading-text"},"space")]),Object(a["i"])("p",{class:"home__text text-accent"}," Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience! ")],-1)),h=d(()=>Object(a["i"])("div",{class:"home__second-container"},[Object(a["i"])("a",{href:"#",class:"home__explore-button ff-serif text-dark bg-light uppercase"},[Object(a["i"])("span",null,"Explore")])],-1));function f(e,t,n,o,r,c){const s=Object(a["F"])("Layout");return Object(a["x"])(),Object(a["f"])(s,null,{default:Object(a["M"])(()=>[Object(a["i"])("main",b,[Object(a["j"])(a["b"],{name:"text-to-bottom",appear:""},{default:Object(a["M"])(()=>[p]),_:1}),Object(a["j"])(a["b"],{name:"scale-up",appear:""},{default:Object(a["M"])(()=>[h]),_:1})])]),_:1})}var m=n("ebad"),j={name:"Home",components:{Layout:m["a"]},setup(){return Object(a["v"])(()=>{document.body.className="home-page"}),{}}};n("6e19");const g=c()(j,[["render",f],["__scopeId","data-v-3e65dc5a"]]);var v=g;const O=[{path:"/",name:"Home",component:v},{path:"/crew",name:"Crew",component:()=>n.e("crew").then(n.bind(null,"26c6"))},{path:"/destination",name:"Destination",component:()=>n.e("destination").then(n.bind(null,"9fdb"))},{path:"/technology",name:"Technology",component:()=>n.e("technology").then(n.bind(null,"4344"))}],y=Object(u["a"])({history:Object(u["b"])(),routes:O});var _=y,w=n("5502");const x=Object(w["a"])({strict:!0,state:{jsonData:null},mutations:{setJsonData(e,t){e.jsonData=t}},actions:{async fetchJsonData({commit:e}){try{const t=await fetch("/json/data.json"),n=await t.json();e("setJsonData",n)}catch(t){console.error("Error fetching JSON data:",t)}}}});var E=x;n("c860");Object(a["e"])(l).use(_).use(E).mount("#app")},6008:function(e,t,n){},6917:function(e,t,n){e.exports=n.p+"img/logo.4b599304.svg"},"6e19":function(e,t,n){"use strict";n("013c")},c860:function(e,t,n){},ebad:function(e,t,n){"use strict";var a=n("7a23");function o(e,t,n,o,r,c){const s=Object(a["F"])("Header");return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])(s),Object(a["E"])(e.$slots,"default")])}var r=n("6917"),c=n.n(r);const s=e=>(Object(a["A"])("data-v-71a053f9"),e=e(),Object(a["y"])(),e),i={class:"header"},l=s(()=>Object(a["i"])("div",{class:"header__logo"},[Object(a["i"])("img",{src:c.a,alt:"Space Tourism logo",class:"header__logo-img"})],-1)),u=["aria-expanded"],d={class:"number","aria-hidden":"true"},b={class:"text"};function p(e,t,n,o,r,c){const s=Object(a["F"])("router-link");return Object(a["x"])(),Object(a["f"])(a["b"],{name:"nav-load",appear:""},{default:Object(a["M"])(()=>[Object(a["i"])("header",i,[l,Object(a["i"])("button",{class:"header__hamburger","aria-controls":"header__nav-ul",onClick:t[0]||(t[0]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))},[Object(a["i"])("span",{class:"sr-only","aria-expanded":o.ariaExpanded},"Menu",8,u)]),Object(a["i"])("nav",{class:Object(a["q"])(["header__nav",{"header--visible":o.navVisible}])},[Object(a["j"])(a["c"],{class:"header__nav-ul",tag:"ul",name:"nav-li-load",appear:""},{default:Object(a["M"])(()=>[(Object(a["x"])(!0),Object(a["h"])(a["a"],null,Object(a["D"])(o.navItems,e=>(Object(a["x"])(),Object(a["h"])("li",{key:e.path,class:Object(a["q"])({active:o.isActive(e.path)})},[Object(a["j"])(s,{to:e.path,class:"text-light ff-sans-cond letter-spacing-02 uppercase"},{default:Object(a["M"])(()=>[Object(a["i"])("span",d,Object(a["I"])(e.number),1),Object(a["i"])("span",b,Object(a["I"])(e.label),1)]),_:2},1032,["to"])],2))),128))]),_:1})],2)])]),_:1})}var h=n("6605"),f={name:"Header",setup(){const e=Object(a["C"])(!1),t=Object(h["c"])(),n=[{path:"/",number:"00",label:"Home"},{path:"/destination",number:"01",label:"Destination"},{path:"/crew",number:"02",label:"Crew"},{path:"/technology",number:"03",label:"Technology"}],o=e=>t.path===e,r=()=>{e.value=!e.value};Object(a["v"])(()=>{setTimeout(()=>{const e=document.getElementsByTagName("ul")[0];e.classList.add("show-loaded")},1e3)});const c=Object(a["d"])(()=>String(e.value));return{ariaExpanded:c,navVisible:e,toggleNavVisibility:r,navItems:n,isActive:o}}},m=(n("5337"),n("6b0d")),j=n.n(m);const g=j()(f,[["render",p],["__scopeId","data-v-71a053f9"]]);var v=g,O={components:{Header:v}};const y=j()(O,[["render",o]]);t["a"]=y}});
//# sourceMappingURL=app.c1c8f09c.js.map