<template>
    <div class="home w-full min-h-screen flex flex-col items-center pt-28">
      <items-component></items-component>
    </div>
</template> 
  
<script>
  import AtroposItemsComponent from '@/components/AtroposItemsComponent.vue';

  export default {
    name: 'VentajasView',
  
    data(){
      return{
  
      }
    },
    components:{
      'items-component': AtroposItemsComponent,
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