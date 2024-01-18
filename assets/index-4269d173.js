(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function J6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const e1={},j2=[],E1=()=>{},qo=()=>!1,Oo=/^on[^a-z]/,S4=c=>Oo.test(c),c0=c=>c.startsWith("onUpdate:"),h1=Object.assign,a0=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Uo=Object.prototype.hasOwnProperty,G=(c,a)=>Uo.call(c,a),q=Array.isArray,Z2=c=>y4(c)==="[object Map]",p7=c=>y4(c)==="[object Set]",O=c=>typeof c=="function",l1=c=>typeof c=="string",w4=c=>typeof c=="symbol",r1=c=>c!==null&&typeof c=="object",V7=c=>(r1(c)||O(c))&&O(c.then)&&O(c.catch),M7=Object.prototype.toString,y4=c=>M7.call(c),$o=c=>y4(c).slice(8,-1),V3=c=>y4(c)==="[object Object]",e0=c=>l1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,o4=J6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Io=/-(\w)/g,K1=k4(c=>c.replace(Io,(a,e)=>e?e.toUpperCase():"")),Go=/\B([A-Z])/g,s3=k4(c=>c.replace(Go,"-$1").toLowerCase()),A4=k4(c=>c.charAt(0).toUpperCase()+c.slice(1)),o6=k4(c=>c?`on${A4(c)}`:""),A2=(c,a)=>!Object.is(c,a),t6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},u4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Wo=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let $8;const g6=()=>$8||($8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function r0(c){if(q(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=l1(r)?Yo(r):r0(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(l1(c)||r1(c))return c}const jo=/;(?![^(]*\))/g,Zo=/:([^]+)/,Ko=/\/\*[^]*?\*\//g;function Yo(c){const a={};return c.replace(Ko,"").split(jo).forEach(e=>{if(e){const r=e.split(Zo);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function i0(c){let a="";if(l1(c))a=c;else if(q(c))for(let e=0;e<c.length;e++){const r=i0(c[e]);r&&(a+=r+" ")}else if(r1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qo=J6(Xo);function C7(c){return!!c||c===""}const Jo=c=>l1(c)?c:c==null?"":q(c)||r1(c)&&(c.toString===M7||!O(c.toString))?JSON.stringify(c,d7,2):String(c),d7=(c,a)=>a&&a.__v_isRef?d7(c,a.value):Z2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i])=>(e[`${r} =>`]=i,e),{})}:p7(a)?{[`Set(${a.size})`]:[...a.values()]}:r1(a)&&!q(a)&&!V3(a)?String(a):a;let A1;class L7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=A1,!a&&A1&&(this.index=(A1.scopes||(A1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=A1;try{return A1=this,a()}finally{A1=e}}}on(){A1=this}off(){A1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ct(c){return new L7(c)}function at(c,a=A1){a&&a.active&&a.effects.push(c)}function et(){return A1}const s0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},g7=c=>(c.w&u2)>0,x7=c=>(c.n&u2)>0,rt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=u2},it=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];g7(i)&&!x7(i)?i.delete(c):a[e++]=i,i.w&=~u2,i.n&=~u2}a.length=e}},x6=new WeakMap;let H3=0,u2=1;const b6=30;let T1;const y2=Symbol(""),N6=Symbol("");class n0{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,at(this,r)}run(){if(!this.active)return this.fn();let a=T1,e=h2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=T1,T1=this,h2=!0,u2=1<<++H3,H3<=b6?rt(this):I8(this),this.fn()}finally{H3<=b6&&it(this),u2=1<<--H3,T1=this.parent,h2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){T1===this?this.deferStop=!0:this.active&&(I8(this),this.onStop&&this.onStop(),this.active=!1)}}function I8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let h2=!0;const b7=[];function n3(){b7.push(h2),h2=!1}function f3(){const c=b7.pop();h2=c===void 0?!0:c}function g1(c,a,e){if(h2&&T1){let r=x6.get(c);r||x6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=s0()),N7(i)}}function N7(c,a){let e=!1;H3<=b6?x7(c)||(c.n|=u2,e=!g7(c)):e=!c.has(T1),e&&(c.add(T1),T1.deps.push(c))}function a2(c,a,e,r,i,s){const n=x6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&q(c)){const l=Number(r);n.forEach((t,o)=>{(o==="length"||!w4(o)&&o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":q(c)?e0(e)&&f.push(n.get("length")):(f.push(n.get(y2)),Z2(c)&&f.push(n.get(N6)));break;case"delete":q(c)||(f.push(n.get(y2)),Z2(c)&&f.push(n.get(N6)));break;case"set":Z2(c)&&f.push(n.get(y2));break}if(f.length===1)f[0]&&S6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);S6(s0(l))}}function S6(c,a){const e=q(c)?c:[...c];for(const r of e)r.computed&&G8(r);for(const r of e)r.computed||G8(r)}function G8(c,a){(c!==T1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const st=J6("__proto__,__v_isRef,__isVue"),S7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(w4)),W8=nt();function nt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=W(this);for(let s=0,n=this.length;s<n;s++)g1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){n3();const r=W(this)[a].apply(this,e);return f3(),r}}),c}function ft(c){const a=W(this);return g1(a,"has",c),a.hasOwnProperty(c)}class w7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const i=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw"&&r===(i?s?Ct:P7:s?A7:k7).get(a))return a;const n=q(a);if(!i){if(n&&G(W8,e))return Reflect.get(W8,e,r);if(e==="hasOwnProperty")return ft}const f=Reflect.get(a,e,r);return(w4(e)?S7.has(e):st(e))||(i||g1(a,"get",e),s)?f:p1(f)?n&&e0(e)?f:f.value:r1(f)?i?F7(f):T4(f):f}}class y7 extends w7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(J2(s)&&p1(s)&&!p1(r))return!1;if(!this._shallow&&(!p4(r)&&!J2(r)&&(s=W(s),r=W(r)),!q(a)&&p1(s)&&!p1(r)))return s.value=r,!0;const n=q(a)&&e0(e)?Number(e)<a.length:G(a,e),f=Reflect.set(a,e,r,i);return a===W(i)&&(n?A2(r,s)&&a2(a,"set",e,r):a2(a,"add",e,r)),f}deleteProperty(a,e){const r=G(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&a2(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!w4(e)||!S7.has(e))&&g1(a,"has",e),r}ownKeys(a){return g1(a,"iterate",q(a)?"length":y2),Reflect.ownKeys(a)}}class lt extends w7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const ot=new y7,tt=new lt,mt=new y7(!0),f0=c=>c,P4=c=>Reflect.getPrototypeOf(c);function Z3(c,a,e=!1,r=!1){c=c.__v_raw;const i=W(c),s=W(a);e||(A2(a,s)&&g1(i,"get",a),g1(i,"get",s));const{has:n}=P4(i),f=r?f0:e?m0:N3;if(n.call(i,a))return f(c.get(a));if(n.call(i,s))return f(c.get(s));c!==i&&c.get(a)}function K3(c,a=!1){const e=this.__v_raw,r=W(e),i=W(c);return a||(A2(c,i)&&g1(r,"has",c),g1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function Y3(c,a=!1){return c=c.__v_raw,!a&&g1(W(c),"iterate",y2),Reflect.get(c,"size",c)}function j8(c){c=W(c);const a=W(this);return P4(a).has.call(a,c)||(a.add(c),a2(a,"add",c,c)),this}function Z8(c,a){a=W(a);const e=W(this),{has:r,get:i}=P4(e);let s=r.call(e,c);s||(c=W(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?A2(a,n)&&a2(e,"set",c,a):a2(e,"add",c,a),this}function K8(c){const a=W(this),{has:e,get:r}=P4(a);let i=e.call(a,c);i||(c=W(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&a2(a,"delete",c,void 0),s}function Y8(){const c=W(this),a=c.size!==0,e=c.clear();return a&&a2(c,"clear",void 0,void 0),e}function X3(c,a){return function(r,i){const s=this,n=s.__v_raw,f=W(n),l=a?f0:c?m0:N3;return!c&&g1(f,"iterate",y2),n.forEach((t,o)=>r.call(i,l(t),l(o),s))}}function Q3(c,a,e){return function(...r){const i=this.__v_raw,s=W(i),n=Z2(s),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=i[c](...r),o=e?f0:a?m0:N3;return!a&&g1(s,"iterate",l?N6:y2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:f?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function o2(c){return function(...a){return c==="delete"?!1:this}}function zt(){const c={get(s){return Z3(this,s)},get size(){return Y3(this)},has:K3,add:j8,set:Z8,delete:K8,clear:Y8,forEach:X3(!1,!1)},a={get(s){return Z3(this,s,!1,!0)},get size(){return Y3(this)},has:K3,add:j8,set:Z8,delete:K8,clear:Y8,forEach:X3(!1,!0)},e={get(s){return Z3(this,s,!0)},get size(){return Y3(this,!0)},has(s){return K3.call(this,s,!0)},add:o2("add"),set:o2("set"),delete:o2("delete"),clear:o2("clear"),forEach:X3(!0,!1)},r={get(s){return Z3(this,s,!0,!0)},get size(){return Y3(this,!0)},has(s){return K3.call(this,s,!0)},add:o2("add"),set:o2("set"),delete:o2("delete"),clear:o2("clear"),forEach:X3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=Q3(s,!1,!1),e[s]=Q3(s,!0,!1),a[s]=Q3(s,!1,!0),r[s]=Q3(s,!0,!0)}),[c,e,a,r]}const[vt,ht,Ht,ut]=zt();function l0(c,a){const e=a?c?ut:Ht:c?ht:vt;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(G(e,i)&&i in r?e:r,i,s)}const pt={get:l0(!1,!1)},Vt={get:l0(!1,!0)},Mt={get:l0(!0,!1)},k7=new WeakMap,A7=new WeakMap,P7=new WeakMap,Ct=new WeakMap;function dt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lt(c){return c.__v_skip||!Object.isExtensible(c)?0:dt($o(c))}function T4(c){return J2(c)?c:o0(c,!1,ot,pt,k7)}function T7(c){return o0(c,!1,mt,Vt,A7)}function F7(c){return o0(c,!0,tt,Mt,P7)}function o0(c,a,e,r,i){if(!r1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=Lt(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return i.set(c,f),f}function K2(c){return J2(c)?K2(c.__v_raw):!!(c&&c.__v_isReactive)}function J2(c){return!!(c&&c.__v_isReadonly)}function p4(c){return!!(c&&c.__v_isShallow)}function R7(c){return K2(c)||J2(c)}function W(c){const a=c&&c.__v_raw;return a?W(a):c}function t0(c){return u4(c,"__v_skip",!0),c}const N3=c=>r1(c)?T4(c):c,m0=c=>r1(c)?F7(c):c;function B7(c){h2&&T1&&(c=W(c),N7(c.dep||(c.dep=s0())))}function _7(c,a){c=W(c);const e=c.dep;e&&S6(e)}function p1(c){return!!(c&&c.__v_isRef===!0)}function z0(c){return E7(c,!1)}function gt(c){return E7(c,!0)}function E7(c,a){return p1(c)?c:new xt(c,a)}class xt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:W(a),this._value=e?a:N3(a)}get value(){return B7(this),this._value}set value(a){const e=this.__v_isShallow||p4(a)||J2(a);a=e?a:W(a),A2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:N3(a),_7(this))}}function Y2(c){return p1(c)?c.value:c}const bt={get:(c,a,e)=>Y2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return p1(i)&&!p1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function D7(c){return K2(c)?c:new Proxy(c,bt)}class Nt{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new n0(a,()=>{this._dirty||(this._dirty=!0,_7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=W(this);return B7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function St(c,a,e=!1){let r,i;const s=O(c);return s?(r=c,i=E1):(r=c.get,i=c.set),new Nt(r,i,s||!i,e)}function H2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){F4(s,a,e)}return i}function D1(c,a,e,r){if(O(c)){const s=H2(c,a,e,r);return s&&V7(s)&&s.catch(n=>{F4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(D1(c[s],a,e,r));return i}function F4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,f=e;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}s=s.parent}const l=a.appContext.config.errorHandler;if(l){H2(l,null,10,[c,n,f]);return}}wt(c,e,i,r)}function wt(c,a,e,r=!0){console.error(c)}let S3=!1,w6=!1;const u1=[];let j1=0;const X2=[];let J1=null,b2=0;const q7=Promise.resolve();let v0=null;function V4(c){const a=v0||q7;return c?a.then(this?c.bind(this):c):a}function yt(c){let a=j1+1,e=u1.length;for(;a<e;){const r=a+e>>>1,i=u1[r],s=w3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function h0(c){(!u1.length||!u1.includes(c,S3&&c.allowRecurse?j1+1:j1))&&(c.id==null?u1.push(c):u1.splice(yt(c.id),0,c),O7())}function O7(){!S3&&!w6&&(w6=!0,v0=q7.then($7))}function kt(c){const a=u1.indexOf(c);a>j1&&u1.splice(a,1)}function At(c){q(c)?X2.push(...c):(!J1||!J1.includes(c,c.allowRecurse?b2+1:b2))&&X2.push(c),O7()}function X8(c,a=S3?j1+1:0){for(;a<u1.length;a++){const e=u1[a];e&&e.pre&&(u1.splice(a,1),a--,e())}}function U7(c){if(X2.length){const a=[...new Set(X2)];if(X2.length=0,J1){J1.push(...a);return}for(J1=a,J1.sort((e,r)=>w3(e)-w3(r)),b2=0;b2<J1.length;b2++)J1[b2]();J1=null,b2=0}}const w3=c=>c.id==null?1/0:c.id,Pt=(c,a)=>{const e=w3(c)-w3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function $7(c){w6=!1,S3=!0,u1.sort(Pt);const a=E1;try{for(j1=0;j1<u1.length;j1++){const e=u1[j1];e&&e.active!==!1&&H2(e,null,14)}}finally{j1=0,u1.length=0,U7(),S3=!1,v0=null,(u1.length||X2.length)&&$7()}}function Tt(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||e1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||e1;h&&(i=e.map(u=>l1(u)?u.trim():u)),z&&(i=e.map(Wo))}let f,l=r[f=o6(a)]||r[f=o6(K1(a))];!l&&s&&(l=r[f=o6(s3(a))]),l&&D1(l,c,6,i);const t=r[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,D1(t,c,6,i)}}function I7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},f=!1;if(!O(c)){const l=t=>{const o=I7(t,a,!0);o&&(f=!0,h1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!s&&!f?(r1(c)&&r.set(c,null),null):(q(s)?s.forEach(l=>n[l]=null):h1(n,s),r1(c)&&r.set(c,n),n)}function R4(c,a){return!c||!S4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,s3(a))||G(c,a))}let R1=null,B4=null;function M4(c){const a=R1;return R1=c,B4=c&&c.type.__scopeId||null,a}function H0(c){B4=c}function u0(){B4=null}function G7(c,a=R1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&l5(-1);const s=M4(a);let n;try{n=c(...i)}finally{M4(s),r._d&&l5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function m6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:S,inheritAttrs:w}=c;let B,M;const d=M4(c);try{if(e.shapeFlag&4){const y=i||r;B=W1(o.call(y,y,z,s,u,h,S)),M=l}else{const y=a;B=W1(y.length>1?y(s,{attrs:l,slots:f,emit:t}):y(s,null)),M=a.props?l:Ft(l)}}catch(y){d3.length=0,F4(y,c,1),B=n1(P2)}let R=B;if(M&&w!==!1){const y=Object.keys(M),{shapeFlag:$}=R;y.length&&$&7&&(n&&y.some(c0)&&(M=Rt(M,n)),R=c3(R,M))}return e.dirs&&(R=c3(R),R.dirs=R.dirs?R.dirs.concat(e.dirs):e.dirs),e.transition&&(R.transition=e.transition),B=R,M4(d),B}const Ft=c=>{let a;for(const e in c)(e==="class"||e==="style"||S4(e))&&((a||(a={}))[e]=c[e]);return a},Rt=(c,a)=>{const e={};for(const r in c)(!c0(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Bt(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:f,patchFlag:l}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?Q8(r,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!R4(t,h))return!0}}}else return(i||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?Q8(r,n,t):!0:!!n;return!1}function Q8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!R4(e,s))return!0}return!1}function _t({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const W7="components";function p0(c,a){return Dt(W7,c,!0,a)||c}const Et=Symbol.for("v-ndc");function Dt(c,a,e=!0,r=!1){const i=R1||z1;if(i){const s=i.type;if(c===W7){const f=Tm(s,!1);if(f&&(f===a||f===K1(a)||f===A4(K1(a))))return s}const n=J8(i[c]||s[c],a)||J8(i.appContext[c],a);return!n&&r?s:n}}function J8(c,a){return c&&(c[a]||c[K1(a)]||c[A4(K1(a))])}const qt=c=>c.__isSuspense;function Ot(c,a){a&&a.pendingBranch?q(c)?a.effects.push(...c):a.effects.push(c):At(c)}const J3={};function M3(c,a,e){return j7(c,a,e)}function j7(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=e1){var f;const l=et()===((f=z1)==null?void 0:f.scope)?z1:null;let t,o=!1,z=!1;if(p1(c)?(t=()=>c.value,o=p4(c)):K2(c)?(t=()=>c,r=!0):q(c)?(z=!0,o=c.some(y=>K2(y)||p4(y)),t=()=>c.map(y=>{if(p1(y))return y.value;if(K2(y))return I2(y);if(O(y))return H2(y,l,2)})):O(c)?a?t=()=>H2(c,l,2):t=()=>{if(!(l&&l.isUnmounted))return h&&h(),D1(c,l,3,[u])}:t=E1,a&&r){const y=t;t=()=>I2(y())}let h,u=y=>{h=d.onStop=()=>{H2(y,l,4)}},S;if(k3)if(u=E1,a?e&&D1(a,l,3,[t(),z?[]:void 0,u]):t(),i==="sync"){const y=Bm();S=y.__watcherHandles||(y.__watcherHandles=[])}else return E1;let w=z?new Array(c.length).fill(J3):J3;const B=()=>{if(d.active)if(a){const y=d.run();(r||o||(z?y.some(($,Q)=>A2($,w[Q])):A2(y,w)))&&(h&&h(),D1(a,l,3,[y,w===J3?void 0:z&&w[0]===J3?[]:w,u]),w=y)}else d.run()};B.allowRecurse=!!a;let M;i==="sync"?M=B:i==="post"?M=()=>L1(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),M=()=>h0(B));const d=new n0(t,M);a?e?B():w=d.run():i==="post"?L1(d.run.bind(d),l&&l.suspense):d.run();const R=()=>{d.stop(),l&&l.scope&&a0(l.scope.effects,d)};return S&&S.push(R),R}function Ut(c,a,e){const r=this.proxy,i=l1(c)?c.includes(".")?Z7(r,c):()=>r[c]:c.bind(r,r);let s;O(a)?s=a:(s=a.handler,e=a);const n=z1;a3(this);const f=j7(i,s.bind(r),e);return n?a3(n):k2(),f}function Z7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function I2(c,a){if(!r1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),p1(c))I2(c.value,a);else if(q(c))for(let e=0;e<c.length;e++)I2(c[e],a);else if(p7(c)||Z2(c))c.forEach(e=>{I2(e,a)});else if(V3(c))for(const e in c)I2(c[e],a);return c}function L2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const f=i[n];s&&(f.oldValue=s[n].value);let l=f.dir[r];l&&(n3(),D1(l,e,8,[c.el,f,c,a]),f3())}}/*! #__NO_SIDE_EFFECTS__ */function C2(c,a){return O(c)?(()=>h1({name:c.name},a,{setup:c}))():c}const t4=c=>!!c.type.__asyncLoader,K7=c=>c.type.__isKeepAlive;function $t(c,a){Y7(c,"a",a)}function It(c,a){Y7(c,"da",a)}function Y7(c,a,e=z1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(_4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)K7(i.parent.vnode)&&Gt(r,a,e,i),i=i.parent}}function Gt(c,a,e,r){const i=_4(a,c,r,!0);X7(()=>{a0(r[a],i)},e)}function _4(c,a,e=z1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;n3(),a3(e);const f=D1(a,e,c,n);return k2(),f3(),f});return r?i.unshift(s):i.push(s),s}}const s2=c=>(a,e=z1)=>(!k3||c==="sp")&&_4(c,(...r)=>a(...r),e),Wt=s2("bm"),jt=s2("m"),Zt=s2("bu"),Kt=s2("u"),Yt=s2("bum"),X7=s2("um"),Xt=s2("sp"),Qt=s2("rtg"),Jt=s2("rtc");function cm(c,a=z1){_4("ec",c,a)}function am(c,a,e,r){let i;const s=e&&e[r];if(q(c)||l1(c)){i=new Array(c.length);for(let n=0,f=c.length;n<f;n++)i[n]=a(c[n],n,void 0,s&&s[n])}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s&&s[n])}else if(r1(c))if(c[Symbol.iterator])i=Array.from(c,(n,f)=>a(n,f,void 0,s&&s[f]));else{const n=Object.keys(c);i=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];i[f]=a(c[t],t,f,s&&s[f])}}else i=[];return e&&(e[r]=i),i}const y6=c=>c?o9(c)?L0(c)||c.proxy:y6(c.parent):null,C3=h1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>y6(c.parent),$root:c=>y6(c.root),$emit:c=>c.emit,$options:c=>V0(c),$forceUpdate:c=>c.f||(c.f=()=>h0(c.update)),$nextTick:c=>c.n||(c.n=V4.bind(c.proxy)),$watch:c=>Ut.bind(c)}),z6=(c,a)=>c!==e1&&!c.__isScriptSetup&&G(c,a),em={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(z6(r,a))return n[a]=1,r[a];if(i!==e1&&G(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&G(t,a))return n[a]=3,s[a];if(e!==e1&&G(e,a))return n[a]=4,e[a];k6&&(n[a]=0)}}const o=C3[a];let z,h;if(o)return a==="$attrs"&&g1(c,"get",a),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==e1&&G(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,G(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return z6(i,a)?(i[a]=e,!0):r!==e1&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let f;return!!e[n]||c!==e1&&G(c,n)||z6(a,n)||(f=s[0])&&G(f,n)||G(r,n)||G(C3,n)||G(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function c5(c){return q(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let k6=!0;function rm(c){const a=V0(c),e=c.proxy,r=c.ctx;k6=!1,a.beforeCreate&&a5(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:S,activated:w,deactivated:B,beforeDestroy:M,beforeUnmount:d,destroyed:R,unmounted:y,render:$,renderTracked:Q,renderTriggered:i1,errorCaptured:x1,serverPrefetch:V1,expose:w1,inheritAttrs:f2,components:d2,directives:U1,filters:m3}=a;if(t&&im(t,r,null),n)for(const X in n){const j=n[X];O(j)&&(r[X]=j.bind(e))}if(i){const X=i.call(e,e);r1(X)&&(c.data=T4(X))}if(k6=!0,s)for(const X in s){const j=s[X],Y1=O(j)?j.bind(e,e):O(j.get)?j.get.bind(e,e):E1,l2=!O(j)&&O(j.set)?j.set.bind(e):E1,$1=m1({get:Y1,set:l2});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>$1.value,set:C1=>$1.value=C1})}if(f)for(const X in f)Q7(f[X],r,e,X);if(l){const X=O(l)?l.call(e):l;Reflect.ownKeys(X).forEach(j=>{m4(j,X[j])})}o&&a5(o,c,"c");function t1(X,j){q(j)?j.forEach(Y1=>X(Y1.bind(e))):j&&X(j.bind(e))}if(t1(Wt,z),t1(jt,h),t1(Zt,u),t1(Kt,S),t1($t,w),t1(It,B),t1(cm,x1),t1(Jt,Q),t1(Qt,i1),t1(Yt,d),t1(X7,y),t1(Xt,V1),q(w1))if(w1.length){const X=c.exposed||(c.exposed={});w1.forEach(j=>{Object.defineProperty(X,j,{get:()=>e[j],set:Y1=>e[j]=Y1})})}else c.exposed||(c.exposed={});$&&c.render===E1&&(c.render=$),f2!=null&&(c.inheritAttrs=f2),d2&&(c.components=d2),U1&&(c.directives=U1)}function im(c,a,e=E1){q(c)&&(c=A6(c));for(const r in c){const i=c[r];let s;r1(i)?"default"in i?s=q1(i.from||r,i.default,!0):s=q1(i.from||r):s=q1(i),p1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function a5(c,a,e){D1(q(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function Q7(c,a,e,r){const i=r.includes(".")?Z7(e,r):()=>e[r];if(l1(c)){const s=a[c];O(s)&&M3(i,s)}else if(O(c))M3(i,c.bind(e));else if(r1(c))if(q(c))c.forEach(s=>Q7(s,a,e,r));else{const s=O(c.handler)?c.handler.bind(e):a[c.handler];O(s)&&M3(i,s,c)}}function V0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,f=s.get(a);let l;return f?l=f:!i.length&&!e&&!r?l=a:(l={},i.length&&i.forEach(t=>C4(l,t,n,!0)),C4(l,a,n)),r1(a)&&s.set(a,l),l}function C4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&C4(c,s,e,!0),i&&i.forEach(n=>C4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=sm[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const sm={data:e5,props:r5,emits:r5,methods:u3,computed:u3,beforeCreate:M1,created:M1,beforeMount:M1,mounted:M1,beforeUpdate:M1,updated:M1,beforeDestroy:M1,beforeUnmount:M1,destroyed:M1,unmounted:M1,activated:M1,deactivated:M1,errorCaptured:M1,serverPrefetch:M1,components:u3,directives:u3,watch:fm,provide:e5,inject:nm};function e5(c,a){return a?c?function(){return h1(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function nm(c,a){return u3(A6(c),A6(a))}function A6(c){if(q(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function M1(c,a){return c?[...new Set([].concat(c,a))]:a}function u3(c,a){return c?h1(Object.create(null),c,a):a}function r5(c,a){return c?q(c)&&q(a)?[...new Set([...c,...a])]:h1(Object.create(null),c5(c),c5(a??{})):a}function fm(c,a){if(!c)return a;if(!a)return c;const e=h1(Object.create(null),c);for(const r in a)e[r]=M1(c[r],a[r]);return e}function J7(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lm=0;function om(c,a){return function(r,i=null){O(r)||(r=h1({},r)),i!=null&&!r1(i)&&(i=null);const s=J7(),n=new WeakSet;let f=!1;const l=s.app={_uid:lm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:_m,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&O(t.install)?(n.add(t),t.install(l,...o)):O(t)&&(n.add(t),t(l,...o))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,o){return o?(s.components[t]=o,l):s.components[t]},directive(t,o){return o?(s.directives[t]=o,l):s.directives[t]},mount(t,o,z){if(!f){const h=n1(r,i);return h.appContext=s,o&&a?a(h,t):c(h,t,z),f=!0,l._container=t,t.__vue_app__=l,L0(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return s.provides[t]=o,l},runWithContext(t){d4=l;try{return t()}finally{d4=null}}};return l}}let d4=null;function m4(c,a){if(z1){let e=z1.provides;const r=z1.parent&&z1.parent.provides;r===e&&(e=z1.provides=Object.create(r)),e[c]=a}}function q1(c,a,e=!1){const r=z1||R1;if(r||d4){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:d4._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function tm(c,a,e,r=!1){const i={},s={};u4(s,D4,1),c.propsDefaults=Object.create(null),c9(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:T7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function mm(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,f=W(i),[l]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(R4(c.emitsOptions,h))continue;const u=a[h];if(l)if(G(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const S=K1(h);i[S]=P6(l,f,S,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{c9(c,a,i,s)&&(t=!0);let o;for(const z in f)(!a||!G(a,z)&&((o=s3(z))===z||!G(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=P6(l,f,z,void 0,c,!0)):delete i[z]);if(s!==f)for(const z in s)(!a||!G(a,z))&&(delete s[z],t=!0)}t&&a2(c,"set","$attrs")}function c9(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(o4(l))continue;const t=a[l];let o;i&&G(i,o=K1(l))?!s||!s.includes(o)?e[o]=t:(f||(f={}))[o]=t:R4(c.emitsOptions,l)||(!(l in r)||t!==r[l])&&(r[l]=t,n=!0)}if(s){const l=W(e),t=f||e1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=P6(i,l,z,t[z],c,!G(t,z))}}return n}function P6(c,a,e,r,i,s){const n=c[e];if(n!=null){const f=G(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&O(l)){const{propsDefaults:t}=i;e in t?r=t[e]:(a3(i),r=t[e]=l.call(null,a),k2())}else r=l}n[0]&&(s&&!f?r=!1:n[1]&&(r===""||r===s3(e))&&(r=!0))}return r}function a9(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},f=[];let l=!1;if(!O(c)){const o=z=>{l=!0;const[h,u]=a9(z,a,!0);h1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!l)return r1(c)&&r.set(c,j2),j2;if(q(s))for(let o=0;o<s.length;o++){const z=K1(s[o]);i5(z)&&(n[z]=e1)}else if(s)for(const o in s){const z=K1(o);if(i5(z)){const h=s[o],u=n[z]=q(h)||O(h)?{type:h}:h1({},h);if(u){const S=f5(Boolean,u.type),w=f5(String,u.type);u[0]=S>-1,u[1]=w<0||S<w,(S>-1||G(u,"default"))&&f.push(z)}}}const t=[n,f];return r1(c)&&r.set(c,t),t}function i5(c){return c[0]!=="$"}function s5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function n5(c,a){return s5(c)===s5(a)}function f5(c,a){return q(a)?a.findIndex(e=>n5(e,c)):O(a)&&n5(a,c)?0:-1}const e9=c=>c[0]==="_"||c==="$stable",M0=c=>q(c)?c.map(W1):[W1(c)],zm=(c,a,e)=>{if(a._n)return a;const r=G7((...i)=>M0(a(...i)),e);return r._c=!1,r},r9=(c,a,e)=>{const r=c._ctx;for(const i in c){if(e9(i))continue;const s=c[i];if(O(s))a[i]=zm(i,s,r);else if(s!=null){const n=M0(s);a[i]=()=>n}}},i9=(c,a)=>{const e=M0(a);c.slots.default=()=>e},vm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=W(a),u4(a,"_",e)):r9(a,c.slots={})}else c.slots={},a&&i9(c,a);u4(c.slots,D4,1)},hm=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=e1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?s=!1:(h1(i,a),!e&&f===1&&delete i._):(s=!a.$stable,r9(a,i)),n=a}else a&&(i9(c,a),n={default:1});if(s)for(const f in i)!e9(f)&&n[f]==null&&delete i[f]};function T6(c,a,e,r,i=!1){if(q(c)){c.forEach((h,u)=>T6(h,a&&(q(a)?a[u]:a),e,r,i));return}if(t4(r)&&!i)return;const s=r.shapeFlag&4?L0(r.component)||r.component.proxy:r.el,n=i?null:s,{i:f,r:l}=c,t=a&&a.r,o=f.refs===e1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(l1(t)?(o[t]=null,G(z,t)&&(z[t]=null)):p1(t)&&(t.value=null)),O(l))H2(l,f,12,[n,o]);else{const h=l1(l),u=p1(l);if(h||u){const S=()=>{if(c.f){const w=h?G(z,l)?z[l]:o[l]:l.value;i?q(w)&&a0(w,s):q(w)?w.includes(s)||w.push(s):h?(o[l]=[s],G(z,l)&&(z[l]=o[l])):(l.value=[s],c.k&&(o[c.k]=l.value))}else h?(o[l]=n,G(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(o[c.k]=n))};n?(S.id=-1,L1(S,e)):S()}}}const L1=Ot;function Hm(c){return um(c)}function um(c,a){const e=g6();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=E1,insertStaticContent:S}=c,w=(m,v,H,p=null,C=null,L=null,k=!1,x=null,b=!!v.dynamicChildren)=>{if(m===v)return;m&&!v3(m,v)&&(p=V(m),C1(m,C,L,!0),m=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:g,ref:E,shapeFlag:T}=v;switch(g){case E4:B(m,v,H,p);break;case P2:M(m,v,H,p);break;case z4:m==null&&d(v,H,p,k);break;case P1:d2(m,v,H,p,C,L,k,x,b);break;default:T&1?$(m,v,H,p,C,L,k,x,b):T&6?U1(m,v,H,p,C,L,k,x,b):(T&64||T&128)&&g.process(m,v,H,p,C,L,k,x,b,N)}E!=null&&C&&T6(E,m&&m.ref,L,v||m,!v)},B=(m,v,H,p)=>{if(m==null)r(v.el=f(v.children),H,p);else{const C=v.el=m.el;v.children!==m.children&&t(C,v.children)}},M=(m,v,H,p)=>{m==null?r(v.el=l(v.children||""),H,p):v.el=m.el},d=(m,v,H,p)=>{[m.el,m.anchor]=S(m.children,v,H,p,m.el,m.anchor)},R=({el:m,anchor:v},H,p)=>{let C;for(;m&&m!==v;)C=h(m),r(m,H,p),m=C;r(v,H,p)},y=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},$=(m,v,H,p,C,L,k,x,b)=>{k=k||v.type==="svg",m==null?Q(v,H,p,C,L,k,x,b):V1(m,v,C,L,k,x,b)},Q=(m,v,H,p,C,L,k,x)=>{let b,g;const{type:E,props:T,shapeFlag:D,transition:U,dirs:I}=m;if(b=m.el=n(m.type,L,T&&T.is,T),D&8?o(b,m.children):D&16&&x1(m.children,b,null,p,C,L&&E!=="foreignObject",k,x),I&&L2(m,null,p,"created"),i1(b,m,m.scopeId,k,p),T){for(const Y in T)Y!=="value"&&!o4(Y)&&s(b,Y,null,T[Y],L,m.children,p,C,H1);"value"in T&&s(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&G1(g,p,m)}I&&L2(m,null,p,"beforeMount");const J=pm(C,U);J&&U.beforeEnter(b),r(b,v,H),((g=T&&T.onVnodeMounted)||J||I)&&L1(()=>{g&&G1(g,p,m),J&&U.enter(b),I&&L2(m,null,p,"mounted")},C)},i1=(m,v,H,p,C)=>{if(H&&u(m,H),p)for(let L=0;L<p.length;L++)u(m,p[L]);if(C){let L=C.subTree;if(v===L){const k=C.vnode;i1(m,k,k.scopeId,k.slotScopeIds,C.parent)}}},x1=(m,v,H,p,C,L,k,x,b=0)=>{for(let g=b;g<m.length;g++){const E=m[g]=x?z2(m[g]):W1(m[g]);w(null,E,v,H,p,C,L,k,x)}},V1=(m,v,H,p,C,L,k)=>{const x=v.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:E}=v;b|=m.patchFlag&16;const T=m.props||e1,D=v.props||e1;let U;H&&g2(H,!1),(U=D.onVnodeBeforeUpdate)&&G1(U,H,v,m),E&&L2(v,m,H,"beforeUpdate"),H&&g2(H,!0);const I=C&&v.type!=="foreignObject";if(g?w1(m.dynamicChildren,g,x,H,p,I,L):k||j(m,v,x,null,H,p,I,L,!1),b>0){if(b&16)f2(x,v,T,D,H,p,C);else if(b&2&&T.class!==D.class&&s(x,"class",null,D.class,C),b&4&&s(x,"style",T.style,D.style,C),b&8){const J=v.dynamicProps;for(let Y=0;Y<J.length;Y++){const f1=J[Y],k1=T[f1],q2=D[f1];(q2!==k1||f1==="value")&&s(x,f1,k1,q2,C,m.children,H,p,H1)}}b&1&&m.children!==v.children&&o(x,v.children)}else!k&&g==null&&f2(x,v,T,D,H,p,C);((U=D.onVnodeUpdated)||E)&&L1(()=>{U&&G1(U,H,v,m),E&&L2(v,m,H,"updated")},p)},w1=(m,v,H,p,C,L,k)=>{for(let x=0;x<v.length;x++){const b=m[x],g=v[x],E=b.el&&(b.type===P1||!v3(b,g)||b.shapeFlag&70)?z(b.el):H;w(b,g,E,null,p,C,L,k,!0)}},f2=(m,v,H,p,C,L,k)=>{if(H!==p){if(H!==e1)for(const x in H)!o4(x)&&!(x in p)&&s(m,x,H[x],null,k,v.children,C,L,H1);for(const x in p){if(o4(x))continue;const b=p[x],g=H[x];b!==g&&x!=="value"&&s(m,x,g,b,k,v.children,C,L,H1)}"value"in p&&s(m,"value",H.value,p.value)}},d2=(m,v,H,p,C,L,k,x,b)=>{const g=v.el=m?m.el:f(""),E=v.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:U}=v;U&&(x=x?x.concat(U):U),m==null?(r(g,H,p),r(E,H,p),x1(v.children,H,E,C,L,k,x,b)):T>0&&T&64&&D&&m.dynamicChildren?(w1(m.dynamicChildren,D,H,C,L,k,x),(v.key!=null||C&&v===C.subTree)&&s9(m,v,!0)):j(m,v,H,E,C,L,k,x,b)},U1=(m,v,H,p,C,L,k,x,b)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?C.ctx.activate(v,H,p,k,b):m3(v,H,p,C,L,k,b):_2(m,v,b)},m3=(m,v,H,p,C,L,k)=>{const x=m.component=wm(m,p,C);if(K7(m)&&(x.ctx.renderer=N),ym(x),x.asyncDep){if(C&&C.registerDep(x,t1),!m.el){const b=x.subTree=n1(P2);M(null,b,v,H)}return}t1(x,m,v,H,C,L,k)},_2=(m,v,H)=>{const p=v.component=m.component;if(Bt(m,v,H))if(p.asyncDep&&!p.asyncResolved){X(p,v,H);return}else p.next=v,kt(p.update),p.update();else v.el=m.el,p.vnode=v},t1=(m,v,H,p,C,L,k)=>{const x=()=>{if(m.isMounted){let{next:E,bu:T,u:D,parent:U,vnode:I}=m,J=E,Y;g2(m,!1),E?(E.el=I.el,X(m,E,k)):E=I,T&&t6(T),(Y=E.props&&E.props.onVnodeBeforeUpdate)&&G1(Y,U,E,I),g2(m,!0);const f1=m6(m),k1=m.subTree;m.subTree=f1,w(k1,f1,z(k1.el),V(k1),m,C,L),E.el=f1.el,J===null&&_t(m,f1.el),D&&L1(D,C),(Y=E.props&&E.props.onVnodeUpdated)&&L1(()=>G1(Y,U,E,I),C)}else{let E;const{el:T,props:D}=v,{bm:U,m:I,parent:J}=m,Y=t4(v);if(g2(m,!1),U&&t6(U),!Y&&(E=D&&D.onVnodeBeforeMount)&&G1(E,J,v),g2(m,!0),T&&Z){const f1=()=>{m.subTree=m6(m),Z(T,m.subTree,m,C,null)};Y?v.type.__asyncLoader().then(()=>!m.isUnmounted&&f1()):f1()}else{const f1=m.subTree=m6(m);w(null,f1,H,p,m,C,L),v.el=f1.el}if(I&&L1(I,C),!Y&&(E=D&&D.onVnodeMounted)){const f1=v;L1(()=>G1(E,J,f1),C)}(v.shapeFlag&256||J&&t4(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&L1(m.a,C),m.isMounted=!0,v=H=p=null}},b=m.effect=new n0(x,()=>h0(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,g2(m,!0),g()},X=(m,v,H)=>{v.component=m;const p=m.vnode.props;m.vnode=v,m.next=null,mm(m,v.props,p,H),hm(m,v.children,H),n3(),X8(),f3()},j=(m,v,H,p,C,L,k,x,b=!1)=>{const g=m&&m.children,E=m?m.shapeFlag:0,T=v.children,{patchFlag:D,shapeFlag:U}=v;if(D>0){if(D&128){l2(g,T,H,p,C,L,k,x,b);return}else if(D&256){Y1(g,T,H,p,C,L,k,x,b);return}}U&8?(E&16&&H1(g,C,L),T!==g&&o(H,T)):E&16?U&16?l2(g,T,H,p,C,L,k,x,b):H1(g,C,L,!0):(E&8&&o(H,""),U&16&&x1(T,H,p,C,L,k,x,b))},Y1=(m,v,H,p,C,L,k,x,b)=>{m=m||j2,v=v||j2;const g=m.length,E=v.length,T=Math.min(g,E);let D;for(D=0;D<T;D++){const U=v[D]=b?z2(v[D]):W1(v[D]);w(m[D],U,H,null,C,L,k,x,b)}g>E?H1(m,C,L,!0,!1,T):x1(v,H,p,C,L,k,x,b,T)},l2=(m,v,H,p,C,L,k,x,b)=>{let g=0;const E=v.length;let T=m.length-1,D=E-1;for(;g<=T&&g<=D;){const U=m[g],I=v[g]=b?z2(v[g]):W1(v[g]);if(v3(U,I))w(U,I,H,null,C,L,k,x,b);else break;g++}for(;g<=T&&g<=D;){const U=m[T],I=v[D]=b?z2(v[D]):W1(v[D]);if(v3(U,I))w(U,I,H,null,C,L,k,x,b);else break;T--,D--}if(g>T){if(g<=D){const U=D+1,I=U<E?v[U].el:p;for(;g<=D;)w(null,v[g]=b?z2(v[g]):W1(v[g]),H,I,C,L,k,x,b),g++}}else if(g>D)for(;g<=T;)C1(m[g],C,L,!0),g++;else{const U=g,I=g,J=new Map;for(g=I;g<=D;g++){const b1=v[g]=b?z2(v[g]):W1(v[g]);b1.key!=null&&J.set(b1.key,g)}let Y,f1=0;const k1=D-I+1;let q2=!1,q8=0;const z3=new Array(k1);for(g=0;g<k1;g++)z3[g]=0;for(g=U;g<=T;g++){const b1=m[g];if(f1>=k1){C1(b1,C,L,!0);continue}let I1;if(b1.key!=null)I1=J.get(b1.key);else for(Y=I;Y<=D;Y++)if(z3[Y-I]===0&&v3(b1,v[Y])){I1=Y;break}I1===void 0?C1(b1,C,L,!0):(z3[I1-I]=g+1,I1>=q8?q8=I1:q2=!0,w(b1,v[I1],H,null,C,L,k,x,b),f1++)}const O8=q2?Vm(z3):j2;for(Y=O8.length-1,g=k1-1;g>=0;g--){const b1=I+g,I1=v[b1],U8=b1+1<E?v[b1+1].el:p;z3[g]===0?w(null,I1,H,U8,C,L,k,x,b):q2&&(Y<0||g!==O8[Y]?$1(I1,H,U8,2):Y--)}}},$1=(m,v,H,p,C=null)=>{const{el:L,type:k,transition:x,children:b,shapeFlag:g}=m;if(g&6){$1(m.component.subTree,v,H,p);return}if(g&128){m.suspense.move(v,H,p);return}if(g&64){k.move(m,v,H,N);return}if(k===P1){r(L,v,H);for(let T=0;T<b.length;T++)$1(b[T],v,H,p);r(m.anchor,v,H);return}if(k===z4){R(m,v,H);return}if(p!==2&&g&1&&x)if(p===0)x.beforeEnter(L),r(L,v,H),L1(()=>x.enter(L),C);else{const{leave:T,delayLeave:D,afterLeave:U}=x,I=()=>r(L,v,H),J=()=>{T(L,()=>{I(),U&&U()})};D?D(L,I,J):J()}else r(L,v,H)},C1=(m,v,H,p=!1,C=!1)=>{const{type:L,props:k,ref:x,children:b,dynamicChildren:g,shapeFlag:E,patchFlag:T,dirs:D}=m;if(x!=null&&T6(x,null,H,m,!0),E&256){v.ctx.deactivate(m);return}const U=E&1&&D,I=!t4(m);let J;if(I&&(J=k&&k.onVnodeBeforeUnmount)&&G1(J,v,m),E&6)j3(m.component,H,p);else{if(E&128){m.suspense.unmount(H,p);return}U&&L2(m,null,v,"beforeUnmount"),E&64?m.type.remove(m,v,H,C,N,p):g&&(L!==P1||T>0&&T&64)?H1(g,v,H,!1,!0):(L===P1&&T&384||!C&&E&16)&&H1(b,v,H),p&&E2(m)}(I&&(J=k&&k.onVnodeUnmounted)||U)&&L1(()=>{J&&G1(J,v,m),U&&L2(m,null,v,"unmounted")},H)},E2=m=>{const{type:v,el:H,anchor:p,transition:C}=m;if(v===P1){D2(H,p);return}if(v===z4){y(m);return}const L=()=>{i(H),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:k,delayLeave:x}=C,b=()=>k(H,L);x?x(m.el,L,b):b()}else L()},D2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},j3=(m,v,H)=>{const{bum:p,scope:C,update:L,subTree:k,um:x}=m;p&&t6(p),C.stop(),L&&(L.active=!1,C1(k,m,v,H)),x&&L1(x,v),L1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},H1=(m,v,H,p=!1,C=!1,L=0)=>{for(let k=L;k<m.length;k++)C1(m[k],v,H,p,C)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,v,H)=>{m==null?v._vnode&&C1(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,H),X8(),U7(),v._vnode=m},N={p:w,um:C1,m:$1,r:E2,mt:m3,mc:x1,pc:j,pbc:w1,n:V,o:c};let _,Z;return a&&([_,Z]=a(N)),{render:P,hydrate:_,createApp:om(P,_)}}function g2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function pm(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function s9(c,a,e=!1){const r=c.children,i=a.children;if(q(r)&&q(i))for(let s=0;s<r.length;s++){const n=r[s];let f=i[s];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=i[s]=z2(i[s]),f.el=n.el),e||s9(n,f)),f.type===E4&&(f.el=n.el)}}function Vm(c){const a=c.slice(),e=[0];let r,i,s,n,f;const l=c.length;for(r=0;r<l;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)f=s+n>>1,c[e[f]]<t?s=f+1:n=f;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const Mm=c=>c.__isTeleport,P1=Symbol.for("v-fgt"),E4=Symbol.for("v-txt"),P2=Symbol.for("v-cmt"),z4=Symbol.for("v-stc"),d3=[];let B1=null;function y1(c=!1){d3.push(B1=c?null:[])}function Cm(){d3.pop(),B1=d3[d3.length-1]||null}let y3=1;function l5(c){y3+=c}function n9(c){return c.dynamicChildren=y3>0?B1||j2:null,Cm(),y3>0&&B1&&B1.push(c),c}function F1(c,a,e,r,i,s){return n9(v1(c,a,e,r,i,s,!0))}function dm(c,a,e,r,i){return n9(n1(c,a,e,r,i,!0))}function F6(c){return c?c.__v_isVNode===!0:!1}function v3(c,a){return c.type===a.type&&c.key===a.key}const D4="__vInternal",f9=({key:c})=>c??null,v4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?l1(c)||p1(c)||O(c)?{i:R1,r:c,k:a,f:!!e}:c:null);function v1(c,a=null,e=null,r=0,i=null,s=c===P1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&f9(a),ref:a&&v4(a),scopeId:B4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R1};return f?(C0(l,e),s&128&&c.normalize(l)):e&&(l.shapeFlag|=l1(e)?8:16),y3>0&&!n&&B1&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&B1.push(l),l}const n1=Lm;function Lm(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===Et)&&(c=P2),F6(c)){const f=c3(c,a,!0);return e&&C0(f,e),y3>0&&!s&&B1&&(f.shapeFlag&6?B1[B1.indexOf(c)]=f:B1.push(f)),f.patchFlag|=-2,f}if(Fm(c)&&(c=c.__vccOpts),a){a=gm(a);let{class:f,style:l}=a;f&&!l1(f)&&(a.class=i0(f)),r1(l)&&(R7(l)&&!q(l)&&(l=h1({},l)),a.style=r0(l))}const n=l1(c)?1:qt(c)?128:Mm(c)?64:r1(c)?4:O(c)?2:0;return v1(c,a,e,r,i,n,s,!0)}function gm(c){return c?R7(c)||D4 in c?h1({},c):c:null}function c3(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,f=a?bm(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&f9(f),ref:a&&a.ref?e&&i?q(i)?i.concat(v4(a)):[i,v4(a)]:v4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==P1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&c3(c.ssContent),ssFallback:c.ssFallback&&c3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function l9(c=" ",a=0){return n1(E4,null,c,a)}function xm(c,a){const e=n1(z4,null,c);return e.staticCount=a,e}function O21(c="",a=!1){return a?(y1(),dm(P2,null,c)):n1(P2,null,c)}function W1(c){return c==null||typeof c=="boolean"?n1(P2):q(c)?n1(P1,null,c.slice()):typeof c=="object"?z2(c):n1(E4,null,String(c))}function z2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:c3(c)}function C0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(q(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),C0(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(D4 in a)?a._ctx=R1:i===3&&R1&&(R1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:R1},e=32):(a=String(a),r&64?(e=16,a=[l9(a)]):e=8);c.children=a,c.shapeFlag|=e}function bm(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=i0([a.class,r.class]));else if(i==="style")a.style=r0([a.style,r.style]);else if(S4(i)){const s=a[i],n=r[i];n&&s!==n&&!(q(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function G1(c,a,e,r=null){D1(c,a,7,[e,r])}const Nm=J7();let Sm=0;function wm(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||Nm,s={uid:Sm++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new L7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:a9(r,i),emitsOptions:I7(r,i),emit:null,emitted:null,propsDefaults:e1,inheritAttrs:r.inheritAttrs,ctx:e1,data:e1,props:e1,attrs:e1,slots:e1,refs:e1,setupState:e1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Tt.bind(null,s),c.ce&&c.ce(s),s}let z1=null,d0,O2,o5="__VUE_INSTANCE_SETTERS__";(O2=g6()[o5])||(O2=g6()[o5]=[]),O2.push(c=>z1=c),d0=c=>{O2.length>1?O2.forEach(a=>a(c)):O2[0](c)};const a3=c=>{d0(c),c.scope.on()},k2=()=>{z1&&z1.scope.off(),d0(null)};function o9(c){return c.vnode.shapeFlag&4}let k3=!1;function ym(c,a=!1){k3=a;const{props:e,children:r}=c.vnode,i=o9(c);tm(c,e,i,a),vm(c,r);const s=i?km(c,a):void 0;return k3=!1,s}function km(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=t0(new Proxy(c.ctx,em));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Pm(c):null;a3(c),n3();const s=H2(r,c,0,[c.props,i]);if(f3(),k2(),V7(s)){if(s.then(k2,k2),a)return s.then(n=>{t5(c,n,a)}).catch(n=>{F4(n,c,0)});c.asyncDep=s}else t5(c,s,a)}else t9(c,a)}function t5(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r1(a)&&(c.setupState=D7(a)),t9(c,e)}let m5;function t9(c,a,e){const r=c.type;if(!c.render){if(!a&&m5&&!r.render){const i=r.template||V0(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,t=h1(h1({isCustomElement:s,delimiters:f},n),l);r.render=m5(i,t)}}c.render=r.render||E1}{a3(c),n3();try{rm(c)}finally{f3(),k2()}}}function Am(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return g1(c,"get","$attrs"),a[e]}}))}function Pm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Am(c)},slots:c.slots,emit:c.emit,expose:a}}function L0(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(D7(t0(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in C3)return C3[e](c)},has(a,e){return e in a||e in C3}}))}function Tm(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function Fm(c){return O(c)&&"__vccOpts"in c}const m1=(c,a)=>St(c,a,k3);function g0(c,a,e){const r=arguments.length;return r===2?r1(a)&&!q(a)?F6(a)?n1(c,null,[a]):n1(c,a):n1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&F6(e)&&(e=[e]),n1(c,a,e))}const Rm=Symbol.for("v-scx"),Bm=()=>q1(Rm),_m="3.3.8",Em="http://www.w3.org/2000/svg",N2=typeof document<"u"?document:null,z5=N2&&N2.createElement("template"),Dm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?N2.createElementNS(Em,c):N2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>N2.createTextNode(c),createComment:c=>N2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>N2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{z5.innerHTML=r?`<svg>${c}</svg>`:c;const f=z5.content;if(r){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},qm=Symbol("_vtc");function Om(c,a,e){const r=c[qm];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const Um=Symbol("_vod");function $m(c,a,e){const r=c.style,i=l1(e);if(e&&!i){if(a&&!l1(a))for(const s in a)e[s]==null&&R6(r,s,"");for(const s in e)R6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),Um in c&&(r.display=s)}}const v5=/\s*!important$/;function R6(c,a,e){if(q(e))e.forEach(r=>R6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Im(c,a);v5.test(e)?c.setProperty(s3(r),e.replace(v5,""),"important"):c[r]=e}}const h5=["Webkit","Moz","ms"],v6={};function Im(c,a){const e=v6[a];if(e)return e;let r=K1(a);if(r!=="filter"&&r in c)return v6[a]=r;r=A4(r);for(let i=0;i<h5.length;i++){const s=h5[i]+r;if(s in c)return v6[a]=s}return a}const H5="http://www.w3.org/1999/xlink";function Gm(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(H5,a.slice(6,a.length)):c.setAttributeNS(H5,a,e);else{const s=Qo(a);e==null||s&&!C7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Wm(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){c._value=e;const t=f==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=C7(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function jm(c,a,e,r){c.addEventListener(a,e,r)}function Zm(c,a,e,r){c.removeEventListener(a,e,r)}const u5=Symbol("_vei");function Km(c,a,e,r,i=null){const s=c[u5]||(c[u5]={}),n=s[a];if(r&&n)n.value=r;else{const[f,l]=Ym(a);if(r){const t=s[a]=Jm(r,i);jm(c,f,t,l)}else n&&(Zm(c,f,n,l),s[a]=void 0)}}const p5=/(?:Once|Passive|Capture)$/;function Ym(c){let a;if(p5.test(c)){a={};let r;for(;r=c.match(p5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):s3(c.slice(2)),a]}let h6=0;const Xm=Promise.resolve(),Qm=()=>h6||(Xm.then(()=>h6=0),h6=Date.now());function Jm(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;D1(cz(r,e.value),a,5,[r])};return e.value=c,e.attached=Qm(),e}function cz(c,a){if(q(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const V5=/^on[a-z]/,az=(c,a,e,r,i=!1,s,n,f,l)=>{a==="class"?Om(c,r,i):a==="style"?$m(c,e,r):S4(a)?c0(a)||Km(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):ez(c,a,r,i))?Wm(c,a,r,s,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Gm(c,a,r,i))};function ez(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&V5.test(a)&&O(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||V5.test(a)&&l1(e)?!1:a in c}const rz=h1({patchProp:az},Dm);let M5;function iz(){return M5||(M5=Hm(rz))}const sz=(...c)=>{const a=iz().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=nz(r);if(!i)return;const s=a._component;!O(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function nz(c){return l1(c)?document.querySelector(c):c}var fz=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const lz=Symbol();var C5;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(C5||(C5={}));function oz(){const c=ct(!0),a=c.run(()=>z0({}));let e=[],r=[];const i=t0({install(s){i._a=s,s.provide(lz,i),s.config.globalProperties.$pinia=i,r.forEach(n=>e.push(n)),r=[]},use(s){return!this._a&&!fz?r.push(s):e.push(s),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return i}const l3=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},tz={},mz={version:"1.1",id:"Warstwa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 444.24 361.59",style:{},"xml:space":"preserve"},zz=xm(`<g><g><path class="st2" d="M226.06,37.97c79.05,0.1,142.65,63.64,143.05,141.99c0.41,79.69-64,143.55-142.87,143.59
			c-79.25,0.04-143.23-63.8-143.17-142.87C83.13,101.53,147.14,38.11,226.06,37.97z M226.02,281.19
			c55.46,0.13,100.65-44.75,100.67-100.35c0.02-55.47-44.74-100.47-100.52-100.51c-55.68-0.04-100.44,44.74-100.68,100.03
			C125.26,236.15,170.49,281.24,226.02,281.19z"></path><path class="st3" d="M37.56,361.18c-2.07,0.34-4.14,0.42-6.22,0.05c-0.65-0.17-1.29-0.44-1.99-0.29c-0.13-0.29-0.36-0.36-0.65-0.3
			c-0.16-0.03-0.32-0.07-0.49-0.1c-0.27-0.29-0.62-0.23-0.96-0.25c-1.19-0.62-2.43-1.09-3.71-1.48c-0.17-0.35-0.46-0.48-0.82-0.51
			c-0.56-0.32-1.11-0.65-1.67-0.97c-0.1-0.21-0.29-0.24-0.48-0.27c-0.17-0.12-0.35-0.25-0.52-0.37c-0.15-0.29-0.39-0.43-0.71-0.44
			c-1.42-1.14-2.83-2.28-4.25-3.42c-0.13-0.38-0.38-0.64-0.77-0.75c-0.15-0.15-0.3-0.3-0.44-0.45c-0.03-0.31-0.21-0.48-0.51-0.53
			c-0.94-0.85-0.65-1.99-0.73-3.04c0.36-2.39,0.18-4.8,0.19-7.2c0.12-4,0.41-7.99,0.27-11.99c0-0.4,0.01-0.8,0.01-1.2
			c0.18-3.19,0.37-6.38,0.26-9.58c0.21-0.73,0.2-1.46,0.03-2.19c0.22-1.27,0.22-2.55,0.15-3.83c0.47-2.38,0.2-4.78,0.23-7.18
			c0.13-3.92,0.4-7.83,0.27-11.75c0-0.48,0.01-0.96,0.01-1.44c0.19-3.11,0.37-6.22,0.26-9.34c0.22-0.8,0.19-1.6,0.04-2.41
			c0.22-1.75,0.22-3.51,0.18-5.27c0.31-1.75,0.19-3.52,0.14-5.28c0.04-1.52,0.07-3.03,0.11-4.55c0.36-3.11,0.19-6.24,0.2-9.36
			c0.07-3.03,0.43-6.06,0.29-9.1c0.23-0.8,0.19-1.6,0.04-2.41c0.22-1.75,0.22-3.51,0.18-5.27c0.31-1.75,0.19-3.52,0.14-5.28
			c0.03-1.44,0.07-2.87,0.1-4.31c0.36-3.19,0.2-6.4,0.21-9.6c0.17-3.52,0.37-7.03,0.26-10.55c0-0.24,0-0.48,0.01-0.72
			c0.06-1.7,0.23-3.41,0.05-5.11c0.31-0.13,0.34-0.41,0.34-0.7c0-1.74,0-3.48,0-5.22c0.03-1.36,0.07-2.71,0.1-4.07
			c0.36-3.19,0.2-6.4,0.21-9.6c0.17-3.44,0.37-6.87,0.26-10.31c0-0.32,0-0.64,0.01-0.96c0.14-3.28,0.41-6.55,0.27-9.83
			c0.09-0.4,0.19-0.8,0.01-1.2c0.23-1.99,0.27-3.99,0.2-5.99c0.32-2.23,0.19-4.48,0.16-6.72c0.09-1.2,0.2-2.39,0.09-3.59
			c0.37-2.95,0.25-5.92,0.23-8.88c0.44-1.67-0.25-2.88-1.54-3.88c-0.65-0.5-1.23-1.09-1.84-1.64c-0.36-0.55-0.8-1.03-1.39-1.34
			c-0.4-0.51-0.77-1.07-1.42-1.32c-0.14-0.37-0.35-0.67-0.75-0.79c-0.38-0.55-0.89-0.97-1.42-1.37c-0.11-0.39-0.35-0.65-0.77-0.71
			c-0.08-0.08-0.16-0.16-0.24-0.23c-0.08-0.4-0.31-0.66-0.72-0.73c-0.77-0.99-1.73-1.78-2.64-2.62c-0.56-0.5-0.96-1.18-1.64-1.54
			c-0.06-0.06-0.12-0.12-0.18-0.17c-0.28-0.39-0.59-0.75-1.03-0.95c0,0,0.01,0.01,0.01,0.01c-0.08-0.41-0.34-0.64-0.73-0.74
			c-0.15-0.15-0.31-0.3-0.46-0.45c-0.07-0.27-0.21-0.46-0.49-0.53c-0.23-0.23-0.47-0.46-0.7-0.69c0-8.62-0.01-17.25-0.01-25.87
			c0-28.35,0-56.7,0-85.05c0-0.64,0.03-1.28,0.05-1.91C1.23,2.31,2.33,1.2,3.87,0.67c2.15-0.74,6.01,0.94,6.72,3.11
			c0.36,1.1,0.25,2.37,0.26,3.56c0.07,12.07,0.1,24.14,0.18,36.21c0.09,14.03,0.23,28.05,0.31,42.08c0.01,1.06,0.3,1.42,1.36,1.33
			c1.03-0.09,2.08-0.08,3.12,0c0.91,0.06,1.14-0.26,1.14-1.15c-0.05-5.67,0.01-11.35-0.08-17.02c-0.21-13.35-0.17-26.69-0.26-40.04
			c-0.05-7.39-0.07-14.79-0.38-22.17c-0.11-2.54,1.15-3.74,2.99-4.73c3.56-1.91,6.73-1.48,9.83,1.17c0.8,0.69,1.05,1.49,1.05,2.52
			c0.02,20.74,0.06,41.48,0.11,62.22c0.01,6.03,0.09,12.07,0.1,18.1c0,0.81,0.2,1.14,1.07,1.1c1.56-0.06,3.12-0.04,4.68-0.01
			c0.73,0.02,1.09-0.15,1.08-0.99c-0.12-13.15-0.14-26.3-0.35-39.44C36.6,34.4,36.68,22.3,36.54,10.19
			c-0.02-1.92,0.03-3.84-0.16-5.75c-0.13-1.32,0.55-2.04,1.45-2.63c3.22-2.11,5.34-2.15,8.84,0.74c0.57,0.47,0.68,1,0.68,1.67
			c0.03,5.24,0,10.47,0.13,15.7c0.24,9.43,0.03,18.86,0.24,28.29c0.27,12.11,0.11,24.22,0.26,36.32c0.03,2.14,0.02,2.14,2.08,2.17
			c3.43,0.05,3.42,0.05,3.43-3.39c0.08-19.74,0.15-39.48,0.24-59.22c0.03-6.31,0.09-12.63,0.11-18.94c0-0.82,0.22-1.46,0.82-2.02
			c0.99-0.93,2.02-1.8,3.3-2.32c2.46-1.01,4.39,0.14,6.27,1.53c1.65,1.22,2.12,2.8,2.11,4.86c-0.06,34.37-0.07,68.74,0.01,103.11
			c0.01,2.31-0.66,3.94-2.25,5.55c-4.81,4.88-9.49,9.89-14.22,14.85c-1.54,1.61-3.07,3.23-4.64,4.8c-0.39,0.39-0.48,0.8-0.45,1.29
			c0.28,5.62,0.57,11.24,0.84,16.87c0.11,2.31,0.19,4.63,0.29,6.94c0.26,5.9,0.51,11.81,0.8,17.71c0.37,7.58,0.83,15.15,1.13,22.73
			c0.31,8.1,0.83,16.19,1.12,24.29c0.4,11.37,1.08,22.74,1.63,34.11c0.17,3.51,0.22,7.03,0.47,10.53
			c0.52,7.45,0.71,14.92,1.11,22.37c0.29,5.42,0.52,10.85,0.78,16.27c0.4,8.22,0.81,16.43,1.2,24.65c0.25,5.27,0.46,10.53,0.73,15.8
			c0.04,0.83-0.22,1.41-0.78,2.01c-2.84,3.06-5.95,5.77-9.67,7.71c-1.91,1-3.95,1.71-6.08,2.13
			C38.07,360.98,37.77,360.95,37.56,361.18z"></path><path class="st3" d="M444.06,1.58c0,0.56,0.01,1.12,0.01,1.68c0,114.25,0,228.51,0,342.76c0,0.44,0.02,0.88,0.03,1.32
			c-3.22,4.11-6.84,7.77-11.33,10.53c-3.12,1.91-6.49,3.15-10.12,3.35c-4.11,0.22-7.84-1.19-11.22-3.49
			c-3.37-2.29-6.01-5.31-8.47-8.52c-0.26-0.34-0.34-0.69-0.31-1.11c0.72-8.03,1.4-16.06,2.17-24.08c0.44-4.61,0.71-9.24,1.22-13.83
			c0.7-6.27,1.02-12.57,1.73-18.83c0.47-4.16,0.61-8.36,1.09-12.53c0.72-6.3,1-12.65,1.76-18.95c0.49-4.08,0.7-8.19,1.05-12.29
			c0.36-4.14,0.74-8.27,1.11-12.4c0.36-4.09,0.72-8.18,1.09-12.27c0.59-6.56,1.18-13.12,1.78-19.67c0.35-3.81,0.69-7.63,1.05-11.44
			c0.4-4.29,0.48-8.61,1.18-12.87c0.16-0.99-0.06-1.67-1-2.26c-5.39-3.43-9.61-8.04-13.36-13.15c-3.03-4.13-5.51-8.58-7.56-13.26
			c-1.49-3.39-2.77-6.87-3.8-10.44c-1.19-4.15-2.18-8.33-2.89-12.57c-1.43-8.62-1.98-17.31-1.53-26.01
			c0.32-6.22,1.72-12.31,3.02-18.4c1.35-6.32,3.02-12.57,4.98-18.72c2.55-8.02,5.59-15.86,9.24-23.46
			c3.53-7.35,7.59-14.39,12.35-20.99c3.97-5.5,8.51-10.5,13.35-15.27c2.29-2.26,4.62-3.24,7.74-2.89
			C440.29,1.69,442.18,1.56,444.06,1.58z"></path><path class="st3" d="M247.97,182.52c5.28,0,10.56,0,15.83,0c1.38,0,1.4-0.03,0.93-1.35c-0.92-2.57-1.65-5.17-1.66-7.92
			c-0.03-4.41,2.23-7.91,7.08-9.59c3.95-1.37,11.65,2.1,12.49,6.31c0.29,1.43,0.52,2.83,0.27,4.26c-0.39,2.25-1.06,4.41-2.15,6.44
			c-0.54,1.01-0.41,1.22,0.78,1.24c4.52,0.08,9.04,0.07,13.55,0.24c5.24,0.2,10.47,0.13,15.71,0.17c1.15,0.01,1.37,0.4,1.4,1.45
			c0.2,7.11-0.68,14.12-2.33,21c-2.32,9.67-6.11,18.74-11.77,27.01c-4.94,7.22-10.97,13.34-18.04,18.42
			c-4.14,2.98-8.58,5.5-13.23,7.64c-7.2,3.32-14.7,5.69-22.45,7.33c-4.1,0.87-8.24,1.49-12.38,2.08c-0.91,0.13-1.27-0.1-1.26-1.11
			c0.04-8.87,0.04-17.74,0-26.61c0-1,0.32-1.09,1.19-0.94c4.52,0.74,8.34-0.4,10.94-4.4c1.31-2.01,1.89-4.3,2.16-6.65
			c0.31-2.66,0.4-5.32-0.51-7.94c-1.26-3.62-3.79-5.9-7.3-7.19c-1.77-0.65-3.6-1.07-5.5-1.03c-0.73,0.02-0.98-0.28-0.97-0.99
			c0.01-8.99,0.02-17.98,0-26.97c0-0.93,0.52-0.9,1.16-0.9C237.26,182.53,242.61,182.52,247.97,182.52z"></path><path class="st3" d="M204.28,177.57c-5.36,0-10.72,0.01-16.07-0.01c-0.94,0-1.23,0.14-0.77,1.14c1.11,2.44,1.98,4.96,2.07,7.68
			c0.16,4.78-1.89,7.5-6.38,9.2c-4.65,1.77-12.63-2.08-13.59-6.88c-0.52-2.58-0.03-4.99,0.91-7.37c0.28-0.7,0.62-1.38,0.98-2.05
			c0.43-0.81,0.25-1.08-0.7-1.08c-3.96-0.03-7.91-0.12-11.87-0.21c-5.91-0.14-11.83-0.1-17.74-0.37c-0.89-0.04-1.16-0.29-1.16-1.18
			c0.01-7.01,0.76-13.92,2.34-20.76c1.62-7.02,4.02-13.75,7.4-20.11c3.9-7.36,8.86-13.94,15.01-19.61
			c5.61-5.17,11.83-9.39,18.66-12.77c6.32-3.13,12.9-5.51,19.73-7.21c5.15-1.29,10.34-2.34,15.63-2.9c2.68-0.29,2.68-0.35,2.68,2.37
			c0,8.27-0.02,16.54,0.02,24.81c0.01,1.08-0.27,1.36-1.35,1.26c-4.45-0.42-8.32,0.9-10.97,4.55c-4.4,6.06-5.1,12.67,0.26,18.8
			c2.22,2.54,5.31,3.59,8.64,3.85c0.36,0.03,0.72,0.03,1.08,0.04c2.32,0.05,2.32,0.05,2.32,2.43c0,8.31-0.02,16.62,0.03,24.93
			c0.01,1.12-0.21,1.49-1.42,1.47C214.76,177.53,209.52,177.57,204.28,177.57z"></path><path class="st3" d="M229.15,161.31c0-4.79,0-9.59,0-14.38c0-1.38-0.02-1.31-1.44-1.16c-4.21,0.43-8.39,0.55-12.12-2.02
			c-3.3-2.28-5.07-7.33-3.86-11.16c0.79-2.51,1.91-4.81,4.01-6.51c2.86-2.32,6.18-2.53,9.64-2.15c0.71,0.08,1.42,0.21,2.12,0.38
			c0.95,0.23,1.27-0.11,1.27-1.08c0.02-5.99,0.08-11.99,0.15-17.98c0.04-3.75,0.16-7.51,0.16-11.26c0-0.97,0.32-1.22,1.24-1.18
			c5.56,0.23,11.03,1.1,16.45,2.36c7.18,1.67,14.06,4.17,20.59,7.56c7.07,3.67,13.51,8.23,19.18,13.86
			c4.37,4.34,8.17,9.1,11.43,14.33c4.18,6.71,7.33,13.87,9.59,21.42c1.65,5.5,2.94,11.08,3.68,16.79c0.29,2.21,0.65,4.41,0.87,6.64
			c0.09,0.86-0.22,1.08-1.05,1.08c-8-0.03-15.99-0.03-23.99,0c-0.97,0-1.13-0.26-1.06-1.26c0.4-5.6-0.81-10.7-5.89-13.86
			c-4.3-2.67-9.1-3.36-13.89-1.36c-3.69,1.55-5.67,4.73-6.72,8.51c-0.66,2.4-0.88,4.86-0.83,7.34c0.02,0.82-0.21,1.1-1.07,1.1
			c-9.08-0.03-18.15-0.03-27.23,0c-1.05,0-1.27-0.42-1.26-1.36C229.17,171.06,229.15,166.18,229.15,161.31z"></path><path class="st3" d="M222.9,198.61c0,4.8,0,9.59,0,14.39c0,1.46,0.01,1.49,1.47,1.18c2.45-0.53,4.87-0.64,7.35-0.06
			c3.42,0.79,5.71,2.85,7.2,5.92c2.51,5.15,0.93,10.2-2.66,13.66c-2.28,2.19-5.16,2.75-8.22,2.54c-1.15-0.08-2.31-0.23-3.43-0.5
			c-0.92-0.22-1.11,0.05-1.11,0.91c-0.03,3.43-0.13,6.87-0.18,10.3c-0.1,6.11-0.19,12.22-0.29,18.33c-0.04,2.09-0.06,2.12-2.14,1.98
			c-7.47-0.53-14.78-1.87-21.93-4.12c-4.04-1.27-7.99-2.77-11.79-4.62c-4.55-2.21-8.91-4.77-12.99-7.79
			c-3.86-2.85-7.45-5.98-10.72-9.48c-3.74-4-7-8.34-9.83-13.03c-3.16-5.24-5.72-10.77-7.73-16.53c-1.07-3.08-1.98-6.22-2.76-9.4
			c-1.47-6.01-2.47-12.09-3.04-18.24c-0.06-0.6,0.08-0.83,0.66-0.81c0.28,0.01,0.56,0,0.84,0c7.68,0,15.36,0,23.03,0
			c1.62,0,1.62,0,1.58,1.56c-0.07,2.64-0.02,5.26,0.8,7.82c1.27,3.98,3.81,6.84,7.68,8.27c3.29,1.22,6.72,1.7,10.2,0.47
			c3.2-1.13,5.4-3.28,6.8-6.32c1.6-3.49,1.96-7.21,1.82-10.99c-0.04-0.98,0.21-1.29,1.24-1.29c9,0.04,17.99,0.04,26.99,0
			c0.99,0,1.19,0.33,1.18,1.24C222.88,188.86,222.9,193.74,222.9,198.61z"></path></g></g>`,1),vz=[zz];function hz(c,a){return y1(),F1("svg",mz,vz)}const m9=l3(tz,[["render",hz]]),o3=c=>(H0("data-v-5bbb28db"),c=c(),u0(),c),Hz={class:"footer"},uz=o3(()=>v1("span",null,"© 2023 puzzlenatalerzu.pl",-1)),pz=o3(()=>v1("span",null,"Wszystkie prawa zastrzeżone",-1)),Vz=o3(()=>v1("span",null,"Kopiowanie i rozpowszechnianie bez zgody puzzlenatalerzu.pl zabronione",-1)),Mz=o3(()=>v1("br",null,null,-1)),Cz=o3(()=>v1("span",null,[l9("Masz uwagi? Chcesz dodać swój przepis na stronę? Napisz do nas na "),v1("a",{href:"mailto:kontakt@puzzlenatalerzu.pl"},"kontakt@puzzlenatalerzu.pl")],-1)),dz=o3(()=>v1("br",null,null,-1)),Lz=C2({__name:"AppFooter",setup(c){return(a,e)=>(y1(),F1("footer",Hz,[n1(m9,{class:"logo"}),uz,pz,Vz,Mz,Cz,dz]))}});const gz=l3(Lz,[["__scopeId","data-v-5bbb28db"]]),z9=c=>(H0("data-v-d565b43e"),c=c(),u0(),c),xz={class:"header"},bz=z9(()=>v1("span",{class:"name"},"Puzzle na talerzu",-1)),Nz=z9(()=>v1("input",{type:"search",placeholder:"np. kurczak curry",class:"search"},null,-1)),Sz={class:"toggle","aria-label":"Show/Hide menu"},wz=C2({__name:"AppNavbar",setup(c){return(a,e)=>{const r=p0("font-awesome-icon");return y1(),F1("header",xz,[n1(m9,{class:"logo"}),bz,Nz,v1("button",Sz,[n1(r,{icon:["fas","bars"]})])])}}});const yz=l3(wz,[["__scopeId","data-v-d565b43e"]]),kz=C2({__name:"App",setup(c){return(a,e)=>{const r=p0("router-view");return y1(),F1(P1,null,[n1(yz),v1("main",null,[n1(r)]),n1(gz)],64)}}}),Az="modulepreload",Pz=function(c){return"/"+c},d5={},Tz=function(a,e,r){if(!e||e.length===0)return a();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=Pz(s),s in d5)return;d5[s]=!0;const n=s.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!r)for(let o=i.length-1;o>=0;o--){const z=i[o];if(z.href===s&&(!n||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":Az,n||(t.as="script",t.crossOrigin=""),t.href=s,document.head.appendChild(t),n)return new Promise((o,z)=>{t.addEventListener("load",o),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>a()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $2=typeof window<"u";function Fz(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function H6(c,a){const e={};for(const r in a){const i=a[r];e[r]=O1(i)?i.map(c):c(i)}return e}const L3=()=>{},O1=Array.isArray,Rz=/\/$/,Bz=c=>c.replace(Rz,"");function u6(c,a,e="/"){let r,i={},s="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(r=a.slice(0,l),s=a.slice(l+1,f>-1?f:a.length),i=c(s)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=qz(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:n}}function _z(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function L5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Ez(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&e3(a.matched[r],e.matched[i])&&v9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function e3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function v9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Dz(c[e],a[e]))return!1;return!0}function Dz(c,a){return O1(c)?g5(c,a):O1(a)?g5(a,c):c===a}function g5(c,a){return O1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function qz(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var A3;(function(c){c.pop="pop",c.push="push"})(A3||(A3={}));var g3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(g3||(g3={}));function Oz(c){if(!c)if($2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Bz(c)}const Uz=/^[^#]+#/;function $z(c,a){return c.replace(Uz,"#")+a}function Iz(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const q4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gz(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Iz(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function x5(c,a){return(history.state?history.state.position-a:-1)+c}const B6=new Map;function Wz(c,a){B6.set(c,a)}function jz(c){const a=B6.get(c);return B6.delete(c),a}let Zz=()=>location.protocol+"//"+location.host;function h9(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let f=i.includes(c.slice(s))?c.slice(s).length:1,l=i.slice(f);return l[0]!=="/"&&(l="/"+l),L5(l,"")}return L5(e,c)+r+i}function Kz(c,a,e,r){let i=[],s=[],n=null;const f=({state:h})=>{const u=h9(c,location),S=e.value,w=a.value;let B=0;if(h){if(e.value=u,a.value=h,n&&n===S){n=null;return}B=w?h.position-w.position:0}else r(u);i.forEach(M=>{M(e.value,S,{delta:B,type:A3.pop,direction:B?B>0?g3.forward:g3.back:g3.unknown})})};function l(){n=e.value}function t(h){i.push(h);const u=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:q4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:t,destroy:z}}function b5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?q4():null}}function Yz(c){const{history:a,location:e}=window,r={value:h9(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(l,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:Zz()+c+l;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(l,t){const o=K({},a.state,b5(i.value.back,l,i.value.forward,!0),t,{position:i.value.position});s(l,o,!0),r.value=l}function f(l,t){const o=K({},i.value,a.state,{forward:l,scroll:q4()});s(o.current,o,!0);const z=K({},b5(r.value,l,null),{position:o.position+1},t);s(l,z,!1),r.value=l}return{location:r,state:i,push:f,replace:n}}function Xz(c){c=Oz(c);const a=Yz(c),e=Kz(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=K({location:"",base:c,go:r,createHref:$z.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function Qz(c){return typeof c=="string"||c&&typeof c=="object"}function H9(c){return typeof c=="string"||typeof c=="symbol"}const t2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},u9=Symbol("");var N5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(N5||(N5={}));function r3(c,a){return K(new Error,{type:c,[u9]:!0},a)}function X1(c,a){return c instanceof Error&&u9 in c&&(a==null||!!(c.type&a))}const S5="[^/]+?",Jz={sensitive:!1,strict:!1,start:!0,end:!0},cv=/[.+*?^${}()[\]/\\]/g;function av(c,a){const e=K({},Jz,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(cv,"\\$&"),u+=40;else if(h.type===1){const{value:S,repeatable:w,optional:B,regexp:M}=h;s.push({name:S,repeatable:w,optional:B});const d=M||S5;if(d!==S5){u+=10;try{new RegExp(`(${d})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${d}): `+y.message)}}let R=w?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(R=B&&t.length<2?`(?:/${R})`:"/"+R),B&&(R+="?"),i+=R,u+=20,B&&(u+=-8),w&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",S=s[h-1];z[S.name]=u&&S.repeatable?u.split("/"):u}return z}function l(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:S,repeatable:w,optional:B}=u,M=S in t?t[S]:"";if(O1(M)&&!w)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const d=O1(M)?M.join("/"):M;if(!d)if(B)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${S}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:f,stringify:l}}function ev(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function rv(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=ev(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(w5(r))return 1;if(w5(i))return-1}return i.length-r.length}function w5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const iv={type:0,value:""},sv=/[a-zA-Z0-9_]/;function nv(c){if(!c)return[[]];if(c==="/")return[[iv]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let f=0,l,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:sv.test(l)?h():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function fv(c,a,e){const r=av(nv(c.path),e),i=K(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function lv(c,a){const e=[],r=new Map;a=A5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,S=ov(o);S.aliasOf=h&&h.record;const w=A5(a,o),B=[S];if("alias"in o){const R=typeof o.alias=="string"?[o.alias]:o.alias;for(const y of R)B.push(K({},S,{components:h?h.record.components:S.components,path:y,aliasOf:h?h.record:S}))}let M,d;for(const R of B){const{path:y}=R;if(z&&y[0]!=="/"){const $=z.record.path,Q=$[$.length-1]==="/"?"":"/";R.path=z.record.path+(y&&Q+y)}if(M=fv(R,z,w),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!k5(M)&&n(o.name)),S.children){const $=S.children;for(let Q=0;Q<$.length;Q++)s($[Q],M,h&&h.children[Q])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return d?()=>{n(d)}:L3}function n(o){if(H9(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&rv(o,e[z])>=0&&(o.record.path!==e[z].record.path||!p9(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!k5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},S,w;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw r3(1,{location:o});w=h.record.name,u=K(y5(z.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&y5(o.params,h.keys.map(d=>d.name))),S=h.stringify(u)}else if("path"in o)S=o.path,h=e.find(d=>d.re.test(S)),h&&(u=h.parse(S),w=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw r3(1,{location:o,currentLocation:z});w=h.record.name,u=K({},z.params,o.params),S=h.stringify(u)}const B=[];let M=h;for(;M;)B.unshift(M.record),M=M.parent;return{name:w,path:S,params:u,matched:B,meta:mv(B)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:i}}function y5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function ov(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:tv(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function tv(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function k5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function mv(c){return c.reduce((a,e)=>K(a,e.meta),{})}function A5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function p9(c,a){return a.children.some(e=>e===c||p9(c,e))}const V9=/#/g,zv=/&/g,vv=/\//g,hv=/=/g,Hv=/\?/g,M9=/\+/g,uv=/%5B/g,pv=/%5D/g,C9=/%5E/g,Vv=/%60/g,d9=/%7B/g,Mv=/%7C/g,L9=/%7D/g,Cv=/%20/g;function x0(c){return encodeURI(""+c).replace(Mv,"|").replace(uv,"[").replace(pv,"]")}function dv(c){return x0(c).replace(d9,"{").replace(L9,"}").replace(C9,"^")}function _6(c){return x0(c).replace(M9,"%2B").replace(Cv,"+").replace(V9,"%23").replace(zv,"%26").replace(Vv,"`").replace(d9,"{").replace(L9,"}").replace(C9,"^")}function Lv(c){return _6(c).replace(hv,"%3D")}function gv(c){return x0(c).replace(V9,"%23").replace(Hv,"%3F")}function xv(c){return c==null?"":gv(c).replace(vv,"%2F")}function L4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function bv(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(M9," "),n=s.indexOf("="),f=L4(n<0?s:s.slice(0,n)),l=n<0?null:L4(s.slice(n+1));if(f in a){let t=a[f];O1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function P5(c){let a="";for(let e in c){const r=c[e];if(e=Lv(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(O1(r)?r.map(s=>s&&_6(s)):[r&&_6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function Nv(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=O1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Sv=Symbol(""),T5=Symbol(""),O4=Symbol(""),b0=Symbol(""),E6=Symbol("");function h3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function v2(c,a,e,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((n,f)=>{const l=z=>{z===!1?f(r3(4,{from:e,to:a})):z instanceof Error?f(z):Qz(z)?f(r3(2,{from:a,to:z})):(s&&r.enterCallbacks[i]===s&&typeof z=="function"&&s.push(z),n())},t=c.call(r&&r.instances[i],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>f(z))})}function p6(c,a,e,r){const i=[];for(const s of c)for(const n in s.components){let f=s.components[n];if(!(a!=="beforeRouteEnter"&&!s.instances[n]))if(wv(f)){const t=(f.__vccOpts||f)[a];t&&i.push(v2(t,e,r,s,n))}else{let l=f();i.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${s.path}"`));const o=Fz(t)?t.default:t;s.components[n]=o;const h=(o.__vccOpts||o)[a];return h&&v2(h,e,r,s,n)()}))}}return i}function wv(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function F5(c){const a=q1(O4),e=q1(b0),r=m1(()=>a.resolve(Y2(c.to))),i=m1(()=>{const{matched:l}=r.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(e3.bind(null,o));if(h>-1)return h;const u=R5(l[t-2]);return t>1&&R5(o)===u&&z[z.length-1].path!==u?z.findIndex(e3.bind(null,l[t-2])):h}),s=m1(()=>i.value>-1&&Pv(e.params,r.value.params)),n=m1(()=>i.value>-1&&i.value===e.matched.length-1&&v9(e.params,r.value.params));function f(l={}){return Av(l)?a[Y2(c.replace)?"replace":"push"](Y2(c.to)).catch(L3):Promise.resolve()}return{route:r,href:m1(()=>r.value.href),isActive:s,isExactActive:n,navigate:f}}const yv=C2({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:F5,setup(c,{slots:a}){const e=T4(F5(c)),{options:r}=q1(O4),i=m1(()=>({[B5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[B5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:g0("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),kv=yv;function Av(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Pv(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!O1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function R5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const B5=(c,a,e)=>c??a??e,Tv=C2({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=q1(E6),i=m1(()=>c.route||r.value),s=q1(T5,0),n=m1(()=>{let t=Y2(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=m1(()=>i.value.matched[n.value]);m4(T5,m1(()=>n.value+1)),m4(Sv,f),m4(E6,i);const l=z0();return M3(()=>[l.value,f.value,c.name],([t,o,z],[h,u,S])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!e3(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(w=>w(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=f.value,h=z&&z.components[o];if(!h)return _5(e.default,{Component:h,route:t});const u=z.props[o],S=u?u===!0?t.params:typeof u=="function"?u(t):u:null,B=g0(h,K({},S,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return _5(e.default,{Component:B,route:t})||B}}});function _5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Fv=Tv;function Rv(c){const a=lv(c.routes,c),e=c.parseQuery||bv,r=c.stringifyQuery||P5,i=c.history,s=h3(),n=h3(),f=h3(),l=gt(t2);let t=t2;$2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=H6.bind(null,V=>""+V),z=H6.bind(null,xv),h=H6.bind(null,L4);function u(V,P){let N,_;return H9(V)?(N=a.getRecordMatcher(V),_=P):_=V,a.addRoute(_,N)}function S(V){const P=a.getRecordMatcher(V);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(V=>V.record)}function B(V){return!!a.getRecordMatcher(V)}function M(V,P){if(P=K({},P||l.value),typeof V=="string"){const H=u6(e,V,P.path),p=a.resolve({path:H.path},P),C=i.createHref(H.fullPath);return K(H,p,{params:h(p.params),hash:L4(H.hash),redirectedFrom:void 0,href:C})}let N;if("path"in V)N=K({},V,{path:u6(e,V.path,P.path).path});else{const H=K({},V.params);for(const p in H)H[p]==null&&delete H[p];N=K({},V,{params:z(H)}),P.params=z(P.params)}const _=a.resolve(N,P),Z=V.hash||"";_.params=o(h(_.params));const m=_z(r,K({},V,{hash:dv(Z),path:_.path})),v=i.createHref(m);return K({fullPath:m,hash:Z,query:r===P5?Nv(V.query):V.query||{}},_,{redirectedFrom:void 0,href:v})}function d(V){return typeof V=="string"?u6(e,V,l.value.path):K({},V)}function R(V,P){if(t!==V)return r3(8,{from:P,to:V})}function y(V){return i1(V)}function $(V){return y(K(d(V),{replace:!0}))}function Q(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let _=typeof N=="function"?N(V):N;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=d(_):{path:_},_.params={}),K({query:V.query,hash:V.hash,params:"path"in _?{}:V.params},_)}}function i1(V,P){const N=t=M(V),_=l.value,Z=V.state,m=V.force,v=V.replace===!0,H=Q(N);if(H)return i1(K(d(H),{state:typeof H=="object"?K({},Z,H.state):Z,force:m,replace:v}),P||N);const p=N;p.redirectedFrom=P;let C;return!m&&Ez(r,_,N)&&(C=r3(16,{to:p,from:_}),$1(_,_,!0,!1)),(C?Promise.resolve(C):w1(p,_)).catch(L=>X1(L)?X1(L,2)?L:l2(L):j(L,p,_)).then(L=>{if(L){if(X1(L,2))return i1(K({replace:v},d(L.to),{state:typeof L.to=="object"?K({},Z,L.to.state):Z,force:m}),P||p)}else L=d2(p,_,!0,v,Z);return f2(p,_,L),L})}function x1(V,P){const N=R(V,P);return N?Promise.reject(N):Promise.resolve()}function V1(V){const P=D2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(V):V()}function w1(V,P){let N;const[_,Z,m]=Bv(V,P);N=p6(_.reverse(),"beforeRouteLeave",V,P);for(const H of _)H.leaveGuards.forEach(p=>{N.push(v2(p,V,P))});const v=x1.bind(null,V,P);return N.push(v),H1(N).then(()=>{N=[];for(const H of s.list())N.push(v2(H,V,P));return N.push(v),H1(N)}).then(()=>{N=p6(Z,"beforeRouteUpdate",V,P);for(const H of Z)H.updateGuards.forEach(p=>{N.push(v2(p,V,P))});return N.push(v),H1(N)}).then(()=>{N=[];for(const H of m)if(H.beforeEnter)if(O1(H.beforeEnter))for(const p of H.beforeEnter)N.push(v2(p,V,P));else N.push(v2(H.beforeEnter,V,P));return N.push(v),H1(N)}).then(()=>(V.matched.forEach(H=>H.enterCallbacks={}),N=p6(m,"beforeRouteEnter",V,P),N.push(v),H1(N))).then(()=>{N=[];for(const H of n.list())N.push(v2(H,V,P));return N.push(v),H1(N)}).catch(H=>X1(H,8)?H:Promise.reject(H))}function f2(V,P,N){f.list().forEach(_=>V1(()=>_(V,P,N)))}function d2(V,P,N,_,Z){const m=R(V,P);if(m)return m;const v=P===t2,H=$2?history.state:{};N&&(_||v?i.replace(V.fullPath,K({scroll:v&&H&&H.scroll},Z)):i.push(V.fullPath,Z)),l.value=V,$1(V,P,N,v),l2()}let U1;function m3(){U1||(U1=i.listen((V,P,N)=>{if(!j3.listening)return;const _=M(V),Z=Q(_);if(Z){i1(K(Z,{replace:!0}),_).catch(L3);return}t=_;const m=l.value;$2&&Wz(x5(m.fullPath,N.delta),q4()),w1(_,m).catch(v=>X1(v,12)?v:X1(v,2)?(i1(v.to,_).then(H=>{X1(H,20)&&!N.delta&&N.type===A3.pop&&i.go(-1,!1)}).catch(L3),Promise.reject()):(N.delta&&i.go(-N.delta,!1),j(v,_,m))).then(v=>{v=v||d2(_,m,!1),v&&(N.delta&&!X1(v,8)?i.go(-N.delta,!1):N.type===A3.pop&&X1(v,20)&&i.go(-1,!1)),f2(_,m,v)}).catch(L3)}))}let _2=h3(),t1=h3(),X;function j(V,P,N){l2(V);const _=t1.list();return _.length?_.forEach(Z=>Z(V,P,N)):console.error(V),Promise.reject(V)}function Y1(){return X&&l.value!==t2?Promise.resolve():new Promise((V,P)=>{_2.add([V,P])})}function l2(V){return X||(X=!V,m3(),_2.list().forEach(([P,N])=>V?N(V):P()),_2.reset()),V}function $1(V,P,N,_){const{scrollBehavior:Z}=c;if(!$2||!Z)return Promise.resolve();const m=!N&&jz(x5(V.fullPath,0))||(_||!N)&&history.state&&history.state.scroll||null;return V4().then(()=>Z(V,P,m)).then(v=>v&&Gz(v)).catch(v=>j(v,V,P))}const C1=V=>i.go(V);let E2;const D2=new Set,j3={currentRoute:l,listening:!0,addRoute:u,removeRoute:S,hasRoute:B,getRoutes:w,resolve:M,options:c,push:y,replace:$,go:C1,back:()=>C1(-1),forward:()=>C1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:f.add,onError:t1.add,isReady:Y1,install(V){const P=this;V.component("RouterLink",kv),V.component("RouterView",Fv),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Y2(l)}),$2&&!E2&&l.value===t2&&(E2=!0,y(i.location).catch(Z=>{}));const N={};for(const Z in t2)Object.defineProperty(N,Z,{get:()=>l.value[Z],enumerable:!0});V.provide(O4,P),V.provide(b0,T7(N)),V.provide(E6,l);const _=V.unmount;D2.add(V),V.unmount=function(){D2.delete(V),D2.size<1&&(t=t2,U1&&U1(),U1=null,l.value=t2,E2=!1,X=!1),_()}}};function H1(V){return V.reduce((P,N)=>P.then(()=>V1(N)),Promise.resolve())}return j3}function Bv(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const f=a.matched[n];f&&(c.matched.find(t=>e3(t,f))?r.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>e3(t,l))||i.push(l))}return[e,r,i]}function U21(){return q1(O4)}function $21(){return q1(b0)}var x2=(c=>(c.Chicken="Chicken",c.CoconutCream="CoconutCream",c.RedPepper="RedPepper",c.Rice="Rice",c.Curry="Curry",c.Honey="Honey",c))(x2||{});const _v={CoconutCream:{calories:215,totalFat:21,saturatedFat:4.8,sodium:.03,totalCarbohydrate:4.8,sugar:1.9},Chicken:{calories:136,totalFat:3,saturatedFat:.6,cholesterol:.082,sodium:.051,protein:25},RedPepper:{calories:28,totalCarbohydrate:6.7,sugar:4.4,protein:.9},Rice:{calories:130,totalCarbohydrate:28,protein:2.7},Curry:{calories:104,totalFat:4.6,saturatedFat:.6,cholesterol:.032,sodium:.031,totalCarbohydrate:3.2,sugar:.9,protein:12},Honey:{calories:304,totalCarbohydrate:82,sugar:82,protein:.3}},U2=c=>_v[c],Ev="/assets/curry-chicken-a80ff986.jpg";function Dv(c){return new URL(Object.assign({"../../../assets/photos/curry-chicken.jpg":Ev})[`../../../assets/photos/${c}`],self.location).href}var Q1=(c=>(c.Preparation1="Preparation1",c.Preparation2="Preparation2",c.Preparation3="Preparation3",c.Preparation4="Preparation4",c.Preparation5="Preparation5",c.Frying1="Frying1",c.Frying2="Frying2",c.Frying3="Frying3",c.Frying4="Frying4",c.Frying5="Frying5",c.Sauce1="Sauce1",c.Sauce2="Sauce2",c.Sauce3="Sauce3",c.Sauce4="Sauce4",c.Sauce5="Sauce5",c.Mixing1="Mixing1",c.Mixing2="Mixing2",c.Mixing3="Mixing3",c.Mixing4="Mixing4",c.Mixing5="Mixing5",c))(Q1||{});const qv={name:"Kurczak curry",imageUrl:Dv("curry-chicken.jpg"),slug:"curry-kurczak",shortDescription:"Szybkie danie z piersi z kurczaka doprawione curry",tags:["kurczak","curry","indyjskie","szybkie","nowe"],ingredients:[{name:"Pierś z kurczaka",quantity:500,quantityDescription:"500g piersi z kurczaka",nutritionalValue:U2(x2.Chicken),instructions:[{details:"Umyj piersi i pokrój w kostkę.",cookingPhase:Q1.Preparation1},{details:"Dodaj kurczaka i podsmaż na dużej patelni (najlepiej do woka) aż nie będzie już różowy.",cookingPhase:Q1.Frying1}]},{name:"Czerwona papryka",quantity:120,quantityDescription:"1 czerwona papryka (ok 120g)",nutritionalValue:U2(x2.RedPepper),instructions:[{details:"Pokrój paprykę w kostkę.",cookingPhase:Q1.Preparation1},{details:"Przygotowaną paprykę dodaj do kurczaka na patelnię i smaż przez 5 minut.",cookingPhase:Q1.Frying2}]},{name:"Krem kokosowy",quantity:476,quantityDescription:"1 krem kokosowy (400ml)",nutritionalValue:U2(x2.CoconutCream),instructions:[{details:"Dodaj krem kokosowy na patelnię.",cookingPhase:Q1.Frying3}]},{name:"Curry",quantity:12,quantityDescription:"2 łyżki curry",nutritionalValue:U2(x2.Curry),instructions:[{details:"Dodaj curry na patelnię.",cookingPhase:Q1.Frying3}]},{name:"Miód",quantity:21,quantityDescription:"1 łyżka miodu",nutritionalValue:U2(x2.Honey),instructions:[{details:"Dodaj miód na patelnię.",cookingPhase:Q1.Frying3}]},{name:"Ryż",quantity:100,quantityDescription:"1 torebka ryżu (100g)",nutritionalValue:U2(x2.Rice),instructions:[{details:"Ugotuj ryż i dodaj go na palelnię.",cookingPhase:Q1.Mixing1}]}]},g9=()=>{const c=[qv],a=19;for(let e=0;e<a;e++)c.push({name:"Wkrótce",imageUrl:"https://picsum.photos/1000/1000/?random&i="+e,slug:"soon-"+e,shortDescription:"soon-desc-"+e,tags:["soon"],ingredients:[]});return c},Ov=async()=>(await new Promise(c=>setTimeout(c,300)),{data:g9(),status:200,statusText:"OK",headers:{},config:{}}),I21=async c=>{await new Promise(e=>setTimeout(e,300));const a=g9().find(e=>e.slug==c);return{data:a,status:a===void 0?404:200,statusText:"OK",headers:{},config:{}}},Uv=c=>(H0("data-v-b60c7e0b"),c=c(),u0(),c),$v={class:"container"},Iv=Uv(()=>v1("h1",{class:"recommended-recipes"}," Polecane przepisy ",-1)),Gv={key:0,class:"gallery"},Wv=["src","alt"],jv={class:"name"},Zv={key:1},Kv=C2({__name:"RecipeList",setup(c){const a=z0();return Ov().then(e=>a.value=e.data),(e,r)=>{const i=p0("router-link");return y1(),F1("div",$v,[Iv,v1("div",null,[a.value?(y1(),F1("div",Gv,[(y1(!0),F1(P1,null,am(a.value,s=>(y1(),F1("div",{key:s.slug,class:"recipe-card"},[n1(i,{to:"/przepisy/"+s.slug},{default:G7(()=>[v1("img",{src:s.imageUrl,alt:s.name,class:"photo"},null,8,Wv),v1("div",jv,Jo(s.name),1)]),_:2},1032,["to"])]))),128))])):(y1(),F1("div",Zv," Ładowanie... "))])])}}});const Yv=l3(Kv,[["__scopeId","data-v-b60c7e0b"]]),Xv={class:"container"},Qv=C2({__name:"HomeView",setup(c){return(a,e)=>(y1(),F1("div",Xv,[n1(Yv)]))}});const Jv=l3(Qv,[["__scopeId","data-v-1b71a1c2"]]);const ch={},ah={class:"container"};function eh(c,a){return y1(),F1("div",ah," Nie znaleziono strony :( ")}const rh=l3(ch,[["render",eh],["__scopeId","data-v-81215c6e"]]),x9=Rv({history:Xz("/"),routes:[{path:"/",name:"home",component:Jv},{path:"/recipes/:slug",name:"recipes",alias:"/przepisy/:slug",component:()=>Tz(()=>import("./RecipeView-0b40e2ac.js"),["assets/RecipeView-0b40e2ac.js","assets/RecipeView-7108eaad.css"])},{alias:"/:pathMatch(.*)*",path:"/not-found",name:"NotFound",component:rh}]});function D6(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function E5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function q6(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?E5(Object(e),!0).forEach(function(r){D6(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):E5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}var ih=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(r,i){if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");if(n.async=!0,n.src=a,n.defer=e.defer,e.preconnectOrigin){var f=document.createElement("link");f.href=e.preconnectOrigin,f.rel="preconnect",s.appendChild(f)}s.appendChild(n),n.onload=r,n.onerror=i}})},sh=function c(a){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];if(!r.length)return a;var s=r.shift();if(!(!V3(a)||!V3(s))){for(var n in s)V3(s[n])?(a[n]||Object.assign(a,D6({},n,{})),c(a[n],s[n])):Object.assign(a,D6({},n,s[n]));return c.apply(void 0,[a].concat(r))}},_3=function(){return!(typeof window>"u"||typeof document>"u")},D5=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;_3()},nh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D5('Missing "appName" property inside the plugin options.',a.app_name==null),D5('Missing "name" property in the route.',a.screen_name==null),a};function fh(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=c.split("/"),r=a.split("/");return e[0]===""&&a[a.length-1]==="/"&&e.shift(),r.join("/")+e.join("/")}var lh=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},b9={},oh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=lh();b9=sh(e,a)},N1=function(){return b9},T2=function(){var c,a=N1(),e=a.globalObjectName;!_3()||typeof window[e]>"u"||(c=window)[e].apply(c,arguments)},N0=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];var r=N1(),i=r.config,s=r.includes;T2.apply(void 0,["config",i.id].concat(a)),Array.isArray(s)&&s.forEach(function(n){T2.apply(void 0,["config",n.id].concat(a))})},q5=function(a,e){_3()&&(window["ga-disable-".concat(a)]=e)},N9=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=N1(),e=a.config,r=a.includes;q5(e.id,c),Array.isArray(r)&&r.forEach(function(i){return q5(i.id,c)})},S9=function(){N9(!0)},th=function(){N9(!1)},w9,mh=function(a){w9=a},S0=function(){return w9},B2=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=N1(),r=e.includes,i=e.defaultGroupName;a.send_to==null&&Array.isArray(r)&&r.length&&(a.send_to=r.map(function(s){return s.id}).concat(i)),T2("event",c,a)},y9=function(c){if(_3()){var a;if(typeof c=="string")a={page_path:c};else if(c.path||c.fullPath){var e=N1(),r=e.pageTrackerUseFullPath,i=e.pageTrackerPrependBase,s=S0(),n=s&&s.options.base,f=r?c.fullPath:c.path;a=q6(q6({},c.name&&{page_title:c.name}),{},{page_path:i?fh(f,n):f})}else a=c;a.page_location==null&&(a.page_location=window.location.href),a.send_page_view==null&&(a.send_page_view=!0),B2("page_view",a)}},k9=function(c){var a=N1(),e=a.appName;if(c){var r;typeof c=="string"?r={screen_name:c}:r=c,r.app_name=r.app_name||e,B2("screen_view",r)}},zh=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];B2.apply(void 0,["exception"].concat(a))},vh=function(c){N0("linker",c)},hh=function(c){B2("timing_complete",c)},Hh=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];T2.apply(void 0,["set"].concat(a))},uh=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];B2.apply(void 0,["refund"].concat(a))},ph=function(c){B2("purchase",c)},Vh=function(c){N0({custom_map:c})},Mh=Object.freeze({__proto__:null,query:T2,config:N0,optOut:S9,optIn:th,pageview:y9,screenview:k9,exception:zh,linker:vh,time:hh,set:Hh,refund:uh,purchase:ph,customMap:Vh,event:B2}),Ch=function(a){a.config.globalProperties.$gtag=Mh},dh=function(){if(_3()){var c=N1(),a=c.enabled,e=c.globalObjectName,r=c.globalDataLayerName;return window[e]==null&&(window[r]=window[r]||[],window[e]=function(){window[r].push(arguments)}),window[e]("js",new Date),a||S9(),window[e]}},O5=function(a){return q6({send_page_view:!1},a)},A9=function(){var c=N1(),a=c.config,e=c.includes;T2("config",a.id,O5(a.params)),Array.isArray(e)&&e.forEach(function(r){T2("config",r.id,O5(r.params))})},U5=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=N1(),r=e.appName,i=e.pageTrackerTemplate,s=e.pageTrackerScreenviewEnabled,n=e.pageTrackerSkipSamePath;if(!(n&&c.path===a.path)){var f=c;if(O(i)?f=i(c,a):s&&(f=nh({app_name:r,screen_name:c.name})),s){k9(f);return}y9(f)}},$5=function(a){var e=N1(),r=e.pageTrackerExcludedRoutes;return r.includes(a.path)||r.includes(a.name)},Lh=function(){var c=N1(),a=c.onBeforeTrack,e=c.onAfterTrack,r=S0();r.isReady().then(function(){V4().then(function(){var i=r.currentRoute;A9(),!$5(i.value)&&U5(i.value)}),r.afterEach(function(i,s){V4().then(function(){$5(i)||(O(a)&&a(i,s),U5(i,s),O(e)&&e(i,s))})})})},gh=function(){var c=N1(),a=c.onReady,e=c.onError,r=c.globalObjectName,i=c.globalDataLayerName,s=c.config,n=c.customResourceURL,f=c.customPreconnectOrigin,l=c.deferScriptLoad,t=c.pageTrackerEnabled,o=c.disableScriptLoad,z=!!(t&&S0());if(dh(),z?Lh():A9(),!o)return ih("".concat(n,"?id=").concat(s.id,"&l=").concat(i),{preconnectOrigin:f,defer:l}).then(function(){a&&a(window[r])}).catch(function(h){return e&&e(h),h})},xh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;Ch(a),oh(e),mh(r),N1().bootstrap&&gh()};function I5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?I5(Object(e),!0).forEach(function(r){o1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):I5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function g4(c){"@babel/helpers - typeof";return g4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g4(c)}function bh(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function G5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Nh(c,a,e){return a&&G5(c.prototype,a),e&&G5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function o1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function w0(c,a){return wh(c)||kh(c,a)||P9(c,a)||Ph()}function E3(c){return Sh(c)||yh(c)||P9(c)||Ah()}function Sh(c){if(Array.isArray(c))return O6(c)}function wh(c){if(Array.isArray(c))return c}function yh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function kh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function P9(c,a){if(c){if(typeof c=="string")return O6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O6(c,a)}}function O6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Ah(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ph(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W5=function(){},y0={},T9={},F9=null,R9={mark:W5,measure:W5};try{typeof window<"u"&&(y0=window),typeof document<"u"&&(T9=document),typeof MutationObserver<"u"&&(F9=MutationObserver),typeof performance<"u"&&(R9=performance)}catch{}var Th=y0.navigator||{},j5=Th.userAgent,Z5=j5===void 0?"":j5,p2=y0,a1=T9,K5=F9,c4=R9;p2.document;var n2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",B9=~Z5.indexOf("MSIE")||~Z5.indexOf("Trident/"),a4,e4,r4,i4,s4,e2="___FONT_AWESOME___",U6=16,_9="fa",E9="svg-inline--fa",F2="data-fa-i2svg",$6="data-fa-pseudo-element",Fh="data-fa-pseudo-element-pending",k0="data-prefix",A0="data-icon",Y5="fontawesome-i2svg",Rh="async",Bh=["HTML","HEAD","STYLE","SCRIPT"],D9=function(){try{return!0}catch{return!1}}(),c1="classic",s1="sharp",P0=[c1,s1];function D3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[c1]}})}var P3=D3((a4={},o1(a4,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),o1(a4,s1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),a4)),T3=D3((e4={},o1(e4,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),o1(e4,s1,{solid:"fass",regular:"fasr",light:"fasl"}),e4)),F3=D3((r4={},o1(r4,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),o1(r4,s1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),r4)),_h=D3((i4={},o1(i4,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),o1(i4,s1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),i4)),Eh=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,q9="fa-layers-text",Dh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qh=D3((s4={},o1(s4,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),o1(s4,s1,{900:"fass",400:"fasr",300:"fasl"}),s4)),O9=[1,2,3,4,5,6,7,8,9,10],Oh=O9.concat([11,12,13,14,15,16,17,18,19,20]),Uh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],S2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R3=new Set;Object.keys(T3[c1]).map(R3.add.bind(R3));Object.keys(T3[s1]).map(R3.add.bind(R3));var $h=[].concat(P0,E3(R3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",S2.GROUP,S2.SWAP_OPACITY,S2.PRIMARY,S2.SECONDARY]).concat(O9.map(function(c){return"".concat(c,"x")})).concat(Oh.map(function(c){return"w-".concat(c)})),x3=p2.FontAwesomeConfig||{};function Ih(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Gh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var Wh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wh.forEach(function(c){var a=w0(c,2),e=a[0],r=a[1],i=Gh(Ih(e));i!=null&&(x3[r]=i)})}var U9={styleDefault:"solid",familyDefault:"classic",cssPrefix:_9,replacementClass:E9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};x3.familyPrefix&&(x3.cssPrefix=x3.familyPrefix);var i3=A(A({},U9),x3);i3.autoReplaceSvg||(i3.observeMutations=!1);var F={};Object.keys(U9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){i3[c]=e,b3.forEach(function(r){return r(F)})},get:function(){return i3[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){i3.cssPrefix=a,b3.forEach(function(e){return e(F)})},get:function(){return i3.cssPrefix}});p2.FontAwesomeConfig=F;var b3=[];function jh(c){return b3.push(c),function(){b3.splice(b3.indexOf(c),1)}}var m2=U6,Z1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zh(c){if(!(!c||!n2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return a1.head.insertBefore(a,r),c}}var Kh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B3(){for(var c=12,a="";c-- >0;)a+=Kh[Math.random()*62|0];return a}function t3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function T0(c){return c.classList?t3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function $9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat($9(c[e]),'" ')},"").trim()}function U4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function F0(c){return c.size!==Z1.size||c.x!==Z1.x||c.y!==Z1.y||c.rotate!==Z1.rotate||c.flipX||c.flipY}function Xh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:t}}function Qh(c){var a=c.transform,e=c.width,r=e===void 0?U6:e,i=c.height,s=i===void 0?U6:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&B9?l+="translate(".concat(a.x/m2-r/2,"em, ").concat(a.y/m2-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/m2,"em), calc(-50% + ").concat(a.y/m2,"em)) "):l+="translate(".concat(a.x/m2,"em, ").concat(a.y/m2,"em) "),l+="scale(".concat(a.size/m2*(a.flipX?-1:1),", ").concat(a.size/m2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Jh=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function I9(){var c=_9,a=E9,e=F.cssPrefix,r=F.replacementClass,i=Jh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var X5=!1;function V6(){F.autoAddCss&&!X5&&(Zh(I9()),X5=!0)}var cH={mixout:function(){return{dom:{css:I9,insertCss:V6}}},hooks:function(){return{beforeDOMElementCreation:function(){V6()},beforeI2svg:function(){V6()}}}},r2=p2||{};r2[e2]||(r2[e2]={});r2[e2].styles||(r2[e2].styles={});r2[e2].hooks||(r2[e2].hooks={});r2[e2].shims||(r2[e2].shims=[]);var _1=r2[e2],G9=[],aH=function c(){a1.removeEventListener("DOMContentLoaded",c),x4=1,G9.map(function(a){return a()})},x4=!1;n2&&(x4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),x4||a1.addEventListener("DOMContentLoaded",aH));function eH(c){n2&&(x4?setTimeout(c,0):G9.push(c))}function q3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?$9(c):"<".concat(a," ").concat(Yh(r),">").concat(s.map(q3).join(""),"</").concat(a,">")}function Q5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var rH=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},M6=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?rH(e,i):e,l,t,o;for(r===void 0?(l=1,o=a[s[0]]):(l=0,o=r);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function iH(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function I6(c){var a=iH(c);return a.length===1?a[0].toString(16):null}function sH(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function J5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function G6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=J5(a);typeof _1.hooks.addPack=="function"&&!i?_1.hooks.addPack(c,J5(a)):_1.styles[c]=A(A({},_1.styles[c]||{}),s),c==="fas"&&G6("fa",a)}var n4,f4,l4,G2=_1.styles,nH=_1.shims,fH=(n4={},o1(n4,c1,Object.values(F3[c1])),o1(n4,s1,Object.values(F3[s1])),n4),R0=null,W9={},j9={},Z9={},K9={},Y9={},lH=(f4={},o1(f4,c1,Object.keys(P3[c1])),o1(f4,s1,Object.keys(P3[s1])),f4);function oH(c){return~$h.indexOf(c)}function tH(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!oH(i)?i:null}var X9=function(){var a=function(s){return M6(G2,function(n,f,l){return n[l]=M6(f,s,{}),n},{})};W9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),j9=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),Y9=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var e="far"in G2||F.autoFetchSvg,r=M6(nH,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});Z9=r.names,K9=r.unicodes,R0=$4(F.styleDefault,{family:F.familyDefault})};jh(function(c){R0=$4(c.styleDefault,{family:F.familyDefault})});X9();function B0(c,a){return(W9[c]||{})[a]}function mH(c,a){return(j9[c]||{})[a]}function w2(c,a){return(Y9[c]||{})[a]}function Q9(c){return Z9[c]||{prefix:null,iconName:null}}function zH(c){var a=K9[c],e=B0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function V2(){return R0}var _0=function(){return{prefix:null,iconName:null,rest:[]}};function $4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?c1:e,i=P3[r][c],s=T3[r][c]||T3[r][i],n=c in _1.styles?c:null;return s||n||null}var c7=(l4={},o1(l4,c1,Object.keys(F3[c1])),o1(l4,s1,Object.keys(F3[s1])),l4);function I4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},o1(a,c1,"".concat(F.cssPrefix,"-").concat(c1)),o1(a,s1,"".concat(F.cssPrefix,"-").concat(s1)),a),n=null,f=c1;(c.includes(s[c1])||c.some(function(t){return c7[c1].includes(t)}))&&(f=c1),(c.includes(s[s1])||c.some(function(t){return c7[s1].includes(t)}))&&(f=s1);var l=c.reduce(function(t,o){var z=tH(F.cssPrefix,o);if(G2[o]?(o=fH[f].includes(o)?_h[f][o]:o,n=o,t.prefix=o):lH[f].indexOf(o)>-1?(n=o,t.prefix=$4(o,{family:f})):z?t.iconName=z:o!==F.replacementClass&&o!==s[c1]&&o!==s[s1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?Q9(t.iconName):{},u=w2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!G2.far&&G2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},_0());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===s1&&(G2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=w2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=V2()||"fas"),l}var vH=function(){function c(){bh(this,c),this.definitions={}}return Nh(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=A(A({},e.definitions[f]||{}),n[f]),G6(f,n[f]);var l=F3[c1][f];l&&G6(l,n[f]),X9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),a7=[],W2={},Q2={},hH=Object.keys(Q2);function HH(c,a){var e=a.mixoutsTo;return a7=c,W2={},Object.keys(Q2).forEach(function(r){hH.indexOf(r)===-1&&delete Q2[r]}),a7.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),g4(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){W2[n]||(W2[n]=[]),W2[n].push(s[n])})}r.provides&&r.provides(Q2)}),e}function W6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=W2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function R2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=W2[c]||[];i.forEach(function(s){s.apply(null,e)})}function i2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q2[c]?Q2[c].apply(null,a):void 0}function j6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||V2();if(a)return a=w2(e,a)||a,Q5(J9.definitions,e,a)||Q5(_1.styles,e,a)}var J9=new vH,uH=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,R2("noAuto")},pH={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n2?(R2("beforeI2svg",a),i2("pseudoElements2svg",a),i2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,eH(function(){MH({autoReplaceSvgRoot:e}),R2("watch",a)})}},VH={icon:function(a){if(a===null)return null;if(g4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:w2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=$4(a[0]);return{prefix:r,iconName:w2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Eh))){var i=I4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||V2(),iconName:w2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=V2();return{prefix:s,iconName:w2(s,a)||a}}}},S1={noAuto:uH,config:F,dom:pH,parse:VH,library:J9,findIconDefinition:j6,toHtml:q3},MH=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?a1:e;(Object.keys(_1.styles).length>0||F.autoFetchSvg)&&n2&&F.autoReplaceSvg&&S1.dom.i2svg({node:r})};function G4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return q3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(n2){var r=a1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function CH(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(F0(n)&&e.found&&!r.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};i.style=U4(A(A({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function dH(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:n}),children:r}]}]}function E0(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,S=r.found?r:e,w=S.width,B=S.height,M=i==="fak",d=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(V1){return z.classes.indexOf(V1)===-1}).filter(function(V1){return V1!==""||!!V1}).concat(z.classes).join(" "),R={children:[],attributes:A(A({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(B)})},y=M&&!~z.classes.indexOf("fa-fw")?{width:"".concat(w/B*16*.0625,"em")}:{};u&&(R.attributes[F2]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(o||B3())},children:[l]}),delete R.attributes.title);var $=A(A({},R),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:f,styles:A(A({},y),z.styles)}),Q=r.found&&e.found?i2("generateAbstractMask",$)||{children:[],attributes:{}}:i2("generateAbstractIcon",$)||{children:[],attributes:{}},i1=Q.children,x1=Q.attributes;return $.children=i1,$.attributes=x1,f?dH($):CH($)}function e7(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=A(A(A({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[F2]="");var o=A({},n.styles);F0(i)&&(o.transform=Qh({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=U4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function LH(c){var a=c.content,e=c.title,r=c.extra,i=A(A(A({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=U4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var C6=_1.styles;function Z6(c){var a=c[0],e=c[1],r=c.slice(4),i=w0(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(S2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(S2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(S2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var gH={found:!1,width:512,height:512};function xH(c,a){!D9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function K6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=V2()),new Promise(function(r,i){if(i2("missingIconAbstract"),e==="fa"){var s=Q9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&C6[a]&&C6[a][c]){var n=C6[a][c];return r(Z6(n))}xH(c,a),r(A(A({},gH),{},{icon:F.showMissingIcons&&c?i2("missingIconAbstract")||{}:{}}))})}var r7=function(){},Y6=F.measurePerformance&&c4&&c4.mark&&c4.measure?c4:{mark:r7,measure:r7},p3='FA "6.4.2"',bH=function(a){return Y6.mark("".concat(p3," ").concat(a," begins")),function(){return cc(a)}},cc=function(a){Y6.mark("".concat(p3," ").concat(a," ends")),Y6.measure("".concat(p3," ").concat(a),"".concat(p3," ").concat(a," begins"),"".concat(p3," ").concat(a," ends"))},D0={begin:bH,end:cc},h4=function(){};function i7(c){var a=c.getAttribute?c.getAttribute(F2):null;return typeof a=="string"}function NH(c){var a=c.getAttribute?c.getAttribute(k0):null,e=c.getAttribute?c.getAttribute(A0):null;return a&&e}function SH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function wH(){if(F.autoReplaceSvg===!0)return H4.replace;var c=H4[F.autoReplaceSvg];return c||H4.replace}function yH(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function kH(c){return a1.createElement(c)}function ac(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?yH:kH:e;if(typeof c=="string")return a1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(ac(n,{ceFn:r}))}),i}function AH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var H4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(ac(i),e)}),e.getAttribute(F2)===null&&F.keepOriginalSource){var r=a1.createComment(AH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~T0(e).indexOf(F.replacementClass))return H4.replace(a);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return q3(f)}).join(`
`);e.setAttribute(F2,""),e.innerHTML=n}};function s7(c){c()}function ec(c,a){var e=typeof a=="function"?a:h4;if(c.length===0)e();else{var r=s7;F.mutateApproach===Rh&&(r=p2.requestAnimationFrame||s7),r(function(){var i=wH(),s=D0.begin("mutate");c.map(i),s(),e()})}}var q0=!1;function rc(){q0=!0}function X6(){q0=!1}var b4=null;function n7(c){if(K5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?h4:a,r=c.nodeCallback,i=r===void 0?h4:r,s=c.pseudoElementsCallback,n=s===void 0?h4:s,f=c.observeMutationsRoot,l=f===void 0?a1:f;b4=new K5(function(t){if(!q0){var o=V2();t3(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!i7(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&i7(z.target)&&~Uh.indexOf(z.attributeName))if(z.attributeName==="class"&&NH(z.target)){var h=I4(T0(z.target)),u=h.prefix,S=h.iconName;z.target.setAttribute(k0,u||o),S&&z.target.setAttribute(A0,S)}else SH(z.target)&&i(z.target)})}}),n2&&b4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function PH(){b4&&b4.disconnect()}function TH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function FH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=I4(T0(c));return i.prefix||(i.prefix=V2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mH(i.prefix,c.innerText)||B0(i.prefix,I6(c.innerText))),!i.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function RH(c){var a=t3(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||B3()):(a["aria-hidden"]="true",a.focusable="false")),a}function BH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=FH(c),r=e.iconName,i=e.prefix,s=e.rest,n=RH(c),f=W6("parseNodeAttributes",{},c),l=a.styleParser?TH(c):[];return A({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:Z1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var _H=_1.styles;function ic(c){var a=F.autoReplaceSvg==="nest"?f7(c,{styleParser:!1}):f7(c);return~a.extra.classes.indexOf(q9)?i2("generateLayersText",c,a):i2("generateSvgReplacementMutation",c,a)}var M2=new Set;P0.map(function(c){M2.add("fa-".concat(c))});Object.keys(P3[c1]).map(M2.add.bind(M2));Object.keys(P3[s1]).map(M2.add.bind(M2));M2=E3(M2);function l7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n2)return Promise.resolve();var e=a1.documentElement.classList,r=function(z){return e.add("".concat(Y5,"-").concat(z))},i=function(z){return e.remove("".concat(Y5,"-").concat(z))},s=F.autoFetchSvg?M2:P0.map(function(o){return"fa-".concat(o)}).concat(Object.keys(_H));s.includes("fa")||s.push("fa");var n=[".".concat(q9,":not([").concat(F2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(F2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=t3(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=D0.begin("onTree"),t=f.reduce(function(o,z){try{var h=ic(z);h&&o.push(h)}catch(u){D9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){ec(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),z(h)})})}function EH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ic(c).then(function(e){e&&ec([e],a)})}function DH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:j6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:j6(i||{})),c(r,A(A({},e),{},{mask:i}))}}var qH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Z1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,S=u===void 0?null:u,w=e.classes,B=w===void 0?[]:w,M=e.attributes,d=M===void 0?{}:M,R=e.styles,y=R===void 0?{}:R;if(a){var $=a.prefix,Q=a.iconName,i1=a.icon;return G4(A({type:"icon"},a),function(){return R2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(S||B3()):(d["aria-hidden"]="true",d.focusable="false")),E0({icons:{main:Z6(i1),mask:l?Z6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:Q,transform:A(A({},Z1),i),symbol:n,title:h,maskId:o,titleId:S,extra:{attributes:d,styles:y,classes:B}})})}},OH={mixout:function(){return{icon:DH(qH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=l7,e.nodeCallback=EH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?a1:r,s=e.callback,n=s===void 0?function(){}:s;return l7(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,l=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,S){Promise.all([K6(i,f),o.iconName?K6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var B=w0(w,2),M=B[0],d=B[1];u([e,E0({icons:{main:M,mask:d},prefix:f,iconName:i,transform:l,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,l=U4(f);l.length>0&&(i.style=l);var t;return F0(n)&&(t=i2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},UH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return G4({type:"layer"},function(){R2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(E3(s)).join(" ")},children:n}]})}}}},$H={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,l=r.attributes,t=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return G4({type:"counter",content:e},function(){return R2("beforeDOMElementCreation",{content:e,params:r}),LH({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(E3(f))}})})}}}},IH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Z1:i,n=r.title,f=n===void 0?null:n,l=r.classes,t=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return G4({type:"text",content:e},function(){return R2("beforeDOMElementCreation",{content:e,params:r}),e7({content:e,transform:A(A({},Z1),s),title:f,extra:{attributes:z,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(E3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,l=null;if(B9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,e7({content:e.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},GH=new RegExp('"',"ug"),o7=[1105920,1112319];function WH(c){var a=c.replace(GH,""),e=sH(a,0),r=e>=o7[0]&&e<=o7[1],i=a.length===2?a[0]===a[1]:!1;return{value:I6(i?a[0]:a),isSecondary:r||i}}function t7(c,a){var e="".concat(Fh).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=t3(c.children),n=s.filter(function(i1){return i1.getAttribute($6)===a})[0],f=p2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(Dh),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?s1:c1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?T3[h][l[2].toLowerCase()]:qh[h][t],S=WH(z),w=S.value,B=S.isSecondary,M=l[0].startsWith("FontAwesome"),d=B0(u,w),R=d;if(M){var y=zH(w);y.iconName&&y.prefix&&(d=y.iconName,u=y.prefix)}if(d&&!B&&(!n||n.getAttribute(k0)!==u||n.getAttribute(A0)!==R)){c.setAttribute(e,R),n&&c.removeChild(n);var $=BH(),Q=$.extra;Q.attributes[$6]=a,K6(d,u).then(function(i1){var x1=E0(A(A({},$),{},{icons:{main:i1,mask:_0()},prefix:u,iconName:R,extra:Q,watchable:!0})),V1=a1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(V1,c.firstChild):c.appendChild(V1),V1.outerHTML=x1.map(function(w1){return q3(w1)}).join(`