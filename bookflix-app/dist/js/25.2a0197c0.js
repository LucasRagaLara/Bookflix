"use strict";(self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[]).push([[25],{9025:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});var i=l(6768),r=l(4232),s=l(5130);const o={class:"home w-full min-h-screen items-center flex flex-col xl:pt-40 pt-48"},n=(0,i.Lk)("h1",{class:"lg:text-5xl font-bold tracking-wide leading-normal lg:mb-20 lg:mt-0 lg:ml-0 mt-5 ml-4 text-3xl mb-10 md:text-4xl"},"ELIGE TU AVATAR",-1),a={class:"flex items-start justify-center w-full lg:mx-0 gap-x-20 gap-y-10 flex-wrap"},m={key:0,class:"font-bold absolute"},d={class:"flex items-center justify-end flex-col w-full h-[13rem] 2xl:mt-10 2xl:min-h-[17rem]"},c=["src","onClick"],u=(0,i.Lk)("button",{type:"submit",class:"bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-5"},"CANCELAR",-1),f={class:"flex items-center justify-end mt-10"},h={class:"text-2xl mr-2 lg:mr-5"},p=["src"],g=(0,i.Lk)("div",{class:"lg:mb-4"},null,-1);function x(e,t,l,x,v,b){return(0,i.uX)(),(0,i.CE)("div",o,[n,(0,i.Lk)("div",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.imagenes_perfiles,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"flex flex-col xl:w-[12%] xl:mb-12 mb-6 md:w-[40%]",key:e.id},[t%6==0?((0,i.uX)(),(0,i.CE)("h1",m,(0,r.v_)(b.obtenerTitulo(t)),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",d,[(0,i.Lk)("img",{src:e.imagen,class:"2xl:min-w-64 2xl:min-h-64 lg:w-32 lg:h-32 w-36 h-36 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:border-[#C12C38] hover:border-2 hover:shadow-lg rounded-full",onClick:t=>b.imagen_seleccionada(e)},null,8,c)])])))),128))]),(0,i.Lk)("form",{class:"absolute top-10 lg:right-20 flex flex-col items-end justify-end right-5",onSubmit:t[0]||(t[0]=(0,s.D$)(((...e)=>b.volverAtras&&b.volverAtras(...e)),["prevent"]))},[u,(0,i.Lk)("div",f,[(0,i.Lk)("h1",h,(0,r.v_)(e.perfilEditando?e.perfilEditando.nombre:e.nuevoPerfil.nombre),1),(0,i.Lk)("img",{src:e.perfilEditando?e.perfilEditando.imagen:e.nuevoPerfil.imagen,alt:"",class:"lg:w-[20%] w-[15%]"},null,8,p)])],32),g])}var v=l(782),b={data(){return{}},computed:{...(0,v.aH)(["perfilEditando","imagenes_perfiles","lista_titulos","perfiles","nuevoPerfil"])},methods:{volverAtras(){this.$router.push(`/editar-perfil/${this.$route.params.id}`)},obtenerTitulo(e){const t=Math.floor(e/6);return this.lista_titulos[t]?this.lista_titulos[t].nombre:""},imagen_seleccionada(e){0!==Object.keys(this.perfilEditando).length?(this.$store.commit("ACTUALIZAR_IMAGEN_PERFIL",{perfilId:this.perfilEditando.id,nuevaImagen:e.imagen}),this.$store.commit("GUARDAR_PERFIL_EDITANDO",{...this.perfilEditando,imagen:e.imagen})):this.$store.commit("INICIALIZAR_PERFIL",{...this.nuevoPerfil,imagen:e.imagen}),this.$router.push({path:`/editar-perfil/${this.$route.params.id}`,replace:!0})}},mounted(){document.body.style.cssText+="overflow: auto !important;";const e=localStorage.getItem("imagenes");e&&this.$store.commit("SET_IMAGENES_PERFILES",JSON.parse(e))},beforeUnmount(){document.body.style.cssText+="overflow: hidden;"}},E=l(1241);const k=(0,E.A)(b,[["render",x]]);var A=k}}]);
//# sourceMappingURL=25.2a0197c0.js.map