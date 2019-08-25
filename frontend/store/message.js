import messageService from '../service/message'

export const state = () => ({
  message: null,
  searched: null,
  keyword: null
})

export const mutations = {
  GET_MESSAGE(state, message) {
    state.message = message
  },
  SEARCH_MESSAGE(state, data) {
    state.searched = data.message
    state.keyword = data.keyword
  }
}

export const actions = {
  async loadMessage({ commit }, id) {
    const res = await messageService.getMessage(id)
    commit('GET_MESSAGE', res)
  },
  async updateStatusMessage({ commit }, data) {
    const res = await messageService.updateStatus(data)
    if (this.state.message.keyword) {
      const search = searchName(res, this.state.message.keyword)
      commit('SEARCH_MESSAGE', {
        message: search,
        keyword: this.state.message.keyword
      })
      commit('GET_MESSAGE', res)
    } else {
      commit('GET_MESSAGE', res)
    }
  },
  async deleteMessage({ commit }, data) {
    const res = await messageService.deleteMessage(data)
    commit('GET_MESSAGE', res)
    commit('SEARCH_MESSAGE', {
      message: res,
      keyword: this.state.message.keyword
    })
    return
  },
  searchByName({ commit }, keyword) {
    const res = searchName([...this.state.message.message], keyword)
    commit('SEARCH_MESSAGE', {
      message: res,
      keyword
    })
  }
}

const searchName = (message, keyword) => {
  return message.filter(item => {
    return item.sender.toString().toLowerCase().includes(keyword.toString().toLowerCase())
  })
}
