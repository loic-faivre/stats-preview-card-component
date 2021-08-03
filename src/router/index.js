import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // Catch all wrong routes to 404 must be the last route in this file
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
