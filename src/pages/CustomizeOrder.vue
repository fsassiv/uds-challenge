<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Customize your order</h4>
        <div class="columns">
          <div
            class="column col-xs-12 col-4"
            v-for="item in aditionals"
            :key="item.id"
          >
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
      aditionals: []
    };
  },
  created() {
    this.aditionals = this.$store.getters["assets/getAditionals"];
  },
  components: {
    Adictional
  }
};
</script>

<style></style>
