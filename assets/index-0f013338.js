(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function _6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const e1={},E2=[],F1=()=>{},no=()=>!1,fo=/^on[^a-z]/,z4=c=>fo.test(c),O6=c=>c.startsWith("onUpdate:"),m1=Object.assign,U6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},lo=Object.prototype.hasOwnProperty,G=(c,a)=>lo.call(c,a),O=Array.isArray,n3=c=>h4(c)==="[object Map]",oo=c=>h4(c)==="[object Set]",U=c=>typeof c=="function",z1=c=>typeof c=="string",v4=c=>typeof c=="symbol",s1=c=>c!==null&&typeof c=="object",j5=c=>(s1(c)||U(c))&&U(c.then)&&U(c.catch),to=Object.prototype.toString,h4=c=>to.call(c),mo=c=>h4(c).slice(8,-1),zo=c=>h4(c)==="[object Object]",$6=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Y3=_6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},vo=/-(\w)/g,G1=H4(c=>c.replace(vo,(a,e)=>e?e.toUpperCase():"")),ho=/\B([A-Z])/g,j2=H4(c=>c.replace(ho,"-$1").toLowerCase()),u4=H4(c=>c.charAt(0).toUpperCase()+c.slice(1)),X4=H4(c=>c?`on${u4(c)}`:""),b2=(c,a)=>!Object.is(c,a),Q4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},e4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Ho=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let N0;const z6=()=>N0||(N0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function I6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=z1(r)?Mo(r):I6(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(z1(c)||s1(c))return c}const uo=/;(?![^(]*\))/g,Vo=/:([^]+)/,po=/\/\*[^]*?\*\//g;function Mo(c){const a={};return c.replace(po,"").split(uo).forEach(e=>{if(e){const r=e.split(Vo);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function G6(c){let a="";if(z1(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const r=G6(c[e]);r&&(a+=r+" ")}else if(s1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Co="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lo=_6(Co);function K5(c){return!!c||c===""}let y1;class Y5{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=y1,!a&&y1&&(this.index=(y1.scopes||(y1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=y1;try{return y1=this,a()}finally{y1=e}}}on(){y1=this}off(){y1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function go(c){return new Y5(c)}function xo(c,a=y1){a&&a.active&&a.effects.push(c)}function bo(){return y1}const W6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},X5=c=>(c.w&z2)>0,Q5=c=>(c.n&z2)>0,No=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=z2},So=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];X5(i)&&!Q5(i)?i.delete(c):a[e++]=i,i.w&=~z2,i.n&=~z2}a.length=e}},v6=new WeakMap;let r3=0,z2=1;const h6=30;let A1;const g2=Symbol(""),H6=Symbol("");class Z6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,xo(this,r)}run(){if(!this.active)return this.fn();let a=A1,e=t2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=A1,A1=this,t2=!0,z2=1<<++r3,r3<=h6?No(this):S0(this),this.fn()}finally{r3<=h6&&So(this),z2=1<<--r3,A1=this.parent,t2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){A1===this?this.deferStop=!0:this.active&&(S0(this),this.onStop&&this.onStop(),this.active=!1)}}function S0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let t2=!0;const J5=[];function K2(){J5.push(t2),t2=!1}function Y2(){const c=J5.pop();t2=c===void 0?!0:c}function L1(c,a,e){if(t2&&A1){let r=v6.get(c);r||v6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=W6()),c7(i)}}function c7(c,a){let e=!1;r3<=h6?Q5(c)||(c.n|=z2,e=!X5(c)):e=!c.has(A1),e&&(c.add(A1),A1.deps.push(c))}function Y1(c,a,e,r,i,s){const n=v6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&O(c)){const l=Number(r);n.forEach((t,o)=>{(o==="length"||!v4(o)&&o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":O(c)?$6(e)&&f.push(n.get("length")):(f.push(n.get(g2)),n3(c)&&f.push(n.get(H6)));break;case"delete":O(c)||(f.push(n.get(g2)),n3(c)&&f.push(n.get(H6)));break;case"set":n3(c)&&f.push(n.get(g2));break}if(f.length===1)f[0]&&u6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);u6(W6(l))}}function u6(c,a){const e=O(c)?c:[...c];for(const r of e)r.computed&&w0(r);for(const r of e)r.computed||w0(r)}function w0(c,a){(c!==A1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const wo=_6("__proto__,__v_isRef,__isVue"),a7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(v4)),y0=yo();function yo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=W(this);for(let s=0,n=this.length;s<n;s++)L1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){K2();const r=W(this)[a].apply(this,e);return Y2(),r}}),c}function Ao(c){const a=W(this);return L1(a,"has",c),a.hasOwnProperty(c)}class e7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const i=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw"&&r===(i?s?$o:n7:s?s7:i7).get(a))return a;const n=O(a);if(!i){if(n&&G(y0,e))return Reflect.get(y0,e,r);if(e==="hasOwnProperty")return Ao}const f=Reflect.get(a,e,r);return(v4(e)?a7.has(e):wo(e))||(i||L1(a,"get",e),s)?f:H1(f)?n&&$6(e)?f:f.value:s1(f)?i?l7(f):p4(f):f}}class r7 extends e7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(U2(s)&&H1(s)&&!H1(r))return!1;if(!this._shallow&&(!r4(r)&&!U2(r)&&(s=W(s),r=W(r)),!O(a)&&H1(s)&&!H1(r)))return s.value=r,!0;const n=O(a)&&$6(e)?Number(e)<a.length:G(a,e),f=Reflect.set(a,e,r,i);return a===W(i)&&(n?b2(r,s)&&Y1(a,"set",e,r):Y1(a,"add",e,r)),f}deleteProperty(a,e){const r=G(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&Y1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!v4(e)||!a7.has(e))&&L1(a,"has",e),r}ownKeys(a){return L1(a,"iterate",O(a)?"length":g2),Reflect.ownKeys(a)}}class ko extends e7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Po=new r7,To=new ko,Fo=new r7(!0),j6=c=>c,V4=c=>Reflect.getPrototypeOf(c);function B3(c,a,e=!1,r=!1){c=c.__v_raw;const i=W(c),s=W(a);e||(b2(a,s)&&L1(i,"get",a),L1(i,"get",s));const{has:n}=V4(i),f=r?j6:e?Q6:h3;if(n.call(i,a))return f(c.get(a));if(n.call(i,s))return f(c.get(s));c!==i&&c.get(a)}function R3(c,a=!1){const e=this.__v_raw,r=W(e),i=W(c);return a||(b2(c,i)&&L1(r,"has",c),L1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function E3(c,a=!1){return c=c.__v_raw,!a&&L1(W(c),"iterate",g2),Reflect.get(c,"size",c)}function A0(c){c=W(c);const a=W(this);return V4(a).has.call(a,c)||(a.add(c),Y1(a,"add",c,c)),this}function k0(c,a){a=W(a);const e=W(this),{has:r,get:i}=V4(e);let s=r.call(e,c);s||(c=W(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?b2(a,n)&&Y1(e,"set",c,a):Y1(e,"add",c,a),this}function P0(c){const a=W(this),{has:e,get:r}=V4(a);let i=e.call(a,c);i||(c=W(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&Y1(a,"delete",c,void 0),s}function T0(){const c=W(this),a=c.size!==0,e=c.clear();return a&&Y1(c,"clear",void 0,void 0),e}function D3(c,a){return function(r,i){const s=this,n=s.__v_raw,f=W(n),l=a?j6:c?Q6:h3;return!c&&L1(f,"iterate",g2),n.forEach((t,o)=>r.call(i,l(t),l(o),s))}}function q3(c,a,e){return function(...r){const i=this.__v_raw,s=W(i),n=n3(s),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=i[c](...r),o=e?j6:a?Q6:h3;return!a&&L1(s,"iterate",l?H6:g2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:f?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function s2(c){return function(...a){return c==="delete"?!1:this}}function Bo(){const c={get(s){return B3(this,s)},get size(){return E3(this)},has:R3,add:A0,set:k0,delete:P0,clear:T0,forEach:D3(!1,!1)},a={get(s){return B3(this,s,!1,!0)},get size(){return E3(this)},has:R3,add:A0,set:k0,delete:P0,clear:T0,forEach:D3(!1,!0)},e={get(s){return B3(this,s,!0)},get size(){return E3(this,!0)},has(s){return R3.call(this,s,!0)},add:s2("add"),set:s2("set"),delete:s2("delete"),clear:s2("clear"),forEach:D3(!0,!1)},r={get(s){return B3(this,s,!0,!0)},get size(){return E3(this,!0)},has(s){return R3.call(this,s,!0)},add:s2("add"),set:s2("set"),delete:s2("delete"),clear:s2("clear"),forEach:D3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=q3(s,!1,!1),e[s]=q3(s,!0,!1),a[s]=q3(s,!1,!0),r[s]=q3(s,!0,!0)}),[c,e,a,r]}const[Ro,Eo,Do,qo]=Bo();function K6(c,a){const e=a?c?qo:Do:c?Eo:Ro;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(G(e,i)&&i in r?e:r,i,s)}const _o={get:K6(!1,!1)},Oo={get:K6(!1,!0)},Uo={get:K6(!0,!1)},i7=new WeakMap,s7=new WeakMap,n7=new WeakMap,$o=new WeakMap;function Io(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Go(c){return c.__v_skip||!Object.isExtensible(c)?0:Io(mo(c))}function p4(c){return U2(c)?c:Y6(c,!1,Po,_o,i7)}function f7(c){return Y6(c,!1,Fo,Oo,s7)}function l7(c){return Y6(c,!0,To,Uo,n7)}function Y6(c,a,e,r,i){if(!s1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=Go(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return i.set(c,f),f}function D2(c){return U2(c)?D2(c.__v_raw):!!(c&&c.__v_isReactive)}function U2(c){return!!(c&&c.__v_isReadonly)}function r4(c){return!!(c&&c.__v_isShallow)}function o7(c){return D2(c)||U2(c)}function W(c){const a=c&&c.__v_raw;return a?W(a):c}function X6(c){return e4(c,"__v_skip",!0),c}const h3=c=>s1(c)?p4(c):c,Q6=c=>s1(c)?l7(c):c;function t7(c){t2&&A1&&(c=W(c),c7(c.dep||(c.dep=W6())))}function m7(c,a){c=W(c);const e=c.dep;e&&u6(e)}function H1(c){return!!(c&&c.__v_isRef===!0)}function z7(c){return v7(c,!1)}function Wo(c){return v7(c,!0)}function v7(c,a){return H1(c)?c:new Zo(c,a)}class Zo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:W(a),this._value=e?a:h3(a)}get value(){return t7(this),this._value}set value(a){const e=this.__v_isShallow||r4(a)||U2(a);a=e?a:W(a),b2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:h3(a),m7(this))}}function q2(c){return H1(c)?c.value:c}const jo={get:(c,a,e)=>q2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return H1(i)&&!H1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function h7(c){return D2(c)?c:new Proxy(c,jo)}class Ko{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Z6(a,()=>{this._dirty||(this._dirty=!0,m7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=W(this);return t7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Yo(c,a,e=!1){let r,i;const s=U(c);return s?(r=c,i=F1):(r=c.get,i=c.set),new Ko(r,i,s||!i,e)}function m2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){M4(s,a,e)}return i}function B1(c,a,e,r){if(U(c)){const s=m2(c,a,e,r);return s&&j5(s)&&s.catch(n=>{M4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(B1(c[s],a,e,r));return i}function M4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,f=e;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}s=s.parent}const l=a.appContext.config.errorHandler;if(l){m2(l,null,10,[c,n,f]);return}}Xo(c,e,i,r)}function Xo(c,a,e,r=!0){console.error(c)}let H3=!1,V6=!1;const h1=[];let $1=0;const _2=[];let j1=null,M2=0;const H7=Promise.resolve();let J6=null;function u7(c){const a=J6||H7;return c?a.then(this?c.bind(this):c):a}function Qo(c){let a=$1+1,e=h1.length;for(;a<e;){const r=a+e>>>1,i=h1[r],s=u3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function c8(c){(!h1.length||!h1.includes(c,H3&&c.allowRecurse?$1+1:$1))&&(c.id==null?h1.push(c):h1.splice(Qo(c.id),0,c),V7())}function V7(){!H3&&!V6&&(V6=!0,J6=H7.then(M7))}function Jo(c){const a=h1.indexOf(c);a>$1&&h1.splice(a,1)}function ct(c){O(c)?_2.push(...c):(!j1||!j1.includes(c,c.allowRecurse?M2+1:M2))&&_2.push(c),V7()}function F0(c,a=H3?$1+1:0){for(;a<h1.length;a++){const e=h1[a];e&&e.pre&&(h1.splice(a,1),a--,e())}}function p7(c){if(_2.length){const a=[...new Set(_2)];if(_2.length=0,j1){j1.push(...a);return}for(j1=a,j1.sort((e,r)=>u3(e)-u3(r)),M2=0;M2<j1.length;M2++)j1[M2]();j1=null,M2=0}}const u3=c=>c.id==null?1/0:c.id,at=(c,a)=>{const e=u3(c)-u3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function M7(c){V6=!1,H3=!0,h1.sort(at);const a=F1;try{for($1=0;$1<h1.length;$1++){const e=h1[$1];e&&e.active!==!1&&m2(e,null,14)}}finally{$1=0,h1.length=0,p7(),H3=!1,J6=null,(h1.length||_2.length)&&M7()}}function et(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||e1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||e1;h&&(i=e.map(u=>z1(u)?u.trim():u)),z&&(i=e.map(Ho))}let f,l=r[f=X4(a)]||r[f=X4(G1(a))];!l&&s&&(l=r[f=X4(j2(a))]),l&&B1(l,c,6,i);const t=r[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,B1(t,c,6,i)}}function C7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},f=!1;if(!U(c)){const l=t=>{const o=C7(t,a,!0);o&&(f=!0,m1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!s&&!f?(s1(c)&&r.set(c,null),null):(O(s)?s.forEach(l=>n[l]=null):m1(n,s),s1(c)&&r.set(c,n),n)}function C4(c,a){return!c||!z4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,j2(a))||G(c,a))}let k1=null,d4=null;function i4(c){const a=k1;return k1=c,d4=c&&c.type.__scopeId||null,a}function d7(c){d4=c}function L7(){d4=null}function rt(c,a=k1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&G0(-1);const s=i4(a);let n;try{n=c(...i)}finally{i4(s),r._d&&G0(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function J4(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:S,inheritAttrs:w}=c;let R,M;const d=i4(c);try{if(e.shapeFlag&4){const y=i||r;R=U1(o.call(y,y,z,s,u,h,S)),M=l}else{const y=a;R=U1(y.length>1?y(s,{attrs:l,slots:f,emit:t}):y(s,null)),M=a.props?l:it(l)}}catch(y){o3.length=0,M4(y,c,1),R=p1(V3)}let B=R;if(M&&w!==!1){const y=Object.keys(M),{shapeFlag:$}=B;y.length&&$&7&&(n&&y.some(O6)&&(M=st(M,n)),B=$2(B,M))}return e.dirs&&(B=$2(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),R=B,i4(d),R}const it=c=>{let a;for(const e in c)(e==="class"||e==="style"||z4(e))&&((a||(a={}))[e]=c[e]);return a},st=(c,a)=>{const e={};for(const r in c)(!O6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function nt(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:f,patchFlag:l}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?B0(r,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!C4(t,h))return!0}}}else return(i||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?B0(r,n,t):!0:!!n;return!1}function B0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!C4(e,s))return!0}return!1}function ft({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const g7="components";function x7(c,a){return ot(g7,c,!0,a)||c}const lt=Symbol.for("v-ndc");function ot(c,a,e=!0,r=!1){const i=k1||t1;if(i){const s=i.type;if(c===g7){const f=em(s,!1);if(f&&(f===a||f===G1(a)||f===u4(G1(a))))return s}const n=R0(i[c]||s[c],a)||R0(i.appContext[c],a);return!n&&r?s:n}}function R0(c,a){return c&&(c[a]||c[G1(a)]||c[u4(G1(a))])}const tt=c=>c.__isSuspense;function mt(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):ct(c)}const _3={};function f3(c,a,e){return b7(c,a,e)}function b7(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=e1){var f;const l=bo()===((f=t1)==null?void 0:f.scope)?t1:null;let t,o=!1,z=!1;if(H1(c)?(t=()=>c.value,o=r4(c)):D2(c)?(t=()=>c,r=!0):O(c)?(z=!0,o=c.some(y=>D2(y)||r4(y)),t=()=>c.map(y=>{if(H1(y))return y.value;if(D2(y))return F2(y);if(U(y))return m2(y,l,2)})):U(c)?a?t=()=>m2(c,l,2):t=()=>{if(!(l&&l.isUnmounted))return h&&h(),B1(c,l,3,[u])}:t=F1,a&&r){const y=t;t=()=>F2(y())}let h,u=y=>{h=d.onStop=()=>{m2(y,l,4)}},S;if(M3)if(u=F1,a?e&&B1(a,l,3,[t(),z?[]:void 0,u]):t(),i==="sync"){const y=sm();S=y.__watcherHandles||(y.__watcherHandles=[])}else return F1;let w=z?new Array(c.length).fill(_3):_3;const R=()=>{if(d.active)if(a){const y=d.run();(r||o||(z?y.some(($,Q)=>b2($,w[Q])):b2(y,w)))&&(h&&h(),B1(a,l,3,[y,w===_3?void 0:z&&w[0]===_3?[]:w,u]),w=y)}else d.run()};R.allowRecurse=!!a;let M;i==="sync"?M=R:i==="post"?M=()=>d1(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),M=()=>c8(R));const d=new Z6(t,M);a?e?R():w=d.run():i==="post"?d1(d.run.bind(d),l&&l.suspense):d.run();const B=()=>{d.stop(),l&&l.scope&&U6(l.scope.effects,d)};return S&&S.push(B),B}function zt(c,a,e){const r=this.proxy,i=z1(c)?c.includes(".")?N7(r,c):()=>r[c]:c.bind(r,r);let s;U(a)?s=a:(s=a.handler,e=a);const n=t1;I2(this);const f=b7(i,s.bind(r),e);return n?I2(n):x2(),f}function N7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function F2(c,a){if(!s1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),H1(c))F2(c.value,a);else if(O(c))for(let e=0;e<c.length;e++)F2(c[e],a);else if(oo(c)||n3(c))c.forEach(e=>{F2(e,a)});else if(zo(c))for(const e in c)F2(c[e],a);return c}function V2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const f=i[n];s&&(f.oldValue=s[n].value);let l=f.dir[r];l&&(K2(),B1(l,e,8,[c.el,f,c,a]),Y2())}}/*! #__NO_SIDE_EFFECTS__ */function L4(c,a){return U(c)?(()=>m1({name:c.name},a,{setup:c}))():c}const X3=c=>!!c.type.__asyncLoader,S7=c=>c.type.__isKeepAlive;function vt(c,a){w7(c,"a",a)}function ht(c,a){w7(c,"da",a)}function w7(c,a,e=t1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(g4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)S7(i.parent.vnode)&&Ht(r,a,e,i),i=i.parent}}function Ht(c,a,e,r){const i=g4(a,c,r,!0);y7(()=>{U6(r[a],i)},e)}function g4(c,a,e=t1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;K2(),I2(e);const f=B1(a,e,c,n);return x2(),Y2(),f});return r?i.unshift(s):i.push(s),s}}const a2=c=>(a,e=t1)=>(!M3||c==="sp")&&g4(c,(...r)=>a(...r),e),ut=a2("bm"),Vt=a2("m"),pt=a2("bu"),Mt=a2("u"),Ct=a2("bum"),y7=a2("um"),dt=a2("sp"),Lt=a2("rtg"),gt=a2("rtc");function xt(c,a=t1){g4("ec",c,a)}const p6=c=>c?q7(c)?s8(c)||c.proxy:p6(c.parent):null,l3=m1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>p6(c.parent),$root:c=>p6(c.root),$emit:c=>c.emit,$options:c=>a8(c),$forceUpdate:c=>c.f||(c.f=()=>c8(c.update)),$nextTick:c=>c.n||(c.n=u7.bind(c.proxy)),$watch:c=>zt.bind(c)}),c6=(c,a)=>c!==e1&&!c.__isScriptSetup&&G(c,a),bt={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(c6(r,a))return n[a]=1,r[a];if(i!==e1&&G(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&G(t,a))return n[a]=3,s[a];if(e!==e1&&G(e,a))return n[a]=4,e[a];M6&&(n[a]=0)}}const o=l3[a];let z,h;if(o)return a==="$attrs"&&L1(c,"get",a),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==e1&&G(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,G(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return c6(i,a)?(i[a]=e,!0):r!==e1&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let f;return!!e[n]||c!==e1&&G(c,n)||c6(a,n)||(f=s[0])&&G(f,n)||G(r,n)||G(l3,n)||G(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function E0(c){return O(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let M6=!0;function Nt(c){const a=a8(c),e=c.proxy,r=c.ctx;M6=!1,a.beforeCreate&&D0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:S,activated:w,deactivated:R,beforeDestroy:M,beforeUnmount:d,destroyed:B,unmounted:y,render:$,renderTracked:Q,renderTriggered:r1,errorCaptured:g1,serverPrefetch:u1,expose:S1,inheritAttrs:r2,components:u2,directives:E1,filters:J2}=a;if(t&&St(t,r,null),n)for(const X in n){const Z=n[X];U(Z)&&(r[X]=Z.bind(e))}if(i){const X=i.call(e,e);s1(X)&&(c.data=p4(X))}if(M6=!0,s)for(const X in s){const Z=s[X],W1=U(Z)?Z.bind(e,e):U(Z.get)?Z.get.bind(e,e):F1,i2=!U(Z)&&U(Z.set)?Z.set.bind(e):F1,D1=o1({get:W1,set:i2});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>D1.value,set:M1=>D1.value=M1})}if(f)for(const X in f)A7(f[X],r,e,X);if(l){const X=U(l)?l.call(e):l;Reflect.ownKeys(X).forEach(Z=>{Q3(Z,X[Z])})}o&&D0(o,c,"c");function l1(X,Z){O(Z)?Z.forEach(W1=>X(W1.bind(e))):Z&&X(Z.bind(e))}if(l1(ut,z),l1(Vt,h),l1(pt,u),l1(Mt,S),l1(vt,w),l1(ht,R),l1(xt,g1),l1(gt,Q),l1(Lt,r1),l1(Ct,d),l1(y7,y),l1(dt,u1),O(S1))if(S1.length){const X=c.exposed||(c.exposed={});S1.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>e[Z],set:W1=>e[Z]=W1})})}else c.exposed||(c.exposed={});$&&c.render===F1&&(c.render=$),r2!=null&&(c.inheritAttrs=r2),u2&&(c.components=u2),E1&&(c.directives=E1)}function St(c,a,e=F1){O(c)&&(c=C6(c));for(const r in c){const i=c[r];let s;s1(i)?"default"in i?s=X1(i.from||r,i.default,!0):s=X1(i.from||r):s=X1(i),H1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function D0(c,a,e){B1(O(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function A7(c,a,e,r){const i=r.includes(".")?N7(e,r):()=>e[r];if(z1(c)){const s=a[c];U(s)&&f3(i,s)}else if(U(c))f3(i,c.bind(e));else if(s1(c))if(O(c))c.forEach(s=>A7(s,a,e,r));else{const s=U(c.handler)?c.handler.bind(e):a[c.handler];U(s)&&f3(i,s,c)}}function a8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,f=s.get(a);let l;return f?l=f:!i.length&&!e&&!r?l=a:(l={},i.length&&i.forEach(t=>s4(l,t,n,!0)),s4(l,a,n)),s1(a)&&s.set(a,l),l}function s4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&s4(c,s,e,!0),i&&i.forEach(n=>s4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=wt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const wt={data:q0,props:_0,emits:_0,methods:i3,computed:i3,beforeCreate:V1,created:V1,beforeMount:V1,mounted:V1,beforeUpdate:V1,updated:V1,beforeDestroy:V1,beforeUnmount:V1,destroyed:V1,unmounted:V1,activated:V1,deactivated:V1,errorCaptured:V1,serverPrefetch:V1,components:i3,directives:i3,watch:At,provide:q0,inject:yt};function q0(c,a){return a?c?function(){return m1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function yt(c,a){return i3(C6(c),C6(a))}function C6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function V1(c,a){return c?[...new Set([].concat(c,a))]:a}function i3(c,a){return c?m1(Object.create(null),c,a):a}function _0(c,a){return c?O(c)&&O(a)?[...new Set([...c,...a])]:m1(Object.create(null),E0(c),E0(a??{})):a}function At(c,a){if(!c)return a;if(!a)return c;const e=m1(Object.create(null),c);for(const r in a)e[r]=V1(c[r],a[r]);return e}function k7(){return{app:null,config:{isNativeTag:no,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kt=0;function Pt(c,a){return function(r,i=null){U(r)||(r=m1({},r)),i!=null&&!s1(i)&&(i=null);const s=k7(),n=new WeakSet;let f=!1;const l=s.app={_uid:kt++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:nm,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&U(t.install)?(n.add(t),t.install(l,...o)):U(t)&&(n.add(t),t(l,...o))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,o){return o?(s.components[t]=o,l):s.components[t]},directive(t,o){return o?(s.directives[t]=o,l):s.directives[t]},mount(t,o,z){if(!f){const h=p1(r,i);return h.appContext=s,o&&a?a(h,t):c(h,t,z),f=!0,l._container=t,t.__vue_app__=l,s8(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return s.provides[t]=o,l},runWithContext(t){n4=l;try{return t()}finally{n4=null}}};return l}}let n4=null;function Q3(c,a){if(t1){let e=t1.provides;const r=t1.parent&&t1.parent.provides;r===e&&(e=t1.provides=Object.create(r)),e[c]=a}}function X1(c,a,e=!1){const r=t1||k1;if(r||n4){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:n4._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&U(a)?a.call(r&&r.proxy):a}}function Tt(c,a,e,r=!1){const i={},s={};e4(s,S4,1),c.propsDefaults=Object.create(null),P7(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:f7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function Ft(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,f=W(i),[l]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(C4(c.emitsOptions,h))continue;const u=a[h];if(l)if(G(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const S=G1(h);i[S]=d6(l,f,S,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{P7(c,a,i,s)&&(t=!0);let o;for(const z in f)(!a||!G(a,z)&&((o=j2(z))===z||!G(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=d6(l,f,z,void 0,c,!0)):delete i[z]);if(s!==f)for(const z in s)(!a||!G(a,z))&&(delete s[z],t=!0)}t&&Y1(c,"set","$attrs")}function P7(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(Y3(l))continue;const t=a[l];let o;i&&G(i,o=G1(l))?!s||!s.includes(o)?e[o]=t:(f||(f={}))[o]=t:C4(c.emitsOptions,l)||(!(l in r)||t!==r[l])&&(r[l]=t,n=!0)}if(s){const l=W(e),t=f||e1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=d6(i,l,z,t[z],c,!G(t,z))}}return n}function d6(c,a,e,r,i,s){const n=c[e];if(n!=null){const f=G(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&U(l)){const{propsDefaults:t}=i;e in t?r=t[e]:(I2(i),r=t[e]=l.call(null,a),x2())}else r=l}n[0]&&(s&&!f?r=!1:n[1]&&(r===""||r===j2(e))&&(r=!0))}return r}function T7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},f=[];let l=!1;if(!U(c)){const o=z=>{l=!0;const[h,u]=T7(z,a,!0);m1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!l)return s1(c)&&r.set(c,E2),E2;if(O(s))for(let o=0;o<s.length;o++){const z=G1(s[o]);O0(z)&&(n[z]=e1)}else if(s)for(const o in s){const z=G1(o);if(O0(z)){const h=s[o],u=n[z]=O(h)||U(h)?{type:h}:m1({},h);if(u){const S=I0(Boolean,u.type),w=I0(String,u.type);u[0]=S>-1,u[1]=w<0||S<w,(S>-1||G(u,"default"))&&f.push(z)}}}const t=[n,f];return s1(c)&&r.set(c,t),t}function O0(c){return c[0]!=="$"}function U0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function $0(c,a){return U0(c)===U0(a)}function I0(c,a){return O(a)?a.findIndex(e=>$0(e,c)):U(a)&&$0(a,c)?0:-1}const F7=c=>c[0]==="_"||c==="$stable",e8=c=>O(c)?c.map(U1):[U1(c)],Bt=(c,a,e)=>{if(a._n)return a;const r=rt((...i)=>e8(a(...i)),e);return r._c=!1,r},B7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(F7(i))continue;const s=c[i];if(U(s))a[i]=Bt(i,s,r);else if(s!=null){const n=e8(s);a[i]=()=>n}}},R7=(c,a)=>{const e=e8(a);c.slots.default=()=>e},Rt=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=W(a),e4(a,"_",e)):B7(a,c.slots={})}else c.slots={},a&&R7(c,a);e4(c.slots,S4,1)},Et=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=e1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?s=!1:(m1(i,a),!e&&f===1&&delete i._):(s=!a.$stable,B7(a,i)),n=a}else a&&(R7(c,a),n={default:1});if(s)for(const f in i)!F7(f)&&n[f]==null&&delete i[f]};function L6(c,a,e,r,i=!1){if(O(c)){c.forEach((h,u)=>L6(h,a&&(O(a)?a[u]:a),e,r,i));return}if(X3(r)&&!i)return;const s=r.shapeFlag&4?s8(r.component)||r.component.proxy:r.el,n=i?null:s,{i:f,r:l}=c,t=a&&a.r,o=f.refs===e1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(z1(t)?(o[t]=null,G(z,t)&&(z[t]=null)):H1(t)&&(t.value=null)),U(l))m2(l,f,12,[n,o]);else{const h=z1(l),u=H1(l);if(h||u){const S=()=>{if(c.f){const w=h?G(z,l)?z[l]:o[l]:l.value;i?O(w)&&U6(w,s):O(w)?w.includes(s)||w.push(s):h?(o[l]=[s],G(z,l)&&(z[l]=o[l])):(l.value=[s],c.k&&(o[c.k]=l.value))}else h?(o[l]=n,G(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(o[c.k]=n))};n?(S.id=-1,d1(S,e)):S()}}}const d1=mt;function Dt(c){return qt(c)}function qt(c,a){const e=z6();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=F1,insertStaticContent:S}=c,w=(m,v,H,V=null,C=null,L=null,A=!1,x=null,b=!!v.dynamicChildren)=>{if(m===v)return;m&&!a3(m,v)&&(V=p(m),M1(m,C,L,!0),m=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:g,ref:D,shapeFlag:T}=v;switch(g){case x4:R(m,v,H,V);break;case V3:M(m,v,H,V);break;case a6:m==null&&d(v,H,V,A);break;case O1:u2(m,v,H,V,C,L,A,x,b);break;default:T&1?$(m,v,H,V,C,L,A,x,b):T&6?E1(m,v,H,V,C,L,A,x,b):(T&64||T&128)&&g.process(m,v,H,V,C,L,A,x,b,N)}D!=null&&C&&L6(D,m&&m.ref,L,v||m,!v)},R=(m,v,H,V)=>{if(m==null)r(v.el=f(v.children),H,V);else{const C=v.el=m.el;v.children!==m.children&&t(C,v.children)}},M=(m,v,H,V)=>{m==null?r(v.el=l(v.children||""),H,V):v.el=m.el},d=(m,v,H,V)=>{[m.el,m.anchor]=S(m.children,v,H,V,m.el,m.anchor)},B=({el:m,anchor:v},H,V)=>{let C;for(;m&&m!==v;)C=h(m),r(m,H,V),m=C;r(v,H,V)},y=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},$=(m,v,H,V,C,L,A,x,b)=>{A=A||v.type==="svg",m==null?Q(v,H,V,C,L,A,x,b):u1(m,v,C,L,A,x,b)},Q=(m,v,H,V,C,L,A,x)=>{let b,g;const{type:D,props:T,shapeFlag:q,transition:_,dirs:I}=m;if(b=m.el=n(m.type,L,T&&T.is,T),q&8?o(b,m.children):q&16&&g1(m.children,b,null,V,C,L&&D!=="foreignObject",A,x),I&&V2(m,null,V,"created"),r1(b,m,m.scopeId,A,V),T){for(const Y in T)Y!=="value"&&!Y3(Y)&&s(b,Y,null,T[Y],L,m.children,V,C,v1);"value"in T&&s(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&_1(g,V,m)}I&&V2(m,null,V,"beforeMount");const J=_t(C,_);J&&_.beforeEnter(b),r(b,v,H),((g=T&&T.onVnodeMounted)||J||I)&&d1(()=>{g&&_1(g,V,m),J&&_.enter(b),I&&V2(m,null,V,"mounted")},C)},r1=(m,v,H,V,C)=>{if(H&&u(m,H),V)for(let L=0;L<V.length;L++)u(m,V[L]);if(C){let L=C.subTree;if(v===L){const A=C.vnode;r1(m,A,A.scopeId,A.slotScopeIds,C.parent)}}},g1=(m,v,H,V,C,L,A,x,b=0)=>{for(let g=b;g<m.length;g++){const D=m[g]=x?l2(m[g]):U1(m[g]);w(null,D,v,H,V,C,L,A,x)}},u1=(m,v,H,V,C,L,A)=>{const x=v.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:D}=v;b|=m.patchFlag&16;const T=m.props||e1,q=v.props||e1;let _;H&&p2(H,!1),(_=q.onVnodeBeforeUpdate)&&_1(_,H,v,m),D&&V2(v,m,H,"beforeUpdate"),H&&p2(H,!0);const I=C&&v.type!=="foreignObject";if(g?S1(m.dynamicChildren,g,x,H,V,I,L):A||Z(m,v,x,null,H,V,I,L,!1),b>0){if(b&16)r2(x,v,T,q,H,V,C);else if(b&2&&T.class!==q.class&&s(x,"class",null,q.class,C),b&4&&s(x,"style",T.style,q.style,C),b&8){const J=v.dynamicProps;for(let Y=0;Y<J.length;Y++){const n1=J[Y],w1=T[n1],k2=q[n1];(k2!==w1||n1==="value")&&s(x,n1,w1,k2,C,m.children,H,V,v1)}}b&1&&m.children!==v.children&&o(x,v.children)}else!A&&g==null&&r2(x,v,T,q,H,V,C);((_=q.onVnodeUpdated)||D)&&d1(()=>{_&&_1(_,H,v,m),D&&V2(v,m,H,"updated")},V)},S1=(m,v,H,V,C,L,A)=>{for(let x=0;x<v.length;x++){const b=m[x],g=v[x],D=b.el&&(b.type===O1||!a3(b,g)||b.shapeFlag&70)?z(b.el):H;w(b,g,D,null,V,C,L,A,!0)}},r2=(m,v,H,V,C,L,A)=>{if(H!==V){if(H!==e1)for(const x in H)!Y3(x)&&!(x in V)&&s(m,x,H[x],null,A,v.children,C,L,v1);for(const x in V){if(Y3(x))continue;const b=V[x],g=H[x];b!==g&&x!=="value"&&s(m,x,g,b,A,v.children,C,L,v1)}"value"in V&&s(m,"value",H.value,V.value)}},u2=(m,v,H,V,C,L,A,x,b)=>{const g=v.el=m?m.el:f(""),D=v.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:q,slotScopeIds:_}=v;_&&(x=x?x.concat(_):_),m==null?(r(g,H,V),r(D,H,V),g1(v.children,H,D,C,L,A,x,b)):T>0&&T&64&&q&&m.dynamicChildren?(S1(m.dynamicChildren,q,H,C,L,A,x),(v.key!=null||C&&v===C.subTree)&&E7(m,v,!0)):Z(m,v,H,D,C,L,A,x,b)},E1=(m,v,H,V,C,L,A,x,b)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?C.ctx.activate(v,H,V,A,b):J2(v,H,V,C,L,A,b):w2(m,v,b)},J2=(m,v,H,V,C,L,A)=>{const x=m.component=Xt(m,V,C);if(S7(m)&&(x.ctx.renderer=N),Qt(x),x.asyncDep){if(C&&C.registerDep(x,l1),!m.el){const b=x.subTree=p1(V3);M(null,b,v,H)}return}l1(x,m,v,H,C,L,A)},w2=(m,v,H)=>{const V=v.component=m.component;if(nt(m,v,H))if(V.asyncDep&&!V.asyncResolved){X(V,v,H);return}else V.next=v,Jo(V.update),V.update();else v.el=m.el,V.vnode=v},l1=(m,v,H,V,C,L,A)=>{const x=()=>{if(m.isMounted){let{next:D,bu:T,u:q,parent:_,vnode:I}=m,J=D,Y;p2(m,!1),D?(D.el=I.el,X(m,D,A)):D=I,T&&Q4(T),(Y=D.props&&D.props.onVnodeBeforeUpdate)&&_1(Y,_,D,I),p2(m,!0);const n1=J4(m),w1=m.subTree;m.subTree=n1,w(w1,n1,z(w1.el),p(w1),m,C,L),D.el=n1.el,J===null&&ft(m,n1.el),q&&d1(q,C),(Y=D.props&&D.props.onVnodeUpdated)&&d1(()=>_1(Y,_,D,I),C)}else{let D;const{el:T,props:q}=v,{bm:_,m:I,parent:J}=m,Y=X3(v);if(p2(m,!1),_&&Q4(_),!Y&&(D=q&&q.onVnodeBeforeMount)&&_1(D,J,v),p2(m,!0),T&&j){const n1=()=>{m.subTree=J4(m),j(T,m.subTree,m,C,null)};Y?v.type.__asyncLoader().then(()=>!m.isUnmounted&&n1()):n1()}else{const n1=m.subTree=J4(m);w(null,n1,H,V,m,C,L),v.el=n1.el}if(I&&d1(I,C),!Y&&(D=q&&q.onVnodeMounted)){const n1=v;d1(()=>_1(D,J,n1),C)}(v.shapeFlag&256||J&&X3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&d1(m.a,C),m.isMounted=!0,v=H=V=null}},b=m.effect=new Z6(x,()=>c8(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,p2(m,!0),g()},X=(m,v,H)=>{v.component=m;const V=m.vnode.props;m.vnode=v,m.next=null,Ft(m,v.props,V,H),Et(m,v.children,H),K2(),F0(),Y2()},Z=(m,v,H,V,C,L,A,x,b=!1)=>{const g=m&&m.children,D=m?m.shapeFlag:0,T=v.children,{patchFlag:q,shapeFlag:_}=v;if(q>0){if(q&128){i2(g,T,H,V,C,L,A,x,b);return}else if(q&256){W1(g,T,H,V,C,L,A,x,b);return}}_&8?(D&16&&v1(g,C,L),T!==g&&o(H,T)):D&16?_&16?i2(g,T,H,V,C,L,A,x,b):v1(g,C,L,!0):(D&8&&o(H,""),_&16&&g1(T,H,V,C,L,A,x,b))},W1=(m,v,H,V,C,L,A,x,b)=>{m=m||E2,v=v||E2;const g=m.length,D=v.length,T=Math.min(g,D);let q;for(q=0;q<T;q++){const _=v[q]=b?l2(v[q]):U1(v[q]);w(m[q],_,H,null,C,L,A,x,b)}g>D?v1(m,C,L,!0,!1,T):g1(v,H,V,C,L,A,x,b,T)},i2=(m,v,H,V,C,L,A,x,b)=>{let g=0;const D=v.length;let T=m.length-1,q=D-1;for(;g<=T&&g<=q;){const _=m[g],I=v[g]=b?l2(v[g]):U1(v[g]);if(a3(_,I))w(_,I,H,null,C,L,A,x,b);else break;g++}for(;g<=T&&g<=q;){const _=m[T],I=v[q]=b?l2(v[q]):U1(v[q]);if(a3(_,I))w(_,I,H,null,C,L,A,x,b);else break;T--,q--}if(g>T){if(g<=q){const _=q+1,I=_<D?v[_].el:V;for(;g<=q;)w(null,v[g]=b?l2(v[g]):U1(v[g]),H,I,C,L,A,x,b),g++}}else if(g>q)for(;g<=T;)M1(m[g],C,L,!0),g++;else{const _=g,I=g,J=new Map;for(g=I;g<=q;g++){const x1=v[g]=b?l2(v[g]):U1(v[g]);x1.key!=null&&J.set(x1.key,g)}let Y,n1=0;const w1=q-I+1;let k2=!1,g0=0;const c3=new Array(w1);for(g=0;g<w1;g++)c3[g]=0;for(g=_;g<=T;g++){const x1=m[g];if(n1>=w1){M1(x1,C,L,!0);continue}let q1;if(x1.key!=null)q1=J.get(x1.key);else for(Y=I;Y<=q;Y++)if(c3[Y-I]===0&&a3(x1,v[Y])){q1=Y;break}q1===void 0?M1(x1,C,L,!0):(c3[q1-I]=g+1,q1>=g0?g0=q1:k2=!0,w(x1,v[q1],H,null,C,L,A,x,b),n1++)}const x0=k2?Ot(c3):E2;for(Y=x0.length-1,g=w1-1;g>=0;g--){const x1=I+g,q1=v[x1],b0=x1+1<D?v[x1+1].el:V;c3[g]===0?w(null,q1,H,b0,C,L,A,x,b):k2&&(Y<0||g!==x0[Y]?D1(q1,H,b0,2):Y--)}}},D1=(m,v,H,V,C=null)=>{const{el:L,type:A,transition:x,children:b,shapeFlag:g}=m;if(g&6){D1(m.component.subTree,v,H,V);return}if(g&128){m.suspense.move(v,H,V);return}if(g&64){A.move(m,v,H,N);return}if(A===O1){r(L,v,H);for(let T=0;T<b.length;T++)D1(b[T],v,H,V);r(m.anchor,v,H);return}if(A===a6){B(m,v,H);return}if(V!==2&&g&1&&x)if(V===0)x.beforeEnter(L),r(L,v,H),d1(()=>x.enter(L),C);else{const{leave:T,delayLeave:q,afterLeave:_}=x,I=()=>r(L,v,H),J=()=>{T(L,()=>{I(),_&&_()})};q?q(L,I,J):J()}else r(L,v,H)},M1=(m,v,H,V=!1,C=!1)=>{const{type:L,props:A,ref:x,children:b,dynamicChildren:g,shapeFlag:D,patchFlag:T,dirs:q}=m;if(x!=null&&L6(x,null,H,m,!0),D&256){v.ctx.deactivate(m);return}const _=D&1&&q,I=!X3(m);let J;if(I&&(J=A&&A.onVnodeBeforeUnmount)&&_1(J,v,m),D&6)F3(m.component,H,V);else{if(D&128){m.suspense.unmount(H,V);return}_&&V2(m,null,v,"beforeUnmount"),D&64?m.type.remove(m,v,H,C,N,V):g&&(L!==O1||T>0&&T&64)?v1(g,v,H,!1,!0):(L===O1&&T&384||!C&&D&16)&&v1(b,v,H),V&&y2(m)}(I&&(J=A&&A.onVnodeUnmounted)||_)&&d1(()=>{J&&_1(J,v,m),_&&V2(m,null,v,"unmounted")},H)},y2=m=>{const{type:v,el:H,anchor:V,transition:C}=m;if(v===O1){A2(H,V);return}if(v===a6){y(m);return}const L=()=>{i(H),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:x}=C,b=()=>A(H,L);x?x(m.el,L,b):b()}else L()},A2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},F3=(m,v,H)=>{const{bum:V,scope:C,update:L,subTree:A,um:x}=m;V&&Q4(V),C.stop(),L&&(L.active=!1,M1(A,m,v,H)),x&&d1(x,v),d1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},v1=(m,v,H,V=!1,C=!1,L=0)=>{for(let A=L;A<m.length;A++)M1(m[A],v,H,V,C)},p=m=>m.shapeFlag&6?p(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,v,H)=>{m==null?v._vnode&&M1(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,H),F0(),p7(),v._vnode=m},N={p:w,um:M1,m:D1,r:y2,mt:J2,mc:g1,pc:Z,pbc:S1,n:p,o:c};let E,j;return a&&([E,j]=a(N)),{render:P,hydrate:E,createApp:Pt(P,E)}}function p2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function _t(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function E7(c,a,e=!1){const r=c.children,i=a.children;if(O(r)&&O(i))for(let s=0;s<r.length;s++){const n=r[s];let f=i[s];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=i[s]=l2(i[s]),f.el=n.el),e||E7(n,f)),f.type===x4&&(f.el=n.el)}}function Ot(c){const a=c.slice(),e=[0];let r,i,s,n,f;const l=c.length;for(r=0;r<l;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)f=s+n>>1,c[e[f]]<t?s=f+1:n=f;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const Ut=c=>c.__isTeleport,O1=Symbol.for("v-fgt"),x4=Symbol.for("v-txt"),V3=Symbol.for("v-cmt"),a6=Symbol.for("v-stc"),o3=[];let P1=null;function b4(c=!1){o3.push(P1=c?null:[])}function $t(){o3.pop(),P1=o3[o3.length-1]||null}let p3=1;function G0(c){p3+=c}function It(c){return c.dynamicChildren=p3>0?P1||E2:null,$t(),p3>0&&P1&&P1.push(c),c}function N4(c,a,e,r,i,s){return It(b1(c,a,e,r,i,s,!0))}function g6(c){return c?c.__v_isVNode===!0:!1}function a3(c,a){return c.type===a.type&&c.key===a.key}const S4="__vInternal",D7=({key:c})=>c??null,J3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z1(c)||H1(c)||U(c)?{i:k1,r:c,k:a,f:!!e}:c:null);function b1(c,a=null,e=null,r=0,i=null,s=c===O1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&D7(a),ref:a&&J3(a),scopeId:d4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:k1};return f?(r8(l,e),s&128&&c.normalize(l)):e&&(l.shapeFlag|=z1(e)?8:16),p3>0&&!n&&P1&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&P1.push(l),l}const p1=Gt;function Gt(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===lt)&&(c=V3),g6(c)){const f=$2(c,a,!0);return e&&r8(f,e),p3>0&&!s&&P1&&(f.shapeFlag&6?P1[P1.indexOf(c)]=f:P1.push(f)),f.patchFlag|=-2,f}if(rm(c)&&(c=c.__vccOpts),a){a=Wt(a);let{class:f,style:l}=a;f&&!z1(f)&&(a.class=G6(f)),s1(l)&&(o7(l)&&!O(l)&&(l=m1({},l)),a.style=I6(l))}const n=z1(c)?1:tt(c)?128:Ut(c)?64:s1(c)?4:U(c)?2:0;return b1(c,a,e,r,i,n,s,!0)}function Wt(c){return c?o7(c)||S4 in c?m1({},c):c:null}function $2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,f=a?jt(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&D7(f),ref:a&&a.ref?e&&i?O(i)?i.concat(J3(a)):[i,J3(a)]:J3(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==O1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&$2(c.ssContent),ssFallback:c.ssFallback&&$2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Zt(c=" ",a=0){return p1(x4,null,c,a)}function U1(c){return c==null||typeof c=="boolean"?p1(V3):O(c)?p1(O1,null,c.slice()):typeof c=="object"?l2(c):p1(x4,null,String(c))}function l2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:$2(c)}function r8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),r8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(S4 in a)?a._ctx=k1:i===3&&k1&&(k1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:k1},e=32):(a=String(a),r&64?(e=16,a=[Zt(a)]):e=8);c.children=a,c.shapeFlag|=e}function jt(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=G6([a.class,r.class]));else if(i==="style")a.style=I6([a.style,r.style]);else if(z4(i)){const s=a[i],n=r[i];n&&s!==n&&!(O(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function _1(c,a,e,r=null){B1(c,a,7,[e,r])}const Kt=k7();let Yt=0;function Xt(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||Kt,s={uid:Yt++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Y5(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T7(r,i),emitsOptions:C7(r,i),emit:null,emitted:null,propsDefaults:e1,inheritAttrs:r.inheritAttrs,ctx:e1,data:e1,props:e1,attrs:e1,slots:e1,refs:e1,setupState:e1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=et.bind(null,s),c.ce&&c.ce(s),s}let t1=null,i8,P2,W0="__VUE_INSTANCE_SETTERS__";(P2=z6()[W0])||(P2=z6()[W0]=[]),P2.push(c=>t1=c),i8=c=>{P2.length>1?P2.forEach(a=>a(c)):P2[0](c)};const I2=c=>{i8(c),c.scope.on()},x2=()=>{t1&&t1.scope.off(),i8(null)};function q7(c){return c.vnode.shapeFlag&4}let M3=!1;function Qt(c,a=!1){M3=a;const{props:e,children:r}=c.vnode,i=q7(c);Tt(c,e,i,a),Rt(c,r);const s=i?Jt(c,a):void 0;return M3=!1,s}function Jt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=X6(new Proxy(c.ctx,bt));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?am(c):null;I2(c),K2();const s=m2(r,c,0,[c.props,i]);if(Y2(),x2(),j5(s)){if(s.then(x2,x2),a)return s.then(n=>{Z0(c,n,a)}).catch(n=>{M4(n,c,0)});c.asyncDep=s}else Z0(c,s,a)}else _7(c,a)}function Z0(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:s1(a)&&(c.setupState=h7(a)),_7(c,e)}let j0;function _7(c,a,e){const r=c.type;if(!c.render){if(!a&&j0&&!r.render){const i=r.template||a8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,t=m1(m1({isCustomElement:s,delimiters:f},n),l);r.render=j0(i,t)}}c.render=r.render||F1}{I2(c),K2();try{Nt(c)}finally{Y2(),x2()}}}function cm(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return L1(c,"get","$attrs"),a[e]}}))}function am(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return cm(c)},slots:c.slots,emit:c.emit,expose:a}}function s8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(h7(X6(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in l3)return l3[e](c)},has(a,e){return e in a||e in l3}}))}function em(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function rm(c){return U(c)&&"__vccOpts"in c}const o1=(c,a)=>Yo(c,a,M3);function n8(c,a,e){const r=arguments.length;return r===2?s1(a)&&!O(a)?g6(a)?p1(c,null,[a]):p1(c,a):p1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&g6(e)&&(e=[e]),p1(c,a,e))}const im=Symbol.for("v-scx"),sm=()=>X1(im),nm="3.3.8",fm="http://www.w3.org/2000/svg",C2=typeof document<"u"?document:null,K0=C2&&C2.createElement("template"),lm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?C2.createElementNS(fm,c):C2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>C2.createTextNode(c),createComment:c=>C2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>C2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{K0.innerHTML=r?`<svg>${c}</svg>`:c;const f=K0.content;if(r){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},om=Symbol("_vtc");function tm(c,a,e){const r=c[om];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const mm=Symbol("_vod");function zm(c,a,e){const r=c.style,i=z1(e);if(e&&!i){if(a&&!z1(a))for(const s in a)e[s]==null&&x6(r,s,"");for(const s in e)x6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),mm in c&&(r.display=s)}}const Y0=/\s*!important$/;function x6(c,a,e){if(O(e))e.forEach(r=>x6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=vm(c,a);Y0.test(e)?c.setProperty(j2(r),e.replace(Y0,""),"important"):c[r]=e}}const X0=["Webkit","Moz","ms"],e6={};function vm(c,a){const e=e6[a];if(e)return e;let r=G1(a);if(r!=="filter"&&r in c)return e6[a]=r;r=u4(r);for(let i=0;i<X0.length;i++){const s=X0[i]+r;if(s in c)return e6[a]=s}return a}const Q0="http://www.w3.org/1999/xlink";function hm(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(Q0,a.slice(6,a.length)):c.setAttributeNS(Q0,a,e);else{const s=Lo(a);e==null||s&&!K5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Hm(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){c._value=e;const t=f==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=K5(e):e==null&&t==="string"?(e="",l=!0):t==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function um(c,a,e,r){c.addEventListener(a,e,r)}function Vm(c,a,e,r){c.removeEventListener(a,e,r)}const J0=Symbol("_vei");function pm(c,a,e,r,i=null){const s=c[J0]||(c[J0]={}),n=s[a];if(r&&n)n.value=r;else{const[f,l]=Mm(a);if(r){const t=s[a]=Lm(r,i);um(c,f,t,l)}else n&&(Vm(c,f,n,l),s[a]=void 0)}}const c5=/(?:Once|Passive|Capture)$/;function Mm(c){let a;if(c5.test(c)){a={};let r;for(;r=c.match(c5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):j2(c.slice(2)),a]}let r6=0;const Cm=Promise.resolve(),dm=()=>r6||(Cm.then(()=>r6=0),r6=Date.now());function Lm(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B1(gm(r,e.value),a,5,[r])};return e.value=c,e.attached=dm(),e}function gm(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const a5=/^on[a-z]/,xm=(c,a,e,r,i=!1,s,n,f,l)=>{a==="class"?tm(c,r,i):a==="style"?zm(c,e,r):z4(a)?O6(a)||pm(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):bm(c,a,r,i))?Hm(c,a,r,s,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),hm(c,a,r,i))};function bm(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&a5.test(a)&&U(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||a5.test(a)&&z1(e)?!1:a in c}const Nm=m1({patchProp:xm},lm);let e5;function Sm(){return e5||(e5=Dt(Nm))}const wm=(...c)=>{const a=Sm().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=ym(r);if(!i)return;const s=a._component;!U(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function ym(c){return z1(c)?document.querySelector(c):c}var Am=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const km=Symbol();var r5;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(r5||(r5={}));function Pm(){const c=go(!0),a=c.run(()=>z7({}));let e=[],r=[];const i=X6({install(s){i._a=s,s.provide(km,i),s.config.globalProperties.$pinia=i,r.forEach(n=>e.push(n)),r=[]},use(s){return!this._a&&!Am?r.push(s):e.push(s),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return i}const O7="/assets/logo-b46a5370.png";const f8=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},Tm={},X2=c=>(d7("data-v-edad9aa1"),c=c(),L7(),c),Fm={class:"footer"},Bm=X2(()=>b1("img",{src:O7,alt:"Logo"},null,-1)),Rm=X2(()=>b1("span",null,"© 2023 puzzlenatalerzu.pl",-1)),Em=X2(()=>b1("span",null,"Wszystkie prawa zastrzeżone",-1)),Dm=X2(()=>b1("span",null,"Kopiowanie i rozpowszechnianie bez zgody puzzlenatalerzu.pl zabronione",-1)),qm=X2(()=>b1("br",null,null,-1)),_m=X2(()=>b1("a",null,"Strona główna",-1)),Om=[Bm,Rm,Em,Dm,qm,_m];function Um(c,a){return b4(),N4("footer",Fm,Om)}const $m=f8(Tm,[["render",Um],["__scopeId","data-v-edad9aa1"]]);const Im={},l8=c=>(d7("data-v-14616ef9"),c=c(),L7(),c),Gm={class:"header"},Wm=l8(()=>b1("img",{src:O7,class:"logo",alt:"Logo"},null,-1)),Zm=l8(()=>b1("span",{class:"name"},"Puzzle na talerzu",-1)),jm=l8(()=>b1("input",{type:"search",placeholder:"np. kurczak curry",class:"search"},null,-1)),Km={class:"toggle","aria-label":"Show/Hide menu"};function Ym(c,a){const e=x7("font-awesome-icon");return b4(),N4("header",Gm,[Wm,Zm,jm,b1("button",Km,[p1(e,{icon:["fas","bars"]})])])}const Xm=f8(Im,[["render",Ym],["__scopeId","data-v-14616ef9"]]),Qm=b1("main",null," Wkrótce ",-1),Jm=L4({__name:"App",setup(c){return(a,e)=>(b4(),N4(O1,null,[p1(Xm),Qm,p1($m)],64))}}),cz="modulepreload",az=function(c){return"/"+c},i5={},ez=function(a,e,r){if(!e||e.length===0)return a();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=az(s),s in i5)return;i5[s]=!0;const n=s.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!r)for(let o=i.length-1;o>=0;o--){const z=i[o];if(z.href===s&&(!n||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":cz,n||(t.as="script",t.crossOrigin=""),t.href=s,document.head.appendChild(t),n)return new Promise((o,z)=>{t.addEventListener("load",o),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>a()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const T2=typeof window<"u";function rz(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function i6(c,a){const e={};for(const r in a){const i=a[r];e[r]=R1(i)?i.map(c):c(i)}return e}const t3=()=>{},R1=Array.isArray,iz=/\/$/,sz=c=>c.replace(iz,"");function s6(c,a,e="/"){let r,i={},s="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(r=a.slice(0,l),s=a.slice(l+1,f>-1?f:a.length),i=c(s)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=oz(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:n}}function nz(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function s5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function fz(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&G2(a.matched[r],e.matched[i])&&U7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function G2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function U7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!lz(c[e],a[e]))return!1;return!0}function lz(c,a){return R1(c)?n5(c,a):R1(a)?n5(a,c):c===a}function n5(c,a){return R1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function oz(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var C3;(function(c){c.pop="pop",c.push="push"})(C3||(C3={}));var m3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(m3||(m3={}));function tz(c){if(!c)if(T2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),sz(c)}const mz=/^[^#]+#/;function zz(c,a){return c.replace(mz,"#")+a}function vz(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const w4=()=>({left:window.pageXOffset,top:window.pageYOffset});function hz(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=vz(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function f5(c,a){return(history.state?history.state.position-a:-1)+c}const b6=new Map;function Hz(c,a){b6.set(c,a)}function uz(c){const a=b6.get(c);return b6.delete(c),a}let Vz=()=>location.protocol+"//"+location.host;function $7(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let f=i.includes(c.slice(s))?c.slice(s).length:1,l=i.slice(f);return l[0]!=="/"&&(l="/"+l),s5(l,"")}return s5(e,c)+r+i}function pz(c,a,e,r){let i=[],s=[],n=null;const f=({state:h})=>{const u=$7(c,location),S=e.value,w=a.value;let R=0;if(h){if(e.value=u,a.value=h,n&&n===S){n=null;return}R=w?h.position-w.position:0}else r(u);i.forEach(M=>{M(e.value,S,{delta:R,type:C3.pop,direction:R?R>0?m3.forward:m3.back:m3.unknown})})};function l(){n=e.value}function t(h){i.push(h);const u=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:w4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:l,listen:t,destroy:z}}function l5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?w4():null}}function Mz(c){const{history:a,location:e}=window,r={value:$7(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(l,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:Vz()+c+l;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(l,t){const o=K({},a.state,l5(i.value.back,l,i.value.forward,!0),t,{position:i.value.position});s(l,o,!0),r.value=l}function f(l,t){const o=K({},i.value,a.state,{forward:l,scroll:w4()});s(o.current,o,!0);const z=K({},l5(r.value,l,null),{position:o.position+1},t);s(l,z,!1),r.value=l}return{location:r,state:i,push:f,replace:n}}function Cz(c){c=tz(c);const a=Mz(c),e=pz(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=K({location:"",base:c,go:r,createHref:zz.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function dz(c){return typeof c=="string"||c&&typeof c=="object"}function I7(c){return typeof c=="string"||typeof c=="symbol"}const n2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G7=Symbol("");var o5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(o5||(o5={}));function W2(c,a){return K(new Error,{type:c,[G7]:!0},a)}function Z1(c,a){return c instanceof Error&&G7 in c&&(a==null||!!(c.type&a))}const t5="[^/]+?",Lz={sensitive:!1,strict:!1,start:!0,end:!0},gz=/[.+*?^${}()[\]/\\]/g;function xz(c,a){const e=K({},Lz,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(gz,"\\$&"),u+=40;else if(h.type===1){const{value:S,repeatable:w,optional:R,regexp:M}=h;s.push({name:S,repeatable:w,optional:R});const d=M||t5;if(d!==t5){u+=10;try{new RegExp(`(${d})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${d}): `+y.message)}}let B=w?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(B=R&&t.length<2?`(?:/${B})`:"/"+B),R&&(B+="?"),i+=B,u+=20,R&&(u+=-8),w&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",S=s[h-1];z[S.name]=u&&S.repeatable?u.split("/"):u}return z}function l(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:S,repeatable:w,optional:R}=u,M=S in t?t[S]:"";if(R1(M)&&!w)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const d=R1(M)?M.join("/"):M;if(!d)if(R)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${S}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:f,stringify:l}}function bz(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Nz(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=bz(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(m5(r))return 1;if(m5(i))return-1}return i.length-r.length}function m5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Sz={type:0,value:""},wz=/[a-zA-Z0-9_]/;function yz(c){if(!c)return[[]];if(c==="/")return[[Sz]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let f=0,l,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:l==="("?e=2:wz.test(l)?h():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function Az(c,a,e){const r=xz(yz(c.path),e),i=K(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function kz(c,a){const e=[],r=new Map;a=h5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,S=Pz(o);S.aliasOf=h&&h.record;const w=h5(a,o),R=[S];if("alias"in o){const B=typeof o.alias=="string"?[o.alias]:o.alias;for(const y of B)R.push(K({},S,{components:h?h.record.components:S.components,path:y,aliasOf:h?h.record:S}))}let M,d;for(const B of R){const{path:y}=B;if(z&&y[0]!=="/"){const $=z.record.path,Q=$[$.length-1]==="/"?"":"/";B.path=z.record.path+(y&&Q+y)}if(M=Az(B,z,w),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!v5(M)&&n(o.name)),S.children){const $=S.children;for(let Q=0;Q<$.length;Q++)s($[Q],M,h&&h.children[Q])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&l(M)}return d?()=>{n(d)}:t3}function n(o){if(I7(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&Nz(o,e[z])>=0&&(o.record.path!==e[z].record.path||!W7(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!v5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},S,w;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw W2(1,{location:o});w=h.record.name,u=K(z5(z.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&z5(o.params,h.keys.map(d=>d.name))),S=h.stringify(u)}else if("path"in o)S=o.path,h=e.find(d=>d.re.test(S)),h&&(u=h.parse(S),w=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw W2(1,{location:o,currentLocation:z});w=h.record.name,u=K({},z.params,o.params),S=h.stringify(u)}const R=[];let M=h;for(;M;)R.unshift(M.record),M=M.parent;return{name:w,path:S,params:u,matched:R,meta:Fz(R)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:i}}function z5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function Pz(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Tz(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Tz(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function v5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Fz(c){return c.reduce((a,e)=>K(a,e.meta),{})}function h5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function W7(c,a){return a.children.some(e=>e===c||W7(c,e))}const Z7=/#/g,Bz=/&/g,Rz=/\//g,Ez=/=/g,Dz=/\?/g,j7=/\+/g,qz=/%5B/g,_z=/%5D/g,K7=/%5E/g,Oz=/%60/g,Y7=/%7B/g,Uz=/%7C/g,X7=/%7D/g,$z=/%20/g;function o8(c){return encodeURI(""+c).replace(Uz,"|").replace(qz,"[").replace(_z,"]")}function Iz(c){return o8(c).replace(Y7,"{").replace(X7,"}").replace(K7,"^")}function N6(c){return o8(c).replace(j7,"%2B").replace($z,"+").replace(Z7,"%23").replace(Bz,"%26").replace(Oz,"`").replace(Y7,"{").replace(X7,"}").replace(K7,"^")}function Gz(c){return N6(c).replace(Ez,"%3D")}function Wz(c){return o8(c).replace(Z7,"%23").replace(Dz,"%3F")}function Zz(c){return c==null?"":Wz(c).replace(Rz,"%2F")}function f4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function jz(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(j7," "),n=s.indexOf("="),f=f4(n<0?s:s.slice(0,n)),l=n<0?null:f4(s.slice(n+1));if(f in a){let t=a[f];R1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function H5(c){let a="";for(let e in c){const r=c[e];if(e=Gz(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(R1(r)?r.map(s=>s&&N6(s)):[r&&N6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function Kz(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=R1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Yz=Symbol(""),u5=Symbol(""),t8=Symbol(""),Q7=Symbol(""),S6=Symbol("");function e3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function o2(c,a,e,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((n,f)=>{const l=z=>{z===!1?f(W2(4,{from:e,to:a})):z instanceof Error?f(z):dz(z)?f(W2(2,{from:a,to:z})):(s&&r.enterCallbacks[i]===s&&typeof z=="function"&&s.push(z),n())},t=c.call(r&&r.instances[i],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>f(z))})}function n6(c,a,e,r){const i=[];for(const s of c)for(const n in s.components){let f=s.components[n];if(!(a!=="beforeRouteEnter"&&!s.instances[n]))if(Xz(f)){const t=(f.__vccOpts||f)[a];t&&i.push(o2(t,e,r,s,n))}else{let l=f();i.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${s.path}"`));const o=rz(t)?t.default:t;s.components[n]=o;const h=(o.__vccOpts||o)[a];return h&&o2(h,e,r,s,n)()}))}}return i}function Xz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function V5(c){const a=X1(t8),e=X1(Q7),r=o1(()=>a.resolve(q2(c.to))),i=o1(()=>{const{matched:l}=r.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(G2.bind(null,o));if(h>-1)return h;const u=p5(l[t-2]);return t>1&&p5(o)===u&&z[z.length-1].path!==u?z.findIndex(G2.bind(null,l[t-2])):h}),s=o1(()=>i.value>-1&&av(e.params,r.value.params)),n=o1(()=>i.value>-1&&i.value===e.matched.length-1&&U7(e.params,r.value.params));function f(l={}){return cv(l)?a[q2(c.replace)?"replace":"push"](q2(c.to)).catch(t3):Promise.resolve()}return{route:r,href:o1(()=>r.value.href),isActive:s,isExactActive:n,navigate:f}}const Qz=L4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:V5,setup(c,{slots:a}){const e=p4(V5(c)),{options:r}=X1(t8),i=o1(()=>({[M5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[M5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:n8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),Jz=Qz;function cv(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function av(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!R1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function p5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const M5=(c,a,e)=>c??a??e,ev=L4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=X1(S6),i=o1(()=>c.route||r.value),s=X1(u5,0),n=o1(()=>{let t=q2(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=o1(()=>i.value.matched[n.value]);Q3(u5,o1(()=>n.value+1)),Q3(Yz,f),Q3(S6,i);const l=z7();return f3(()=>[l.value,f.value,c.name],([t,o,z],[h,u,S])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!G2(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(w=>w(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=f.value,h=z&&z.components[o];if(!h)return C5(e.default,{Component:h,route:t});const u=z.props[o],S=u?u===!0?t.params:typeof u=="function"?u(t):u:null,R=n8(h,K({},S,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return C5(e.default,{Component:R,route:t})||R}}});function C5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const rv=ev;function iv(c){const a=kz(c.routes,c),e=c.parseQuery||jz,r=c.stringifyQuery||H5,i=c.history,s=e3(),n=e3(),f=e3(),l=Wo(n2);let t=n2;T2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=i6.bind(null,p=>""+p),z=i6.bind(null,Zz),h=i6.bind(null,f4);function u(p,P){let N,E;return I7(p)?(N=a.getRecordMatcher(p),E=P):E=p,a.addRoute(E,N)}function S(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(p=>p.record)}function R(p){return!!a.getRecordMatcher(p)}function M(p,P){if(P=K({},P||l.value),typeof p=="string"){const H=s6(e,p,P.path),V=a.resolve({path:H.path},P),C=i.createHref(H.fullPath);return K(H,V,{params:h(V.params),hash:f4(H.hash),redirectedFrom:void 0,href:C})}let N;if("path"in p)N=K({},p,{path:s6(e,p.path,P.path).path});else{const H=K({},p.params);for(const V in H)H[V]==null&&delete H[V];N=K({},p,{params:z(H)}),P.params=z(P.params)}const E=a.resolve(N,P),j=p.hash||"";E.params=o(h(E.params));const m=nz(r,K({},p,{hash:Iz(j),path:E.path})),v=i.createHref(m);return K({fullPath:m,hash:j,query:r===H5?Kz(p.query):p.query||{}},E,{redirectedFrom:void 0,href:v})}function d(p){return typeof p=="string"?s6(e,p,l.value.path):K({},p)}function B(p,P){if(t!==p)return W2(8,{from:P,to:p})}function y(p){return r1(p)}function $(p){return y(K(d(p),{replace:!0}))}function Q(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let E=typeof N=="function"?N(p):N;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=d(E):{path:E},E.params={}),K({query:p.query,hash:p.hash,params:"path"in E?{}:p.params},E)}}function r1(p,P){const N=t=M(p),E=l.value,j=p.state,m=p.force,v=p.replace===!0,H=Q(N);if(H)return r1(K(d(H),{state:typeof H=="object"?K({},j,H.state):j,force:m,replace:v}),P||N);const V=N;V.redirectedFrom=P;let C;return!m&&fz(r,E,N)&&(C=W2(16,{to:V,from:E}),D1(E,E,!0,!1)),(C?Promise.resolve(C):S1(V,E)).catch(L=>Z1(L)?Z1(L,2)?L:i2(L):Z(L,V,E)).then(L=>{if(L){if(Z1(L,2))return r1(K({replace:v},d(L.to),{state:typeof L.to=="object"?K({},j,L.to.state):j,force:m}),P||V)}else L=u2(V,E,!0,v,j);return r2(V,E,L),L})}function g1(p,P){const N=B(p,P);return N?Promise.reject(N):Promise.resolve()}function u1(p){const P=A2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(p):p()}function S1(p,P){let N;const[E,j,m]=sv(p,P);N=n6(E.reverse(),"beforeRouteLeave",p,P);for(const H of E)H.leaveGuards.forEach(V=>{N.push(o2(V,p,P))});const v=g1.bind(null,p,P);return N.push(v),v1(N).then(()=>{N=[];for(const H of s.list())N.push(o2(H,p,P));return N.push(v),v1(N)}).then(()=>{N=n6(j,"beforeRouteUpdate",p,P);for(const H of j)H.updateGuards.forEach(V=>{N.push(o2(V,p,P))});return N.push(v),v1(N)}).then(()=>{N=[];for(const H of m)if(H.beforeEnter)if(R1(H.beforeEnter))for(const V of H.beforeEnter)N.push(o2(V,p,P));else N.push(o2(H.beforeEnter,p,P));return N.push(v),v1(N)}).then(()=>(p.matched.forEach(H=>H.enterCallbacks={}),N=n6(m,"beforeRouteEnter",p,P),N.push(v),v1(N))).then(()=>{N=[];for(const H of n.list())N.push(o2(H,p,P));return N.push(v),v1(N)}).catch(H=>Z1(H,8)?H:Promise.reject(H))}function r2(p,P,N){f.list().forEach(E=>u1(()=>E(p,P,N)))}function u2(p,P,N,E,j){const m=B(p,P);if(m)return m;const v=P===n2,H=T2?history.state:{};N&&(E||v?i.replace(p.fullPath,K({scroll:v&&H&&H.scroll},j)):i.push(p.fullPath,j)),l.value=p,D1(p,P,N,v),i2()}let E1;function J2(){E1||(E1=i.listen((p,P,N)=>{if(!F3.listening)return;const E=M(p),j=Q(E);if(j){r1(K(j,{replace:!0}),E).catch(t3);return}t=E;const m=l.value;T2&&Hz(f5(m.fullPath,N.delta),w4()),S1(E,m).catch(v=>Z1(v,12)?v:Z1(v,2)?(r1(v.to,E).then(H=>{Z1(H,20)&&!N.delta&&N.type===C3.pop&&i.go(-1,!1)}).catch(t3),Promise.reject()):(N.delta&&i.go(-N.delta,!1),Z(v,E,m))).then(v=>{v=v||u2(E,m,!1),v&&(N.delta&&!Z1(v,8)?i.go(-N.delta,!1):N.type===C3.pop&&Z1(v,20)&&i.go(-1,!1)),r2(E,m,v)}).catch(t3)}))}let w2=e3(),l1=e3(),X;function Z(p,P,N){i2(p);const E=l1.list();return E.length?E.forEach(j=>j(p,P,N)):console.error(p),Promise.reject(p)}function W1(){return X&&l.value!==n2?Promise.resolve():new Promise((p,P)=>{w2.add([p,P])})}function i2(p){return X||(X=!p,J2(),w2.list().forEach(([P,N])=>p?N(p):P()),w2.reset()),p}function D1(p,P,N,E){const{scrollBehavior:j}=c;if(!T2||!j)return Promise.resolve();const m=!N&&uz(f5(p.fullPath,0))||(E||!N)&&history.state&&history.state.scroll||null;return u7().then(()=>j(p,P,m)).then(v=>v&&hz(v)).catch(v=>Z(v,p,P))}const M1=p=>i.go(p);let y2;const A2=new Set,F3={currentRoute:l,listening:!0,addRoute:u,removeRoute:S,hasRoute:R,getRoutes:w,resolve:M,options:c,push:y,replace:$,go:M1,back:()=>M1(-1),forward:()=>M1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:f.add,onError:l1.add,isReady:W1,install(p){const P=this;p.component("RouterLink",Jz),p.component("RouterView",rv),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>q2(l)}),T2&&!y2&&l.value===n2&&(y2=!0,y(i.location).catch(j=>{}));const N={};for(const j in n2)Object.defineProperty(N,j,{get:()=>l.value[j],enumerable:!0});p.provide(t8,P),p.provide(Q7,f7(N)),p.provide(S6,l);const E=p.unmount;A2.add(p),p.unmount=function(){A2.delete(p),A2.size<1&&(t=n2,E1&&E1(),E1=null,l.value=n2,y2=!1,X=!1),E()}}};function v1(p){return p.reduce((P,N)=>P.then(()=>u1(N)),Promise.resolve())}return F3}function sv(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const f=a.matched[n];f&&(c.matched.find(t=>G2(t,f))?r.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>G2(t,l))||i.push(l))}return[e,r,i]}const nv={};function fv(c,a){const e=x7("TheWelcome");return b4(),N4("main",null,[p1(e)])}const lv=f8(nv,[["render",fv]]),ov=iv({history:Cz("/"),routes:[{path:"/",name:"home",component:lv},{path:"/about",name:"about",component:()=>ez(()=>import("./AboutView-82ae4df7.js"),["assets/AboutView-82ae4df7.js","assets/AboutView-4d995ba2.css"])}]});function d5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?d5(Object(e),!0).forEach(function(r){f1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):d5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function l4(c){"@babel/helpers - typeof";return l4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l4(c)}function tv(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function L5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function mv(c,a,e){return a&&L5(c.prototype,a),e&&L5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function f1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function m8(c,a){return vv(c)||Hv(c,a)||J7(c,a)||Vv()}function N3(c){return zv(c)||hv(c)||J7(c)||uv()}function zv(c){if(Array.isArray(c))return w6(c)}function vv(c){if(Array.isArray(c))return c}function hv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Hv(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function J7(c,a){if(c){if(typeof c=="string")return w6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w6(c,a)}}function w6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function uv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g5=function(){},z8={},c9={},a9=null,e9={mark:g5,measure:g5};try{typeof window<"u"&&(z8=window),typeof document<"u"&&(c9=document),typeof MutationObserver<"u"&&(a9=MutationObserver),typeof performance<"u"&&(e9=performance)}catch{}var pv=z8.navigator||{},x5=pv.userAgent,b5=x5===void 0?"":x5,v2=z8,a1=c9,N5=a9,O3=e9;v2.document;var e2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",r9=~b5.indexOf("MSIE")||~b5.indexOf("Trident/"),U3,$3,I3,G3,W3,Q1="___FONT_AWESOME___",y6=16,i9="fa",s9="svg-inline--fa",N2="data-fa-i2svg",A6="data-fa-pseudo-element",Mv="data-fa-pseudo-element-pending",v8="data-prefix",h8="data-icon",S5="fontawesome-i2svg",Cv="async",dv=["HTML","HEAD","STYLE","SCRIPT"],n9=function(){try{return!0}catch{return!1}}(),c1="classic",i1="sharp",H8=[c1,i1];function S3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[c1]}})}var d3=S3((U3={},f1(U3,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),f1(U3,i1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),U3)),L3=S3(($3={},f1($3,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f1($3,i1,{solid:"fass",regular:"fasr",light:"fasl"}),$3)),g3=S3((I3={},f1(I3,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f1(I3,i1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),I3)),Lv=S3((G3={},f1(G3,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f1(G3,i1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),G3)),gv=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,f9="fa-layers-text",xv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bv=S3((W3={},f1(W3,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f1(W3,i1,{900:"fass",400:"fasr",300:"fasl"}),W3)),l9=[1,2,3,4,5,6,7,8,9,10],Nv=l9.concat([11,12,13,14,15,16,17,18,19,20]),Sv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x3=new Set;Object.keys(L3[c1]).map(x3.add.bind(x3));Object.keys(L3[i1]).map(x3.add.bind(x3));var wv=[].concat(H8,N3(x3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",d2.GROUP,d2.SWAP_OPACITY,d2.PRIMARY,d2.SECONDARY]).concat(l9.map(function(c){return"".concat(c,"x")})).concat(Nv.map(function(c){return"w-".concat(c)})),z3=v2.FontAwesomeConfig||{};function yv(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Av(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var kv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kv.forEach(function(c){var a=m8(c,2),e=a[0],r=a[1],i=Av(yv(e));i!=null&&(z3[r]=i)})}var o9={styleDefault:"solid",familyDefault:"classic",cssPrefix:i9,replacementClass:s9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z3.familyPrefix&&(z3.cssPrefix=z3.familyPrefix);var Z2=k(k({},o9),z3);Z2.autoReplaceSvg||(Z2.observeMutations=!1);var F={};Object.keys(o9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){Z2[c]=e,v3.forEach(function(r){return r(F)})},get:function(){return Z2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){Z2.cssPrefix=a,v3.forEach(function(e){return e(F)})},get:function(){return Z2.cssPrefix}});v2.FontAwesomeConfig=F;var v3=[];function Pv(c){return v3.push(c),function(){v3.splice(v3.indexOf(c),1)}}var f2=y6,I1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tv(c){if(!(!c||!e2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return a1.head.insertBefore(a,r),c}}var Fv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b3(){for(var c=12,a="";c-- >0;)a+=Fv[Math.random()*62|0];return a}function Q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function u8(c){return c.classList?Q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function t9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(t9(c[e]),'" ')},"").trim()}function y4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function V8(c){return c.size!==I1.size||c.x!==I1.x||c.y!==I1.y||c.rotate!==I1.rotate||c.flipX||c.flipY}function Rv(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:t}}function Ev(c){var a=c.transform,e=c.width,r=e===void 0?y6:e,i=c.height,s=i===void 0?y6:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&r9?l+="translate(".concat(a.x/f2-r/2,"em, ").concat(a.y/f2-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/f2,"em), calc(-50% + ").concat(a.y/f2,"em)) "):l+="translate(".concat(a.x/f2,"em, ").concat(a.y/f2,"em) "),l+="scale(".concat(a.size/f2*(a.flipX?-1:1),", ").concat(a.size/f2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Dv=`:root, :host {
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
}`;function m9(){var c=i9,a=s9,e=F.cssPrefix,r=F.replacementClass,i=Dv;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var w5=!1;function f6(){F.autoAddCss&&!w5&&(Tv(m9()),w5=!0)}var qv={mixout:function(){return{dom:{css:m9,insertCss:f6}}},hooks:function(){return{beforeDOMElementCreation:function(){f6()},beforeI2svg:function(){f6()}}}},J1=v2||{};J1[Q1]||(J1[Q1]={});J1[Q1].styles||(J1[Q1].styles={});J1[Q1].hooks||(J1[Q1].hooks={});J1[Q1].shims||(J1[Q1].shims=[]);var T1=J1[Q1],z9=[],_v=function c(){a1.removeEventListener("DOMContentLoaded",c),o4=1,z9.map(function(a){return a()})},o4=!1;e2&&(o4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),o4||a1.addEventListener("DOMContentLoaded",_v));function Ov(c){e2&&(o4?setTimeout(c,0):z9.push(c))}function w3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?t9(c):"<".concat(a," ").concat(Bv(r),">").concat(s.map(w3).join(""),"</").concat(a,">")}function y5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Uv=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},l6=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?Uv(e,i):e,l,t,o;for(r===void 0?(l=1,o=a[s[0]]):(l=0,o=r);l<n;l++)t=s[l],o=f(o,a[t],t,a);return o};function $v(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function k6(c){var a=$v(c);return a.length===1?a[0].toString(16):null}function Iv(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function A5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function P6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=A5(a);typeof T1.hooks.addPack=="function"&&!i?T1.hooks.addPack(c,A5(a)):T1.styles[c]=k(k({},T1.styles[c]||{}),s),c==="fas"&&P6("fa",a)}var Z3,j3,K3,B2=T1.styles,Gv=T1.shims,Wv=(Z3={},f1(Z3,c1,Object.values(g3[c1])),f1(Z3,i1,Object.values(g3[i1])),Z3),p8=null,v9={},h9={},H9={},u9={},V9={},Zv=(j3={},f1(j3,c1,Object.keys(d3[c1])),f1(j3,i1,Object.keys(d3[i1])),j3);function jv(c){return~wv.indexOf(c)}function Kv(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!jv(i)?i:null}var p9=function(){var a=function(s){return l6(B2,function(n,f,l){return n[l]=l6(f,s,{}),n},{})};v9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),h9=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),V9=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var e="far"in B2||F.autoFetchSvg,r=l6(Gv,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});H9=r.names,u9=r.unicodes,p8=A4(F.styleDefault,{family:F.familyDefault})};Pv(function(c){p8=A4(c.styleDefault,{family:F.familyDefault})});p9();function M8(c,a){return(v9[c]||{})[a]}function Yv(c,a){return(h9[c]||{})[a]}function L2(c,a){return(V9[c]||{})[a]}function M9(c){return H9[c]||{prefix:null,iconName:null}}function Xv(c){var a=u9[c],e=M8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function h2(){return p8}var C8=function(){return{prefix:null,iconName:null,rest:[]}};function A4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?c1:e,i=d3[r][c],s=L3[r][c]||L3[r][i],n=c in T1.styles?c:null;return s||n||null}var k5=(K3={},f1(K3,c1,Object.keys(g3[c1])),f1(K3,i1,Object.keys(g3[i1])),K3);function k4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},f1(a,c1,"".concat(F.cssPrefix,"-").concat(c1)),f1(a,i1,"".concat(F.cssPrefix,"-").concat(i1)),a),n=null,f=c1;(c.includes(s[c1])||c.some(function(t){return k5[c1].includes(t)}))&&(f=c1),(c.includes(s[i1])||c.some(function(t){return k5[i1].includes(t)}))&&(f=i1);var l=c.reduce(function(t,o){var z=Kv(F.cssPrefix,o);if(B2[o]?(o=Wv[f].includes(o)?Lv[f][o]:o,n=o,t.prefix=o):Zv[f].indexOf(o)>-1?(n=o,t.prefix=A4(o,{family:f})):z?t.iconName=z:o!==F.replacementClass&&o!==s[c1]&&o!==s[i1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?M9(t.iconName):{},u=L2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!B2.far&&B2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},C8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===i1&&(B2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=L2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=h2()||"fas"),l}var Qv=function(){function c(){tv(this,c),this.definitions={}}return mv(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=k(k({},e.definitions[f]||{}),n[f]),P6(f,n[f]);var l=g3[c1][f];l&&P6(l,n[f]),p9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),P5=[],R2={},O2={},Jv=Object.keys(O2);function ch(c,a){var e=a.mixoutsTo;return P5=c,R2={},Object.keys(O2).forEach(function(r){Jv.indexOf(r)===-1&&delete O2[r]}),P5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),l4(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){R2[n]||(R2[n]=[]),R2[n].push(s[n])})}r.provides&&r.provides(O2)}),e}function T6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=R2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function S2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=R2[c]||[];i.forEach(function(s){s.apply(null,e)})}function c2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return O2[c]?O2[c].apply(null,a):void 0}function F6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||h2();if(a)return a=L2(e,a)||a,y5(C9.definitions,e,a)||y5(T1.styles,e,a)}var C9=new Qv,ah=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,S2("noAuto")},eh={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e2?(S2("beforeI2svg",a),c2("pseudoElements2svg",a),c2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Ov(function(){ih({autoReplaceSvgRoot:e}),S2("watch",a)})}},rh={icon:function(a){if(a===null)return null;if(l4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:L2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=A4(a[0]);return{prefix:r,iconName:L2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(gv))){var i=k4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||h2(),iconName:L2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=h2();return{prefix:s,iconName:L2(s,a)||a}}}},N1={noAuto:ah,config:F,dom:eh,parse:rh,library:C9,findIconDefinition:F6,toHtml:w3},ih=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?a1:e;(Object.keys(T1.styles).length>0||F.autoFetchSvg)&&e2&&F.autoReplaceSvg&&N1.dom.i2svg({node:r})};function P4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return w3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(e2){var r=a1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function sh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(V8(n)&&e.found&&!r.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};i.style=y4(k(k({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function nh(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:n}),children:r}]}]}function d8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,S=r.found?r:e,w=S.width,R=S.height,M=i==="fak",d=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(u1){return z.classes.indexOf(u1)===-1}).filter(function(u1){return u1!==""||!!u1}).concat(z.classes).join(" "),B={children:[],attributes:k(k({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(R)})},y=M&&!~z.classes.indexOf("fa-fw")?{width:"".concat(w/R*16*.0625,"em")}:{};u&&(B.attributes[N2]=""),l&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(o||b3())},children:[l]}),delete B.attributes.title);var $=k(k({},B),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:f,styles:k(k({},y),z.styles)}),Q=r.found&&e.found?c2("generateAbstractMask",$)||{children:[],attributes:{}}:c2("generateAbstractIcon",$)||{children:[],attributes:{}},r1=Q.children,g1=Q.attributes;return $.children=r1,$.attributes=g1,f?nh($):sh($)}function T5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=k(k(k({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(t[N2]="");var o=k({},n.styles);V8(i)&&(o.transform=Ev({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=y4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function fh(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=y4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var o6=T1.styles;function B6(c){var a=c[0],e=c[1],r=c.slice(4),i=m8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(d2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var lh={found:!1,width:512,height:512};function oh(c,a){!n9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function R6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=h2()),new Promise(function(r,i){if(c2("missingIconAbstract"),e==="fa"){var s=M9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&o6[a]&&o6[a][c]){var n=o6[a][c];return r(B6(n))}oh(c,a),r(k(k({},lh),{},{icon:F.showMissingIcons&&c?c2("missingIconAbstract")||{}:{}}))})}var F5=function(){},E6=F.measurePerformance&&O3&&O3.mark&&O3.measure?O3:{mark:F5,measure:F5},s3='FA "6.4.2"',th=function(a){return E6.mark("".concat(s3," ").concat(a," begins")),function(){return d9(a)}},d9=function(a){E6.mark("".concat(s3," ").concat(a," ends")),E6.measure("".concat(s3," ").concat(a),"".concat(s3," ").concat(a," begins"),"".concat(s3," ").concat(a," ends"))},L8={begin:th,end:d9},c4=function(){};function B5(c){var a=c.getAttribute?c.getAttribute(N2):null;return typeof a=="string"}function mh(c){var a=c.getAttribute?c.getAttribute(v8):null,e=c.getAttribute?c.getAttribute(h8):null;return a&&e}function zh(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function vh(){if(F.autoReplaceSvg===!0)return a4.replace;var c=a4[F.autoReplaceSvg];return c||a4.replace}function hh(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function Hh(c){return a1.createElement(c)}function L9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?hh:Hh:e;if(typeof c=="string")return a1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(L9(n,{ceFn:r}))}),i}function uh(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var a4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(L9(i),e)}),e.getAttribute(N2)===null&&F.keepOriginalSource){var r=a1.createComment(uh(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~u8(e).indexOf(F.replacementClass))return a4.replace(a);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return w3(f)}).join(`
`);e.setAttribute(N2,""),e.innerHTML=n}};function R5(c){c()}function g9(c,a){var e=typeof a=="function"?a:c4;if(c.length===0)e();else{var r=R5;F.mutateApproach===Cv&&(r=v2.requestAnimationFrame||R5),r(function(){var i=vh(),s=L8.begin("mutate");c.map(i),s(),e()})}}var g8=!1;function x9(){g8=!0}function D6(){g8=!1}var t4=null;function E5(c){if(N5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?c4:a,r=c.nodeCallback,i=r===void 0?c4:r,s=c.pseudoElementsCallback,n=s===void 0?c4:s,f=c.observeMutationsRoot,l=f===void 0?a1:f;t4=new N5(function(t){if(!g8){var o=h2();Q2(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!B5(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&B5(z.target)&&~Sv.indexOf(z.attributeName))if(z.attributeName==="class"&&mh(z.target)){var h=k4(u8(z.target)),u=h.prefix,S=h.iconName;z.target.setAttribute(v8,u||o),S&&z.target.setAttribute(h8,S)}else zh(z.target)&&i(z.target)})}}),e2&&t4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vh(){t4&&t4.disconnect()}function ph(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function Mh(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=k4(u8(c));return i.prefix||(i.prefix=h2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Yv(i.prefix,c.innerText)||M8(i.prefix,k6(c.innerText))),!i.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Ch(c){var a=Q2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||b3()):(a["aria-hidden"]="true",a.focusable="false")),a}function dh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Mh(c),r=e.iconName,i=e.prefix,s=e.rest,n=Ch(c),f=T6("parseNodeAttributes",{},c),l=a.styleParser?ph(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:I1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var Lh=T1.styles;function b9(c){var a=F.autoReplaceSvg==="nest"?D5(c,{styleParser:!1}):D5(c);return~a.extra.classes.indexOf(f9)?c2("generateLayersText",c,a):c2("generateSvgReplacementMutation",c,a)}var H2=new Set;H8.map(function(c){H2.add("fa-".concat(c))});Object.keys(d3[c1]).map(H2.add.bind(H2));Object.keys(d3[i1]).map(H2.add.bind(H2));H2=N3(H2);function q5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e2)return Promise.resolve();var e=a1.documentElement.classList,r=function(z){return e.add("".concat(S5,"-").concat(z))},i=function(z){return e.remove("".concat(S5,"-").concat(z))},s=F.autoFetchSvg?H2:H8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Lh));s.includes("fa")||s.push("fa");var n=[".".concat(f9,":not([").concat(N2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(N2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=Q2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=L8.begin("onTree"),t=f.reduce(function(o,z){try{var h=b9(z);h&&o.push(h)}catch(u){n9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){g9(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(h){l(),z(h)})})}function gh(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;b9(c).then(function(e){e&&g9([e],a)})}function xh(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:F6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:F6(i||{})),c(r,k(k({},e),{},{mask:i}))}}var bh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?I1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,S=u===void 0?null:u,w=e.classes,R=w===void 0?[]:w,M=e.attributes,d=M===void 0?{}:M,B=e.styles,y=B===void 0?{}:B;if(a){var $=a.prefix,Q=a.iconName,r1=a.icon;return P4(k({type:"icon"},a),function(){return S2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(S||b3()):(d["aria-hidden"]="true",d.focusable="false")),d8({icons:{main:B6(r1),mask:l?B6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:Q,transform:k(k({},I1),i),symbol:n,title:h,maskId:o,titleId:S,extra:{attributes:d,styles:y,classes:R}})})}},Nh={mixout:function(){return{icon:xh(bh)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=q5,e.nodeCallback=gh,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?a1:r,s=e.callback,n=s===void 0?function(){}:s;return q5(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,l=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,S){Promise.all([R6(i,f),o.iconName?R6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var R=m8(w,2),M=R[0],d=R[1];u([e,d8({icons:{main:M,mask:d},prefix:f,iconName:i,transform:l,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,l=y4(f);l.length>0&&(i.style=l);var t;return V8(n)&&(t=c2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},Sh={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return P4({type:"layer"},function(){S2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(N3(s)).join(" ")},children:n}]})}}}},wh={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,l=r.attributes,t=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return P4({type:"counter",content:e},function(){return S2("beforeDOMElementCreation",{content:e,params:r}),fh({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(N3(f))}})})}}}},yh={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?I1:i,n=r.title,f=n===void 0?null:n,l=r.classes,t=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return P4({type:"text",content:e},function(){return S2("beforeDOMElementCreation",{content:e,params:r}),T5({content:e,transform:k(k({},I1),s),title:f,extra:{attributes:z,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(N3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,l=null;if(r9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,T5({content:e.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},Ah=new RegExp('"',"ug"),_5=[1105920,1112319];function kh(c){var a=c.replace(Ah,""),e=Iv(a,0),r=e>=_5[0]&&e<=_5[1],i=a.length===2?a[0]===a[1]:!1;return{value:k6(i?a[0]:a),isSecondary:r||i}}function O5(c,a){var e="".concat(Mv).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=Q2(c.children),n=s.filter(function(r1){return r1.getAttribute(A6)===a})[0],f=v2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(xv),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?i1:c1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?L3[h][l[2].toLowerCase()]:bv[h][t],S=kh(z),w=S.value,R=S.isSecondary,M=l[0].startsWith("FontAwesome"),d=M8(u,w),B=d;if(M){var y=Xv(w);y.iconName&&y.prefix&&(d=y.iconName,u=y.prefix)}if(d&&!R&&(!n||n.getAttribute(v8)!==u||n.getAttribute(h8)!==B)){c.setAttribute(e,B),n&&c.removeChild(n);var $=dh(),Q=$.extra;Q.attributes[A6]=a,R6(d,u).then(function(r1){var g1=d8(k(k({},$),{},{icons:{main:r1,mask:C8()},prefix:u,iconName:B,extra:Q,watchable:!0})),u1=a1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(u1,c.firstChild):c.appendChild(u1),u1.outerHTML=g1.map(function(S1){return w3(S1)}).join(`