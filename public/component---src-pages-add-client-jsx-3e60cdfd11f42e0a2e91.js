(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OD8L:function(e,a,n){},XDgp:function(e,a,n){"use strict";n.r(a),n.d(a,"getClients",(function(){return u})),n.d(a,"editClient",(function(){return m})),n.d(a,"addClient",(function(){return b}));var t=n("kD0k"),l=n.n(t),r=(n("ls82"),n("/S4K")),o=n("yyPw"),i=n("vDqi"),c=n.n(i),d=function(e){return{type:o.e,payload:e}},u=function(){return function(){var e=Object(r.a)(l.a.mark((function e(a){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://localhost:3000/api/clients");case 2:return n=e.sent,t=n.data,e.abrupt("return",a(d(t)));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},p=function(e){return{type:o.b,payload:e}},m=function(e){return function(){var e=Object(r.a)(l.a.mark((function e(a){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()({url:"http://localhost:3000/api/clients/",method:"PUT",headers:C,data:t});case 2:return n=e.sent,t=n.data,alert(n.data.status),e.abrupt("return",a(p(t)));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},s=function(e){return{type:o.a,payload:e}},C={"Content-Type":"application/json"},b=function(e){return function(){var a=Object(r.a)(l.a.mark((function a(n){var t,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={url:"http://localhost:3000/api/clients",method:"POST",headers:C,data:e},a.next=3,c()(t);case 3:return r=a.sent,alert(r.data.status),n(s([])),a.abrupt("return",u);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},pSIW:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("OD8L"),n("q4sD"),n("Wbzz"),n("/MKj")),o=n("ANjH"),i=n("XDgp"),c=n("Rb52"),d=n("NSxh"),u=n("UGp+"),p=n("KYPV"),m=n("cWnB"),s=n("zUrK"),C=n("QojX"),b=n("JI6e"),v=u.b({UserId:u.c().required(),Nombre:u.c().required(),ApellidoPat:u.c().required(),ApellidoMat:u.c().required(),Curp:u.c().required(),Colonia:u.c().required(),Direccion:u.c().required(),Celular:u.c().required(),Telefono:u.c().required(),Correo:u.c().required(),Adeudo:u.c().required(),Tipo:u.c().required(),Terms:u.a().required(),FechaInscripcion:u.a().required()});a.default=Object(r.b)((function(e){return{clients:e.clients.clients}}),(function(e){return Object(o.b)(i,e)}))((function(e){var a=e.addClient,n=(e.editClient,e.location.state),r=e.clients,o=n?n.id:0,i=r.filter((function(e){return e._id===o}))[0]||null,u=Object(t.useState)({Estado:!0,UserId:i?i.UserId:"",Tipo:i?i.Tipo:"",Nombre:i?i.Nombre:"",ApellidoPat:i?i.ApellidoPat:"",ApellidoMat:i?i.ApellidoMat:"",Curp:i?i.Curp:"",Colonia:i?i.Colonia:"",Direccion:i?i.Direccion:"",Celular:i?i.Celular:"",Telefono:i?i.Telefono:"",Correo:i?i.Correo:"",Adeudo:i?i.Adeudo:"",FechaInscripcion:i?i.FechaInscripcion:""}),E=u[0],h=u[1],f=function(e){var a;e.preventDefault(),h(Object.assign({},E,((a={})[e.target.name]=e.target.value,a)))},F=function(e){e.preventDefault(),a(E)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(t.Fragment,null,l.a.createElement("div",{className:"label-addClient"},l.a.createElement(p.a,{validationSchema:v,onSubmit:F,initialValues:{Estado:!0,UserId:"",Tipo:"",Nombre:"",ApellidoPat:"",ApellidoMat:"",Curp:"",Colonia:"",Direccion:"",Celular:"",Telefono:"",Correo:"",Adeudo:"",FechaInscripcion:""}},(function(e){e.handleBlur;var a=e.touched,n=(e.isValid,e.isInvalid,e.errors);return l.a.createElement(C.a,{noValidate:!0,onSubmit:F},l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:b.a,md:"4",controlId:"validationFormik01"},l.a.createElement(C.a.Label,null,"Identificador"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Identificador",name:"UserId",value:E.UserId,onChange:f,isValid:a.UserId&&!n.UserId,isInvalid:!!n.UserId}),l.a.createElement(C.a.Control.Feedback,null,"se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Nombre)),l.a.createElement(C.a.Group,{as:b.a,md:"4",controlId:"validationFormik01"},l.a.createElement(C.a.Label,null,"Nombre"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Nombre",name:"Nombre",value:E.Nombre,onChange:f,isValid:a.Nombre&&!n.Nombre,isInvalid:!!n.Nombre}),l.a.createElement(C.a.Control.Feedback,null,"se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Nombre)),l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik02"},l.a.createElement(C.a.Label,null,"Primer Apellido"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Primer Apellido",name:"ApellidoPat",value:E.ApellidoPat,onChange:f,isValid:a.ApellidoPat&&!n.ApellidoPat,isInvalid:!!n.apellidoPat}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.ApellidoPat)),l.a.createElement(C.a.Group,{as:b.a,md:"4",controlId:"validationFormikUsername"},l.a.createElement(C.a.Label,null,"Segundo Apellido"),l.a.createElement(s.a,null,l.a.createElement(C.a.Control,{type:"text",placeholder:"Segundo Apellido","aria-describedby":"inputGroupPrepend",name:"ApellidoMat",value:E.ApellidoMat,onChange:f,isValid:a.ApellidoMat&&!n.ApellidoMat,isInvalid:!!n.ApellidoMat}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.ApellidoMat)))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik03"},l.a.createElement(C.a.Label,null,"CURP"),l.a.createElement(C.a.Control,{type:"text",placeholder:"CURP",name:"Curp",value:E.Curp,onChange:f,isValid:a.Curp&&!n.Curp,isInvalid:!!n.Curp}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Curp)),l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik04"},l.a.createElement(C.a.Label,null,"Dirección"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Calle y número exterior",name:"Direccion",value:E.Direccion,onChange:f,isValid:a.Direccion&&!n.Direccion,isInvalid:!!n.Direccion}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Direccion)),l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik05"},l.a.createElement(C.a.Label,null,"Celular"),l.a.createElement(C.a.Control,{type:"text",placeholder:"1112223344",name:"Celular",value:E.Celular,onChange:f,isValid:a.Celular&&!n.Celular,isInvalid:!!n.Celular}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Celular))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:b.a,md:"6",controlId:"validationFormik03"},l.a.createElement(C.a.Label,null,"Colonia"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Colonia",name:"Colonia",value:E.Colonia,onChange:f,isValid:a.Colonia&&!n.Colonia,isInvalid:!!n.Colonia}),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Colonia)),l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik04"},l.a.createElement(C.a.Label,null,"Teléfono"),l.a.createElement(C.a.Control,{type:"text",placeholder:"1112223344",name:"Telefono",value:E.Telefono,onChange:f,isValid:a.Telefono&&!n.Telefono,isInvalid:!!n.Telefono}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Telefono)),l.a.createElement(C.a.Group,{as:b.a,md:"3",controlId:"validationFormik05"},l.a.createElement(C.a.Label,null,"Correo"),l.a.createElement(C.a.Control,{type:"text",placeholder:"asd@asd.com",name:"Correo",value:E.Correo,onChange:f,isValid:a.Correo&&!n.Correo,isInvalid:!!n.Correo}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Correo))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Group,{as:b.a,md:"2",controlId:"validationFormik06"},l.a.createElement(C.a.Label,null,"Adeudo"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Adeudo",name:"Adeudo",value:E.Adeudo,onChange:f,isValid:a.Adeudo&&!n.Adeudo,isInvalid:!!n.Adeudo}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Adeudo)),l.a.createElement(C.a.Group,{as:b.a,md:"2",controlId:"validationFormik07"},l.a.createElement(C.a.Label,null,"Tipo de Cliente"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Tipo",name:"Tipo",value:E.Tipo,onChange:f,isValid:a.Tipo&&!n.Tipo,isInvalid:!!n.Tipo}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.Tipo)),l.a.createElement(C.a.Group,{as:b.a,md:"2",controlId:"validationFormik07"},l.a.createElement(C.a.Label,null,"Fecha de ingreso"),l.a.createElement(C.a.Control,{type:"date",name:"FechaInscripcion",value:E.FechaInscripcion,onChange:f,isValid:a.FechaInscripcion&&!n.FechaInscripcion,isInvalid:!!n.FechaInscripcion}),l.a.createElement(C.a.Control.Feedback,null,"Se ve bien"),l.a.createElement(C.a.Control.Feedback,{type:"invalid"},n.FechaInscripcion))),l.a.createElement(C.a.Group,null,l.a.createElement(C.a.Check,{required:!0,name:"Terms",label:"Acepto los términos y condiciones",onChange:f,isInvalid:!!n.Terms,iaValid:a.Terms,feedback:n.Terms,id:"validationFormik07"})),l.a.createElement(m.a,{type:"submit"},"Aceptar"))})))),l.a.createElement(d.a,null))}))}}]);
//# sourceMappingURL=component---src-pages-add-client-jsx-3e60cdfd11f42e0a2e91.js.map