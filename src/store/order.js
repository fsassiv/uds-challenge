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
  state: defaultValues(),
  mutations: {
    addFlavor(state, payload) {
      Object.assign(state.flavor, payload);
    },
    addSize(state, payload) {
      Object.assign(state.size, payload);
    },
    addAditional({ aditionals }, payload) {
      aditionals.push(payload);
    },
    removeAditional({ aditionals }, payload) {
      for (var i = 0; i < aditionals.length; i++) {
        if (aditionals[i].id === payload.id) {
          aditionals.splice(i, 1);
        }
      }
    },
    resetOrder(state) {
      Object.assign(state, defaultValues());
    }
  },
  actions: {},
  getters: {
    getFlavor: state => state.flavor,
    getSize: state => state.size,
    getAditionals: state => state.aditionals,
    getOrder: ({ flavor, size, aditionals }) => ({
      flavor,
      size,
      aditionals
    })
  }
};
