<template>
  <div class="page">
    <div class="container">
      <section class="page__section">
        <h4 class="page__title">Selecione o sabor</h4>
        <div class="columns">
          <div class="column col-xs-12 col-4">
            <Flavor />
          </div>
          <div class="column col-xs-12 col-4">
            <Flavor />
          </div>
          <div class="column col-xs-12 col-4">
            <Flavor />
          </div>
        </div>
      </section>
      <section class="page__section">
        <h4 class="page__title">Selecione o tamalho</h4>

        <div class="columns">
          <div class="column col-xs-12 col-4">
            <button class="btn btn-primary flavor__btn">
              300ml
            </button>
          </div>
          <div class="column col-xs-12 col-4">
            <button class="btn btn-primary flavor__btn">
              500ml
            </button>
          </div>
          <div class="column col-xs-12 col-4">
            <button class="btn btn-primary flavor__btn">
              700ml
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Flavor from "../components/Flavor";

export default {
  components: {
    Flavor
  }
};
</script>

<style></style>
