import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Server } from "miragejs";
import flavors from "./data/flavors";
import sizes from "./data/sizes";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "spectre.css/dist/spectre-icons.min.css";

new Server({
  routes() {
    this.timing = 1000;

    this.get("/api/flavors", () => {
      return flavors;
    });

    this.get("/api/sizes", () => {
      return sizes;
    });
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
