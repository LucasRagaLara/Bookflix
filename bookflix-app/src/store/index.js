import { createStore } from 'vuex'
import { titulos } from './lista_imagenes.js'
export default createStore({
  state: {
    responsive: false,
    perfilEditando: {},
    imagenes_perfiles: [],
    lista_titulos: titulos,
    perfiles: [],
    nuevoPerfil: false,
  },
  getters: {
  },
  mutations: {
    ESTADO_RESPONSIVE(state, valor){
      state.responsive = valor;
    },
    GUARDAR_PERFIL_EDITANDO(state, perfil){
      state.perfilEditando = perfil
      localStorage.setItem('perfilEditando', JSON.stringify(perfil));
    },
    RESETEAR_EDICION(state){
      state.perfilEditando = false;
      localStorage.setItem('perfilEditando', JSON.stringify(state.perfilEditando));
    },
    RESETEAR_NOMBRE_PERFIL() {
      localStorage.removeItem('nombrePerfilEditando');
  },
    RESETEAR_NUEVO_PERFIL(state){
      state.nuevoPerfil = false
      localStorage.setItem('nuevoPerfil', JSON.stringify(state.nuevoPerfil));
    },
    INICIALIZAR_PERFIL(state, data){
      state.nuevoPerfil = data
      localStorage.setItem('nuevoPerfil', JSON.stringify(state.nuevoPerfil));
    },
    SET_PERFILES(state, perfiles){
      state.perfiles = [];
      state.perfiles.push(...Object.values(perfiles));
      localStorage.setItem('lista_perfiles', JSON.stringify(perfiles));
    },
    SET_IMAGENES_PERFILES(state, imagenes_perfiles){
      state.imagenes_perfiles = imagenes_perfiles
      localStorage.setItem('imagenes', JSON.stringify(imagenes_perfiles));
    },
    ACTUALIZAR_IMAGEN_PERFIL(state, { perfilId, nuevaImagen }) {
      const perfil = state.perfiles.find(perfil => perfil.id === perfilId);
      if (perfil) {
        perfil.imagen = nuevaImagen;
        localStorage.setItem('perfiles', JSON.stringify(state.perfiles));
      }
    },  
  },
  actions: {
    crearPerfil({ commit, state }){
      const indiceAleatorio = Math.floor(Math.random() * state.imagenes_perfiles.length);
      const imagenAleatoria = state.imagenes_perfiles[indiceAleatorio].imagen;
      commit('INICIALIZAR_PERFIL', {nombre: '', imagen: imagenAleatoria})
    },

    actualizarPerfiles({ commit }, { perfiles, imagenes_perfiles }) {
      commit('SET_PERFILES', perfiles);
      commit('SET_IMAGENES_PERFILES', imagenes_perfiles);
    },  

  },
  modules: {
  }
})