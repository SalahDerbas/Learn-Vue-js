import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import About from "@/views/AboutPage.vue";
const routes = [
  {
    name: "my_main",
    path: "/",
    component: MyMain,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
