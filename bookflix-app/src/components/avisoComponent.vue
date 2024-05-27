<template>
  <div class="home w-full min-h-screen lg:pt-8">
    <div>
      <h1 class="text-5xl font-bold text-center mb-14">AVISO LEGAL</h1>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-4">1. INFORMACIÓN GENERAL</h2>
        <p>
          En cumplimiento con el deber de información dispuesto en la Ley 34/2002
          de Servicios de la Sociedad de la Información y el Comercio Electrónico
          (LSSI-CE), se facilita la siguiente información general del sitio web:
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
        <h2 class="text-3xl font-semibold mb-4">2. CONDICIONES DE USO</h2>
        <p>
          El presente aviso legal establece las condiciones de uso del sitio web
          bookflix.com (en adelante, "el sitio web"). El acceso y uso del sitio
          web atribuyen al visitante la condición de usuario del sitio web e
          implican la aceptación plena y sin reservas de todas y cada una de las
          disposiciones incluidas en este aviso legal.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">3. PROPIEDAD INTELECTUAL</h2>
        <p>
          Todos los contenidos del sitio web, entendiendo por estos a título
          enunciativo los textos, fotografías, gráficos, imágenes, iconos,
          tecnología, software, enlaces y demás contenidos audiovisuales o
          sonoros, así como su diseño gráfico y códigos fuente, son propiedad
          intelectual del titular del sitio web, sin que puedan entenderse cedidos
          al usuario ninguno de los derechos de explotación sobre los mismos más
          allá de lo estrictamente necesario para el correcto uso del sitio web.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">4. RESPONSABILIDAD DEL USUARIO</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos y
          servicios que se ofrecen a través del sitio web y a no emplearlos para
          incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y
          al orden público.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
        <p>
          El titular del sitio web no se hace responsable, en ningún caso, de los
          daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a
          título enunciativo: errores u omisiones en los contenidos, falta de
          disponibilidad del sitio web o la transmisión de virus o programas
          maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas
          las medidas tecnológicas necesarias para evitarlo.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">6. MODIFICACIONES</h2>
        <p>
          El titular del sitio web se reserva el derecho de efectuar sin previo
          aviso las modificaciones que considere oportunas en su sitio web,
          pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que
          se presten a través del mismo como la forma en la que éstos aparezcan
          presentados o localizados en su sitio web.
        </p>
      </div>
      <div class="mb-6 w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold mb-2">7. ENLACES</h2>
        <p>
          En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos
          hacia otros sitios de Internet, el titular del sitio web no ejercerá
          ningún tipo de control sobre dichos sitios y contenidos. En ningún caso
          asumirá responsabilidades por los contenidos de algún enlace
          perteneciente a un sitio web ajeno.
        </p>
      </div>
      <div class="w-[90%] mx-auto">
        <h2 class="text-3xl font-semibold">8. DERECHO DE EXCLUSIÓN</h2>
        <p>
          El titular del sitio web se reserva el derecho a denegar o retirar el
          acceso a portal y/o los servicios ofrecidos sin necesidad de
          preaviso, a instancia propia o de un tercero, a aquellos usuarios que
          incumplan las presentes Condiciones Generales de Uso.
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
