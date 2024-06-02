<template>
    <div class="home w-full min-h-screen flex flex-col items-center 2xl:pt-10 md:pt-0 pt-28">
        <div class="2xl:w-[60%] xl:text-center">
            <h1 class=" 2xl:text-3xl font-bold tracking-wide leading-normal 2xl:mb-3 2xl:mt-0 2xl:ml-0 md:mt-5 mt-5 ml-4">LEE LO QUE<span class="text-[#E53544]"> NUESTROS USUARIOS</span> TIENEN QUE DECIR </h1>
            <h1 class=" 2xl:text-3xl font-bold tracking-wide leading-normal 2xl:mb-16 2xl:mt-0 2xl:ml-0 md:mt-2 mt-5 ml-4">SOBRE SU EXPERIENCIA CON NOSOTROS</h1>
        </div>
        <!-- Tarjetas base -->
        <tarjetas></tarjetas>
    </div>
</template>

<script>
    import atroposTarjetasComponent from '@/components/atroposTarjetasComponent.vue';

    export default {
        name: 'VentajasView',

        data(){
            return{

            }
        },
        components:{
            'tarjetas': atroposTarjetasComponent ,
        },
        computed:{

        },

        methods:{
        }
    }

</script>


<style lang="scss" scoped>

    .home{
        background: url('../assets/backgrounds/experiencias.png');
        background-repeat: no-repeat;
        background-size: 100% 100vh;
    }

    .ocean {
        height: 40%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }
    
    .waves {
        position:absolute;
        width: 100%;
        height:15vh;
        min-height:100px;
        max-height:150px;
        bottom: 0;
    }

    .content {
        position:relative;
        height:20vh;
        bottom: 0;
        background-color: rgb(0, 0, 0);
    }

/* Animation */

    .parallax > use {
        animation: move-forever 5s cubic-bezier(.55,.5,.45,.5) infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 11s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 8s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 6s;
    }

    @keyframes move-forever {
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% { 
        transform: translate3d(85px,0,0);
    }
    }

    /*Shrinking for mobile*/
    @media (max-width: 768px) {
    .waves {
        height:40px;
        min-height:40px;
    }
    .content {
        height:30vh;
    }
    h1 {
        font-size:24px;
    }
    }


</style>