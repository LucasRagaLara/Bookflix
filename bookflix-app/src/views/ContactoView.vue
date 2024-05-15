<template>
    <div class="home w-full min-h-screen flex flex-col items-center xl:pt-40 pt-28">
        <div class="xl:flex xl:flex-row w-full items-center justify-center gap-x-20 flex-col">

            <div class="xl:w-[35%] xl:h-[58rem]">
                <h1 class="xl:text-5xl text-center tracking-wider leading-normal font-bold pt-4 text-3xl xl:mb-0 mb-6">ESTAMOS AQUÍ PARA AYUDARTE <span class="text-[#E53544]">CUÉNTANOS</span> TU EXPERIENCIA</h1>

                <div class="xl:h-[45rem] items-center justify-center flex flex-col">
                    <div class="items-center xl:justify-start flex xl:mb-12 xl:w-[45%] w-[85%] p-2 mb-4">
                        <img src="../assets/icons/email.png" alt="" class="w-[48px] mr-3">
                        <p class="">soportebflix@gmail.com</p>
                    </div>
                    <div class="items-center xl:justify-start border-[#E53544] border-2 bg-[#E5354440] rounded-lg flex xl:mb-12 xl:w-[45%] w-[85%] p-2 mb-4">
                        <img src="../assets/icons/phone.png" alt="" class="w-[48px] mr-3">
                        <p class="">+34 651372400</p>
                    </div>
                    <div class="items-center xl:justify-start flex xl:mb-12 xl:w-[45%] w-[85%] p-2 mb-4">
                        <img src="../assets/icons/map.png" alt="" class="w-[48px] mr-3">
                        <p>123 calle de los libros 456</p>
                    </div>
                </div>
                <div class="flex items-end justify-center xl:w-full xl:gap-x-36 xl:mb-0 my-6 gap-x-10 w-[95%] mx-auto">
                    <i class="fab fa-facebook-f text-3xl text-3xl hover:bg-[#E53544] hover:text-white w-12 h-12 rounded-full items-center justify-center flex transition-all duration-300 ease-in-out transform hover:scale-125 cursor-pointer"></i>
                    <i class="fab fa-instagram text-3xl hover:bg-[#E53544] hover:text-white w-12 h-12 rounded-full items-center justify-center flex transition-all duration-300 ease-in-out transform hover:scale-125 cursor-pointer"></i>
                    <i class="fab fa-tiktok text-3xl text-3xl hover:bg-[#E53544] hover:text-white w-12 h-12 rounded-full items-center justify-center flex transition-all duration-300 ease-in-out transform hover:scale-125 cursor-pointer"></i>
                </div>

            </div>

            <div class="xl:w-[30%] xl:h-[58rem] xl:bg-[#f1f1f1] rounded-xl xl:pl-12 pl-4 w-[90%] mx-auto xl:m-0">
                <form action="/contacto" method="POST" class="mt-6 flex flex-col w-full">
                    
                    <h1 class="xl:text-[#7A1C24] text-3xl mt-5 font-bold">El tema del mensaje es...</h1>

                    <div class="flex flex-wrap xl:w-full mt-6 w-[90%]">

                        <div class="xl:w-1/3 w-1/2">
                            <button type="button" class="border-2 border-[#C7C7C7] text-[#C7C7C7] py-3 px-8 rounded-xl mb-6 lg:w-[75%] hover:bg-[#E53544] hover:text-white hover:border-[#E53544] transition-all duration-300 ease-in-out transform lg:hover:scale-110 hover:scale-105">Cuenta</button>
                        </div>

                        <div class="xl:w-1/3 w-1/2">
                            <button type="button" class="border-2 border-[#C7C7C7] text-[#C7C7C7] py-3 px-8 rounded-xl mb-6 lg:w-[75%] flex items-center justify-center hover:bg-[#E53544]  hover:text-white hover:border-[#E53544] transition-all duration-300 ease-in-out transform lg:hover:scale-110 hover:scale-105">Sugerencias</button>
                        </div>

                        <div class="xl:w-1/3 w-1/2">
                            <button type="button" class="border-2 border-[#C7C7C7] text-[#C7C7C7] py-3 px-8 rounded-xl mb-6 w-[75%] flex items-center justify-center hover:bg-[#E53544]  hover:text-white hover:border-[#E53544] transition-all duration-300 ease-in-out transform lg:hover:scale-110 hover:scale-105">Errores</button>
                        </div>

                        <div class="xl:w-1/3 w-1/2">
                            <button type="button" class="border-2 border-[#C7C7C7] text-[#C7C7C7] py-3 px-8 rounded-xl mb-6 w-[75%] flex items-center justify-center hover:bg-[#E53544]  hover:text-white hover:border-[#E53544] transition-all duration-300 ease-in-out transform lg:hover:scale-110 hover:scale-105">Conexión</button>
                        </div>

                        <div class="xl:w-1/3 w-1/2">
                            <button type="button" class="border-2 border-[#C7C7C7] text-[#C7C7C7] py-3 px-8 rounded-xl mb-6 w-[75%] flex items-center justify-center hover:bg-[#E53544]  hover:text-white hover:border-[#E53544] transition-all duration-300 ease-in-out transform lg:hover:scale-110 hover:scale-105">Otro</button>
                        </div>

                    </div>

                    <input type="text" placeholder="Nombre" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] mb-12 text-[#9ca3af] w-[90%]" required minlength="3" maxlength="45">

                    <input type="email" placeholder="Email" class="bg-transparent border-b-4 border-[#C7C7C7] lg:w-[85%] text-[#9ca3af] w-[90%]" required minlength="3" maxlength="45">

                    <div class="flex flex-col mt-12">
                        <label for="Mensaje" class="text-2xl text-[#9ca3af]">Mensaje</label>
                        <textarea cols="10" rows="6" placeholder="Escribe aquí tu mensaje..." class="text-[#9ca3af] bg-transparent border-4 border-[#C7C7C7] lg:w-[85%] rounded-lg p-6 w-[90%]" required minlength="3" maxlength="200" @focus="moveCursorToStart" v-model="textarea_contact">
                        </textarea>  
                    </div>

                    <button type="submit" class="xl:w-[40%] border-red-500 bg-[#C12C38] py-4 xl:mt-12 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold w-[60%] mt-8 mb-8 xl:mx-0 mx-auto"><i class="fa-regular fa-paper-plane mr-2"></i>Enviar Mensaje</button>

                </form>
            </div>

            <div class="xl:absolute xl:bottom-14 xl:text-[#222] xl:left-10 flex lg:gap-x-20 gap-x-10 w-[90%] mx-auto mt-4 xl:flex-row text-center xl:mb-0">
                <router-link to="/privacidad" class="hover:text-[#E53544] font-bold transition-all duration-300 ease-in-out xl:mb-0 mb-2 text-[1.3rem]">Política de privacidad</router-link>
                <router-link to="/aviso-legal" class="hover:text-[#E53544] font-bold transition-all duration-300 ease-in-out xl:mb-0 mb-2 text-[1.3rem]">Aviso legal</router-link>
                <router-link to="/cookies" class="hover:text-[#E53544] font-bold transition-all duration-300 ease-in-out xl:mb-0 text-[1.3rem]">Política de cookies</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ContactoView',

        data(){
            return{
                textarea_contact: ''
            }
        },
        computed:{

        },

        methods:{
            moveCursorToStart() {
            this.textarea_contact = '' + this.textarea_contact;

            this.$nextTick(() => {
                this.textarea_contact = this.textarea_contact.trim();
            });
          }
        }
    }

</script>


<style lang="scss" scoped>

    .home{
        background: url('../assets/backgrounds/contacto.png');
        background-repeat: no-repeat;
        background-size: 100% 100vh;
    }

    input:focus, textarea:focus {
        outline: none !important;
        border-bottom: 4px solid #E53544;
        width: 85%;
        color: #7A1C24;
    }

    textarea:focus{
        border: 4px solid #E53544;
    }
    textarea{
        resize: none;
    }
    button:focus{
        background-color:#E53544;
        border: 2px solid #E53544;
        color: #fff;
    }

    @media (max-width: 800px){
        input:focus, textarea:focus {
        width: 90%;
        color: #fff;
        }
    }

</style>