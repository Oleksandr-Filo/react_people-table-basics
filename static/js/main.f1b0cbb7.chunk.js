(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(5),r=n(2),s=(n(21),n(22),n(0)),i=n.n(s),o=n(6),l=n.n(o),j=n(1),b=i.a.memo((function(e){var t=e.to,n=e.navTitle;return Object(j.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:n})})),d=i.a.memo((function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(b,{to:"/",navTitle:"Home"}),Object(j.jsx)(b,{to:"/people",navTitle:"People"})]})})})})),h=(n(24),i.a.memo((function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})}))),u=n(8),m=n(12),O=n(4),x=(n(25),i.a.memo((function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}))),p=i.a.memo((function(e){var t=e.person,n=e.selectAndShowPerson;return Object(j.jsx)(a.b,{to:"../".concat(t.slug),className:l()({"has-text-danger":"f"===t.sex}),onClick:function(){n&&n(t.slug)},children:t.name})})),f=function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"center"})},v=i.a.memo((function(e){var t=e.person,n=Object(r.i)().slug,c=Object(s.useCallback)(f,[]);return Object(j.jsxs)("tr",{id:t.slug,"data-cy":"person",className:l()({"has-background-warning":t.slug===n}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(p,{person:t})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:t.mother?Object(j.jsx)(p,{person:t.mother,selectAndShowPerson:c}):t.motherName||"-"}),Object(j.jsx)("td",{children:t.father?Object(j.jsx)(p,{person:t.father,selectAndShowPerson:c}):t.fatherName||"-"})]})})),g=[{id:1,value:"name",title:"Name"},{id:2,value:"sex",title:"Sex"},{id:3,value:"born",title:"Born"},{id:4,value:"died",title:"Died"},{id:5,value:"mother",title:"Mother"},{id:6,value:"father",title:"Father"}],N=i.a.memo((function(e){var t=e.people;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:g.map((function(e){return Object(j.jsx)("th",{children:e.title},e.id)}))})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(v,{person:e},e.slug)}))})]})}));function w(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var y=n(9),k=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(y.a)(Object(y.a)({},t),{},{mother:n,father:c})}))},P=i.a.memo((function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(O.a)(a,2),i=r[0],o=r[1],l=Object(s.useState)(!1),b=Object(O.a)(l,2),d=b[0],h=b[1],p=Object(s.useState)(""),f=Object(O.a)(p,2),v=f[0],g=f[1],y=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var t,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,w();case 4:t=e.sent,n=k(t),c(n),h(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),g("Can't load people");case 13:return e.prev=13,o(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){y()}),[]);var P=d&&n.length,S=d&&!n.length;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[i&&Object(j.jsx)(x,{}),v&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:v}),S&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),P&&Object(j.jsx)(N,{people:n})]})})]})})),S=i.a.memo((function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})})),T=i.a.memo((function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})}));Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(h,{}),children:[Object(j.jsxs)(r.c,{path:"/people",children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(P,{})}),Object(j.jsx)(r.c,{path:":slug",element:Object(j.jsx)(P,{})})]}),Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(S,{})}),Object(j.jsx)(r.c,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)(T,{})})]})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f1b0cbb7.chunk.js.map