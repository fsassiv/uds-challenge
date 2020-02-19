<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Pick your flavor</h4>
        <div v-if="loading" class="loading loading-lg"></div>
        <div v-else class="columns">
          <div
            class="column col-xs-12 col-4"
            v-for="item in flavors"
            :key="item.id"
          >
            <Flavor :item="item" />
          </div>
        </div>
      </section>
      <section class="page__section">
        <h4 class="page__title">Pick your cup size</h4>
        <div v-if="loading" class="loading loading-lg"></div>
        <div v-else class="columns">
          <div
            class="column col-xs-12 col-4"
            v-for="size in sizes"
            :key="size.id"
          >
            <button @click="addSize(size)" class="btn btn-primary flavor__btn">
              {{ size.size | formatToML }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Flavor from "../components/Flavor";
import axios from "axios";
import { mapMutations } from "vuex";
import orderMutations from "../store/order/mutations.type";
import filter from "../mixins/filters";

export default {
  data() {
    return {
      flavors: [],
      sizes: [],
      loading: true
    };
  },
  created() {
    const requestFlavors = axios.get("/api/flavors");
    const requestSizes = axios.get("/api/sizes");

    axios
      .all([requestFlavors, requestSizes])
      .then(
        axios.spread((...responses) => {
          this.flavors = [...responses[0].data];
          this.sizes = [...responses[1].data];
          this.loading = false;
        })
      )
      .catch(console.error);
  },
  mixins: [filter],
  methods: {
    ...mapMutations("order", {
      addSize: orderMutations.addSize
    })
  },
  components: {
    Flavor
  }
};
</script>

<style></style>
