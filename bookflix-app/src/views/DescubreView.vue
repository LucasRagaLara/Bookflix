<template>
  <div class="home w-full h-screen lg:pt-28">
    <!-- Menú con el logo -->
      <!-- Introducción y fondo de la página -->
      <div class="lg:justify-center lg:w-full items-center justify-center flex flex-col">
        <h1 class="lg:text-5xl lg:mb-8 text-center font-bold tracking-wider leading-normal">TUS <span class="text-[#E53544]">CLÁSICOS FAVORITOS</span> AL ALCANCE </h1>
        <h3 class="lg:text-3xl lg:mb-2 font-bold tracking-wider leading-normal ">EXPLORA NUESTRA COLECCIÓN EL LÍNEA Y REDESCUBRE LAS HISTORIAS QUE HAN PERDURADO EN EL TIEMPO</h3>
        <h3 class="lg:text-3xl font-bold tracking-wider leading-normal">¡PREPARÁTE PARA SUMERGIRTE EN LA MAGIA DE LA LITERATURA!</h3>
      </div>
                <!-- Slider main container -->
      <div class="swiper swiper-container"> 
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper lg:pt-20 lg:pb-20 m-0">
          <!-- Slides -->
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/cumbres_borrascosas.png" alt="" class="w-[20rem]"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/fundacion_imperio.png" alt="" class="w-[20rem]"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/jane_eyre.png" class="w-[20rem]"></div>
          
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/cumbres_borrascosas.png" alt="" class="w-[20rem]"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/fundacion_imperio.png" alt="" class="w-[20rem]"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/jane_eyre.png" class="w-[20rem]"></div>
        </div>
        <!-- If we need pagination -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- If we need navigation buttons -->
        <div class="swiper-navigation-container"> 
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div> 

  </div>
</template> 

<script>
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
export default {

  name: 'DescubreView',

  data(){
    return{

    }
  },
  mounted() {
    // Carga inicial del Carrousel. De 3 en 3 con el slider centrado.
    let swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      centeredSlides: true,
      slideToClickedSlide: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    });

    this.$nextTick(() => {
      swiper.update();
    });
  },

  computed:{

  },

  methods:{
  }
}

</script>



<style lang="scss">
// Clase general que engloba la página
  .home {
    background: url('../assets/backgrounds/descubre.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  // Clases personalizadas del slider. Clases por defecto de la libreria.
  .swiper{
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .swiper-wrapper{
    width: 100%;
    display: flex;
  }

  .swiper-slide {
    width: 33.333%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
  }
  // aumenta el del medio.
  .swiper-slide-active {
    transform: scale(1.1) !important;
  }
  // realiza una sombra suave para mayor efecto 3D
  .swiper-slide-shadow-left, .swiper-slide-shadow-right {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  // botones de los slider
  .swiper-button-prev, .swiper-button-next {
      cursor: pointer;
      width: 50px;
      height: 20px;
      padding: 1.2%;
      margin: -1.5% 2%;
      color: #f1f1f1;
      border-radius: 50%;
      background-color: #E53544;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease-in-out;
      will-change: transform; 
  }

  .swiper-button-prev:hover, .swiper-button-next:hover {
      transform: scale(1.2);
  }

</style>