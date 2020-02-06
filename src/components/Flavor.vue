<template>
  <div class="card">
    <div class="card-image">
      <img :src="flavor.imgUrl" class="img-responsive" />
    </div>
    <div class="card-header">
      <div class="card-title h5">{{ flavor.title }}</div>
      <div class="card-subtitle text-gray">
        R${{ flavor.price | toFloat }} - Preparo: {{ flavor.time }}min
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary flavor__btn">Adicionar ao pedido</button>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    toFloat(value) {
      return parseFloat(value).toFixed(2);
    }
  },
  props: {
    flavor: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
