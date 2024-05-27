<template>
  <div class="home w-full min-h-screen lg:pt-8">
    <div>
      <h1 class="text-5xl font-bold text-center mb-14">POLÍTICA DE COOKIES</h1>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-4">1. INFORMACIÓN GENERAL</h2>
        <p>
          En cumplimiento con el deber de información dispuesto en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se facilita la siguiente información sobre el uso de cookies en el sitio web:
        </p>
        <p class="mt-2">
          Titular: BOOKFLIX <br />
          CIF: X12345678 <br />
          Dirección: Calle Falsa, 123, Ciudad, País <br />
          Correo electrónico: contacto@bookflix.com <br />
          Teléfono: 123-456-789
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-4">2. ¿QUÉ SON LAS COOKIES?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Su función principal es recordar tu actividad y preferencias para mejorar tu experiencia de navegación.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">3. TIPOS DE COOKIES</h2>
        <p>
          Según su duración y quién las gestione, las cookies pueden ser:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-1">Cookies de sesión: se eliminan cuando cierras tu navegador.</li>
          <li class="mb-1">Cookies persistentes: se almacenan en tu dispositivo durante un período de tiempo determinado.</li>
          <li class="mb-1">Cookies propias: gestionadas por el propio sitio web que visitas.</li>
          <li class="mb-1">Cookies de terceros: gestionadas por terceros para proporcionar servicios adicionales al sitio web.</li>
        </ul>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">4. CONSENTIMIENTO</h2>
        <p>
          Al navegar por nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política. Sin embargo, tienes la opción de rechazarlas o desactivarlas en la configuración de tu navegador.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">5. DESACTIVACIÓN DE COOKIES</h2>
        <p>
          Puedes desactivar las cookies en la configuración de tu navegador. Sin embargo, esto puede afectar la funcionalidad de ciertas partes del sitio web.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">6. CAMBIOS EN LA POLÍTICA</h2>
        <p>
          Nos reservamos el derecho de actualizar o modificar esta política de cookies en cualquier momento. Te recomendamos que revises esta página periódicamente para estar al tanto de cualquier cambio.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">7. CONTACTO</h2>
        <p>
          Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de los datos de contacto proporcionados anteriormente.
        </p>
      </div>
      <div class="w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold">8. DERECHO DE EXCLUSIÓN</h2>
        <p>
          Nos reservamos el derecho de denegar o retirar el acceso al sitio web y/o los servicios ofrecidos sin necesidad de preaviso a aquellos usuarios que incumplan esta política.
        </p>
      </div>
      <div class="w-[90%] flex items-center justify-center pb-12 mt-12">
        <router-link to="/contacto" class="bg-[#C12C38] px-6 py-4 xl:mt-6 xl:mb-0 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 font-bold">VOLVER</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>
.home {
    background: #212139;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
</style>
