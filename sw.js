var serviceWorkerOption = {
  "assets": [
    "/css/0.css",
    "/js/main.2a2a7aa1784a4a02cad1.js",
    "/js/runtime.2a2a7aa1784a4a02cad1.js",
    "/js/vendor.2a2a7aa1784a4a02cad1.js",
    "/manifest.webmanifest",
    "/data.json",
    "/browserconfig.xml",
    "/public/10.5__iPad_Air_portrait.png",
    "/public/10.5__iPad_Air_landscape.png",
    "/public/10.2__iPad_portrait.png",
    "/public/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
    "/public/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
    "/public/12.9__iPad_Pro_portrait.png",
    "/public/12.9__iPad_Pro_landscape.png",
    "/public/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
    "/public/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
    "/public/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
    "/public/10.2__iPad_landscape.png",
    "/public/favicon-16x16.png",
    "/public/android-chrome-192x192.png",
    "/public/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
    "/public/favicon.ico",
    "/public/apple-touch-icon.png",
    "/public/icon.png",
    "/public/favicon-32x32.png",
    "/public/android-chrome-512x512.png",
    "/public/img/page13.jpg",
    "/public/iPhone_11__iPhone_XR_landscape.png",
    "/public/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
    "/public/iPhone_11__iPhone_XR_portrait.png",
    "/public/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
    "/public/iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
    "/public/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
    "/public/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
    "/public/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
    "/public/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
    "/public/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
    "/public/mstile-150x150.png",
    "/public/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
    "/public/iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
    "/public/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
    "/public/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
    "/public/img/page12.jpg",
    "/public/safari-pinned-tab.svg",
    "/public/img/page10.jpg",
    "/public/img/page1.jpg",
    "/public/img/page0.jpg",
    "/public/img/page2.jpg",
    "/public/img/page11.jpg",
    "/public/img/page3.jpg",
    "/public/img/page6.jpg",
    "/public/img/page5.jpg",
    "/public/img/page9.jpg",
    "/public/img/page4.jpg",
    "/public/img/page7.jpg",
    "/public/img/page8.jpg"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="JJ5d")}({JJ5d:function(e,t){var n="".concat("_VBMENU_").concat("20.0.9"),r=serviceWorkerOption?serviceWorkerOption.assets:[],c=function(e){return console.log("[SW]: ".concat(e))};self.addEventListener("fetch",(function(e){c("Fetch request : ".concat(e.request.url)),e.respondWith(caches.match(e.request).then((function(t){return t?(c("Responding with cache : ".concat(e.request.url)),t):(c("File is not cached, fetching : ".concat(e.request.url)),fetch(e.request))})))})),self.addEventListener("install",(function(e){e.waitUntil(caches.open(n).then((function(e){return c("Installing cache : ".concat(n)),e.addAll(r)})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){var t=e.filter((function(e){return e.indexOf("_VBMENU_")}));return t.push(n),Promise.all(e.map((function(n,r){if(-1===t.indexOf(n))return c("Deleting cache : ".concat(e[r])),caches.delete(e[r])})))})))}))}});