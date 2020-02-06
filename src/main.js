import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "spectre.css/dist/spectre-icons.min.css";
import { makeServer } from "./mockServer";

makeServer();

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
