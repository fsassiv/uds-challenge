// src/server.js
import { Server, Model } from "miragejs";
import flavors from "./data/flavors";
import sizes from "./data/sizes";
import adicionals from "./data/aditionals";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    routes() {
      this.timing = 1000;

      this.get("/api/flavors", () => {
        return flavors;
      });

      this.get("/api/sizes", () => {
        return sizes;
      });

      this.get("/api/adicionals", () => {
        return adicionals;
      });
    }
  });

  return server;
}
