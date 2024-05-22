<template>
    <div class="home w-full min-h-screen items-center flex flex-col xl:pt-40 pt-48">
        <h1 class="lg:text-5xl font-bold tracking-wide leading-normal lg:mb-20 lg:mt-0 lg:ml-0 mt-5 ml-4">ELIGE TU AVATAR</h1>

        <div class="flex items-center justify-center w-[90%] mx-auto gap-x-40 gap-y-10 flex-wrap mb-10">

            <div class="flex flex-col w-[10%]" v-for="(imagen_sel, indice) in imagenes_perfiles" :key="imagen_sel.id">
                <h1 v-if="indice % 6 == 0" class="font-bold absolute">{{ obtenerTitulo(indice) }}</h1>
                <div class="flex items-center justify-end flex-col h-[19rem]">
                    <img 
                        :src="imagen_sel.imagen" 
                        class="transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer hover:border-[#C12C38] hover:border-2 hover:shadow-lg rounded-full"
                        @click="imagen_seleccionada(imagen_sel)"
                    />
                </div>

            </div>

            <form class="absolute top-10 lg:right-20 flex flex-col items-end justify-end right-5">
                <button class="bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-5" @click="volverAtras()">CANCELAR</button>
                <div class="flex items-center justify-end mt-10">
                    <h1 class="text-2xl mr-2 lg:mr-5">{{perfilEditando ? perfilEditando.user : nuevoPerfil.user}}</h1>
                    <img :src="perfilEditando ? perfilEditando.imagen : nuevoPerfil.imagen" alt="" class="lg:w-[20%] w-[15%]">
                </div>
            </form>

        </div>

    </div>

</template>


<script>
import {mapState} from 'vuex';

    export default{
        data(){
            return{
            }
        },
        computed:{
            ...mapState(['perfilEditando', 'imagenes_perfiles', 'lista_titulos', 'perfiles', 'nuevoPerfil'])
        },
        methods:{
            volverAtras(){
                this.$router.push(`/editar-perfil/${this.$route.params.id}`)
            },
            obtenerTitulo(indice){
                const indice_titulo = Math.floor(indice / 6);
                return this.lista_titulos[indice_titulo] ? this.lista_titulos[indice_titulo].nombre : '';
            },
            imagen_seleccionada(imagen_sel){
                if (!this.perfilEditando){
                    this.nuevoPerfil.imagen = imagen_sel.imagen
                }else {
                    this.perfilEditando.imagen = imagen_sel.imagen
                }
                this.$router.push(`/editar-perfil/${this.$route.params.id}`)
            },
        },
        mounted(){
            document.body.style.cssText += 'overflow: auto !important;';
        },
        beforeUnmount(){
            document.body.style.cssText += 'overflow: hidden !important;';
        },
    }

</script>

<style>

.home{
    background: #212139;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>