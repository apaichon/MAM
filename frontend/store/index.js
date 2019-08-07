import Vuex from 'vuex'

const state = () => {
  return new Vuex.Store({
    state: {
      message: [
        {
           id: 1,
           name: "Shawna Dubbin",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 2,
           name: "Odette Demageard",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 3,
           name: "Vera Taleworth",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 4,
           name: "Lonnie Izkovitz",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 5,
           name: "Thatcher Stave",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 6,
           name: "Karim Chipping",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 7,
           name: "Helge Holyard",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 8,
           name: "Rod Titterton",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 9,
           name: "Gawen Applewhite",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         },
         {
           id: 10,
           name: "Nero Mulgrew",
           message: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
         }
     ]
    },
    mutations: {
      GET_MESSAGE(state, message) {
        state.message = message
      }
    },
    actions: {
      setMessage(context, message) {
        context.commit('GET_MESSAGE', message)
      }
    },
    getters: {
      loadMessage(state) {
        return state.message
      }
    }
  })
}

export default state
