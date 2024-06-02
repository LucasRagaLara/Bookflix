<template>
  <div class="w-full">
        <!-- Menú con el logo -->    
    <nav class="lg:text-2xl lg:flex lg:items-center lg:w-full lg:justify-start flex items-center w-full justify-start absolute">
      <div class="lg:w-full lg:mt-10 lg:ml-10 w-full mt-5 ml-5">
        <img src="./assets/icons/bookflix_azulrojo.png" alt="" class="2xl:w-[10rem] w-[6rem] cursor-pointer" @click="ir_inicio">
      </div>  
      <div class="menu z-10" @click="abrir_menu"  v-if="!esRutaExcluida">
        <span class="linea_bar" ref="lineaActiva1_bar"></span>
        <span class="linea2_bar" ref="lineaActiva2_bar"></span>
        <span class="linea3_bar" ref="lineaActiva3_bar"></span>
      </div>
    </nav>
    <!-- Menú con animacion -->
        <transition @before-enter="antes_entrada" @enter="entrada" @leave="salida">
            <div class="bg-red-500 h-screen lg:w-[25rem] absolute right-0 top-0 z-[5] opacity-90 animate__animated shadow-custom w-full" v-if="estadoMenu">
              <div class="h-32"></div>
              <ul class="flex items-start justify-center flex-col ml-12 gap-y-8 font-bold w-full">
                <li class="relative link_animation md:text-lg"> <RouterLink to="/" @click="abrir_menu">INICIO</RouterLink> </li>
                <li class="relative link_animation md:text-lg"> <RouterLink to="/descubre" @click="abrir_menu">DESCUBRE</RouterLink> </li>
                <li class="relative link_animation md:text-lg"> <RouterLink to="/ventajas" @click="abrir_menu">VENTAJAS</RouterLink></li>
                <li class="relative link_animation md:text-lg"> <RouterLink to="/experiencias" @click="abrir_menu">EXPERIENCIAS</RouterLink></li>
                <li class="relative link_animation md:text-lg"> <RouterLink to="/contacto" @click="abrir_menu">CONTACTO</RouterLink></li>
              </ul>
            </div>
        </transition>
    <router-view/>
  </div>
</template>

<script>
import 'animate.css';
import Swal from 'sweetalert2';
export default {

  name: 'HomeView',

  data(){
    return{
      estadoMenu: false,
      entrada_animacion: false
    }
  },

  mounted(){
    const popupCookie = localStorage.getItem('popupCookie');

    if (!popupCookie){
      Swal.fire({
        title: 'Política de cookies',
        text: 'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.',
        icon: 'info',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false 
      });
    }
    localStorage.setItem('popupCookie', 'true');
  },

  computed:{
    esRutaExcluida() {
      return this.$route.path.includes('/editar-perfil')||
             this.$route.path.includes('/seleccionar-imagen') ||
             this.$route.path.includes('/cambiar-imagen') ||
             this.$route.path.includes('/privacidad') ||
             this.$route.path.includes('/aviso-legal') ||
             this.$route.path.includes('/cookies')
      }
  },

  methods:{
    // Función para desplegar y ocultar el menú
    abrir_menu(){
      this.estadoMenu = !this.estadoMenu
      this.$refs.lineaActiva1_bar.classList.toggle("lineaActiva1_bar")
      this.$refs.lineaActiva2_bar.classList.toggle("lineaActiva2_bar")
      this.$refs.lineaActiva3_bar.classList.toggle("lineaActiva3_bar")

      if (this.estadoMenu == true){
        document.body.style.overflow = 'hidden';
      } else {
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 1000)
      }
    },
    antes_entrada(antes){
      antes.classList.add('animate__slideInRight');
    },
    entrada(entrar, listo){
      entrar.classList.remove('animate__fadeOut');
            listo();
    },
    salida(salir, listo) {
      salir.classList.remove('animate__slideInRight');
      salir.classList.add('animate__fadeOut');
      setTimeout(() => {
                listo();
      }, 1000);  
    },

    ir_inicio(){
      this.$router.push("/")
    }
  }
}

</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    color: #f1f1f1;
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;
    overflow: hidden !important;
  }

  // animaciones para el menu bar
  .menu{
    width: 2rem;
    height: 2rem;
    margin-right: 2.5rem;
    cursor: pointer; 
  }
  .menu span{
    display: block;
    width: 100%;
    height: 2.5px;
    background: #f1f1f1;
    margin-top: 6px;
    transform-origin: 0px 100%;
    transition: all 300ms;
  }

  .lineaActiva1_bar{
    transform: rotate(45deg) translate(-1px, 1px);
  }

  .lineaActiva2_bar{
    opacity: 0;
    margin-left: -30px;
  }

  .lineaActiva3_bar{
    transform: rotate(-45deg) translate(-4px, 3px);
  }

  // Animacion elementos del menu

  .link_animation {
    a {
      position: relative;
      display: inline-block; 
      text-decoration: none;
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0; 
        left: 0;
        background-color: #f1f1f1;  
        transition: width 0.3s ease-in-out, visibility 0s linear 0.5s; 
        visibility: hidden;
      }

      &:hover::after,
      &:focus::after {
        visibility: visible;
        width: 100%;
        transition: width 0.3s ease-in-out, visibility 0s; 
      }
    }
  }

  // Formato Tablet
  @media (max-width: 1000px){
    body{
      overflow: auto !important;
    }
    .home{
      background-image: linear-gradient(to right bottom, #252233, #212139, #1e1c2f) !important;
      background-size: cover !important;
    }
// translate modificado del menu responsive
    .lineaActiva1_bar{
      transform: rotate(45deg) translate(-1px, 2px);
    }
    .lineaActiva3_bar{
      transform: rotate(-45deg) translate(-3px, 2px);
    }
  }

// Formato móvil
  @media (max-width: 800px){
    body{
      overflow: auto !important;
    }

    .home{
      background-image: linear-gradient(to right bottom, #252233, #212139, #1e1c2f) !important;
      background-size: cover !important;
    }
  // translate modificado del menu responsive
    .lineaActiva1_bar{
      transform: rotate(45deg) translate(1px, 2px);
    }
    .lineaActiva3_bar{
      transform: rotate(-45deg) translate(-2px, 2px);
    }
  }

</style>