<template>
  <div class="page">
    <div class="container">
      <h1 class="page__title text-center">Congratulations</h1>
      <h5 class="page__subtitle text-center">
        Your order is on it's way. Wait just a moment...
      </h5>
      <div class="columns">
        <div class="column col-6 col-md-10 col-mx-auto">
          <Success />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Success from "../assets/undraw_High_five_u364.svg";

export default {
  components: {
    Success
  }
};
</script>

<style></style>
