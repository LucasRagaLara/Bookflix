<template>
    <div class="home w-full min-h-screen flex flex-col items-center 2xl:pt-20 md:pt-0 pt-24">

        <form @submit.prevent="changePass" class="flex flex-col lg:w-[40%] w-[90%] justify-center items-center mt-10">
            <div class="flex flex-col mb-6 items-center justify-center w-[95%] mx-auto">
                <img src="../assets/icons/forgotten.png" alt="" class="w-[128px]">
            </div>
            <div  class="w-[95%] mx-auto flex flex-col items-center justify-center">
                <h1 class="2xl:text-4xl md:text-xl text-center tracking-wider leading-normal font-bold text-3xl my-5 w-full">
                    ¿CAMBIANDO LA CONTRASEÑA?
                </h1>
                <h3 class="2xl:text-4xl md:text-xl estext-center tracking-wider leading-normal font-bold text-xl w-full mb-12">
                    No te preocupes, si se te vuelve a olvidar siempre puedes solicitar otra
                </h3>
            </div>
            <div class="flex flex-col mb-12 w-full items-center justify-center">
                <label for="password" class="text-2xl 2xl:text-2xl md:text-sm text-[#E53544] font-bold mb-6 lg:w-[75%] w-[95%]">PASSWORD</label>
                <input type="text" placeholder="Introduce tu nueva contraseña" class="text-2xl 2xl:text-2xl md:text-sm bg-transparent border-b-4 border-[#C7C7C7] lg:w-[75%] text-[#9ca3af] input-custom w-[95%]" required minlength="3" maxlength="45" v-model="password">
            </div>

            <button type="submit" class="items-center justify-center flex border-red-500 bg-[#C12C38] px-6 lg:py-4 py-4 xl:mt-6 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold mt-8 mb-8 xl:mx-0 mx-auto boton-registro lg:text-[1.1rem] text-2xl 2xl:text-2xl md:text-sm ">Cambiar contraseña</button>

        </form>
    </div>
</template> 
  
  
  
<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {

    data(){
        return{
            password: '',
            validarPassword: true,
        }
    },

    methods: {
        validacionPassword(){
                const contieneNumero = /\d/.test(this.password);
                const contieneMayuscula = /[A-Z]/.test(this.password);
                const contieneMinuscula = /[a-z]/.test(this.password);
                this.validarPassword = contieneNumero && contieneMayuscula && contieneMinuscula;
                return this.validarPassword;
            },

        async changePass(){
            const token = this.$route.params.id
            if (!this.validacionPassword()) {
                Swal.fire({
                    title: 'Errores de Validación',
                    text: 'El password no es válido, debe contener una Mayúscula, una minúscula y un número',
                    icon: 'error',
                    confirmButtonText: 'Continuar',
                    customClass: {
                        popup: 'swal-wide',
                        confirmButton: 'swal-confirm-button'
                    }
                    });
            }else{
                try{
                    const enviar_datos = await axios.put(`/api/users/cambiar/password/${token}`, {
                        password: this.password,
                    });
                    this.email = '';
                    console.log(enviar_datos.data)
                    // Si se devuelve un true del backend
                    if (enviar_datos.data.success) {
                        Swal.fire({
                            title: '¡Genial!',
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
                        text: enviar_datos.data.mensaje,
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
        }
    },
}
</script>
  
<style scoped>

.home{
    background: url('../assets/backgrounds/experiencias.png');
    background-size: 100% 100vh;
    background-repeat: no-repeat;
}

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
    width: 75%;
    color: #f1f1f1;
}

@media (max-width: 800px){
    .input-custom:focus{    
        width: 95%;
        color: #fff;
    }
}

</style>
