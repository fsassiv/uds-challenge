<template>
  <div id="app">
    <div class="columns col-gapless">
      <div class="column hide-sm col-3">
        <SideMenu />
      </div>
      <div class="column col-sm-12 col-9">
        <Content>
          <template v-slot:header>
            <Header />
          </template>
          <transition name="slide">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>

          <template v-slot:footer>
            <Footer />
          </template>
        </Content>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Content from "./layout/Content.vue";
import SideMenu from "./layout/SideMenu.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    //redirecionar para pagina inicial
    if (this.$route.name !== "home") {
      this.$router.push("/");
    }

    //fetch aditionals list
    axios
      .get("/api/adicionals")
      .then(response => {
        this.$store.dispatch("assets/setAditionalsAsync", response.data);
        this.aditionals = response.data;
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    Header,
    Footer,
    Content,
    SideMenu
  }
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
