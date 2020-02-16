import Vue from "vue";
import Vuex from "vuex";
import order from "./order/index";
import assets from "./assets/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    order,
    assets
  }
});

export default store;
