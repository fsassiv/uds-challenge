<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Selecione o sabor</h4>
        <div v-if="loading" class="loading loading-lg"></div>
        <div v-else class="columns">
          <div class="column col-xs-12 col-4" v-for="item in flavors" :key="item.id">
            <Flavor :item="item" />
          </div>
        </div>
      </section>
      <section class="page__section">
        <h4 class="page__title">Selecione o tamalho</h4>
        <div v-if="loading" class="loading loading-lg"></div>
        <div v-else class="columns">
          <div class="column col-xs-12 col-4" v-for="size in sizes" :key="size.id">
            <button @click="addSize(size)" class="btn btn-primary flavor__btn">{{ size.size }}</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Flavor from "../components/Flavor";
import axios from "axios";

export default {
  data() {
    return {
      flavors: [],
      sizes: [],
      loading: true
    };
  },
  created() {
    //GET FLAVORS
    axios
      .get("/api/flavors")
      .then(response => {
        this.flavors = [...response.data];
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
      });
    //GET SIZES
    axios
      .get("/api/sizes")
      .then(response => {
        this.sizes = [...response.data];
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    addSize(event) {
      this.$store.commit("addSize", { ...event });
    }
  },
  components: {
    Flavor
  }
};
</script>

<style></style>
