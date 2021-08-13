import { createStore } from "vuex";

export default createStore({
  state: {
    user_data: {
      username: '',
      isUserAuth: ''
    },
    messages: [],
    countOnline: 0
  },
  mutations: {
    changeUserData(state, new_data) {
      state.user_data = new_data
    },
    changeMessages(state, newMessages) {
      state.messages = newMessages
    }
  },
  actions: {
    changeUserData ({commit}, new_data) {
      localStorage.setItem('userData', JSON.stringify(new_data))
      commit('changeUserData', new_data)
    },
    changeMessages ({commit}, newMessages) {
      commit('changeMessages', newMessages)
    }
  },
});
