(this["webpackJsonplinky-ui"]=this["webpackJsonplinky-ui"]||[]).push([[0],{67:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(24),r=a.n(s),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},o=(a(67),a(68),a(17)),j=a(7),l=a(58),u=a.n(l).a.create(!1),b=a(13),d=a.n(b),h=a(21),O=a(106),x=a(104),p=a(1),m=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){s(e.src)}),[e.src]);var r=function(){s(["/logo192.png"])};return n.length>1?Object(p.jsx)(x.a,{interval:null,children:n.map((function(t,a){return Object(p.jsx)(x.a.Item,{children:Object(p.jsx)("img",Object(o.a)(Object(o.a)({alt:"Post",className:"w-100 h-auto"},e),{},{src:t,onError:r}))},e.postid.concat(a))}))}):Object(p.jsx)("img",Object(o.a)(Object(o.a)({alt:"Post",className:"w-100 h-auto"},e),{},{src:n,onError:r}))},f=a(8),v=function(e,t){var a=e.post,n=e.user,s=Object(f.f)(),r=Object(c.useState)(0),i=Object(j.a)(r,2),l=i[0],b=i[1],x=function(){var e=Object(h.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||s.push("Login"),e.prev=1,e.next=4,u.post("/api/post/".concat(t,"/upvote"),{},{headers:{Authorization:"Bearer ".concat(a.token)}});case 4:1===e.sent.data?b(l+1):b(l-1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Message send failed.",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(a.upvote.length)}),[a.upvote.length]),Object(p.jsx)(O.a,Object(o.a)(Object(o.a)({},t),{},{className:"mb-5",children:Object(p.jsxs)("div",{className:"d-flex p-0 m-0 rounded",children:[Object(p.jsxs)("div",{className:"card-ranking rounded-left p-0 text-center",children:[Object(p.jsx)("button",{className:"border-0",onClick:function(){return x(a._id,n)},children:"\u2191"}),Object(p.jsx)("p",{children:l})]}),Object(p.jsxs)("div",{className:"p-0 flex-grow-1",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("div",{className:"overflow-auto",children:Object(p.jsxs)("p",{className:"float-left",children:["Posted by ",a.username," on ",a.date]})}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:a.title})})]}),a.attachment.length>0&&Object(p.jsx)(m,{postid:a._id,src:a.attachment}),Object(p.jsxs)(O.a.Body,{style:{opacity:.8},children:[Object(p.jsx)(O.a.Text,{className:"my-1",children:a.text}),Object(p.jsx)("div",{style:{overflow:"auto"},children:Object(p.jsxs)(O.a.Text,{className:"float-right",children:[Object(p.jsx)("i",{className:"fas fa-share"}),Object(p.jsx)("i",{className:"fas fa-heart mx-2"})]})}),a.comment.map((function(e){return Object(p.jsxs)(O.a.Text,{children:[Object(p.jsx)("span",{children:Object(p.jsx)("b",{children:e.username})}),Object(p.jsx)("span",{className:"ml-3",children:e.text})]})}))]})]})]})}))},g=a(15),y=a(105),N=a(107),w=a(102),S=a(61),k=function(e){return Object(p.jsxs)(y.a,{className:"navbar",bg:"light",expand:"lg",children:[Object(p.jsx)(y.a.Brand,{children:Object(p.jsx)(g.b,{to:"/",children:"Linky"})}),Object(p.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(N.a,{className:"mr-auto",children:[Object(p.jsx)(y.a.Text,{children:Object(p.jsx)(g.b,{to:"/about",children:"About"})}),Object(p.jsxs)(w.a,{title:"Topics",id:"basic-nav-dropdown",children:[Object(p.jsx)(w.a.Item,{href:"#action/2.1",children:"Action"}),Object(p.jsx)(w.a.Item,{href:"#action/2.2",children:"Another action"}),Object(p.jsx)(w.a.Item,{href:"#action/2.3",children:"Something"}),Object(p.jsx)(w.a.Divider,{}),Object(p.jsx)(w.a.Item,{href:"#action/2.4",children:"Separated link"})]})," "]})," ",e.user&&Object(p.jsx)(g.b,{to:"/submit",children:Object(p.jsx)(S.a,{children:"Create Post"})}),e.user?Object(p.jsx)(w.a,{title:e.user.username,children:Object(p.jsx)(w.a.Item,{onClick:function(){e.setUser(),localStorage.removeItem("user")},children:"Sign out"})}):Object(p.jsx)(g.b,{to:"/login",children:Object(p.jsx)(S.a,{children:"Login"})})]})]})},C=a(103),T=function(e){var t=Object(c.useState)({}),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(f.g)(),i=r.pathname.split("/"),o=i[i.length-1];Object(c.useEffect)((function(){s(r.state),u.get("api/post/"+o).then((function(e){s(e.data[0])}))}),[o,r]);var l=Object(c.useState)(""),b=Object(j.a)(l,2),x=b[0],v=b[1],y=function(){var t=Object(h.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.post("/api/post/".concat(o,"/comment"),{text:x},{headers:{Authorization:"Bearer ".concat(e.user.token)}});case 3:c=t.sent,console.log(c),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Message send failed.",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"app",children:n&&Object.keys(n).length>0?Object(p.jsxs)("div",{children:[Object(p.jsxs)(O.a,{className:"mb-5",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("p",{children:n.username}),Object(p.jsx)("p",{children:n.date})]}),Object(p.jsx)(m,{postid:n._id,src:n.attachment}),Object(p.jsxs)(O.a.Body,{style:{opacity:.8},children:[Object(p.jsx)(O.a.Text,{className:"my-1",children:n.text}),Object(p.jsxs)("div",{style:{overflow:"auto"},children:[Object(p.jsx)(O.a.Text,{className:"float-left mb-1",children:n.date}),Object(p.jsxs)(O.a.Text,{className:"float-right",children:[Object(p.jsx)("i",{className:"fas fa-share"}),Object(p.jsx)("i",{className:"fas fa-heart mx-2"})]})]})]})]},n._id),Object(p.jsxs)("div",{className:"comment",children:[e.user?Object(p.jsx)("div",{children:Object(p.jsxs)(C.a,{onSubmit:y,className:"overflow-hidden mb-5",children:[Object(p.jsx)(C.a.Group,{children:Object(p.jsx)(C.a.Control,{value:x,onChange:function(e){var t=e.target;return v(t.value)},placeholder:"Type your comment here"})}),Object(p.jsx)(S.a,{variant:"primary",type:"submit",className:"float-right",children:"Submit"}),Object(p.jsx)(S.a,{variant:"secondary",type:"submit",className:"float-right mr-2",children:"Cancel"})]})}):Object(p.jsx)("div",{children:Object(p.jsxs)(C.a,{className:"overflow-hidden mb-5",children:[Object(p.jsx)(C.a.Group,{children:Object(p.jsx)(C.a.Control,{placeholder:"You must be logged in to comment"})}),Object(p.jsx)(g.b,{to:"/login",children:Object(p.jsx)(S.a,{variant:"primary",type:"submit",className:"float-right",children:"Login"})})]})}),Object(p.jsx)("hr",{}),n.comment.length>0&&n.comment.map((function(e){return Object(p.jsxs)(O.a.Text,{children:[Object(p.jsx)("span",{children:Object(p.jsx)("b",{children:e.username})}),Object(p.jsx)("span",{className:"ml-3",children:e.text})]})}))]})]}):Object(p.jsx)("div",{})})},E=a(62),I=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),o=i[0],l=i[1],b=Object(c.useState)(""),O=Object(j.a)(b,2),x=O[0],m=O[1],f=function(){var t=Object(h.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,u.post("/api/user/signup",{username:n,password:o});case 4:(c=t.sent).data&&(localStorage.setItem("token",JSON.stringify(c.data)),e.setUser(c.data),e.history.push("/")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),s(""),l(""),m("Unable to sign-up.");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)(C.a,{onSubmit:f,children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsx)(C.a.Control,{type:"text",placeholder:"Enter username",value:n,onChange:function(e){var t=e.target;return s(t.value)}}),Object(p.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(C.a.Label,{children:"Password"}),Object(p.jsx)(C.a.Control,{type:"password",placeholder:"Password",value:o,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(p.jsx)(C.a.Text,{children:x}),Object(p.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})},L=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),o=i[0],l=i[1],b=Object(c.useState)(""),O=Object(j.a)(b,2),x=O[0],m=O[1],f=function(){var t=Object(h.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,u.post("/api/user/login",{username:n,password:o});case 4:(c=t.sent).data&&(localStorage.setItem("user",JSON.stringify(c.data)),e.setUser(c.data),e.history.push("/")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),s(""),l(""),m("Unable to login.");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"app login",children:Object(p.jsxs)(C.a,{onSubmit:f,children:[Object(p.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(C.a.Label,{children:"Email address"}),Object(p.jsx)(C.a.Control,{placeholder:"Enter email",value:n,onChange:function(e){var t=e.target;return s(t.value)}}),Object(p.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(C.a.Label,{children:"Password"}),Object(p.jsx)(C.a.Control,{type:"password",placeholder:"Password",value:o,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(p.jsxs)(C.a.Text,{children:["Don't have an account? Sign up ",Object(p.jsx)(g.b,{to:"/signup",children:Object(p.jsx)("u",{children:"here."})})]}),Object(p.jsx)(C.a.Text,{children:x}),Object(p.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})},B=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),o=i[0],l=i[1],b=Object(c.useState)(""),O=Object(j.a)(b,2),x=O[0],m=O[1],f=function(){var t=Object(h.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,u.post("/api/post",{text:x,attachment:o,title:n},{headers:{Authorization:"Bearer ".concat(e.user.token)}});case 4:c=t.sent,console.log(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Message send failed.",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app login",children:[Object(p.jsx)("h2",{children:"Make a new post"}),Object(p.jsxs)(C.a,{onSubmit:f,children:[Object(p.jsx)(C.a.Group,{children:Object(p.jsx)(C.a.Control,{value:n,onChange:function(e){var t=e.target;return s(t.value)},placeholder:"Title"})}),Object(p.jsx)(C.a.Group,{children:Object(p.jsx)(C.a.Control,{value:o,onChange:function(e){var t=e.target;return l(t.value)},placeholder:"Attachment URL"})}),Object(p.jsx)(C.a.Group,{children:Object(p.jsx)(C.a.Control,{value:x,onChange:function(e){var t=e.target;return m(t.value)},className:"submit",placeholder:"Text"})}),Object(p.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},P=(a(96),function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(0),i=Object(j.a)(r,2),l=i[0],b=i[1],d=Object(c.useState)(!0),h=Object(j.a)(d,2),O=h[0],x=h[1],m=function(){u.get("api/posts/".concat(l)).then((function(e){e.data.length>0?(e.data.forEach((function(e){e.date=new Date(e.createdAt).toDateString()})),s(n.concat(e.data)),b(l+1)):x(!1)}))};return Object(c.useEffect)((function(){document.title="Linky",m()}),[]),Object(p.jsx)("div",Object(o.a)(Object(o.a)({},e),{},{children:Object(p.jsx)(E.a,{dataLength:n.length,next:m,hasMore:O,loader:Object(p.jsx)("h4",{children:"Loading..."}),endMessage:Object(p.jsx)("h4",{children:"End of posts..."}),scrollThreshold:.95,children:n.map((function(t){return Object(p.jsx)("div",{className:"mb-5",children:Object(p.jsx)(v,{post:t,user:e.user},t._id)},t._id)}))})}))}),A=function(){return Object(c.useEffect)((function(){document.title="About"}),[]),Object(p.jsx)("p",{className:"mx-1 mt-4",children:"Linky"})},G=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){console.log(document.body.clientHeight),console.log(window.scrollY),console.log(window.innerHeight);var e=localStorage.getItem("user");e&&(e=JSON.parse(e),n(e))}),[]),Object(p.jsx)(g.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(k,{user:a,setUser:n}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{exact:!0,path:"/",render:function(e){return Object(p.jsx)(P,{className:"app",user:a})}}),Object(p.jsx)(f.a,{path:"/about",children:Object(p.jsx)(A,{})}),Object(p.jsx)(f.a,{path:"/post/:id",render:function(e){return Object(p.jsx)(T,{user:a})}}),Object(p.jsx)(f.a,{path:"/login",render:function(e){return Object(p.jsx)(L,Object(o.a)({setUser:n},e))}}),Object(p.jsx)(f.a,{path:"/signup",render:function(e){return Object(p.jsx)(I,Object(o.a)({setUser:n},e))}}),Object(p.jsx)(f.a,{path:"/submit",render:function(e){return Object(p.jsx)(B,{user:a})}})]})]})})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),i()}},[[97,1,2]]]);
//# sourceMappingURL=main.70efcaa1.chunk.js.map