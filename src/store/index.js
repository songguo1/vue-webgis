import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultMapview:'',
  },
  getters: {
    getDefaultMapView:state=> state.defaultMapview,
    
  },
  mutations: {
    setDefaultMapView(state,value){
      state.defaultMapview=value
    }
  },
  actions: {
  },
  modules: {
  }
})
