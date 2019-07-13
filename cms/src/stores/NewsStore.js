import NewsModel from '@/models/NewsModel'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    item: NewsModel,
    items: [NewsModel]
  },
  getters: {
    item: state => state.item,
    items: state => state.items
  },
  mutations: {
    ADD (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    add ({commit}, item) {
      commit('ADD', item)
    }
  }
})
