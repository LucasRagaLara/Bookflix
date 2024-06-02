<template>
    <div class="w-full text-center flex items-center justify-center flex-col">
        <h1 class="2xl:text-5xl tracking-wide 2xl:mb-3 2xl:mt-0 mt-5"><strong>DESCUBRE LAS <span class="text-[#E53544]">VENTAJAS</span></strong></h1>
        <h1 class="2xl:text-5xl tracking-wide 2xl:mb-3 mb-10"><strong>DE NUESTRA PLATAFORMA ONLINE</strong></h1>

      <div class="2xl:mt-10 2xl:mt-14 2xl:mb-6 2xl:min-h-[15rem] 2xl:flex-row md:flex-row w-full items-center justify-center flex flex-col md:justify-center md:items-start">

        <div class="2xl:w-1/3 2xl:pb-4 flex items-center justify-center flex-col text-center pb-8 md:pb-0 md:w-1/5">
          <p class="2xl:w-[45%] mb-3 w-[90%] md:text-lg">Explora miles de libros instantáneamente.</p>
            <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#40BFBC]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] 2xl:w-[15rem] 2xl:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                <img src="../assets/icons/computer.png" class="2xl:w-[7rem] 2xl:w-[10rem] w-[8rem] md:w-[4rem]" data-atropos-offset="2.5">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">EXPLORA</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="2xl:w-1/3 2xl:pb-4 flex flex-col items-center justify-center text-center pb-8 md:w-1/5">
          <p class="2xl:w-[50%] mb-3 w-[90%] md:text-lg">Libros que amarás, seleccionados solo para ti.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#E53544]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] 2xl:w-[15rem] 2xl:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                <img src="../assets/icons/corazon.png" class="2xl:w-[7rem] 2xl:w-[10rem] w-[8rem]  md:w-[4rem]" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">DISFRUTA</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

        <div class="2xl:w-1/3 2xl:pb-4 flex flex-col items-center justify-center text-center pb-8 md:w-1/5">
          <p class="2xl:w-[40%] mb-3 w-[90%] md:text-lg">Tu próxima lectura, dondequiera que estés.</p>
          <atropos-component class=""
            activeOffset="100"
            ref="atroposElement">
            <!-- main Atropos container (required), add your custom class here -->
                <div class="atropos my-atropos bg-[#40BFBC]">
                <!-- scale container (required) -->
                    <div class="atropos-scale">
                    <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                        <!-- inner container (required) -->
                            <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                <img src="../assets/icons/movil.png" class="2xl:w-[7rem] 2xl:w-[10rem] w-[8rem] 2xl:pb-1 md:w-[4rem]" data-atropos-offset="4">
                        <!-- put your custom content here -->
                                <div data-atropos-offset="8" class="atropos-button-wrap">
                                    <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">ACCEDE</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </atropos-component>
        </div>

      </div>

      <div class="2xl:min-h-[15rem] 2xl:flex-row md:flex-row  w-full items-center justify-center flex flex-col">

        <div class="2xl:w-1/3 2xl:pb-4 flex flex-col items-center justify-center text-center pb-8 md:pb-0 md:w-1/5">
                <p class="2xl:w-[35%] mb-3 w-[90%] md:text-lg">Lectura segura de fuentes confiables.</p>
                <atropos-component class=""
                    activeOffset="100"
                    ref="atroposElement">
                    <div class="atropos my-atropos bg-[#1C8C73]">
                        <div class="atropos-scale">
                            <div class="atropos-rotate">
                                <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                    <img src="../assets/icons/escudo.png" class="2xl:w-[8rem] w-[8rem] 2xl:pb-1 md:w-[4rem]" data-atropos-offset="4">
                                    <div data-atropos-offset="8" class="atropos-button-wrap">
                                        <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">PROTEGE</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </atropos-component>
            </div>

        <div class="2xl:w-1/3 2xl:pb-4 flex flex-col items-center justify-center text-center pb-8 md:pb-0 md:w-1/5">
                <p class="2xl:w-[35%] mb-3 w-[90%] md:text-lg">Descubre nuevos títulos cada mes.</p>
                <atropos-component class=""
                    activeOffset="100"
                    ref="atroposElement">
                    <div class="atropos my-atropos bg-[#E53544]">
                        <div class="atropos-scale">
                            <div class="atropos-rotate">
                                <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] 2xl:w-[15rem] 2xl:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                    <img src="../assets/icons/calendario.png" class="2xl:w-[7rem] w-[8rem] 2xl:pb-1 md:w-[4rem]" data-atropos-offset="4">
                                    <div data-atropos-offset="8" class="atropos-button-wrap">
                                        <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">ORGANIZA</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </atropos-component>
            </div>


        <div class="2xl:w-1/3 2xl:pb-4 flex flex-col items-center justify-center text-center pb-8 md:pb-0 md:w-1/5">
                <p class="2xl:w-[50%] mb-3 w-[90%] md:text-lg">Únete a una comunidad apasionada por la lectura.</p>
                <atropos-component class=""
                    activeOffset="100"
                    ref="atroposElement">
                    <div class="atropos my-atropos bg-[#1C8C73]">
                        <div class="atropos-scale">
                            <div class="atropos-rotate">
                                <div class="atropos-inner 2xl:w-[12rem] 2xl:h-[12rem] 2xl:w-[15rem] 2xl:h-[15rem] rounded-full flex flex-col p-5 items-center justify-center w-[12rem] h-[12rem] md:w-[8rem] md:h-[8rem]">
                                    <img src="../assets/icons/commitment.png" class="2xl:w-[7rem] w-[8rem] md:w-[4rem]" data-atropos-offset="4">
                                    <div data-atropos-offset="8" class="atropos-button-wrap">
                                        <RouterLink to="/" class="font-bold trackind-wide 2xl:text-xl text-[1rem] md:text-sm">COMUNICA</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </atropos-component>
            </div>

      </div>
    </div>

</template>

<script>
// import Atropos from 'atropos';

    export default {
        data(){
            return{

            }
        },
        mounted(){
            // this.myAtropos = Atropos({
            // el: '.my-atropos',
            // activeOffset: 100,
            // shadow: false,
            // shadowOffset: 0,
            // shadowScale: 0,
            // highlight: true,
            // rotateXMax: 30,
            // rotateYMax: 30,
            // rotateLock: true,
            // commonOrigin: true
            // });
            // console.log(this.myAtropos)
        },
    }
</script>

<style lang="sass" scoped>
    atropos-component
        border-radius: 100%
        overflow: hidden !important
        padding: 0
    .atropos, .my-atropos
        // padding: 1.5%
        border-radius: 100%
</style>