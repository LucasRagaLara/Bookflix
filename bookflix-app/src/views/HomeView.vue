<template>
  <div class="home w-full h-screen">
    <!-- Menú con el logo -->
    <nav class="lg:text-2xl lg:flex lg:items-center lg:w-full lg:justify-start">
      <div class="lg:w-full lg:mt-5 lg:ml-5">
        <img src="../assets/icons/bookflix_azulrojo.png" alt="" class="w-[15rem]">
      </div>
      <font-awesome-icon class="lg:text-3xl lg:text-white lg:w-60 lg:cursor-pointer" icon="bars"/>
    </nav>
    <!-- Introducción y fondo de la página -->
    <div class="lg:flex lg:items-center lg:justify-center lg:w-full">
        <div class="lg:flex lg:flex-col lg:gap-y-10 lg:items-center lg:justify-center lg:w-full lg:h-[40rem]">
            <h1 class="lg:text-6xl lg:text-center font-bold lg:tracking-wider	lg:leading-normal">¡Bienvenido a tu mundo <br>de historias sin fin!</h1>
            <p class="lg:text-2xl lg:text-center lg:tracking-wider lg:leading-normal lg:mb-5">Descubre un mundo de lecturas en línea. <br> Explora, lee, repite: Tu viaje literario te espera.</p>
            <div class="lg:flex lg:gap-x-28 lg:mt-5">
              <button class="lg:px-12 lg:py-4 lg:bg-[#C12C38] lg:rounded-xl lg:font-bold animation_per">Iniciar sesión</button>
              <button class="lg:px-12 lg:py-4 lg:border-2 lg:border-[#40BFBC] lg:rounded-xl lg:font-bold animation_per">Registrarse</button>
            </div>
        </div>
        <!-- Imagen e fondo -->
        <div class="lg:items-center lg:justify-center lg:w-full lg:h-[40rem]">
            <img src="../assets/backgrounds/muchos_libros.png" alt="" class="lg:w-[90%] lg:translate-y-[-7rem] lg:translate-x-[-7rem]">
        </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style lang="scss">

// Clase general que engloba la página
  .home {
    background: url('../assets/backgrounds/home.png');
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    color: #f1f1f1;
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;
  }


// Animaciones para los botones
  .animation_per{
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 3px 6px rgba(180, 7, 7, 0.16);
  }

  .animation_per:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.50); 
  }

</style>