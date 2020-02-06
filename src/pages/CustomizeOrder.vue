<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Personalize seu pedido</h4>
        <div v-if="loading" class="loading loading-lg"></div>
        <div v-else class="columns">
          <div class="column col-xs-12 col-4" v-for="item in aditionals" :key="item.id">
            <Adictional :item="item" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Adictional from "../components/Aditional";

export default {
  data() {
    return {
      aditionals: [],
      loading: true
    };
  },
  created() {
    axios
      .get("/api/adicionals")
      .then(response => {
        this.aditionals = response.data;
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    Adictional
  }
};
</script>

<style></style>
