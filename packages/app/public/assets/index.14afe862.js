import{b as a,S as d,i as f,s as m,R as p,c as h,m as g,n as _,t as y,a as $,d as v}from"./vendor.d397e91b.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};L();const b="modulepreload",c={},E="/",P=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${E}${t}`,t in c)return;c[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":b,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",u)})})).then(()=>r())},x={root:!0,children:[{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>P(()=>import("./index.695e86cb.js"),["assets/index.695e86cb.js","assets/index.eb6cd67b.css","assets/vendor.d397e91b.js"]).then(i=>i.default)}],path:"/"},{tree:I,routes:O}=a(x);function S(i){let r,s;return r=new p({props:{routes:O}}),{c(){h(r.$$.fragment)},m(t,e){g(r,t,e),s=!0},p:_,i(t){s||(y(r.$$.fragment,t),s=!0)},o(t){$(r.$$.fragment,t),s=!1},d(t){v(r,t)}}}class w extends d{constructor(r){super();f(this,r,null,S,m,{})}}new w({target:document.getElementById("app")});