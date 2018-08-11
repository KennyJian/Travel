import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutation from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutation,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
