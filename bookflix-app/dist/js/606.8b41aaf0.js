"use strict";(self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[]).push([[606],{9606:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var o=r(6768),i=r(4232),l=r(5130);const a=e=>((0,o.Qi)("data-v-a4f227f2"),e=e(),(0,o.jt)(),e),s={class:"home w-full min-h-screen items-center flex flex-col xl:pt-28 pt-[15rem]"},n={class:"flex items-center justify-center lg:w-[50%] w-full mx-auto h-[60vh] gap-x-40 flex-col"},c={class:"w-full flex flex-col"},f={class:"mb-10 flex items-center justify-center"},d={class:"text-4xl flex items-start justify-start mt-5 font-bold"},m={class:"w-full flex lg:flex-row flex-col items-center justify-center gap-x-10 mb-20"},u={class:"border border-red-900 h-[15rem] lg:w-[35%] w-[75%] lg:mx-0 mx-auto rounded-lg flex-col flex pt-10 pl-10 lg:mb-0 mb-10"},p=a((()=>(0,o.Lk)("label",{for:"Nombre",class:"font-bold mb-4"},"Elige tu nombre",-1))),h={class:"lg:w-[20%] w-[60%] flex items-center justify-center relative"},g=["src"],E={class:"w-[3.5rem] h-[3.5rem] items-center justify-center bg-[#C12C38] flex absolute bottom-0 right-7 rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#c12c38] hover:bg-[#f1f1f1] text-[#f1f1f1]"},b={class:"flex items-center justify-center lg:w-full gap-x-10 w-[90%] mx-auto"},x={class:"flex items-center justify-center"},R={class:"flex items-center justify-center"},I={class:"absolute lg:top-10 lg:right-20 top-5 right-5 flex flex-col items-end justify-end w-full"};function S(e,t,r,a,S,v){return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("div",n,[(0,o.Lk)("form",c,[(0,o.Lk)("div",f,[(0,o.Lk)("h1",d,(0,i.v_)(e.perfilEditando?"Editar perfil":"Crear nuevo perfil"),1)]),(0,o.Lk)("div",m,[(0,o.Lk)("div",u,[p,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"bg-[#802C32] rounded-lg outline-none placeholder:text-[#c1c1c1] border-none pl-4 p-1 w-[80%]",placeholder:"Nombre","onUpdate:modelValue":t[0]||(t[0]=e=>S.nombre=e),maxlength:"20"},null,512),[[l.Jo,S.nombre]])]),(0,o.Lk)("div",h,[(0,o.Lk)("img",{src:0===Object.keys(e.perfilEditando).length?e.nuevoPerfil.imagen:e.perfilEditando.imagen,alt:"",ref:"imagenSeleccionada"},null,8,g),(0,o.Lk)("div",E,[(0,o.Lk)("i",{class:"fa-solid fa-pencil text-3xl",onClick:t[1]||(t[1]=e=>v.seleccionarImagen())})])])]),(0,o.Lk)("div",b,[(0,o.Lk)("div",x,[(0,o.Lk)("button",{type:"button",class:"bg-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-12 lg:text-xl text-sm mx-auto lg:mx-0",onClick:t[2]||(t[2]=(...e)=>v.cancelarEdicionPerfiles&&v.cancelarEdicionPerfiles(...e))},"VOLVER")]),(0,o.Lk)("div",R,[(0,o.Lk)("button",{type:"button",class:"border-2 border-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 lg:text-xl text-sm mx-auto lg:mx-0",onClick:t[3]||(t[3]=(...e)=>v.borrarPerfil&&v.borrarPerfil(...e))},"BORRAR PERFIL")])])]),(0,o.Lk)("div",I,[(0,o.Lk)("button",{type:"button",class:"bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-12",onClick:t[4]||(t[4]=(...e)=>v.listo&&v.listo(...e))},"LISTO")])])])}var v=r(782),L=r(4373),P=r(4874),k=r.n(P),y={data(){return{nombre:"",imagenSeleccionada:null}},mounted(){const e=localStorage.getItem("nombrePerfilEditando");e?this.nombre=e:(this.nombre=0===Object.keys(this.perfilEditando).length?this.nuevoPerfil.nombre:this.perfilEditando.nombre,void 0==this.nombre&&(this.nombre=""));const t=localStorage.getItem("perfilEditando");t&&JSON.parse(t).id&&this.$store.commit("GUARDAR_PERFIL_EDITANDO",JSON.parse(t));const r=localStorage.getItem("lista_perfiles");r&&this.$store.commit("SET_PERFILES",JSON.parse(r));const o=localStorage.getItem("imagenes");o&&this.$store.commit("SET_IMAGENES_PERFILES",JSON.parse(o));const i=localStorage.getItem("nuevoPerfil");i&&(console.log(i),this.$store.commit("INICIALIZAR_PERFIL",JSON.parse(i)));const l=async()=>{const e=this.$route.params.id,t=this.perfiles.find((t=>t.id==e));void 0!==t?console.log("Estoy editando un perfil"):0==this.nuevoPerfil&&(console.log("Si es false, es que no se ha creado y se crea"),this.crearPerfil())};l()},computed:{...(0,v.aH)(["perfilEditando","imagenes_perfiles","nuevoPerfil","perfiles"])},methods:{...(0,v.PY)(["RESETEAR_EDICION","RESETEAR_NUEVO_PERFIL","RESETEAR_NOMBRE_PERFIL"]),...(0,v.i0)(["crearPerfil"]),async listo(){if(!this.nombre||this.nombre.length<3||this.nombre.length>=20)return void k().fire({icon:"error",title:"Oops...",text:"El nombre debe estar entre 3 y 20 caracteres"});const e=localStorage.getItem("userId");if(this.imagenSeleccionada=this.$refs.imagenSeleccionada.src,0!==Object.keys(this.perfilEditando).length)try{const t=await L.A.put(`/api/perfiles/editar/${this.$route.params.id}`,{nombre:this.nombre,imagen:this.imagenSeleccionada});t.data.success?(this.RESETEAR_EDICION(),this.RESETEAR_NOMBRE_PERFIL(),this.$router.push({name:"Perfil",params:{id:e}})):k().fire({icon:"error",title:"Oops...",text:"No se pudo editar el perfil"})}catch(t){console.error("Hubo un error al editar el perfil",t)}else try{const t=await L.A.post("/api/perfiles/agregar",{id_usuario:e,id_perfil:this.$route.params.id,nombre:this.nombre,imagen:this.imagenSeleccionada});t.data.success?(this.RESETEAR_NUEVO_PERFIL(),this.RESETEAR_NOMBRE_PERFIL(),this.$router.push({name:"Perfil",params:{id:e}})):k().fire({icon:"error",title:"Oops...",text:"El perfil ya existe en la base de datos"})}catch(t){console.log("Hubo un error al agregar el perfil",t)}},seleccionarImagen(){localStorage.setItem("nombrePerfilEditando",void 0!==this.nombre?this.nombre:""),this.$router.push({name:"cambiar-imagen",params:{id:this.$route.params.id}})},cancelarEdicionPerfiles(){this.RESETEAR_NUEVO_PERFIL(),this.RESETEAR_NOMBRE_PERFIL();const e=localStorage.getItem("userId");localStorage.removeItem("nombrePerfilEditando"),this.$router.push({name:"Perfil",params:{id:e}})},borrarPerfil(){const e=localStorage.getItem("userId");localStorage.removeItem("nombrePerfilEditando"),k().fire({title:"Vas a borrar el perfil ¿Deseas continuar?",text:"Esta acción no se puede deshacer.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#C12C38",cancelButtonColor:"#d33",confirmButtonText:"Sí, borrar",cancelButtonText:"Cancelar"}).then((async t=>{if(t.isConfirmed)try{const t=await L.A.delete(`/api/perfiles/eliminar/${this.$route.params.id}`);t.data.success?this.$router.push({name:"Perfil",params:{id:e}}):k().fire({icon:"error",title:"Oops...",text:"No se ha podido borrar el perfil"})}catch(r){console.log(r)}}))}},created(){}},_=r(1241);const C=(0,_.A)(y,[["render",S],["__scopeId","data-v-a4f227f2"]]);var O=C}}]);
//# sourceMappingURL=606.8b41aaf0.js.map