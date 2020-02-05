<template>
  <div class="card">
    <div class="card-image">
      <img
        src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        class="img-responsive"
      />
    </div>
    <div class="card-header">
      <div class="card-title h5">Title</div>
      <div class="card-subtitle text-gray">R$10,00, Preparo: 5min</div>
    </div>
    <div class="card-body">
      ...
    </div>
    <div class="card-footer">
      <button class="btn btn-primary flavor__btn">Adicionar ao pedido</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: "",
    imgUrl: "",
    flavor: "",
    description: ""
  }
};
</script>

<style></style>
