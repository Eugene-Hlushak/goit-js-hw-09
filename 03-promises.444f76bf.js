var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var o=i("iQIUW");const r=document.querySelector(".form");r.addEventListener("submit",(function(e){e.preventDefault();let n=Number(l[0].value);const t=Number(l[1].value),i=Number(l[2].value);for(let e=1;e<=i;e+=1)s(e,n).then(d).catch(f),n+=t}));const l=[];[...r.children].forEach((e=>{e.firstElementChild&&l.push(e.firstElementChild)}));let u=null;function s(e,n){return new Promise(((t,i)=>{u=setInterval((()=>{Math.random()>.3?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function d(e){o.Notify.success(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)}function f(e){o.Notify.failure(`❌ Rejected promise ${e.position} in ${e.delay}ms`)}
//# sourceMappingURL=03-promises.444f76bf.js.map
