(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5711275c"],{"852e":function(e,a,s){"use strict";s.r(a);var r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"ag-grid-demo"}},[s("vx-card",[s("div",{attrs:{id:"titulo"}},[s("h1",[s("strong",[e._v("Crear Nuevo Usuario")])])])]),s("vx-card",[[s("form",[s("vs-row",[s("vs-col",{staticClass:"details",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[s("div",{staticClass:"vx-col w-full details"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{placeholder:"william@gmail.com",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"",label:"Correo Electrónico"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1)]),s("vs-col",{staticClass:"details",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[s("div",{staticClass:"vx-col w-full details"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:30",expression:"'required|max:30'"}],staticClass:"w-full",attrs:{placeholder:"William Aguirre",name:"name","icon-pack":"feather",icon:"icon-user","icon-no-border":"",label:"Nombre"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1)])],1),s("vs-row",[s("vs-col",{staticClass:"details",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[s("div",{staticClass:"vx-col w-full details"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|max:30",expression:"'required|alpha_dash|max:30'"}],staticClass:"w-full",attrs:{placeholder:"monowilliam",name:"username","icon-pack":"feather",icon:"icon-users","icon-no-border":"",label:"Nombre de Usuario"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("username")))])],1)]),s("vs-col",{staticClass:"details",attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"6"}},[s("div",{staticClass:"vx-col w-full details"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:15",expression:"'required|min:6|max:15'"}],staticClass:"w-full",attrs:{placeholder:"Contraseña",name:"password","icon-pack":"feather",icon:"icon-lock","icon-no-border":"",label:"Contraseña"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))])],1)])],1),s("vs-row",[s("vs-col",{staticClass:"details",attrs:{"vs-w":"2"}},[s("vs-button",{attrs:{type:"filled"},on:{click:function(a){return a.preventDefault(),e.submitForm(a)}}},[e._v("Crear")])],1),s("vs-col",{staticClass:"details",attrs:{"vs-w":"10"}},[s("vs-button",{staticClass:"details",attrs:{color:"success",type:"filled",to:"/listadoUsuarios"}},[e._v("Volver a la lista")])],1)],1)],1)]],2)],1)},t=[],i=(s("7f7f"),s("bc3a")),o=s.n(i),l={data:function(){return{name:"",password:"",username:"",email:""}},methods:{submitForm:function(){var e=this;this.$validator.validateAll().then((function(a){a?o.a.post(e.url.users,{id:0,email:e.email,name:e.name,password:e.password,username:e.username},{headers:{Authorization:e.infoUser.token}}).then((function(a){e.$vs.notify({color:"success",title:"Usuario Creado Correctamente",iconPack:"feather",icon:"icon-check"}),e.$router.push({name:"listadoUsuarios"})})).catch((function(a){e.$vs.notify({color:"danger",title:"No se pudo crear el Usuario. Error en la API",text:a,iconPack:"feather",icon:"icon-alert-circle"})})):e.$vs.notify({color:"danger",title:"Campos Incorrectos",text:"Debes llenar los campos correctamente",iconPack:"feather",icon:"icon-alert-circle"})}))}},computed:{url:function(){return this.$store.state.urlsAPI},infoUser:function(){return this.$store.state.loginInfo}}},n=l,c=(s("9dea"),s("2877")),u=Object(c["a"])(n,r,t,!1,null,"89809130",null);a["default"]=u.exports},"9dea":function(e,a,s){"use strict";var r=s("ac75"),t=s.n(r);t.a},ac75:function(e,a,s){}}]);
//# sourceMappingURL=chunk-5711275c.81d440e4.js.map