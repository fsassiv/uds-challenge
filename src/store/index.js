import Vue from "vue";
import Vuex from "vuex";
import order from "./order";
import assets from "./assets";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    order,
    assets
  }
});

export default store;
