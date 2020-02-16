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
import { mapActions } from "vuex";
import assetsActions from "./store/assets/actions.type";

export default {
  name: "app",
  created() {
    //redirecionar para pagina inicial
    if (this.$route.name !== "home") {
      window.location.replace(window.location.origin);
    }

    //fetch aditionals list
    axios
      .get("/api/adicionals")
      .then(response => {
        this.setAditionals(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    ...mapActions("assets", {
      setAditionals: assetsActions.setAditionalsAsync
    })
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
