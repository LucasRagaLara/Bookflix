<template>
    <div class="home w-full min-h-screen lg:pt-48 xl:pt-20 md:pt-36 pt-28">
        <component :is="rutaDefinida" />
    </div>
</template>


<script>
    import avisoComponent from "@/components/avisoComponent.vue";
    import privacidadComponent from "@/components/privacidadComponent.vue";
    import cookiesComponent from "@/components/cookiesComponent.vue";
    export default {
        name: 'sesionView',
        props:{
            rutaDefinida: String
        },
        data(){
            return{

            }
        },
        components:{
            'aviso': avisoComponent ,
            'privacidad': privacidadComponent,
            'cookies': cookiesComponent,
        },
        methods:{
        },
        mounted(){
            document.body.style.cssText += 'overflow: auto!important;';
        },
        beforeUnmount(){
            document.body.style.cssText += 'overflow: hidden;';
        }
    }

</script>

<style lang="scss">
    .home{
        background: #212139;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>