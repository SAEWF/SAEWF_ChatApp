"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[659],{6659:function(e,s,t){t.r(s),t.d(s,{default:function(){return C}});var n=t(885),a=t(2791),r=t(5861),i=t(4942),o=t(1413),l=t(7757),c=t.n(l),d=t(7411),m=t(6871),u=t(3239),p=t(4094),g=t(9434),h=t(7037),f=t(4998),b=t(1216),x=t(7055),w=t(184),j=function(){var e=(0,g.v9)(f.Pw),s=e.loading,t=e.disableIfLoading,l=e.formLabelClassName,j=e.formFieldClassName,N=e.inputFieldClassName,_=e.btnSubmitClassName,v=e.btnResetClassName,P=(0,g.I0)(),y=(0,a.useState)(!1),C=(0,n.Z)(y,2),S=C[0],R=C[1],Z=(0,m.s0)(),k=(0,a.useState)({email:"",password:""}),I=(0,n.Z)(k,2),F=I[0],D=I[1],E=F.email,L=F.password,K=function(e){return function(s){D((0,o.Z)((0,o.Z)({},F),{},(0,i.Z)({},e,s.target.value)))}},U=function(){var e=(0,r.Z)(c().mark((function e(s){var t,n,a,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),E&&L){e.next=3;break}return e.abrupt("return",P((0,b.Km)({message:"Please Enter All the Fields",type:"warning",duration:5e3,position:"bottom-center"})));case 3:return P((0,f.K4)(!0)),t=(0,x.uZ)({}),e.prev=5,e.next=8,d.Z.post("/api/user/login",{email:E,password:L},t);case 8:n=e.sent,a=n.data,P((0,b.Km)({title:"Login Successful",message:"Your login session will expire in 15 days",type:"success",duration:5e3,position:"bottom-center"})),localStorage.setItem("loggedInUser",JSON.stringify(a)),P((0,h.yM)(a)),P((0,f.K4)(!1)),Z("/chats"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),P((0,b.Km)({title:"Login Failed",message:(null===(r=e.t0.response)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.message)||e.t0.message,type:"error",duration:5e3,position:"bottom-center"})),P((0,f.K4)(!1));case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(s){return e.apply(this,arguments)}}();return(0,w.jsxs)("form",{className:"app__form user-select-none row",style:{pointerEvents:s?"none":"auto"},children:[(0,w.jsxs)("section",{className:"".concat(j," mb-2 col-md-6"),children:[(0,w.jsxs)("label",{htmlFor:"login__email",className:"".concat(l),children:["Email ID ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsx)("input",{type:"email",value:E,onChange:K("email"),required:!0,autoFocus:!0,name:"email",id:"login__email",className:"".concat(N),placeholder:"Used While Registering"})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-4 col-md-6"),children:[(0,w.jsxs)("label",{htmlFor:"login__password",className:"".concat(l),children:["Password ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsxs)("div",{className:"input-group",children:[(0,w.jsx)("input",{type:S?"text":"password",value:L,onChange:K("password"),required:!0,name:"password",id:"login__password",className:"".concat(N," rounded-end"),placeholder:"Hope You Remember"}),(0,w.jsx)(p.Z,{disableIfLoading:t,showPassword:S,setShowPassword:R})]})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-3 d-flex justify-content-between"),children:[(0,w.jsx)("button",{type:"submit",name:"btnLogin",id:"login__btnLogin",onClick:U,className:"".concat(_),children:s?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{size:25,style:{color:"white",margin:"0px 15px 0px -20px"}}),"Signing in..."]}):"Login"}),(0,w.jsx)("button",{type:"reset",name:"btnReset",id:"login__btnReset",onClick:function(e){e.preventDefault(),D({email:"",password:""})},className:"".concat(v),children:"Reset"})]}),(0,w.jsx)("section",{className:"".concat(j," mb-2"),children:(0,w.jsx)("button",{name:"btnGetGuestCredentials",id:"login__btnGetGuestCredentials",onClick:function(e){e.preventDefault(),D({email:"guest.user@gmail.com",password:"guest@987"})},className:"btn btn-outline-success w-100 fs-4 p-1 rounded-pill",children:"Get Guest Credentials"})})]})},N=(0,t(6189).Z)((0,w.jsx)("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto"),_={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_DEFAULT_USER_DP,v=function(){var e=(0,g.v9)(f.Pw),s=e.loading,t=e.disableIfLoading,l=e.formLabelClassName,j=e.formFieldClassName,v=e.inputFieldClassName,P=e.btnSubmitClassName,y=e.btnResetClassName,C=(0,g.I0)(),S=(0,m.s0)(),R=(0,a.useState)(!1),Z=(0,n.Z)(R,2),k=Z[0],I=Z[1],F=(0,a.useRef)(),D=(0,a.useState)({name:"",email:"",password:"",confirmPassword:"",profilePic:null,profilePicUrl:_}),E=(0,n.Z)(D,2),L=E[0],K=E[1],U=L.name,T=L.email,A=L.password,O=L.confirmPassword,q=L.profilePic,M=L.profilePicUrl,H=function(e){return function(s){K((0,o.Z)((0,o.Z)({},L),{},(0,i.Z)({},e,s.target.value)))}},V=function(){var e=(0,r.Z)(c().mark((function e(s){var t,n,a,r,i,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),U&&T&&A&&O){e.next=3;break}return e.abrupt("return",C((0,b.Km)({message:"Please Enter All the Fields",type:"warning",duration:3e3,position:"bottom-center"})));case 3:if(!(U.length>25)){e.next=5;break}return e.abrupt("return",C((0,b.Km)({message:"Name Must be Less than 25 characters",type:"warning",duration:3e3,position:"bottom-center"})));case 5:if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(T)){e.next=7;break}return e.abrupt("return",C((0,b.Km)({message:"Please Enter a Valid Email ID",type:"warning",duration:3e3,position:"bottom-center"})));case 7:if(A===O){e.next=9;break}return e.abrupt("return",C((0,b.Km)({message:"Passwords Do Not Match",type:"warning",duration:3e3,position:"bottom-center"})));case 9:return C((0,f.K4)(!0)),t=(0,x.uZ)({formData:!0}),(n=new FormData).append("profilePic",q),n.append("name",U),n.append("email",T),n.append("password",A),e.prev=16,e.next=19,d.Z.post("/api/user/register",n,t);case 19:a=e.sent,r=a.data,C((0,b.Km)({title:"Registration Successful",message:"Your login session will expire in 15 days",type:"success",duration:5e3,position:"bottom-center"})),localStorage.setItem("loggedInUser",JSON.stringify(r)),C((0,h.yM)(r)),C((0,f.K4)(!1)),S("/chats"),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(16),C((0,b.Km)({title:"Registration Failed",message:(null===(i=e.t0.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.message)||e.t0.message,type:"error",duration:4e3,position:"bottom-center"})),C((0,f.K4)(!1));case 32:case"end":return e.stop()}}),e,null,[[16,28]])})));return function(s){return e.apply(this,arguments)}}();return(0,w.jsxs)("form",{className:"app__form user-select-none row ".concat(t),style:{pointerEvents:s?"none":"auto"},children:[(0,w.jsxs)("section",{className:"app__formfield position-relative mb-4",children:[(0,w.jsx)("img",{className:"userProfilePic img-fluid border border-2 border-primary rounded-circle mt-3",id:"register__imgProfile",src:M,alt:"profilePic"}),(0,w.jsx)("i",{id:"register__selectPic",className:"selectPicIcon position-absolute p-2 d-flex ".concat(t," justify-content-center align-items-center bg-success rounded-circle pointer"),onClick:function(){s||F.current.click()},children:(0,w.jsx)(N,{className:"text-light fs-6"})}),(0,w.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var s=e.target.files[0];if(s)return(0,x.CO)(s.name)?s.size>=x.BO?(F.current.value="",C((0,b.Km)({message:"Please Select an Image Smaller than 2 MB",type:"warning",duration:3e3,position:"bottom-center"}))):void K((0,o.Z)((0,o.Z)({},L),{},{profilePic:s,profilePicUrl:URL.createObjectURL(s)})):C((0,b.Km)({title:"Invalid Image File",message:"Please Select an Image File (png/jpg/jpeg/svg/webp)",type:"warning",duration:5e3,position:"bottom-center"}))},name:"profilepic",id:"register__img_input",ref:F,className:"d-none"})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-2 col-md-6 order-md-1"),children:[(0,w.jsxs)("label",{htmlFor:"register__username",className:"".concat(l),children:["Name ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsx)("input",{type:"text",value:U,onChange:H("name"),required:!0,name:"username",id:"register__username",className:"".concat(v),placeholder:"Eg: John Titor"})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-2 col-md-6 order-md-3"),children:[(0,w.jsxs)("label",{htmlFor:"register__email",className:"".concat(l),children:["Email ID ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsx)("input",{type:"email",value:T,onChange:H("email"),required:!0,name:"email",id:"register__email",className:"".concat(v),placeholder:"Eg: john.titor@yahoo.com"})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-2 col-md-6 order-md-2"),children:[(0,w.jsxs)("label",{htmlFor:"register__password",className:"".concat(l),children:["Password ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsxs)("div",{className:"input-group",children:[(0,w.jsx)("input",{type:k?"text":"password",value:A,onChange:H("password"),required:!0,name:"password",id:"register__password",className:"".concat(v," rounded-end"),placeholder:"Please Remember This"}),(0,w.jsx)(p.Z,{disableIfLoading:t,showPassword:k,setShowPassword:I})]})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-4 col-md-6 order-md-4"),children:[(0,w.jsxs)("label",{htmlFor:"register__confirmpassword",className:"".concat(l),children:["Confirm Password ",(0,w.jsx)("span",{className:"required",children:"*"})]}),(0,w.jsxs)("div",{className:"input-group",children:[(0,w.jsx)("input",{type:k?"text":"password",value:O,onChange:H("confirmPassword"),required:!0,name:"confirmpassword",id:"register__confirmpassword",className:"".concat(v," rounded-end"),placeholder:"Must Match the Above"}),(0,w.jsx)(p.Z,{disableIfLoading:t,showPassword:k,setShowPassword:I})]})]}),(0,w.jsxs)("section",{className:"".concat(j," mb-2 d-flex justify-content-between order-last"),children:[(0,w.jsx)("button",{type:"submit",name:"btnRegister",id:"register__btnRegister",onClick:V,className:"".concat(P),children:s?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{size:25,style:{color:"white",margin:"0px 15px 0px -20px"}}),"Signing Up..."]}):"Register"}),(0,w.jsx)("button",{type:"reset",name:"btnReset",id:"register__btnReset",onClick:function(e){e.preventDefault(),K({name:"",email:"",password:"",confirmPassword:"",profilePic:null,profilePicUrl:_}),F.current.value=""},className:"".concat(y),children:"Reset"})]})]})},P=t(5074),y=t(1324),C=function(){var e=(0,g.v9)(h.p_).loggedInUser,s=(0,g.v9)(f.Pw).disableIfLoading,t=((0,g.I0)(),(0,a.useRef)()),r=(0,a.useState)(!0),i=(0,n.Z)(r,2),o=i[0],l=i[1],c=(0,m.s0)();return(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("loggedInUser"));e&&Date.now()<parseInt(e.expiryTime)&&c("/chats")}),[]),(0,w.jsxs)(w.Fragment,{children:[!e&&(0,w.jsxs)("section",{className:"homepage container-fluid d-flex flex-column p-4",children:[(0,w.jsxs)("section",{className:"homepage__header container pt-0 pb-2 ps-1 pe-4 mb-2 user-select-none",children:[(0,w.jsx)(P.Z,{ref:t,className:"d-inline-block me-2",style:{width:"35px",height:"35px"},animationData:y}),(0,w.jsx)("span",{className:"d-inline-block mt-2",children:"CHAT ZONED"})]}),(0,w.jsxs)("section",{className:"app__body container p-2 mb-2 ".concat(s),children:[(0,w.jsxs)("div",{className:"container d-flex justify-content-between",children:[(0,w.jsx)("button",{className:"app__btnToggle fs-4 btn ".concat(o?"btn-warning":"text-light"," rounded-pill col m-1 ").concat(s),onMouseDown:function(){return l(!0)},children:"Login"}),(0,w.jsx)("button",{className:"app__btnToggle fs-4 btn ".concat(o?"text-light":"btn-warning"," rounded-pill col m-1 ").concat(s),onMouseDown:function(){return l(!1)},children:"Register"})]}),(0,w.jsx)("section",{className:"app__form container text-light p-2 ".concat(s),children:o?(0,w.jsx)(j,{}):(0,w.jsx)(v,{})})]})]}),o&&(0,w.jsxs)("div",{className:"footer fs-5 w-75 text-light",children:["\xa9 2022 Made with \ud83d\udc99 by \xa0",(0,w.jsx)("a",{id:"footerLink",className:"text-decoration-none",href:"https://github.com/Abhishek-Sawant-98",target:"blank",children:(0,w.jsx)("strong",{children:"Abhishek Sawant"})})]})]})}}}]);
//# sourceMappingURL=659.b60313e5.chunk.js.map