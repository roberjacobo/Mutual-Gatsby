(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2erj":function(e,t,a){"use strict";a.r(t),a.d(t,"login",(function(){return m})),a.d(t,"logout",(function(){return d}));var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("/S4K")),c=a("yyPw"),u=a("vDqi"),i=a.n(u),s=function(e){return{type:c.c,payload:e}},o={"Content-Type":"application/json"},m=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n,l,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={url:"http://localhost:3000/api/login",method:"POST",headers:o,data:e},t.next=3,i()(n);case 3:return l=t.sent,c=l.data,a(s(c)),t.abrupt("return",l);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:c.d}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},"61qz":function(e,t,a){},E1l6:function(e,t,a){},L2oU:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("/MKj"),u=a("ANjH"),i=a("XDgp"),s=a("2erj"),o=a("Rb52"),m=a("NSxh"),d=a("MBJH"),E=(a("61qz"),a("cWnB")),p=function(e){var t=e.clients;return r.a.createElement("div",{className:"table-container"},r.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Nombre(s)"),r.a.createElement("th",null,"Primer Apellido"),r.a.createElement("th",null,"Segundo Apellido"),r.a.createElement("th",null,"CURP"),r.a.createElement("th",null,"Colonia"),r.a.createElement("th",null,"Dirección"),r.a.createElement("th",null,"Celular"),r.a.createElement("th",null,"Teléfono"),r.a.createElement("th",null,"Correo"),r.a.createElement("th",null,"Adeudo"),r.a.createElement("th",null,"Fecha de inscripción"),r.a.createElement("th",null,"Tipo"),r.a.createElement("th",null,"Acciones"))),r.a.createElement("tbody",null,t?t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.UserId),r.a.createElement("td",null,e.Nombre),r.a.createElement("td",null,e.ApellidoPat),r.a.createElement("td",null,e.ApellidoMat),r.a.createElement("td",null,e.Curp),r.a.createElement("td",null,e.Colonia),r.a.createElement("td",null,e.Direccion),r.a.createElement("td",null,e.Celular),r.a.createElement("td",null,e.Telefono),r.a.createElement("td",null,e.Correo),r.a.createElement("td",null,"$",e.Adeudo,".00"),r.a.createElement("td",null,e.FechaInscripcion),r.a.createElement("td",null,e.Tipo),r.a.createElement("td",null,r.a.createElement("div",{className:"btnClient-Container"},r.a.createElement(l.Link,{to:"/addClient/",state:{id:e._id}},r.a.createElement(E.a,{variant:"warning"},"Actualizar")),r.a.createElement(E.a,null,"Eliminar"))))})):"")))},f=(a("ykak"),a("jDKy")),b=a("zUrK"),v=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{className:"cl-2"},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,null,"Usuario")),r.a.createElement(f.a,null)),r.a.createElement("br",null),r.a.createElement(b.a,{className:"cl-2"},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,null,"Monto")),r.a.createElement(f.a,{type:"number"})),r.a.createElement("div",{className:"button-container"},r.a.createElement(E.a,{variant:"success",className:"btnVerde"},"Aceptar"),r.a.createElement(E.a,{variant:"danger",className:"btnRojo"},"Cancelar"))))},h=(a("bi1N"),function(){return r.a.createElement("div",null,r.a.createElement(b.a,{className:"cl-2"},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,null,"Monto")),r.a.createElement(f.a,{type:"number"})),r.a.createElement("br",null),r.a.createElement(b.a,{className:"cl-2"},r.a.createElement(b.a.Prepend,null,r.a.createElement(b.a.Text,null,"Justificación")),r.a.createElement(f.a,{as:"textarea","aria-label":"With textarea"})),r.a.createElement("div",{className:"button-container"},r.a.createElement(E.a,{variant:"success",className:"btnVerde"},"Aceptar"),r.a.createElement(E.a,{variant:"danger",className:"btnRojo"},"Cancelar")))}),y=(a("E1l6"),function(e){var t=e.clients;return r.a.createElement("div",null,r.a.createElement("div",{className:"ficha-container"},r.a.createElement("div",{className:"ficha"},r.a.createElement("h2",null,"Totales"),r.a.createElement("br",null),r.a.createElement("h4",null,"Cantidad de Empleados"),r.a.createElement("label",null,"5555"),r.a.createElement("h4",null,"Ingreso Neto"),r.a.createElement("label",null,"$ 5555"),r.a.createElement("h4",null,"Total de Socios inscritos"),r.a.createElement("label",null,t.length),r.a.createElement("h4",null,"Socios por cobrar"),r.a.createElement("label",null,"5555"),r.a.createElement("h4",null,"Ingreso Bruto"),r.a.createElement("label",null,"$ 5555"),r.a.createElement("div",{className:"btn-container"},r.a.createElement(E.a,{variant:"dark"},"Mutual Máster"),r.a.createElement(E.a,{variant:"dark"},"Mutual Máster (Empresarial)")))))});a("gOx0");t.default=Object(c.b)((function(e){return{clients:e.clients.clients,employees:e.employees.employees}}),(function(e){return Object(u.b)(Object.assign({},i,s),e)}))((function(e){var t=e.clients,a=e.getClients,c=e.employees,u=e.logout,i=Object(n.useState)([]),s=i[0];return i[1],Object(n.useEffect)((function(){a()}),[s]),Object(n.useEffect)((function(){c.ok||Object(l.navigate)("/loginPage/")}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("div",{className:"btn-form-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement(l.Link,{to:"/addClient/"},r.a.createElement(E.a,{variant:"secondary"},"Suscribir Cliente")),r.a.createElement(E.a,{variant:"success"},"Registrar Pago"),r.a.createElement(E.a,{variant:"danger"},"Egreso"),r.a.createElement(E.a,{variant:"warning"},r.a.createElement(l.Link,{to:"/historial/"},"Historial de Pagos"))),r.a.createElement("div",{className:"logOut"},r.a.createElement(E.a,{onClick:u,variant:"danger"},"Salir de la Mutual")),r.a.createElement("div",{className:"form-container"},r.a.createElement("p",null,"Buscar"),r.a.createElement("div",null,r.a.createElement(f.a,null)))),r.a.createElement("div",{className:"egresos-container"},r.a.createElement(y,{clients:t})),r.a.createElement("div",{className:"registroPago-container"},r.a.createElement("h2",null,"Registro de pagos hechos por los clientes"),r.a.createElement(v,null)),r.a.createElement("div",{className:"egresos-container"},r.a.createElement("h2",null,"Registro de egresos"),r.a.createElement(h,null)),r.a.createElement("div",{className:"lista-container"},r.a.createElement(p,{clients:t})),r.a.createElement(m.a,null))}))},MBJH:function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("TSYQ"),c=a.n(l),u=a("q1tI"),i=a.n(u),s=a("vUet"),o=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.striped,o=e.bordered,m=e.borderless,d=e.hover,E=e.size,p=e.variant,f=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(s.a)(a,"table"),h=c()(l,v,p&&v+"-"+p,E&&v+"-"+E,u&&v+"-striped",o&&v+"-bordered",m&&v+"-borderless",d&&v+"-hover"),y=i.a.createElement("table",Object(n.a)({},b,{className:h,ref:t}));if(f){var g=v+"-responsive";return"string"==typeof f&&(g=g+"-"+f),i.a.createElement("div",{className:g},y)}return y}));t.a=o},XDgp:function(e,t,a){"use strict";a.r(t),a.d(t,"getClients",(function(){return o})),a.d(t,"editClient",(function(){return d})),a.d(t,"addClient",(function(){return f}));var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("/S4K")),c=a("yyPw"),u=a("vDqi"),i=a.n(u),s=function(e){return{type:c.e,payload:e}},o=function(){return function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("http://localhost:3000/api/clients");case 2:return a=e.sent,n=a.data,e.abrupt("return",t(s(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return{type:c.b,payload:e}},d=function(e){return function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({url:"http://localhost:3000/api/clients/",method:"PUT",headers:p,data:n});case 2:return a=e.sent,n=a.data,alert(a.data.status),e.abrupt("return",t(m(n)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){return{type:c.a,payload:e}},p={"Content-Type":"application/json"},f=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={url:"http://localhost:3000/api/clients",method:"POST",headers:p,data:e},t.next=3,i()(n);case 3:return l=t.sent,alert(l.data.status),a(E([])),t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},bi1N:function(e,t,a){},gOx0:function(e,t,a){},ykak:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-mutual-jsx-46b46786096b14848377.js.map