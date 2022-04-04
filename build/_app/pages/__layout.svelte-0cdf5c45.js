var Le=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var S=(a,e,t)=>(Le(a,e,"read from private field"),t?t.call(a):e.get(a)),X=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},Z=(a,e,t,s)=>(Le(a,e,"write to private field"),s?s.call(a,t):e.set(a,t),t);var oe=(a,e,t)=>(Le(a,e,"access private method"),t);import{w as Ze,_ as Ue}from"../chunks/preload-helper-bedf4d66.js";import{S as me,i as _e,s as de,l as te,g as y,E as ae,d as u,I as O,v as Ve,e as p,c as v,a as g,b as n,J as h,K as Re,t as F,h as Y,j as he,k as I,L as He,m as D,M as Je,N as xe,w as ne,x as ce,O as et,f as R,P as ke,y as ue,q as z,o as G,B as fe,Q as tt,R as at,T as st,U as rt,V as lt,W as ot}from"../chunks/index-930d7b4d.js";import{t as Ee,l as it,a as nt}from"../chunks/index-76b44084.js";import{p as Xe}from"../chunks/stores-ddef0345.js";var ct={colorScheme:Ze(0)};const ut=Object.freeze({DARK:Symbol("dark"),LIGHT:Symbol("light")}),Qe="colorScheme",ye=ut,{colorScheme:Me}=ct;var q,x,V,ee,B,ie;class ft{constructor(){X(this,B);X(this,q,void 0);X(this,x,void 0);X(this,V,void 0);X(this,ee,void 0);Z(this,q,window.sessionStorage.getItem(Qe)),Z(this,x,typeof window.matchMedia!="undefined"),Z(this,V,void 0),Z(this,ee,window.matchMedia("(prefers-color-scheme: dark)")),S(this,x)&&(S(this,q)?oe(this,B,ie).call(this,S(this,q)===ye.DARK.description):oe(this,B,ie).call(this,S(this,ee).matches))}watch(){!S(this,x)||S(this,ee).addEventListener("change",e=>{S(this,q)||oe(this,B,ie).call(this,e.matches)})}get(){return S(this,V)}switch(){oe(this,B,ie).call(this,S(this,V)!==ye.DARK.description),window.sessionStorage.setItem(Qe,S(this,V))}}q=new WeakMap,x=new WeakMap,V=new WeakMap,ee=new WeakMap,B=new WeakSet,ie=function(e){Z(this,V,(e?ye.DARK:ye.LIGHT).description),window.document.querySelector("html").dataset.colorScheme=S(this,V),Me.set(S(this,V))};function ht(a){let e,t,s,r,l;return{c(){e=p("span"),t=p("i"),this.h()},l(o){e=v(o,"SPAN",{class:!0,title:!0});var c=g(e);t=v(c,"I",{class:!0}),g(t).forEach(u),c.forEach(u),this.h()},h(){n(t,"class","fa-solid fa-circle-half-stroke"),n(e,"class",a[3].join(" ")),n(e,"title",s=a[2](a[4]))},m(o,c){y(o,e,c),h(e,t),r||(l=Re(e,"click",a[5]),r=!0)},p(o,c){c&4&&s!==(s=o[2](o[4]))&&n(e,"title",s)},d(o){o&&u(e),r=!1,l()}}}function mt(a){let e,t=a[2](`common.colorScheme.${a[1]}To`)+"",s,r,l,o;return{c(){e=p("a"),s=F(t),this.h()},l(c){e=v(c,"A",{class:!0,title:!0,href:!0});var m=g(e);s=Y(m,t),m.forEach(u),this.h()},h(){n(e,"class",a[3].join(" ")),n(e,"title",r=a[2](a[4])),n(e,"href","javascript:void(0)")},m(c,m){y(c,e,m),h(e,s),l||(o=Re(e,"click",a[5]),l=!0)},p(c,m){m&6&&t!==(t=c[2](`common.colorScheme.${c[1]}To`)+"")&&he(s,t),m&4&&r!==(r=c[2](c[4]))&&n(e,"title",r)},d(c){c&&u(e),l=!1,o()}}}function _t(a){let e;function t(l,o){return l[0]==="string"?mt:ht}let s=t(a),r=s(a);return{c(){r.c(),e=te()},l(l){r.l(l),e=te()},m(l,o){r.m(l,o),y(l,e,o)},p(l,[o]){s===(s=t(l))&&r?r.p(l,o):(r.d(1),r=s(l),r&&(r.c(),r.m(e.parentNode,e)))},i:ae,o:ae,d(l){r.d(l),l&&u(e)}}}function dt(a,e,t){let s,r;O(a,Me,_=>t(1,s=_)),O(a,Ee,_=>t(2,r=_));let l,o=["curPoi","notSel"];const c=`common.colorScheme.${s}`;let{mode:m,className:f}=e;f&&o.push(f);const d=()=>{l.switch()};return Ve(async()=>{l=new ft}),a.$$set=_=>{"mode"in _&&t(0,m=_.mode),"className"in _&&t(6,f=_.className)},[m,s,r,o,c,d,f]}class We extends me{constructor(e){super();_e(this,e,dt,_t,de,{mode:0,className:6})}}function pt(a){let e,t=a[2](`lang.${a[0]}`)+"",s,r;return{c(){e=p("a"),s=F(t),this.h()},l(l){e=v(l,"A",{class:!0,href:!0});var o=g(e);s=Y(o,t),o.forEach(u),this.h()},h(){n(e,"class","colinher"),n(e,"href",r=`/${a[0]}${a[1]}`)},m(l,o){y(l,e,o),h(e,s)},p(l,[o]){o&5&&t!==(t=l[2](`lang.${l[0]}`)+"")&&he(s,t),o&3&&r!==(r=`/${l[0]}${l[1]}`)&&n(e,"href",r)},i:ae,o:ae,d(l){l&&u(e)}}}function vt(a,e,t){let s,r,l,o,c,m;return O(a,Xe,f=>t(5,c=f)),O(a,Ee,f=>t(2,m=f)),a.$$.update=()=>{a.$$.dirty&32&&t(1,{route:s,lang:r}=c.stuff,s,(t(3,r),t(5,c))),a.$$.dirty&24&&t(0,o=l[r])},t(4,l={en:"ru",ru:"en"}),[o,s,m,r,l,c]}class gt extends me{constructor(e){super();_e(this,e,vt,pt,de,{})}}function bt(a){let e,t=a[0]("common.copyright",{crYear:new Date().getFullYear()})+"",s,r,l,o,c,m,f;return{c(){e=p("footer"),s=F(t),r=I(),l=p("a"),o=p("i"),c=He("svg"),m=He("path"),f=F(`
                github`),this.h()},l(d){e=v(d,"FOOTER",{class:!0});var _=g(e);s=Y(_,t),r=D(_),l=v(_,"A",{class:!0,href:!0});var w=g(l);o=v(w,"I",{class:!0});var i=g(o);c=Je(i,"svg",{height:!0,"aria-hidden":!0,viewBox:!0,version:!0,width:!0,"data-view-component":!0,class:!0});var $=g(c);m=Je($,"path",{"fill-rule":!0,d:!0}),g(m).forEach(u),$.forEach(u),i.forEach(u),f=Y(w,`
                github`),w.forEach(u),_.forEach(u),this.h()},h(){n(m,"fill-rule","evenodd"),n(m,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),n(c,"height","32"),n(c,"aria-hidden","true"),n(c,"viewBox","0 0 16 16"),n(c,"version","1.1"),n(c,"width","32"),n(c,"data-view-component","true"),n(c,"class","octicon octicon-mark-github v-align-middle"),n(o,"class","p-1"),n(l,"class","p-3"),n(l,"href","https://github.com/agamurian/skis"),n(e,"class","p-5 text-center h6 m-0 mt-10 svelte-7ujo3")},m(d,_){y(d,e,_),h(e,s),h(e,r),h(e,l),h(l,o),h(o,c),h(c,m),h(l,f)},p(d,_){_&1&&t!==(t=d[0]("common.copyright",{crYear:new Date().getFullYear()})+"")&&he(s,t)},d(d){d&&u(e)}}}function wt(a){let e,t=bt(a);return{c(){t&&t.c(),e=te()},l(s){t&&t.l(s),e=te()},m(s,r){t&&t.m(s,r),y(s,e,r)},p(s,[r]){t.p(s,r)},i:ae,o:ae,d(s){t&&t.d(s),s&&u(e)}}}function $t(a,e,t){let s;return O(a,Ee,r=>t(0,s=r)),[s]}class kt extends me{constructor(e){super();_e(this,e,$t,wt,de,{})}}const{window:Ne}=tt;function yt(a){let e=!1,t=()=>{e=!1},s,r,l,o,c,m,f,d,_,w,i,$,k,Se,T,U,A,se=a[4]("menu.home")+"",pe,ve,Ie,H,C,re=a[4]("menu.about")+"",ge,be,De,J,j,Te,L,le,P,Ae,Q,K,N,Ce,Oe;return xe(a[8]),j=new We({props:{mode:"string",className:"colinher nav-link"}}),P=new We({}),K=new gt({}),{c(){r=p("nav"),l=p("div"),o=p("div"),c=p("i"),m=I(),f=p("div"),d=p("img"),w=I(),i=p("a"),$=F("agamurian"),Se=I(),T=p("ul"),U=p("li"),A=p("a"),pe=F(se),Ie=I(),H=p("li"),C=p("a"),ge=F(re),De=I(),J=p("li"),ne(j.$$.fragment),Te=I(),L=p("div"),le=p("div"),ne(P.$$.fragment),Ae=I(),Q=p("div"),ne(K.$$.fragment),this.h()},l(b){r=v(b,"NAV",{class:!0});var E=g(r);l=v(E,"DIV",{class:!0,style:!0});var we=g(l);o=v(we,"DIV",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var je=g(o);c=v(je,"I",{class:!0}),g(c).forEach(u),je.forEach(u),m=D(we),f=v(we,"DIV",{class:!0,id:!0});var M=g(f);d=v(M,"IMG",{src:!0,class:!0,width:!0,height:!0,style:!0}),w=D(M),i=v(M,"A",{class:!0,href:!0});var Pe=g(i);$=Y(Pe,"agamurian"),Pe.forEach(u),Se=D(M),T=v(M,"UL",{class:!0});var W=g(T);U=v(W,"LI",{class:!0});var Ke=g(U);A=v(Ke,"A",{class:!0,href:!0});var qe=g(A);pe=Y(qe,se),qe.forEach(u),Ke.forEach(u),Ie=D(W),H=v(W,"LI",{class:!0});var Be=g(H);C=v(Be,"A",{class:!0,href:!0});var Fe=g(C);ge=Y(Fe,re),Fe.forEach(u),Be.forEach(u),De=D(W),J=v(W,"LI",{class:!0});var Ye=g(J);ce(j.$$.fragment,Ye),Ye.forEach(u),W.forEach(u),Te=D(M),L=v(M,"DIV",{class:!0,style:!0});var $e=g(L);le=v($e,"DIV",{});var ze=g(le);ce(P.$$.fragment,ze),ze.forEach(u),Ae=D($e),Q=v($e,"DIV",{class:!0});var Ge=g(Q);ce(K.$$.fragment,Ge),Ge.forEach(u),$e.forEach(u),M.forEach(u),we.forEach(u),E.forEach(u),this.h()},h(){n(c,"class","fa-solid fa-bars p-1 m-1"),n(o,"class","navbar-toggler svelte-ib2un2"),n(o,"type","button"),n(o,"data-bs-toggle","collapse"),n(o,"data-bs-target","#navbarSupportedContent"),n(o,"aria-controls","navbarSupportedContent"),n(o,"aria-expanded","false"),n(o,"aria-label","Toggle navigation"),et(d.src,_="/xyz.png")||n(d,"src",_),n(d,"class","hovery"),n(d,"width","26"),n(d,"height","26"),R(d,"margin-right","8px"),R(d,"filter","hue-rotate("+(350-a[0])+"deg)"),n(i,"class","navbar-brand svelte-ib2un2"),n(i,"href",k="/"+a[3]+"/"),n(A,"class","nav-link"),n(A,"href",ve="/"+a[3]+"/"),ke(A,"active",a[2]===`/${a[3]}/`),n(U,"class","nav-item"),n(C,"class","nav-link"),n(C,"href",be="/"+a[3]+"/about/"),ke(C,"active",a[2]===`/${a[3]}/about/`),n(H,"class","nav-item"),n(J,"class","nav-item d-lg-none"),n(T,"class","navbar-nav me-auto mb-2 mb-lg-0"),n(Q,"class","ms-2 text-white"),n(L,"class","flex-wrap flex-row btn nav pl-2 text-white m-2"),R(L,"color","inherit"),R(L,"padding-left","0.6em"),n(f,"class","collapse navbar-collapse"),n(f,"id","navbarSupportedContent"),n(l,"class","container-fluid d-flex flex-wrap flex-column flex-lg-row justify-content-start align-items-start inline inline-block"),R(l,"background-color","#00000099"),n(r,"class","nav sticky-top navbar-expand-lg rounded-0 sm opacy svelte-ib2un2")},m(b,E){y(b,r,E),h(r,l),h(l,o),h(o,c),h(l,m),h(l,f),h(f,d),h(f,w),h(f,i),h(i,$),h(f,Se),h(f,T),h(T,U),h(U,A),h(A,pe),h(T,Ie),h(T,H),h(H,C),h(C,ge),h(T,De),h(T,J),ue(j,J,null),h(f,Te),h(f,L),h(L,le),ue(P,le,null),h(L,Ae),h(L,Q),ue(K,Q,null),a[9](r),N=!0,Ce||(Oe=Re(Ne,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(t,100),a[8]()}),Ce=!0)},p(b,[E]){E&1&&!e&&(e=!0,clearTimeout(s),scrollTo(Ne.pageXOffset,b[0]),s=setTimeout(t,100)),(!N||E&1)&&R(d,"filter","hue-rotate("+(350-b[0])+"deg)"),(!N||E&8&&k!==(k="/"+b[3]+"/"))&&n(i,"href",k),(!N||E&16)&&se!==(se=b[4]("menu.home")+"")&&he(pe,se),(!N||E&8&&ve!==(ve="/"+b[3]+"/"))&&n(A,"href",ve),E&12&&ke(A,"active",b[2]===`/${b[3]}/`),(!N||E&16)&&re!==(re=b[4]("menu.about")+"")&&he(ge,re),(!N||E&8&&be!==(be="/"+b[3]+"/about/"))&&n(C,"href",be),E&12&&ke(C,"active",b[2]===`/${b[3]}/about/`)},i(b){N||(z(j.$$.fragment,b),z(P.$$.fragment,b),z(K.$$.fragment,b),N=!0)},o(b){G(j.$$.fragment,b),G(P.$$.fragment,b),G(K.$$.fragment,b),N=!1},d(b){b&&u(r),fe(j),fe(P),fe(K),a[9](null),Ce=!1,Oe()}}}function Et(a,e,t){let s,r,l,o,c,m;O(a,Xe,k=>t(7,o=k)),O(a,it,k=>t(3,c=k)),O(a,Ee,k=>t(4,m=k));let f;const d={dark:["navbar-light","bg-light"],light:["navbar-dark","bg-dark"]};let _;const w=k=>{!_||(_.classList.remove("navbar-dark","bg-dark","navbar-light","bg-light"),_.classList.add(...d[k]))};Ve(async()=>{w(window.document.querySelector("html").dataset.colorScheme),Me.subscribe(k=>{w(k)})});function i(){t(0,f=Ne.pageYOffset)}function $(k){at[k?"unshift":"push"](()=>{_=k,t(1,_)})}return a.$$.update=()=>{a.$$.dirty&128&&t(5,{route:s,lang:r}=o.stuff,s,(t(6,r),t(7,o))),a.$$.dirty&96&&t(2,l=`/${r}${s}`)},[f,_,l,c,m,s,r,o,i,$]}class St extends me{constructor(e){super();_e(this,e,Et,yt,de,{})}}function It(a){let e,t,s,r,l,o,c,m,f,d;e=new St({});const _=a[1].default,w=ot(_,a,a[0],null);return f=new kt({}),{c(){ne(e.$$.fragment),t=I(),s=p("div"),w&&w.c(),r=I(),l=p("br"),o=I(),c=p("div"),m=I(),ne(f.$$.fragment),this.h()},l(i){ce(e.$$.fragment,i),t=D(i),s=v(i,"DIV",{class:!0});var $=g(s);w&&w.l($),$.forEach(u),r=D(i),l=v(i,"BR",{}),o=D(i),c=v(i,"DIV",{style:!0}),g(c).forEach(u),m=D(i),ce(f.$$.fragment,i),this.h()},h(){n(s,"class","colinher p-0 svelte-1ps839v"),R(c,"height","10em"),R(c,"z-index","-100"),R(c,"background","inherit")},m(i,$){ue(e,i,$),y(i,t,$),y(i,s,$),w&&w.m(s,null),y(i,r,$),y(i,l,$),y(i,o,$),y(i,c,$),y(i,m,$),ue(f,i,$),d=!0},p(i,$){w&&w.p&&(!d||$&1)&&st(w,_,i,i[0],d?lt(_,i[0],$,null):rt(i[0]),null)},i(i){d||(z(e.$$.fragment,i),z(w,i),z(f.$$.fragment,i),d=!0)},o(i){G(e.$$.fragment,i),G(w,i),G(f.$$.fragment,i),d=!1},d(i){fe(e,i),i&&u(t),i&&u(s),w&&w.d(i),i&&u(r),i&&u(l),i&&u(o),i&&u(c),i&&u(m),fe(f,i)}}}function Dt(a){let e,t,s=It(a);return{c(){s&&s.c(),e=te()},l(r){s&&s.l(r),e=te()},m(r,l){s&&s.m(r,l),y(r,e,l),t=!0},p(r,[l]){s.p(r,l)},i(r){t||(z(s),t=!0)},o(r){G(s),t=!1},d(r){s&&s.d(r),r&&u(e)}}}const Rt=async({url:a})=>{const{pathname:e}=a,t=`${e.match(/\w+?(?=\/|$)/)||""}`,s=e.replace(new RegExp(`^/${t}`),"");return await nt(t,s),{stuff:{route:s,lang:t}}};function Tt(a,e,t){let{$$slots:s={},$$scope:r}=e;return Ve(async()=>{await Ue(()=>import("../chunks/bootstrap.bundle.min-3e95f5b0.js").then(function(l){return l.b}),[]),await Ue(()=>import("../chunks/all.min-c9a74dcf.js"),[])}),a.$$set=l=>{"$$scope"in l&&t(0,r=l.$$scope)},[r,s]}class Mt extends me{constructor(e){super();_e(this,e,Tt,Dt,de,{})}}export{Mt as default,Rt as load};
