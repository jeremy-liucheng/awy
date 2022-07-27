import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MobileHome from "@/views/mobile/home/MobileHome.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/mobile.html",
    name: "mobile",
    component: MobileHome,
  },
  {
    path: "/mobile.html/job",
    name: "job",
    component: () => import("@/views/mobile/job/JobInfo.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
