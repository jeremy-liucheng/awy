import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/web/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "base",
    redirect: "/index.html",
  },
  {
    path: "/index.html",
    name: "Home",
    component: Home,
  },
  {
    path: "/index.html/my",
    name: "My",
    component: () => import(/* webpackChunkName: "my" */ "@/views/web/my/My.vue"),
  },
  {
    path: "/index.html/join",
    name: "Join",
    component: () => import(/* webpackChunkName: "join" */ "@/views/web/join/Join.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
