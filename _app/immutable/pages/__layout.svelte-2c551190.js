import{S as q,i as k,s as A,I as B,e as p,t as C,k as S,c as v,a as g,h as $,d as h,m as E,b as y,g as I,J as d,K as T,L as z,M,N as V,q as N,o as P,v as x,O as G}from"../chunks/index-28a80238.js";import{s as J,c as K}from"../chunks/DragAndDropStore-09d1187f.js";import{w as F}from"../chunks/index-2d6e2862.js";class w{constructor(){this.bg_color_primary="#2B303C",this.bg_color_secondary="#2E3440",this.bg_color_tertiary="#252A34",this.bg_color_quaternary="#3B4252",this.bg_color_primary_unfocused="#2B303C",this.bg_color_secondary_unfocused="#303643",this.bg_color_tertiary_unfocused="#252A34",this.bg_color_quaternary_unfocused="#3B4252",this.fg_color_primary="#FFFFFF",this.fg_color_secondary="#C4CAD5",this.fg_color_tertiary="",this.fg_color_quaternary="",this.fg_color_primary_unfocused="#777F84",this.fg_color_secondary_unfocused="#717684",this.fg_color_tertiary_unfocused="",this.fg_color_quaternary_unfocused="",this.border_color_primary="#262a35",this.border_color_secondary="",this.border_color_tertiary="",this.border_color_quaternary="",this.border_color_primary_unfocused="",this.border_color_secondary_unfocused="",this.border_color_tertiary_unfocused="",this.border_color_quaternary_unfocused="",this.selection_fg_color="",this.selection_bg_color="",this.selection_unfocused_fg_color="",this.selection_unfocused_bg_color="",this.warning_color="",this.error_color="",this.success_color="",this.input_fg_color="#DFDFDF",this.input_bg_color="#2B303C",this.input_border_color="#262A35",this.input_hover_fg_color="#F8F8F8",this.input_hover_bg_color="#3F4758",this.input_hover_border_color="#262A35",this.input_active_fg_color="#FFFFFF",this.input_active_bg_color="#495266",this.input_active_border_color="#262A35"}}const L=F(new w);function O(o,t){for(const e in t)o.style.setProperty(`--${e.toString()}`,t[e]);L.update(e=>t)}class D{constructor(){this["font-family"]="'Franklin Gothic Medium', sans-serif",this["font-weight"]="500",this["font-style"]="normal"}}const Q=F(new D);function j(o,t){for(const e in t)o.style.setProperty(`${e.toString()}`,t[e]);Q.update(e=>t)}function H(o){let t,e,c,_,i,a,u,l;const f=o[3].default,s=B(f,o,o[2],null);return{c(){t=p("div"),e=p("div"),c=C("This website is in development"),_=S(),i=p("div"),s&&s.c(),this.h()},l(r){t=v(r,"DIV",{class:!0});var n=g(t);e=v(n,"DIV",{class:!0});var m=g(e);c=$(m,"This website is in development"),m.forEach(h),_=E(n),i=v(n,"DIV",{class:!0});var b=g(i);s&&s.l(b),b.forEach(h),n.forEach(h),this.h()},h(){y(e,"class","build-label svelte-1vvh4pc"),y(i,"class","slot-container svelte-1vvh4pc"),y(t,"class","layout-wrapper svelte-1vvh4pc")},m(r,n){I(r,t,n),d(t,e),d(e,c),d(t,_),d(t,i),s&&s.m(i,null),o[4](t),a=!0,u||(l=T(window,"dragend",o[1]),u=!0)},p(r,[n]){s&&s.p&&(!a||n&4)&&z(s,f,r,r[2],a?V(f,r[2],n,null):M(r[2]),null)},i(r){a||(N(s,r),a=!0)},o(r){P(s,r),a=!1},d(r){r&&h(t),s&&s.d(r),o[4](null),u=!1,l()}}}function R(o,t,e){let{$$slots:c={},$$scope:_}=t,i;x(()=>{J({desktopQuery:"screen and (min-width: 768px)",listen:!0}),document.getElementById("svelte").style.height="100%",O(i,new w),j(i,new D)});function a(l){K()}function u(l){G[l?"unshift":"push"](()=>{i=l,e(0,i)})}return o.$$set=l=>{"$$scope"in l&&e(2,_=l.$$scope)},[i,a,_,c,u]}class Y extends q{constructor(t){super(),k(this,t,R,H,A,{})}}export{Y as default};
