(this["webpackJsonpstart-wars-duels"]=this["webpackJsonpstart-wars-duels"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/duel-pic.266338eb.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/starships-pic.a02e14eb.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/millennium-falcon-011.3e98ee67.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/stormtrooper.adcf3351.png"},42:function(e,t,a){e.exports=a.p+"static/media/starship3.48882771.png"},43:function(e,t,a){e.exports=a.p+"static/media/mandalorian.d2b278cf.png"},47:function(e,t,a){e.exports=a(58)},58:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),s=a(18),l=a.n(s),o=a(23),m=a(17),u=a(73),p=a(75),f=Object(u.a)((function(){return{container:{padding:"2rem"}}})),d=function(e){var t=e.children,a=f();return i.a.createElement(p.a,{className:a.container,maxWidth:"md"},t)},E=a(83),h=a(76),b=a(77),g=a(78),j=Object(u.a)({link:{textDecoration:"none"},root:{marginTop:30},media:{height:250},title:{textAlign:"center"}}),x=function(e){var t=e.title,a=e.background,n=e.route,r=j();return i.a.createElement(o.b,{className:r.link,to:n},i.a.createElement(E.a,{className:r.root},i.a.createElement(h.a,null,i.a.createElement(b.a,{"data-testid":"card-title",className:r.title,title:t}),i.a.createElement(g.a,{"data-testid":"card-img",className:r.media,image:a}))))},y=a(34),O=a.n(y),w=a(35),v=a.n(w),S=function(){return i.a.createElement(d,null,i.a.createElement(x,{route:"/heroes",title:"Hero vs. Hero",background:O.a}),i.a.createElement(x,{route:"/starships",title:"Starship vs. Starship",background:v.a}))},k=a(12),N=a(38),C=a(81),A=a(79),H=a(24),R=a(80),W=a(82),I=Object(u.a)({link:{textDecoration:"none"},card:{marginTop:36},content:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%"},img:{height:220,width:"auto"},title:{textAlign:"center"}}),M=function(e){var t=e.name,a=e.unit,n=e.image,r=I();return i.a.createElement(E.a,{className:r.card},i.a.createElement(h.a,{className:r.content},i.a.createElement(b.a,{"data-testid":"contestant-card-title",className:r.title,title:t}),i.a.createElement("img",{className:r.img,src:n,alt:n}),i.a.createElement(H.a,{"data-testid":"contestant-card-unit",color:"textSecondary"},a)))},P=a(28),T=a.n(P),D=a(15),F=a(39),B=function(e,t){return t.filter((function(e){return"unknown"!==e.crew&&"unknown"!==e.mass})).map((function(t){var a={name:t.name,crew:t.crew&&+t.crew},n={name:t.name,mass:t.mass&&+t.mass};return"starships"===e?a:n}))},J=function(){var e=Object(F.a)(T.a.mark((function e(t){var a,n,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="heroes"===t?"people":"starships",e.prev=1,e.next=4,fetch("https://swapi.co/api/"+a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,c=B(t,r.results);case 9:if(!r.next){e.next=19;break}return e.next=12,fetch(r.next);case 12:return n=e.sent,e.next=15,n.json();case 15:r=e.sent,c=[].concat(Object(D.a)(c),Object(D.a)(B(t,r.results))),e.next=9;break;case 19:return e.abrupt("return",c);case 22:e.prev=22,e.t0=e.catch(1),console.error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}(),$=function(e){var t=Object(c.useState)([]),a=Object(k.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(!0),s=Object(k.a)(i,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){J(e).then((function(e){return r(e)})).catch().finally((function(){return o(!1)}))}),[e]),[n,l]},q=a(40),z=a.n(q),G=a(41),K=a.n(G),L=a(42),Q=a.n(L),U=a(43),V=a.n(U),X=function(e){return"starships"===e};!function(e){e.STARSHIPS="starships",e.HEROES="heroes"}(n||(n={})),function(e){e.CREW="crew",e.MASS="mass"}(r||(r={}));var Y=function(e,t){var a,n=(a=t.length,Math.floor(Math.random()*a));return X(e)?{name:t[n].name,crew:t[n].crew}:{name:t[n].name,mass:t[n].mass}},Z=function(e,t){var a=Y(t,e),n=Y(t,e);return a.name===n.name&&(n=Object(N.a)({},n,{},Y(t,e))),{player1:a,player2:n}},_=function(e){var t=e.type,a=$(t),n=Object(k.a)(a,2),s=n[0],l=n[1],o=Object(c.useState)({}),m=Object(k.a)(o,2),u=m[0],p=m[1],f=Object(c.useState)(!0),E=Object(k.a)(f,2),h=E[0],b=E[1],g=Object(c.useState)(0),j=Object(k.a)(g,2),x=j[0],y=j[1],O=Object(c.useState)(0),w=Object(k.a)(O,2),v=w[0],S=w[1],N=Object(c.useState)(""),I=Object(k.a)(N,2),P=I[0],T=I[1],D=X(t)?r.CREW:r.MASS,F=X(t)?z.a:K.a,B=X(t)?Q.a:V.a;return Object(c.useEffect)((function(){b(!0),l||(p(Z(s,t)),b(!1))}),[l,s,t]),Object(c.useEffect)((function(){if(!h&&!l){var e=u.player1,t=u.player2;e[D]>t[D]?(y(x+1),T(e.name)):e[D]<t[D]?(S(v+1),T(t.name)):T("draw!")}}),[h,l,u]),i.a.createElement(d,null,h||l?i.a.createElement(C.a,{display:"flex",justifyContent:"center"},i.a.createElement(A.a,null)):i.a.createElement(i.a.Fragment,null,u.player1&&u.player2&&i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{display:"flex",justifyContent:"center"},i.a.createElement(H.a,{variant:"h3",component:"h5"},"Winner: ",P)),i.a.createElement(R.a,{container:!0,spacing:2},i.a.createElement(R.a,{item:!0,xs:12,md:6},i.a.createElement(M,{name:u.player1.name,unit:"".concat(D,": ").concat(u.player1[D]),image:F})),i.a.createElement(R.a,{item:!0,xs:12,md:6},i.a.createElement(M,{name:u.player2.name,unit:"".concat(D,": ").concat(u.player2[D]),image:B})),i.a.createElement(R.a,{item:!0,xs:12,md:6},i.a.createElement(C.a,{display:"flex",justifyContent:"center"},"Points: ",x)),i.a.createElement(R.a,{item:!0,xs:12,md:6},i.a.createElement(C.a,{display:"flex",justifyContent:"center"},"Points: ",v)))),i.a.createElement(C.a,{display:"flex",justifyContent:"center"},i.a.createElement(W.a,{variant:"contained",color:"primary",onClick:function(){return p(Z(s,t))}},"Fight Again!"))))},ee=function(){return i.a.createElement(d,null,i.a.createElement("p",null,"404 sorry, this page does not exist"))},te=function(){return i.a.createElement(o.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/"},i.a.createElement(S,null)),i.a.createElement(m.a,{path:"/heroes"},i.a.createElement(_,{type:n.HEROES})),i.a.createElement(m.a,{path:"/starships"},i.a.createElement(_,{type:n.STARSHIPS})),i.a.createElement(m.a,{path:"*"},i.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.93d1e492.chunk.js.map