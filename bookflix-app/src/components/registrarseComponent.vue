<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-28">
        <div class="lg:flex lg:flex-row w-full items-center justify-center flex-col z-5 ">

            <div v-if="responsive" class="w-[95%] mx-auto">
                <h1 class="xl:text-4xl text-center tracking-wider leading-normal font-bold text-3xl my-5 w-full">
                    ¡Registrate <span class="text-[#E53544]">gratis</span> y explora todo nuestro contenido!
                </h1>
            </div>

            <div class="lg:w-[35%] lg:h-[60rem] border-4 border-r-0 rounded-l-xl border-[#40BFBC] shadow-lg shadow-left shadow-top shadow-bottom shadow-[#40BFBC] bg-[#212139] w-[90%] lg:mx-0 mx-auto"
            v-else>
                <div>
                    <img src="../assets/icons/bookmark.png" alt="" class="w-[64px] ml-12 mb-5">
                </div>
                <h1 class="lg:text-4xl text-center tracking-wider leading-normal font-bold pt-4 text-3xl lg:mb-6 mb-6 ">
                    ¡Registrate <span class="text-[#E53544]">gratis</span> y explora todo nuestro contenido!
                </h1>

                <div class="items-center justify-center flex flex-col  xl:mt-4">
                    <img src="../assets/backgrounds/muchos_libros.png" alt="" class="w-[80%]">
                </div>
            </div>

            <div class="lg:w-[35%] lg:h-[60rem] lg:bg-[#f1f1f1] rounded-r-xl lg:pl-12 pl-4 w-[90%] mx-auto lg:m-0 lg:border-4 lg:border-l-0 lg:shadow-lg lg:shadow-right lg:shadow-top lg:shadow-bottom lg:shadow-[#40BFBC] lg:border-[#40BFBC]">
                <div class="flex flex-row lg:items-end lg:justify-end pt-6 lg:pr-6 items-center justify-center">
                    <routerLink to="/login"  class="rounded-l-2xl px-5 py-3 text-[#fff] bg-[#C12C38] text-lg lg:w-[15%] text-center transition duration-300 hover:bg-red-900 font-bold w-[50%] botones-middle">Login</routerLink>
                    <routerLink to="/registro" class="rounded-r-2xl px-5 py-3 text-[#fff] bg-[#CD5D66] text-lg lg:w-[15%] text-center font-bold cursor-default w-[50%] botones-middle">Registrarse</routerLink>
                </div>  

                <form action="/registrarse" method="POST" class="lg:mt-6 flex flex-col lg:w-[75%] w-[90%] lg:h-[54rem] lg:ml-10 justify-center mt-10">
                    
                    <div class="flex flex-col mb-12">
                        <label for="nombre" class="text-2xl text-[#E53544] font-bold mb-6">NOMBRE</label>
                        <input type="text" placeholder="Introduce tu nombre" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12">
                        <label for="email" class="text-2xl text-[#E53544] font-bold mb-6">E-MAIL</label>
                        <input type="email" placeholder="Introduce tu e-mail" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12">
                        <label for="password" class="text-2xl text-[#E53544] font-bold mb-6">PASSWORD</label>
                        <input type="password" placeholder="Introduce la contraseña" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex items-center gap-x-3 w-full lg:text-2xl text-[1rem] lg:mb-0 mb-5">
                        <input type="checkbox" name="terminos" class="border-none bg-[#c7c7c7] checkbox-custom" v-model="isChecked" required>
                        <p class="lg:text-[#222] text-[#fff]" >
                            He leido y acepto los 
                            <routerLink to="/privacidad" class="text-[#E53544] underline transition duration-300 hover:text-[#c12c38]">términos y condiciones de uso</routerLink>
                        </p>
                    </div>

                    <button type="submit" class="xl:w-[30%] border-red-500 bg-[#C12C38] py-4 xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto boton-registro">Registrarse</button>

                </form>
            </div>

        </div>

    </div>
</template>
  

<script>
    
    import { mapState, mapMutations } from 'vuex'
    
    export default {
    
        data(){
            return{
                isChecked:false
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
  