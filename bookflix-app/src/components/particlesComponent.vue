<template>
  <div>
    <vue-particles
    id="particles1"
    :particlesLoaded="particlesLoaded"
    :options="particlesOptions1"
    />
    <vue-particles
        id="particles2"
        :particlesLoaded="particlesLoaded"
        :options="particlesOptions2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import particlesConfig from '../assets/backgrounds/particlesjs-config.json';
import particlesConfig2 from '../assets/backgrounds/particles-blue.json';

export default defineComponent({
    data() {
    return {
      particlesOptions1: particlesConfig,
      particlesOptions2: particlesConfig2,
      container: ''
    };
  },
  name: 'particlesComponent',

  methods: {
      async particlesLoaded(container: any) {
        this.container = container
        // console.log("Particles container loaded", container);
      }
    },
  mounted(){
    this.particlesLoaded("someContainer");
  }
});
</script>

<style scoped>
/* #particles1, #particles2 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 50%;
  height: 100vh;
} */
</style>
