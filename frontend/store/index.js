import Vuex from 'vuex'
import messageService from '../service/message'
const state = () => {
  return new Vuex.Store({
    getters: {
      getMessage(state) {
        return state.message
      }
    },
    state: {
      message: null
    },
    mutations: {
      GET_MESSAGE(state, message) {
        state.message = message
      }
    },
    actions: {
      async loadMessage({ commit }, id) {
        const res = await messageService.getMessage(id)
        commit('GET_MESSAGE', res)
      },
      async updateStatusMessage({ commit }, data) {
        const res = await messageService.updateStatus(data)
        commit('GET_MESSAGE', res)
      },
      async deleteMessage({ commit }, data) {
        const res = await messageService.deleteMessage(data)
        commit('GET_MESSAGE', res)
        return
      }
    }
  })
}

export default state
