<template>
  <div class="home w-full 2xl:min-h-screen lg:min-h-screen 2xl:pt-28 lg:pt-0 md:pt-36 pt-12">
    <!-- Menú con el logo -->
    <div class="flex w-[60%] absolute right-0 top-0">
      <particlesComponent />
    </div>
    <!-- Introducción y fondo de la página -->
    <div class="2xl:justify-start 2xl:w-full 2xl:h-[45rem] lg:h-[37rem] lg:w-[50%] lg:pb-12 h-screen items-center justify-center flex relative z-3">
      <div class="2xl:w-[45%] lg:w-[90%] flex flex-col items-center justify-center w-[95%] lg:items-center">
        <h1 class="2xl:text-5xl 2xl:mb-12 lg:mb-4 text-center font-bold tracking-wider leading-normal text-3xl mb-20">¡BIENVENIDO A TU MUNDO DE HISTORIAS SIN FIN!</h1>
        <p class="2xl:text-2xl 2xl:text-center 2xl:mb-2 lg:mb-4 lg:text-lg tracking-wider leading-normal text-justify w-[90%] mx-auto mb-10"><strong>Descubre</strong> un mundo de lecturas en línea.</p>
        <p class="2xl:text-2xl 2xl:text-center lg:text-lg tracking-wider leading-normal text-justify w-[90%] mx-auto mb-5"><strong>Explora</strong>, lee y repite: Tu viaje literario te espera.</p>
        <div class="2xl:gap-x-28 flex mt-5 2xl:h-28 2xl:w-full w-[95%] items-center justify-center gap-x-12 mx-auto 2xl:mx-0 2xl:mb-0">
          <routerLink to="/login" class="2xl:px-10 2xl:py-4 bg-[#C12C38] rounded-xl animation_per px-4 py-2 2xl:text-xl text-sm">Iniciar sesión</routerLink>
          <routerLink to="/registro" class="2xl:px-10 2xl:py-4 border-2 border-[#40BFBC] rounded-xl px-4 py-2 animation_per bg-[#0c0c33] 2xl:text-xl text-sm">Registrarse</routerLink>
        </div>
      </div>
      <div></div>
      <!-- Imagen e fondo -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import particlesComponent from '@/components/particlesComponent.vue'; // Asegúrate de que la ruta es correcta

export default defineComponent({
  name: 'HomePage',
  components: { 
    particlesComponent
  }
});
</script>

<style lang="scss" scoped>
// Clase general que engloba la página
.home {
  background: url('../assets/backgrounds/home.png');
  background-repeat: no-repeat;
  background-size: 100% 100vh;
}
// Animaciones para los botones
.animation_per {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 3px 6px rgba(180, 7, 7, 0.16);
}
.animation_per:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50);
}
</style>
