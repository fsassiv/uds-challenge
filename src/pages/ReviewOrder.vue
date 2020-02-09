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
            <tr v-for="item in aditionals" :key="item.id">
              <td>{{ item.name | capitalize }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.time | formatToMin }}</td>
              <td>{{ item.price | formatToCurrency }}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4>Your total is {{ total | formatToCurrency }}</h4>
      </section>
    </div>
  </div>
</template>

<script>
import filtersMixins from "../mixins/filters";

export default {
  data() {
    return {
      flavor: {},
      size: {},
      aditionals: []
    };
  },
  created() {
    const { flavor, size, aditionals } = this.$store.getters["order/getOrder"];
    this.flavor = flavor;
    this.size = size;
    this.aditionals = aditionals;
  },
  computed: {
    total() {
      const subtotal = this.flavor.price + this.size.price;
      const aditionalsSubtotal = this.aditionals.reduce(
        (acc, cv) => acc + cv.price,
        0
      );

      return subtotal + aditionalsSubtotal;
    }
  },
  mixins: [filtersMixins]
};
</script>

<style></style>
