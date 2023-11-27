(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Z6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const e1={},O2=[],R1=()=>{},Ao=()=>!1,ko=/^on[^a-z]/,M4=c=>ko.test(c),K6=c=>c.startsWith("onUpdate:"),m1=Object.assign,Y6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Po=Object.prototype.hasOwnProperty,G=(c,a)=>Po.call(c,a),U=Array.isArray,o3=c=>d4(c)==="[object Map]",To=c=>d4(c)==="[object Set]",O=c=>typeof c=="function",z1=c=>typeof c=="string",C4=c=>typeof c=="symbol",s1=c=>c!==null&&typeof c=="object",t7=c=>(s1(c)||O(c))&&O(c.then)&&O(c.catch),Fo=Object.prototype.toString,d4=c=>Fo.call(c),Ro=c=>d4(c).slice(8,-1),a4=c=>d4(c)==="[object Object]",X6=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,e4=Z6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Bo=/-(\w)/g,W1=L4(c=>c.replace(Bo,(a,e)=>e?e.toUpperCase():"")),Eo=/\B([A-Z])/g,Q2=L4(c=>c.replace(Eo,"-$1").toLowerCase()),g4=L4(c=>c.charAt(0).toUpperCase()+c.slice(1)),r6=L4(c=>c?`on${g4(c)}`:""),N2=(c,a)=>!Object.is(c,a),i6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},l4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Do=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let B0;const V6=()=>B0||(B0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Q6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=z1(r)?Uo(r):Q6(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(z1(c)||s1(c))return c}const qo=/;(?![^(]*\))/g,_o=/:([^]+)/,Oo=/\/\*[^]*?\*\//g;function Uo(c){const a={};return c.replace(Oo,"").split(qo).forEach(e=>{if(e){const r=e.split(_o);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function J6(c){let a="";if(z1(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const r=J6(c[e]);r&&(a+=r+" ")}else if(s1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const $o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Io=Z6($o);function m7(c){return!!c||c===""}let A1;class z7{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=A1,!a&&A1&&(this.index=(A1.scopes||(A1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=A1;try{return A1=this,a()}finally{A1=e}}}on(){A1=this}off(){A1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Go(c){return new z7(c)}function Wo(c,a=A1){a&&a.active&&a.effects.push(c)}function jo(){return A1}const c8=c=>{const a=new Set(c);return a.w=0,a.n=0,a},v7=c=>(c.w&v2)>0,h7=c=>(c.n&v2)>0,Zo=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=v2},Ko=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];v7(i)&&!h7(i)?i.delete(c):a[e++]=i,i.w&=~v2,i.n&=~v2}a.length=e}},M6=new WeakMap;let n3=0,v2=1;const C6=30;let k1;const x2=Symbol(""),d6=Symbol("");class a8{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Wo(this,r)}run(){if(!this.active)return this.fn();let a=k1,e=m2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=k1,k1=this,m2=!0,v2=1<<++n3,n3<=C6?Zo(this):E0(this),this.fn()}finally{n3<=C6&&Ko(this),v2=1<<--n3,k1=this.parent,m2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k1===this?this.deferStop=!0:this.active&&(E0(this),this.onStop&&this.onStop(),this.active=!1)}}function E0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let m2=!0;const H7=[];function J2(){H7.push(m2),m2=!1}function c3(){const c=H7.pop();m2=c===void 0?!0:c}function g1(c,a,e){if(m2&&k1){let r=M6.get(c);r||M6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=c8()),u7(i)}}function u7(c,a){let e=!1;n3<=C6?h7(c)||(c.n|=v2,e=!v7(c)):e=!c.has(k1),e&&(c.add(k1),k1.deps.push(c))}function X1(c,a,e,r,i,s){const n=M6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&U(c)){const l=Number(r);n.forEach((t,o)=>{(o==="length"||!C4(o)&&o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":U(c)?X6(e)&&f.push(n.get("length")):(f.push(n.get(x2)),o3(c)&&f.push(n.get(d6)));break;case"delete":U(c)||(f.push(n.get(x2)),o3(c)&&f.push(n.get(d6)));break;case"set":o3(c)&&f.push(n.get(x2));break}if(f.length===1)f[0]&&L6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);L6(c8(l))}}function L6(c,a){const e=U(c)?c:[...c];for(const r of e)r.computed&&D0(r);for(const r of e)r.computed||D0(r)}function D0(c,a){(c!==k1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Yo=Z6("__proto__,__v_isRef,__isVue"),p7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(C4)),q0=Xo();function Xo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=W(this);for(let s=0,n=this.length;s<n;s++)g1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){J2();const r=W(this)[a].apply(this,e);return c3(),r}}),c}function Qo(c){const a=W(this);return g1(a,"has",c),a.hasOwnProperty(c)}class V7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const i=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw"&&r===(i?s?mt:L7:s?d7:C7).get(a))return a;const n=U(a);if(!i){if(n&&G(q0,e))return Reflect.get(q0,e,r);if(e==="hasOwnProperty")return Qo}const f=Reflect.get(a,e,r);return(C4(e)?p7.has(e):Yo(e))||(i||g1(a,"get",e),s)?f:H1(f)?n&&X6(e)?f:f.value:s1(f)?i?x7(f):b4(f):f}}class M7 extends V7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(W2(s)&&H1(s)&&!H1(r))return!1;if(!this._shallow&&(!o4(r)&&!W2(r)&&(s=W(s),r=W(r)),!U(a)&&H1(s)&&!H1(r)))return s.value=r,!0;const n=U(a)&&X6(e)?Number(e)<a.length:G(a,e),f=Reflect.set(a,e,r,i);return a===W(i)&&(n?N2(r,s)&&X1(a,"set",e,r):X1(a,"add",e,r)),f}deleteProperty(a,e){const r=G(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&X1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!C4(e)||!p7.has(e))&&g1(a,"has",e),r}ownKeys(a){return g1(a,"iterate",U(a)?"length":x2),Reflect.ownKeys(a)}}class Jo extends V7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const ct=new M7,at=new Jo,et=new M7(!0),e8=c=>c,x4=c=>Reflect.getPrototypeOf(c);function _3(c,a,e=!1,r=!1){c=c.__v_raw;const i=W(c),s=W(a);e||(N2(a,s)&&g1(i,"get",a),g1(i,"get",s));const{has:n}=x4(i),f=r?e8:e?n8:p3;if(n.call(i,a))return f(c.get(a));if(n.call(i,s))return f(c.get(s));c!==i&&c.get(a)}function O3(c,a=!1){const e=this.__v_raw,r=W(e),i=W(c);return a||(N2(c,i)&&g1(r,"has",c),g1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function U3(c,a=!1){return c=c.__v_raw,!a&&g1(W(c),"iterate",x2),Reflect.get(c,"size",c)}function _0(c){c=W(c);const a=W(this);return x4(a).has.call(a,c)||(a.add(c),X1(a,"add",c,c)),this}function O0(c,a){a=W(a);const e=W(this),{has:r,get:i}=x4(e);let s=r.call(e,c);s||(c=W(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?N2(a,n)&&X1(e,"set",c,a):X1(e,"add",c,a),this}function U0(c){const a=W(this),{has:e,get:r}=x4(a);let i=e.call(a,c);i||(c=W(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&X1(a,"delete",c,void 0),s}function $0(){const c=W(this),a=c.size!==0,e=c.clear();return a&&X1(c,"clear",void 0,void 0),e}function $3(c,a){return function(r,i){const s=this,n=s.__v_raw,f=W(n),l=a?e8:c?n8:p3;return!c&&g1(f,"iterate",x2),n.forEach((t,o)=>r.call(i,l(t),l(o),s))}}function I3(c,a,e){return function(...r){const i=this.__v_raw,s=W(i),n=o3(s),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=i[c](...r),o=e?e8:a?n8:p3;return!a&&g1(s,"iterate",l?d6:x2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:f?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function n2(c){return function(...a){return c==="delete"?!1:this}}function rt(){const c={get(s){return _3(this,s)},get size(){return U3(this)},has:O3,add:_0,set:O0,delete:U0,clear:$0,forEach:$3(!1,!1)},a={get(s){return _3(this,s,!1,!0)},get size(){return U3(this)},has:O3,add:_0,set:O0,delete:U0,clear:$0,forEach:$3(!1,!0)},e={get(s){return _3(this,s,!0)},get size(){return U3(this,!0)},has(s){return O3.call(this,s,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:$3(!0,!1)},r={get(s){return _3(this,s,!0,!0)},get size(){return U3(this,!0)},has(s){return O3.call(this,s,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:$3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=I3(s,!1,!1),e[s]=I3(s,!0,!1),a[s]=I3(s,!1,!0),r[s]=I3(s,!0,!0)}),[c,e,a,r]}const[it,st,nt,ft]=rt();function r8(c,a){const e=a?c?ft:nt:c?st:it;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(G(e,i)&&i in r?e:r,i,s)}const lt={get:r8(!1,!1)},ot={get:r8(!1,!0)},tt={get:r8(!0,!1)},C7=new WeakMap,d7=new WeakMap,L7=new WeakMap,mt=new WeakMap;function zt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(c){return c.__v_skip||!Object.isExtensible(c)?0:zt(Ro(c))}function b4(c){return W2(c)?c:i8(c,!1,ct,lt,C7)}function g7(c){return i8(c,!1,et,ot,d7)}function x7(c){return i8(c,!0,at,tt,L7)}function i8(c,a,e,r,i){if(!s1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=vt(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return i.set(c,f),f}function U2(c){return W2(c)?U2(c.__v_raw):!!(c&&c.__v_isReactive)}function W2(c){return!!(c&&c.__v_isReadonly)}function o4(c){return!!(c&&c.__v_isShallow)}function b7(c){return U2(c)||W2(c)}function W(c){const a=c&&c.__v_raw;return a?W(a):c}function s8(c){return l4(c,"__v_skip",!0),c}const p3=c=>s1(c)?b4(c):c,n8=c=>s1(c)?x7(c):c;function N7(c){m2&&k1&&(c=W(c),u7(c.dep||(c.dep=c8())))}function S7(c,a){c=W(c);const e=c.dep;e&&L6(e)}function H1(c){return!!(c&&c.__v_isRef===!0)}function w7(c){return y7(c,!1)}function ht(c){return y7(c,!0)}function y7(c,a){return H1(c)?c:new Ht(c,a)}class Ht{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:W(a),this._value=e?a:p3(a)}get value(){return N7(this),this._value}set value(a){const e=this.__v_isShallow||o4(a)||W2(a);a=e?a:W(a),N2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:p3(a),S7(this))}}function $2(c){return H1(c)?c.value:c}const ut={get:(c,a,e)=>$2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return H1(i)&&!H1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function A7(c){return U2(c)?c:new Proxy(c,ut)}class pt{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new a8(a,()=>{this._dirty||(this._dirty=!0,S7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=W(this);return N7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Vt(c,a,e=!1){let r,i;const s=O(c);return s?(r=c,i=R1):(r=c.get,i=c.set),new pt(r,i,s||!i,e)}function z2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){N4(s,a,e)}return i}function B1(c,a,e,r){if(O(c)){const s=z2(c,a,e,r);return s&&t7(s)&&s.catch(n=>{N4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(B1(c[s],a,e,r));return i}function N4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,f=e;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}s=s.parent}const l=a.appContext.config.errorHandler;if(l){z2(l,null,10,[c,n,f]);return}}Mt(c,e,i,r)}function Mt(c,a,e,r=!0){console.error(c)}let V3=!1,g6=!1;const h1=[];let I1=0;const I2=[];let K1=null,C2=0;const k7=Promise.resolve();let f8=null;function t4(c){const a=f8||k7;return c?a.then(this?c.bind(this):c):a}function Ct(c){let a=I1+1,e=h1.length;for(;a<e;){const r=a+e>>>1,i=h1[r],s=M3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function l8(c){(!h1.length||!h1.includes(c,V3&&c.allowRecurse?I1+1:I1))&&(c.id==null?h1.push(c):h1.splice(Ct(c.id),0,c),P7())}function P7(){!V3&&!g6&&(g6=!0,f8=k7.then(F7))}function dt(c){const a=h1.indexOf(c);a>I1&&h1.splice(a,1)}function Lt(c){U(c)?I2.push(...c):(!K1||!K1.includes(c,c.allowRecurse?C2+1:C2))&&I2.push(c),P7()}function I0(c,a=V3?I1+1:0){for(;a<h1.length;a++){const e=h1[a];e&&e.pre&&(h1.splice(a,1),a--,e())}}function T7(c){if(I2.length){const a=[...new Set(I2)];if(I2.length=0,K1){K1.push(...a);return}for(K1=a,K1.sort((e,r)=>M3(e)-M3(r)),C2=0;C2<K1.length;C2++)K1[C2]();K1=null,C2=0}}const M3=c=>c.id==null?1/0:c.id,gt=(c,a)=>{const e=M3(c)-M3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function F7(c){g6=!1,V3=!0,h1.sort(gt);const a=R1;try{for(I1=0;I1<h1.length;I1++){const e=h1[I1];e&&e.active!==!1&&z2(e,null,14)}}finally{I1=0,h1.length=0,T7(),V3=!1,f8=null,(h1.length||I2.length)&&F7()}}function xt(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||e1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||e1;h&&(i=e.map(u=>z1(u)?u.trim():u)),z&&(i=e.map(Do))}let f,l=r[f=r6(a)]||r[f=r6(W1(a))];!l&&s&&(l=r[f=r6(Q2(a))]),l&&B1(l,c,6,i);const t=r[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,B1(t,c,6,i)}}function R7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},f=!1;if(!O(c)){const l=t=>{const o=R7(t,a,!0);o&&(f=!0,m1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!s&&!f?(s1(c)&&r.set(c,null),null):(U(s)?s.forEach(l=>n[l]=null):m1(n,s),s1(c)&&r.set(c,n),n)}function S4(c,a){return!c||!M4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,Q2(a))||G(c,a))}let P1=null,w4=null;function m4(c){const a=P1;return P1=c,w4=c&&c.type.__scopeId||null,a}function B7(c){w4=c}function E7(){w4=null}function bt(c,a=P1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&a5(-1);const s=m4(a);let n;try{n=c(...i)}finally{m4(s),r._d&&a5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function s6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:S,inheritAttrs:w}=c;let B,M;const d=m4(c);try{if(e.shapeFlag&4){const y=i||r;B=$1(o.call(y,y,z,s,u,h,S)),M=l}else{const y=a;B=$1(y.length>1?y(s,{attrs:l,slots:f,emit:t}):y(s,null)),M=a.props?l:Nt(l)}}catch(y){z3.length=0,N4(y,c,1),B=L1(C3)}let R=B;if(M&&w!==!1){const y=Object.keys(M),{shapeFlag:$}=R;y.length&&$&7&&(n&&y.some(K6)&&(M=St(M,n)),R=j2(R,M))}return e.dirs&&(R=j2(R),R.dirs=R.dirs?R.dirs.concat(e.dirs):e.dirs),e.transition&&(R.transition=e.transition),B=R,m4(d),B}const Nt=c=>{let a;for(const e in c)(e==="class"||e==="style"||M4(e))&&((a||(a={}))[e]=c[e]);return a},St=(c,a)=>{const e={};for(const r in c)(!K6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function wt(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:f,patchFlag:l}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?G0(r,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!S4(t,h))return!0}}}else return(i||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?G0(r,n,t):!0:!!n;return!1}function G0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!S4(e,s))return!0}return!1}function yt({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const D7="components";function At(c,a){return Pt(D7,c,!0,a)||c}const kt=Symbol.for("v-ndc");function Pt(c,a,e=!0,r=!1){const i=P1||t1;if(i){const s=i.type;if(c===D7){const f=xm(s,!1);if(f&&(f===a||f===W1(a)||f===g4(W1(a))))return s}const n=W0(i[c]||s[c],a)||W0(i.appContext[c],a);return!n&&r?s:n}}function W0(c,a){return c&&(c[a]||c[W1(a)]||c[g4(W1(a))])}const Tt=c=>c.__isSuspense;function Ft(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):Lt(c)}const G3={};function t3(c,a,e){return q7(c,a,e)}function q7(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=e1){var f;const l=jo()===((f=t1)==null?void 0:f.scope)?t1:null;let t,o=!1,z=!1;if(H1(c)?(t=()=>c.value,o=o4(c)):U2(c)?(t=()=>c,r=!0):U(c)?(z=!0,o=c.some(y=>U2(y)||o4(y)),t=()=>c.map(y=>{if(H1(y))return y.value;if(U2(y))return D2(y);if(O(y))return z2(y,l,2)})):O(c)?a?t=()=>z2(c,l,2):t=()=>{if(!(l&&l.isUnmounted))return h&&h(),B1(c,l,3,[u])}:t=R1,a&&r){const y=t;t=()=>D2(y())}let h,u=y=>{h=d.onStop=()=>{z2(y,l,4)}},S;if(L3)if(u=R1,a?e&&B1(a,l,3,[t(),z?[]:void 0,u]):t(),i==="sync"){const y=Sm();S=y.__watcherHandles||(y.__watcherHandles=[])}else return R1;let w=z?new Array(c.length).fill(G3):G3;const B=()=>{if(d.active)if(a){const y=d.run();(r||o||(z?y.some(($,Q)=>N2($,w[Q])):N2(y,w)))&&(h&&h(),B1(a,l,3,[y,w===G3?void 0:z&&w[0]===G3?[]:w,u]),w=y)}else d.run()};B.allowRecurse=!!a;let M;i==="sync"?M=B:i==="post"?M=()=>d1(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),M=()=>l8(B));const d=new a8(t,M);a?e?B():w=d.run():i==="post"?d1(d.run.bind(d),l&&l.suspense):d.run();const R=()=>{d.stop(),l&&l.scope&&Y6(l.scope.effects,d)};return S&&S.push(R),R}function Rt(c,a,e){const r=this.proxy,i=z1(c)?c.includes(".")?_7(r,c):()=>r[c]:c.bind(r,r);let s;O(a)?s=a:(s=a.handler,e=a);const n=t1;Z2(this);const f=q7(i,s.bind(r),e);return n?Z2(n):b2(),f}function _7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function D2(c,a){if(!s1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),H1(c))D2(c.value,a);else if(U(c))for(let e=0;e<c.length;e++)D2(c[e],a);else if(To(c)||o3(c))c.forEach(e=>{D2(e,a)});else if(a4(c))for(const e in c)D2(c[e],a);return c}function V2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const f=i[n];s&&(f.oldValue=s[n].value);let l=f.dir[r];l&&(J2(),B1(l,e,8,[c.el,f,c,a]),c3())}}/*! #__NO_SIDE_EFFECTS__ */function y4(c,a){return O(c)?(()=>m1({name:c.name},a,{setup:c}))():c}const r4=c=>!!c.type.__asyncLoader,O7=c=>c.type.__isKeepAlive;function Bt(c,a){U7(c,"a",a)}function Et(c,a){U7(c,"da",a)}function U7(c,a,e=t1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(A4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)O7(i.parent.vnode)&&Dt(r,a,e,i),i=i.parent}}function Dt(c,a,e,r){const i=A4(a,c,r,!0);$7(()=>{Y6(r[a],i)},e)}function A4(c,a,e=t1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;J2(),Z2(e);const f=B1(a,e,c,n);return b2(),c3(),f});return r?i.unshift(s):i.push(s),s}}const e2=c=>(a,e=t1)=>(!L3||c==="sp")&&A4(c,(...r)=>a(...r),e),qt=e2("bm"),_t=e2("m"),Ot=e2("bu"),Ut=e2("u"),$t=e2("bum"),$7=e2("um"),It=e2("sp"),Gt=e2("rtg"),Wt=e2("rtc");function jt(c,a=t1){A4("ec",c,a)}const x6=c=>c?c9(c)?v8(c)||c.proxy:x6(c.parent):null,m3=m1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>x6(c.parent),$root:c=>x6(c.root),$emit:c=>c.emit,$options:c=>o8(c),$forceUpdate:c=>c.f||(c.f=()=>l8(c.update)),$nextTick:c=>c.n||(c.n=t4.bind(c.proxy)),$watch:c=>Rt.bind(c)}),n6=(c,a)=>c!==e1&&!c.__isScriptSetup&&G(c,a),Zt={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(n6(r,a))return n[a]=1,r[a];if(i!==e1&&G(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&G(t,a))return n[a]=3,s[a];if(e!==e1&&G(e,a))return n[a]=4,e[a];b6&&(n[a]=0)}}const o=m3[a];let z,h;if(o)return a==="$attrs"&&g1(c,"get",a),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==e1&&G(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,G(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return n6(i,a)?(i[a]=e,!0):r!==e1&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let f;return!!e[n]||c!==e1&&G(c,n)||n6(a,n)||(f=s[0])&&G(f,n)||G(r,n)||G(m3,n)||G(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function j0(c){return U(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let b6=!0;function Kt(c){const a=o8(c),e=c.proxy,r=c.ctx;b6=!1,a.beforeCreate&&Z0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:S,activated:w,deactivated:B,beforeDestroy:M,beforeUnmount:d,destroyed:R,unmounted:y,render:$,renderTracked:Q,renderTriggered:r1,errorCaptured:x1,serverPrefetch:u1,expose:w1,inheritAttrs:i2,components:p2,directives:D1,filters:e3}=a;if(t&&Yt(t,r,null),n)for(const X in n){const j=n[X];O(j)&&(r[X]=j.bind(e))}if(i){const X=i.call(e,e);s1(X)&&(c.data=b4(X))}if(b6=!0,s)for(const X in s){const j=s[X],j1=O(j)?j.bind(e,e):O(j.get)?j.get.bind(e,e):R1,s2=!O(j)&&O(j.set)?j.set.bind(e):R1,q1=o1({get:j1,set:s2});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>q1.value,set:M1=>q1.value=M1})}if(f)for(const X in f)I7(f[X],r,e,X);if(l){const X=O(l)?l.call(e):l;Reflect.ownKeys(X).forEach(j=>{i4(j,X[j])})}o&&Z0(o,c,"c");function l1(X,j){U(j)?j.forEach(j1=>X(j1.bind(e))):j&&X(j.bind(e))}if(l1(qt,z),l1(_t,h),l1(Ot,u),l1(Ut,S),l1(Bt,w),l1(Et,B),l1(jt,x1),l1(Wt,Q),l1(Gt,r1),l1($t,d),l1($7,y),l1(It,u1),U(w1))if(w1.length){const X=c.exposed||(c.exposed={});w1.forEach(j=>{Object.defineProperty(X,j,{get:()=>e[j],set:j1=>e[j]=j1})})}else c.exposed||(c.exposed={});$&&c.render===R1&&(c.render=$),i2!=null&&(c.inheritAttrs=i2),p2&&(c.components=p2),D1&&(c.directives=D1)}function Yt(c,a,e=R1){U(c)&&(c=N6(c));for(const r in c){const i=c[r];let s;s1(i)?"default"in i?s=Q1(i.from||r,i.default,!0):s=Q1(i.from||r):s=Q1(i),H1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function Z0(c,a,e){B1(U(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function I7(c,a,e,r){const i=r.includes(".")?_7(e,r):()=>e[r];if(z1(c)){const s=a[c];O(s)&&t3(i,s)}else if(O(c))t3(i,c.bind(e));else if(s1(c))if(U(c))c.forEach(s=>I7(s,a,e,r));else{const s=O(c.handler)?c.handler.bind(e):a[c.handler];O(s)&&t3(i,s,c)}}function o8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,f=s.get(a);let l;return f?l=f:!i.length&&!e&&!r?l=a:(l={},i.length&&i.forEach(t=>z4(l,t,n,!0)),z4(l,a,n)),s1(a)&&s.set(a,l),l}function z4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&z4(c,s,e,!0),i&&i.forEach(n=>z4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=Xt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Xt={data:K0,props:Y0,emits:Y0,methods:f3,computed:f3,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:f3,directives:f3,watch:Jt,provide:K0,inject:Qt};function K0(c,a){return a?c?function(){return m1(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Qt(c,a){return f3(N6(c),N6(a))}function N6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function p1(c,a){return c?[...new Set([].concat(c,a))]:a}function f3(c,a){return c?m1(Object.create(null),c,a):a}function Y0(c,a){return c?U(c)&&U(a)?[...new Set([...c,...a])]:m1(Object.create(null),j0(c),j0(a??{})):a}function Jt(c,a){if(!c)return a;if(!a)return c;const e=m1(Object.create(null),c);for(const r in a)e[r]=p1(c[r],a[r]);return e}function G7(){return{app:null,config:{isNativeTag:Ao,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function am(c,a){return function(r,i=null){O(r)||(r=m1({},r)),i!=null&&!s1(i)&&(i=null);const s=G7(),n=new WeakSet;let f=!1;const l=s.app={_uid:cm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:wm,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&O(t.install)?(n.add(t),t.install(l,...o)):O(t)&&(n.add(t),t(l,...o))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,o){return o?(s.components[t]=o,l):s.components[t]},directive(t,o){return o?(s.directives[t]=o,l):s.directives[t]},mount(t,o,z){if(!f){const h=L1(r,i);return h.appContext=s,o&&a?a(h,t):c(h,t,z),f=!0,l._container=t,t.__vue_app__=l,v8(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return s.provides[t]=o,l},runWithContext(t){v4=l;try{return t()}finally{v4=null}}};return l}}let v4=null;function i4(c,a){if(t1){let e=t1.provides;const r=t1.parent&&t1.parent.provides;r===e&&(e=t1.provides=Object.create(r)),e[c]=a}}function Q1(c,a,e=!1){const r=t1||P1;if(r||v4){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:v4._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function em(c,a,e,r=!1){const i={},s={};l4(s,F4,1),c.propsDefaults=Object.create(null),W7(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:g7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function rm(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,f=W(i),[l]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(S4(c.emitsOptions,h))continue;const u=a[h];if(l)if(G(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const S=W1(h);i[S]=S6(l,f,S,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{W7(c,a,i,s)&&(t=!0);let o;for(const z in f)(!a||!G(a,z)&&((o=Q2(z))===z||!G(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=S6(l,f,z,void 0,c,!0)):delete i[z]);if(s!==f)for(const z in s)(!a||!G(a,z))&&(delete s[z],t=!0)}t&&X1(c,"set","$attrs")}function W7(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(e4(l))continue;const t=a[l];let o;i&&G(i,o=W1(l))?!s||!s.includes(o)?e[o]=t:(f||(f={}))[o]=t:S4(c.emitsOptions,l)||(!(l in r)||t!==r[l])&&(r[l]=t,n=!0)}if(s){const l=W(e),t=f||e1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=S6(i,l,z,t[z],c,!G(t,z))}}return n}function S6(c,a,e,r,i,s){const n=c[e];if(n!=null){const f=G(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&O(l)){const{propsDefaults:t}=i;e in t?r=t[e]:(Z2(i),r=t[e]=l.call(null,a),b2())}else r=l}n[0]&&(s&&!f?r=!1:n[1]&&(r===""||r===Q2(e))&&(r=!0))}return r}function j7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},f=[];let l=!1;if(!O(c)){const o=z=>{l=!0;const[h,u]=j7(z,a,!0);m1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!l)return s1(c)&&r.set(c,O2),O2;if(U(s))for(let o=0;o<s.length;o++){const z=W1(s[o]);X0(z)&&(n[z]=e1)}else if(s)for(const o in s){const z=W1(o);if(X0(z)){const h=s[o],u=n[z]=U(h)||O(h)?{type:h}:m1({},h);if(u){const S=c5(Boolean,u.type),w=c5(String,u.type);u[0]=S>-1,u[1]=w<0||S<w,(S>-1||G(u,"default"))&&f.push(z)}}}const t=[n,f];return s1(c)&&r.set(c,t),t}function X0(c){return c[0]!=="$"}function Q0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function J0(c,a){return Q0(c)===Q0(a)}function c5(c,a){return U(a)?a.findIndex(e=>J0(e,c)):O(a)&&J0(a,c)?0:-1}const Z7=c=>c[0]==="_"||c==="$stable",t8=c=>U(c)?c.map($1):[$1(c)],im=(c,a,e)=>{if(a._n)return a;const r=bt((...i)=>t8(a(...i)),e);return r._c=!1,r},K7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(Z7(i))continue;const s=c[i];if(O(s))a[i]=im(i,s,r);else if(s!=null){const n=t8(s);a[i]=()=>n}}},Y7=(c,a)=>{const e=t8(a);c.slots.default=()=>e},sm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=W(a),l4(a,"_",e)):K7(a,c.slots={})}else c.slots={},a&&Y7(c,a);l4(c.slots,F4,1)},nm=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=e1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?s=!1:(m1(i,a),!e&&f===1&&delete i._):(s=!a.$stable,K7(a,i)),n=a}else a&&(Y7(c,a),n={default:1});if(s)for(const f in i)!Z7(f)&&n[f]==null&&delete i[f]};function w6(c,a,e,r,i=!1){if(U(c)){c.forEach((h,u)=>w6(h,a&&(U(a)?a[u]:a),e,r,i));return}if(r4(r)&&!i)return;const s=r.shapeFlag&4?v8(r.component)||r.component.proxy:r.el,n=i?null:s,{i:f,r:l}=c,t=a&&a.r,o=f.refs===e1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(z1(t)?(o[t]=null,G(z,t)&&(z[t]=null)):H1(t)&&(t.value=null)),O(l))z2(l,f,12,[n,o]);else{const h=z1(l),u=H1(l);if(h||u){const S=()=>{if(c.f){const w=h?G(z,l)?z[l]:o[l]:l.value;i?U(w)&&Y6(w,s):U(w)?w.includes(s)||w.push(s):h?(o[l]=[s],G(z,l)&&(z[l]=o[l])):(l.value=[s],c.k&&(o[c.k]=l.value))}else h?(o[l]=n,G(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(o[c.k]=n))};n?(S.id=-1,d1(S,e)):S()}}}const d1=Ft;function fm(c){return lm(c)}function lm(c,a){const e=V6();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=R1,insertStaticContent:S}=c,w=(m,v,H,p=null,C=null,L=null,A=!1,x=null,b=!!v.dynamicChildren)=>{if(m===v)return;m&&!i3(m,v)&&(p=V(m),M1(m,C,L,!0),m=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:g,ref:D,shapeFlag:T}=v;switch(g){case k4:B(m,v,H,p);break;case C3:M(m,v,H,p);break;case f6:m==null&&d(v,H,p,A);break;case U1:p2(m,v,H,p,C,L,A,x,b);break;default:T&1?$(m,v,H,p,C,L,A,x,b):T&6?D1(m,v,H,p,C,L,A,x,b):(T&64||T&128)&&g.process(m,v,H,p,C,L,A,x,b,N)}D!=null&&C&&w6(D,m&&m.ref,L,v||m,!v)},B=(m,v,H,p)=>{if(m==null)r(v.el=f(v.children),H,p);else{const C=v.el=m.el;v.children!==m.children&&t(C,v.children)}},M=(m,v,H,p)=>{m==null?r(v.el=l(v.children||""),H,p):v.el=m.el},d=(m,v,H,p)=>{[m.el,m.anchor]=S(m.children,v,H,p,m.el,m.anchor)},R=({el:m,anchor:v},H,p)=>{let C;for(;m&&m!==v;)C=h(m),r(m,H,p),m=C;r(v,H,p)},y=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},$=(m,v,H,p,C,L,A,x,b)=>{A=A||v.type==="svg",m==null?Q(v,H,p,C,L,A,x,b):u1(m,v,C,L,A,x,b)},Q=(m,v,H,p,C,L,A,x)=>{let b,g;const{type:D,props:T,shapeFlag:q,transition:_,dirs:I}=m;if(b=m.el=n(m.type,L,T&&T.is,T),q&8?o(b,m.children):q&16&&x1(m.children,b,null,p,C,L&&D!=="foreignObject",A,x),I&&V2(m,null,p,"created"),r1(b,m,m.scopeId,A,p),T){for(const Y in T)Y!=="value"&&!e4(Y)&&s(b,Y,null,T[Y],L,m.children,p,C,v1);"value"in T&&s(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&O1(g,p,m)}I&&V2(m,null,p,"beforeMount");const J=om(C,_);J&&_.beforeEnter(b),r(b,v,H),((g=T&&T.onVnodeMounted)||J||I)&&d1(()=>{g&&O1(g,p,m),J&&_.enter(b),I&&V2(m,null,p,"mounted")},C)},r1=(m,v,H,p,C)=>{if(H&&u(m,H),p)for(let L=0;L<p.length;L++)u(m,p[L]);if(C){let L=C.subTree;if(v===L){const A=C.vnode;r1(m,A,A.scopeId,A.slotScopeIds,C.parent)}}},x1=(m,v,H,p,C,L,A,x,b=0)=>{for(let g=b;g<m.length;g++){const D=m[g]=x?o2(m[g]):$1(m[g]);w(null,D,v,H,p,C,L,A,x)}},u1=(m,v,H,p,C,L,A)=>{const x=v.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:D}=v;b|=m.patchFlag&16;const T=m.props||e1,q=v.props||e1;let _;H&&M2(H,!1),(_=q.onVnodeBeforeUpdate)&&O1(_,H,v,m),D&&V2(v,m,H,"beforeUpdate"),H&&M2(H,!0);const I=C&&v.type!=="foreignObject";if(g?w1(m.dynamicChildren,g,x,H,p,I,L):A||j(m,v,x,null,H,p,I,L,!1),b>0){if(b&16)i2(x,v,T,q,H,p,C);else if(b&2&&T.class!==q.class&&s(x,"class",null,q.class,C),b&4&&s(x,"style",T.style,q.style,C),b&8){const J=v.dynamicProps;for(let Y=0;Y<J.length;Y++){const n1=J[Y],y1=T[n1],R2=q[n1];(R2!==y1||n1==="value")&&s(x,n1,y1,R2,C,m.children,H,p,v1)}}b&1&&m.children!==v.children&&o(x,v.children)}else!A&&g==null&&i2(x,v,T,q,H,p,C);((_=q.onVnodeUpdated)||D)&&d1(()=>{_&&O1(_,H,v,m),D&&V2(v,m,H,"updated")},p)},w1=(m,v,H,p,C,L,A)=>{for(let x=0;x<v.length;x++){const b=m[x],g=v[x],D=b.el&&(b.type===U1||!i3(b,g)||b.shapeFlag&70)?z(b.el):H;w(b,g,D,null,p,C,L,A,!0)}},i2=(m,v,H,p,C,L,A)=>{if(H!==p){if(H!==e1)for(const x in H)!e4(x)&&!(x in p)&&s(m,x,H[x],null,A,v.children,C,L,v1);for(const x in p){if(e4(x))continue;const b=p[x],g=H[x];b!==g&&x!=="value"&&s(m,x,g,b,A,v.children,C,L,v1)}"value"in p&&s(m,"value",H.value,p.value)}},p2=(m,v,H,p,C,L,A,x,b)=>{const g=v.el=m?m.el:f(""),D=v.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:q,slotScopeIds:_}=v;_&&(x=x?x.concat(_):_),m==null?(r(g,H,p),r(D,H,p),x1(v.children,H,D,C,L,A,x,b)):T>0&&T&64&&q&&m.dynamicChildren?(w1(m.dynamicChildren,q,H,C,L,A,x),(v.key!=null||C&&v===C.subTree)&&X7(m,v,!0)):j(m,v,H,D,C,L,A,x,b)},D1=(m,v,H,p,C,L,A,x,b)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?C.ctx.activate(v,H,p,A,b):e3(v,H,p,C,L,A,b):P2(m,v,b)},e3=(m,v,H,p,C,L,A)=>{const x=m.component=Mm(m,p,C);if(O7(m)&&(x.ctx.renderer=N),Cm(x),x.asyncDep){if(C&&C.registerDep(x,l1),!m.el){const b=x.subTree=L1(C3);M(null,b,v,H)}return}l1(x,m,v,H,C,L,A)},P2=(m,v,H)=>{const p=v.component=m.component;if(wt(m,v,H))if(p.asyncDep&&!p.asyncResolved){X(p,v,H);return}else p.next=v,dt(p.update),p.update();else v.el=m.el,p.vnode=v},l1=(m,v,H,p,C,L,A)=>{const x=()=>{if(m.isMounted){let{next:D,bu:T,u:q,parent:_,vnode:I}=m,J=D,Y;M2(m,!1),D?(D.el=I.el,X(m,D,A)):D=I,T&&i6(T),(Y=D.props&&D.props.onVnodeBeforeUpdate)&&O1(Y,_,D,I),M2(m,!0);const n1=s6(m),y1=m.subTree;m.subTree=n1,w(y1,n1,z(y1.el),V(y1),m,C,L),D.el=n1.el,J===null&&yt(m,n1.el),q&&d1(q,C),(Y=D.props&&D.props.onVnodeUpdated)&&d1(()=>O1(Y,_,D,I),C)}else{let D;const{el:T,props:q}=v,{bm:_,m:I,parent:J}=m,Y=r4(v);if(M2(m,!1),_&&i6(_),!Y&&(D=q&&q.onVnodeBeforeMount)&&O1(D,J,v),M2(m,!0),T&&Z){const n1=()=>{m.subTree=s6(m),Z(T,m.subTree,m,C,null)};Y?v.type.__asyncLoader().then(()=>!m.isUnmounted&&n1()):n1()}else{const n1=m.subTree=s6(m);w(null,n1,H,p,m,C,L),v.el=n1.el}if(I&&d1(I,C),!Y&&(D=q&&q.onVnodeMounted)){const n1=v;d1(()=>O1(D,J,n1),C)}(v.shapeFlag&256||J&&r4(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&d1(m.a,C),m.isMounted=!0,v=H=p=null}},b=m.effect=new a8(x,()=>l8(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,M2(m,!0),g()},X=(m,v,H)=>{v.component=m;const p=m.vnode.props;m.vnode=v,m.next=null,rm(m,v.props,p,H),nm(m,v.children,H),J2(),I0(),c3()},j=(m,v,H,p,C,L,A,x,b=!1)=>{const g=m&&m.children,D=m?m.shapeFlag:0,T=v.children,{patchFlag:q,shapeFlag:_}=v;if(q>0){if(q&128){s2(g,T,H,p,C,L,A,x,b);return}else if(q&256){j1(g,T,H,p,C,L,A,x,b);return}}_&8?(D&16&&v1(g,C,L),T!==g&&o(H,T)):D&16?_&16?s2(g,T,H,p,C,L,A,x,b):v1(g,C,L,!0):(D&8&&o(H,""),_&16&&x1(T,H,p,C,L,A,x,b))},j1=(m,v,H,p,C,L,A,x,b)=>{m=m||O2,v=v||O2;const g=m.length,D=v.length,T=Math.min(g,D);let q;for(q=0;q<T;q++){const _=v[q]=b?o2(v[q]):$1(v[q]);w(m[q],_,H,null,C,L,A,x,b)}g>D?v1(m,C,L,!0,!1,T):x1(v,H,p,C,L,A,x,b,T)},s2=(m,v,H,p,C,L,A,x,b)=>{let g=0;const D=v.length;let T=m.length-1,q=D-1;for(;g<=T&&g<=q;){const _=m[g],I=v[g]=b?o2(v[g]):$1(v[g]);if(i3(_,I))w(_,I,H,null,C,L,A,x,b);else break;g++}for(;g<=T&&g<=q;){const _=m[T],I=v[q]=b?o2(v[q]):$1(v[q]);if(i3(_,I))w(_,I,H,null,C,L,A,x,b);else break;T--,q--}if(g>T){if(g<=q){const _=q+1,I=_<D?v[_].el:p;for(;g<=q;)w(null,v[g]=b?o2(v[g]):$1(v[g]),H,I,C,L,A,x,b),g++}}else if(g>q)for(;g<=T;)M1(m[g],C,L,!0),g++;else{const _=g,I=g,J=new Map;for(g=I;g<=q;g++){const b1=v[g]=b?o2(v[g]):$1(v[g]);b1.key!=null&&J.set(b1.key,g)}let Y,n1=0;const y1=q-I+1;let R2=!1,T0=0;const r3=new Array(y1);for(g=0;g<y1;g++)r3[g]=0;for(g=_;g<=T;g++){const b1=m[g];if(n1>=y1){M1(b1,C,L,!0);continue}let _1;if(b1.key!=null)_1=J.get(b1.key);else for(Y=I;Y<=q;Y++)if(r3[Y-I]===0&&i3(b1,v[Y])){_1=Y;break}_1===void 0?M1(b1,C,L,!0):(r3[_1-I]=g+1,_1>=T0?T0=_1:R2=!0,w(b1,v[_1],H,null,C,L,A,x,b),n1++)}const F0=R2?tm(r3):O2;for(Y=F0.length-1,g=y1-1;g>=0;g--){const b1=I+g,_1=v[b1],R0=b1+1<D?v[b1+1].el:p;r3[g]===0?w(null,_1,H,R0,C,L,A,x,b):R2&&(Y<0||g!==F0[Y]?q1(_1,H,R0,2):Y--)}}},q1=(m,v,H,p,C=null)=>{const{el:L,type:A,transition:x,children:b,shapeFlag:g}=m;if(g&6){q1(m.component.subTree,v,H,p);return}if(g&128){m.suspense.move(v,H,p);return}if(g&64){A.move(m,v,H,N);return}if(A===U1){r(L,v,H);for(let T=0;T<b.length;T++)q1(b[T],v,H,p);r(m.anchor,v,H);return}if(A===f6){R(m,v,H);return}if(p!==2&&g&1&&x)if(p===0)x.beforeEnter(L),r(L,v,H),d1(()=>x.enter(L),C);else{const{leave:T,delayLeave:q,afterLeave:_}=x,I=()=>r(L,v,H),J=()=>{T(L,()=>{I(),_&&_()})};q?q(L,I,J):J()}else r(L,v,H)},M1=(m,v,H,p=!1,C=!1)=>{const{type:L,props:A,ref:x,children:b,dynamicChildren:g,shapeFlag:D,patchFlag:T,dirs:q}=m;if(x!=null&&w6(x,null,H,m,!0),D&256){v.ctx.deactivate(m);return}const _=D&1&&q,I=!r4(m);let J;if(I&&(J=A&&A.onVnodeBeforeUnmount)&&O1(J,v,m),D&6)q3(m.component,H,p);else{if(D&128){m.suspense.unmount(H,p);return}_&&V2(m,null,v,"beforeUnmount"),D&64?m.type.remove(m,v,H,C,N,p):g&&(L!==U1||T>0&&T&64)?v1(g,v,H,!1,!0):(L===U1&&T&384||!C&&D&16)&&v1(b,v,H),p&&T2(m)}(I&&(J=A&&A.onVnodeUnmounted)||_)&&d1(()=>{J&&O1(J,v,m),_&&V2(m,null,v,"unmounted")},H)},T2=m=>{const{type:v,el:H,anchor:p,transition:C}=m;if(v===U1){F2(H,p);return}if(v===f6){y(m);return}const L=()=>{i(H),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:x}=C,b=()=>A(H,L);x?x(m.el,L,b):b()}else L()},F2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},q3=(m,v,H)=>{const{bum:p,scope:C,update:L,subTree:A,um:x}=m;p&&i6(p),C.stop(),L&&(L.active=!1,M1(A,m,v,H)),x&&d1(x,v),d1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},v1=(m,v,H,p=!1,C=!1,L=0)=>{for(let A=L;A<m.length;A++)M1(m[A],v,H,p,C)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,v,H)=>{m==null?v._vnode&&M1(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,H),I0(),T7(),v._vnode=m},N={p:w,um:M1,m:q1,r:T2,mt:e3,mc:x1,pc:j,pbc:w1,n:V,o:c};let E,Z;return a&&([E,Z]=a(N)),{render:P,hydrate:E,createApp:am(P,E)}}function M2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function om(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function X7(c,a,e=!1){const r=c.children,i=a.children;if(U(r)&&U(i))for(let s=0;s<r.length;s++){const n=r[s];let f=i[s];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=i[s]=o2(i[s]),f.el=n.el),e||X7(n,f)),f.type===k4&&(f.el=n.el)}}function tm(c){const a=c.slice(),e=[0];let r,i,s,n,f;const l=c.length;for(r=0;r<l;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)f=s+n>>1,c[e[f]]<t?s=f+1:n=f;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const mm=c=>c.__isTeleport,U1=Symbol.for("v-fgt"),k4=Symbol.for("v-txt"),C3=Symbol.for("v-cmt"),f6=Symbol.for("v-stc"),z3=[];let T1=null;function P4(c=!1){z3.push(T1=c?null:[])}function zm(){z3.pop(),T1=z3[z3.length-1]||null}let d3=1;function a5(c){d3+=c}function vm(c){return c.dynamicChildren=d3>0?T1||O2:null,zm(),d3>0&&T1&&T1.push(c),c}function T4(c,a,e,r,i,s){return vm(V1(c,a,e,r,i,s,!0))}function y6(c){return c?c.__v_isVNode===!0:!1}function i3(c,a){return c.type===a.type&&c.key===a.key}const F4="__vInternal",Q7=({key:c})=>c??null,s4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z1(c)||H1(c)||O(c)?{i:P1,r:c,k:a,f:!!e}:c:null);function V1(c,a=null,e=null,r=0,i=null,s=c===U1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&Q7(a),ref:a&&s4(a),scopeId:w4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:P1};return f?(m8(l,e),s&128&&c.normalize(l)):e&&(l.shapeFlag|=z1(e)?8:16),d3>0&&!n&&T1&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&T1.push(l),l}const L1=hm;function hm(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===kt)&&(c=C3),y6(c)){const f=j2(c,a,!0);return e&&m8(f,e),d3>0&&!s&&T1&&(f.shapeFlag&6?T1[T1.indexOf(c)]=f:T1.push(f)),f.patchFlag|=-2,f}if(bm(c)&&(c=c.__vccOpts),a){a=Hm(a);let{class:f,style:l}=a;f&&!z1(f)&&(a.class=J6(f)),s1(l)&&(b7(l)&&!U(l)&&(l=m1({},l)),a.style=Q6(l))}const n=z1(c)?1:Tt(c)?128:mm(c)?64:s1(c)?4:O(c)?2:0;return V1(c,a,e,r,i,n,s,!0)}function Hm(c){return c?b7(c)||F4 in c?m1({},c):c:null}function j2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,f=a?um(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&Q7(f),ref:a&&a.ref?e&&i?U(i)?i.concat(s4(a)):[i,s4(a)]:s4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==U1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&j2(c.ssContent),ssFallback:c.ssFallback&&j2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function J7(c=" ",a=0){return L1(k4,null,c,a)}function $1(c){return c==null||typeof c=="boolean"?L1(C3):U(c)?L1(U1,null,c.slice()):typeof c=="object"?o2(c):L1(k4,null,String(c))}function o2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:j2(c)}function m8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),m8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(F4 in a)?a._ctx=P1:i===3&&P1&&(P1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:P1},e=32):(a=String(a),r&64?(e=16,a=[J7(a)]):e=8);c.children=a,c.shapeFlag|=e}function um(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=J6([a.class,r.class]));else if(i==="style")a.style=Q6([a.style,r.style]);else if(M4(i)){const s=a[i],n=r[i];n&&s!==n&&!(U(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function O1(c,a,e,r=null){B1(c,a,7,[e,r])}const pm=G7();let Vm=0;function Mm(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||pm,s={uid:Vm++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new z7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:j7(r,i),emitsOptions:R7(r,i),emit:null,emitted:null,propsDefaults:e1,inheritAttrs:r.inheritAttrs,ctx:e1,data:e1,props:e1,attrs:e1,slots:e1,refs:e1,setupState:e1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=xt.bind(null,s),c.ce&&c.ce(s),s}let t1=null,z8,B2,e5="__VUE_INSTANCE_SETTERS__";(B2=V6()[e5])||(B2=V6()[e5]=[]),B2.push(c=>t1=c),z8=c=>{B2.length>1?B2.forEach(a=>a(c)):B2[0](c)};const Z2=c=>{z8(c),c.scope.on()},b2=()=>{t1&&t1.scope.off(),z8(null)};function c9(c){return c.vnode.shapeFlag&4}let L3=!1;function Cm(c,a=!1){L3=a;const{props:e,children:r}=c.vnode,i=c9(c);em(c,e,i,a),sm(c,r);const s=i?dm(c,a):void 0;return L3=!1,s}function dm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=s8(new Proxy(c.ctx,Zt));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?gm(c):null;Z2(c),J2();const s=z2(r,c,0,[c.props,i]);if(c3(),b2(),t7(s)){if(s.then(b2,b2),a)return s.then(n=>{r5(c,n,a)}).catch(n=>{N4(n,c,0)});c.asyncDep=s}else r5(c,s,a)}else a9(c,a)}function r5(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:s1(a)&&(c.setupState=A7(a)),a9(c,e)}let i5;function a9(c,a,e){const r=c.type;if(!c.render){if(!a&&i5&&!r.render){const i=r.template||o8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,t=m1(m1({isCustomElement:s,delimiters:f},n),l);r.render=i5(i,t)}}c.render=r.render||R1}{Z2(c),J2();try{Kt(c)}finally{c3(),b2()}}}function Lm(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return g1(c,"get","$attrs"),a[e]}}))}function gm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Lm(c)},slots:c.slots,emit:c.emit,expose:a}}function v8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(A7(s8(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in m3)return m3[e](c)},has(a,e){return e in a||e in m3}}))}function xm(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function bm(c){return O(c)&&"__vccOpts"in c}const o1=(c,a)=>Vt(c,a,L3);function h8(c,a,e){const r=arguments.length;return r===2?s1(a)&&!U(a)?y6(a)?L1(c,null,[a]):L1(c,a):L1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&y6(e)&&(e=[e]),L1(c,a,e))}const Nm=Symbol.for("v-scx"),Sm=()=>Q1(Nm),wm="3.3.8",ym="http://www.w3.org/2000/svg",d2=typeof document<"u"?document:null,s5=d2&&d2.createElement("template"),Am={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?d2.createElementNS(ym,c):d2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>d2.createTextNode(c),createComment:c=>d2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>d2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{s5.innerHTML=r?`<svg>${c}</svg>`:c;const f=s5.content;if(r){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},km=Symbol("_vtc");function Pm(c,a,e){const r=c[km];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const Tm=Symbol("_vod");function Fm(c,a,e){const r=c.style,i=z1(e);if(e&&!i){if(a&&!z1(a))for(const s in a)e[s]==null&&A6(r,s,"");for(const s in e)A6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),Tm in c&&(r.display=s)}}const n5=/\s*!important$/;function A6(c,a,e){if(U(e))e.forEach(r=>A6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Rm(c,a);n5.test(e)?c.setProperty(Q2(r),e.replace(n5,""),"important"):c[r]=e}}const f5=["Webkit","Moz","ms"],l6={};function Rm(c,a){const e=l6[a];if(e)return e;let r=W1(a);if(r!=="filter"&&r in c)return l6[a]=r;r=g4(r);for(let i=0;i<f5.length;i++){const s=f5[i]+r;if(s in c)return l6[a]=s}return a}const l5="http://www.w3.org/1999/xlink";function Bm(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(l5,a.slice(6,a.length)):c.setAttributeNS(l5,a,e);else{const s=Io(a);e==null||s&&!m7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Em(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){c._value=e;const t=f==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=m7(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function Dm(c,a,e,r){c.addEventListener(a,e,r)}function qm(c,a,e,r){c.removeEventListener(a,e,r)}const o5=Symbol("_vei");function _m(c,a,e,r,i=null){const s=c[o5]||(c[o5]={}),n=s[a];if(r&&n)n.value=r;else{const[f,l]=Om(a);if(r){const t=s[a]=Im(r,i);Dm(c,f,t,l)}else n&&(qm(c,f,n,l),s[a]=void 0)}}const t5=/(?:Once|Passive|Capture)$/;function Om(c){let a;if(t5.test(c)){a={};let r;for(;r=c.match(t5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Q2(c.slice(2)),a]}let o6=0;const Um=Promise.resolve(),$m=()=>o6||(Um.then(()=>o6=0),o6=Date.now());function Im(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B1(Gm(r,e.value),a,5,[r])};return e.value=c,e.attached=$m(),e}function Gm(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const m5=/^on[a-z]/,Wm=(c,a,e,r,i=!1,s,n,f,l)=>{a==="class"?Pm(c,r,i):a==="style"?Fm(c,e,r):M4(a)?K6(a)||_m(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):jm(c,a,r,i))?Em(c,a,r,s,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Bm(c,a,r,i))};function jm(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&m5.test(a)&&O(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||m5.test(a)&&z1(e)?!1:a in c}const Zm=m1({patchProp:Wm},Am);let z5;function Km(){return z5||(z5=fm(Zm))}const Ym=(...c)=>{const a=Km().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Xm(r);if(!i)return;const s=a._component;!O(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function Xm(c){return z1(c)?document.querySelector(c):c}var Qm=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Jm=Symbol();var v5;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(v5||(v5={}));function cz(){const c=Go(!0),a=c.run(()=>w7({}));let e=[],r=[];const i=s8({install(s){i._a=s,s.provide(Jm,i),s.config.globalProperties.$pinia=i,r.forEach(n=>e.push(n)),r=[]},use(s){return!this._a&&!Qm?r.push(s):e.push(s),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return i}const e9="/assets/logo-46a1c260.png";const H8=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},az={},A2=c=>(B7("data-v-219e7869"),c=c(),E7(),c),ez={class:"footer"},rz=A2(()=>V1("img",{src:e9,alt:"Logo"},null,-1)),iz=A2(()=>V1("span",null,"© 2023 puzzlenatalerzu.pl",-1)),sz=A2(()=>V1("span",null,"Wszystkie prawa zastrzeżone",-1)),nz=A2(()=>V1("span",null,"Kopiowanie i rozpowszechnianie bez zgody puzzlenatalerzu.pl zabronione",-1)),fz=A2(()=>V1("br",null,null,-1)),lz=A2(()=>V1("span",null,[J7("Masz uwagi? Chcesz dodać swój przepis na stronę? Napisz do nas na "),V1("a",{href:"mailto:kontakt@puzzlenatalerzu.pl"},"kontakt@puzzlenatalerzu.pl")],-1)),oz=A2(()=>V1("br",null,null,-1)),tz=[rz,iz,sz,nz,fz,lz,oz];function mz(c,a){return P4(),T4("footer",ez,tz)}const zz=H8(az,[["render",mz],["__scopeId","data-v-219e7869"]]);const vz={},u8=c=>(B7("data-v-14616ef9"),c=c(),E7(),c),hz={class:"header"},Hz=u8(()=>V1("img",{src:e9,class:"logo",alt:"Logo"},null,-1)),uz=u8(()=>V1("span",{class:"name"},"Puzzle na talerzu",-1)),pz=u8(()=>V1("input",{type:"search",placeholder:"np. kurczak curry",class:"search"},null,-1)),Vz={class:"toggle","aria-label":"Show/Hide menu"};function Mz(c,a){const e=At("font-awesome-icon");return P4(),T4("header",hz,[Hz,uz,pz,V1("button",Vz,[L1(e,{icon:["fas","bars"]})])])}const Cz=H8(vz,[["render",Mz],["__scopeId","data-v-14616ef9"]]),dz=V1("main",null," Wkrótce ",-1),Lz=y4({__name:"App",setup(c){return(a,e)=>(P4(),T4(U1,null,[L1(Cz),dz,L1(zz)],64))}}),gz="modulepreload",xz=function(c){return"/"+c},h5={},bz=function(a,e,r){if(!e||e.length===0)return a();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=xz(s),s in h5)return;h5[s]=!0;const n=s.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!r)for(let o=i.length-1;o>=0;o--){const z=i[o];if(z.href===s&&(!n||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":gz,n||(t.as="script",t.crossOrigin=""),t.href=s,document.head.appendChild(t),n)return new Promise((o,z)=>{t.addEventListener("load",o),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>a()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const E2=typeof window<"u";function Nz(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function t6(c,a){const e={};for(const r in a){const i=a[r];e[r]=E1(i)?i.map(c):c(i)}return e}const v3=()=>{},E1=Array.isArray,Sz=/\/$/,wz=c=>c.replace(Sz,"");function m6(c,a,e="/"){let r,i={},s="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(r=a.slice(0,l),s=a.slice(l+1,f>-1?f:a.length),i=c(s)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=Pz(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:n}}function yz(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function H5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Az(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&K2(a.matched[r],e.matched[i])&&r9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function K2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function r9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!kz(c[e],a[e]))return!1;return!0}function kz(c,a){return E1(c)?u5(c,a):E1(a)?u5(a,c):c===a}function u5(c,a){return E1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Pz(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var g3;(function(c){c.pop="pop",c.push="push"})(g3||(g3={}));var h3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(h3||(h3={}));function Tz(c){if(!c)if(E2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),wz(c)}const Fz=/^[^#]+#/;function Rz(c,a){return c.replace(Fz,"#")+a}function Bz(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const R4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ez(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Bz(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function p5(c,a){return(history.state?history.state.position-a:-1)+c}const k6=new Map;function Dz(c,a){k6.set(c,a)}function qz(c){const a=k6.get(c);return k6.delete(c),a}let _z=()=>location.protocol+"//"+location.host;function i9(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let f=i.includes(c.slice(s))?c.slice(s).length:1,l=i.slice(f);return l[0]!=="/"&&(l="/"+l),H5(l,"")}return H5(e,c)+r+i}function Oz(c,a,e,r){let i=[],s=[],n=null;const f=({state:h})=>{const u=i9(c,location),S=e.value,w=a.value;let B=0;if(h){if(e.value=u,a.value=h,n&&n===S){n=null;return}B=w?h.position-w.position:0}else r(u);i.forEach(M=>{M(e.value,S,{delta:B,type:g3.pop,direction:B?B>0?h3.forward:h3.back:h3.unknown})})};function l(){n=e.value}function t(h){i.push(h);const u=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:R4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:t,destroy:z}}function V5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?R4():null}}function Uz(c){const{history:a,location:e}=window,r={value:i9(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(l,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:_z()+c+l;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(l,t){const o=K({},a.state,V5(i.value.back,l,i.value.forward,!0),t,{position:i.value.position});s(l,o,!0),r.value=l}function f(l,t){const o=K({},i.value,a.state,{forward:l,scroll:R4()});s(o.current,o,!0);const z=K({},V5(r.value,l,null),{position:o.position+1},t);s(l,z,!1),r.value=l}return{location:r,state:i,push:f,replace:n}}function $z(c){c=Tz(c);const a=Uz(c),e=Oz(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=K({location:"",base:c,go:r,createHref:Rz.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function Iz(c){return typeof c=="string"||c&&typeof c=="object"}function s9(c){return typeof c=="string"||typeof c=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},n9=Symbol("");var M5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(M5||(M5={}));function Y2(c,a){return K(new Error,{type:c,[n9]:!0},a)}function Z1(c,a){return c instanceof Error&&n9 in c&&(a==null||!!(c.type&a))}const C5="[^/]+?",Gz={sensitive:!1,strict:!1,start:!0,end:!0},Wz=/[.+*?^${}()[\]/\\]/g;function jz(c,a){const e=K({},Gz,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(Wz,"\\$&"),u+=40;else if(h.type===1){const{value:S,repeatable:w,optional:B,regexp:M}=h;s.push({name:S,repeatable:w,optional:B});const d=M||C5;if(d!==C5){u+=10;try{new RegExp(`(${d})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${d}): `+y.message)}}let R=w?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(R=B&&t.length<2?`(?:/${R})`:"/"+R),B&&(R+="?"),i+=R,u+=20,B&&(u+=-8),w&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",S=s[h-1];z[S.name]=u&&S.repeatable?u.split("/"):u}return z}function l(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:S,repeatable:w,optional:B}=u,M=S in t?t[S]:"";if(E1(M)&&!w)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const d=E1(M)?M.join("/"):M;if(!d)if(B)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${S}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:f,stringify:l}}function Zz(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Kz(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=Zz(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(d5(r))return 1;if(d5(i))return-1}return i.length-r.length}function d5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Yz={type:0,value:""},Xz=/[a-zA-Z0-9_]/;function Qz(c){if(!c)return[[]];if(c==="/")return[[Yz]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let f=0,l,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:Xz.test(l)?h():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function Jz(c,a,e){const r=jz(Qz(c.path),e),i=K(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function cv(c,a){const e=[],r=new Map;a=x5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,S=av(o);S.aliasOf=h&&h.record;const w=x5(a,o),B=[S];if("alias"in o){const R=typeof o.alias=="string"?[o.alias]:o.alias;for(const y of R)B.push(K({},S,{components:h?h.record.components:S.components,path:y,aliasOf:h?h.record:S}))}let M,d;for(const R of B){const{path:y}=R;if(z&&y[0]!=="/"){const $=z.record.path,Q=$[$.length-1]==="/"?"":"/";R.path=z.record.path+(y&&Q+y)}if(M=Jz(R,z,w),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!g5(M)&&n(o.name)),S.children){const $=S.children;for(let Q=0;Q<$.length;Q++)s($[Q],M,h&&h.children[Q])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return d?()=>{n(d)}:v3}function n(o){if(s9(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&Kz(o,e[z])>=0&&(o.record.path!==e[z].record.path||!f9(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!g5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},S,w;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw Y2(1,{location:o});w=h.record.name,u=K(L5(z.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&L5(o.params,h.keys.map(d=>d.name))),S=h.stringify(u)}else if("path"in o)S=o.path,h=e.find(d=>d.re.test(S)),h&&(u=h.parse(S),w=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw Y2(1,{location:o,currentLocation:z});w=h.record.name,u=K({},z.params,o.params),S=h.stringify(u)}const B=[];let M=h;for(;M;)B.unshift(M.record),M=M.parent;return{name:w,path:S,params:u,matched:B,meta:rv(B)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:i}}function L5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function av(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:ev(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function ev(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function g5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function rv(c){return c.reduce((a,e)=>K(a,e.meta),{})}function x5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function f9(c,a){return a.children.some(e=>e===c||f9(c,e))}const l9=/#/g,iv=/&/g,sv=/\//g,nv=/=/g,fv=/\?/g,o9=/\+/g,lv=/%5B/g,ov=/%5D/g,t9=/%5E/g,tv=/%60/g,m9=/%7B/g,mv=/%7C/g,z9=/%7D/g,zv=/%20/g;function p8(c){return encodeURI(""+c).replace(mv,"|").replace(lv,"[").replace(ov,"]")}function vv(c){return p8(c).replace(m9,"{").replace(z9,"}").replace(t9,"^")}function P6(c){return p8(c).replace(o9,"%2B").replace(zv,"+").replace(l9,"%23").replace(iv,"%26").replace(tv,"`").replace(m9,"{").replace(z9,"}").replace(t9,"^")}function hv(c){return P6(c).replace(nv,"%3D")}function Hv(c){return p8(c).replace(l9,"%23").replace(fv,"%3F")}function uv(c){return c==null?"":Hv(c).replace(sv,"%2F")}function h4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function pv(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(o9," "),n=s.indexOf("="),f=h4(n<0?s:s.slice(0,n)),l=n<0?null:h4(s.slice(n+1));if(f in a){let t=a[f];E1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function b5(c){let a="";for(let e in c){const r=c[e];if(e=hv(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(E1(r)?r.map(s=>s&&P6(s)):[r&&P6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function Vv(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=E1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Mv=Symbol(""),N5=Symbol(""),V8=Symbol(""),v9=Symbol(""),T6=Symbol("");function s3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function t2(c,a,e,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((n,f)=>{const l=z=>{z===!1?f(Y2(4,{from:e,to:a})):z instanceof Error?f(z):Iz(z)?f(Y2(2,{from:a,to:z})):(s&&r.enterCallbacks[i]===s&&typeof z=="function"&&s.push(z),n())},t=c.call(r&&r.instances[i],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>f(z))})}function z6(c,a,e,r){const i=[];for(const s of c)for(const n in s.components){let f=s.components[n];if(!(a!=="beforeRouteEnter"&&!s.instances[n]))if(Cv(f)){const t=(f.__vccOpts||f)[a];t&&i.push(t2(t,e,r,s,n))}else{let l=f();i.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${s.path}"`));const o=Nz(t)?t.default:t;s.components[n]=o;const h=(o.__vccOpts||o)[a];return h&&t2(h,e,r,s,n)()}))}}return i}function Cv(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function S5(c){const a=Q1(V8),e=Q1(v9),r=o1(()=>a.resolve($2(c.to))),i=o1(()=>{const{matched:l}=r.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(K2.bind(null,o));if(h>-1)return h;const u=w5(l[t-2]);return t>1&&w5(o)===u&&z[z.length-1].path!==u?z.findIndex(K2.bind(null,l[t-2])):h}),s=o1(()=>i.value>-1&&xv(e.params,r.value.params)),n=o1(()=>i.value>-1&&i.value===e.matched.length-1&&r9(e.params,r.value.params));function f(l={}){return gv(l)?a[$2(c.replace)?"replace":"push"]($2(c.to)).catch(v3):Promise.resolve()}return{route:r,href:o1(()=>r.value.href),isActive:s,isExactActive:n,navigate:f}}const dv=y4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:S5,setup(c,{slots:a}){const e=b4(S5(c)),{options:r}=Q1(V8),i=o1(()=>({[y5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[y5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:h8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),Lv=dv;function gv(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function xv(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!E1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function w5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const y5=(c,a,e)=>c??a??e,bv=y4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=Q1(T6),i=o1(()=>c.route||r.value),s=Q1(N5,0),n=o1(()=>{let t=$2(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=o1(()=>i.value.matched[n.value]);i4(N5,o1(()=>n.value+1)),i4(Mv,f),i4(T6,i);const l=w7();return t3(()=>[l.value,f.value,c.name],([t,o,z],[h,u,S])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!K2(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(w=>w(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=f.value,h=z&&z.components[o];if(!h)return A5(e.default,{Component:h,route:t});const u=z.props[o],S=u?u===!0?t.params:typeof u=="function"?u(t):u:null,B=h8(h,K({},S,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return A5(e.default,{Component:B,route:t})||B}}});function A5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Nv=bv;function Sv(c){const a=cv(c.routes,c),e=c.parseQuery||pv,r=c.stringifyQuery||b5,i=c.history,s=s3(),n=s3(),f=s3(),l=ht(f2);let t=f2;E2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=t6.bind(null,V=>""+V),z=t6.bind(null,uv),h=t6.bind(null,h4);function u(V,P){let N,E;return s9(V)?(N=a.getRecordMatcher(V),E=P):E=V,a.addRoute(E,N)}function S(V){const P=a.getRecordMatcher(V);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(V=>V.record)}function B(V){return!!a.getRecordMatcher(V)}function M(V,P){if(P=K({},P||l.value),typeof V=="string"){const H=m6(e,V,P.path),p=a.resolve({path:H.path},P),C=i.createHref(H.fullPath);return K(H,p,{params:h(p.params),hash:h4(H.hash),redirectedFrom:void 0,href:C})}let N;if("path"in V)N=K({},V,{path:m6(e,V.path,P.path).path});else{const H=K({},V.params);for(const p in H)H[p]==null&&delete H[p];N=K({},V,{params:z(H)}),P.params=z(P.params)}const E=a.resolve(N,P),Z=V.hash||"";E.params=o(h(E.params));const m=yz(r,K({},V,{hash:vv(Z),path:E.path})),v=i.createHref(m);return K({fullPath:m,hash:Z,query:r===b5?Vv(V.query):V.query||{}},E,{redirectedFrom:void 0,href:v})}function d(V){return typeof V=="string"?m6(e,V,l.value.path):K({},V)}function R(V,P){if(t!==V)return Y2(8,{from:P,to:V})}function y(V){return r1(V)}function $(V){return y(K(d(V),{replace:!0}))}function Q(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let E=typeof N=="function"?N(V):N;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=d(E):{path:E},E.params={}),K({query:V.query,hash:V.hash,params:"path"in E?{}:V.params},E)}}function r1(V,P){const N=t=M(V),E=l.value,Z=V.state,m=V.force,v=V.replace===!0,H=Q(N);if(H)return r1(K(d(H),{state:typeof H=="object"?K({},Z,H.state):Z,force:m,replace:v}),P||N);const p=N;p.redirectedFrom=P;let C;return!m&&Az(r,E,N)&&(C=Y2(16,{to:p,from:E}),q1(E,E,!0,!1)),(C?Promise.resolve(C):w1(p,E)).catch(L=>Z1(L)?Z1(L,2)?L:s2(L):j(L,p,E)).then(L=>{if(L){if(Z1(L,2))return r1(K({replace:v},d(L.to),{state:typeof L.to=="object"?K({},Z,L.to.state):Z,force:m}),P||p)}else L=p2(p,E,!0,v,Z);return i2(p,E,L),L})}function x1(V,P){const N=R(V,P);return N?Promise.reject(N):Promise.resolve()}function u1(V){const P=F2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(V):V()}function w1(V,P){let N;const[E,Z,m]=wv(V,P);N=z6(E.reverse(),"beforeRouteLeave",V,P);for(const H of E)H.leaveGuards.forEach(p=>{N.push(t2(p,V,P))});const v=x1.bind(null,V,P);return N.push(v),v1(N).then(()=>{N=[];for(const H of s.list())N.push(t2(H,V,P));return N.push(v),v1(N)}).then(()=>{N=z6(Z,"beforeRouteUpdate",V,P);for(const H of Z)H.updateGuards.forEach(p=>{N.push(t2(p,V,P))});return N.push(v),v1(N)}).then(()=>{N=[];for(const H of m)if(H.beforeEnter)if(E1(H.beforeEnter))for(const p of H.beforeEnter)N.push(t2(p,V,P));else N.push(t2(H.beforeEnter,V,P));return N.push(v),v1(N)}).then(()=>(V.matched.forEach(H=>H.enterCallbacks={}),N=z6(m,"beforeRouteEnter",V,P),N.push(v),v1(N))).then(()=>{N=[];for(const H of n.list())N.push(t2(H,V,P));return N.push(v),v1(N)}).catch(H=>Z1(H,8)?H:Promise.reject(H))}function i2(V,P,N){f.list().forEach(E=>u1(()=>E(V,P,N)))}function p2(V,P,N,E,Z){const m=R(V,P);if(m)return m;const v=P===f2,H=E2?history.state:{};N&&(E||v?i.replace(V.fullPath,K({scroll:v&&H&&H.scroll},Z)):i.push(V.fullPath,Z)),l.value=V,q1(V,P,N,v),s2()}let D1;function e3(){D1||(D1=i.listen((V,P,N)=>{if(!q3.listening)return;const E=M(V),Z=Q(E);if(Z){r1(K(Z,{replace:!0}),E).catch(v3);return}t=E;const m=l.value;E2&&Dz(p5(m.fullPath,N.delta),R4()),w1(E,m).catch(v=>Z1(v,12)?v:Z1(v,2)?(r1(v.to,E).then(H=>{Z1(H,20)&&!N.delta&&N.type===g3.pop&&i.go(-1,!1)}).catch(v3),Promise.reject()):(N.delta&&i.go(-N.delta,!1),j(v,E,m))).then(v=>{v=v||p2(E,m,!1),v&&(N.delta&&!Z1(v,8)?i.go(-N.delta,!1):N.type===g3.pop&&Z1(v,20)&&i.go(-1,!1)),i2(E,m,v)}).catch(v3)}))}let P2=s3(),l1=s3(),X;function j(V,P,N){s2(V);const E=l1.list();return E.length?E.forEach(Z=>Z(V,P,N)):console.error(V),Promise.reject(V)}function j1(){return X&&l.value!==f2?Promise.resolve():new Promise((V,P)=>{P2.add([V,P])})}function s2(V){return X||(X=!V,e3(),P2.list().forEach(([P,N])=>V?N(V):P()),P2.reset()),V}function q1(V,P,N,E){const{scrollBehavior:Z}=c;if(!E2||!Z)return Promise.resolve();const m=!N&&qz(p5(V.fullPath,0))||(E||!N)&&history.state&&history.state.scroll||null;return t4().then(()=>Z(V,P,m)).then(v=>v&&Ez(v)).catch(v=>j(v,V,P))}const M1=V=>i.go(V);let T2;const F2=new Set,q3={currentRoute:l,listening:!0,addRoute:u,removeRoute:S,hasRoute:B,getRoutes:w,resolve:M,options:c,push:y,replace:$,go:M1,back:()=>M1(-1),forward:()=>M1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:f.add,onError:l1.add,isReady:j1,install(V){const P=this;V.component("RouterLink",Lv),V.component("RouterView",Nv),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>$2(l)}),E2&&!T2&&l.value===f2&&(T2=!0,y(i.location).catch(Z=>{}));const N={};for(const Z in f2)Object.defineProperty(N,Z,{get:()=>l.value[Z],enumerable:!0});V.provide(V8,P),V.provide(v9,g7(N)),V.provide(T6,l);const E=V.unmount;F2.add(V),V.unmount=function(){F2.delete(V),F2.size<1&&(t=f2,D1&&D1(),D1=null,l.value=f2,T2=!1,X=!1),E()}}};function v1(V){return V.reduce((P,N)=>P.then(()=>u1(N)),Promise.resolve())}return q3}function wv(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const f=a.matched[n];f&&(c.matched.find(t=>K2(t,f))?r.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>K2(t,l))||i.push(l))}return[e,r,i]}const yv={};function Av(c,a){return P4(),T4("main")}const kv=H8(yv,[["render",Av]]),h9=Sv({history:$z("/"),routes:[{path:"/",name:"home",component:kv},{path:"/about",name:"about",component:()=>bz(()=>import("./AboutView-9276a4a3.js"),["assets/AboutView-9276a4a3.js","assets/AboutView-4d995ba2.css"])}]});function F6(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function k5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function R6(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?k5(Object(e),!0).forEach(function(r){F6(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):k5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}var Pv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(r,i){if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");if(n.async=!0,n.src=a,n.defer=e.defer,e.preconnectOrigin){var f=document.createElement("link");f.href=e.preconnectOrigin,f.rel="preconnect",s.appendChild(f)}s.appendChild(n),n.onload=r,n.onerror=i}})},Tv=function c(a){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];if(!r.length)return a;var s=r.shift();if(!(!a4(a)||!a4(s))){for(var n in s)a4(s[n])?(a[n]||Object.assign(a,F6({},n,{})),c(a[n],s[n])):Object.assign(a,F6({},n,s[n]));return c.apply(void 0,[a].concat(r))}},y3=function(){return!(typeof window>"u"||typeof document>"u")},P5=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;y3()},Fv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P5('Missing "appName" property inside the plugin options.',a.app_name==null),P5('Missing "name" property in the route.',a.screen_name==null),a};function Rv(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=c.split("/"),r=a.split("/");return e[0]===""&&a[a.length-1]==="/"&&e.shift(),r.join("/")+e.join("/")}var Bv=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},H9={},Ev=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Bv();H9=Tv(e,a)},N1=function(){return H9},S2=function(){var c,a=N1(),e=a.globalObjectName;!y3()||typeof window[e]>"u"||(c=window)[e].apply(c,arguments)},M8=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];var r=N1(),i=r.config,s=r.includes;S2.apply(void 0,["config",i.id].concat(a)),Array.isArray(s)&&s.forEach(function(n){S2.apply(void 0,["config",n.id].concat(a))})},T5=function(a,e){y3()&&(window["ga-disable-".concat(a)]=e)},u9=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=N1(),e=a.config,r=a.includes;T5(e.id,c),Array.isArray(r)&&r.forEach(function(i){return T5(i.id,c)})},p9=function(){u9(!0)},Dv=function(){u9(!1)},V9,qv=function(a){V9=a},C8=function(){return V9},k2=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=N1(),r=e.includes,i=e.defaultGroupName;a.send_to==null&&Array.isArray(r)&&r.length&&(a.send_to=r.map(function(s){return s.id}).concat(i)),S2("event",c,a)},M9=function(c){if(y3()){var a;if(typeof c=="string")a={page_path:c};else if(c.path||c.fullPath){var e=N1(),r=e.pageTrackerUseFullPath,i=e.pageTrackerPrependBase,s=C8(),n=s&&s.options.base,f=r?c.fullPath:c.path;a=R6(R6({},c.name&&{page_title:c.name}),{},{page_path:i?Rv(f,n):f})}else a=c;a.page_location==null&&(a.page_location=window.location.href),a.send_page_view==null&&(a.send_page_view=!0),k2("page_view",a)}},C9=function(c){var a=N1(),e=a.appName;if(c){var r;typeof c=="string"?r={screen_name:c}:r=c,r.app_name=r.app_name||e,k2("screen_view",r)}},_v=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];k2.apply(void 0,["exception"].concat(a))},Ov=function(c){M8("linker",c)},Uv=function(c){k2("timing_complete",c)},$v=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];S2.apply(void 0,["set"].concat(a))},Iv=function(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];k2.apply(void 0,["refund"].concat(a))},Gv=function(c){k2("purchase",c)},Wv=function(c){M8({custom_map:c})},jv=Object.freeze({__proto__:null,query:S2,config:M8,optOut:p9,optIn:Dv,pageview:M9,screenview:C9,exception:_v,linker:Ov,time:Uv,set:$v,refund:Iv,purchase:Gv,customMap:Wv,event:k2}),Zv=function(a){a.config.globalProperties.$gtag=jv},Kv=function(){if(y3()){var c=N1(),a=c.enabled,e=c.globalObjectName,r=c.globalDataLayerName;return window[e]==null&&(window[r]=window[r]||[],window[e]=function(){window[r].push(arguments)}),window[e]("js",new Date),a||p9(),window[e]}},F5=function(a){return R6({send_page_view:!1},a)},d9=function(){var c=N1(),a=c.config,e=c.includes;S2("config",a.id,F5(a.params)),Array.isArray(e)&&e.forEach(function(r){S2("config",r.id,F5(r.params))})},R5=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=N1(),r=e.appName,i=e.pageTrackerTemplate,s=e.pageTrackerScreenviewEnabled,n=e.pageTrackerSkipSamePath;if(!(n&&c.path===a.path)){var f=c;if(O(i)?f=i(c,a):s&&(f=Fv({app_name:r,screen_name:c.name})),s){C9(f);return}M9(f)}},B5=function(a){var e=N1(),r=e.pageTrackerExcludedRoutes;return r.includes(a.path)||r.includes(a.name)},Yv=function(){var c=N1(),a=c.onBeforeTrack,e=c.onAfterTrack,r=C8();r.isReady().then(function(){t4().then(function(){var i=r.currentRoute;d9(),!B5(i.value)&&R5(i.value)}),r.afterEach(function(i,s){t4().then(function(){B5(i)||(O(a)&&a(i,s),R5(i,s),O(e)&&e(i,s))})})})},Xv=function(){var c=N1(),a=c.onReady,e=c.onError,r=c.globalObjectName,i=c.globalDataLayerName,s=c.config,n=c.customResourceURL,f=c.customPreconnectOrigin,l=c.deferScriptLoad,t=c.pageTrackerEnabled,o=c.disableScriptLoad,z=!!(t&&C8());if(Kv(),z?Yv():d9(),!o)return Pv("".concat(n,"?id=").concat(s.id,"&l=").concat(i),{preconnectOrigin:f,defer:l}).then(function(){a&&a(window[r])}).catch(function(h){return e&&e(h),h})},Qv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;Zv(a),Ev(e),qv(r),N1().bootstrap&&Xv()};function E5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?E5(Object(e),!0).forEach(function(r){f1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):E5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function H4(c){"@babel/helpers - typeof";return H4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},H4(c)}function Jv(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function D5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ch(c,a,e){return a&&D5(c.prototype,a),e&&D5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function f1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function d8(c,a){return eh(c)||ih(c,a)||L9(c,a)||nh()}function A3(c){return ah(c)||rh(c)||L9(c)||sh()}function ah(c){if(Array.isArray(c))return B6(c)}function eh(c){if(Array.isArray(c))return c}function rh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ih(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function L9(c,a){if(c){if(typeof c=="string")return B6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B6(c,a)}}function B6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function sh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q5=function(){},L8={},g9={},x9=null,b9={mark:q5,measure:q5};try{typeof window<"u"&&(L8=window),typeof document<"u"&&(g9=document),typeof MutationObserver<"u"&&(x9=MutationObserver),typeof performance<"u"&&(b9=performance)}catch{}var fh=L8.navigator||{},_5=fh.userAgent,O5=_5===void 0?"":_5,h2=L8,a1=g9,U5=x9,W3=b9;h2.document;var r2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",N9=~O5.indexOf("MSIE")||~O5.indexOf("Trident/"),j3,Z3,K3,Y3,X3,J1="___FONT_AWESOME___",E6=16,S9="fa",w9="svg-inline--fa",w2="data-fa-i2svg",D6="data-fa-pseudo-element",lh="data-fa-pseudo-element-pending",g8="data-prefix",x8="data-icon",$5="fontawesome-i2svg",oh="async",th=["HTML","HEAD","STYLE","SCRIPT"],y9=function(){try{return!0}catch{return!1}}(),c1="classic",i1="sharp",b8=[c1,i1];function k3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[c1]}})}var x3=k3((j3={},f1(j3,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),f1(j3,i1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),j3)),b3=k3((Z3={},f1(Z3,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f1(Z3,i1,{solid:"fass",regular:"fasr",light:"fasl"}),Z3)),N3=k3((K3={},f1(K3,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f1(K3,i1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),K3)),mh=k3((Y3={},f1(Y3,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f1(Y3,i1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Y3)),zh=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,A9="fa-layers-text",vh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hh=k3((X3={},f1(X3,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f1(X3,i1,{900:"fass",400:"fasr",300:"fasl"}),X3)),k9=[1,2,3,4,5,6,7,8,9,10],Hh=k9.concat([11,12,13,14,15,16,17,18,19,20]),uh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S3=new Set;Object.keys(b3[c1]).map(S3.add.bind(S3));Object.keys(b3[i1]).map(S3.add.bind(S3));var ph=[].concat(b8,A3(S3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L2.GROUP,L2.SWAP_OPACITY,L2.PRIMARY,L2.SECONDARY]).concat(k9.map(function(c){return"".concat(c,"x")})).concat(Hh.map(function(c){return"w-".concat(c)})),H3=h2.FontAwesomeConfig||{};function Vh(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Mh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var Ch=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ch.forEach(function(c){var a=d8(c,2),e=a[0],r=a[1],i=Mh(Vh(e));i!=null&&(H3[r]=i)})}var P9={styleDefault:"solid",familyDefault:"classic",cssPrefix:S9,replacementClass:w9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H3.familyPrefix&&(H3.cssPrefix=H3.familyPrefix);var X2=k(k({},P9),H3);X2.autoReplaceSvg||(X2.observeMutations=!1);var F={};Object.keys(P9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){X2[c]=e,u3.forEach(function(r){return r(F)})},get:function(){return X2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){X2.cssPrefix=a,u3.forEach(function(e){return e(F)})},get:function(){return X2.cssPrefix}});h2.FontAwesomeConfig=F;var u3=[];function dh(c){return u3.push(c),function(){u3.splice(u3.indexOf(c),1)}}var l2=E6,G1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lh(c){if(!(!c||!r2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return a1.head.insertBefore(a,r),c}}var gh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function w3(){for(var c=12,a="";c-- >0;)a+=gh[Math.random()*62|0];return a}function a3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function N8(c){return c.classList?a3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function T9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(T9(c[e]),'" ')},"").trim()}function B4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function S8(c){return c.size!==G1.size||c.x!==G1.x||c.y!==G1.y||c.rotate!==G1.rotate||c.flipX||c.flipY}function bh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:t}}function Nh(c){var a=c.transform,e=c.width,r=e===void 0?E6:e,i=c.height,s=i===void 0?E6:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&N9?l+="translate(".concat(a.x/l2-r/2,"em, ").concat(a.y/l2-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/l2,"em), calc(-50% + ").concat(a.y/l2,"em)) "):l+="translate(".concat(a.x/l2,"em, ").concat(a.y/l2,"em) "),l+="scale(".concat(a.size/l2*(a.flipX?-1:1),", ").concat(a.size/l2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Sh=`:root, :host {
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
}`;function F9(){var c=S9,a=w9,e=F.cssPrefix,r=F.replacementClass,i=Sh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var I5=!1;function v6(){F.autoAddCss&&!I5&&(Lh(F9()),I5=!0)}var wh={mixout:function(){return{dom:{css:F9,insertCss:v6}}},hooks:function(){return{beforeDOMElementCreation:function(){v6()},beforeI2svg:function(){v6()}}}},c2=h2||{};c2[J1]||(c2[J1]={});c2[J1].styles||(c2[J1].styles={});c2[J1].hooks||(c2[J1].hooks={});c2[J1].shims||(c2[J1].shims=[]);var F1=c2[J1],R9=[],yh=function c(){a1.removeEventListener("DOMContentLoaded",c),u4=1,R9.map(function(a){return a()})},u4=!1;r2&&(u4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),u4||a1.addEventListener("DOMContentLoaded",yh));function Ah(c){r2&&(u4?setTimeout(c,0):R9.push(c))}function P3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?T9(c):"<".concat(a," ").concat(xh(r),">").concat(s.map(P3).join(""),"</").concat(a,">")}function G5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var kh=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},h6=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?kh(e,i):e,l,t,o;for(r===void 0?(l=1,o=a[s[0]]):(l=0,o=r);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function Ph(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function q6(c){var a=Ph(c);return a.length===1?a[0].toString(16):null}function Th(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function W5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function _6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=W5(a);typeof F1.hooks.addPack=="function"&&!i?F1.hooks.addPack(c,W5(a)):F1.styles[c]=k(k({},F1.styles[c]||{}),s),c==="fas"&&_6("fa",a)}var Q3,J3,c4,q2=F1.styles,Fh=F1.shims,Rh=(Q3={},f1(Q3,c1,Object.values(N3[c1])),f1(Q3,i1,Object.values(N3[i1])),Q3),w8=null,B9={},E9={},D9={},q9={},_9={},Bh=(J3={},f1(J3,c1,Object.keys(x3[c1])),f1(J3,i1,Object.keys(x3[i1])),J3);function Eh(c){return~ph.indexOf(c)}function Dh(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Eh(i)?i:null}var O9=function(){var a=function(s){return h6(q2,function(n,f,l){return n[l]=h6(f,s,{}),n},{})};B9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),E9=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),_9=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var e="far"in q2||F.autoFetchSvg,r=h6(Fh,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});D9=r.names,q9=r.unicodes,w8=E4(F.styleDefault,{family:F.familyDefault})};dh(function(c){w8=E4(c.styleDefault,{family:F.familyDefault})});O9();function y8(c,a){return(B9[c]||{})[a]}function qh(c,a){return(E9[c]||{})[a]}function g2(c,a){return(_9[c]||{})[a]}function U9(c){return D9[c]||{prefix:null,iconName:null}}function _h(c){var a=q9[c],e=y8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H2(){return w8}var A8=function(){return{prefix:null,iconName:null,rest:[]}};function E4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?c1:e,i=x3[r][c],s=b3[r][c]||b3[r][i],n=c in F1.styles?c:null;return s||n||null}var j5=(c4={},f1(c4,c1,Object.keys(N3[c1])),f1(c4,i1,Object.keys(N3[i1])),c4);function D4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},f1(a,c1,"".concat(F.cssPrefix,"-").concat(c1)),f1(a,i1,"".concat(F.cssPrefix,"-").concat(i1)),a),n=null,f=c1;(c.includes(s[c1])||c.some(function(t){return j5[c1].includes(t)}))&&(f=c1),(c.includes(s[i1])||c.some(function(t){return j5[i1].includes(t)}))&&(f=i1);var l=c.reduce(function(t,o){var z=Dh(F.cssPrefix,o);if(q2[o]?(o=Rh[f].includes(o)?mh[f][o]:o,n=o,t.prefix=o):Bh[f].indexOf(o)>-1?(n=o,t.prefix=E4(o,{family:f})):z?t.iconName=z:o!==F.replacementClass&&o!==s[c1]&&o!==s[i1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?U9(t.iconName):{},u=g2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!q2.far&&q2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},A8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===i1&&(q2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=g2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=H2()||"fas"),l}var Oh=function(){function c(){Jv(this,c),this.definitions={}}return ch(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=k(k({},e.definitions[f]||{}),n[f]),_6(f,n[f]);var l=N3[c1][f];l&&_6(l,n[f]),O9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),Z5=[],_2={},G2={},Uh=Object.keys(G2);function $h(c,a){var e=a.mixoutsTo;return Z5=c,_2={},Object.keys(G2).forEach(function(r){Uh.indexOf(r)===-1&&delete G2[r]}),Z5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),H4(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){_2[n]||(_2[n]=[]),_2[n].push(s[n])})}r.provides&&r.provides(G2)}),e}function O6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=_2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function y2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=_2[c]||[];i.forEach(function(s){s.apply(null,e)})}function a2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return G2[c]?G2[c].apply(null,a):void 0}function U6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||H2();if(a)return a=g2(e,a)||a,G5($9.definitions,e,a)||G5(F1.styles,e,a)}var $9=new Oh,Ih=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,y2("noAuto")},Gh={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return r2?(y2("beforeI2svg",a),a2("pseudoElements2svg",a),a2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Ah(function(){jh({autoReplaceSvgRoot:e}),y2("watch",a)})}},Wh={icon:function(a){if(a===null)return null;if(H4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:g2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=E4(a[0]);return{prefix:r,iconName:g2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(zh))){var i=D4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||H2(),iconName:g2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=H2();return{prefix:s,iconName:g2(s,a)||a}}}},S1={noAuto:Ih,config:F,dom:Gh,parse:Wh,library:$9,findIconDefinition:U6,toHtml:P3},jh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?a1:e;(Object.keys(F1.styles).length>0||F.autoFetchSvg)&&r2&&F.autoReplaceSvg&&S1.dom.i2svg({node:r})};function q4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return P3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(r2){var r=a1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Zh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(S8(n)&&e.found&&!r.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};i.style=B4(k(k({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Kh(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:n}),children:r}]}]}function k8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,S=r.found?r:e,w=S.width,B=S.height,M=i==="fak",d=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(u1){return z.classes.indexOf(u1)===-1}).filter(function(u1){return u1!==""||!!u1}).concat(z.classes).join(" "),R={children:[],attributes:k(k({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(B)})},y=M&&!~z.classes.indexOf("fa-fw")?{width:"".concat(w/B*16*.0625,"em")}:{};u&&(R.attributes[w2]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(o||w3())},children:[l]}),delete R.attributes.title);var $=k(k({},R),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:f,styles:k(k({},y),z.styles)}),Q=r.found&&e.found?a2("generateAbstractMask",$)||{children:[],attributes:{}}:a2("generateAbstractIcon",$)||{children:[],attributes:{}},r1=Q.children,x1=Q.attributes;return $.children=r1,$.attributes=x1,f?Kh($):Zh($)}function K5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=k(k(k({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[w2]="");var o=k({},n.styles);S8(i)&&(o.transform=Nh({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=B4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Yh(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=B4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var H6=F1.styles;function $6(c){var a=c[0],e=c[1],r=c.slice(4),i=d8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var Xh={found:!1,width:512,height:512};function Qh(c,a){!y9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function I6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=H2()),new Promise(function(r,i){if(a2("missingIconAbstract"),e==="fa"){var s=U9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&H6[a]&&H6[a][c]){var n=H6[a][c];return r($6(n))}Qh(c,a),r(k(k({},Xh),{},{icon:F.showMissingIcons&&c?a2("missingIconAbstract")||{}:{}}))})}var Y5=function(){},G6=F.measurePerformance&&W3&&W3.mark&&W3.measure?W3:{mark:Y5,measure:Y5},l3='FA "6.4.2"',Jh=function(a){return G6.mark("".concat(l3," ").concat(a," begins")),function(){return I9(a)}},I9=function(a){G6.mark("".concat(l3," ").concat(a," ends")),G6.measure("".concat(l3," ").concat(a),"".concat(l3," ").concat(a," begins"),"".concat(l3," ").concat(a," ends"))},P8={begin:Jh,end:I9},n4=function(){};function X5(c){var a=c.getAttribute?c.getAttribute(w2):null;return typeof a=="string"}function cH(c){var a=c.getAttribute?c.getAttribute(g8):null,e=c.getAttribute?c.getAttribute(x8):null;return a&&e}function aH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function eH(){if(F.autoReplaceSvg===!0)return f4.replace;var c=f4[F.autoReplaceSvg];return c||f4.replace}function rH(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function iH(c){return a1.createElement(c)}function G9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?rH:iH:e;if(typeof c=="string")return a1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(G9(n,{ceFn:r}))}),i}function sH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var f4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(G9(i),e)}),e.getAttribute(w2)===null&&F.keepOriginalSource){var r=a1.createComment(sH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~N8(e).indexOf(F.replacementClass))return f4.replace(a);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return P3(f)}).join(`
`);e.setAttribute(w2,""),e.innerHTML=n}};function Q5(c){c()}function W9(c,a){var e=typeof a=="function"?a:n4;if(c.length===0)e();else{var r=Q5;F.mutateApproach===oh&&(r=h2.requestAnimationFrame||Q5),r(function(){var i=eH(),s=P8.begin("mutate");c.map(i),s(),e()})}}var T8=!1;function j9(){T8=!0}function W6(){T8=!1}var p4=null;function J5(c){if(U5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?n4:a,r=c.nodeCallback,i=r===void 0?n4:r,s=c.pseudoElementsCallback,n=s===void 0?n4:s,f=c.observeMutationsRoot,l=f===void 0?a1:f;p4=new U5(function(t){if(!T8){var o=H2();a3(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!X5(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&X5(z.target)&&~uh.indexOf(z.attributeName))if(z.attributeName==="class"&&cH(z.target)){var h=D4(N8(z.target)),u=h.prefix,S=h.iconName;z.target.setAttribute(g8,u||o),S&&z.target.setAttribute(x8,S)}else aH(z.target)&&i(z.target)})}}),r2&&p4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nH(){p4&&p4.disconnect()}function fH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function lH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=D4(N8(c));return i.prefix||(i.prefix=H2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qh(i.prefix,c.innerText)||y8(i.prefix,q6(c.innerText))),!i.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function oH(c){var a=a3(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||w3()):(a["aria-hidden"]="true",a.focusable="false")),a}function tH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=lH(c),r=e.iconName,i=e.prefix,s=e.rest,n=oH(c),f=O6("parseNodeAttributes",{},c),l=a.styleParser?fH(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:G1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var mH=F1.styles;function Z9(c){var a=F.autoReplaceSvg==="nest"?c7(c,{styleParser:!1}):c7(c);return~a.extra.classes.indexOf(A9)?a2("generateLayersText",c,a):a2("generateSvgReplacementMutation",c,a)}var u2=new Set;b8.map(function(c){u2.add("fa-".concat(c))});Object.keys(x3[c1]).map(u2.add.bind(u2));Object.keys(x3[i1]).map(u2.add.bind(u2));u2=A3(u2);function a7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!r2)return Promise.resolve();var e=a1.documentElement.classList,r=function(z){return e.add("".concat($5,"-").concat(z))},i=function(z){return e.remove("".concat($5,"-").concat(z))},s=F.autoFetchSvg?u2:b8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(mH));s.includes("fa")||s.push("fa");var n=[".".concat(A9,":not([").concat(w2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(w2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=a3(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=P8.begin("onTree"),t=f.reduce(function(o,z){try{var h=Z9(z);h&&o.push(h)}catch(u){y9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){W9(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),z(h)})})}function zH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Z9(c).then(function(e){e&&W9([e],a)})}function vH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:U6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:U6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var hH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?G1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,S=u===void 0?null:u,w=e.classes,B=w===void 0?[]:w,M=e.attributes,d=M===void 0?{}:M,R=e.styles,y=R===void 0?{}:R;if(a){var $=a.prefix,Q=a.iconName,r1=a.icon;return q4(k({type:"icon"},a),function(){return y2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(S||w3()):(d["aria-hidden"]="true",d.focusable="false")),k8({icons:{main:$6(r1),mask:l?$6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:Q,transform:k(k({},G1),i),symbol:n,title:h,maskId:o,titleId:S,extra:{attributes:d,styles:y,classes:B}})})}},HH={mixout:function(){return{icon:vH(hH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=a7,e.nodeCallback=zH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?a1:r,s=e.callback,n=s===void 0?function(){}:s;return a7(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,l=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,S){Promise.all([I6(i,f),o.iconName?I6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var B=d8(w,2),M=B[0],d=B[1];u([e,k8({icons:{main:M,mask:d},prefix:f,iconName:i,transform:l,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,l=B4(f);l.length>0&&(i.style=l);var t;return S8(n)&&(t=a2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},uH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return q4({type:"layer"},function(){y2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(A3(s)).join(" ")},children:n}]})}}}},pH={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,l=r.attributes,t=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return q4({type:"counter",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:r}),Yh({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(A3(f))}})})}}}},VH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?G1:i,n=r.title,f=n===void 0?null:n,l=r.classes,t=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return q4({type:"text",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:r}),K5({content:e,transform:k(k({},G1),s),title:f,extra:{attributes:z,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(A3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,l=null;if(N9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,K5({content:e.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},MH=new RegExp('"',"ug"),e7=[1105920,1112319];function CH(c){var a=c.replace(MH,""),e=Th(a,0),r=e>=e7[0]&&e<=e7[1],i=a.length===2?a[0]===a[1]:!1;return{value:q6(i?a[0]:a),isSecondary:r||i}}function r7(c,a){var e="".concat(lh).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=a3(c.children),n=s.filter(function(r1){return r1.getAttribute(D6)===a})[0],f=h2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(vh),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?i1:c1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?b3[h][l[2].toLowerCase()]:hh[h][t],S=CH(z),w=S.value,B=S.isSecondary,M=l[0].startsWith("FontAwesome"),d=y8(u,w),R=d;if(M){var y=_h(w);y.iconName&&y.prefix&&(d=y.iconName,u=y.prefix)}if(d&&!B&&(!n||n.getAttribute(g8)!==u||n.getAttribute(x8)!==R)){c.setAttribute(e,R),n&&c.removeChild(n);var $=tH(),Q=$.extra;Q.attributes[D6]=a,I6(d,u).then(function(r1){var x1=k8(k(k({},$),{},{icons:{main:r1,mask:A8()},prefix:u,iconName:R,extra:Q,watchable:!0})),u1=a1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(u1,c.firstChild):c.appendChild(u1),u1.outerHTML=x1.map(function(w1){return P3(w1)}).join(`