import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta:{layout:'main'}
  },
  {
    path: "/chat",
    name: "Chat",
    component: () =>
      import("../views/Chat.vue"),
    meta:{layout:'main'}
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import("../components/test"),
    meta: {layout: 'main'}
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
