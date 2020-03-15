import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import login from "../views/login.vue";
import home from "../views/home.vue";
import data from "../views/data.vue";
import bar from "../views/bar.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/data",
    name: "data",
    component: data
  },
  {
    path: "/bar",
    name: "bar",
    component: bar
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
