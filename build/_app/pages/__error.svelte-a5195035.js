import{S as K,i as N,s as O,e as h,t as S,k as L,c as _,a as d,h as T,d as i,m as q,b,g as Q,J as t,j as V,E as F,I as G}from"../chunks/index-930d7b4d.js";import{a as R,t as U}from"../chunks/index-76b44084.js";import{p as W}from"../chunks/stores-ddef0345.js";import"../chunks/preload-helper-bedf4d66.js";function X(a){let s,e,n,u=a[2]("error.oops")+"",m,v,r,g=a[2](`error.${a[0]}`,{default:a[2]("error.default")})+"",y,j,E,p,H,A,k,f,w=a[2]("error.[backToHome]")+"",I,D;return{c(){s=h("div"),e=h("div"),n=h("h1"),m=S(u),v=L(),r=h("h2"),y=S(g),j=L(),E=h("p"),p=h("small"),H=S(a[0]),A=L(),k=h("div"),f=h("a"),I=S(w),this.h()},l(l){s=_(l,"DIV",{class:!0});var o=d(s);e=_(o,"DIV",{class:!0});var c=d(e);n=_(c,"H1",{});var C=d(n);m=T(C,u),C.forEach(i),v=q(c),r=_(c,"H2",{});var J=d(r);y=T(J,g),J.forEach(i),j=q(c),E=_(c,"P",{});var M=d(E);p=_(M,"SMALL",{class:!0});var P=d(p);H=T(P,a[0]),P.forEach(i),M.forEach(i),A=q(c),k=_(c,"DIV",{});var z=d(k);f=_(z,"A",{href:!0,class:!0});var B=d(f);I=T(B,w),B.forEach(i),z.forEach(i),c.forEach(i),o.forEach(i),this.h()},h(){b(p,"class","text-secondary"),b(f,"href",D=a[1].origin),b(f,"class","btn btn-primary"),b(e,"class","error--wrapper h-100 d-flex flex-wrap flex-column align-items-center justify-content-center svelte-ibmu22"),b(s,"class","d-block mx-auto vw-100 vh-100")},m(l,o){Q(l,s,o),t(s,e),t(e,n),t(n,m),t(e,v),t(e,r),t(r,y),t(e,j),t(e,E),t(E,p),t(p,H),t(e,A),t(e,k),t(k,f),t(f,I)},p(l,[o]){o&4&&u!==(u=l[2]("error.oops")+"")&&V(m,u),o&5&&g!==(g=l[2](`error.${l[0]}`,{default:l[2]("error.default")})+"")&&V(y,g),o&1&&V(H,l[0]),o&4&&w!==(w=l[2]("error.[backToHome]")+"")&&V(I,w),o&2&&D!==(D=l[1].origin)&&b(f,"href",D)},i:F,o:F,d(l){l&&i(s)}}}const ae=async({stuff:a,props:s})=>(await R(a.lang,"error"),{});function Y(a,s,e){let n,u;G(a,W,r=>e(3,n=r)),G(a,U,r=>e(2,u=r));let{status:m=n.status}=s,{url:v=n.url}=s;return a.$$set=r=>{"status"in r&&e(0,m=r.status),"url"in r&&e(1,v=r.url)},[m,v,u]}class re extends K{constructor(s){super();N(this,s,Y,X,O,{status:0,url:1})}}export{re as default,ae as load};
