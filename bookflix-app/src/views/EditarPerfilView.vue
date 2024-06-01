<template>
    <div class="home w-full min-h-screen items-center flex flex-col xl:pt-28 pt-28">

        <div class="flex items-center justify-center lg:w-[50%] w-full mx-auto lg:h-[60vh] gap-x-40 flex-col">

            <form class="w-full flex flex-col">

                <div class="mb-10 flex items-center justify-center">
                    <h1 class="text-4xl flex items-start justify-start mt-5 font-bold ">{{ perfilEditando ? 'Editar perfil' : 'Crear nuevo perfil' }}</h1>
                </div>

                <div class="w-full flex lg:flex-row flex-col items-center justify-center gap-x-10 pb-20">
                    <div class="border border-red-900 h-[15rem] lg:w-[35%] w-[75%] lg:mx-0 mx-auto rounded-lg flex-col flex pt-10 pl-10 lg:mb-0 mb-10">
                        <label for="Nombre" class="font-bold mb-4">Elige tu nombre</label>
                        <input type="text" class="bg-[#802C32] rounded-lg outline-none placeholder:text-[#c1c1c1] border-none pl-4 p-1 w-[80%]" placeholder="Nombre" v-model="nombre" maxlength="20">
                    </div>

                    <div class="lg:w-[20%] w-[60%] flex items-center justify-center relative">
                        <img :src="Object.keys(perfilEditando).length === 0 ? nuevoPerfil.imagen : perfilEditando.imagen" alt="" ref="imagenSeleccionada">
                        <div class="w-[3.5rem] h-[3.5rem] items-center justify-center bg-[#C12C38] flex absolute bottom-0 right-7 rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#c12c38] hover:bg-[#f1f1f1] text-[#f1f1f1]">
                            <i class="fa-solid fa-pencil text-3xl" @click="seleccionarImagen()"></i>
                        </div>

                    </div>

                </div>
                <div class="flex items-center justify-center lg:w-full gap-x-10 w-[90%] mx-auto mb-6 lg:mb-0">
                    <div class="flex items-center justify-center">
                        <button type="button" class="bg-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-12 lg:text-xl text-sm mx-auto lg:mx-0" @click="cancelarEdicionPerfiles">VOLVER</button>
                    </div>
                    <div class="flex items-center justify-center">
                        <button type="button" class="border-2 border-[#C12C38] py-3 px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 lg:text-xl text-sm mx-auto lg:mx-0" @click="borrarPerfil">BORRAR PERFIL</button>
                    </div>
                </div>
            </form>

            <div class="absolute lg:top-10 lg:right-20 top-5 right-5 flex flex-col items-end justify-end w-full">
                <button type="button" class="bg-[#C12C38] py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 items-center justify-center flex px-12" @click="listo">LISTO</button>
            </div>
        </div>

    </div>
</template>


<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
    export default{
        data(){
            return{
                nombre: '',
                imagenSeleccionada: null,
            }
        },
        mounted(){
            const storedNombre = localStorage.getItem('nombrePerfilEditando');
            if (storedNombre) {
                this.nombre = storedNombre;
            } else {
                this.nombre = Object.keys(this.perfilEditando).length === 0 ? this.nuevoPerfil.nombre : this.perfilEditando.nombre;
                if (this.nombre == undefined){
                    this.nombre = '';
                }
            }
            const obtenerPerfilEditando = localStorage.getItem('perfilEditando'); 

            if (obtenerPerfilEditando && JSON.parse(obtenerPerfilEditando).id) {
                this.$store.commit('GUARDAR_PERFIL_EDITANDO', JSON.parse(obtenerPerfilEditando));
            }

            const lista_perfiles = localStorage.getItem('lista_perfiles');
            if (lista_perfiles) {
                this.$store.commit('SET_PERFILES', JSON.parse(lista_perfiles))
            }
            const imagenes = localStorage.getItem('imagenes');
            if (imagenes) {
                this.$store.commit('SET_IMAGENES_PERFILES', JSON.parse(imagenes))
            }
            const nuevoPerfil = localStorage.getItem('nuevoPerfil');
            if (nuevoPerfil){
                this.$store.commit('INICIALIZAR_PERFIL', JSON.parse(nuevoPerfil))  
            }

            const cargarDatos = async () => {
                const idUsuario = this.$route.params.id
                const comprobarPerfil = this.perfiles.find(usuario => usuario.id == idUsuario);
                if (comprobarPerfil !== undefined){
                    // console.log("Estoy editando un perfil")
                }else if(this.nuevoPerfil == false){
                    this.crearPerfil();
                }
            };
            cargarDatos();
        },

        computed:{
            ...mapState(['perfilEditando', 'imagenes_perfiles', 'nuevoPerfil', 'perfiles'])
        },
        methods:{
            ...mapMutations(['RESETEAR_EDICION', 'RESETEAR_NUEVO_PERFIL', 'RESETEAR_NOMBRE_PERFIL']),
            ...mapActions(['crearPerfil']),
            async listo(){

                if (!this.nombre || this.nombre.length < 3 || this.nombre.length >= 20) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El nombre debe estar entre 3 y 20 caracteres',
                    });
                    return;
                } 
                const id = localStorage.getItem('userId')
                this.imagenSeleccionada = this.$refs.imagenSeleccionada.src;
                if (Object.keys(this.perfilEditando).length !== 0) {
                    // Editar perfil existente
                    try {
                        const editarPerfil = await axios.put(`/api/perfiles/editar/${this.$route.params.id}`, {
                            nombre: this.nombre,
                            imagen: this.imagenSeleccionada
                        });
                        // Manejar la respuesta según corresponda
                        if (editarPerfil.data.success) {
                            // El perfil se editó correctamente
                            this.RESETEAR_EDICION();
                            this.RESETEAR_NOMBRE_PERFIL();
                            this.$router.push({ name: 'Perfil', params: { id: id} });
                        } else {
                            // Mostrar mensaje de error si falla la edición
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No se pudo editar el perfil',
                            });
                        }
                    } catch (error) {
                        // Manejar errores de la solicitud
                        console.error("Hubo un error al editar el perfil", error)
                    }
                } else {
                // Aquí debería agregar el perfil a la base de datos. Con el nombre que el usuario haya introducido y con la imagen correspondiente.
                    try{
                        const agregarPerfil = await axios.post('/api/perfiles/agregar', {
                            id_usuario: id,
                            id_perfil: this.$route.params.id,
                            nombre: this.nombre,
                            imagen: this.imagenSeleccionada
                        });
                        if (agregarPerfil.data.success) {
                            // El perfil se agregó correctamente
                            this.RESETEAR_NUEVO_PERFIL();
                            this.RESETEAR_NOMBRE_PERFIL();
                            this.$router.push({ name: 'Perfil', params: { id: id} });
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'El perfil ya existe en la base de datos',
                            });
                        }
                    }catch(error){
                        console.log("Hubo un error al agregar el perfil", error);
                    }
                }
            },
            seleccionarImagen(){
                localStorage.setItem('nombrePerfilEditando', this.nombre !== undefined ? this.nombre : '');
                this.$router.push({name: 'cambiar-imagen', params: {id: this.$route.params.id}})
            },
            cancelarEdicionPerfiles(){
                this.RESETEAR_NUEVO_PERFIL();
                this.RESETEAR_NOMBRE_PERFIL();
                const id = localStorage.getItem('userId')
                localStorage.removeItem('nombrePerfilEditando');
                this.$router.push({ name: 'Perfil', params: { id: id} });
            },
            borrarPerfil(){
                const id = localStorage.getItem('userId')
                localStorage.removeItem('nombrePerfilEditando');
                Swal.fire({
                    title: 'Vas a borrar el perfil ¿Deseas continuar?',
                    text: "Esta acción no se puede deshacer.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#C12C38',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, borrar',
                    cancelButtonText: 'Cancelar'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            const borrar_perfil = await axios.delete(`/api/perfiles/eliminar/${this.$route.params.id}`);
                            if (borrar_perfil.data.success){
                                this.$router.push({ name: 'Perfil', params: { id: id} });
                            }else{
                                Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No se ha podido borrar el perfil',
                            });
                            }
                        }catch(error){
                            console.log(error)
                        }
                    }
                });
            },
        },
        created() {
            
    }
    }

</script>

<style lang="scss" scoped>

.home{
    background: url('../assets/backgrounds/editar_perfil.png');
    background-size: 100% 100vh;
    background-repeat: no-repeat;
}
</style>