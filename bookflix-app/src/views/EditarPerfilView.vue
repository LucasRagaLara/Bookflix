<template>
    <div class="home w-full min-h-screen items-center flex flex-col xl:pt-28">

        <div class="flex items-center justify-center w-[50%] mx-auto h-[60vh] gap-x-40 flex-col">

            <form action="" method="POST" class="w-full flex flex-col">

                <div class="mb-10 flex items-center justify-center">
                    <h1 class="text-4xl flex items-start justify-start mt-5 font-bold ">Editar perfil</h1>
                </div>

                <div class="w-full flex items-center justify-center gap-x-10 mb-20">
                    <div class="border border-red-900 h-[15rem] w-[35%] rounded-lg flex-col flex pt-10 pl-10">
                        <label for="Nombre" class="font-bold mb-4">Elige tu nombre</label>
                        <input type="text" class="bg-[#802C32] rounded-lg outline-none placeholder:text-[#c1c1c1] border-none pl-4 p-1 w-[80%]" :placeholder="perfilEditando ? perfilEditando.user : nuevoPerfil.user">
                    </div>

                    <div class="w-[20%] flex items-center justify-center relative">
                        <img :src="perfilEditando ? perfilEditando.imagen :  nuevoPerfil.imagen" alt="">
                        <div class="w-[3.5rem] h-[3.5rem] items-center justify-center bg-[#C12C38] flex absolute bottom-0 right-7 rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#c12c38] hover:bg-[#f1f1f1] text-[#f1f1f1]">
                            <i class="fa-solid fa-pencil text-3xl" @click="seleccionarImagen()"></i>
                        </div>

                    </div>

                </div>

                <form class="flex items-center justify-center w-full" @submit.prevent="cancelarEdicionPerfiles">
                    <button type="submit" class="border-2 border-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110">
                        BORRAR PERFIL
                    </button>
                </form>
            </form>
            <form class="absolute top-10 right-20 flex flex-col items-end justify-end w-full"  @submit.prevent="listo">
                <button type="submit" class="bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-12">LISTO</button>    
            </form>
        </div>

    </div>

</template>


<script>
import {mapState, mapActions} from 'vuex';

    export default{
        data(){
            return{
            }
        },
        mounted(){
        },
        computed:{
            ...mapState(['perfilEditando', 'imagenes_perfiles', 'nuevoPerfil', 'perfiles'])
        },
        methods:{
            ...mapActions(['crearPerfil']),
            listo(){
                this.$router.push('/perfil/1')
            },
            seleccionarImagen(){
                this.$router.push({name: 'cambiar-imagen', params: {id: this.$route.params.id}})
            },
            cancelarEdicionPerfiles(){
                this.$router.push('/perfil/1')   
            }
        },
        created(){
            const comprobar = this.perfiles.find((usuario => usuario.id == this.$route.params.id))
            if (!comprobar && !this.nuevoPerfil){
                this.crearPerfil();
            }
        }
    }

</script>

<style scoped>

.home{
    background: url('../assets/backgrounds/editar_perfil.png');
    background-repeat: no-repeat;
    background-size: 100% 100vh;
}

</style>