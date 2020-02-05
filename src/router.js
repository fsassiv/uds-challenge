import Vue from "vue";
import Router from "vue-router";
import NewOrder from "./pages/NewOrder.vue";

//LazyLoad routes
const CustomizeOrder = resolve => {
  require.ensure(
    ["./pages/CustomizeOrder.vue"],
    () => {
      resolve(require("./pages/CustomizeOrder.vue"));
    },
    "customizeorder"
  );
};

const ReviewOrder = resolve => {
  require.ensure(
    ["./pages/ReviewOrder.vue"],
    () => {
      resolve(require("./pages/ReviewOrder.vue"));
    },
    "revieworder"
  );
};

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/neworder",
      name: "home",
      alias: "/",
      component: NewOrder
    },
    {
      path: "/customizeorder",
      name: "customization",
      component: CustomizeOrder
    },
    {
      path: "/revieworder",
      name: "revieworder",
      component: ReviewOrder
    }
  ]
});

export default router;
