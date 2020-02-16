import mutationsTypes from "./mutations.type";
import gettersTypes from "./getters.type";

const defaultValues = () => ({
  flavor: {
    id: null,
    imgUrl: "",
    name: null,
    price: 0,
    time: 0
  },
  size: {
    id: null,
    size: 0,
    price: 0,
    time: 0
  },
  aditionals: [],
  total: 0,
  time: 0
});

export default {
  namespaced: true,
  state: defaultValues(),
  mutations: {
    [mutationsTypes.addFlavor](state, payload) {
      state.flavor = { ...payload };
      // Vue.set(state, "flavor", payload);
    },
    [mutationsTypes.addSize](state, payload) {
      state.size = { ...payload };
    },
    [mutationsTypes.addAditional]({ aditionals }, payload) {
      //REMOVE ADITIONAL TO THE ORDER
      if ([...aditionals].length === 0) {
        aditionals.push(payload);
      } else {
        //CHECK IF THE ITEM ISNT ALREADY ADDED TO THE ORDER
        let filtered =
          aditionals.filter(item => item.id === payload.id).length === 0;
        if (filtered) {
          aditionals.push(payload);
        }
      }
    },
    [mutationsTypes.removeAditional]({ aditionals }, payload) {
      //REMOVE ADITIONAL FROM THE ORDER
      for (var i = 0; i < aditionals.length; i++) {
        if (aditionals[i].id === payload.id) {
          aditionals.splice(i, 1);
        }
      }
    },
    [mutationsTypes.resetOrder](state) {
      //SET THE DEFAULT VALUES BACK
      Object.assign(state, defaultValues());
    }
  },
  actions: {},
  getters: {
    [gettersTypes.getFlavor]: state => state.flavor,
    [gettersTypes.getSize]: state => state.size,
    [gettersTypes.getAditionals]: state => state.aditionals,
    [gettersTypes.getOrder]: ({ flavor, size, aditionals }) => ({
      flavor,
      size,
      aditionals
    })
  }
};
