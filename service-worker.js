if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const r=e=>c(e,l),a={module:{uri:l},exports:o,require:r};s[l]=Promise.all(i.map((e=>a[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mew-ccswap"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mew-ccswap/css/app.f75f14c3.css",revision:null},{url:"/mew-ccswap/css/chunk-vendors.842d62f8.css",revision:null},{url:"/mew-ccswap/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/mew-ccswap/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/mew-ccswap/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/mew-ccswap/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/mew-ccswap/img/bg-bar-old.a1ec2988.svg",revision:null},{url:"/mew-ccswap/img/icon-apple-pay.8729e08b.svg",revision:null},{url:"/mew-ccswap/img/icon-master.e13b09eb.svg",revision:null},{url:"/mew-ccswap/img/icon-mew-logo-dark.49ceaae5.svg",revision:null},{url:"/mew-ccswap/img/icon-mew-logo-light.b7102cfa.svg",revision:null},{url:"/mew-ccswap/img/icon-mew-wallet.5236daa6.png",revision:null},{url:"/mew-ccswap/img/icon-simplex.36f689db.svg",revision:null},{url:"/mew-ccswap/img/icon-visa.a210c6d6.svg",revision:null},{url:"/mew-ccswap/index.html",revision:"2aeabb3c5a227a67e5879cae9a1020df"},{url:"/mew-ccswap/js/app.6b448c6e.js",revision:null},{url:"/mew-ccswap/js/chunk-vendors.924150b9.js",revision:null},{url:"/mew-ccswap/js/webfontloader.4b79c624.js",revision:null},{url:"/mew-ccswap/manifest.json",revision:"7c751befb47bc5c62ec67788a6fbb7cc"},{url:"/mew-ccswap/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
