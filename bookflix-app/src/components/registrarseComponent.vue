<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-20 pt-28">
        <div class="xl:flex xl:flex-row w-full items-center justify-center flex-col z-5 ">

            <div class="xl:w-[35%] xl:h-[60rem] border-4 border-r-0 rounded-l-xl border-[#40BFBC] shadow-lg shadow-left shadow-top shadow-bottom shadow-[#40BFBC] bg-[#212139]">
                <div>
                    <img src="../assets/icons/bookmark.png" alt="" class="w-[64px] ml-12 mb-5">
                </div>
                <h1 class="xl:text-4xl text-center tracking-wider leading-normal font-bold pt-4 text-3xl xl:mb-6 mb-6">
                    ¡Registrate <span class="text-[#E53544]">gratis</span> y explora todo nuestro contenido!
                </h1>

                <div class="items-center justify-center flex flex-col  xl:mt-4">
                    <img src="../assets/backgrounds/muchos_libros.png" alt="" class="w-[80%]">
                </div>
            </div>

            <div class="xl:w-[35%] xl:h-[60rem] xl:bg-[#f1f1f1] rounded-r-xl xl:pl-12 pl-4 w-[90%] mx-auto xl:m-0 border-4 border-l-0 shadow-lg shadow-right shadow-top shadow-bottom shadow-[#40BFBC] border-[#40BFBC]">
                <div class="flex flex-row items-end justify-end pt-6 pr-6">
                    <routerLink to="/login"  class="rounded-l-2xl px-5 py-3 text-[#fff] bg-[#C12C38] text-sm w-[15%] text-center transition duration-300 hover:bg-red-900 font-bold ">Login</routerLink>
                    <routerLink to="/registro" class="rounded-r-2xl px-5 py-3 text-[#fff] bg-[#CD5D66] text-sm w-[15%] text-center font-bold cursor-default">Registrarse</routerLink>
                </div>  

                <form action="/registrarse" method="POST" class="mt-6 flex flex-col w-[75%] h-[54rem] ml-10 justify-center">
                    
                    <div class="flex flex-col mb-12">
                        <label for="nombre" class="lg:text-2xl text-[#E53544] font-bold mb-6">NOMBRE</label>
                        <input type="text" placeholder="Introduce tu nombre" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] w-[90%] input-custom" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12">
                        <label for="email" class="lg:text-2xl text-[#E53544] font-bold mb-6">E-MAIL</label>
                        <input type="email" placeholder="Introduce tu e-mail" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] w-[90%] input-custom" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex flex-col mb-12">
                        <label for="password" class="lg:text-2xl text-[#E53544] font-bold mb-6">PASSWORD</label>
                        <input type="password" placeholder="Introduce la contraseña" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] w-[90%] input-custom" required minlength="3" maxlength="45">
                    </div>

                    <div class="flex items-center gap-x-3">
                        <input type="checkbox" name="terminos" class="border-none bg-[#c7c7c7] checkbox-custom" v-model="isChecked" required>
                        <p class="text-[#E53544]" >
                            He leido y acepto los 
                            <routerLink to="/privacidad" class="text-[#76161D] underline transition duration-300 hover:text-[#c12c38]">términos y condiciones de uso</routerLink>
                        </p>
                    </div>

                    <button type="submit" class="xl:w-[30%] border-red-500 bg-[#C12C38] py-4 xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto">Registrarse</button>

                </form>
            </div>

        </div>

    </div>
</template>
  
<script>
  
  export default {
        data(){
            return{
                isChecked: false
            }
        },
        computed:{

        },

        methods:{
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

    @media (max-width: 800px){
        input-custom:focus{
        width: 90%;
        color: #fff;
        }
    }
</style>
  