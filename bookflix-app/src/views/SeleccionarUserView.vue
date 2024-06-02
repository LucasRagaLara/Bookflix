<template>

    <div class="home w-full min-h-screen items-center flex flex-col 2xl:pt-28 md:pt-20 pt-28">
        <h1 class="2xl:text-5xl font-bold tracking-wide leading-normal lg:mb-3 lg:mt-0 lg:ml-0 mt-5 ml-4 mb-20">¡Selecciona tu usuario!</h1>
        <div class="flex lg:items-end justify-center w-[75%] mx-auto lg:h-[35vh] lg:gap-x-40 lg:flex-row flex-col items-center lg:gap-y-0 gap-y-10">

            <div class="flex lg:items-center lg:justify-center flex-col lg:flex-wrap">
                <div class="bg-[#C12C38] flex items-center justify-center w-[10rem] h-[10rem] 2xl:w-[10rem] 2xl:h-[10rem] md:h-[6rem] md:w-[6rem] rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <i class="fa-solid fa-plus 2xl:text-[5rem] text-[5rem] md:text-[3rem]" @click="nuevoPerfil()"></i>
                </div>
                <h1 class="2xl:text-2xl text-2xl md:text-lg flex items-center justify-center mt-5 font-bold ">Crear perfil</h1>
            </div>
            <div class="flex items-center justify-center flex-col" v-for="perfil of perfiles" :key="perfil">
                <div class="flex items-center justify-center w-[10rem] h-[10rem] 2xl:w-[10rem] 2xl:h-[10rem] md:h-[6rem] md:w-[6rem]  rounded-full relative">
                    <img :src="perfil.imagen" alt="" :class="{'edicion_perfil': edicion}" class="transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <img src="../assets/icons/pencil_edit.png" alt="" class="absolute top-[35%] left-[35%] w-[3.5rem] h-[3.5rem] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110" v-if="edicion" @click="editarPerfil(perfil)">
                </div>
                <h1 class="text-2xl flex items-center justify-center mt-5 font-bold ">{{perfil.nombre}}</h1>
            </div>
            
        </div>
        <div class="flex items-center justify-center w-full lg:h-[25rem] lg:mb-0 lg:mt-0 mt-12 mb-12">

            <button @click="administrarPerfiles()" class="bg-[#C12C38] 2xl:py-3 py-3 px-5 md:py-2 md:px-2 2xl:text-2xl md:text-sm 2xl:px-5 py-3 px-5 md:py-2 md:px-2 2xl:text-2xl md:text-sm rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110" v-if="administrarEstado">
                Administrar perfiles
            </button>

            <button @click="cancelarEdicionPerfiles()" class="bg-[#C12C38] 2xl:py-3 py-3 px-5 md:py-2 md:px-2 2xl:text-2xl md:text-sm 2xl:px-5 py-3 px-5 md:py-2 md:px-2 2xl:text-2xl md:text-sm rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110" v-else>
                Cancelar
            </button>

        </div>
    </div>

</template>


<script>
import { mapMutations, mapState, mapActions} from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
    export default{
        data(){
            return{
                edicion: false,
                administrarEstado: true,
            }
        },
        mounted(){
            const cargarDatos = async () => {
                await this.cargarPerfilesUsuario();
            };
            cargarDatos();
        },
        computed:{
            ...mapState(['perfiles', 'perfilEditando'])
        },
        methods:{
            ...mapMutations(['GUARDAR_PERFIL_EDITANDO', 'RESETEAR_EDICION']),
            ...mapActions(['actualizarPerfiles']),
            nuevoPerfil(){
                this.RESETEAR_EDICION()
                if (this.perfiles && this.perfiles.length > 0){
                    if (this.perfiles.length >= 4){
                        Swal.fire({
                            title: 'Error',
                            text: 'Ya tienes creado el máximo de perfiles permitido',
                            icon: 'error',
                            confirmButtonText: 'Continuar',
                            customClass: {
                                popup: 'swal-wide',
                                confirmButton: 'swal-confirm-button'
                            }
                        });
                    } else{
                        this.$router.push({name: 'editar-perfil', params: {id: this.perfiles.length + 1}});
                    }
                }else{
                    this.$router.push({name: 'editar-perfil', params: {id: 1}});
                }
            },
            editarPerfil(perfil){   
                console.log(perfil)
                  // Reiniciar el nuevoPerfil a false
                    this.$store.commit('INICIALIZAR_PERFIL', false);
                    // Actualizar el localStorage para reflejar el cambio
                    localStorage.removeItem('nuevoPerfil');

                this.GUARDAR_PERFIL_EDITANDO(perfil);
                this.$router.push({name: 'editar-perfil', params: {id: perfil.id}});
            },
            administrarPerfiles(){
                this.edicion = true;
                this.administrarEstado = false;
            },
            cancelarEdicionPerfiles(){
                this.edicion = false;
                this.administrarEstado = true;
            },

            async cargarPerfilesUsuario(){
                try {
                    const id = localStorage.getItem('userId')
                    const obtenerPerfiles = await axios.get(`/api/perfiles/${id}`, {
                    });
                    const obtenerImagenes = await axios.get('/api/imagenes');
                    this.actualizarPerfiles({
                        perfiles: obtenerPerfiles.data.perfiles,
                        imagenes_perfiles: obtenerImagenes.data
                    });
                }catch(error){
                    console.error(error)
                }
            }
        },
        created(){
        }
    }

</script>

<style scoped>

.home{
    background: url('../assets/backgrounds/editar_perfil.png');
    background-repeat: no-repeat;
    background-size: 100% 100vh;
}
.edicion_perfil{
    opacity: 0.4;
}

</style>