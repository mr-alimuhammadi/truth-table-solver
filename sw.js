if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>s(e,o),t={module:{uri:o},exports:c,require:f};i[o]=Promise.all(n.map((e=>t[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BzVr0mNo.css",revision:null},{url:"assets/index-CTC9XEB0.js",revision:null},{url:"assets/qmc-solve-worker-DIN-jF5-.js",revision:null},{url:"favicon-192x192.png",revision:"1072f47691af585e4c3951bd76318b8e"},{url:"favicon-512x512.png",revision:"bca95b5de55d5eb3ff0b20b2cd78fe15"},{url:"index.html",revision:"5de6341343dfd9024af6040d4f5d872c"},{url:"manifest.webmanifest",revision:"86ac1bf41dcbc8b3e2a96768d2e49937"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-192x192.png",revision:"1072f47691af585e4c3951bd76318b8e"},{url:"favicon-512x512.png",revision:"bca95b5de55d5eb3ff0b20b2cd78fe15"},{url:"manifest.webmanifest",revision:"86ac1bf41dcbc8b3e2a96768d2e49937"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
