<template>
    <div class="home w-full min-h-screen lg:pt-28 items-center justify-center pt-40">
        <div class="flex w-[60%] absolute right-0 top-0">
            <particlesComponent/>
        </div>
      <div class="w-full flex justify-center animate__animated animate__flipInX lg:mb-12 mb-5">
        <h1 class="lg:text-[10rem] animate-number delay-1 text-6xl">4</h1>
        <h1 class="lg:text-[10rem] animate-number delay-2 text-6xl">0</h1>
        <h1 class="lg:text-[10rem] animate-number delay-3 text-6xl">4</h1>
      </div>

		<div class="contenedor text-center mx-auto lg:w-full w-[75%]">
			<h1 class="lg:text-5xl font-bold tracking-wide leading-normal lg:animacion_escribir">¡NOS PARECE QUE ANDAS ALGO PERDIDO!<span>&#160;</span></h1>
		</div>
        <div class="text-center flex items-center justify-center lg:w-[50%] lg:mt-12 mx-auto flex-col mt-10">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/c5ad2aec38850b41ac8255efa4231266-1687591126/GIF/convert-video-to-transparent-background-gifs-gif-to-video-15c6.gif" alt="" class="lg:w-[30%] w-[75%]">
            <div class="mt-20">
                <router-link to="/" class="bg-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-125 items-center justify-center flex px-12">VOLVER A INICIO</router-link>        
            </div>
        </div>
    </div>
  </template>
  
<script>
    import particlesComponent from '@/components/particlesFoundComponent.vue'; // Asegúrate de que la ruta es correcta

  export default {
    name: 'NotFound',
    data() {
      return {
        message: "¡NOS PARECE QUE ANDAS ALGO PERDIDO!"
      };
    },
    components: {
    particlesComponent
    }
  };
  </script>
  
  <style scoped>
  .home {
    background-image: url("../assets/backgrounds/experiencias.png");
    background-size: 100% 100vh;
    background-repeat: no-repeat;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  .animate-number {
    animation: bounce 2s infinite alternate;
    margin: 0 5px;
  }
  
  .delay-1 {
    animation-delay: 0.5s; 
  }
  
  .delay-2 {
    animation-delay: 1s; 
  }
  
  .delay-3 {
    animation-delay: 1.5s; 
  }
  

  .contenedor {
        margin: auto;
        display: table;
    }

    .animacion_escribir { 
        position: relative; 
        float: left;
        background: #212139;
        color: #fff;
        font-size: 2.5em;
    }

    .animacion_escribir span {
        position:absolute;
        right:0;
        width:0;
        background: #212139;
        animation: escribir 2s steps(40);
    }

    @keyframes escribir {
        from { width: 100% }
    }

</style>
  