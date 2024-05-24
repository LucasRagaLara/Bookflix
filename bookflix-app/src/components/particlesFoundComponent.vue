<template>
    <div>
      <vue-particles
      id="particles1"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions1"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import particlesConfig from '../assets/backgrounds/particlesjs-notfound.json';

  
  export default defineComponent({
      data() {
      return {
        particlesOptions1: particlesConfig,

        container: ''
      };
    },
    name: 'particlesComponentNotFound',
  
    methods: {
        async particlesLoaded(container: any) {
          this.container = container
        }
      },
    mounted(){
      this.particlesLoaded("someContainer");
    }
  });
  </script>
  
  <style scoped>
  </style>
  