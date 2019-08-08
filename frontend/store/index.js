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
      loadMessage({ commit }, uid) {
        return new Promise((resolve, reject) => {
          messageService.getMessage(uid).then(result => {
            commit('GET_MESSAGE', result)
            resolve(this.state.message)
          }).catch(e => {
            reject(e)
          })
        })
      }
    }
  })
}

export default state
