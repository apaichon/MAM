import { default as Model } from '@/models/NewsCategoryModel'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: Model.NewsCategoryModel.newItem(),
    items: new Model.NewsCategoryList()
  },
  getters: {
    item: state => state.item,
    items: state => state.items
  },
  mutations: {
    ADD (state, item) {
      state.items.push(item)
    },
    NEW_ITEM (state) {
      Object.assign(state.item, Model.NewsCategoryModel.newItem())
    },
    NEW_ITEMS (state) {
      Object.assign(state.items, new Model.NewsCategoryList())
    },
    SET_ITEM (state, item) {
      let data = item
      if (data.createdDate) {
        data.createdDate = new Date(data.createdDate)
      }
      if (data.modifiedDate) {
        data.modifiedDate = new Date(data.modifiedDate)
      }
      state.item = new Model.NewsCategoryModel(data)
    },
    SET_ITEMS (state, items) {
      state.items = new Model.NewsCategoryList(items)
      console.log('state', state.items)
    }
  },
  actions: {
    add ({commit}, item) {
      commit('ADD', item)
    },
    newItem ({commit}) {
      commit('NEW_ITEM')
    },
    newItems ({commit}) {
      commit('NEW_ITEMS')
    },
    setItem ({commit}, item) {
      commit('SET_ITEM', item)
    },
    setItems ({commit}, items) {
      commit('SET_ITEMS', items)
    }
  }
})
