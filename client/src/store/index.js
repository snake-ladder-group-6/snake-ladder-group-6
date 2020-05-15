import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listPlayer: []
  },
  mutations: {
    SET_LIST_PLAYER (state, username) { state.listPlayer = username }
  }
})

export default store
