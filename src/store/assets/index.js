import mutationsTypes from "./mutations.type";
import actionsTypes from "./actions.type";

export default {
  namespaced: true,
  state: {
    aditionals: []
  },
  mutations: {
    [mutationsTypes.setAditionals](state, payload) {
      state.aditionals = { ...payload };
    }
  },
  actions: {
    [actionsTypes.setAditionalsAsync]({ commit }, payload) {
      commit("setAditionals", payload);
    }
  },
  getters: {
    getAditionals: state => state.aditionals
  }
};
