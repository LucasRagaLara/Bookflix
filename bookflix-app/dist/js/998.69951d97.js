"use strict";(self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[]).push([[998],{2998:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var l=i(6768),o=i(4232);const r={class:"home w-full min-h-screen items-center flex flex-col xl:pt-40 pt-48"},s=(0,l.Lk)("h1",{class:"lg:text-5xl font-bold tracking-wide leading-normal lg:mb-20 lg:mt-0 lg:ml-0 mt-5 ml-4"},"ELIGE TU AVATAR",-1),a={class:"flex items-center justify-center w-[90%] mx-auto gap-x-40 gap-y-10 flex-wrap mb-10"},n={key:0,class:"font-bold absolute"},u={class:"flex items-center justify-end flex-col h-[19rem]"},c=["src","onClick"],d={class:"absolute top-10 lg:right-20 flex flex-col items-end justify-end right-5"},m={class:"flex items-center justify-end mt-10"},f={class:"text-2xl mr-2 lg:mr-5"},p=["src"];function g(e,t,i,g,h,v){return(0,l.uX)(),(0,l.CE)("div",r,[s,(0,l.Lk)("div",a,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.imagenes_perfiles,((e,t)=>((0,l.uX)(),(0,l.CE)("div",{class:"flex flex-col w-[10%]",key:e.id},[t%6==0?((0,l.uX)(),(0,l.CE)("h1",n,(0,o.v_)(v.obtenerTitulo(t)),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",u,[(0,l.Lk)("img",{src:e.imagen,class:"transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer hover:border-[#C12C38] hover:border-2 hover:shadow-lg rounded-full",onClick:t=>v.imagen_seleccionada(e)},null,8,c)])])))),128)),(0,l.Lk)("form",d,[(0,l.Lk)("button",{class:"bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-5",onClick:t[0]||(t[0]=e=>v.volverAtras())},"CANCELAR"),(0,l.Lk)("div",m,[(0,l.Lk)("h1",f,(0,o.v_)(e.perfilEditando?e.perfilEditando.user:e.nuevoPerfil.user),1),(0,l.Lk)("img",{src:e.perfilEditando?e.perfilEditando.imagen:e.nuevoPerfil.imagen,alt:"",class:"lg:w-[20%] w-[15%]"},null,8,p)])])])])}var h=i(782),v={data(){return{}},computed:{...(0,h.aH)(["perfilEditando","imagenes_perfiles","lista_titulos","perfiles","nuevoPerfil"])},methods:{volverAtras(){this.$router.push(`/editar-perfil/${this.$route.params.id}`)},obtenerTitulo(e){const t=Math.floor(e/6);return this.lista_titulos[t]?this.lista_titulos[t].nombre:""},imagen_seleccionada(e){0!==Object.keys(this.perfilEditando).length?(console.log("ahora es del perfil, al modificarlo hara put"),this.$store.commit("ACTUALIZAR_IMAGEN_PERFIL",{perfilId:this.perfilEditando.id,nuevaImagen:e.imagen}),this.$store.commit("GUARDAR_PERFIL_EDITANDO",{...this.perfilEditando,imagen:e.imagen})):(console.log("es del nuevo perfil, por que perfilEditando sigue siendo {} y te entrará en agregar"),console.log("lo que paso para inicializar el nuevo perfil",{...this.nuevoPerfil,imagen:e.imagen}),this.$store.commit("INICIALIZAR_PERFIL",{...this.nuevoPerfil,imagen:e.imagen})),this.$router.push({path:`/editar-perfil/${this.$route.params.id}`,replace:!0})}},mounted(){document.body.style.cssText+="overflow: auto !important;";const e=localStorage.getItem("imagenes");e&&this.$store.commit("SET_IMAGENES_PERFILES",JSON.parse(e))},beforeUnmount(){document.body.style.cssText+="overflow: hidden !important;"}},E=i(1241);const x=(0,E.A)(v,[["render",g]]);var k=x}}]);
//# sourceMappingURL=998.69951d97.js.map