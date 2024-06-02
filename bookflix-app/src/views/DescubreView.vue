<template>
  <div class="home w-full min-h-screen 2xl:pt-20 2xl:pt-20 md:pt-16 pt-28">
    <!-- Menú con el logo -->
      <!-- Introducción y fondo de la página -->
      <div class="2xl:justify-center 2xl:w-full 2xl:mb-0 md:mb-0 items-center justify-center flex flex-col mb-10">
        <h1 class="2xl:text-5xl md:text-2xl mb-8 md:mb-2 text-center font-bold tracking-wider leading-normal">TUS <span class="text-[#E53544]">CLÁSICOS FAVORITOS</span> AL ALCANCE </h1>
        <h3 class="2xl:text-center 2xl:w-full 2xl:text-2xl md:w-[95%] md:text-center md:text-xl mb-6 md:mb-2 font-bold tracking-wider leading-normal w-[90%] text-xl">EXPLORA NUESTRA COLECCIÓN EN LÍNEA Y REDESCUBRE LAS HISTORIAS QUE HAN PERDURADO EN EL TIEMPO</h3>
        <h3 class="2xl:text-2xl 2xl:text-center 2xl:w-full md:text-xl md:text-center font-bold tracking-wider leading-normal w-[90%] text-xl">¡PREPARÁTE PARA SUMERGIRTE EN LA MAGIA DE LA LITERATURA!</h3>
      </div>
                <!-- Slider main container -->
      <div class="swiper swiper-container min-h-[28rem] md:min-h-[28rem] 2xl:min-h-[15rem]"> 
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper 2xl:pt-20 2xl:pb-20 md:pt-0 select-none">
          <!-- Slides -->
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/cumbres_borrascosas.png" alt="" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/fundacion_imperio.png" alt="" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/jane_eyre.png" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/cumbres_borrascosas.png" alt="" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/fundacion_imperio.png" alt="" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
          <div class="swiper-slide"><img src="../assets/tonos_azulrojo/carrousel/jane_eyre.png" class="md:w-[10rem] 2xl:w-[15rem] w-[12rem] pointer-events-none cursor-default"></div>
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
import 'swiper/swiper-bundle.css';
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
      breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true
      },
      800: {
        slidesPerView: 2,
        centeredSlides: true
      },
      1600:{
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
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
    background-size: 100% 100vh;
  }


  .swiper{
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .swiper-wrapper{
    width: 100%;

    @media (max-width: 999px) {
      width: 100%;
    }

    @media (min-width: 800px) and (max-width: 1599px){ 
      width: 50%;
    }

  }
  .swiper-slide {
    width: 100%;
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
      padding: 1.2%;
      margin: -1.5% 2%;
      width: 2rem;
      height: 2rem;
      color: #f1f1f1;
      border-radius: 50%;
      background-color: #E53544;
      transition: transform 0.3s ease-in-out;
    @media (max-width: 767px) {
      padding: 6%;
      width: 2.5rem;
      height: 2.5rem;
    }

    @media (max-width: 1367px) {
      font-size: 1.5rem;
      padding: 2%;
    }
  }

  .swiper-button-prev::after, .swiper-button-next::after{
    font-size: 2rem;

    @media (max-width: 767px) {
      font-size: 1rem;
    }

    @media (max-width: 1500px) {
      font-size: 1rem;
    }
  }

  .swiper-button-prev:hover, .swiper-button-next:hover {
      transform: scale(1.2);
      @media (max-width: 767px) {
        transform: none;
      }
  }

</style>