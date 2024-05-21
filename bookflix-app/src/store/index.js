import { createStore } from 'vuex'
import { imagenes } from './cambio_imagenes.js'
import { titulos } from './lista_imagenes.js'
import { perfiles } from './users.js'
export default createStore({
  state: {
    responsive: false,
    perfilEditando: null,
    imagenes_perfiles: imagenes,
    lista_titulos: titulos,
    perfiles: perfiles,
    nuevoPerfil: null,
  },
  getters: {
  },
  mutations: {
    ESTADO_RESPONSIVE(state, valor){
      state.responsive = valor;
    },
    GUARDAR_PERFIL_EDITANDO(state, perfil){
      state.perfilEditando = perfil;
    },
    RESETEAR_EDICION(state){
      state.perfilEditando = null
    },
    INICIALIZAR_PERFIL(state, data){
      state.nuevoPerfil = data
    }
  },
  actions: {
    crearPerfil({ commit, state }){
      const indiceAleatorio = Math.floor(Math.random() * state.imagenes_perfiles.length);
      const imagenAleatoria = state.imagenes_perfiles[indiceAleatorio].imagen;
      commit('INICIALIZAR_PERFIL', {user: 'Nombre', imagen: imagenAleatoria})
    }
  },
  modules: {
  }
})