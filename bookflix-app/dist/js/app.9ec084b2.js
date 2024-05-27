(function(){"use strict";var e={3483:function(e,t,n){n.r(t)},9220:function(e,t,n){const i=n(8542),a=n(1175),o=i.__importDefault(n(4703)),r=i.__importDefault(n(9325)),l=i.__importDefault(n(1062));n(3483);const s=n(8950),c=n(3907),u=n(292),f=i.__importDefault(n(1668)),d=n(2066),m=i.__importDefault(n(4485));customElements.define("atropos-component",m.default),s.library.add(c.faBars);const p=(0,a.createApp)(o.default);p.component("font-awesome-icon",u.FontAwesomeIcon),p.use(l.default).use(r.default),p.use(f.default,{init:async e=>{await(0,d.loadFull)(e)}}),p.mount("#app")},9325:function(e,t,n){n.r(t);var i=n(1387);const a=[{path:"/",name:"Inicio",component:()=>n.e(50).then(n.bind(n,4050))},{path:"/descubre",name:"Descubre",component:()=>n.e(252).then(n.bind(n,7228))},{path:"/ventajas",name:"Ventajas",component:()=>n.e(353).then(n.bind(n,4357))},{path:"/experiencias",name:"Experiencias",component:()=>n.e(698).then(n.bind(n,8102))},{path:"/contacto",name:"Contacto",component:()=>Promise.all([n.e(373),n.e(762)]).then(n.bind(n,7762))},{path:"/registro",name:"Registro",component:()=>Promise.all([n.e(373),n.e(774)]).then(n.bind(n,6462)),props:{rutaDefinida:"registro"}},{path:"/login",name:"Login",component:()=>Promise.all([n.e(373),n.e(774)]).then(n.bind(n,6462)),props:{rutaDefinida:"login"}},{path:"/aviso-legal",name:"aviso",component:()=>n.e(971).then(n.bind(n,1971)),props:{rutaDefinida:"aviso"}},{path:"/cookies",name:"cookies",component:()=>n.e(971).then(n.bind(n,1971)),props:{rutaDefinida:"cookies"}},{path:"/privacidad",name:"privacidad",component:()=>n.e(971).then(n.bind(n,1971)),props:{rutaDefinida:"privacidad"}},{path:"/perfil/:id",name:"Perfil",component:()=>Promise.all([n.e(373),n.e(429)]).then(n.bind(n,4429)),meta:{requiresAuth:!0}},{path:"/editar-perfil/:id",name:"editar-perfil",component:()=>Promise.all([n.e(373),n.e(46)]).then(n.bind(n,3046)),meta:{requiresAuth:!0}},{path:"/cambiar-imagen/:id",name:"cambiar-imagen",component:()=>n.e(562).then(n.bind(n,562)),meta:{requiresAuth:!0}},{path:"/404",name:"NotFound",component:()=>n.e(911).then(n.bind(n,4911))},{path:"/:pathMatch(.*)*",redirect:"/404"},{path:"/forgot",name:"forgot",component:()=>Promise.all([n.e(373),n.e(243)]).then(n.bind(n,1243))},{path:"/change-password/:id",name:"change-password",component:()=>Promise.all([n.e(373),n.e(492)]).then(n.bind(n,2492))}],o=(0,i.aE)({history:(0,i.LA)("/"),routes:a});o.beforeEach(((e,t,n)=>{const i=localStorage.getItem("token");e.matched.some((e=>e.meta.requiresAuth))?i?n():n("/login"):n()})),t["default"]=o},1062:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var i=n(782);const a=[{nombre:"Griegos"},{nombre:"Autoras"},{nombre:"Autores"},{nombre:"Libros"}];var o=(0,i.y$)({state:{responsive:!1,perfilEditando:{},imagenes_perfiles:[],lista_titulos:a,perfiles:[],nuevoPerfil:!1},getters:{},mutations:{ESTADO_RESPONSIVE(e,t){e.responsive=t},GUARDAR_PERFIL_EDITANDO(e,t){e.perfilEditando=t,localStorage.setItem("perfilEditando",JSON.stringify(t))},RESETEAR_EDICION(e){e.perfilEditando={},localStorage.setItem("perfilEditando",JSON.stringify(e.perfilEditando))},INICIALIZAR_PERFIL(e,t){e.nuevoPerfil=t,localStorage.setItem("nuevoPerfil",JSON.stringify(e.nuevoPerfil))},SET_PERFILES(e,t){e.perfiles=[],e.perfiles.push(...Object.values(t)),localStorage.setItem("lista_perfiles",JSON.stringify(t))},SET_IMAGENES_PERFILES(e,t){e.imagenes_perfiles=t,localStorage.setItem("imagenes",JSON.stringify(t))},ACTUALIZAR_IMAGEN_PERFIL(e,{perfilId:t,nuevaImagen:n}){const i=e.perfiles.find((e=>e.id===t));i&&(i.imagen=n,localStorage.setItem("perfiles",JSON.stringify(e.perfiles)))}},actions:{crearPerfil({commit:e,state:t}){const n=Math.floor(Math.random()*t.imagenes_perfiles.length),i=t.imagenes_perfiles[n].imagen;e("INICIALIZAR_PERFIL",{nombre:"",imagen:i})},actualizarPerfiles({commit:e},{perfiles:t,imagenes_perfiles:n}){e("SET_PERFILES",t),e("SET_IMAGENES_PERFILES",n)}},modules:{}})},4703:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var i=n(6768),a=n(5130),o=n.p+"img/bookflix_azulrojo.ae5b6e20.png";const r={class:"w-full"},l={class:"lg:text-2xl lg:flex lg:items-center lg:w-full lg:justify-start flex items-center w-full justify-start absolute"},s={class:"lg:w-full lg:mt-10 lg:ml-10 w-full mt-5 ml-5"},c={class:"linea_bar",ref:"lineaActiva1_bar"},u={class:"linea2_bar",ref:"lineaActiva2_bar"},f={class:"linea3_bar",ref:"lineaActiva3_bar"},d={key:0,class:"bg-red-500 h-screen lg:w-[25rem] absolute right-0 top-0 z-[5] opacity-90 animate__animated shadow-custom w-full"},m=(0,i.Lk)("div",{class:"h-32"},null,-1),p={class:"flex items-start justify-center flex-col ml-12 gap-y-8 font-bold w-full"},b={class:"relative link_animation"},h={class:"relative link_animation"},g={class:"relative link_animation"},v={class:"relative link_animation"},_={class:"relative link_animation"};function k(e,t,n,k,E,y){const A=(0,i.g2)("RouterLink"),I=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("nav",l,[(0,i.Lk)("div",s,[(0,i.Lk)("img",{src:o,alt:"",class:"lg:w-[10rem] w-[6rem] cursor-pointer",onClick:t[0]||(t[0]=(...e)=>y.ir_inicio&&y.ir_inicio(...e))})]),y.esRutaExcluida?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",{key:0,class:"menu z-10",onClick:t[1]||(t[1]=(...e)=>y.abrir_menu&&y.abrir_menu(...e))},[(0,i.Lk)("span",c,null,512),(0,i.Lk)("span",u,null,512),(0,i.Lk)("span",f,null,512)]))]),(0,i.bF)(a.eB,{onBeforeEnter:y.antes_entrada,onEnter:y.entrada,onLeave:y.salida},{default:(0,i.k6)((()=>[E.estadoMenu?((0,i.uX)(),(0,i.CE)("div",d,[m,(0,i.Lk)("ul",p,[(0,i.Lk)("li",b,[(0,i.bF)(A,{to:"/",onClick:y.abrir_menu},{default:(0,i.k6)((()=>[(0,i.eW)("INICIO")])),_:1},8,["onClick"])]),(0,i.Lk)("li",h,[(0,i.bF)(A,{to:"/descubre",onClick:y.abrir_menu},{default:(0,i.k6)((()=>[(0,i.eW)("DESCUBRE")])),_:1},8,["onClick"])]),(0,i.Lk)("li",g,[(0,i.bF)(A,{to:"/ventajas",onClick:y.abrir_menu},{default:(0,i.k6)((()=>[(0,i.eW)("VENTAJAS")])),_:1},8,["onClick"])]),(0,i.Lk)("li",v,[(0,i.bF)(A,{to:"/experiencias",onClick:y.abrir_menu},{default:(0,i.k6)((()=>[(0,i.eW)("EXPERIENCIAS")])),_:1},8,["onClick"])]),(0,i.Lk)("li",_,[(0,i.bF)(A,{to:"/contacto",onClick:y.abrir_menu},{default:(0,i.k6)((()=>[(0,i.eW)("CONTACTO")])),_:1},8,["onClick"])])])])):(0,i.Q3)("",!0)])),_:1},8,["onBeforeEnter","onEnter","onLeave"]),(0,i.bF)(I)])}var E=n(4874),y=n.n(E),A={name:"HomeView",data(){return{estadoMenu:!1,entrada_animacion:!1}},mounted(){const e=localStorage.getItem("popupCookie");e||y().fire({title:"Política de Cookies",text:"Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.",icon:"info",confirmButtonText:"Aceptar",allowOutsideClick:!1}),localStorage.setItem("popupCookie","true")},computed:{esRutaExcluida(){return this.$route.path.includes("/editar-perfil")||this.$route.path.includes("/seleccionar-imagen")||this.$route.path.includes("/cambiar-imagen")}},methods:{abrir_menu(){this.estadoMenu=!this.estadoMenu,this.$refs.lineaActiva1_bar.classList.toggle("lineaActiva1_bar"),this.$refs.lineaActiva2_bar.classList.toggle("lineaActiva2_bar"),this.$refs.lineaActiva3_bar.classList.toggle("lineaActiva3_bar"),1==this.estadoMenu?document.body.style.overflow="hidden":setTimeout((()=>{document.body.style.overflow="auto"}),1e3)},antes_entrada(e){e.classList.add("animate__slideInRight")},entrada(e,t){e.classList.remove("animate__fadeOut"),t()},salida(e,t){e.classList.remove("animate__slideInRight"),e.classList.add("animate__fadeOut"),setTimeout((()=>{t()}),1e3)},ir_inicio(){this.$router.push("/")}}},I=n(1241);const C=(0,I.A)(A,[["render",k]]);var L=C}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{46:"97f2c5ff",50:"7df87542",243:"1c747621",252:"d4bfa276",353:"020c0d4f",373:"cf9cc1b5",429:"a247a44e",492:"12c0c9f5",562:"24047e2b",698:"df048fa2",762:"a292b9b6",774:"e48304c8",911:"87068818",971:"e42c0223"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{46:"e2b3fa4e",50:"e48b8036",243:"fc164767",252:"47adc3b5",353:"723ce361",429:"99aa40c4",492:"f0843479",562:"e54fac2d",698:"4d5e8b4d",762:"bc08ef27",774:"a5e3c5e6",911:"0855efb4",971:"10d6d22c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bookflix-app:";n.l=function(i,a,o,r){if(e[i])e[i].push(a);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==i||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=i),e[i]=[a];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var a=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",n.nc&&(r.nonce=n.nc);var l=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&n.type,l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode&&r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=l,r.href=t,i?i.parentNode.insertBefore(r,i.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){a=r[i],o=a.getAttribute("data-href");if(o===e||o===t)return a}},i=function(i){return new Promise((function(a,o){var r=n.miniCssF(i),l=n.p+r;if(t(r,l))return a();e(i,l,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={46:1,50:1,243:1,252:1,353:1,429:1,492:1,562:1,698:1,762:1,774:1,911:1,971:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=o);var r=n.p+n.u(t),l=new Error,s=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],l=i[1],s=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(9220)}));i=n.O(i)})();
//# sourceMappingURL=app.9ec084b2.js.map