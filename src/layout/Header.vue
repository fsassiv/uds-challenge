<template>
  <header class="header">
    <div class="container">
      <h3 class="header__title">
        Super Açai
        <!-- <i class="show-sm icon icon-menu"></i> -->
      </h3>
      <ul class="step">
        <li class="step-item" :class="{ active: $route.meta.step === 1 }">
          <a href="#" class="tooltip" data-tooltip="Flavor and size"
            >Flavor and size</a
          >
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 2 }">
          <a href="#" class="tooltip" data-tooltip="Aditionals">Aditionals</a>
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 3 }">
          <a href="#" class="tooltip" data-tooltip="Check your order"
            >Check your order</a
          >
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 4 }">
          <a href="#" class="tooltip" data-tooltip="Success">Success</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  watch: {
    // $route(to, from) {
    //   // react to route changes...
    //   console.log(to);
    // }
  },

  mounted() {
    // console.log(this.$route);
  }
};
</script>

<style></style>
