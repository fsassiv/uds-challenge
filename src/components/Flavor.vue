<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.imgUrl" class="img-responsive" />
    </div>
    <div class="card-header">
      <div class="card-title h5">{{ item.name | capitalize }}</div>
      <div class="card-subtitle text-gray">
        {{ item.price | toFloat | formatToCurrency }} - Ready in:
        {{ item.time | formatToMin }}
      </div>
    </div>
    <div class="card-footer">
      <button @click="addToOrder" class="btn btn-primary flavor__btn">
        Add to order
      </button>
    </div>
  </div>
</template>

<script>
import filtersMixins from "../mixins/filters";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mixins: [filtersMixins],
  methods: {
    addToOrder() {
      this.$store.commit("order/addFlavor", this.item);
    }
  }
};
</script>

<style></style>
