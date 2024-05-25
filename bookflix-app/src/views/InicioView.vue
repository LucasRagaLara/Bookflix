<template>
  <div class="home w-full min-h-screen lg:pt-28">
    <!-- Menú con el logo -->
    <div class="flex w-[60%] absolute right-0 top-0">
      <particlesComponent />
    </div>
    <!-- Introducción y fondo de la página -->
    <div class="lg:justify-start lg:w-full lg:h-[45rem] h-screen items-center justify-center flex relative z-3">
      <div class="lg:w-[50%] flex flex-col items-center justify-center w-full">
        <h1 class="lg:text-6xl lg:mb-12 text-center font-bold tracking-wider leading-normal text-3xl mb-20">¡Bienvenido a tu mundo <br>de historias sin fin!</h1>
        <p class="lg:text-2xl lg:text-center lg:mb-2 tracking-wider leading-normal text-justify w-[90%] mx-auto mb-10"><strong>Descubre</strong> un mundo de lecturas en línea.</p>
        <p class="lg:text-2xl lg:text-center tracking-wider leading-normal text-justify w-[90%] mx-auto mb-5"><strong>Explora</strong>, lee, repite: Tu viaje literario te espera.</p>
        <div class="lg:gap-x-28 flex mt-5 h-32 w-full items-center justify-center gap-x-12">
          <routerLink to="/login" class="lg:px-12 lg:py-4 bg-[#C12C38] rounded-xl animation_per px-4 py-2">Iniciar sesión</routerLink>
          <routerLink to="/registro" class="lg:px-12 lg:py-4 border-2 border-[#40BFBC] rounded-xl px-4 py-2 animation_per">Registrarse</routerLink>
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
  background-size: cover;
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
