(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,n){e.exports=n(364)},201:function(e,t,n){},220:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setGoods",function(){return g});var r={};n.r(r),n.d(r,"setSort",function(){return I}),n.d(r,"setSearch",function(){return B});var c={};n.r(c),n.d(c,"addToCart",function(){return M}),n.d(c,"removeFromCart",function(){return q});var o=n(0),i=n.n(o),l=n(32),u=n.n(l),s=n(26),d=n(18),m=n(158),f=n.n(m),p=n(16),E={isReady:!1,items:null},y=n(57),b=n(179),v={items:[]},h={searchQuery:"",sortBy:"all"},O=Object(d.c)({goods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCT":return Object(p.a)({},e,{items:t.payload,isReady:!0});case"SET_IS_READY":return Object(p.a)({},e,{isReady:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return Object(p.a)({},e,Object(y.a)({items:[].concat(Object(b.a)(e.items),[t.payload])},t.payload.id,(e[t.payload.id]||0)+1));case"REMOVE_PRODUCT":return Object(p.a)({},e,Object(y.a)({items:e[t.payload]>1?function(e){var n=e.filter(function(e){return e.id!==t.payload}),a=e.filter(function(e){return e.id===t.payload});return a.splice(0,1),a.concat(n)}(e.items):e.items.filter(function(e){return e.id!==t.payload})},t.payload,e[t.payload]-1));default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT":return Object(p.a)({},e,{sortBy:t.payload});case"SET_QUERY":return Object(p.a)({},e,{searchQuery:t.payload});default:return e}}}),g=(n(201),function(e){return{type:"SET_PRODUCT",payload:e}}),j=n(159),C=n(160),w=n(180),R=n(161),T=n(181),k=n(162),S=n.n(k),_=n(370),D=n(373),I=(n(219),n(220),function(e){return{type:"SET_SORT",payload:e}}),B=function(e){return{type:"SET_QUERY",payload:e}},U=n(374),P=n(97),x=n(369),L=function(e){var t=e.setSort,n=e.sortBy,a=e.setSearch,r=e.searchQuery;return i.a.createElement(U.a,{text:!0,horizontal:"true"},i.a.createElement(U.a.Item,{header:!0},"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"),i.a.createElement(U.a.Item,{active:"all"===n,onClick:t.bind(void 0,"all")},i.a.createElement("strong",null,"\u0412\u0441\u0456")),i.a.createElement(U.a.Item,{active:"title"===n,onClick:t.bind(void 0,"title")},i.a.createElement("strong",null,"\u041d\u0430\u0437\u0432\u0430")),i.a.createElement(U.a.Item,{active:"priceLow"===n,onClick:t.bind(void 0,"priceLow")},i.a.createElement("strong",null,"\u0426\u0456\u043d\u0430(\u0434\u0435\u0448\u0435\u0432\u0456)")," "),i.a.createElement(U.a.Item,{active:"priceHigh"===n,onClick:t.bind(void 0,"priceHigh")},i.a.createElement("strong",null,"\u0426\u0456\u043d\u0430(\u0434\u043e\u0440\u043e\u0433\u0456)")),i.a.createElement(P.a,null,i.a.createElement(x.a,{icon:"search",onChange:function(e){return a(e.target.value)},placeholder:"\u0417\u043d\u0430\u0439\u0442\u0438",value:r})))},Q=Object(s.b)(function(e){return{sortBy:e.sort.sortBy}},function(e){return Object(p.a)({},Object(d.b)(r,e))})(L),M=function(e){return{type:"ADD_PRODUCT",payload:e}},q=function(e){return{type:"REMOVE_PRODUCT",payload:e}},A=n(372),H=n(365),G=n(178),N=n(371),W=function(e){var t=e.title,n=e.id,a=e.image,r=e.removeFromCart,c=e.quantity;return i.a.createElement(A.a,{selection:!0,divided:!0,verticalAlign:"middle"},i.a.createElement(A.a.Item,null,i.a.createElement(A.a.Content,{floated:"right"},i.a.createElement(H.a,{onClick:r.bind(void 0,n),color:"red"},"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438")),i.a.createElement(G.a,{avatar:!0,src:a}),i.a.createElement(A.a.Content,{floated:"left"},t,i.a.createElement("br",null),"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c:\xa0",c[n],"\xa0\u0448\u0442")))},Y=function(e){var t=e.total,n=e.count,a=e.items,r=e.quantity;return i.a.createElement(U.a,null,i.a.createElement(U.a.Item,{name:"browse"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0456\u0433\u043e\u0440"),i.a.createElement(U.a.Menu,{position:"right"},i.a.createElement(U.a.Item,{name:"signup"},"\u0412\u0441\u044c\u043e\u0433\u043e: \xa0 ",i.a.createElement("strong",null,t),"\xa0\u0433\u0440\u043d."),i.a.createElement(N.a,{trigger:i.a.createElement(U.a.Item,{name:"help"},"\u041a\u043e\u0448\u0438\u043a (",i.a.createElement("strong",null,n),")"),content:a.map(function(e,t){return i.a.createElement(W,Object.assign({quantity:r,key:t},e))}),on:"click",hideOnScroll:!0})))},F=n(177),J=n.n(F),V=Object(s.b)(function(e){var t=e.cart;return{total:t.items.reduce(function(e,t){return e+t.price},0),count:t.items.length,items:J()(t.items,function(e){return e.id}),quantity:t}},function(e){return Object(p.a)({},Object(d.b)(c,e))})(Y),z=n(28),$=function(e){var t=e.title,n=e.image,a=e.price,r=e.addToCart,c=e.addedCount,o=e.date,l=e.descr;return i.a.createElement(D.a,null,i.a.createElement(G.a,{src:n,wrapped:!0,ui:!1}),i.a.createElement(D.a.Content,null,i.a.createElement(D.a.Header,null,t),i.a.createElement(D.a.Meta,null,i.a.createElement("span",{className:"date"},o)),i.a.createElement(D.a.Description,null,l)),i.a.createElement(D.a.Content,{extra:!0,className:"extra"},i.a.createElement(z.a,{name:"currency",className:"currency_icon"}),"\xa0 ",a," \xa0\u0433\u0440\u043d."),i.a.createElement(H.a,{onClick:r.bind(void 0,e)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 ",c>0&&"(".concat(c,")")))},K=Object(s.b)(function(e,t){var n=e.cart,a=t.id;return{addedCount:n.items.reduce(function(e,t){return e+(t.id===a?1:0)},0)}},function(e){return Object(p.a)({},Object(d.b)(c,e))})($),X=function(e){function t(){return Object(j.a)(this,t),Object(w.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setGoods;S.a.get("/goods.json").then(function(t){e(t.data)})}},{key:"render",value:function(){var e=this.props,t=e.goods,n=e.isReady;return i.a.createElement(_.a,null,i.a.createElement(V,null),i.a.createElement(Q,null),i.a.createElement(D.a.Group,{itemsPerRow:4},n?t.map(function(e,t){return i.a.createElement(K,Object.assign({key:t},e))}):i.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}},"Loading...")))}}]),t}(i.a.Component),Z=n(79),ee=n.n(Z),te=function(e,t,n){return function(e,t){switch(t){case"priceHigh":return ee()(e,"price","desc");case"priceLow":return ee()(e,"price","asc");case"title":return ee()(e,"title","asc");case"all":default:return e}}(function(e,t){return e.filter(function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0})}(e,n),t)},ne=Object(s.b)(function(e){var t=e.goods,n=e.sort;return{goods:t.items&&te(t.items,n.sortBy,n.searchQuery),isReady:t.isReady}},function(e){return Object(p.a)({},Object(d.b)(a,e))})(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=Object(d.d)(O,Object(d.a)(f.a));u.a.render(i.a.createElement(s.a,{store:ae},i.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[192,1,2]]]);
//# sourceMappingURL=main.a382b695.chunk.js.map