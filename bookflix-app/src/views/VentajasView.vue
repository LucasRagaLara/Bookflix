<template>
    <div class="home w-full min-h-screen flex flex-col items-center lg:pt-24">
      <h1 class="lg:text-5xl tracking-wide lg:mb-3"><strong>DESCUBRE LAS <span class="text-[#E53544]">VENTAJAS</span></strong></h1>
      <h1 class="lg:text-5xl tracking-wide lg:mb-3"><strong>DE NUESTRA PLATAFORMA ONLINE</strong></h1>

      <div class="lg:mt-14 lg:mb-6 lg:min-h-[15rem] w-full items-center justify-center flex">
        <div class="lg:w-1/3 lg:pb-4 flex items-center justify-center flex-col text-center">
          <p class="lg:w-[50%] lg:mb-3">Explora miles de libros instantáneamente.</p>
          <computer-component></computer-component>
        </div>
        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center">
          <p class="lg:w-[40%] lg:mb-3">Libros que amarás, seleccionados solo para ti.</p>
          <heart-component></heart-component>
        </div>
        <div class="lg:w-1/3 flex flex-col items-center justify-center  text-center">
          <p class="lg:w-[40%] lg:mb-3">Tu próxima lectura, dondequiera que estés.</p>
          <phone-component></phone-component>
        </div>
      </div>

      <div class="lg:min-h-[15rem] w-full items-center justify-center flex">
        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center">
          <p class="lg:w-[40%] lg:mb-3">Lectura segura de fuentes confiables.</p>
          <shield-component></shield-component>
        </div>
        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center">
          <p class="lg:w-[35%] lg:mb-3">Descubre nuevos títulos cada mes.</p>
          <calendar-component></calendar-component>
        </div>
        <div class="lg:w-1/3 lg:pb-4 flex flex-col items-center justify-center text-center">
          <p class="lg:w-[40%] lg:mb-3">Únete a una comunidad apasionada por la lectura.</p>
          <hands-component></hands-component>
        </div>
      </div>

    </div>
</template> 
  
<script>
  import ComputerComponent from '@/components/ComputerComponent.vue';
  import CalendarComponent from '@/components/CalendarComponent.vue';
  import HandsComponent from '@/components/HandsComponent.vue';
  import HeartComponent from '@/components/HeartComponent.vue';
  import PhoneComponent from '@/components/PhoneComponent.vue';
  import ShieldComponent from '@/components/ShieldComponent.vue';

  export default {
    name: 'VentajasView',
  
    data(){
      return{
  
      }
    },
    components:{
      'computer-component': ComputerComponent,
      'calendar-component': CalendarComponent,
      'hands-component': HandsComponent,
      'heart-component':HeartComponent,
      'phone-component':PhoneComponent,
      'shield-component':ShieldComponent,
    },
    computed:{
  
    },
  
    methods:{
    }
  }
   
</script>

<style lang="scss" scoped>
  .home {
    background-image: url('../assets/backgrounds/ventajas_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll !important;
  }
</style>