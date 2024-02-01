(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,":root {\n    --background: #eff2ee;\n    --accent: rgb(120, 101, 167);\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: var(--background);\n}\n\nheader {\n    width: 900px;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid var(--accent);\n    border-top: none;\n    border-bottom: none;\n}\n\nnav {\n    display: flex;\n}\n\nnav button {\n    padding: 0px 12px;\n    font-size: 1.5rem;\n    border: none;\n    margin: 0;\n    border-right: 1px solid rgb(49, 49, 49);\n}\n\nnav :last-child {\n    border: none;\n}\n\nnav button:hover {\n    background-color: var(--accent);\n    color: white;\n    cursor: help;\n}\n\n#content {\n    border: 1px solid var(--accent);\n    border-top: none;\n    display: flex;\n    flex-direction: column;\n    width: 900px;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n}\n\nh1 {\n    font-size: 6rem;\n    margin-bottom: 1rem;\n    padding: 12px;\n}\n\n\n#content p {\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n    padding: 1rem;\n}\n\n.menu-wrapper {\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n}\n\n.menu-wrapper>div {\n    border: 1px solid var(--accent);\n    background-color: #fff8;\n    padding: 1rem;\n    height: 200px;\n}\n\n.menu-wrapper {\n    text-transform: uppercase;\n}",""]);const u=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],u=0;u<e.length;u++){var s=e[u],c=r.base?s[0]+r.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=u,n.splice(u,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var u=t(i[a]);n[u].references--}for(var s=r(e,o),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(){const e=document.querySelector("#content"),n=document.createElement("img");n.setAttribute("src","https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),n.setAttribute("width","100%"),n.setAttribute("alt","a dish with fresh vegetables");const t=document.createElement("h1");t.textContent="The Restaurant";const r=document.createElement("p");r.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde deleniti reprehenderit a similique qui iste reiciendis quis voluptatem velit! Inventore illo rerum libero debitis alias assumenda omnis et corrupti veritatis.",e.append(t,r,n)}var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),u=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),m=t.n(p),f=t(426),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=u().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,e(),function(){const n=document.querySelector("#home-btn"),t=document.querySelector("#menu-btn"),r=document.querySelector("#about-btn"),o=document.querySelector("#content");n.addEventListener("click",(()=>{o.textContent="",e()})),t.addEventListener("click",(()=>{o.textContent="",function(){const e=document.querySelector("#content"),n=document.createElement("h1");n.textContent="Menu";let t=document.createElement("div");t.classList.add("menu-wrapper"),e.append(n,t);for(let e=0;e<10;e++){let n=document.createElement("div"),r=document.createElement("h2");r.textContent=`Menu Item #${e+1}`;let o=document.createElement("p");o.textContent="🥗",n.append(r,o),t.appendChild(n)}}()})),r.addEventListener("click",(()=>{o.textContent="",function(){const e=document.querySelector("#content"),n=document.createElement("h1");n.textContent="About Us";const t=document.createElement("p");t.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eius accusamus quidem tempora laboriosam velit, vel inventore ipsam ducimus incidunt numquam saepe officiis id tenetur excepturi, quae, nobis dolore quaerat!\n    Culpa hic, soluta esse dignissimos sunt maxime, at quam iusto temporibus, laborum non alias incidunt quo atque totam impedit nam. Molestiae unde ratione dolorum laudantium amet, quo tenetur pariatur deleniti!\n    Veniam velit nisi deserunt dignissimos facilis. Similique quos qui fugiat, magni cum repellendus illum, asperiores explicabo voluptate expedita hic consequuntur repellat natus necessitatibus corrupti eum iure, mollitia ea nobis numquam?\n    Labore dolorum laboriosam repellendus minus atque dignissimos quasi fugiat non, quod esse tenetur nesciunt ipsam! Ea qui, iste quas facilis aspernatur maiores est eum quisquam enim quidem quae explicabo earum.\n    Modi, quasi quidem, ullam explicabo doloribus ipsa iste aperiam perspiciatis perferendis sed inventore quam eligendi hic, veritatis consequuntur voluptatem quia minus? Aspernatur tempora pariatur iste ea ratione, minus ipsam voluptatibus?",e.append(n,t)}()}))}()})()})();