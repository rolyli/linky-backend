(this["webpackJsonplinky-ui"]=this["webpackJsonplinky-ui"]||[]).push([[0],{63:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(14),j=c.n(a),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),s(e),n(e),a(e),j(e)}))},r=(c(41),c(15)),o=c(31),l=c.n(o).a.create(!1),b=c(13),d=c(70),O=c(1),u=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){a(e.src)}),[]);var j=function(){a(["/logo192.png"])};return n.length>1?Object(O.jsx)(d.a,{interval:null,children:n.map((function(t,c){return Object(O.jsx)(d.a.Item,{children:Object(O.jsx)("img",Object(b.a)(Object(b.a)({className:"w-100 h-auto"},e),{},{src:t,onError:j}))},e.postid.concat(c))}))}):Object(O.jsx)("img",Object(b.a)(Object(b.a)({className:"w-100 h-auto"},e),{},{src:n,onError:j}))},x=function(e){var t=e.posts,c=e.page,s=e.setPage,n=e.position,a=e.style,j=e.className;return"top"===n?Object(O.jsxs)("div",{className:j,style:Object(b.a)({overflow:"auto"},a),children:[Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"float-right",onClick:function(){window.scrollTo(0,0),s(0)},children:Object(O.jsx)("u",{style:{cursor:"pointer"},children:"Latest page"})})}),Object(O.jsx)("br",{})]}):"bottom"===n?Object(O.jsxs)("div",{className:j,style:Object(b.a)({overflow:"auto"},a),children:[Object(O.jsxs)("div",{children:[0!==c&&Object(O.jsx)("p",{className:"float-left",onClick:function(){0!==c&&s(c-1)},children:Object(O.jsx)("u",{style:{cursor:"pointer"},children:"Newer posts"})}),0!==t.length&&Object(O.jsx)("p",{className:"float-right",onClick:function(){window.scrollTo(0,0),s(c+1)},children:Object(O.jsx)("u",{style:{cursor:"pointer"},children:"Older posts"})})]}),Object(O.jsx)("br",{})]}):void 0},h=c(71),f=c(16),m=c(5),p=(c(63),function(){return Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("ul",{className:"navbar-list",children:[Object(O.jsx)("li",{children:Object(O.jsx)(f.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(f.b,{to:"/about",children:"About"})})]})})}),g=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),j=Object(r.a)(a,2),i=j[0],o=j[1];return Object(s.useEffect)((function(){l.get("api/posts/".concat(i)).then((function(e){e.data.forEach((function(e){e.date=new Date(e.createdAt).toDateString()})),n(e.data)}))}),[i]),Object(s.useEffect)((function(){document.title="Linky"}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{setPage:o,position:"top"}),0===c.length&&Object(O.jsx)("div",{className:"m-5 text-center",children:"Oops, no more posts!"}),c.map((function(e){return Object(O.jsxs)(h.a,{className:"mb-5",children:[Object(O.jsx)(h.a.Header,{children:e.username}),Object(O.jsx)(u,{postid:e._id,src:e.attachment}),Object(O.jsxs)(h.a.Body,{style:{opacity:.8},children:[Object(O.jsxs)(h.a.Text,{className:"my-1",children:[e.text&&e.text.replace(/https:\/\/t.co\/[^ ]*/,""),e.text&&Object(O.jsx)("a",{href:e.text&&e.text.match(/https:\/\/t.co\/[^ ]*/),children:"(Source)"})]}),Object(O.jsxs)("div",{style:{overflow:"auto"},children:[Object(O.jsx)(h.a.Text,{className:"float-left mb-1",children:e.date}),Object(O.jsxs)(h.a.Text,{className:"float-right",children:[Object(O.jsx)("i",{className:"fas fa-share"}),Object(O.jsx)("i",{className:"fas fa-heart mx-2"})]})]}),e.comment.map((function(e){return Object(O.jsxs)(h.a.Text,{children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{children:e.username})}),Object(O.jsx)("span",{className:"ml-3",children:e.text})]})})),Object(O.jsx)(h.a.Text,{children:Object(O.jsx)(f.b,{to:"/post/"+e._id,children:"See full post"})})]})]},e._id)})),Object(O.jsx)(x,{page:i,setPage:o,posts:c,position:"bottom"})]})},v=function(){return Object(s.useEffect)((function(){document.title="About"}),[]),Object(O.jsx)("p",{className:"mx-1 mt-4",children:"Linky"})},N=function(){return Object(O.jsx)(f.a,{children:Object(O.jsxs)("div",{className:"App app",children:[Object(O.jsx)(p,{}),Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",children:Object(O.jsx)(g,{})}),Object(O.jsx)(m.a,{path:"/about",children:Object(O.jsx)(v,{})})]})]})})};c(67);j.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),i()}},[[68,1,2]]]);
//# sourceMappingURL=main.4cbc0c72.chunk.js.map