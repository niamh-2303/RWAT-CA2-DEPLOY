var Hu=Object.defineProperty;var go=r=>{throw TypeError(r)};var Gu=(r,t,e)=>t in r?Hu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>Gu(r,typeof t!="symbol"?t+"":t,e),Ku=(r,t,e)=>t.has(r)||go("Cannot "+e);var _o=(r,t,e)=>t.has(r)?go("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e);var an=(r,t,e)=>(Ku(r,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Wu=()=>{};var yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Qu=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],l=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,l=a?r[s+1]:0,h=s+2<r.length,f=h?r[s+2]:0,g=o>>2,I=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,P=f&63;h||(P=64,a||(w=64)),n.push(e[g],e[I],e[w],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ca(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Qu(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const I=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||l==null||f==null||I==null)throw new Xu;const w=o<<2|l>>4;if(n.push(w),f!==64){const P=l<<4&240|f>>2;if(n.push(P),I!==64){const k=f<<6&192|I;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yu=function(r){const t=Ca(r);return Pa.encodeByteArray(t,!0)},sr=function(r){return Yu(r).replace(/\./g,"")},Ju=function(r){try{return Pa.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=()=>Zu().__FIREBASE_DEFAULTS__,el=()=>{if(typeof process>"u"||typeof yo>"u")return;const r=yo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},nl=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Ju(r[1]);return t&&JSON.parse(t)},Ls=()=>{try{return Wu()||tl()||el()||nl()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},rl=r=>{var t,e;return(e=(t=Ls())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},sl=r=>{const t=rl(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},ba=()=>{var r;return(r=Ls())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ol(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),""].join(".")}const hn={};function cl(){const r={prod:[],emulator:[]};for(const t of Object.keys(hn))hn[t]?r.emulator.push(t):r.prod.push(t);return r}function ul(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Eo=!1;function ll(r,t){if(typeof window>"u"||typeof document>"u"||!Fs(window.location.host)||hn[r]===t||hn[r]||Eo)return;hn[r]=t;function e(w){return`__firebase__banner__${w}`}const n="__firebase__banner",o=cl().prod.length>0;function a(){const w=document.getElementById(n);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Eo=!0,a()},w}function g(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function I(){const w=ul(n),P=e("text"),k=document.getElementById(P)||document.createElement("span"),x=e("learnmore"),V=document.getElementById(x)||document.createElement("a"),G=e("preprendIcon"),z=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const K=w.element;l(K),g(V,x);const ct=f();h(z,G),K.append(z,k,V,ct),document.body.appendChild(K)}o?(k.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dl(){var t;const r=(t=Ls())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fl(){return!dl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function pl(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="FirebaseError";class Ue extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=gl,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?_l(o,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ue(s,l,n)}}function _l(r,t){return r.replace(yl,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const yl=/\{\$([^}]+)}/g;function ir(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(To(o)&&To(a)){if(!ir(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function To(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(r){return r&&r._delegate?r._delegate:r}class _n{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new il;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Il(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&t(o,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Tl(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tl(r){return r===fe?void 0:r}function Il(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new El(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const Al={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},wl=$.INFO,Rl={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Sl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Rl[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=wl,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Al[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Cl=(r,t)=>t.some(e=>r instanceof e);let Io,vo;function Pl(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bl(){return vo||(vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Na=new WeakMap,ms=new WeakMap,ka=new WeakMap,ss=new WeakMap,Us=new WeakMap;function Vl(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(Qt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Na.set(e,r)}).catch(()=>{}),Us.set(t,r),t}function Dl(r){if(ms.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});ms.set(r,t)}let ps={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return ms.get(r);if(t==="objectStoreNames")return r.objectStoreNames||ka.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Nl(r){ps=r(ps)}function kl(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(is(this),t,...e);return ka.set(n,t.sort?t.sort():[t]),Qt(n)}:bl().includes(r)?function(...t){return r.apply(is(this),t),Qt(Na.get(this))}:function(...t){return Qt(r.apply(is(this),t))}}function xl(r){return typeof r=="function"?kl(r):(r instanceof IDBTransaction&&Dl(r),Cl(r,Pl())?new Proxy(r,ps):r)}function Qt(r){if(r instanceof IDBRequest)return Vl(r);if(ss.has(r))return ss.get(r);const t=xl(r);return t!==r&&(ss.set(r,t),Us.set(t,r)),t}const is=r=>Us.get(r);function Ol(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),l=Qt(a);return n&&a.addEventListener("upgradeneeded",h=>{n(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Ml=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],os=new Map;function Ao(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(os.get(t))return os.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Ll.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Ml.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return n&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return os.set(t,o),o}Nl(r=>({...r,get:(t,e,n)=>Ao(t,e)||r.get(t,e,n),has:(t,e)=>!!Ao(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ul(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Ul(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gs="@firebase/app",wo="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Da("@firebase/app"),Bl="@firebase/app-compat",jl="@firebase/analytics-compat",ql="@firebase/analytics",$l="@firebase/app-check-compat",zl="@firebase/app-check",Hl="@firebase/auth",Gl="@firebase/auth-compat",Kl="@firebase/database",Wl="@firebase/data-connect",Ql="@firebase/database-compat",Xl="@firebase/functions",Yl="@firebase/functions-compat",Jl="@firebase/installations",Zl="@firebase/installations-compat",th="@firebase/messaging",eh="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",uh="@firebase/ai",lh="@firebase/firestore-compat",hh="firebase",dh="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]",fh={[gs]:"fire-core",[Bl]:"fire-core-compat",[ql]:"fire-analytics",[jl]:"fire-analytics-compat",[zl]:"fire-app-check",[$l]:"fire-app-check-compat",[Hl]:"fire-auth",[Gl]:"fire-auth-compat",[Kl]:"fire-rtdb",[Wl]:"fire-data-connect",[Ql]:"fire-rtdb-compat",[Xl]:"fire-fn",[Yl]:"fire-fn-compat",[Jl]:"fire-iid",[Zl]:"fire-iid-compat",[th]:"fire-fcm",[eh]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[lh]:"fire-fst-compat",[uh]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,mh=new Map,ys=new Map;function Ro(r,t){try{r.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function ar(r){const t=r.name;if(ys.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,r);for(const e of or.values())Ro(e,r);for(const e of mh.values())Ro(e,r);return!0}function ph(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function gh(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Va("app","Firebase",_h);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=dh;function xa(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:_s,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=ba()),!e)throw Xt.create("no-options");const o=or.get(s);if(o){if(ir(e,o.options)&&ir(n,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new vl(s);for(const h of ys.values())a.addComponent(h);const l=new yh(e,n,a);return or.set(s,l),l}function Th(r=_s){const t=or.get(r);if(!t&&r===_s&&ba())return xa();if(!t)throw Xt.create("no-app",{appName:r});return t}function Pe(r,t,e){let n=fh[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}ar(new _n(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firebase-heartbeat-database",vh=1,yn="firebase-heartbeat-store";let as=null;function Oa(){return as||(as=Ol(Ih,vh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(yn)}catch(e){console.warn(e)}}}}).catch(r=>{throw Xt.create("idb-open",{originalErrorMessage:r.message})})),as}async function Ah(r){try{const e=(await Oa()).transaction(yn),n=await e.objectStore(yn).get(Ma(r));return await e.done,n}catch(t){if(t instanceof Ue)Ut.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function So(r,t){try{const n=(await Oa()).transaction(yn,"readwrite");await n.objectStore(yn).put(t,Ma(r)),await n.done}catch(e){if(e instanceof Ue)Ut.warn(e.message);else{const n=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}function Ma(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=1024,Rh=30;class Sh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ph(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Co();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Rh){const a=bh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ut.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ch(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function Co(){return new Date().toISOString().substring(0,10)}function Ch(r,t=wh){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Po(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Po(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?pl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ah(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return So(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return So(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Po(r){return sr(JSON.stringify({version:2,heartbeats:r})).length}function bh(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(r){ar(new _n("platform-logger",t=>new Fl(t),"PRIVATE")),ar(new _n("heartbeat",t=>new Sh(t),"PRIVATE")),Pe(gs,wo,r),Pe(gs,wo,"esm2020"),Pe("fire-js","")}Vh("");var Dh="firebase",Nh="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(Dh,Nh,"app");var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,La;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.F=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(T,y,A){for(var p=Array(arguments.length-2),It=2;It<arguments.length;It++)p[It-2]=arguments[It];return m.prototype[y].apply(T,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);const T=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)T[y]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(y=0;y<16;++y)T[y]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],y=E.g[2];let A=E.g[3],p;p=m+(A^_&(y^A))+T[0]+3614090360&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(y^m&(_^y))+T[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(_^A&(m^_))+T[2]+606105819&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(m^y&(A^m))+T[3]+3250441966&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(A^_&(y^A))+T[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(y^m&(_^y))+T[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(_^A&(m^_))+T[6]+2821735955&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(m^y&(A^m))+T[7]+4249261313&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(A^_&(y^A))+T[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(y^m&(_^y))+T[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(_^A&(m^_))+T[10]+4294925233&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(m^y&(A^m))+T[11]+2304563134&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(A^_&(y^A))+T[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(y^m&(_^y))+T[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=y+(_^A&(m^_))+T[14]+2792965006&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(m^y&(A^m))+T[15]+1236535329&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(y^A&(_^y))+T[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(m^_))+T[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(A^m))+T[11]+643717713&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(y^A))+T[0]+3921069994&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(_^y))+T[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(m^_))+T[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(A^m))+T[15]+3634488961&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(y^A))+T[4]+3889429448&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(_^y))+T[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(m^_))+T[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(A^m))+T[3]+4107603335&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(y^A))+T[8]+1163531501&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^A&(_^y))+T[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(m^_))+T[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(A^m))+T[7]+1735328473&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(y^A))+T[12]+2368359562&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(_^y^A)+T[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^y)+T[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^_)+T[11]+1839030562&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^m)+T[14]+4259657740&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^A)+T[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^y)+T[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^_)+T[7]+4139469664&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^m)+T[10]+3200236656&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^A)+T[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^y)+T[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^_)+T[3]+3572445317&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^m)+T[6]+76029189&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^A)+T[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^y)+T[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=y+(A^m^_)+T[15]+530742520&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^m)+T[2]+3299628645&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(y^(_|~A))+T[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~y))+T[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~_))+T[14]+2878612391&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~m))+T[5]+4237533241&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~A))+T[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~y))+T[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~_))+T[10]+4293915773&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~m))+T[1]+2240044497&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~A))+T[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~y))+T[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~_))+T[6]+2734768916&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~m))+T[13]+1309151649&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~A))+T[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~y))+T[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=y+(m^(A|~_))+T[2]+718787259&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,m){m===void 0&&(m=E.length);const _=m-this.blockSize,T=this.C;let y=this.h,A=0;for(;A<m;){if(y==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(T[y++]=E.charCodeAt(A++),y==this.blockSize){s(this,T),y=0;break}}else for(;A<m;)if(T[y++]=E[A++],y==this.blockSize){s(this,T),y=0;break}}this.h=y,this.o+=m},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)E[m++]=this.g[_]>>>T&255;return E};function o(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;const _=[];let T=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;T&&A==m||(_[y]=A,T=!1)}this.g=_}var l={};function h(E){return-128<=E&&E<128?o(E,function(m){return new a([m|0],m<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return V(f(-E));const m=[];let _=1;for(let T=0;E>=_;T++)m[T]=E/_|0,_*=4294967296;return new a(m,0)}function g(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return V(g(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(m,8));let T=I;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const p=parseInt(E.substring(A,A+y),m);y<8?(y=f(Math.pow(m,y)),T=T.j(y).add(f(p))):(T=T.j(_),T=T.add(f(p)))}return T}var I=h(0),w=h(1),P=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-V(this).m();let E=0,m=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);E+=(T>=0?T:4294967296+T)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+V(this).toString(E);const m=f(Math.pow(E,6));var _=this;let T="";for(;;){const y=ct(_,m).g;_=G(_,y.j(m));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,k(_))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=G(this,E),x(E)?-1:k(E)?0:1};function V(E){const m=E.g.length,_=[];for(let T=0;T<m;T++)_[T]=~E.g[T];return new a(_,~E.h).add(w)}r.abs=function(){return x(this)?V(this):this},r.add=function(E){const m=Math.max(this.g.length,E.g.length),_=[];let T=0;for(let y=0;y<=m;y++){let A=T+(this.i(y)&65535)+(E.i(y)&65535),p=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=p>>>16,A&=65535,p&=65535,_[y]=p<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(E,m){return E.add(V(m))}r.j=function(E){if(k(this)||k(E))return I;if(x(this))return x(E)?V(this).j(V(E)):V(V(this).j(E));if(x(E))return V(this.j(V(E)));if(this.l(P)<0&&E.l(P)<0)return f(this.m()*E.m());const m=this.g.length+E.g.length,_=[];for(var T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const A=this.i(T)>>>16,p=this.i(T)&65535,It=E.i(y)>>>16,ae=E.i(y)&65535;_[2*T+2*y]+=p*ae,z(_,2*T+2*y),_[2*T+2*y+1]+=A*ae,z(_,2*T+2*y+1),_[2*T+2*y+1]+=p*It,z(_,2*T+2*y+1),_[2*T+2*y+2]+=A*It,z(_,2*T+2*y+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function z(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function K(E,m){this.g=E,this.h=m}function ct(E,m){if(k(m))throw Error("division by zero");if(k(E))return new K(I,I);if(x(E))return m=ct(V(E),m),new K(V(m.g),V(m.h));if(x(m))return m=ct(E,V(m)),new K(V(m.g),m.h);if(E.g.length>30){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=m;T.l(E)<=0;)_=At(_),T=At(T);var y=st(_,1),A=st(T,1);for(T=st(T,2),_=st(_,2);!k(T);){var p=A.add(T);p.l(E)<=0&&(y=y.add(_),A=p),T=st(T,1),_=st(_,1)}return m=G(E,y.j(m)),new K(y,m)}for(y=I;E.l(m)>=0;){for(_=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=f(_),p=A.j(m);x(p)||p.l(E)>0;)_-=T,A=f(_),p=A.j(m);k(A)&&(A=w),y=y.add(A),E=G(E,p)}return new K(y,E)}r.B=function(E){return ct(this,E).h},r.and=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},r.or=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},r.xor=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function At(E){const m=E.g.length+1,_=[];for(let T=0;T<m;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function st(E,m){const _=m>>5;m%=32;const T=E.g.length-_,y=[];for(let A=0;A<T;A++)y[A]=m>0?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new a(y,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,La=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,Yt=a}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,cn,Ua,Jn,Es,Ba,ja,qa;(function(){var r,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function s(i,c){if(c)t:{var u=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in u))break t;u=u[v]}i=i[i.length-1],d=u[i],c=c(d),c!=d&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&u.push([d,c[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function f(i,c,u){return f=h,f.apply(null,arguments)}function g(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function I(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(d,v,R){for(var b=Array(arguments.length-2),U=2;U<arguments.length;U++)b[U-2]=arguments[U];return c.prototype[v].apply(d,b)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const u=Array(c);for(let d=0;d<c;d++)u[d]=i[d];return u}return[]}function k(i,c){for(let d=1;d<arguments.length;d++){const v=arguments[d];var u=typeof v;if(u=u!="object"?u:v?Array.isArray(v)?"array":u:"null",u=="array"||u=="object"&&typeof v.length=="number"){u=i.length||0;const R=v.length||0;i.length=u+R;for(let b=0;b<R;b++)i[u+b]=v[b]}else i.push(v)}}class x{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(i){a.setTimeout(()=>{throw i},0)}function G(){var i=E;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class z{constructor(){this.h=this.g=null}add(c,u){const d=K.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var K=new x(()=>new ct,i=>i.reset());class ct{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let At,st=!1,E=new z,m=()=>{const i=Promise.resolve(void 0);At=()=>{i.then(_)}};function _(){for(var i;i=G();){try{i.h.call(i.g)}catch(u){V(u)}var c=K;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}st=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i})();function p(i){return/^[\s\xa0]*$/.test(i)}function It(i,c){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}I(It,y),It.prototype.init=function(i,c){const u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ae="closure_listenable_"+(Math.random()*1e6|0),fu=0;function mu(i,c,u,d,v){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=v,this.key=++fu,this.da=this.fa=!1}function Dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Nn(i,c,u){for(const d in i)c.call(u,i[d],d,i)}function pu(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function mi(i){const c={};for(const u in i)c[u]=i[u];return c}const pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gi(i,c){let u,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(u in d)i[u]=d[u];for(let R=0;R<pi.length;R++)u=pi[R],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function kn(i){this.src=i,this.g={},this.h=0}kn.prototype.add=function(i,c,u,d,v){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const b=Or(i,c,d,v);return b>-1?(c=i[b],u||(c.fa=!1)):(c=new mu(c,this.src,R,!!d,v),c.fa=u,i.push(c)),c};function xr(i,c){const u=c.type;if(u in i.g){var d=i.g[u],v=Array.prototype.indexOf.call(d,c,void 0),R;(R=v>=0)&&Array.prototype.splice.call(d,v,1),R&&(Dn(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Or(i,c,u,d){for(let v=0;v<i.length;++v){const R=i[v];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==d)return v}return-1}var Mr="closure_lm_"+(Math.random()*1e6|0),Lr={};function _i(i,c,u,d,v){if(Array.isArray(c)){for(let R=0;R<c.length;R++)_i(i,c[R],u,d,v);return null}return u=Ti(u),i&&i[ae]?i.J(c,u,l(d)?!!d.capture:!1,v):gu(i,c,u,!1,d,v)}function gu(i,c,u,d,v,R){if(!c)throw Error("Invalid event type");const b=l(v)?!!v.capture:!!v;let U=Ur(i);if(U||(i[Mr]=U=new kn(i)),u=U.add(c,u,d,b,R),u.proxy)return u;if(d=_u(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)A||(v=b),v===void 0&&(v=!1),i.addEventListener(c.toString(),d,v);else if(i.attachEvent)i.attachEvent(Ei(c.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function _u(){function i(u){return c.call(i.src,i.listener,u)}const c=yu;return i}function yi(i,c,u,d,v){if(Array.isArray(c))for(var R=0;R<c.length;R++)yi(i,c[R],u,d,v);else d=l(d)?!!d.capture:!!d,u=Ti(u),i&&i[ae]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],u=Or(c,u,d,v),u>-1&&(Dn(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=Ur(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Or(c,u,d,v)),(u=i>-1?c[i]:null)&&Fr(u))}function Fr(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[ae])xr(c.i,i);else{var u=i.type,d=i.proxy;c.removeEventListener?c.removeEventListener(u,d,i.capture):c.detachEvent?c.detachEvent(Ei(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=Ur(c))?(xr(u,i),u.h==0&&(u.src=null,c[Mr]=null)):Dn(i)}}}function Ei(i){return i in Lr?Lr[i]:Lr[i]="on"+i}function yu(i,c){if(i.da)i=!0;else{c=new It(c,this);const u=i.listener,d=i.ha||i.src;i.fa&&Fr(i),i=u.call(d,c)}return i}function Ur(i){return i=i[Mr],i instanceof kn?i:null}var Br="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ti(i){return typeof i=="function"?i:(i[Br]||(i[Br]=function(c){return i.handleEvent(c)}),i[Br])}function pt(){T.call(this),this.i=new kn(this),this.M=this,this.G=null}I(pt,T),pt.prototype[ae]=!0,pt.prototype.removeEventListener=function(i,c,u,d){yi(this,i,c,u,d)};function Et(i,c){var u,d=i.G;if(d)for(u=[];d;d=d.G)u.push(d);if(i=i.M,d=c.type||c,typeof c=="string")c=new y(c,i);else if(c instanceof y)c.target=c.target||i;else{var v=c;c=new y(d,i),gi(c,v)}v=!0;let R,b;if(u)for(b=u.length-1;b>=0;b--)R=c.g=u[b],v=xn(R,d,!0,c)&&v;if(R=c.g=i,v=xn(R,d,!0,c)&&v,v=xn(R,d,!1,c)&&v,u)for(b=0;b<u.length;b++)R=c.g=u[b],v=xn(R,d,!1,c)&&v}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let d=0;d<u.length;d++)Dn(u[d]);delete i.g[c],i.h--}}this.G=null},pt.prototype.J=function(i,c,u,d){return this.i.add(String(i),c,!1,u,d)},pt.prototype.K=function(i,c,u,d){return this.i.add(String(i),c,!0,u,d)};function xn(i,c,u,d){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let v=!0;for(let R=0;R<c.length;++R){const b=c[R];if(b&&!b.da&&b.capture==u){const U=b.listener,it=b.ha||b.src;b.fa&&xr(i.i,b),v=U.call(it,d)!==!1&&v}}return v&&!d.defaultPrevented}function Eu(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Ii(i){i.g=Eu(()=>{i.g=null,i.i&&(i.i=!1,Ii(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Tu extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(i){T.call(this),this.h=i,this.g={}}I(ze,T);var vi=[];function Ai(i){Nn(i.g,function(c,u){this.g.hasOwnProperty(u)&&Fr(c)},i),i.g={}}ze.prototype.N=function(){ze.Z.N.call(this),Ai(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=a.JSON.stringify,Iu=a.JSON.parse,vu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function wi(){}function Ri(){}var He={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qr(){y.call(this,"d")}I(qr,y);function $r(){y.call(this,"c")}I($r,y);var ce={},Si=null;function On(){return Si=Si||new pt}ce.Ia="serverreachability";function Ci(i){y.call(this,ce.Ia,i)}I(Ci,y);function Ge(i){const c=On();Et(c,new Ci(c))}ce.STAT_EVENT="statevent";function Pi(i,c){y.call(this,ce.STAT_EVENT,i),this.stat=c}I(Pi,y);function Tt(i){const c=On();Et(c,new Pi(c,i))}ce.Ja="timingevent";function bi(i,c){y.call(this,ce.Ja,i),this.size=c}I(bi,y);function Ke(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function We(){this.g=!0}We.prototype.ua=function(){this.g=!1};function Au(i,c,u,d,v,R){i.info(function(){if(i.g)if(R){var b="",U=R.split("&");for(let W=0;W<U.length;W++){var it=U[W].split("=");if(it.length>1){const ut=it[0];it=it[1];const bt=ut.split("_");b=bt.length>=2&&bt[1]=="type"?b+(ut+"="+it+"&"):b+(ut+"=redacted&")}}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+c+`
`+u+`
`+b})}function wu(i,c,u,d,v,R,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+c+`
`+u+`
`+R+" "+b})}function Ie(i,c,u,d){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Su(i,u)+(d?" "+d:"")})}function Ru(i,c){i.info(function(){return"TIMEOUT: "+c})}We.prototype.info=function(){};function Su(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var u=R[i];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(let b=1;b<d.length;b++)d[b]=""}}}}return jr(R)}catch{return c}}var Mn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Vi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Di;function zr(){}I(zr,wi),zr.prototype.g=function(){return new XMLHttpRequest},Di=new zr;function Qe(i){return encodeURIComponent(String(i))}function Cu(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function qt(i,c,u,d){this.j=i,this.i=c,this.l=u,this.S=d||1,this.V=new ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}var ki={},Hr={};function Gr(i,c,u){i.M=1,i.A=Fn(Pt(c)),i.u=u,i.R=!0,xi(i,null)}function xi(i,c){i.F=Date.now(),Ln(i),i.B=Pt(i.A);var u=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),Ki(u.i,"t",d),i.C=0,u=i.j.L,i.h=new Ni,i.g=ho(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Tu(f(i.Y,i,i.g),i.P)),c=i.V,u=i.g,d=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(vi[0]=v.toString()),v=vi);for(let R=0;R<v.length;R++){const b=_i(u,v[R],d||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=i.J?mi(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Ge(),Au(i.i,i.v,i.B,i.l,i.S,i.u)}qt.prototype.ba=function(i){i=i.target;const c=this.O;c&&Ht(i)==3?c.j():this.Y(i)},qt.prototype.Y=function(i){try{if(i==this.g)t:{const U=Ht(this.g),it=this.g.ya(),W=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||to(this.g)))){this.K||U!=4||it==7||(it==8||W<=0?Ge(3):Ge(2)),Kr(this);var c=this.g.ca();this.X=c;var u=Pu(this);if(this.o=c==200,wu(this.i,this.v,this.B,this.l,this.S,U,c),this.o){if(this.U&&!this.L){e:{if(this.g){var d,v=this.g;if((d=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(d)){var R=d;break e}}R=null}if(i=R)Ie(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wr(this,i);else{this.o=!1,this.m=3,Tt(12),ue(this),Xe(this);break t}}if(this.R){i=!0;let ut;for(;!this.K&&this.C<u.length;)if(ut=bu(this,u),ut==Hr){U==4&&(this.m=4,Tt(14),i=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ki){this.m=4,Tt(15),Ie(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Ie(this.i,this.l,ut,null),Wr(this,ut);if(Oi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||u.length!=0||this.h.h||(this.m=1,Tt(16),i=!1),this.o=this.o&&i,!i)Ie(this.i,this.l,u,"[Invalid Chunked Response]"),ue(this),Xe(this);else if(u.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),ns(b),b.P=!0,Tt(11))}}else Ie(this.i,this.l,u,null),Wr(this,u);U==4&&ue(this),this.o&&!this.K&&(U==4?ao(this.j,this):(this.o=!1,Ln(this)))}else $u(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),ue(this),Xe(this)}}}catch{}finally{}};function Pu(i){if(!Oi(i))return i.g.la();const c=to(i.g);if(c==="")return"";let u="";const d=c.length,v=Ht(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return ue(i),Xe(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<d;R++)i.h.h=!0,u+=i.h.i.decode(c[R],{stream:!(v&&R==d-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Oi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function bu(i,c){var u=i.C,d=c.indexOf(`
`,u);return d==-1?Hr:(u=Number(c.substring(u,d)),isNaN(u)?ki:(d+=1,d+u>c.length?Hr:(c=c.slice(d,d+u),i.C=d+u,c)))}qt.prototype.cancel=function(){this.K=!0,ue(this)};function Ln(i){i.T=Date.now()+i.H,Mi(i,i.H)}function Mi(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Ke(f(i.aa,i),c)}function Kr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}qt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Ru(this.i,this.B),this.M!=2&&(Ge(),Tt(17)),ue(this),this.m=2,Xe(this)):Mi(this,this.T-i)};function Xe(i){i.j.I==0||i.K||ao(i.j,i)}function ue(i){Kr(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ai(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Wr(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Qr(u.h,i))){if(!i.L&&Qr(u.h,i)&&u.I==3){try{var d=u.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)$n(u),jn(u);else break t;es(u),Tt(18)}}else u.xa=v[1],0<u.xa-u.K&&v[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Ke(f(u.Va,u),6e3));Ui(u.h)<=1&&u.ta&&(u.ta=void 0)}else he(u,11)}else if((i.L||u.g==i)&&$n(u),!p(c))for(v=u.Ba.g.parse(c),c=0;c<v.length;c++){let W=v[c];const ut=W[0];if(!(ut<=u.K))if(u.K=ut,W=W[1],u.I==2)if(W[0]=="c"){u.M=W[1],u.ba=W[2];const bt=W[3];bt!=null&&(u.ka=bt,u.j.info("VER="+u.ka));const de=W[4];de!=null&&(u.za=de,u.j.info("SVER="+u.za));const Gt=W[5];Gt!=null&&typeof Gt=="number"&&Gt>0&&(d=1.5*Gt,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Kt=i.g;if(Kt){const Hn=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var R=d.h;R.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Xr(R,R.h),R.h=null))}if(d.G){const rs=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;rs&&(d.wa=rs,Q(d.J,d.G,rs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var b=i;if(d.na=lo(d,d.L?d.ba:null,d.W),b.L){Bi(d.h,b);var U=b,it=d.O;it&&(U.H=it),U.D&&(Kr(U),Ln(U)),d.g=b}else io(d);u.i.length>0&&qn(u)}else W[0]!="stop"&&W[0]!="close"||he(u,7);else u.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?he(u,7):ts(u):W[0]!="noop"&&u.l&&u.l.qa(W),u.A=0)}}Ge(4)}catch{}}var Vu=class{constructor(i,c){this.g=i,this.map=c}};function Li(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ui(i){return i.h?1:i.g?i.g.size:0}function Qr(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Xr(i,c){i.g?i.g.add(c):i.h=c}function Bi(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Li.prototype.cancel=function(){if(this.i=ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ji(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return P(i.i)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Du(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const d=i[u].indexOf("=");let v,R=null;d>=0?(v=i[u].substring(0,d),R=i[u].substring(d+1)):v=i[u],c(v,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $t(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof $t?(this.l=i.l,Ye(this,i.j),this.o=i.o,this.g=i.g,Je(this,i.u),this.h=i.h,Yr(this,Wi(i.i)),this.m=i.m):i&&(c=String(i).match(qi))?(this.l=!1,Ye(this,c[1]||"",!0),this.o=Ze(c[2]||""),this.g=Ze(c[3]||"",!0),Je(this,c[4]),this.h=Ze(c[5]||"",!0),Yr(this,c[6]||"",!0),this.m=Ze(c[7]||"")):(this.l=!1,this.i=new en(null,this.l))}$t.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(tn(c,$i,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(tn(c,$i,!0),"@"),i.push(Qe(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(tn(u,u.charAt(0)=="/"?xu:ku,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",tn(u,Mu)),i.join("")},$t.prototype.resolve=function(i){const c=Pt(this);let u=!!i.j;u?Ye(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var d=i.h;if(u)Je(c,i.u);else if(u=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var v=c.h.lastIndexOf("/");v!=-1&&(d=c.h.slice(0,v+1)+d)}if(v=d,v==".."||v==".")d="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){d=v.lastIndexOf("/",0)==0,v=v.split("/");const R=[];for(let b=0;b<v.length;){const U=v[b++];U=="."?d&&b==v.length&&R.push(""):U==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),d&&b==v.length&&R.push("")):(R.push(U),d=!0)}d=R.join("/")}else d=v}return u?c.h=d:u=i.i.toString()!=="",u?Yr(c,Wi(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Pt(i){return new $t(i)}function Ye(i,c,u){i.j=u?Ze(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Je(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Yr(i,c,u){c instanceof en?(i.i=c,Lu(i.i,i.l)):(u||(c=tn(c,Ou)),i.i=new en(c,i.l))}function Q(i,c,u){i.i.set(c,u)}function Fn(i){return Q(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Ze(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,Nu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Nu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $i=/[#\/\?@]/g,ku=/[#\?:]/g,xu=/[#\?]/g,Ou=/[#\?@]/g,Mu=/#/g;function en(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function le(i){i.g||(i.g=new Map,i.h=0,i.i&&Du(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}r=en.prototype,r.add=function(i,c){le(this),this.i=null,i=ve(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function zi(i,c){le(i),c=ve(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Hi(i,c){return le(i),c=ve(i,c),i.g.has(c)}r.forEach=function(i,c){le(this),this.g.forEach(function(u,d){u.forEach(function(v){i.call(c,v,d,this)},this)},this)};function Gi(i,c){le(i);let u=[];if(typeof c=="string")Hi(i,c)&&(u=u.concat(i.g.get(ve(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}r.set=function(i,c){return le(this),this.i=null,i=ve(this,i),Hi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=Gi(this,i),i.length>0?String(i[0]):c):c};function Ki(i,c,u){zi(i,c),u.length>0&&(i.i=null,i.g.set(ve(i,c),P(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var u=c[d];const v=Qe(u);u=Gi(this,u);for(let R=0;R<u.length;R++){let b=v;u[R]!==""&&(b+="="+Qe(u[R])),i.push(b)}}return this.i=i.join("&")};function Wi(i){const c=new en;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function ve(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Lu(i,c){c&&!i.j&&(le(i),i.i=null,i.g.forEach(function(u,d){const v=d.toLowerCase();d!=v&&(zi(this,d),Ki(this,v,u))},i)),i.j=c}function Fu(i,c){const u=new We;if(a.Image){const d=new Image;d.onload=g(zt,u,"TestLoadImage: loaded",!0,c,d),d.onerror=g(zt,u,"TestLoadImage: error",!1,c,d),d.onabort=g(zt,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=g(zt,u,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else c(!1)}function Uu(i,c){const u=new We,d=new AbortController,v=setTimeout(()=>{d.abort(),zt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(v),R.ok?zt(u,"TestPingServer: ok",!0,c):zt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),zt(u,"TestPingServer: error",!1,c)})}function zt(i,c,u,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(u)}catch{}}function Bu(){this.g=new vu}function Jr(i){this.i=i.Sb||null,this.h=i.ab||!1}I(Jr,wi),Jr.prototype.g=function(){return new Un(this.i,this.h)};function Un(i,c){pt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Un,pt),r=Un.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,rn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qi(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qi(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?nn(this):rn(this),this.readyState==3&&Qi(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,nn(this))},r.Na=function(i){this.g&&(this.response=i,nn(this))},r.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,rn(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Xi(i){let c="";return Nn(i,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function Zr(i,c,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Xi(u),typeof i=="string"?u!=null&&Qe(u):Q(i,c,u))}function tt(i){pt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(tt,pt);var ju=/^https?$/i,qu=["POST","PUT"];r=tt.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Di.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Yi(this,R);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)u.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())u.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(qu,c,void 0)>=0)||d||v||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of u)this.g.setRequestHeader(R,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){Yi(this,R)}};function Yi(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ji(i),Bn(i)}function Ji(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Et(this,"complete"),Et(this,"abort"),Bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),tt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Zi(this):this.Xa())},r.Xa=function(){Zi(this)};function Zi(i){if(i.h&&typeof o<"u"){if(i.v&&Ht(i)==4)setTimeout(i.Ca.bind(i),0);else if(Et(i,"readystatechange"),Ht(i)==4){i.h=!1;try{const R=i.ca();t:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var d;if(d=R===0){let b=String(i.D).match(qi)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),d=!ju.test(b?b.toLowerCase():"")}u=d}if(u)Et(i,"complete"),Et(i,"success");else{i.o=6;try{var v=Ht(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",Ji(i)}}finally{Bn(i)}}}}function Bn(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Et(i,"ready");try{u.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Ht(i){return i.g?i.g.readyState:0}r.ca=function(){try{return Ht(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Iu(c)}};function to(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function $u(i){const c={};i=(i.g&&Ht(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(p(i[d]))continue;var u=Cu(i[d]);const v=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[v]||[];c[v]=R,R.push(u)}pu(c,function(d){return d.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function eo(i){this.za=0,this.i=[],this.j=new We,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sn("baseRetryDelayMs",5e3,i),this.Za=sn("retryDelaySeedMs",1e4,i),this.Ta=sn("forwardChannelMaxRetries",2,i),this.va=sn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Li(i&&i.concurrentRequestLimit),this.Ba=new Bu,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=eo.prototype,r.ka=8,r.I=1,r.connect=function(i,c,u,d){Tt(0),this.W=i,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=lo(this,null,this.W),qn(this)};function ts(i){if(no(i),i.I==3){var c=i.V++,u=Pt(i.J);if(Q(u,"SID",i.M),Q(u,"RID",c),Q(u,"TYPE","terminate"),on(i,u),c=new qt(i,i.j,c),c.M=2,c.A=Fn(Pt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=ho(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ln(c)}uo(i)}function jn(i){i.g&&(ns(i),i.g.cancel(),i.g=null)}function no(i){jn(i),i.v&&(a.clearTimeout(i.v),i.v=null),$n(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function qn(i){if(!Fi(i.h)&&!i.m){i.m=!0;var c=i.Ea;At||m(),st||(At(),st=!0),E.add(c,i),i.D=0}}function zu(i,c){return Ui(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Ke(f(i.Ea,i,c),co(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new qt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=mi(R),gi(R,this.U)):R=this.U),this.u!==null||this.R||(v.J=R,R=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=so(this,v,c),u=Pt(this.J),Q(u,"RID",i),Q(u,"CVER",22),this.G&&Q(u,"X-HTTP-Session-Id",this.G),on(this,u),R&&(this.R?c="headers="+Qe(Xi(R))+"&"+c:this.u&&Zr(u,this.u,R)),Xr(this.h,v),this.Ra&&Q(u,"TYPE","init"),this.S?(Q(u,"$req",c),Q(u,"SID","null"),v.U=!0,Gr(v,u,null)):Gr(v,u,c),this.I=2}}else this.I==3&&(i?ro(this,i):this.i.length==0||Fi(this.h)||ro(this))};function ro(i,c){var u;c?u=c.l:u=i.V++;const d=Pt(i.J);Q(d,"SID",i.M),Q(d,"RID",u),Q(d,"AID",i.K),on(i,d),i.u&&i.o&&Zr(d,i.u,i.o),u=new qt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=so(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Xr(i.h,u),Gr(u,d,c)}function on(i,c){i.H&&Nn(i.H,function(u,d){Q(c,d,u)}),i.l&&Nn({},function(u,d){Q(c,d,u)})}function so(i,c,u){u=Math.min(i.i.length,u);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var v=i.i;let U=-1;for(;;){const it=["count="+u];U==-1?u>0?(U=v[0].g,it.push("ofs="+U)):U=0:it.push("ofs="+U);let W=!0;for(let ut=0;ut<u;ut++){var R=v[ut].g;const bt=v[ut].map;if(R-=U,R<0)U=Math.max(0,v[ut].g-100),W=!1;else try{R="req"+R+"_"||"";try{var b=bt instanceof Map?bt:Object.entries(bt);for(const[de,Gt]of b){let Kt=Gt;l(Gt)&&(Kt=jr(Gt)),it.push(R+de+"="+encodeURIComponent(Kt))}}catch(de){throw it.push(R+"type="+encodeURIComponent("_badmap")),de}}catch{d&&d(bt)}}if(W){b=it.join("&");break t}}b=void 0}return i=i.i.splice(0,u),c.G=i,b}function io(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;At||m(),st||(At(),st=!0),E.add(c,i),i.A=0}}function es(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Ke(f(i.Da,i),co(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,oo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Ke(f(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),jn(this),oo(this))};function ns(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function oo(i){i.g=new qt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Pt(i.na);Q(c,"RID","rpc"),Q(c,"SID",i.M),Q(c,"AID",i.K),Q(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Q(c,"TO",i.ia),Q(c,"TYPE","xmlhttp"),on(i,c),i.u&&i.o&&Zr(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=Fn(Pt(c)),u.u=null,u.R=!0,xi(u,i)}r.Va=function(){this.C!=null&&(this.C=null,jn(this),es(this),Tt(19))};function $n(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ao(i,c){var u=null;if(i.g==c){$n(i),ns(i),i.g=null;var d=2}else if(Qr(i.h,c))u=c.G,Bi(i.h,c),d=1;else return;if(i.I!=0){if(c.o)if(d==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var v=i.D;d=On(),Et(d,new bi(d,u)),qn(i)}else io(i);else if(v=c.m,v==3||v==0&&c.X>0||!(d==1&&zu(i,c)||d==2&&es(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),v){case 1:he(i,5);break;case 4:he(i,10);break;case 3:he(i,6);break;default:he(i,2)}}}function co(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function he(i,c){if(i.j.info("Error code "+c),c==2){var u=f(i.bb,i),d=i.Ua;const v=!d;d=new $t(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ye(d,"https"),Fn(d),v?Fu(d.toString(),u):Uu(d.toString(),u)}else Tt(2);i.I=0,i.l&&i.l.pa(c),uo(i),no(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function uo(i){if(i.I=0,i.ja=[],i.l){const c=ji(i.h);(c.length!=0||i.i.length!=0)&&(k(i.ja,c),k(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function lo(i,c,u){var d=u instanceof $t?Pt(u):new $t(u);if(d.g!="")c&&(d.g=c+"."+d.g),Je(d,d.u);else{var v=a.location;d=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;const R=new $t(null);d&&Ye(R,d),c&&(R.g=c),v&&Je(R,v),u&&(R.h=u),d=R}return u=i.G,c=i.wa,u&&c&&Q(d,u,c),Q(d,"VER",i.ka),on(i,d),d}function ho(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new tt(new Jr({ab:u})):new tt(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fo(){}r=fo.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function zn(){}zn.prototype.g=function(i,c){return new wt(i,c)};function wt(i,c){pt.call(this),this.g=new eo(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!p(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ae(this)}I(wt,pt),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ts(this.g)},wt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=jr(i),i=u);c.i.push(new Vu(c.Ya++,i)),c.I==3&&qn(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,ts(this.g),delete this.g,wt.Z.N.call(this)};function mo(i){qr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}I(mo,qr);function po(){$r.call(this),this.status=1}I(po,$r);function Ae(i){this.g=i}I(Ae,fo),Ae.prototype.ra=function(){Et(this.g,"a")},Ae.prototype.qa=function(i){Et(this.g,new mo(i))},Ae.prototype.pa=function(i){Et(this.g,new po)},Ae.prototype.oa=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,qa=function(){return new zn},ja=function(){return On()},Ba=ce,Es={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,Jn=Mn,Vi.COMPLETE="complete",Ua=Vi,Ri.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",pt.prototype.listen=pt.prototype.J,cn=Ri,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,Fa=tt}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const Vo="@firebase/firestore",Do="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Da("@firebase/firestore");function we(){return pe.logLevel}function D(r,...t){if(pe.logLevel<=$.DEBUG){const e=t.map(Bs);pe.debug(`Firestore (${Be}): ${r}`,...e)}}function Bt(r,...t){if(pe.logLevel<=$.ERROR){const e=t.map(Bs);pe.error(`Firestore (${Be}): ${r}`,...e)}}function ke(r,...t){if(pe.logLevel<=$.WARN){const e=t.map(Bs);pe.warn(`Firestore (${Be}): ${r}`,...e)}}function Bs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,$a(r,n,e)}function $a(r,t,e){let n=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Bt(n),new Error(n)}function H(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||$a(t,s,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(_t.UNAUTHENTICATED)))}shutdown(){}}class xh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Oh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string",31837,{l:n}),new za(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class Mh{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lh{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Mh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class No{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){H(this.o===void 0,3512);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new No(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(H(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new No(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Uh(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function Ts(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),o=t.charAt(n);if(s!==o)return cs(s)===cs(o)?B(s,o):cs(s)?1:-1}return B(r.length,t.length)}const Bh=55296,jh=57343;function cs(r){const t=r.charCodeAt(0);return t>=Bh&&t<=jh}function xe(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="__name__";class Vt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Vt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const n=Vt.isNumericId(t),s=Vt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):Ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class X extends Vt{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const qh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Vt{construct(t,e,n){return new ft(t,e,n)}static isValidIdentifier(t){return qh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ko}static keyField(){return new ft([ko])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(o(),s++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(e)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(r,t,e){if(!e)throw new N(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function $h(r,t,e,n){if(t===!0&&n===!0)throw new N(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function xo(r){if(!O.isDocumentKey(r))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Oo(r){if(O.isDocumentKey(r))throw new N(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ga(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function En(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qs(r);throw new N(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Sn(r,t){if(!Ga(r))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-62135596800,Lo=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Lo);return new Y(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mo)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lo}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Sn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Mo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:rt("string",Y._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=-1;function zh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new Y(e+1,0):new Y(e,n));return new te(s,O.empty(),t)}function Hh(r){return new te(r.readTime,r.key,Tn)}class te{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new te(L.min(),O.empty(),Tn)}static max(){return new te(L.max(),O.empty(),Tn)}}function Gh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Kh)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,n)=>{e(t)}))}static reject(t){return new S(((e,n)=>{n(t)}))}static waitFor(t){return new S(((e,n)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>n(h)))})),a=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next((s=>s?S.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,o)=>{n.push(e.call(this,s,o))})),this.waitFor(n)}static mapArray(t,e){return new S(((n,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((g=>{a[f]=g,++l,l===o&&n(a)}),(g=>s(g)))}}))}static doWhile(t,e){return new S(((n,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):n()};o()}))}}function Qh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function qe(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Tr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=-1;function Ir(r){return r==null}function cr(r){return r===0&&1/r==-1/0}function Xh(r){return typeof r=="number"&&Number.isInteger(r)&&!cr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="";function Yh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Fo(t)),t=Jh(r.get(e),t);return Fo(t)}function Jh(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case Ka:e+="";break;default:e+=o}}return e}function Fo(r){return r+Ka+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function _e(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Wa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kn(this.root,t,this.comparator,!0)}}class Kn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??dt.RED,this.left=s??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new dt(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Bo(this.data.getIterator())}getIteratorFrom(t){return new Bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new at(ft.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Qa("Invalid base64 string: "+o):o}})(t);return new mt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Zh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(r){if(H(!!r,39018),typeof r=="string"){let t=0;const e=Zh.exec(r);if(H(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:et(r.seconds),nanos:et(r.nanos)}}function et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?mt.fromBase64String(r):mt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="server_timestamp",Ya="__type__",Ja="__previous_value__",Za="__local_write_time__";function zs(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ya])==null?void 0:n.stringValue)===Xa}function vr(r){const t=r.mapValue.fields[Ja];return zs(t)?vr(t):t}function In(r){const t=ee(r.mapValue.fields[Za].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n,s,o,a,l,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=g}}const ur="(default)";class vn{constructor(t,e){this.projectId=t,this.database=e||ur}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database===ur}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="__type__",ed="__max__",Wn={mapValue:{}},ec="__vector__",lr="value";function re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zs(r)?4:rd(r)?9007199254740991:nd(r)?10:11:M(28295,{value:r})}function Ot(r,t){if(r===t)return!0;const e=re(r);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return In(r).isEqual(In(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ee(s.timestampValue),l=ee(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(r,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),l=et(o.doubleValue);return a===l?cr(a)===cr(l):isNaN(a)&&isNaN(l)}return!1})(r,t);case 9:return xe(r.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Uo(a)!==Uo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ot(a[h],l[h])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function An(r,t){return(r.values||[]).find((e=>Ot(e,t)))!==void 0}function Oe(r,t){if(r===t)return 0;const e=re(r),n=re(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(r,t);case 3:return jo(r.timestampValue,t.timestampValue);case 4:return jo(In(r),In(t));case 5:return Ts(r.stringValue,t.stringValue);case 6:return(function(o,a){const l=ne(o),h=ne(a);return l.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=B(l[f],h[f]);if(g!==0)return g}return B(l.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=B(et(o.latitude),et(a.latitude));return l!==0?l:B(et(o.longitude),et(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return qo(r.arrayValue,t.arrayValue);case 10:return(function(o,a){var w,P,k,x;const l=o.fields||{},h=a.fields||{},f=(w=l[lr])==null?void 0:w.arrayValue,g=(P=h[lr])==null?void 0:P.arrayValue,I=B(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((x=g==null?void 0:g.values)==null?void 0:x.length)||0);return I!==0?I:qo(f,g)})(r.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Wn.mapValue&&a===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(a===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const w=Ts(h[I],g[I]);if(w!==0)return w;const P=Oe(l[h[I]],f[g[I]]);if(P!==0)return P}return B(h.length,g.length)})(r.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function jo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=ee(r),n=ee(t),s=B(e.seconds,n.seconds);return s!==0?s:B(e.nanos,n.nanos)}function qo(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Oe(e[s],n[s]);if(o)return o}return B(e.length,n.length)}function Me(r){return Is(r)}function Is(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=ee(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return ne(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return O.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Is(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${Is(e.fields[a])}`;return s+"}"})(r.mapValue):M(61005,{value:r})}function Zn(r){switch(re(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=vr(r);return t?16+Zn(t):16;case 5:return 2*r.stringValue.length;case 6:return ne(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,o)=>s+Zn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return _e(n.fields,((o,a)=>{s+=o.length+Zn(a)})),s})(r.mapValue);default:throw M(13486,{value:r})}}function vs(r){return!!r&&"integerValue"in r}function Hs(r){return!!r&&"arrayValue"in r}function $o(r){return!!r&&"nullValue"in r}function zo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tr(r){return!!r&&"mapValue"in r}function nd(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[tc])==null?void 0:n.stringValue)===ec}function dn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return _e(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=dn(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(r.arrayValue.values[e]);return t}return{...r}}function rd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ed}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=ft.emptyPath(),n={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=l.popLast()}a?n[l.lastSegment()]=dn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){_e(e,((s,o)=>t[s]=o));for(const s of n)delete t[s]}clone(){return new Rt(dn(this.value))}}function nc(r){const t=[];return _e(r.fields,((e,n)=>{const s=new ft([e]);if(tr(n)){const o=nc(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,s,o,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,s){return new yt(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Ho(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Oe(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Go(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ot(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function sd(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{}class ot extends rc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new od(t,e,n):e==="array-contains"?new ud(t,n):e==="in"?new ld(t,n):e==="not-in"?new hd(t,n):e==="array-contains-any"?new dd(t,n):new ot(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ad(t,n):new cd(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Oe(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(Oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends rc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mt(t,e)}matches(t){return sc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sc(r){return r.op==="and"}function ic(r){return id(r)&&sc(r)}function id(r){for(const t of r.filters)if(t instanceof Mt)return!1;return!0}function As(r){if(r instanceof ot)return r.field.canonicalString()+r.op.toString()+Me(r.value);if(ic(r))return r.filters.map((t=>As(t))).join(",");{const t=r.filters.map((e=>As(e))).join(",");return`${r.op}(${t})`}}function oc(r,t){return r instanceof ot?(function(n,s){return s instanceof ot&&n.op===s.op&&n.field.isEqual(s.field)&&Ot(n.value,s.value)})(r,t):r instanceof Mt?(function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((o,a,l)=>o&&oc(a,s.filters[l])),!0):!1})(r,t):void M(19439)}function ac(r){return r instanceof ot?(function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`})(r):r instanceof Mt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ac).join(" ,")+"}"})(r):"Filter"}class od extends ot{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ad extends ot{constructor(t,e){super(t,"in",e),this.keys=cc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class cd extends ot{constructor(t,e){super(t,"not-in",e),this.keys=cc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function cc(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((n=>O.fromName(n.referenceValue)))}class ud extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hs(e)&&An(e.arrayValue,this.value)}}class ld extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class hd extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!An(this.value.arrayValue,e)}}class dd extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>An(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e=null,n=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Ko(r,t=null,e=[],n=[],s=null,o=null,a=null){return new fd(r,t,e,n,s,o,a)}function Gs(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>As(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Me(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Me(n))).join(",")),t.Te=e}return t.Te}function Ks(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!sd(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!oc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Go(r.startAt,t.startAt)&&Go(r.endAt,t.endAt)}function ws(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e=null,n=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function md(r,t,e,n,s,o,a,l){return new Ar(r,t,e,n,s,o,a,l)}function uc(r){return new Ar(r)}function Wo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pd(r){return r.collectionGroup!==null}function fn(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ft.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new dr(o,n))})),e.has(ft.keyField().canonicalString())||t.Ie.push(new dr(ft.keyField(),n))}return t.Ie}function Dt(r){const t=F(r);return t.Ee||(t.Ee=gd(t,fn(r))),t.Ee}function gd(r,t){if(r.limitType==="F")return Ko(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new dr(s.field,o)}));const e=r.endAt?new hr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new hr(r.startAt.position,r.startAt.inclusive):null;return Ko(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Rs(r,t,e){return new Ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function wr(r,t){return Ks(Dt(r),Dt(t))&&r.limitType===t.limitType}function lc(r){return`${Gs(Dt(r))}|lt:${r.limitType}`}function Re(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>ac(s))).join(", ")}]`),Ir(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Me(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Me(s))).join(",")),`Target(${n})`})(Dt(r))}; limitType=${r.limitType})`}function Rr(r,t){return t.isFoundDocument()&&(function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,s){for(const o of fn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,l,h){const f=Ho(a,l,h);return a.inclusive?f<=0:f<0})(n.startAt,fn(n),s)||n.endAt&&!(function(a,l,h){const f=Ho(a,l,h);return a.inclusive?f>=0:f>0})(n.endAt,fn(n),s))})(r,t)}function _d(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hc(r){return(t,e)=>{let n=!1;for(const s of fn(r)){const o=yd(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function yd(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Oe(h,f):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,((e,n)=>{for(const[s,o]of n)t(s,o)}))}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Z(O.comparator);function jt(){return Ed}const dc=new Z(O.comparator);function un(...r){let t=dc;for(const e of r)t=t.insert(e.key,e);return t}function fc(r){let t=dc;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function me(){return mn()}function mc(){return mn()}function mn(){return new ye((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Td=new Z(O.comparator),Id=new at(O.comparator);function j(...r){let t=Id;for(const e of r)t=t.add(e);return t}const vd=new at(B);function Ad(){return vd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(t)?"-0":t}}function pc(r){return{integerValue:""+r}}function wd(r,t){return Xh(t)?pc(t):Ws(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this._=void 0}}function Rd(r,t,e){return r instanceof fr?(function(s,o){const a={fields:{[Ya]:{stringValue:Xa},[Za]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&zs(o)&&(o=vr(o)),o&&(a.fields[Ja]=o),{mapValue:a}})(e,t):r instanceof wn?_c(r,t):r instanceof Rn?yc(r,t):(function(s,o){const a=gc(s,o),l=Qo(a)+Qo(s.Ae);return vs(a)&&vs(s.Ae)?pc(l):Ws(s.serializer,l)})(r,t)}function Sd(r,t,e){return r instanceof wn?_c(r,t):r instanceof Rn?yc(r,t):e}function gc(r,t){return r instanceof mr?(function(n){return vs(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class fr extends Sr{}class wn extends Sr{constructor(t){super(),this.elements=t}}function _c(r,t){const e=Ec(t);for(const n of r.elements)e.some((s=>Ot(s,n)))||e.push(n);return{arrayValue:{values:e}}}class Rn extends Sr{constructor(t){super(),this.elements=t}}function yc(r,t){let e=Ec(t);for(const n of r.elements)e=e.filter((s=>!Ot(s,n)));return{arrayValue:{values:e}}}class mr extends Sr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Qo(r){return et(r.integerValue||r.doubleValue)}function Ec(r){return Hs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Cd(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof wn&&s instanceof wn||n instanceof Rn&&s instanceof Rn?xe(n.elements,s.elements,Ot):n instanceof mr&&s instanceof mr?Ot(n.Ae,s.Ae):n instanceof fr&&s instanceof fr})(r.transform,t.transform)}class Pd{constructor(t,e){this.version=t,this.transformResults=e}}class Ft{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Cr{}function Tc(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new vc(r.key,Ft.none()):new Cn(r.key,r.data,Ft.none());{const e=r.data,n=Rt.empty();let s=new at(ft.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new Ee(r.key,n,new Ct(s.toArray()),Ft.none())}}function bd(r,t,e){r instanceof Cn?(function(s,o,a){const l=s.value.clone(),h=Yo(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):r instanceof Ee?(function(s,o,a){if(!er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Yo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ic(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function pn(r,t,e,n){return r instanceof Cn?(function(o,a,l,h){if(!er(o.precondition,a))return l;const f=o.value.clone(),g=Jo(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(r,t,e,n):r instanceof Ee?(function(o,a,l,h){if(!er(o.precondition,a))return l;const f=Jo(o.fieldTransforms,h,a),g=a.data;return g.setAll(Ic(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(r,t,e,n):(function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(r,t,e)}function Vd(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=gc(n.transform,s||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,o))}return e||null}function Xo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xe(n,s,((o,a)=>Cd(o,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Cn extends Cr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ee extends Cr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ic(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Yo(r,t,e){const n=new Map;H(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,l=t.data.field(o.field);n.set(o.field,Sd(a,l,e[s]))}return n}function Jo(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,Rd(o,a,t))}return n}class vc extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dd extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bd(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=mc();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Tc(a,l);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,((e,n)=>Xo(e,n)))&&xe(this.baseMutations,t.baseMutations,((e,n)=>Xo(e,n)))}}class Qs{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){H(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=(function(){return Td})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Qs(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,q;function Od(r){switch(r){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Ac(r){if(r===void 0)return Bt("GRPC error has no .code"),C.UNKNOWN;switch(r){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:r})}}(q=nt||(nt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Yt([4294967295,4294967295],0);function Zo(r){const t=Md().encode(r),e=new La;return e.update(t),new Uint8Array(e.digest())}function ta(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,n],0),new Yt([s,o],0)]}class Xs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(n<0)throw new ln(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Yt.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(Yt.fromNumber(n)));return s.compare(Ld)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Zo(t),[n,s]=ta(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Xs(o,s,e);return n.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Zo(t),[n,s]=ta(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Pr(L.min(),s,new Z(B),jt(),j())}}class Pn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Pn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class wc{constructor(t,e){this.targetId=t,this.Ce=e}}class Rc{constructor(t,e,n=mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ea{constructor(){this.ve=0,this.Fe=na(),this.Me=mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),n=j();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:o})}})),new Pn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=na()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fd{constructor(t){this.Ge=t,this.ze=new Map,this.je=jt(),this.Je=Qn(),this.He=Qn(),this.Ye=new Z(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(ws(o))if(n===0){const a=new O(o.path);this.et(e,a,yt.newNoDocument(a,L.min()))}else H(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ne(n).toUint8Array()}catch(h){if(h instanceof Qa)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Xs(a,s,o)}catch(h){return ke(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&ws(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,yt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let n=j();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new Pr(t,e,this.Ye,this.je,n);return this.je=jt(),this.Je=Qn(),this.He=Qn(),this.Ye=new Z(B),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ea,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new at(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new at(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ea),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Qn(){return new Z(O.comparator)}function na(){return new Z(O.comparator)}const Ud={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jd={and:"AND",or:"OR"};class qd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(r,t){return r.useProto3Json||Ir(t)?t:{value:t}}function pr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Sc(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function $d(r,t){return pr(r,t.toTimestamp())}function Nt(r){return H(!!r,49232),L.fromTimestamp((function(e){const n=ee(e);return new Y(n.seconds,n.nanos)})(r))}function Ys(r,t){return Cs(r,t).canonicalString()}function Cs(r,t){const e=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Cc(r){const t=X.fromString(r);return H(Nc(t),10190,{key:t.toString()}),t}function Ps(r,t){return Ys(r.databaseId,t.path)}function us(r,t){const e=Cc(t);if(e.get(1)!==r.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(bc(e))}function Pc(r,t){return Ys(r.databaseId,t)}function zd(r){const t=Cc(r);return t.length===4?X.emptyPath():bc(t)}function bs(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function bc(r){return H(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ra(r,t,e){return{name:Ps(r,t),fields:e.value.mapValue.fields}}function Hd(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(f,g){return f.useProto3Json?(H(g===void 0||typeof g=="string",58123),mt.fromBase64String(g||"")):(H(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),mt.fromUint8Array(g||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const g=f.code===void 0?C.UNKNOWN:Ac(f.code);return new N(g,f.message||"")})(a);e=new Rc(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=us(r,n.document.name),o=Nt(n.document.updateTime),a=n.document.createTime?Nt(n.document.createTime):L.min(),l=new Rt({mapValue:{fields:n.document.fields}}),h=yt.newFoundDocument(s,o,a,l),f=n.targetIds||[],g=n.removedTargetIds||[];e=new nr(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=us(r,n.document),o=n.readTime?Nt(n.readTime):L.min(),a=yt.newNoDocument(s,o),l=n.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=us(r,n.document),o=n.removedTargetIds||[];e=new nr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new xd(s,o),l=n.targetId;e=new wc(l,a)}}return e}function Gd(r,t){let e;if(t instanceof Cn)e={update:ra(r,t.key,t.value)};else if(t instanceof vc)e={delete:Ps(r,t.key)};else if(t instanceof Ee)e={update:ra(r,t.key,t.data),updateMask:ef(t.fieldMask)};else{if(!(t instanceof Dd))return M(16599,{Vt:t.type});e={verify:Ps(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,a){const l=a.transform;if(l instanceof fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:$d(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(r,t.precondition)),e}function Kd(r,t){return r&&r.length>0?(H(t!==void 0,14353),r.map((e=>(function(s,o){let a=s.updateTime?Nt(s.updateTime):Nt(o);return a.isEqual(L.min())&&(a=Nt(o)),new Pd(a,s.transformResults||[])})(e,t)))):[]}function Wd(r,t){return{documents:[Pc(r,t.path)]}}function Qd(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Pc(r,s);const o=(function(f){if(f.length!==0)return Dc(Mt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((g=>(function(w){return{field:Se(w.field),direction:Jd(w.dir)}})(g)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ss(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:s}}function Xd(r){let t=zd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){H(n===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(I){const w=Vc(I);return w instanceof Mt&&ic(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((w=>(function(k){return new dr(Ce(k.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(I){let w;return w=typeof I=="object"?I.value:I,Ir(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(I){const w=!!I.before,P=I.values||[];return new hr(P,w)})(e.startAt));let f=null;return e.endAt&&(f=(function(I){const w=!I.before,P=I.values||[];return new hr(P,w)})(e.endAt)),md(t,s,a,o,l,"F",h,f)}function Yd(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vc(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ce(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ce(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ce(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return ot.create(Ce(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Mt.create(e.compositeFilter.filters.map((n=>Vc(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Jd(r){return Ud[r]}function Zd(r){return Bd[r]}function tf(r){return jd[r]}function Se(r){return{fieldPath:r.canonicalString()}}function Ce(r){return ft.fromServerFormat(r.fieldPath)}function Dc(r){return r instanceof ot?(function(e){if(e.op==="=="){if(zo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if($o(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if($o(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Zd(e.op),value:e.value}}})(r):r instanceof Mt?(function(e){const n=e.getFilters().map((s=>Dc(s)));return n.length===1?n[0]:{compositeFilter:{op:tf(e.op),filters:n}}})(r):M(54877,{filter:r})}function ef(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Nc(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,n,s,o=L.min(),a=L.min(),l=mt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.yt=t}}function rf(r){const t=Xd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Cn=new of}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(te.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class of{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new at(X.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new at(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kc=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(kc,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Le(0)}static cr(){return new Le(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="LruGarbageCollector",af=1048576;function oa([r,t],[e,n]){const s=B(r,e);return s===0?B(t,n):s}class cf{constructor(t){this.Ir=t,this.buffer=new at(oa),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();oa(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class uf{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(ia,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){qe(e)?D(ia,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Vr(3e5)}))}}class lf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Tr.ce);const n=new cf(e);return this.mr.forEachTarget(t,(s=>n.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>n.Ar(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(sa)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sa):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,o,a,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s)))).next((I=>(n=I,l=Date.now(),this.removeTargets(t,n,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,n)))).next((I=>(f=Date.now(),we()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I}))))}}function hf(r,t){return new lf(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.changes=new ye((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&pn(n.mutation,s,Ct.empty(),Y.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,j()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=j()){const s=me();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((o=>{let a=un();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=me();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,j())))}populateOverlays(t,e,n){const s=[];return n.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,n,s){let o=jt();const a=mn(),l=(function(){return mn()})();return e.forEach(((h,f)=>{const g=n.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof Ee)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),pn(g.mutation,f,g.mutation.getFieldMask(),Y.now())):a.set(f.key,Ct.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,g)=>a.set(f,g))),e.forEach(((f,g)=>l.set(f,new ff(g,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,e){const n=mn();let s=new Z(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let g=n.get(h)||Ct.empty();g=l.applyToLocalView(f,g),n.set(h,g);const I=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,I)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,I=mc();g.forEach((w=>{if(!o.has(w)){const P=Tc(e.get(w),n.get(w));P!==null&&I.set(w,P),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,I))}return S.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):S.resolve(me());let l=Tn,h=o;return a.next((f=>S.forEach(f,((g,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(g)?S.resolve():this.remoteDocumentCache.getEntry(t,g).next((w=>{h=h.insert(g,w)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,j()))).next((g=>({batchId:l,changes:fc(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((n=>{let s=un();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=un();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const f=(function(I,w){return new Ar(w,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next((g=>{g.forEach(((I,w)=>{a=a.insert(I,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s)))).next((a=>{o.forEach(((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,yt.newInvalidDocument(g)))}));let l=un();return a.forEach(((h,f)=>{const g=o.get(h);g!==void 0&&pn(g.mutation,f,Ct.empty(),Y.now()),Rr(e,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:rf(s.bundledQuery),readTime:Nt(s.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.overlays=new Z(O.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=me();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&n.set(s,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const s=me(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new Z(((f,g)=>f-g));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let g=o.get(f.largestBatchId);g===null&&(g=me(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=me(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,g)=>l.set(f,g))),!(l.size()>=s)););return S.resolve(l)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new kd(e,n));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.Qr=new at(lt.$r),this.Ur=new at(lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new lt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Gr(new lt(t,e))}zr(t,e){t.forEach((n=>this.removeReference(n,e)))}jr(t){const e=new O(new X([])),n=new lt(e,t),s=new lt(e,t+1),o=[];return this.Ur.forEachInRange([n,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new X([])),n=new lt(e,t),s=new lt(e,t+1);let o=j();return this.Ur.forEachInRange([n,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new lt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class lt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new at(lt.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Nd(o,e,n,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new lt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?$s:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new lt(e,0),s=new lt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,s],(a=>{const l=this.Xr(a.Yr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new at(B);return e.forEach((s=>{const o=new lt(s,0),a=new lt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{n=n.add(l.Yr)}))})),S.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new lt(new O(o),0);let l=new at(B);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Yr)),!0)}),a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((n=>{const s=this.Xr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){H(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return S.forEach(e.mutations,(s=>{const o=new lt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=n}))}ir(t){}containsKey(t,e){const n=new lt(e,0),s=this.Zr.firstAfterOrEqual(n);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.ri=t,this.docs=(function(){return new Z(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=jt();return e.forEach((s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))})),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=jt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Gh(Hh(g),n)<=0||(s.has(g.key)||Rr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M(9500)}ii(t,e){return S.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Tf(this)}getSize(t){return S.resolve(this.size)}}class Tf extends df{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.persistence=t,this.si=new ye((e=>Gs(e)),Ks),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Js,this.targetCount=0,this.ai=Le.ur()}forEachTarget(t,e){return this.si.forEach(((n,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Le(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){this.ui={},this.overlays={},this.ci=new Tr(0),this.li=!1,this.li=!0,this.hi=new _f,this.referenceDelegate=t(this),this.Pi=new If(this),this.indexManager=new sf,this.remoteDocumentCache=(function(s){return new Ef(s)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new nf(e),this.Ii=new pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new yf(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new vf(this.ci.next());return this.referenceDelegate.Ei(),n(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((n=>()=>n.containsKey(t,e))))}}class vf extends Wh{constructor(t){super(),this.currentSequenceNumber=t}}class Zs{constructor(t){this.persistence=t,this.Ri=new Js,this.Vi=null}static mi(t){return new Zs(t)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(n=>{const s=O.fromPath(n);return this.gi(t,s).next((o=>{o||e.removeEntry(s,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.pi=new ye((n=>Yh(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=hf(this,e)}static mi(t,e){return new gr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}wr(t){let e=0;return this.pr(t,(n=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((n,s)=>this.br(t,n,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((l=>{l||(n++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),S.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}br(t,e,n){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ti(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return fl()?8:Qh(hl())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Af;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,n,s){return n.documentReadCount<this.fs?(we()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(we()<=$.DEBUG&&D("QueryEngine","Query:",Re(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(we()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):S.resolve())}ys(t,e){if(Wo(e))return S.resolve(null);let n=Dt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Rs(e,null,"F"),n=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const a=j(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,n).next((h=>{const f=this.Ds(e,l);return this.Cs(e,f,a,h.readTime)?this.ys(t,Rs(e,null,"F")):this.vs(t,f,e,h)}))))})))))}ws(t,e,n,s){return Wo(e)||s.isEqual(L.min())?S.resolve(null):this.ps.getDocuments(t,n).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,n,s)?S.resolve(null):(we()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Re(e)),this.vs(t,a,e,zh(s,Tn)).next((l=>l)))}))}Ds(t,e){let n=new at(hc(t));return e.forEach(((s,o)=>{Rr(t,o)&&(n=n.add(o))})),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,n){return we()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Re(e)),this.ps.getDocumentsMatchingQuery(t,e,te.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="LocalStore",Rf=3e8;class Sf{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new Z(B),this.xs=new ye((o=>Gs(o)),Ks),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Cf(r,t,e,n){return new Sf(r,t,e,n)}async function Oc(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],l=[];let h=j();for(const f of s){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(n,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Pf(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,g){const I=f.batch,w=I.keys();let P=S.resolve();return w.forEach((k=>{P=P.next((()=>g.getEntry(h,k))).next((x=>{const V=f.docVersions.get(k);H(V!==null,48541),x.version.compareTo(V)<0&&(I.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),g.addEntry(x)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,I)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Mc(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function bf(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach(((g,I)=>{const w=s.get(I);if(!w)return;l.push(e.Pi.removeMatchingKeys(o,g.removedDocuments,I).next((()=>e.Pi.addMatchingKeys(o,g.addedDocuments,I))));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?P=P.withResumeToken(mt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,n)),s=s.insert(I,P),(function(x,V,G){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Rf?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(w,P,g)&&l.push(e.Pi.updateTargetData(o,P))}));let h=jt(),f=j();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),l.push(Vf(o,a,t.documentUpdates).next((g=>{h=g.ks,f=g.qs}))),!n.isEqual(L.min())){const g=e.Pi.getLastRemoteSnapshotVersion(o).next((I=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n)));l.push(g)}return S.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function Vf(r,t,e){let n=j(),s=j();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let a=jt();return e.forEach(((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(ei,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function Df(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=$s),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Nf(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.Pi.getTargetData(n,t).next((o=>o?(s=o,S.resolve(s)):e.Pi.allocateTargetId(n).next((a=>(s=new Wt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n}))}async function Vs(r,t,e){const n=F(r),s=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!qe(a))throw a;D(ei,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function aa(r,t,e){const n=F(r);let s=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,g){const I=F(h),w=I.xs.get(g);return w!==void 0?S.resolve(I.Ms.get(w)):I.Pi.getTargetData(f,g)})(n,a,Dt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:j()))).next((l=>(kf(n,_d(t),l),{documents:l,Qs:o})))))}function kf(r,t,e){let n=r.Os.get(t)||L.min();e.forEach(((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Os.set(t,n)}class ca{constructor(){this.activeTargetIds=Ad()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xf{constructor(){this.Mo=new ca,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ca,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="ConnectivityMonitor";class la{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(ua,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(ua,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=null;function Ds(){return Xn===null?Xn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xn++,"0x"+Xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="RestConnection",Mf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===ur?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,o){const a=Ds(),l=this.zo(t,e.toUriEncodedString());D(ls,`Sending RPC '${t}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:f}=new URL(l),g=Fs(f);return this.Jo(t,l,h,n,g).then((I=>(D(ls,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw ke(ls,`RPC '${t}' ${a} failed with error: `,I,"url: ",l,"request:",n),I}))}Ho(t,e,n,s,o,a){return this.Go(t,e,n,s,o)}jo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Be})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),n&&n.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const n=Mf[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Uf extends Lf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,o){const a=Ds();return new Promise(((l,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ua.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Jn.NO_ERROR:const I=f.getResponseJson();D(gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case Jn.TIMEOUT:D(gt,`RPC '${t}' ${a} timed out`),h(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const w=f.getStatus();if(D(gt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P==null?void 0:P.error;if(k&&k.status&&k.message){const x=(function(G){const z=G.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN})(k.status);h(new N(x,k.message))}else h(new N(C.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(gt,`RPC '${t}' ${a} completed.`)}}));const g=JSON.stringify(s);D(gt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",g,n,15)}))}T_(t,e,n){const s=Ds(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=qa(),l=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const g=o.join("");D(gt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const I=a.createWebChannel(g,h);this.I_(I);let w=!1,P=!1;const k=new Ff({Yo:V=>{P?D(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(w||(D(gt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),w=!0),D(gt,`RPC '${t}' stream ${s} sending:`,V),I.send(V))},Zo:()=>I.close()}),x=(V,G,z)=>{V.listen(G,(K=>{try{z(K)}catch(ct){setTimeout((()=>{throw ct}),0)}}))};return x(I,cn.EventType.OPEN,(()=>{P||(D(gt,`RPC '${t}' stream ${s} transport opened.`),k.o_())})),x(I,cn.EventType.CLOSE,(()=>{P||(P=!0,D(gt,`RPC '${t}' stream ${s} transport closed`),k.a_(),this.E_(I))})),x(I,cn.EventType.ERROR,(V=>{P||(P=!0,ke(gt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),k.a_(new N(C.UNAVAILABLE,"The operation could not be completed")))})),x(I,cn.EventType.MESSAGE,(V=>{var G;if(!P){const z=V.data[0];H(!!z,16349);const K=z,ct=(K==null?void 0:K.error)||((G=K[0])==null?void 0:G.error);if(ct){D(gt,`RPC '${t}' stream ${s} received error:`,ct);const At=ct.status;let st=(function(_){const T=nt[_];if(T!==void 0)return Ac(T)})(At),E=ct.message;st===void 0&&(st=C.INTERNAL,E="Unknown error status: "+At+" with message "+ct.message),P=!0,k.a_(new N(st,E)),I.close()}else D(gt,`RPC '${t}' stream ${s} received:`,z),k.u_(z)}})),x(l,Ba.STAT_EVENT,(V=>{V.stat===Es.PROXY?D(gt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Es.NOPROXY&&D(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(r){return new qd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e,n=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="PersistentStream";class Fc{constructor(t,e,n,s,o,a,l,h){this.Mi=t,this.S_=n,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===e&&this.G_(n,s)}),(n=>{t((()=>{const s=new N(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(ha,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(D(ha,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bf extends Fc{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Hd(this.serializer,t),n=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Nt(a.readTime):L.min()})(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=bs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=ws(h)?{documents:Wd(o,h)}:{query:Qd(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Sc(o,a.resumeToken);const f=Ss(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=pr(o,a.snapshotVersion.toTimestamp());const f=Ss(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const n=Yd(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=bs(this.serializer),e.removeTarget=t,this.q_(e)}}class jf extends Fc{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return H(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){H(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Kd(t.writeResults,t.commitTime),n=Nt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=bs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Gd(this.serializer,n)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{}class $f extends qf{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Cs(e,n),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())}))}Ho(t,e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Cs(e,n),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="RemoteStore";class Hf{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{n.enqueueAndForget((async()=>{Te(this)&&(D(ge,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ea.add(4),await bn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Vr(f)})(this))}))})),this.Ra=new zf(n,s)}}async function Vr(r){if(Te(r))for(const t of r.da)await t(!0)}async function bn(r){for(const t of r.da)await t(!1)}function Uc(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ii(e)?si(e):$e(e).O_()&&ri(e,t))}function ni(r,t){const e=F(r),n=$e(e);e.Ia.delete(t),n.O_()&&Bc(e,t),e.Ia.size===0&&(n.O_()?n.L_():Te(e)&&e.Ra.set("Unknown"))}function ri(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$e(r).Y_(t)}function Bc(r,t){r.Va.Ue(t),$e(r).Z_(t)}function si(r){r.Va=new Fd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),$e(r).start(),r.Ra.ua()}function ii(r){return Te(r)&&!$e(r).x_()&&r.Ia.size>0}function Te(r){return F(r).Ea.size===0}function jc(r){r.Va=void 0}async function Gf(r){r.Ra.set("Online")}async function Kf(r){r.Ia.forEach(((t,e)=>{ri(r,t)}))}async function Wf(r,t){jc(r),ii(r)?(r.Ra.ha(t),si(r)):r.Ra.set("Unknown")}async function Qf(r,t,e){if(r.Ra.set("Online"),t instanceof Rc&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(r,t)}catch(n){D(ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await _r(r,n)}else if(t instanceof nr?r.Va.Ze(t):t instanceof wc?r.Va.st(t):r.Va.tt(t),!e.isEqual(L.min()))try{const n=await Mc(r.localStore);e.compareTo(n)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ia.get(f);g&&o.Ia.set(f,g.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const g=o.Ia.get(h);if(!g)return;o.Ia.set(h,g.withResumeToken(mt.EMPTY_BYTE_STRING,g.snapshotVersion)),Bc(o,h);const I=new Wt(g.target,h,f,g.sequenceNumber);ri(o,I)})),o.remoteSyncer.applyRemoteEvent(l)})(r,e)}catch(n){D(ge,"Failed to raise snapshot:",n),await _r(r,n)}}async function _r(r,t,e){if(!qe(t))throw t;r.Ea.add(1),await bn(r),r.Ra.set("Offline"),e||(e=()=>Mc(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(ge,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Vr(r)}))}function qc(r,t){return t().catch((e=>_r(r,e,t)))}async function Dr(r){const t=F(r),e=se(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:$s;for(;Xf(t);)try{const s=await Df(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,Yf(t,s)}catch(s){await _r(t,s)}$c(t)&&zc(t)}function Xf(r){return Te(r)&&r.Ta.length<10}function Yf(r,t){r.Ta.push(t);const e=se(r);e.O_()&&e.X_&&e.ea(t.mutations)}function $c(r){return Te(r)&&!se(r).x_()&&r.Ta.length>0}function zc(r){se(r).start()}async function Jf(r){se(r).ra()}async function Zf(r){const t=se(r);for(const e of r.Ta)t.ea(e.mutations)}async function tm(r,t,e){const n=r.Ta.shift(),s=Qs.from(n,t,e);await qc(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Dr(r)}async function em(r,t){t&&se(r).X_&&await(async function(n,s){if((function(a){return Od(a)&&a!==C.ABORTED})(s.code)){const o=n.Ta.shift();se(n).B_(),await qc(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Dr(n)}})(r,t),$c(r)&&zc(r)}async function da(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),D(ge,"RemoteStore received new credentials");const n=Te(e);e.Ea.add(3),await bn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Vr(e)}async function nm(r,t){const e=F(r);t?(e.Ea.delete(2),await Vr(e)):t||(e.Ea.add(2),await bn(e),e.Ra.set("Unknown"))}function $e(r){return r.ma||(r.ma=(function(e,n,s){const o=F(e);return o.sa(),new Bf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Xo:Gf.bind(null,r),t_:Kf.bind(null,r),r_:Wf.bind(null,r),H_:Qf.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),ii(r)?si(r):r.Ra.set("Unknown")):(await r.ma.stop(),jc(r))}))),r.ma}function se(r){return r.fa||(r.fa=(function(e,n,s){const o=F(e);return o.sa(),new jf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Jf.bind(null,r),r_:em.bind(null,r),ta:Zf.bind(null,r),na:tm.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Dr(r)):(await r.fa.stop(),r.Ta.length>0&&(D(ge,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,l=new oi(t,e,a,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(r,t){if(Bt("AsyncQueue",`${t}: ${r}`),qe(r))return new N(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static emptySet(t){return new be(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=un(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new be;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.ga=new Z(O.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):M(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Fe{constructor(t,e,n,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Fe(t,e,be.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class sm{constructor(){this.queries=ma(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=ma(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(n)}))})(this,new N(C.ABORTED,"Firestore shutting down"))}}function ma(){return new ye((r=>lc(r)),wr)}async function im(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(n=2):(o=new rm,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ai(a,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ci(e)}async function om(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function am(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(n=!0);a.wa=s}}n&&ci(e)}function cm(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);n.queries.delete(t)}function ci(r){r.Ca.forEach((t=>{t.next()}))}var Ns,pa;(pa=Ns||(Ns={})).Ma="default",pa.Cache="cache";class um{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Fe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.key=t}}class Gc{constructor(t){this.key=t}}class lm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=hc(t),this.tu=new be(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new fa,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((g,I)=>{const w=s.get(g),P=Rr(this.query,I)?I:null,k=!!w&&this.mutatedKeys.has(w.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;w&&P?w.data.isEqual(P.data)?k!==x&&(n.track({type:3,doc:P}),V=!0):this.su(w,P)||(n.track({type:2,doc:P}),V=!0,(h&&this.eu(P,h)>0||f&&this.eu(P,f)<0)&&(l=!0)):!w&&P?(n.track({type:0,doc:P}),V=!0):w&&!P&&(n.track({type:1,doc:w}),V=!0,(h||f)&&(l=!0)),V&&(P?(a=a.add(P),o=x?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{tu:a,iu:n,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((g,I)=>(function(P,k){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:V})}};return x(P)-x(k)})(g.type,I.type)||this.eu(g.doc,I.doc))),this.ou(n),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new Fe(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const e=[];return t.forEach((n=>{this.Xa.has(n)||e.push(new Gc(n))})),this.Xa.forEach((n=>{t.has(n)||e.push(new Hc(n))})),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ui="SyncEngine";class hm{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class dm{constructor(t){this.key=t,this.hu=!1}}class fm{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ye((l=>lc(l)),wr),this.Iu=new Map,this.Eu=new Set,this.du=new Z(O.comparator),this.Au=new Map,this.Ru=new Js,this.Vu={},this.mu=new Map,this.fu=Le.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mm(r,t,e=!0){const n=Jc(r);let s;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Kc(n,t,e,!0),s}async function pm(r,t){const e=Jc(r);await Kc(e,t,!0,!1)}async function Kc(r,t,e,n){const s=await Nf(r.localStore,Dt(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await gm(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Uc(r.remoteStore,s),l}async function gm(r,t,e,n,s){r.pu=(I,w,P)=>(async function(x,V,G,z){let K=V.view.ru(G);K.Cs&&(K=await aa(x.localStore,V.query,!1).then((({documents:E})=>V.view.ru(E,K))));const ct=z&&z.targetChanges.get(V.targetId),At=z&&z.targetMismatches.get(V.targetId)!=null,st=V.view.applyChanges(K,x.isPrimaryClient,ct,At);return _a(x,V.targetId,st.au),st.snapshot})(r,I,w,P);const o=await aa(r.localStore,t,!0),a=new lm(t,o.Qs),l=a.ru(o.documents),h=Pn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=a.applyChanges(l,r.isPrimaryClient,h);_a(r,e,f.au);const g=new hm(t,e,a);return r.Tu.set(t,g),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function _m(r,t,e){const n=F(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);if(o.length>1)return n.Iu.set(s.targetId,o.filter((a=>!wr(a,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vs(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&ni(n.remoteStore,s.targetId),ks(n,s.targetId)})).catch(je)):(ks(n,s.targetId),await Vs(n.localStore,s.targetId,!0))}async function ym(r,t){const e=F(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ni(e.remoteStore,n.targetId))}async function Em(r,t,e){const n=Sm(r);try{const s=await(function(a,l){const h=F(a),f=Y.now(),g=l.reduce(((P,k)=>P.add(k.key)),j());let I,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let k=jt(),x=j();return h.Ns.getEntries(P,g).next((V=>{k=V,k.forEach(((G,z)=>{z.isValidDocument()||(x=x.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,k))).next((V=>{I=V;const G=[];for(const z of l){const K=Vd(z,I.get(z.key).overlayedDocument);K!=null&&G.push(new Ee(z.key,K,nc(K.value.mapValue),Ft.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,G,l)})).next((V=>{w=V;const G=V.applyToLocalDocumentSet(I,x);return h.documentOverlayCache.saveOverlays(P,V.batchId,G)}))})).then((()=>({batchId:w.batchId,changes:fc(I)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new Z(B)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(n,s.batchId,e),await Vn(n,s.changes),await Dr(n.remoteStore)}catch(s){const o=ai(s,"Failed to persist write");e.reject(o)}}async function Wc(r,t){const e=F(r);try{const n=await bf(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?H(a.hu,14607):s.removedDocuments.size>0&&(H(a.hu,42227),a.hu=!1))})),await Vn(e,n,t)}catch(n){await je(n)}}function ga(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach(((g,I)=>{for(const w of I.Sa)w.va(l)&&(f=!0)})),f&&ci(h)})(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Tm(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),o=s&&s.key;if(o){let a=new Z(O.comparator);a=a.insert(o,yt.newNoDocument(o,L.min()));const l=j().add(o),h=new Pr(L.min(),new Map,new Z(B),a,l);await Wc(n,h),n.du=n.du.remove(o),n.Au.delete(t),li(n)}else await Vs(n.localStore,t,!1).then((()=>ks(n,t,e))).catch(je)}async function Im(r,t){const e=F(r),n=t.batch.batchId;try{const s=await Pf(e.localStore,t);Xc(e,n,null),Qc(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Vn(e,s)}catch(s){await je(s)}}async function vm(r,t,e){const n=F(r);try{const s=await(function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let g;return h.mutationQueue.lookupMutationBatch(f,l).next((I=>(H(I!==null,37113),g=I.keys(),h.mutationQueue.removeMutationBatch(f,I)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g))).next((()=>h.localDocuments.getDocuments(f,g)))}))})(n.localStore,t);Xc(n,t,e),Qc(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Vn(n,s)}catch(s){await je(s)}}function Qc(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function Xc(r,t,e){const n=F(r);let s=n.Vu[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function ks(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((n=>{r.Ru.containsKey(n)||Yc(r,n)}))}function Yc(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(ni(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),li(r))}function _a(r,t,e){for(const n of e)n instanceof Hc?(r.Ru.addReference(n.key,t),Am(r,n)):n instanceof Gc?(D(ui,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Yc(r,n.key)):M(19791,{wu:n})}function Am(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(D(ui,"New document in limbo: "+e),r.Eu.add(n),li(r))}function li(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new O(X.fromString(t)),n=r.fu.next();r.Au.set(n,new dm(e)),r.du=r.du.insert(e,n),Uc(r.remoteStore,new Wt(Dt(uc(e.path)),n,"TargetPurposeLimboResolution",Tr.ce))}}async function Vn(r,t,e){const n=F(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,h)=>{a.push(n.pu(h,t,e).then((f=>{var g;if((f||e)&&n.isPrimaryClient){const I=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:g.current;n.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){s.push(f);const I=ti.As(h.targetId,f);o.push(I)}})))})),await Promise.all(a),n.Pu.H_(s),await(async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>S.forEach(f,(w=>S.forEach(w.Es,(P=>g.persistence.referenceDelegate.addReference(I,w.targetId,P))).next((()=>S.forEach(w.ds,(P=>g.persistence.referenceDelegate.removeReference(I,w.targetId,P)))))))))}catch(I){if(!qe(I))throw I;D(ei,"Failed to update sequence numbers: "+I)}for(const I of f){const w=I.targetId;if(!I.fromCache){const P=g.Ms.get(w),k=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(k);g.Ms=g.Ms.insert(w,x)}}})(n.localStore,o))}async function wm(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){D(ui,"User change. New user:",t.toKey());const n=await Oc(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(C.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Vn(e,n.Ls)}}function Rm(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return j().add(n.key);{let s=j();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Jc(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tm.bind(null,t),t.Pu.H_=am.bind(null,t.eventManager),t.Pu.yu=cm.bind(null,t.eventManager),t}function Sm(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Im.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vm.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Cf(this.persistence,new wf,t.initialUser,this.serializer)}Cu(t){return new xc(Zs.mi,this.serializer)}Du(t){return new xf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Cm extends yr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){H(this.persistence.referenceDelegate instanceof gr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new uf(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new xc((n=>gr.mi(n,e)),this.serializer)}}class xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ga(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=wm.bind(null,this.syncEngine),await nm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new sm})()}createDatastore(t){const e=br(t.databaseInfo.databaseId),n=(function(o){return new Uf(o)})(t.databaseInfo);return(function(o,a,l,h){return new $f(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,o,a,l){return new Hf(n,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>ga(this.syncEngine,e,0)),(function(){return la.v()?new la:new Of})())}createSyncEngine(t,e){return(function(s,o,a,l,h,f,g){const I=new fm(s,o,a,l,h,f);return g&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=F(s);D(ge,"RemoteStore shutting down."),o.Ea.add(5),await bn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}xs.provider={build:()=>new xs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="FirestoreClient";class bm{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=js.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{D(ie,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(D(ie,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ai(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ds(r,t){r.asyncQueue.verifyOperationInProgress(),D(ie,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Oc(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function ya(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Vm(r);D(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>da(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>da(t.remoteStore,s))),r._onlineComponents=t}async function Vm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(ie,"Using user provided OfflineComponentProvider");try{await ds(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await ds(r,new yr)}}else D(ie,"Using default OfflineComponentProvider"),await ds(r,new Cm(void 0));return r._offlineComponents}async function Zc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(ie,"Using user provided OnlineComponentProvider"),await ya(r,r._uninitializedComponentsProvider._online)):(D(ie,"Using default OnlineComponentProvider"),await ya(r,new xs))),r._onlineComponents}function Dm(r){return Zc(r).then((t=>t.syncEngine))}async function Nm(r){const t=await Zc(r),e=t.eventManager;return e.onListen=mm.bind(null,t.syncEngine),e.onUnlisten=_m.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=pm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ym.bind(null,t.syncEngine),e}function km(r,t,e={}){const n=new Jt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,f){const g=new Pm({next:w=>{g.Nu(),a.enqueueAndForget((()=>om(o,I))),w.fromCache&&h.source==="server"?f.reject(new N(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),I=new um(l,g,{includeMetadataChanges:!0,qa:!0});return im(o,I)})(await Nm(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="firestore.googleapis.com",Ta=!0;class Ia{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eu,this.ssl=Ta}else this.host=t.host,this.ssl=t.ssl??Ta;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=kc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<af)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$h("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tu(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ia({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ia(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new kh;switch(n.type){case"firstParty":return new Lh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Ea.get(e);n&&(D("ComponentProvider","Removing Datastore"),Ea.delete(e),n.terminate())})(this),Promise.resolve()}}function xm(r,t,e,n={}){var f;r=En(r,Nr);const s=Fs(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},l=`${t}:${e}`;s&&(ol(`https://${l}`),ll("Firestore",!0)),o.host!==eu&&o.host!==l&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:n};if(!ir(h,a)&&(r._setSettings(h),n.mockUserToken)){let g,I;if(typeof n.mockUserToken=="string")g=n.mockUserToken,I=_t.MOCK_USER;else{g=al(n.mockUserToken,(f=r._app)==null?void 0:f.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new _t(w)}r._authCredentials=new xh(new za(g,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new kr(this.firestore,t,this._query)}}class ht{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Sn(e,ht._jsonSchema))return new ht(t,n||null,new O(X.fromString(e.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:rt("string",ht._jsonSchemaVersion),referencePath:rt("string")};class Zt extends kr{constructor(t,e,n){super(t,e,uc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new O(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function va(r,t,...e){if(r=gn(r),Ha("collection","path",t),r instanceof Nr){const n=X.fromString(t,...e);return Oo(n),new Zt(r,null,n)}{if(!(r instanceof ht||r instanceof Zt))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return Oo(n),new Zt(r.firestore,null,n)}}function Om(r,t,...e){if(r=gn(r),arguments.length===1&&(t=js.newId()),Ha("doc","path",t),r instanceof Nr){const n=X.fromString(t,...e);return xo(n),new ht(r,null,new O(n))}{if(!(r instanceof ht||r instanceof Zt))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return xo(n),new ht(r.firestore,r instanceof Zt?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="AsyncQueue";class wa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lc(this,"async_queue_retry"),this._c=()=>{const n=hs();n&&D(Aa,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Jt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!qe(t))throw t;D(Aa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,Bt("INTERNAL UNHANDLED ERROR: ",Ra(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=oi.createAndSchedule(this,t,e,n,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Ra(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ra(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class hi extends Nr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new wa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wa(t),this._firestoreClient=void 0,await t}}}function Mm(r,t){const e=typeof r=="object"?r:Th(),n=typeof r=="string"?r:ur,s=ph(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=sl("firestore");o&&xm(s,...o)}return s}function nu(r){if(r._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Lm(r),r._firestoreClient}function Lm(r){var n,s,o;const t=r._freezeSettings(),e=(function(l,h,f,g){return new td(l,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,tu(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new bm(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(mt.fromBase64String(t))}catch(e){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Sn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:rt("string",St._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(Sn(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:rt("string",kt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Sn(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new xt(t.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:rt("string",xt._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=/^__.*__$/;class Um{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}function su(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:r})}}class fi{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new fi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Er(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(su(this.Ac)&&Fm.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Bm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||br(t)}Cc(t,e,n,s=!1){return new fi({Ac:t,methodName:e,Dc:n,path:ft.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jm(r){const t=r._freezeSettings(),e=br(r._databaseId);return new Bm(r._databaseId,!!t.ignoreUndefinedProperties,e)}function qm(r,t,e,n,s,o={}){const a=r.Cc(o.merge||o.mergeFields?2:0,t,e,s);cu("Data must be an object, but it was:",a,n);const l=ou(n,a);let h,f;if(o.merge)h=new Ct(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const w=$m(t,I,e);if(!a.contains(w))throw new N(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Hm(g,w)||g.push(w)}h=new Ct(g),f=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,f=a.fieldTransforms;return new Um(new Rt(l),h,f)}function iu(r,t){if(au(r=gn(r)))return cu("Unsupported field value:",t,r),ou(r,t);if(r instanceof ru)return(function(n,s){if(!su(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(n,s){const o=[];let a=0;for(const l of n){let h=iu(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,t)}return(function(n,s){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Y.fromDate(n);return{timestampValue:pr(s.serializer,o)}}if(n instanceof Y){const o=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pr(s.serializer,o)}}if(n instanceof kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof St)return{bytesValue:Sc(s.serializer,n._byteString)};if(n instanceof ht){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ys(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof xt)return(function(a,l){return{mapValue:{fields:{[tc]:{stringValue:ec},[lr]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ws(l.serializer,f)}))}}}}}})(n,s);throw s.Sc(`Unsupported field value: ${qs(n)}`)})(r,t)}function ou(r,t){const e={};return Wa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(r,((n,s)=>{const o=iu(s,t.mc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function au(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Y||r instanceof kt||r instanceof St||r instanceof ht||r instanceof ru||r instanceof xt)}function cu(r,t,e){if(!au(e)||!Ga(e)){const n=qs(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function $m(r,t,e){if((t=gn(t))instanceof di)return t._internalPath;if(typeof t=="string")return uu(r,t);throw Er("Field path arguments must be of type string or ",r,!1,void 0,e)}const zm=new RegExp("[~\\*/\\[\\]]");function uu(r,t,e){if(t.search(zm)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new di(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Er(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new N(C.INVALID_ARGUMENT,l+r+h)}function Hm(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Gm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Gm extends lu{data(){return super.data()}}function hu(r,t){return typeof t=="string"?uu(r,t):t instanceof di?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wm{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return _e(t,((s,o)=>{n[s]=this.convertValue(o,e)})),n}convertVectorValue(t){var n,s,o;const e=(o=(s=(n=t.fields)==null?void 0:n[lr].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>et(a.doubleValue)));return new xt(e)}convertGeoPoint(t){return new kt(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=vr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=ee(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);H(Nc(n),9688,{name:t});const s=new vn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ve extends lu{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(hu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ve._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ve._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ve._jsonSchema={type:rt("string",Ve._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class rr extends Ve{data(t={}){return super.data(t)}}class De{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Yn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new rr(this._firestore,this._userDataWriter,n.key,n,new Yn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Yn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:Xm(l.type),doc:h,oldIndex:f,newIndex:g}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=De._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=js.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Xm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}De._jsonSchemaVersion="firestore/querySnapshot/1.0",De._jsonSchema={type:rt("string",De._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Ym extends Wm{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}function Sa(r){r=En(r,kr);const t=En(r.firestore,hi),e=nu(t),n=new Ym(t);return Km(r._query),km(e,r._query).then((s=>new De(t,n,r,s)))}function Jm(r,t,e){r=En(r,ht);const n=En(r.firestore,hi),s=Qm(r.converter,t);return Zm(n,[qm(jm(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Ft.none())])}function Zm(r,t){return(function(n,s){const o=new Jt;return n.asyncQueue.enqueueAndForget((async()=>Em(await Dm(n),s,o))),o.promise})(nu(r),t)}(function(t,e=!0){(function(s){Be=s})(Eh),ar(new _n("firestore",((n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new hi(new Oh(n.getProvider("auth-internal")),new Fh(a,n.getProvider("app-check-internal")),(function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(f.options.projectId,g)})(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Pe(Vo,Do,t),Pe(Vo,Do,"esm2020")})();var oe,Os,Ms;const J=class J extends HTMLElement{constructor(){super();_o(this,oe);this.attachShadow({mode:"open"})}static get SHAPES(){return Object.keys(J.SHAPE_DATA)}static shapeTag(e){return J.SHAPE_DATA[e].tag}static getUniqueRandomCardsAsHTML(e,n){if(e>this.COMBINATIONS.length)throw new Error(`Cannot get ${e} unique shape cards. Maximum is ${this.COMBINATIONS.length}.`);return J.COMBINATIONS.reduce((s,o)=>s.toSpliced(Math.floor(Math.random()*(s.length+1)),0,o),[]).slice(0,e).reduce((s,o)=>{for(let a=0;a<(n?2:1);++a)s.splice(Math.floor(Math.random()*(s.length+1)),0,o);return s},[]).map(([s,o])=>`<shape-card type="${s}" colour="${o}"></shape-card>`).join("")}connectedCallback(){this.shadowRoot.appendChild(document.getElementById("shape-card-template").content.cloneNode(!0)),an(this,oe,Os).call(this,null,this.getAttribute("type")),an(this,oe,Ms).call(this,this.getAttribute("colour")),this.style.setProperty("--card-width",J.WIDTH),this.style.setProperty("--card-height",J.HEIGHT),this.style.setProperty("--card-border",J.BORDER)}attributeChangedCallback(e,n,s){this.shadowRoot&&(e=="type"?an(this,oe,Os).call(this,n,s):e=="colour"&&an(this,oe,Ms).call(this,s))}isFaceUp(){return this.shadowRoot.querySelector(".card").classList.contains("card-face-up")}flip(){const e=this.shadowRoot.querySelector(".card");e.classList.toggle("card-face-down"),e.classList.toggle("card-face-up")}};oe=new WeakSet,Os=function(e,n){var s,o;if(n&&!(n in J.SHAPE_DATA))throw new Error(`Invalid shape type attribute ${newType}. Expected one of ${J.SHAPES.join(", ")}.`);e&&((s=this.shadowRoot.querySelector(J.shapeTag(e)))==null||s.setAttribute("fill-opacity","0")),n&&((o=this.shadowRoot.querySelector(J.shapeTag(n)))==null||o.setAttribute("fill-opacity","1"))},Ms=function(e){var n;if(e&&!J.COLOURS.includes(e))throw new Error(`Invalid colour attribute ${e}. Expected one of ${J.COLOURS.join(", ")}.`);e&&((n=this.shadowRoot.querySelector(J.shapeTag(this.getAttribute("type"))))==null||n.setAttribute("fill",e))},Lt(J,"observedAttributes",["type","colour"]),Lt(J,"HEIGHT","100px"),Lt(J,"WIDTH","100px"),Lt(J,"BORDER","1px"),Lt(J,"SHAPE_DATA",{circle:{tag:"circle"},square:{tag:"rect"},triangle:{tag:"polygon"}}),Lt(J,"COLOURS",["red","green","blue","yellow","orange","purple"]),Lt(J,"COMBINATIONS",J.SHAPES.map(e=>J.COLOURS.map(n=>[e,n])).flat());let Ne=J;customElements.define("shape-card",Ne);console.log("rememberthecard.js loaded");class du extends HTMLElement{constructor(){console.log("RememberTheCard constructor called"),super(),this.attachShadow({mode:"open"}),this.flippedCards=[],this.matchedPairs=0,this.isProcessing=!1,this.clickCount=0,this.totalPairs=0}connectedCallback(){console.log("RememberTheCard connectedCallback called");const t=this.getAttribute("size")||"3x4";this.initializeGame(t)}attributeChangedCallback(t,e,n){t==="size"&&this.shadowRoot&&e!==n&&this.initializeGame(n)}initializeGame(t){console.log("initializeGame called with size:",t);const[e,n]=t.toLowerCase().split("x").map(P=>parseInt(P.trim()));if(console.log("Parsed rows:",e,"cols:",n),isNaN(e)||isNaN(n))throw new Error(`Invalid size format: ${t}. Expected format: 'rows x cols' (e.g., '3x4' or '3 x 4')`);const s=e*n;if(s%2!==0)throw new Error(`Grid size must contain an even number of cards. ${e}x${n} = ${s} is odd.`);this.totalPairs=s/2,this.matchedPairs=0,this.flippedCards=[],this.isProcessing=!1,this.clickCount=0,this.shadowRoot.innerHTML="";const o=document.createElement("style");o.textContent=`
            :host {
                display: block;
            }
            .game-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px;
            }
            .board {
                display: grid;
                grid-template-columns: repeat(${n}, ${Ne.WIDTH});
                grid-template-rows: repeat(${e}, ${Ne.HEIGHT});
                gap: 10px;
            }
            .message {
                font-family: Arial, sans-serif;
                font-size: 24px;
                font-weight: bold;
                color: black;
                min-height: 30px;
            }
            .button-container {
                display: flex;
                gap: 10px;
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                background-color: #afb2afff;
                color: white;
                border: none;
                border-radius: 5px;
                display: none;
            }
            button.show {
                display: block;
            }
            
            button:hover{
                background-color: #525856ff;
            }
            .stats-display {
                font-family: Arial, sans-serif;
                font-size: 18px;
                color: #333;
                margin-top: 10px;
                min-height: 25px;
            }
        `,this.shadowRoot.appendChild(o);const a=document.createElement("div");a.className="game-container";const l=document.createElement("div");l.className="message",l.id="message",l.setAttribute("aria-live","polite"),a.appendChild(l);const h=document.createElement("div");h.className="board",h.innerHTML=Ne.getUniqueRandomCardsAsHTML(this.totalPairs,!0),a.appendChild(h);const f=document.createElement("div");f.className="button-container";const g=document.createElement("button");g.textContent="Play Again",g.setAttribute("aria-label","Start a new game"),g.addEventListener("click",()=>this.initializeGame(t)),f.appendChild(g);const I=document.createElement("button");I.textContent="Show Average Clicks",I.id="avg-button",I.setAttribute("aria-label","Display average clicks across all games"),I.addEventListener("click",()=>this.showAverageClicks()),f.appendChild(I),a.appendChild(f);const w=document.createElement("div");w.className="stats-display",w.id="stats-display",a.appendChild(w),this.shadowRoot.appendChild(a),console.log("Shadow root populated, container has",a.children.length,"children"),console.log("Board has",h.children.length,"shape-card elements"),this.shadowRoot.querySelectorAll("shape-card").forEach(P=>{P.addEventListener("click",k=>this.handleCardClick(k.target))}),console.log("initializeGame completed")}handleCardClick(t){this.isProcessing||t.isFaceUp()||t.classList.contains("matched")||(t.flip(),this.flippedCards.push(t),this.clickCount++,this.updateStats(),t.setAttribute("aria-label",`Card flipped, ${t.getAttribute("type")} ${t.getAttribute("colour")}`),this.flippedCards.length===2&&(this.isProcessing=!0,this.checkMatch()))}checkMatch(){const[t,e]=this.flippedCards;t.getAttribute("type")===e.getAttribute("type")&&t.getAttribute("colour")===e.getAttribute("colour")?(t.classList.add("matched"),e.classList.add("matched"),this.matchedPairs++,this.updateStats(),this.flippedCards=[],this.isProcessing=!1,this.matchedPairs===this.totalPairs&&(this.showWinMessage(),this.saveGameResult())):setTimeout(()=>{t.flip(),e.flip(),this.flippedCards=[],this.isProcessing=!1},1e3)}updateStats(){const t=this.shadowRoot.getElementById("click-count"),e=this.shadowRoot.getElementById("match-count");t&&(t.textContent=this.clickCount),e&&(e.textContent=this.matchedPairs)}showWinMessage(){const t=this.shadowRoot.getElementById("message"),e=this.shadowRoot.querySelectorAll("button");t&&(t.textContent=`You won in ${this.clickCount} clicks!`,t.setAttribute("aria-live","assertive")),e.forEach(n=>n.classList.add("show"))}async saveGameResult(){console.log("saveGameResult called, clicks:",this.clickCount);try{const n=`game${(await Sa(va(fs,"gameResults"))).size+1}`;console.log("Attempting to save with ID:",n),await Jm(Om(fs,"gameResults",n),{clicks:this.clickCount,timestamp:new Date,boardSize:this.getAttribute("size")}),console.log("Game result saved successfully with ID:",n)}catch(t){console.error("Error saving game result:",t)}}async showAverageClicks(){console.log("showAverageClicks called");const t=this.shadowRoot.getElementById("stats-display");t.textContent="Loading averages...";try{console.log("Fetching game results from Firestore...");const e=await Sa(va(fs,"gameResults"));if(console.log("Query snapshot received, empty?",e.empty),console.log("Number of documents:",e.size),e.empty){console.log("No results found"),t.textContent="No game results found yet.";return}let n=0,s=0;e.forEach(a=>{const l=a.data();console.log("Document data:",l),n+=l.clicks,s++}),console.log("Total clicks:",n,"Game count:",s);const o=(n/s).toFixed(2);console.log("Calculated average:",o),t.textContent=`Average clicks across ${s} games: ${o}`}catch(e){console.error("Error fetching game results:",e),console.error("Error details:",e.message,e.code),t.textContent="Error loading statistics."}}}Lt(du,"observedAttributes",["size"]);customElements.define("remember-the-card",du);const tp={apiKey:"AIzaSyDF3szs9NZ7P5xDgFA9lAqLouOZ3Of2iZg",authDomain:"ca2-rwat-74423.firebaseapp.com",projectId:"ca2-rwat-74423",storageBucket:"ca2-rwat-74423.firebasestorage.app",messagingSenderId:"296399841028",appId:"1:296399841028:web:f6228bc22dee3331529251",measurementId:"G-K2TMN2T3VX"},ep=xa(tp),fs=Mm(ep);console.log("Firebase initialized successfully");
