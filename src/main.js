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

//PWA SETTINGS
const prod = process.env.NODE_ENV === "production";
//Production SW
const prodSW = prod;
//Development SW
const devSW = !prod;
//Test support for SW
if ("serviceWorker" in navigator) {
  //Production SW
  if (prodSW) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker Registered!");
      })
      .catch(err => {
        console.error(err);
      });
    //Development SW
  } else if (devSW) {
    navigator.serviceWorker
      .register("/service-worker-dev.js")
      .then(() => {
        console.log("Dev Service Worker Registered!");
      })
      .catch(err => {
        console.log("Dev SW error:");
        console.error(err);
      });
  }
} else {
  console.log("Service worker not supported!");
}
