<template>
  <footer class="footer">
    <button
      v-show="showBackBtn"
      class="btn btn-secondary footer__btn"
      @click="$router.go(-1)"
    >
      <i class="icon icon-arrow-left"></i>Go back
    </button>
    <button
      v-if="this.$route.meta.step <= 2"
      @click="goForward"
      class="btn btn-primary footer__btn"
      :disabled="!nextStep"
    >
      Next
    </button>
    <button
      v-else-if="this.$route.meta.step == 3"
      @click="goFinish"
      class="btn btn-primary footer__btn"
    >
      Confirm
    </button>
    <button v-else @click="goRestart" class="btn btn-primary footer__btn">
      Make a new order
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
      },
      showBackBtn: false
    };
  },
  computed: {
    order() {
      return this.$store.getters["order/getOrder"];
    },
    nextStep() {
      const { flavor, size } = this.$store.getters["order/getOrder"];
      return flavor.price !== 0 && size.price !== 0;
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === "home" || to.name === "conclusion") {
        this.showBackBtn = false;
        return;
      }
      this.showBackBtn = true;
    }
  },
  methods: {
    goForward() {
      //GO TO THE NEXT ROUTE
      this.$router.push(this.navigation[this.$route.meta.step + 1]);
    },
    goFinish() {
      //GO TO THE LAST ROUTE
      this.$router.push("conclusion");
    },
    goRestart() {
      //RESTART THE APP
      //RESET THE ORDER AND RETURN TO THE HOME ROUTE
      this.currentRoute = this.$route.name;
      this.$store.commit("order/resetOrder");
      this.$router.push("neworder");
    }
  }
};
</script>

<style></style>
