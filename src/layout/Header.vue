<template>
  <header class="header">
    <div class="container">
      <h3 class="header__title">
        Super Açai <i class="show-sm icon icon-menu"></i>
      </h3>
      <ul class="step">
        <li class="step-item" :class="{ active: $route.meta.step === 1 }">
          <a href="#" class="tooltip" data-tooltip="Sabor e tamanho"
            >Sabor e tamanho</a
          >
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 2 }">
          <a href="#" class="tooltip" data-tooltip="Adicionais">Adicionais</a>
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 3 }">
          <a href="#" class="tooltip" data-tooltip="Revisão">Revisão</a>
        </li>
        <li class="step-item" :class="{ active: $route.meta.step === 4 }">
          <a href="#" class="tooltip" data-tooltip="Conclusão">Conclusão</a>
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
