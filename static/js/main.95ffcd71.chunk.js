(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){e.exports={"bg-form":"form_bg-form__1dV-w",error:"form_error__1Zq8Z","btn-red":"form_btn-red__3Qtqe","btn-submit":"form_btn-submit__hkRZH"}},26:function(e,t,c){e.exports={"bg-landing":"landing_bg-landing__3wHLP","bg-black":"landing_bg-black__2bBKV","title-app":"landing_title-app__1TiPO","btn-yellow":"landing_btn-yellow__1Np3z"}},27:function(e,t,c){e.exports={"card-container":"cards_card-container__1OgC4",paginado:"cards_paginado__25v0u","btn-green":"cards_btn-green__3jgbG"}},38:function(e,t,c){e.exports={"btn-green":"navBar_btn-green__3kASJ"}},42:function(e,t,c){e.exports={"bg-detail":"detail_bg-detail__3rKCJ","btn-back":"detail_btn-back__oZAsd"}},45:function(e,t,c){e.exports={card:"card_card__1py-W"}},52:function(e,t,c){},53:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(29),i=c.n(r),s=(c(52),c(5)),l=c(9),o=c(6),b=(c(53),c(16)),u=c(26),j=c.n(u),d=c(2);var p=function(){return Object(d.jsx)("div",{className:j.a["bg-landing"],children:Object(d.jsxs)("div",{className:j.a["bg-black"],children:[Object(d.jsx)("h1",{className:j.a["title-app"],children:" Bienvenido a mi APP FOOD "}),Object(d.jsx)("h3",{children:"Todas tus recetas favoritas a un click"}),Object(d.jsx)(b.c,{to:"/home",children:Object(d.jsx)("button",{className:j.a["btn-yellow"],children:"Home"})})]})})},O=c(4),h=c(64),m=c(12),f=c(42),x=c.n(f);var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(O.p)().id,i=function(){var e=Object(l.a)(Object(s.a)().mark((function e(t){var c,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/recipes/".concat(t));case 3:c=e.sent,a=c.data,n(a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){i(r)}),[r]);var u=c.name,j=c.image,p=c.summary,m=c.healthScore,f=c.stepToStep,v=c.diets;return Object(d.jsxs)("div",{className:x.a["bg-detail"],children:[Object(d.jsx)(b.b,{to:"/home",children:Object(d.jsx)("button",{className:x.a["btn-back"],children:"Back"})}),Object(d.jsxs)("p",{children:["ID: ",r]}),Object(d.jsx)("h2",{children:u}),Object(d.jsxs)("p",{children:[" health Score: ",m]}),Object(d.jsx)("img",{src:j,alt:""}),Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:p}}),null===f||void 0===f?void 0:f.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Satep: ",e.number]}),Object(d.jsx)("p",{children:e.step})]})})),Object(d.jsx)("ul",{children:null===v||void 0===v?void 0:v.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]},r)},g=c(27),y=c.n(g),_=c(45),S=c.n(_);var k=function(e){var t=e.id,c=e.name,a=e.image,n=e.diets;return Object(d.jsx)(b.b,{to:"/detail/".concat(t),children:Object(d.jsxs)("div",{className:S.a.card,children:[Object(d.jsx)("img",{src:a,alt:c}),Object(d.jsx)("h2",{children:c}),Object(d.jsx)("ul",{children:n.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]})})},w="ALL_RECIPES",C="CHANGE_PAGE",N="ALL_DIETS",R="RECIPE_BY_NAME",T="FILTER_ORIGIN",E="FILTER_RECIPES",P="ORDER_BY_NAME",D="ORDER_BY_SCORE",F=function(){return function(){var e=Object(l.a)(Object(s.a)().mark((function e(t){var c,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/recipes");case 3:return c=e.sent,a=c.data,e.abrupt("return",t({type:w,payload:a}));case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return{type:C,payload:e}},A=function(e){return function(){var t=Object(l.a)(Object(s.a)().mark((function t(c){var a,n;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/recipes?nameRecipe=".concat(e));case 3:return a=t.sent,n=a.data,t.abrupt("return",c({type:R,payload:n}));case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()};var L=function(e){var t=Object(m.c)((function(e){return e.currentPage})),c=Object(m.b)(),a=e.recipe,n=Math.ceil(a.length/9),r=9*(t-1),i=r+9;return Object(d.jsxs)("div",{className:y.a["card-container"],children:[a.slice(r,i).map((function(e){return Object(d.jsx)(k,{id:e.id,name:e.name,image:e.image,diets:e.diets},e.id)})),Object(d.jsxs)("div",{className:y.a.paginado,children:[Object(d.jsx)("button",{className:y.a["btn-green"],onClick:function(){c(I(-1))},disabled:1===t,children:"Prev"}),Object(d.jsxs)("span",{children:[t," de ",n]}),Object(d.jsx)("button",{className:y.a["btn-green"],onClick:function(){c(I(1))},disabled:t===n,children:"Next"})]})]})},B=c(38),M=c.n(B);var H=function(){var e=Object(m.b)(),t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"search",placeholder:"Search recipe",onKeyUp:function(t){t.preventDefault(),13===t.keyCode&&e(A(n))},onChange:function(e){r([e.target.value])},value:n}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),e(A(n))},type:"input",children:"Search"})]})};var G=function(e){var t=e.handleClick,c=Object(a.useState)(!0),n=Object(o.a)(c,2),r=n[0],i=n[1],s=Object(a.useState)(!0),l=Object(o.a)(s,2),b=l[0],u=l[1],j=Object(m.c)((function(e){return e.allDiets})),p=Object(m.b)();return Object(d.jsxs)("nav",{children:[Object(d.jsx)(H,{}),Object(d.jsxs)("select",{onChange:function(e){var t=e.target.value;p({type:E,payload:t})},defaultValue:"",name:"diets",id:"diets",children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"--Diets--"}),Object(d.jsx)("option",{value:"all",children:"All recipes"}),null===j||void 0===j?void 0:j.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(d.jsxs)("select",{onChange:function(e){var t=e.target.value;p({type:T,payload:t})},defaultValue:"",name:"origin",id:"origin",children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"--Origin--"}),Object(d.jsx)("option",{value:"all",children:"All recipes"}),Object(d.jsx)("option",{value:"db",children:"My Recipes"}),Object(d.jsx)("option",{value:"api",children:"Recipes"})]}),Object(d.jsx)("button",{className:M.a["btn-green"],onClick:function(){i(!r),p({type:P,payload:r})},children:"Order By Name"}),Object(d.jsx)("button",{className:M.a["btn-green"],onClick:function(){u(!b),p({type:D,payload:b})},children:"Order By Score"}),Object(d.jsx)("button",{className:M.a["btn-green"],onClick:t,children:"Create recipe"})]})},J=c(11),U=c(10),V=c(7),Y=c(18),Z=c.n(Y),K="el campo no puede estar vacio, campo obligatorio",q="debe seleccionar al menos una dieta",W="el healt Score debe ser mayor a 0",z=function(e){var t=e.name,c=e.summary,a=e.healthScore,n=e.stepToStep,r=e.diets,i={};return 0===t.length&&(i.name=K),0===c.length&&(i.summary=K),0===n.length&&(i.stepToStep=K),r.length<=0&&(i.chose=q),a<=0&&(i.score=W),i};var Q=function(e){var t=e.handleClick,c=e.postRecipe,n=Object(m.c)((function(e){return e.diets})),r=Object(m.b)(),i=Object(a.useState)({name:"",summary:"",healthScore:"",stepToStep:[],diets:[]}),s=Object(o.a)(i,2),l=s[0],b=s[1],u=Object(a.useState)({name:"",summary:"",healthScore:"",stepToStep:[],diets:[]}),j=Object(o.a)(u,2),p=j[0],O=j[1],h=function(e){b(Object(V.a)(Object(V.a)({},l),{},Object(U.a)({},e.target.name,e.target.value))),O(z(Object(V.a)(Object(V.a)({},l),{},Object(U.a)({},e.target.name,e.target.value))))},f=function(e){var t=e.target.value;e.target.checked?(b(Object(V.a)(Object(V.a)({},l),{},{diets:[].concat(Object(J.a)(l.diets),[t])})),O(z(Object(V.a)(Object(V.a)({},l),{},{diets:[].concat(Object(J.a)(l.diets),[t])})))):(b(Object(V.a)(Object(V.a)({},l),{},{diets:Object(J.a)(l.diets.filter((function(e){return e!==t})))})),O(z(Object(V.a)(Object(V.a)({},l),{},{diets:Object(J.a)(l.diets.filter((function(e){return e!==t})))}))))};return Object(d.jsx)("div",{className:Z.a["bg-form"],children:Object(d.jsxs)("form",{children:[Object(d.jsx)("button",{className:Z.a["btn-red"],onClick:t,children:"X"}),Object(d.jsx)("legend",{children:"Your recipe"}),Object(d.jsx)("label",{htmlFor:"name",children:"Name recipe"}),Object(d.jsx)("input",{name:"name",placeholder:"Name recipe",type:"text",onChange:h,value:l.name}),p.name?Object(d.jsx)("p",{className:Z.a.error,children:p.name}):null,Object(d.jsx)("label",{htmlFor:"imageUpload",children:"Image"}),Object(d.jsx)("input",{type:"text",placeholder:"URL de la imagen",name:"image",onChange:h,accept:"image/*"}),Object(d.jsx)("label",{htmlFor:"summary",children:"Summary"}),Object(d.jsx)("textarea",{name:"summary",placeholder:"summary",id:"summary",onChange:h,cols:"30",rows:"10",value:l.summary}),p.summary?Object(d.jsx)("p",{className:Z.a.error,children:p.summary}):null,Object(d.jsx)("label",{htmlFor:"healthScore",children:"health Score"}),Object(d.jsx)("input",{name:"healthScore",onChange:h,type:"number",min:"0",value:l.healthScore}),p.score?Object(d.jsx)("p",{className:Z.a.error,children:p.score}):null,Object(d.jsx)("label",{htmlFor:"stepToStep",children:"Step to Step"}),Object(d.jsx)("textarea",{name:"stepToStep",onChange:h,id:"stepToStep",cols:"30",rows:"10",value:l.stepToStep}),p.stepToStep?Object(d.jsx)("p",{className:Z.a.error,children:p.stepToStep}):null,Object(d.jsx)("legend",{children:"Diets"}),null===n||void 0===n?void 0:n.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"diets",children:e.name}),Object(d.jsx)("input",{className:Z.a.error,type:"checkbox",name:"diets",onChange:f,value:e.name})]},e.id)})),p.chose?Object(d.jsx)("p",{children:p.chose}):null,Object(d.jsx)("button",{className:Z.a["btn-submit"],onClick:function(e){e.preventDefault(),c(l),b({name:"",summary:"",healthScore:"",stepToStep:[],diets:[]}),O({name:"",summary:"",healthScore:"",stepToStep:[],diets:[]}),r(F())},disabled:!!Object.keys(p).length,children:"Crear"})]})})};var X=function(){var e=Object(m.c)((function(e){return e.recipes})),t=Object(m.b)(),c=Object(a.useState)(!1),n=Object(o.a)(c,2),r=n[0],i=n[1],b=function(){i(!r)},u=function(){var e=Object(l.a)(Object(s.a)().mark((function e(t){var c,a,n,r,i,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.name,a=t.image,n=t.summary,r=t.healthScore,i=t.stepToStep,l=t.diets,e.prev=1,e.next=4,h.a.post("/recipes",{name:c,image:a,summary:n,healthScore:r,stepToStep:[i],diets:l});case 4:window.alert("Recipe created successfully"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message),window.alert("Failed to create recipe");case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){t(F()),t(function(){var e=Object(l.a)(Object(s.a)().mark((function e(t){var c,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/diet");case 3:return c=e.sent,a=c.data,e.abrupt("return",t({type:N,payload:a}));case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);var j=Object(O.l)().pathname;return Object(d.jsxs)("div",{className:"App",children:["/"!==j?Object(d.jsx)(G,{handleClick:b}):null,"/"!==j?Object(d.jsx)("h1",{children:"Henry Food"}):null,r?Object(d.jsx)(Q,{handleClick:b,postRecipe:u}):null,Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/",element:Object(d.jsx)(p,{})}),Object(d.jsx)(O.a,{path:"/home",element:Object(d.jsx)(L,{recipe:e})}),Object(d.jsx)(O.a,{path:"/detail/:id",element:Object(d.jsx)(v,{})})]})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))},ee=c(36),te=c(46),ce=c(47),ae={recipes:[],allRecipes:[],currentPage:1,diets:[],allDiets:[]},ne=Object(ee.legacy_createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case w:return Object(V.a)(Object(V.a)({},e),{},{recipes:a,allRecipes:a});case C:return Object(V.a)(Object(V.a)({},e),{},{currentPage:e.currentPage+a});case N:return Object(V.a)(Object(V.a)({},e),{},{diets:a,allDiets:a});case R:return Object(V.a)(Object(V.a)({},e),{},{recipes:[a],currentPage:1});case E:return"all"===a?Object(V.a)(Object(V.a)({},e),{},{recipes:e.allRecipes}):Object(V.a)(Object(V.a)({},e),{},{recipes:Object(J.a)(e.allRecipes.filter((function(e){return e.diets.includes(a)})))});case T:return"all"===a?Object(V.a)(Object(V.a)({},e),{},{recipes:e.allRecipes}):"db"===a?Object(V.a)(Object(V.a)({},e),{},{recipes:Object(J.a)(e.recipes.filter((function(e){return"number"!==typeof e.id}))),currentPage:1}):Object(V.a)(Object(V.a)({},e),{},{recipes:Object(J.a)(e.allRecipes.filter((function(e){return"number"===typeof e.id}))),currentPage:1});case P:return Object(V.a)(Object(V.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return e.name>t.name?a?1:-1:e.name<t.name?!1===a?1:-1:0})))});case D:return Object(V.a)(Object(V.a)({},e),{},{recipes:Object(J.a)(e.recipes.sort((function(e,t){return e.healthScore>t.healthScore?a?1:-1:e.healthScore<t.healthScore?!1===a?1:-1:0})))});default:return Object(V.a)({},e)}}),Object(te.composeWithDevTools)(Object(ee.applyMiddleware)(ce.a))),re=ne;h.a.defaults.baseURL="https://pi-food-main-production-ddb6.up.railway.app",i.a.render(Object(d.jsx)(m.a,{store:re,children:Object(d.jsx)(b.a,{children:Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(X,{})})})}),document.getElementById("root")),$()}},[[62,1,2]]]);
//# sourceMappingURL=main.95ffcd71.chunk.js.map