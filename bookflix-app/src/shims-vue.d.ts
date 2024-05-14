/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "@tsparticles/vue3";

declare module 'atropos' {
  // Exporta cualquier o define más específicamente si es necesario
  const Atropos: any;
  export default Atropos;
}

declare module 'atropos/element' {
  // Asume que AtroposComponent es un HTMLElement con propiedades adicionales
  interface AtroposComponent extends HTMLElement {
    // Define propiedades y métodos específicos aquí si son conocidos
    destroy(): void;
  }

  const AtroposComponent: {
    prototype: AtroposComponent;
    new(): AtroposComponent;
  };

  export default AtroposComponent;
}