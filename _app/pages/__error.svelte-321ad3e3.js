import{S as s,i as r,s as a,e as t,t as e,k as o,c as n,a as u,g as c,d as f,n as i,f as p,E as d,h,I as l}from"../chunks/vendor-fe673c2d.js";function m(s){let r,a,m,g,v,x=s[0].message+"";return{c(){r=t("h1"),a=e(s[1]),m=o(),g=t("p"),v=e(x)},l(t){r=n(t,"H1",{});var e=u(r);a=c(e,s[1]),e.forEach(f),m=i(t),g=n(t,"P",{});var o=u(g);v=c(o,x),o.forEach(f)},m(s,t){p(s,r,t),d(r,a),p(s,m,t),p(s,g,t),d(g,v)},p(s,[r]){2&r&&h(a,s[1]),1&r&&x!==(x=s[0].message+"")&&h(v,x)},i:l,o:l,d(s){s&&f(r),s&&f(m),s&&f(g)}}}const g=({error:s,status:r})=>({props:{error:s,status:r}});function v(s,r,a){let{error:t}=r,{status:e}=r;return s.$$set=s=>{"error"in s&&a(0,t=s.error),"status"in s&&a(1,e=s.status)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,v,m,a,{error:0,status:1})}}export{g as load};
