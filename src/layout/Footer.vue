<template>
  <footer class="footer">
    <button
      v-if="this.$route.meta.step <= 2"
      @click="goForward"
      class="btn btn-primary footer__btn"
    >
      Próximo
    </button>
    <button
      v-else-if="this.$route.meta.step == 3"
      @click="goFinish"
      class="btn btn-primary footer__btn"
    >
      Confirmar
    </button>
    <button v-else @click="goRestart" class="btn btn-primary footer__btn">
      Novo pedido
    </button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        "1": "neworder",
        "2": "customizeorder",
        "3": "revieworder",
        "4": "conclusion"
      }
    };
  },
  methods: {
    goForward() {
      this.$router.push(this.navigation[this.$route.meta.step + 1]);
    },
    goFinish() {
      this.$router.push("conclusion");
    },
    goRestart() {
      this.$router.push("neworder");
    }
  }
};
</script>

<style></style>
