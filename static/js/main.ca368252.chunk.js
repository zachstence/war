(this.webpackJsonpwar=this.webpackJsonpwar||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(9),n=c.n(r),i=c(4),j=c(2),l=c(3),h=c(8),d=c(10),u=c(11),b=["spades","hearts","diamonds","clubs"],o=[1,2,3,4,5,6,7,8,9,10,11,12,13],O=function(){function e(t){Object(d.a)(this,e),this.cards=[],t?this.cards=t:this.init()}return Object(u.a)(e,[{key:"init",value:function(){var e,t=Object(h.a)(b);try{for(t.s();!(e=t.n()).done;){var c,a=e.value,s=Object(h.a)(o);try{for(s.s();!(c=s.n()).done;){var r=c.value;this.cards.push({suit:a,rank:r})}}catch(n){s.e(n)}finally{s.f()}}}catch(n){t.e(n)}finally{t.f()}}},{key:"draw",value:function(){var e=this.cards.shift();if(!e)throw new Error;return e}},{key:"pushBottom",value:function(){var e;(e=this.cards).push.apply(e,arguments)}},{key:"shuffle",value:function(){for(var e=this.cards.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),c=[this.cards[t],this.cards[e]];this.cards[e]=c[0],this.cards[t]=c[1]}}},{key:"split",value:function(){var t=this.cards.slice(0,this.cards.length/2),c=this.cards.slice(this.cards.length/2,this.cards.length);return[new e(t),new e(c)]}},{key:"getCards",value:function(){return this.cards}},{key:"size",value:function(){return this.cards.length}}]),e}(),f=O,p=(c(16),c(0)),v=function(e){switch(e){case"spades":return"\u2660";case"hearts":return"\u2665";case"diamonds":return"\u2666";case"clubs":return"\u2663"}},m=function(e){switch(e){case 1:return"A";case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:return e.toString();case 11:return"J";case 12:return"Q";case 13:return"K"}},x=function(e){var t=e.rank,c=e.suit;return e.faceUp?Object(p.jsxs)("div",{className:"card",children:[m(t),v(c)]}):Object(p.jsx)("div",{className:"card face-down"})},w=(c(18),function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),n=Object(l.a)(r,2),h=n[0],d=n[1],u=Object(a.useState)(),b=Object(l.a)(u,2),o=b[0],O=b[1],v=Object(a.useState)([]),m=Object(l.a)(v,2),w=m[0],y=m[1],k=Object(a.useState)(!1),g=Object(l.a)(k,2),N=g[0],E=g[1],S=Object(a.useState)(!0),z=Object(l.a)(S,2),U=z[0],P=z[1],A=Object(a.useState)(!0),B=Object(l.a)(A,2),C=B[0],J=B[1],M=function(){var e=new f;e.shuffle();var t=e.split(),c=Object(l.a)(t,2),a=c[0],r=c[1];s(a),O(r)};Object(a.useEffect)(M,[]);var R=function(e){return e.map((function(e){return Object(p.jsx)(x,Object(j.a)({},e),"".concat(e.rank).concat(e.suit))}))};return c&&o?Object(p.jsxs)("main",{className:"game".concat(N?" war":""),children:[Object(p.jsxs)("div",{className:"player",children:[Object(p.jsx)("h2",{children:"PLAYER 1"}),Object(p.jsxs)("p",{children:[c.size()," cards remaining"]}),Object(p.jsx)("div",{className:"played-cards",children:R(h)})]}),Object(p.jsx)("div",{className:"middle",children:U?Object(p.jsx)("button",{onClick:function(){if(!c||!o)throw new Error;if(P(!1),N){if(!h||!w)throw new Error;d([].concat(Object(i.a)(h),[Object(j.a)(Object(j.a)({},c.draw()),{},{faceUp:!1}),Object(j.a)(Object(j.a)({},c.draw()),{},{faceUp:!0})])),y([].concat(Object(i.a)(w),[Object(j.a)(Object(j.a)({},o.draw()),{},{faceUp:!1}),Object(j.a)(Object(j.a)({},o.draw()),{},{faceUp:!0})]))}else d([Object(j.a)(Object(j.a)({},c.draw()),{},{faceUp:!0})]),y([Object(j.a)(Object(j.a)({},o.draw()),{},{faceUp:!0})])},children:"Play"}):Object(p.jsx)("button",{onClick:function(){if(!h||!w||!c||!o)throw new Error;var e=h[h.length-1],t=w[w.length-1];e.rank===t.rank?E(!0):(e.rank>t.rank?c.pushBottom.apply(c,Object(i.a)(h).concat(Object(i.a)(w))):t.rank>e.rank&&o.pushBottom.apply(o,Object(i.a)(w).concat(Object(i.a)(h))),d([]),y([]),E(!1),0!==c.size()&&0!==o.size()||J(!0)),P(!0)},children:"Evaluate"})}),Object(p.jsxs)("div",{className:"player",children:[Object(p.jsx)("h2",{children:"PLAYER 2"}),Object(p.jsxs)("p",{children:[o.size()," cards remaining"]}),Object(p.jsx)("div",{className:"played-cards",children:R(w)})]})]}):C?Object(p.jsxs)("main",{className:"game-over",children:[Object(p.jsx)("h2",{children:"Game Over"}),0===(null===c||void 0===c?void 0:c.size())?Object(p.jsx)("h3",{children:"Player 2 Won!"}):Object(p.jsx)("h3",{children:"Player 1 Won!"}),Object(p.jsx)("button",{onClick:M,children:"Play Again"})]}):null}),y=(c(19),function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:"WAR"})}),Object(p.jsx)(w,{}),Object(p.jsx)("footer",{children:Object(p.jsx)("a",{href:"https://github.com/zachstence/war",children:Object(p.jsx)("img",{src:"github.png",alt:"GitHub Icon"})})})]})});n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ca368252.chunk.js.map