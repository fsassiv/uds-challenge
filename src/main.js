import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "spectre.css/dist/spectre-icons.min.css";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
