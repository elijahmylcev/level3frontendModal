(()=>{"use strict";var t={994:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(933),r=o.n(n),a=o(476),i=o.n(a)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),i.push([t.id,"body,button{font-family:'Raleway', sans-serif}body{padding:15px}.trigger,.triggerTest,.triggerCreateModal{display:block;margin:40px auto 0 auto;padding:10px 15px;font-size:18px;border:none;border-radius:3px;color:#fff;transition:all 0.3s ease;font-weight:500;cursor:pointer;background-color:rgba(255,219,13,0.836)}.trigger:hover,.triggerTest:hover,.triggerCreateModal:hover{background-color:#fff;color:rgba(255,219,13,0.836);box-shadow:0 0px 20px rgba(255,219,13,0.836)}.modal{display:none;position:fixed;left:0;top:0;width:100%;height:100%;z-index:1050;overflow:hidden;background-color:rgba(0,0,0,0.5)}.modal__dialog{max-width:500px;margin:80px auto 0 auto;box-shadow:0 0 30px #000}.modal__content{position:relative;width:100%;background-color:#fff;border:1px rgba(0,0,0,0.2);max-height:80vh;overflow-y:auto}.modal__content .close{position:absolute;top:5px;right:10px;background-color:transparent;border:none;font-size:30px;cursor:pointer}.modal__content_header{padding:15px;border-bottom:1px solid #dee2e6}.modal__content_header_title{font-weight:700;font-size:22px}.modal__content_body{padding:15px;border-bottom:1px solid #dee2e6}.modal__content_footer{padding:15px}.modal__content_footer_btn{margin-right:10px;padding:5px 10px;font-size:18px;border:1px solid rgba(0,0,0,0.2);border-radius:3px;color:#fff;transition:all 0.3s ease;font-weight:500;cursor:pointer}.modal__content_footer_btn.exit{background-color:rgba(255,0,0,0.836)}.modal__content_footer_btn.exit:hover{background-color:#fff;color:rgba(255,0,0,0.836);box-shadow:0 0px 20px rgba(255,0,0,0.836)}.modal__content_footer_btn.success{background-color:rgba(0,128,0,0.822)}.modal__content_footer_btn.success:hover{background-color:#fff;color:rgba(0,128,0,0.822);box-shadow:0 0px 20px rgba(0,128,0,0.836)}.fadeIn{animation-name:fadeIn;animation-duration:0.5s;animation-timing-function:ease}@keyframes fadeIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.1)}80%{transform:scale(0.9);opacity:1}100%{transform:scale(1);opacity:1}}.fadeOut{animation-name:fadeOut;animation-duration:0.5s;animation-timing-function:ease-in-out}@keyframes fadeOut{0%{transform:scale(1);opacity:1}60%{transform:scale(0.9);opacity:1}80%{transform:scale(1.1)}100%{transform:scale(0);opacity:0}}\n",""]);const c=i},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var a={},i=[],c=0;c<t.length;c++){var l=t[c],s=n.base?l[0]+n.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var f=o(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=r(p,n);n.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(t,e){var o=e.domAPI(e);o.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var a=n(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=o(a[i]);e[c].references--}for(var l=n(t,r),s=0;s<a.length;s++){var d=o(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},311:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(892),e=o.n(t),n=o(760),r=o.n(n),a=o(311),i=o.n(a),c=o(192),l=o.n(c),s=o(60),d=o.n(s),u=o(865),f=o.n(u),p=o(994),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d();e()(p.Z,m);p.Z&&p.Z.locals&&p.Z.locals;function h(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y=function(){function t(e,o,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.triggers=document.querySelectorAll(e),this.modal=document.querySelector(o),this.closeButtons=document.querySelectorAll(n),this.scroll=this.calcScroll()}var e,o,n;return e=t,(o=[{key:"init",value:function(){var t=this;this.open();try{this.modal.addEventListener("click",(function(e){e.target!==t.modal?e.target.getAttribute("data-close")&&t.close():t.close()}))}catch(t){console.log(t)}}},{key:"open",value:function(){var t=this;this.triggers.forEach((function(e){e.addEventListener("click",(function(){t.modal.firstElementChild.classList.add("fadeIn"),t.modal.style.display="block",document.body.style.overflow="hidden",document.body.scrollHeight>=window.innerHeight&&(document.body.style.marginRight="".concat(t.scroll,"px")),setTimeout((function(){t.modal.firstElementChild.classList.remove("fadeIn")}),550)}))}))}},{key:"close",value:function(){var t=this;this.modal.firstElementChild.classList.add("fadeOut"),setTimeout((function(){t.modal.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px",t.modal.firstElementChild.classList.remove("fadeOut")}),500)}},{key:"calcScroll",value:function(){var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}}])&&h(e.prototype,o),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=w(t);if(e){var r=w(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return x(this,o)}}function x(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&g(t,e)}(a,t);var e,o,n,r=_(a);function a(t,e,o,n,i){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(c=r.call(this,t,e,o)).triggerSelectorsOpen=t,c.modalSelector=e,c.selectorsClose=o,c.layout=n,c.text=i,c}return e=a,(o=[{key:"createWithConfig",value:function(){try{var t=document.createElement("div");t.classList.add("modal"),t.setAttribute("id",this.modalSelector.slice(1));var e='\n      <div class="modal__dialog">\n        <div class="modal__content">\n          <button class="close" data-close="true"><span data-close="true">&times;</span></button>\n\n          <div class="modal__content_header">\n            <div class="modal__content_header_title">'.concat(this.text.header,'</div>\n          </div>\n          <div class="modal__content_body">\n            ').concat(this.text.body,'\n          </div>\n          <div class="modal__content_footer">\n            <button class="modal__content_footer_btn exit" data-close="true">Exit</button>\n            <button class="modal__content_footer_btn success">Ok</button>\n          </div>\n        </div>\n      </div>\n    ');this.layout?t.innerHTML='\n        <div class="modal__dialog">\n          <div class="modal__content">\n            <button class="close" data-close="true"><span data-close="true">&times;</span></button>\n            '.concat(this.layout,"\n          </div>\n        </div>"):t.innerHTML=e,document.body.appendChild(t),this.modal=document.querySelector(this.modalSelector),this.triggers=document.querySelectorAll(this.triggerSelectorsOpen),this.init()}catch(t){console.error(t,code)}}}])&&v(e.prototype,o),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);new y(".trigger","#exampleModal","[data-close]").init(),new O(".triggerTest","#exampleModalSecond","[data-close]","",{header:"Hello",body:"world"}).createWithConfig(),new O(".triggerCreateModal","#exampleModalThird","[data-close]",'\n  <div class="title">Hello i\'m Modal</div>\n  <div class="body">\n    <ul>\n      <li>Created with</li>\n      <li>Config</li>\n      <li>Layout</li>\n    </ul>\n  </div>\n\n  <button class="exit" data-close="true">Close</button>\n',{}).createWithConfig()})()})();