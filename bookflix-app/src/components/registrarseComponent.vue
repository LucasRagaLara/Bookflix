<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-20">
        <div class="lg:flex lg:flex-row w-full xl:items-start items-center justify-center flex-col z-5 ">
            <!-- Si es responsive se muestra este -->
            <div v-if="responsive" class="w-[95%] mx-auto">
                <h1 class="xl:text-4xl text-center tracking-wider leading-normal font-bold text-3xl my-5 w-full">
                    ¡Registrate <span class="text-[#E53544]">gratis</span> y explora todo nuestro contenido!
                </h1>
            </div>
            <!-- Si no es responsive -->
            <div class="lg:w-[35%] 2xl:h-[50rem] md:h-[32rem] border-4 border-r-0 rounded-l-xl border-[#40BFBC] shadow-lg shadow-left shadow-top shadow-bottom shadow-[#40BFBC] bg-[#212139] w-[90%] lg:mx-0 mx-auto"
            v-else>
                <div>
                    <img src="../assets/icons/bookmark.png" alt="" class="2xl:w-[64px] md:w-[32px] ml-12 mb-5">
                </div>
                <h1 class="2xl:text-4xl md:text-lg text-center tracking-wider leading-normal font-bold pt-4 text-3xl lg:mb-6 mb-6 ">
                    ¡Registrate <span class="text-[#E53544]">gratis</span> y explora todo nuestro contenido!
                </h1>

                <div class="items-center justify-center flex flex-col  xl:mt-4 w-full">
                    <img src="../assets/backgrounds/muchos_libros.png" alt="" class="2xl:w-[75%] md:w-[60%]">
                </div>
            </div>
            <!-- Rutas login-Registro -->
            <div class="lg:w-[35%] 2xl:min-h-[50rem] md:h-[32rem] lg:bg-[#f1f1f1] rounded-r-xl lg:pl-12 pl-4 w-[90%] mx-auto lg:m-0 lg:border-4 lg:border-l-0 lg:shadow-lg lg:shadow-right lg:shadow-top lg:shadow-bottom lg:shadow-[#40BFBC] lg:border-[#40BFBC]">
                <div class="flex flex-row 2xl:items-end 2xl:justify-end pt-6 lg:pr-6 items-center justify-center">
                    <routerLink to="/login"  class="rounded-l-2xl px-5 py-3 text-[#fff] bg-[#C12C38] 2xl:text-lg md:text-sm text-lg 2xl:w-[25%] text-center transition duration-300 hover:bg-red-900 font-bold botones-middle">Login</routerLink>
                    <routerLink to="/registro" class="rounded-r-2xl px-5 py-3 text-[#fff] bg-[#CD5D66] 2xl:text-lg md:text-sm text-lg 2xl:w-[25%] text-center font-bold cursor-default w-[50%] botones-middle cursor-pointer">Registrarse</routerLink>
                </div>  
                <!-- Formulario de registro -->
                <form @submit.prevent="registrarse" class="2xl:mt-6 flex flex-col lg:w-[75%] w-[90%] 2xl:h-[40rem] md:h-[28rem] lg:ml-10 justify-center mt-10 md:mt-0">
                    
                    <div class="flex flex-col mb-12 2xl:mb-12 md:mb-4">
                        <label for="nombre" class="2xl:text-2xl md:text-sm text-[#E53544] font-bold 2xl:mb-6 md:mb-2 mb-6">NOMBRE</label>
                        <input type="text" placeholder="Introduce tu nombre" class="2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" v-model="nombre" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12 md:mb-4 2xl:mb-12">
                        <label for="email" class="2xl:text-2xl md:text-sm text-[#E53544] 2xl:mb-6 md:mb-2 font-bold mb-6">E-MAIL</label>
                        <input type="email" placeholder="Introduce tu e-mail" class="2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" v-model="email" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12 md:mb-4 2xl:mb-12">
                        <label for="password" class="2xl:text-2xl md:text-sm text-[#E53544] 2xl:mb-6 md:mb-2 font-bold mb-6">PASSWORD</label>
                        <input type="password" placeholder="Introduce la contraseña" class="2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" v-model="password" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex items-center gap-x-3 w-full 2xl:text-2xl text-[1rem] lg:mb-0 mb-5">
                        <input type="checkbox" name="terminos" class="border-none bg-[#c7c7c7] checkbox-custom" v-model="isChecked" required>
                        <p class="lg:text-[#222] text-[#fff]" >
                            He leido y acepto los 
                            <routerLink to="/privacidad" class="text-[#E53544] underline transition duration-300 hover:text-[#c12c38]">términos y condiciones de uso</routerLink>
                        </p>
                    </div>

                    <button type="submit" class="xl:w-[45%] border-red-500 bg-[#C12C38] 2xl:py-4 md:py-2 2xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto boton-registro 2xl:text-2xl md:text-sm ">Registrarse</button>

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
                isChecked:false,
                nombre: '',
                email: '',
                password: '',
                validarPassword: true,
                validarEmail: true,
                validarNombre: true
            }
        },
    
        computed: {
            ...mapState(['responsive'])
        },
    
        methods: {
            ...mapMutations(['ESTADO_RESPONSIVE']),
            
            validacionPassword(){
                const contieneNumero = /\d/.test(this.password);
                const contieneMayuscula = /[A-Z]/.test(this.password);
                const contieneMinuscula = /[a-z]/.test(this.password);
                this.validarPassword = contieneNumero && contieneMayuscula && contieneMinuscula;
                return this.validarPassword;
            },

            validacionNombre(){
                const regex = /^[a-zA-Z\s]+$/;
                this.validarNombre = regex.test(this.nombre);
                return this.validarNombre;            
            },

            validacionEmail(){
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.validarEmail = regex.test(this.email);
                return this.validarEmail;
            },

            async registrarse(){
                // array que almacena el número de errores
                const errores = []

                // comprobacion de los datos

                 if (!this.validacionNombre()) {
                    errores.push('El nombre no es válido, solo puede contener letras y espacios');
                }
                
                if (!this.validacionEmail()) {
                    errores.push('El email no es válido');
                }

                if (!this.validacionPassword()) {
                    errores.push('El password no es válido, debe contener una mayúscula, una minúscula y un número');
                }
                // Si hay errores. Sale el error con el problema.
                if (errores.length > 0) {
                    Swal.fire({
                    title: 'Errores de Validación',
                    html: errores.map(error => `<p style="text-align: left; margin: 0;">${error}</p>`).join(''),
                    icon: 'error',
                    confirmButtonText: 'Continuar',
                    customClass: {
                        popup: 'swal-wide',
                        confirmButton: 'swal-confirm-button'
                    }
                    });
                } else {
                    try {
                        const enviar_datos = await axios.post('/api/users/registrarse', {
                            nombre: this.nombre,
                            email: this.email,
                            password: this.password
                        });
                        // Si se devuelve un true del backend
                        if (enviar_datos.data.success) {
                            Swal.fire({
                            title: '¡Ya puedes ir al login!',
                            text: enviar_datos.data.mensaje,
                            icon: 'success',
                            confirmButtonText: 'Continuar',
                            customClass: {
                                popup: 'swal-wide',
                                confirmButton: 'swal-confirm-button'
                            }
                            }).then((redireccion) => {
                                if (redireccion.isConfirmed){
                                    this.$router.push('/login');
                                }
                            });
                        // Si devuelve un false
                        } else {
                            Swal.fire({
                            title: 'Error',
                            text: 'Hubo un problema con el registro',
                            icon: 'error',
                            confirmButtonText: 'Continuar',
                            customClass: {
                                popup: 'swal-wide',
                                confirmButton: 'swal-confirm-button'
                            }
                            });
                        }
                    } catch (error) {
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
            // Comprueba si la web es responsive para actualizar el valor
            comprobarResponsive(){
                const comprobar = window.innerWidth <= 1050; 
                this.ESTADO_RESPONSIVE(comprobar)
            }
        },
        
        mounted(){
            this.comprobarResponsive();
            window.addEventListener('resize', this.comprobarResponsive);
        },
    
        beforeUnmount() {
          window.removeEventListener('resize', this.comprobarResponsive);
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
            width: 50%;
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