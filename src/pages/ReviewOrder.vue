<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Review</h4>
        <p>Make sure your order is just the way you like it!</p>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ flavor.name | capitalize }}</td>
              <td>{{ flavor.size ? flavor.size : "N/A" }}</td>
              <td>{{ flavor.time | formatToMin }}</td>
              <td>{{ flavor.price | formatToCurrency }}</td>
            </tr>
            <tr>
              <td>Cup size</td>
              <td>{{ size.size | formatToML }}</td>
              <td>{{ size.time | formatToMin }}</td>
              <td>{{ size.price | formatToCurrency }}</td>
            </tr>
            <!-- RENDER LIST OF ADITIONALS, IF THERE IS ANY -->
            <tr v-for="item in aditionals" :key="item.id">
              <td>{{ item.name | capitalize }}</td>
              <td>{{ item.size ? item.size : "N/A" }}</td>
              <td>{{ item.time | formatToMin }}</td>
              <td>{{ item.price | formatToCurrency }}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>Your total is {{ totalPrice | formatToCurrency }}</h4>
        <h5>and it will be ready in {{ totalTime | formatToMin }}</h5>
      </section>
    </div>
  </div>
</template>

<script>
import filtersMixins from "../mixins/filters";
import { mapGetters } from "vuex";
import orderGetters from "../store/order/getters.type";

export default {
  computed: {
    ...mapGetters("order", {
      flavor: orderGetters.getFlavor,
      size: orderGetters.getSize,
      aditionals: orderGetters.getAditionals
    }),
    totalPrice() {
      return this.getTotal("price");
    },
    totalTime() {
      return this.getTotal("time");
    }
  },
  methods: {
    getTotal(targetProp) {
      const subtotal = this.flavor[targetProp] + this.size[targetProp];

      const aditionalsSubtotal = this.aditionals.reduce(
        (acc, cv) => acc + cv[targetProp],
        0
      );

      return subtotal + aditionalsSubtotal;
    }
  },
  mixins: [filtersMixins]
};
</script>

<style></style>
