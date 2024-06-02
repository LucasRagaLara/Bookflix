<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-20">
        <div class="lg:flex lg:flex-row w-full xl:items-start items-center justify-center flex-col z-5 ">
            <!-- Si es responsive se muestra este -->
            <div v-if="responsive" class="w-[95%] mx-auto">
                <h1 class="xl:text-4xl text-center tracking-wider leading-normal font-bold text-3xl my-5 w-full">
                    ¡Bienvenido de nuevo!<span class="text-[#E53544]"> Inicia sesión</span> para continuar explorando
                </h1>
            </div>
            <!-- Si no es responsive -->
            <div class="lg:w-[35%] 2xl:h-[50rem] md:h-[32rem] border-4 border-r-0 rounded-l-xl border-[#40BFBC] shadow-lg shadow-left shadow-top shadow-bottom shadow-[#40BFBC] bg-[#212139] w-[90%] lg:mx-0 mx-auto"
            v-else>
                <div>
                    <img src="../assets/icons/bookmark.png" alt="" class="2xl:w-[64px] md:w-[32px] ml-12 mb-5">
                </div>
                <h1 class="2xl:text-4xl md:text-lg text-center tracking-wider leading-normal font-bold pt-4 text-3xl lg:mb-6 mb-6 ">
                    ¡Bienvenido de nuevo!<span class="text-[#E53544]"> Inicia sesión</span> para continuar explorando
                </h1>

                <div class="items-center justify-center flex flex-col  xl:mt-4 w-full">
                    <img src="../assets/backgrounds/muchos_libros.png" alt="" class="2xl:w-[75%] md:w-[60%]">
                    <p class="mx-auto text-center mt-4 mb-4 font-bold mb-2 text-[1.1rem] 2xl:text-[1.1rem] md:text-sm">¿Se te ha olvidado la contraseña?
                        <RouterLink to="/forgot" class="mt-4 hover:text-[#E53544] font-bold transition-all duration-300 ease-in-out xl:mb-0 mb-2 text-[1.1rem] 2xl:text-[1.1rem] md:text-sm">haz click aquí</RouterLink>
                    </p>
                </div>
            </div>
            <!-- Rutas login-Registro -->
            <div class="lg:w-[35%] 2xl:min-h-[50rem] md:h-[32rem] lg:bg-[#f1f1f1] rounded-r-xl lg:pl-12 pl-4 w-[90%] mx-auto lg:m-0 lg:border-4 lg:border-l-0 lg:shadow-lg lg:shadow-right lg:shadow-top lg:shadow-bottom lg:shadow-[#40BFBC] lg:border-[#40BFBC]">
                <div class="flex flex-row 2xl:items-end 2xl:justify-end pt-6 lg:pr-6 items-center justify-center">
                    <routerLink to="/login"  class="rounded-l-2xl px-5 py-3 text-[#fff] bg-[#CD5D66] 2xl:text-lg md:text-sm text-lg 2xl:w-[25%] text-center transition duration-300 font-bold botones-middle cursor-default">Login</routerLink>
                    <routerLink to="/registro" class="rounded-r-2xl px-5 py-3 text-[#fff] bg-[#C12C38] 2xl:text-lg md:text-sm text-lg 2xl:w-[25%] text-center font-bold w-[50%] botones-middle cursor-pointer hover:bg-red-900">Registrarse</routerLink>
                </div>  
                <!-- Formulario de login -->
                <form @submit.prevent="login" class="2xl:mt-6 flex flex-col lg:w-[75%] w-[90%] 2xl:h-[40rem] md:h-[28rem] lg:ml-10 justify-center mt-10 md:mt-0">

                    <div class="flex flex-col mb-12 items-center justify-center w-full" v-if="responsive">
                        <div class="bg-white rounded-full p-4">
                            <img src="../assets/icons/leyendo.png" alt="" class="w-[164px]">
                        </div>
                    </div>

                    <div class="flex flex-col mb-12 md:mb-4 2xl:mb-12">
                        <label for="email" class="2xl:text-2xl md:text-sm text-[#E53544] 2xl:mb-6 md:mb-2 font-bold mb-6">E-MAIL</label>
                        <input type="email" placeholder="Introduce tu e-mail" class="2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" v-model="email" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12 md:mb-4 2xl:mb-12">
                        <label for="password" class="2xl:text-2xl md:text-sm text-[#E53544] 2xl:mb-6 md:mb-2 font-bold mb-6">PASSWORD</label>
                        <input type="password" placeholder="Introduce la contraseña" class="2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" v-model="password" required minlength="3" maxlength="45">
                    </div>

                    <button type="submit" class="xl:w-[45%] border-red-500 bg-[#C12C38] 2xl:py-4 md:py-2 2xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto boton-registro 2xl:text-2xl md:text-sm ">Iniciar sesión</button>
                    <p v-if="responsive" class="mx-auto text-center mt-4 mb-4 font-bold mb-2 text-[1.1rem]">¿Se te ha olvidado la contraseña?
                        <RouterLink to="/forgot" class="mt-4 hover:text-[#E53544] font-bold transition-all duration-300 ease-in-out xl:mb-0 mb-2 text-[1.1rem]">haz click aquí</RouterLink>
                    </p>
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
</script>
  
<style scoped>

.checkbox-custom{
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
