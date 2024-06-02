<template>
    <div class="home w-full min-h-screen 2xl:pt-0 md:pt-0 pt-28">
        <component :is="rutaDefinida" />
    </div>
</template>


<script>
    import registrarseComponent from "@/components/registrarseComponent.vue";
    import loginComponent from "@/components/loginComponent.vue";
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
            'registro': registrarseComponent ,
            'login': loginComponent,
        },
        methods:{
        },
        mounted(){

        }
    }

</script>

<style lang="scss" scoped>
    .home{
        background: url('../assets/backgrounds/registrarse_iniciar.png');
        background-repeat: no-repeat;
        background-size: 100% 100vh;
    }

</style>