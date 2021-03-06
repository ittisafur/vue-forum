import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/PageHome";
import ThreadShow from "../pages/PageThreadShow";
import NotFound from "../pages/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
