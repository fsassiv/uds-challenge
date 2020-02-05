<template>
  <footer class="footer">
    <h1 @click="goForward">Footer</h1>
  </footer>
</template>

<script>
export default {
  methods: {
    goForward() {
      this.$router.push("customizeorder");
    }
  }
};
</script>

<style></style>
