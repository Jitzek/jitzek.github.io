import{o as qe,t as be}from"../chunks/index.d2bd13d4.js";import{w as Re}from"../chunks/index.7c46b022.js";import{a as tt,b as H}from"../chunks/paths.fe463df8.js";function nt(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function at(e){return e.split("%25").map(decodeURI).join("%25")}function rt(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const ot=["href","pathname","search","searchParams","toString","toJSON"];function it(e,a){const s=new URL(e);for(const i of ot)Object.defineProperty(s,i,{get(){return a(),e[i]},enumerable:!0,configurable:!0});return st(s),s}function st(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const lt="/__data.json";function ct(e){return e.replace(/\/$/,"")+lt}const ft="1685986253151",ze="sveltekit:snapshot",Ye="sveltekit:scroll",V="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1};function Fe(e){let a=e.baseURI;if(!a){const s=e.getElementsByTagName("base");a=s.length?s[0].href:e.URL}return a}function ee(){return{x:pageXOffset,y:pageYOffset}}function Y(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Me={...de,"":de.hover};function We(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function Be(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=We(e)}}function ve(e,a){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i=e instanceof SVGAElement?e.target.baseVal:e.target,d=!s||!!i||ue(s,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:d,target:i,download:c}}function fe(e){let a=null,s=null,i=null,d=null,c=null,g=null,l=e;for(;l&&l!==document.documentElement;)i===null&&(i=Y(l,"preload-code")),d===null&&(d=Y(l,"preload-data")),a===null&&(a=Y(l,"keepfocus")),s===null&&(s=Y(l,"noscroll")),c===null&&(c=Y(l,"reload")),g===null&&(g=Y(l,"replacestate")),l=We(l);function p(m){switch(m){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Me[i??"off"],preload_data:Me[d??"off"],keep_focus:p(a),noscroll:p(s),reload:p(c),replace_state:p(g)}}function Ge(e){const a=Re(e);let s=!0;function i(){s=!0,a.update(g=>g)}function d(g){s=!1,a.set(g)}function c(g){let l;return a.subscribe(p=>{(l===void 0||s&&p!==l)&&g(l=p)})}return{notify:i,set:d,subscribe:c}}function ut(){const{set:e,subscribe:a}=Re(!1);let s;async function i(){clearTimeout(s);try{const d=await fetch(`${tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const g=(await d.json()).version!==ft;return g&&(e(!0),clearTimeout(s)),g}catch{return!1}}return{subscribe:a,check:i}}function ue(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}function Xe(e){try{return JSON.parse(sessionStorage[e])}catch{}}function He(e,a){const s=JSON.stringify(a);try{sessionStorage[e]=s}catch{}}function dt(...e){let a=5381;for(const s of e)if(typeof s=="string"){let i=s.length;for(;i;)a=a*33^s.charCodeAt(--i)}else if(ArrayBuffer.isView(s)){const i=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);let d=i.length;for(;d;)a=a*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const pe=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&ne.delete(Ae(e)),pe(e,a));const ne=new Map;function pt(e,a){const s=Ae(e,a),i=document.querySelector(s);if(i!=null&&i.textContent){const{body:d,...c}=JSON.parse(i.textContent),g=i.getAttribute("data-ttl");return g&&ne.set(s,{body:d,init:c,ttl:1e3*Number(g)}),Promise.resolve(new Response(d,c))}return pe(e,a)}function ht(e,a,s){if(ne.size>0){const i=Ae(e,s),d=ne.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(s==null?void 0:s.cache))return new Response(d.body,d.init);ne.delete(i)}}return pe(a,s)}function Ae(e,a){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const d=[];a.headers&&d.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&d.push(a.body),i+=`[data-hash="${dt(...d)}"]`}return i}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${wt(e).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return a.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(c)return a.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const g=i.split(/\[(.+?)\](?!\])/);return"/"+g.map((p,m)=>{if(m%2){if(p.startsWith("x+"))return Ee(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Ee(String.fromCharCode(...p.slice(2).split("-").map(O=>parseInt(O,16))));const h=gt.exec(p);if(!h)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,N,S,P]=h;return a.push({name:S,matcher:P,optional:!!C,rest:!!N,chained:N?m===1&&g[0]==="":!1}),N?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return Ee(p)}).join("")}).join("")}/?$`),params:a}}function yt(e){return!/^\([^)]+\)$/.test(e)}function wt(e){return e.slice(1).split("/").filter(yt)}function _t(e,a,s){const i={},d=e.slice(1);let c=0;for(let g=0;g<a.length;g+=1){const l=a[g],p=d[g-c];if(l.chained&&l.rest&&c){i[l.name]=d.slice(g-c,g+1).filter(m=>m).join("/"),c=0;continue}if(p===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||s[l.matcher](p)){i[l.name]=p;const m=a[g+1],h=d[g+1];m&&!m.rest&&m.optional&&h&&(c=0);continue}if(l.optional&&l.chained){c++;continue}return}if(!c)return i}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function bt({nodes:e,server_loads:a,dictionary:s,matchers:i}){const d=new Set(a);return Object.entries(s).map(([l,[p,m,h]])=>{const{pattern:C,params:N}=mt(l),S={id:l,exec:P=>{const O=C.exec(P);if(O)return _t(O,N,i)},errors:[1,...h||[]].map(P=>e[P]),layouts:[0,...m||[]].map(g),leaf:c(p)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function c(l){const p=l<0;return p&&(l=~l),[p,e[l]]}function g(l){return l===void 0?l:[d.has(l),e[l]]}}class te{constructor(a,s){this.status=a,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(a,s){this.status=a,this.location=s}}function vt(e){e.client}const M={url:Ge({}),page:Ge({}),navigating:Re(null),updated:ut()};async function Et(e){var a;for(const s in e)if(typeof((a=e[s])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([i,d])=>[i,await d])));return e}const kt=-1,St=-2,Rt=-3,At=-4,It=-5,Lt=-6;function Ut(e,a){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const s=e,i=Array(s.length);function d(c,g=!1){if(c===kt)return;if(c===Rt)return NaN;if(c===At)return 1/0;if(c===It)return-1/0;if(c===Lt)return-0;if(g)throw new Error("Invalid input");if(c in i)return i[c];const l=s[c];if(!l||typeof l!="object")i[c]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const p=l[0],m=a==null?void 0:a[p];if(m)return i[c]=m(d(l[1]));switch(p){case"Date":i[c]=new Date(l[1]);break;case"Set":const h=new Set;i[c]=h;for(let S=1;S<l.length;S+=1)h.add(d(l[S]));break;case"Map":const C=new Map;i[c]=C;for(let S=1;S<l.length;S+=2)C.set(d(l[S]),d(l[S+1]));break;case"RegExp":i[c]=new RegExp(l[1],l[2]);break;case"Object":i[c]=Object(l[1]);break;case"BigInt":i[c]=BigInt(l[1]);break;case"null":const N=Object.create(null);i[c]=N;for(let S=1;S<l.length;S+=2)N[l[S]]=d(l[S+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(l.length);i[c]=p;for(let m=0;m<l.length;m+=1){const h=l[m];h!==St&&(p[m]=d(h))}}else{const p={};i[c]=p;for(const m in l){const h=l[m];p[m]=d(h)}}return i[c]}return d(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Ot=new Set([...Ze,"actions"]);[...Ot];function xt(e){return e.filter(a=>a!=null)}const Nt="x-sveltekit-invalidated",J=Xe(Ye)??{},Q=Xe(ze)??{};function ke(e){J[e]=ee()}function Pt(e,a){var Ce;const s=bt(e),i=e.nodes[0],d=e.nodes[1];i(),d();const c=document.documentElement,g=[],l=[];let p=null;const m={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},C=!1,N=!1,S=!0,P=!1,O=!1,K=!1,B=!1,q,$=(Ce=history.state)==null?void 0:Ce[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const he=J[$];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let F,ae,re;async function Ie(){re=re||Promise.resolve(),await re,re=null;const t=new URL(location.href),n=X(t,!0);p=null;const o=ae={},r=n&&await ye(n);if(o===ae&&r){if(r.type==="redirect")return oe(new URL(r.location,t).href,{},[t.pathname],o);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Le(t){l.some(n=>n==null?void 0:n.snapshot)&&(Q[t]=l.map(n=>{var o;return(o=n==null?void 0:n.snapshot)==null?void 0:o.capture()}))}function Ue(t){var n;(n=Q[t])==null||n.forEach((o,r)=>{var f,u;(u=(f=l[r])==null?void 0:f.snapshot)==null||u.restore(o)})}function Oe(){ke($),He(Ye,J),Le($),He(ze,Q)}async function oe(t,{noScroll:n=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:u=!1},w,_){return typeof t=="string"&&(t=new URL(t,Fe(document))),ce({url:t,scroll:n?ee():null,keepfocus:r,redirect_chain:w,details:{state:f,replaceState:o},nav_token:_,accepted:()=>{u&&(B=!0)},blocked:()=>{},type:"goto"})}async function xe(t){return p={id:t.id,promise:ye(t).then(n=>(n.type==="loaded"&&n.state.error&&(p=null),n))},p.promise}async function ie(...t){const o=s.filter(r=>t.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}function Ne(t){var r;h=t.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),F=t.props.page,q=new e.root({target:a,props:{...t.props,stores:M,components:l},hydrate:!0}),Ue($);const o={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(f=>f(o)),N=!0}async function W({url:t,params:n,branch:o,status:r,error:f,route:u,form:w}){let _="never";for(const v of o)(v==null?void 0:v.slash)!==void 0&&(_=v.slash);t.pathname=nt(t.pathname,_),t.search=t.search;const E={type:"loaded",state:{url:t,params:n,branch:o,error:f,route:u},props:{constructors:xt(o).map(v=>v.node.component)}};w!==void 0&&(E.props.form=w);let b={},R=!F,A=0;for(let v=0;v<Math.max(o.length,h.branch.length);v+=1){const y=o[v],x=h.branch[v];(y==null?void 0:y.data)!==(x==null?void 0:x.data)&&(R=!0),y&&(b={...b,...y.data},R&&(E.props[`data_${A}`]=b),A+=1)}return(!h.url||t.href!==h.url.href||h.error!==f||w!==void 0&&w!==F.form||R)&&(E.props.page={error:f,params:n,route:{id:(u==null?void 0:u.id)??null},status:r,url:new URL(t),form:w??null,data:R?b:F.data}),E}async function ge({loader:t,parent:n,url:o,params:r,route:f,server_data_node:u}){var b,R,A;let w=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((b=E.universal)!=null&&b.load){let U=function(...y){for(const x of y){const{href:T}=new URL(x,o);_.dependencies.add(T)}};const v={route:{get id(){return _.route=!0,f.id}},params:new Proxy(r,{get:(y,x)=>(_.params.add(x),y[x])}),data:(u==null?void 0:u.data)??null,url:it(o,()=>{_.url=!0}),async fetch(y,x){let T;y instanceof Request?(T=y.url,x={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...x}):T=y;const D=new URL(T,o);return U(D.href),D.origin===o.origin&&(T=D.href.slice(o.origin.length)),N?ht(T,D.href,x):pt(T,x)},setHeaders:()=>{},depends:U,parent(){return _.parent=!0,n()}};w=await E.universal.load.call(null,v)??null,w=w?await Et(w):null}return{node:E,loader:t,server:u,universal:(R=E.universal)!=null&&R.load?{type:"data",data:w,uses:_}:null,data:w??(u==null?void 0:u.data)??null,slash:((A=E.universal)==null?void 0:A.trailingSlash)??(u==null?void 0:u.slash)}}function Pe(t,n,o,r,f){if(B)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&o)return!0;for(const u of r.params)if(f[u]!==h.params[u])return!0;for(const u of r.dependencies)if(g.some(w=>w(new URL(u))))return!0;return!1}function me(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}async function ye({id:t,invalidating:n,url:o,params:r,route:f}){if((p==null?void 0:p.id)===t)return p.promise;const{errors:u,layouts:w,leaf:_}=f,E=[...w,_];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const R=h.url?t!==h.url.pathname+h.url.search:!1,A=h.route?f.id!==h.route.id:!1;let U=!1;const v=E.map((k,L)=>{var G;const I=h.branch[L],j=!!(k!=null&&k[0])&&((I==null?void 0:I.loader)!==k[1]||Pe(U,A,R,(G=I.server)==null?void 0:G.uses,r));return j&&(U=!0),j});if(v.some(Boolean)){try{b=await Ke(o,v)}catch(k){return se({status:k instanceof te?k.status:500,error:await Z(k,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(b.type==="redirect")return b}const y=b==null?void 0:b.nodes;let x=!1;const T=E.map(async(k,L)=>{var we;if(!k)return;const I=h.branch[L],j=y==null?void 0:y[L];if((!j||j.type==="skip")&&k[1]===(I==null?void 0:I.loader)&&!Pe(x,A,R,(we=I.universal)==null?void 0:we.uses,r))return I;if(x=!0,(j==null?void 0:j.type)==="error")throw j;return ge({loader:k[1],url:o,params:r,route:f,parent:async()=>{var Ve;const De={};for(let _e=0;_e<L;_e+=1)Object.assign(De,(Ve=await T[_e])==null?void 0:Ve.data);return De},server_data_node:me(j===void 0&&k[0]?{type:"skip"}:j??null,k[0]?I==null?void 0:I.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await T[k])}catch(L){if(L instanceof Je)return{type:"redirect",location:L.location};let I=500,j;if(y!=null&&y.includes(L))I=L.status??I,j=L.error;else if(L instanceof te)I=L.status,j=L.body;else{if(await M.updated.check())return await z(o);j=await Z(L,{params:r,url:o,route:{id:f.id}})}const G=await Te(k,D,u);return G?await W({url:o,params:r,branch:D.slice(0,G.idx).concat(G.node),status:I,error:j,route:f}):await je(o,{id:f.id},j,I)}else D.push(void 0);return await W({url:o,params:r,branch:D,status:200,error:null,route:f,form:n?void 0:null})}async function Te(t,n,o){for(;t--;)if(o[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await o[t](),loader:o[t],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:t,error:n,url:o,route:r}){const f={};let u=null;if(e.server_loads[0]===0)try{const b=await Ke(o,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;u=b.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||C)&&await z(o)}const _=await ge({loader:i,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:me(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await W({url:o,params:f,branch:[_,E],status:t,error:n,route:null})}function X(t,n){if(ue(t,H))return;const o=le(t);for(const r of s){const f=r.exec(o);if(f)return{id:t.pathname+t.search,invalidating:n,route:r,params:rt(f),url:t}}}function le(t){return at(t.pathname.slice(H.length)||"/")}function $e({url:t,type:n,intent:o,delta:r}){var _,E;let f=!1;const u={from:{params:h.params,route:{id:((_=h.route)==null?void 0:_.id)??null},url:h.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((E=o==null?void 0:o.route)==null?void 0:E.id)??null},url:t},willUnload:!o,type:n};r!==void 0&&(u.delta=r);const w={...u,cancel:()=>{f=!0}};return O||m.before_navigate.forEach(b=>b(w)),f?null:u}async function ce({url:t,scroll:n,keepfocus:o,redirect_chain:r,details:f,type:u,delta:w,nav_token:_={},accepted:E,blocked:b}){var T,D,k;const R=X(t,!1),A=$e({url:t,type:u,delta:w,intent:R});if(!A){b();return}const U=$;E(),O=!0,N&&M.navigating.set(A),ae=_;let v=R&&await ye(R);if(!v){if(ue(t,H))return await z(t);v=await je(t,{id:null},await Z(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,ae!==_)return!1;if(v.type==="redirect")if(r.length>10||r.includes(t.pathname))v=await se({status:500,error:await Z(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return oe(new URL(v.location,t).href,{},[...r,t.pathname],_),!1;else((T=v.props.page)==null?void 0:T.status)>=400&&await M.updated.check()&&await z(t);if(g.length=0,B=!1,P=!0,ke(U),Le(U),(D=v.props.page)!=null&&D.url&&v.props.page.url.pathname!==t.pathname&&(t.pathname=(k=v.props.page)==null?void 0:k.url.pathname),f){const L=f.replaceState?0:1;if(f.state[V]=$+=L,history[f.replaceState?"replaceState":"pushState"](f.state,"",t),!f.replaceState){let I=$+1;for(;Q[I]||J[I];)delete Q[I],delete J[I],I+=1}}p=null,N?(h=v.state,v.props.page&&(v.props.page.url=t),q.$set(v.props)):Ne(v);const{activeElement:y}=document;if(await be(),S){const L=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==y&&document.activeElement!==document.body;!o&&!x&&Se(),S=!0,v.props.page&&(F=v.props.page),O=!1,u==="popstate"&&Ue($),m.after_navigate.forEach(L=>L(A)),M.navigating.set(null),P=!1}async function je(t,n,o,r){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await se({status:r,error:o,url:t,route:n}):await z(t)}function z(t){return location.href=t.href,new Promise(()=>{})}function et(){let t;c.addEventListener("mousemove",u=>{const w=u.target;clearTimeout(t),t=setTimeout(()=>{r(w,2)},20)});function n(u){r(u.composedPath()[0],1)}c.addEventListener("mousedown",n),c.addEventListener("touchstart",n,{passive:!0});const o=new IntersectionObserver(u=>{for(const w of u)w.isIntersecting&&(ie(le(new URL(w.target.href))),o.unobserve(w.target))},{threshold:0});function r(u,w){const _=Be(u,c);if(!_)return;const{url:E,external:b,download:R}=ve(_,H);if(b||R)return;const A=fe(_);if(!A.reload)if(w<=A.preload_data){const U=X(E,!1);U&&xe(U)}else w<=A.preload_code&&ie(le(E))}function f(){o.disconnect();for(const u of c.querySelectorAll("a")){const{url:w,external:_,download:E}=ve(u,H);if(_||E)continue;const b=fe(u);b.reload||(b.preload_code===de.viewport&&o.observe(u),b.preload_code===de.eager&&ie(le(w)))}}m.after_navigate.push(f),f()}function Z(t,n){return t instanceof te?t.body:e.hooks.handleError({error:t,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{qe(()=>(m.after_navigate.push(t),()=>{const n=m.after_navigate.indexOf(t);m.after_navigate.splice(n,1)}))},before_navigate:t=>{qe(()=>(m.before_navigate.push(t),()=>{const n=m.before_navigate.indexOf(t);m.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(P||!N)&&(S=!1)},goto:(t,n={})=>oe(t,n,[]),invalidate:t=>{if(typeof t=="function")g.push(t);else{const{href:n}=new URL(t,location.href);g.push(o=>o.href===n)}return Ie()},invalidate_all:()=>(B=!0,Ie()),preload_data:async t=>{const n=new URL(t,Fe(document)),o=X(n,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await xe(o)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const n=new URL(location.href),{branch:o,route:r}=h;if(!r)return;const f=await Te(h.branch.length,o,r.errors);if(f){const u=await W({url:n,params:h.params,branch:o.slice(0,f.idx).concat(f.node),status:t.status??500,error:t.error,route:r});h=u.state,q.$set(u.props),be().then(Se)}}else t.type==="redirect"?oe(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:t.data,status:t.status}}),await be(),q.$set({form:t.data}),t.type==="success"&&Se())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var r;let o=!1;if(Oe(),!O){const f={from:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};m.before_navigate.forEach(u=>u(f))}o?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(t=navigator.connection)!=null&&t.saveData||et(),c.addEventListener("click",n=>{var A;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const o=Be(n.composedPath()[0],c);if(!o)return;const{url:r,external:f,target:u,download:w}=ve(o,H);if(!r)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const _=fe(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||w)return;if(f||_.reload){$e({url:r,type:"link"})?O=!0:n.preventDefault();return}const[b,R]=r.href.split("#");if(R!==void 0&&b===location.href.split("#")[0]){if(h.url.hash===r.hash){n.preventDefault(),(A=o.ownerDocument.getElementById(R))==null||A.scrollIntoView();return}if(K=!0,ke($),h.url=r,M.page.set({...F,url:r}),M.page.notify(),!_.replace_state)return;K=!1,n.preventDefault()}ce({url:r,scroll:_.noscroll?ee():null,keepfocus:_.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:_.replace_state??r.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),c.addEventListener("submit",n=>{if(n.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const u=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(ue(u,H))return;const w=n.target,{keep_focus:_,noscroll:E,reload:b,replace_state:R}=fe(w);if(b)return;n.preventDefault(),n.stopPropagation();const A=new FormData(w),U=r==null?void 0:r.getAttribute("name");U&&A.append(U,(r==null?void 0:r.getAttribute("value"))??""),u.search=new URLSearchParams(A).toString(),ce({url:u,scroll:E?ee():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:R??u.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var o;if((o=n.state)!=null&&o[V]){if(n.state[V]===$)return;const r=J[n.state[V]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){J[$]=ee(),$=n.state[V],scrollTo(r.x,r.y);return}const f=n.state[V]-$;await ce({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=n.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:n,node_ids:o,params:r,route:f,data:u,form:w})=>{C=!0;const _=new URL(location.href);({params:r={},route:f={id:null}}=X(_,!1)||{});let E;try{const b=o.map(async(U,v)=>{const y=u[v];return y!=null&&y.uses&&(y.uses=Qe(y.uses)),ge({loader:e.nodes[U],url:_,params:r,route:f,parent:async()=>{const x={};for(let T=0;T<v;T+=1)Object.assign(x,(await b[T]).data);return x},server_data_node:me(y)})}),R=await Promise.all(b),A=s.find(({id:U})=>U===f.id);if(A){const U=A.layouts;for(let v=0;v<U.length;v++)U[v]||R.splice(v,0,void 0)}E=await W({url:_,params:r,branch:R,status:t,error:n,form:w,route:A??null})}catch(b){if(b instanceof Je){await z(new URL(b.location,location.href));return}E=await se({status:b instanceof te?b.status:500,error:await Z(b,{url:_,params:r,route:f}),url:_,route:f})}Ne(E)}}}async function Ke(e,a){const s=new URL(e);s.pathname=ct(e.pathname),s.searchParams.append(Nt,a.map(d=>d?"1":"0").join(""));const i=await pe(s.href);if(!i.ok)throw new te(i.status,await i.json());return new Promise(async d=>{var h;const c=new Map,g=i.body.getReader(),l=new TextDecoder;function p(C){return Ut(C,{Promise:N=>new Promise((S,P)=>{c.set(N,{fulfil:S,reject:P})})})}let m="";for(;;){const{done:C,value:N}=await g.read();if(C&&!m)break;for(m+=!N&&m?`
`:l.decode(N);;){const S=m.indexOf(`
`);if(S===-1)break;const P=JSON.parse(m.slice(0,S));if(m=m.slice(S+1),P.type==="redirect")return d(P);if(P.type==="data")(h=P.nodes)==null||h.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Qe(O.uses),O.data=p(O.data))}),d(P);else if(P.type==="chunk"){const{id:O,data:K,error:B}=P,q=c.get(O);c.delete(O),B?q.reject(p(B)):q.fulfil(p(K))}}}})}function Qe(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Se(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,s=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),s!==null?a.setAttribute("tabindex",s):a.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let c=0;c<i.rangeCount;c+=1)d.push(i.getRangeAt(c));setTimeout(()=>{if(i.rangeCount===d.length){for(let c=0;c<i.rangeCount;c+=1){const g=d[c],l=i.getRangeAt(c);if(g.commonAncestorContainer!==l.commonAncestorContainer||g.startContainer!==l.startContainer||g.endContainer!==l.endContainer||g.startOffset!==l.startOffset||g.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function Ct(e,a,s){const i=Pt(e,a);vt({client:i}),s?await i._hydrate(s):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Ct as start};
