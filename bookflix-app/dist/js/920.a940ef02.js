"use strict";(self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[]).push([[920],{7147:function(e,t,n){Object.defineProperty(t,"B",{value:!0});const l=n(8542),a=n(1175),o=l.__importDefault(n(5590)),r=l.__importDefault(n(2681));t.A=(0,a.defineComponent)({data(){return{particlesOptions1:o.default,particlesOptions2:r.default,container:""}},name:"particlesComponent",methods:{async particlesLoaded(e){this.container=e}},mounted(){this.particlesLoaded("someContainer")}})},5075:function(e,t,n){Object.defineProperty(t,"B",{value:!0});const l=n(8542),a=n(1175),o=l.__importDefault(n(1145));t.A=(0,a.defineComponent)({name:"HomePage",components:{particlesComponent:o.default}})},8828:function(e,t,n){t.X=void 0;const l=n(1175);function a(e,t,n,a,o,r){const i=(0,l.resolveComponent)("vue-particles");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createVNode)(i,{id:"particles1",particlesLoaded:e.particlesLoaded,options:e.particlesOptions1},null,8,["particlesLoaded","options"]),(0,l.createVNode)(i,{id:"particles2",particlesLoaded:e.particlesLoaded,options:e.particlesOptions2},null,8,["particlesLoaded","options"])])}t.X=a},8801:function(e,t,n){t.X=void 0;const l=n(1175),a=e=>((0,l.pushScopeId)("data-v-26a960a4"),e=e(),(0,l.popScopeId)(),e),o={class:"home w-full 2xl:min-h-screen lg:min-h-screen 2xl:pt-28 lg:pt-0 md:pt-36 pt-12"},r={class:"flex w-[60%] absolute right-0 top-0"},i={class:"2xl:justify-start 2xl:w-full 2xl:h-[45rem] lg:h-[37rem] lg:w-[50%] lg:pb-12 h-screen items-center justify-center flex relative z-3"},s={class:"2xl:w-[45%] lg:w-[90%] flex flex-col items-center justify-center w-[95%] lg:items-center"},c=a((()=>(0,l.createElementVNode)("h1",{class:"2xl:text-5xl 2xl:mb-12 lg:mb-4 text-center font-bold tracking-wider leading-normal text-3xl mb-20"},"¡BIENVENIDO A TU MUNDO DE HISTORIAS SIN FIN!",-1))),u=a((()=>(0,l.createElementVNode)("p",{class:"2xl:text-2xl 2xl:text-center 2xl:mb-2 lg:mb-4 lg:text-lg tracking-wider leading-normal text-justify w-[90%] mx-auto mb-10"},[(0,l.createElementVNode)("strong",null,"Descubre"),(0,l.createTextVNode)(" un mundo de lecturas en línea.")],-1))),d=a((()=>(0,l.createElementVNode)("p",{class:"2xl:text-2xl 2xl:text-center lg:text-lg tracking-wider leading-normal text-justify w-[90%] mx-auto mb-5"},[(0,l.createElementVNode)("strong",null,"Explora"),(0,l.createTextVNode)(", lee y repite: Tu viaje literario te espera.")],-1))),p={class:"2xl:gap-x-28 flex mt-5 2xl:h-28 2xl:w-full w-[95%] items-center justify-center gap-x-12 mx-auto 2xl:mx-0 2xl:mb-0"},m=a((()=>(0,l.createElementVNode)("div",null,null,-1)));function x(e,t,n,a,x,f){const b=(0,l.resolveComponent)("particlesComponent"),v=(0,l.resolveComponent)("routerLink");return(0,l.openBlock)(),(0,l.createElementBlock)("div",o,[(0,l.createElementVNode)("div",r,[(0,l.createVNode)(b)]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",s,[c,u,d,(0,l.createElementVNode)("div",p,[(0,l.createVNode)(v,{to:"/login",class:"2xl:px-10 2xl:py-4 bg-[#C12C38] rounded-xl animation_per px-4 py-2 2xl:text-xl text-sm"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Iniciar sesión")])),_:1}),(0,l.createVNode)(v,{to:"/registro",class:"2xl:px-10 2xl:py-4 border-2 border-[#40BFBC] rounded-xl px-4 py-2 animation_per bg-[#0c0c33] 2xl:text-xl text-sm"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("Registrarse")])),_:1})])]),m])])}t.X=x},1145:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return a.B},default:function(){return i}});var l=n(8828),a=n(7147),o=n(1241);const r=(0,o.A)(a.A,[["render",l.X],["__scopeId","data-v-f2b03058"]]);var i=r},5920:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return a.B},default:function(){return i}});var l=n(8801),a=n(5075),o=n(1241);const r=(0,o.A)(a.A,[["render",l.X],["__scopeId","data-v-26a960a4"]]);var i=r},2681:function(e){e.exports=JSON.parse('{"fpsLimit":120,"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"bubble"}},"modes":{"bubble":{"distance":400,"duration":2000,"opacity":1,"speed":6,"size":15},"push":{"quantity":1},"repulse":{"distance":200,"duration":0.4}}},"backgroundMask":{"composite":"out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"clear":true,"defaultThemes":{},"delay":0,"fullScreen":{"enable":true,"zIndex":0},"particles":{"color":{"value":"#00beb2"},"move":{"direction":"bottom-right","enable":true,"outModes":"out","random":false,"speed":3,"straight":false,"out_mode":"out","bounce":false},"number":{"density":{"enable":true},"value":10},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.3,"sync":true}},"shape":{"type":"circle"},"size":{"value":{"min":6,"max":12},"random":true,"anim":{"enable":false,"speed":40,"size_min":0.2,"sync":false}}},"detectRetina":true}')},5590:function(e){e.exports=JSON.parse('{"fpsLimit":120,"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"bubble"}},"modes":{"bubble":{"distance":300,"duration":2,"opacity":1,"speed":6,"size":15},"push":{"quantity":2},"repulse":{"distance":200,"duration":0.4}}},"backgroundMask":{"composite":"out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"clear":true,"defaultThemes":{},"delay":0,"fullScreen":{"enable":true,"zIndex":0},"particles":{"color":{"value":"#E53544"},"move":{"direction":"bottom-right","enable":true,"outModes":"out","random":false,"speed":3,"straight":false,"out_mode":"out","bounce":false},"number":{"density":{"enable":true},"value":10},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.3,"sync":true}},"shape":{"type":"circle"},"size":{"value":{"min":6,"max":12},"random":true,"anim":{"enable":false,"speed":40,"size_min":0.2,"sync":false}}},"detectRetina":true}')}}]);
//# sourceMappingURL=920.a940ef02.js.map