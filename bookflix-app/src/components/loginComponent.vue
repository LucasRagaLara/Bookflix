<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-28">
        <div class="xl:flex xl:flex-row w-full items-center justify-center flex-col z-5 ">

            <div v-if="responsive" class="w-[95%] mx-auto">
                <h1 class="xl:text-4xl text-center tracking-wider leading-normal font-bold text-3xl my-5 w-full">
                    ¡Bienvenido de nuevo!<span class="text-[#E53544]"> Inicia sesión</span> para continuar explorando
                </h1>
            </div>

            <div class="lg:w-[35%] lg:h-[60rem] border-4 border-r-0 rounded-l-xl border-[#40BFBC] shadow-lg shadow-left shadow-top shadow-bottom shadow-[#40BFBC] bg-[#212139] w-[90%] lg:mx-0 mx-auto"
            v-else>
                <div>
                    <img src="../assets/icons/bookmark.png" alt="" class="w-[64px] ml-12 mb-5">
                </div>
                <h1 class="lg:text-4xl text-center tracking-wider leading-normal font-bold pt-4 text-3xl lg:mb-6 mb-6">
                    ¡Bienvenido de nuevo!<span class="text-[#E53544]"> Inicia sesión</span> para continuar explorando
                </h1>

                <div class="items-center justify-center flex flex-col  xl:mt-4">
                    <img src="../assets/backgrounds/muchos_libros.png" alt="" class="w-[80%]">
                </div>
            </div>

            <div class="lg:w-[35%] lg:h-[60rem] lg:bg-[#f1f1f1] rounded-r-xl lg:pl-12 pl-4 w-[90%] mx-auto lg:m-0 lg:border-4 lg:border-l-0 lg:shadow-lg lg:shadow-right lg:shadow-top lg:shadow-bottom lg:shadow-[#40BFBC] lg:border-[#40BFBC]">
                <div class="flex flex-row lg:items-end lg:justify-end pt-6 lg:pr-6 items-center justify-center">
                    <routerLink to="/login"  class="rounded-l-2xl px-5 py-3 text-[#fff] bg-[#CD5D66] text-lg lg:w-[15%] text-center font-bold cursor-default w-[50%] botones-middle">Login</routerLink>
                    <routerLink to="/registro" class="rounded-r-2xl px-5 py-3 text-[#fff] bg-[#C12C38] text-lg lg:w-[15%] text-center transition duration-300 hover:bg-red-900 font-bold w-[50%] botones-middle">Registrarse</routerLink>
                </div>  

                <form @submit.prevent="login" class="lg:mt-6 flex flex-col lg:w-[75%] w-[90%] lg:h-[54rem] lg:ml-10 justify-center mt-10">
                    
                    <div class="flex flex-col mb-12 items-center justify-center w-full items-center justify-center mx-auto" v-if="responsive">
                        <div class="bg-white rounded-full p-4">
                            <img src="../assets/icons/leyendo.png" alt="" class="w-[164px]">
                        </div>
                    </div>

                    <div class="flex flex-col mb-12 items-center justify-center w-full" v-else>
                        <img src="../assets/icons/leyendo.png" alt="" class="w-[164px]">
                    </div>


                    <div class="flex flex-col mb-12">
                        <label for="email" class="lg:text-2xl text-[#E53544] font-bold mb-6">E-MAIL</label>
                        <input type="email" placeholder="Introduce tu e-mail" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45" v-model="email">
                    </div>

                    <div class="flex flex-col mb-12">
                        <label for="password" class="lg:text-2xl text-[#E53544] font-bold mb-6">PASSWORD</label>
                        <input type="password" placeholder="Introduce la contraseña" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45" v-model="password">
                    </div>

                    <!-- <div class="flex items-center gap-x-3">
                        <input type="checkbox" name="terminos" class="border-none bg-[#c7c7c7] checkbox-custom" v-model="isChecked">
                        <p class="text-[#E53544]" >
                            He leido y acepto los 
                            <routerLink to="/politicas" class="text-[#76161D] underline transition duration-300 hover:text-[#c12c38]">términos y condiciones de uso</routerLink>
                        </p>
                    </div> -->

                    <button type="submit" class="xl:w-[30%] border-red-500 bg-[#C12C38] py-4 xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto boton-registro">Iniciar sesión</button>

                </form>
            </div>

        </div>

    </div>
</template>
  
<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex'
import Swal from 'sweetalert2'

export default {

    data(){
        return{
            email: '',
            password: ''
        }
    },

    computed: {
        ...mapState(['responsive'])
    },

    methods: {
        ...mapMutations(['ESTADO_RESPONSIVE']),
        comprobarResponsive(){
            const comprobar = window.innerWidth <= 1050; 
            this.ESTADO_RESPONSIVE(comprobar)
        },
        async login(){
            try{
                const enviar_datos = await axios.post('/api/users/loguearse', {
                    email: this.email,
                    password: this.password
                });
                this.email = '';
                this.password = '';
                console.log(enviar_datos.data)
                // Si se devuelve un true del backend
                if (enviar_datos.data.success) {
                    const { token, id } = enviar_datos.data.mensaje;
                    console.log(token)
                    console.log(id)
                    localStorage.setItem('token', token);
                    localStorage.setItem('userId', id);

                    this.$router.push({ name: 'Perfil', params: { id } });
                
                // Si devuelve un false
                } else {
                    console.log("Entra en el false")
                    Swal.fire({
                    title: 'Error',
                    text: 'El correo o el password no coinciden',
                    icon: 'error',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: "#E53544",
                    customClass: {
                        popup: 'swal-wide',
                        confirmButton: 'swal-confirm-button'
                    }
                    });
                }
            } catch(error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Error al procesar la solicitud',
                    icon: 'error',
                    confirmButtonText: 'Continuar',
                    customClass: {
                        popup: 'swal-wide',
                        confirmButton: 'swal-confirm-button'
                    }
                });
                console.log(error);
            }
        },
        mounted(){
            this.comprobarResponsive();
            window.addEventListener('resize', this.comprobarResponsive);
        },

        beforeUnmount() {
        window.removeEventListener('resize', this.comprobarResponsive);
        },
    }
}
</script>
  
<style scoped>
    
    .checkbox-custom{
        /* -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none; */
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 4px;
        outline: none;
        transition: background-color 0.2s ease;
        cursor: pointer;
    }

    .checkbox-custom:checked{
        background-color: #76161D;
    }

    .input-custom:focus {
        outline: none !important;
        border-bottom: 4px solid #E53544;
        width: 85%;
        color: #7A1C24;
    }

    @media (max-width: 1750px){
        .boton-registro{
            width: 95%;
        }
        .botones-middle{
            width: 45%;
        }
    }

    @media (max-width: 800px){
        .input-custom:focus{    
        width: 95%;
        color: #fff;
        }
    }

</style>
  