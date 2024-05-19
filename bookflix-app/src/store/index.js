import { createStore } from 'vuex'

export default createStore({
  state: {
    responsive: false
  },
  getters: {
  },
  mutations: {
    ESTADO_RESPONSIVE(state, valor){
      state.responsive = valor;
    }
  },
  actions: {

  },
  modules: {
  }
})