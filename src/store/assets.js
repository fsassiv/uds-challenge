export default {
  namespaced: true,
  state: {
    aditionals: []
  },
  mutations: {
    setAditionals({ aditionals }, payload) {
      Object.assign(aditionals, payload);
    }
  },
  actions: {
    setAditionalsAsync({ commit }, payload) {
      commit("setAditionals", payload);
    }
  },
  getters: {
    getAditionals: state => state.aditionals
  }
};
