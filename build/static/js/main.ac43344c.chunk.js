(this["webpackJsonplinky-ui"]=this["webpackJsonplinky-ui"]||[]).push([[0],{68:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(24),s=c.n(r),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},i=(c(67),c(68),c(16)),j=c(7),l=c(57),u=c.n(l).a.create(!1),b=c(104),d=c(1),h=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1];Object(a.useEffect)((function(){r(e.src)}),[e.src]);var s=function(){r(["/logo192.png"])};return n.length>1?Object(d.jsx)(b.a,{interval:null,children:n.map((function(t,c){return Object(d.jsx)(b.a.Item,{children:Object(d.jsx)("img",Object(i.a)(Object(i.a)({alt:"Post",className:"w-100 h-auto"},e),{},{src:t,onError:s}))},e.postid.concat(c))}))}):Object(d.jsx)("img",Object(i.a)(Object(i.a)({alt:"Post",className:"w-100 h-auto"},e),{},{src:n,onError:s}))},O=c(12),p=c(13),x=c.n(p),m=c(22),v=c(62),f=c(8),g=function(e){var t=e.post,c=e.user,n=Object(v.a)(e,["post","user"]),r=Object(f.f)(),s=Object(a.useState)(0),o=Object(j.a)(s,2),i=o[0],l=o[1];Object(a.useEffect)((function(){l(t.upvote.length)}),[t.upvote.length]);var b=function(){var e=Object(m.a)(x.a.mark((function e(t,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c||r.push("Login"),e.prev=1,e.next=4,u.post("/api/post/".concat(t,"/upvote"),{},{headers:{Authorization:"Bearer ".concat(c.token)}});case 4:1===e.sent.data?l(i+1):l(i-1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Message send failed.",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:n.className,children:[Object(d.jsx)("button",{className:"border-0 bg-transparent",onClick:function(){return b(t._id,c)},children:"\u2191"}),Object(d.jsx)("p",{children:i})]})},y=function(e,t){var c=e.post,a=e.user;return Object(d.jsxs)("div",Object(i.a)(Object(i.a)({},t),{},{className:"card-layout d-flex",children:[Object(d.jsx)(g,{className:"card-ranking",post:c,user:a}),Object(d.jsx)("div",{className:"card-right w-100",children:Object(d.jsxs)("div",{className:"card-bottom p-0 flex-grow-1",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"overflow-auto",children:Object(d.jsxs)("h3",{className:"card-title",children:["Posted by ",c.username," on ",c.date]})}),Object(d.jsx)("h2",{children:Object(d.jsx)("p",{children:c.title})})]}),c.attachment.every((function(e,t){return""!==e}))&&Object(d.jsx)(h,{postid:c._id,src:c.attachment}),Object(d.jsx)("p",{children:c.text}),Object(d.jsx)("div",{className:"card-bottom",children:Object(d.jsxs)(O.b,{to:{pathname:"/post/"+c._id},children:["See all ",c.comment_count," comments"]})})]})})]}))},N=c(105),S=c(106),w=c(60),k=c(102),C=function(e){return Object(d.jsxs)(N.a,{className:"navbar",bg:"light",expand:"lg",children:[Object(d.jsx)(N.a.Brand,{children:Object(d.jsx)(O.b,{to:"/",children:"Linky"})}),Object(d.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(N.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsx)(S.a,{className:"mr-auto"})," ",e.user&&Object(d.jsx)(O.b,{to:"/submit",children:Object(d.jsx)(w.a,{children:"Create Post"})}),e.user?Object(d.jsx)(k.a,{title:e.user.username,children:Object(d.jsx)(k.a.Item,{onClick:function(){e.setUser(),localStorage.removeItem("user")},children:"Sign out"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)(O.b,{to:"/login",children:Object(d.jsx)(w.a,{children:"Log in"})}),Object(d.jsx)(O.b,{to:"/signup",children:Object(d.jsx)(w.a,{className:"ml-2 btn-secondary",children:"Sign up"})})]})]})]})},L=c(103),E=function(e){var t=e.user,c=Object(a.useState)({}),n=Object(j.a)(c,2),r=n[0],s=n[1],o=Object(f.g)().pathname.split("/"),i=o[o.length-1];Object(a.useEffect)((function(){u.get("/api/post/"+i).then((function(e){s(e.data[0])}))}),[i]);var l=Object(a.useState)(""),b=Object(j.a)(l,2),p=b[0],v=b[1],y=function(){var e=Object(m.a)(x.a.mark((function e(c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.post("/api/post/".concat(i,"/comment"),{text:p},{headers:{Authorization:"Bearer ".concat(t.token)}});case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Message send failed.",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"card-layout app mb-5",children:Object.keys(r).length>0&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"d-flex m-0",children:[Object(d.jsx)(g,{className:"card-ranking bg-white",user:t,post:r}),Object(d.jsx)("div",{className:"card-right w-100",children:Object(d.jsxs)("div",{className:"p-0 flex-grow-1",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"overflow-auto",children:Object(d.jsxs)("h3",{className:"card-title",children:["Posted by ",r.username," on ",r.date]})}),Object(d.jsx)("h2",{children:Object(d.jsx)("p",{children:r.title})})]}),r.attachment.every((function(e,t){return""!==e}))&&Object(d.jsx)(h,{postid:r._id,src:r.attachment}),Object(d.jsx)("p",{children:r.text}),Object(d.jsxs)("div",{className:"card-bottom",children:[r.comment_count||0," comments"]})]})})]}),Object(d.jsxs)("div",{className:"comment-layout",children:[t?Object(d.jsx)("div",{children:Object(d.jsxs)(L.a,{onSubmit:y,className:"overflow-hidden mb-5",children:[Object(d.jsx)(L.a.Group,{children:Object(d.jsx)(L.a.Control,{value:p,onChange:function(e){var t=e.target;return v(t.value)},placeholder:"Type your comment here"})}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",className:"float-right",children:"Submit"}),Object(d.jsx)(w.a,{variant:"secondary",type:"submit",className:"float-right mr-2",children:"Cancel"})]})}):Object(d.jsx)("div",{children:Object(d.jsxs)(L.a,{className:"overflow-hidden mb-5",children:[Object(d.jsx)(L.a.Group,{children:Object(d.jsx)(L.a.Control,{placeholder:"You must be logged in to comment"})}),Object(d.jsx)(O.b,{to:"/login",children:Object(d.jsx)(w.a,{variant:"primary",type:"submit",className:"float-right",children:"Login"})})]})}),Object(d.jsx)("hr",{}),r&&r.comment.map((function(e){return Object(d.jsxs)("div",{className:"comment mb-2",children:[Object(d.jsx)("div",{className:"comment-username",children:e.username}),Object(d.jsx)("div",{className:"",children:e.text})]})}))]})]})})},P=c(61),I=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),O=h[0],p=h[1],v=function(){var t=Object(m.a)(x.a.mark((function t(c){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,u.post("/api/user/signup",{username:n,password:i});case 4:(a=t.sent).data&&(localStorage.setItem("token",JSON.stringify(a.data)),e.setUser(a.data),e.history.push("/")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),r(""),l(""),p("Unable to sign-up.");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"app signup",children:[Object(d.jsx)("h2",{children:"Sign up"}),Object(d.jsxs)(L.a,{onSubmit:v,children:[Object(d.jsxs)(L.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(L.a.Label,{children:"Username"}),Object(d.jsx)(L.a.Control,{type:"text",placeholder:"Enter username",value:n,onChange:function(e){var t=e.target;return r(t.value)}})]}),Object(d.jsxs)(L.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(L.a.Label,{children:"Password"}),Object(d.jsx)(L.a.Control,{type:"password",placeholder:"Password",value:i,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(d.jsx)(L.a.Text,{children:O}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},U=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),p=h[0],v=h[1],f=function(){var t=Object(m.a)(x.a.mark((function t(c){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,u.post("/api/user/login",{username:n,password:i});case 4:(a=t.sent).data&&(localStorage.setItem("user",JSON.stringify(a.data)),e.setUser(a.data),e.history.push("/")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),r(""),l(""),v("Unable to login.");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"app login",children:[Object(d.jsx)("h2",{children:"Log in"}),Object(d.jsxs)(L.a,{onSubmit:f,children:[Object(d.jsxs)(L.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(L.a.Label,{children:"Username"}),Object(d.jsx)(L.a.Control,{placeholder:"Enter username",value:n,onChange:function(e){var t=e.target;return r(t.value)}})]}),Object(d.jsxs)(L.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(L.a.Label,{children:"Password"}),Object(d.jsx)(L.a.Control,{type:"password",placeholder:"Password",value:i,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(d.jsxs)(L.a.Text,{children:["Don't have an account? Sign up ",Object(d.jsx)(O.b,{to:"/signup",children:Object(d.jsx)("u",{children:"here."})})]}),Object(d.jsx)(L.a.Text,{children:p}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},B=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),O=h[0],p=h[1],v=function(){var t=Object(m.a)(x.a.mark((function t(c){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,u.post("/api/post",{text:O,attachment:i,title:n},{headers:{Authorization:"Bearer ".concat(e.user.token)}});case 4:a=t.sent,console.log(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Message send failed.",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"app login",children:[Object(d.jsx)("h2",{children:"Make a new post"}),Object(d.jsxs)(L.a,{onSubmit:v,children:[Object(d.jsx)(L.a.Group,{children:Object(d.jsx)(L.a.Control,{value:n,onChange:function(e){var t=e.target;return r(t.value)},placeholder:"Title"})}),Object(d.jsx)(L.a.Group,{children:Object(d.jsx)(L.a.Control,{value:i,onChange:function(e){var t=e.target;return l(t.value)},placeholder:"Attachment URL"})}),Object(d.jsx)(L.a.Group,{children:Object(d.jsx)(L.a.Control,{value:O,onChange:function(e){var t=e.target;return p(t.value)},className:"submit",placeholder:"Text"})}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},T=(c(96),function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(0),o=Object(j.a)(s,2),l=o[0],b=o[1],h=Object(a.useState)(!0),O=Object(j.a)(h,2),p=O[0],x=O[1],m=function(){u.get("api/posts/".concat(l)).then((function(e){e.data.length>0?(e.data.forEach((function(e){e.date=new Date(e.createdAt).toDateString()})),r(n.concat(e.data)),b(l+1)):x(!1)}))};return Object(a.useEffect)((function(){document.title="Linky",m()}),[]),Object(d.jsx)("div",Object(i.a)(Object(i.a)({},e),{},{children:Object(d.jsx)(P.a,{dataLength:n.length,next:m,hasMore:p,loader:Object(d.jsx)("h4",{children:"Loading..."}),endMessage:Object(d.jsx)("h4",{children:"End of posts..."}),scrollThreshold:.95,children:n.map((function(t){return Object(d.jsx)(y,{post:t,user:e.user},t._id)}))})}))}),G=function(){return Object(a.useEffect)((function(){document.title="About"}),[]),Object(d.jsx)("p",{className:"mx-1 mt-4",children:"Linky"})},A=function(){var e=Object(a.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){console.log(document.body.clientHeight),console.log(window.scrollY),console.log(window.innerHeight);var e=localStorage.getItem("user");e&&(e=JSON.parse(e),n(e))}),[]),Object(d.jsx)(O.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{user:c,setUser:n}),Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{exact:!0,path:"/",render:function(e){return Object(d.jsx)(T,{className:"app",user:c})}}),Object(d.jsx)(f.a,{path:"/about",children:Object(d.jsx)(G,{})}),Object(d.jsx)(f.a,{path:"/post/:id",render:function(e){return Object(d.jsx)(E,{user:c})}}),Object(d.jsx)(f.a,{path:"/login",render:function(e){return Object(d.jsx)(U,Object(i.a)({setUser:n},e))}}),Object(d.jsx)(f.a,{path:"/signup",render:function(e){return Object(d.jsx)(I,Object(i.a)({setUser:n},e))}}),Object(d.jsx)(f.a,{path:"/submit",render:function(e){return Object(d.jsx)(B,{user:c})}})]})]})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),o()}},[[97,1,2]]]);
//# sourceMappingURL=main.ac43344c.chunk.js.map