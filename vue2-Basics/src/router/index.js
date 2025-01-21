import Vue from "vue";
import VueRouter from "vue-router";
import VuexDemo from "../views/VuexDemo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/vue-instance",
    name: "vue-instance",
    component: () => import("../views/VueInstanceView.vue"),
  },
  {
    path: "/directives",
    name: "directives",
    component: () => import("../views/DirectivesView.vue"),
  },
  {
    path: "/computed",
    name: "computed",
    component: () => import("../views/ComputedView.vue"),
  },
  {
    path: "/component-basics",
    name: "component-basics",
    component: () => import("../views/ComponentBasicsView.vue"),
  },
  {
    path: "/slots",
    name: "slots",
    component: () => import("../views/SlotView.vue"),
  },
  {
    path: "/router",
    name: "router",
    component: () => import("../views/RouterView.vue"),
  },
  {
    path: "/router-page1",
    name: "routerPage1",
    component: () => import("../views/router/RouterPage1.vue"),
  },
  {
    path: "/router-page2",
    name: "routerPage2",
    component: () => import("../views/router/RouterPage2.vue"),
  },
  {
    path: "/element-ui",
    name: "elementUI",
    component: () => import("../views/ElementUIView.vue"),
  },
  {
    path: "/vuex-demo",
    name: "VuexDemo",
    component: VuexDemo,
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
