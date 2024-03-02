import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../pages/about/index.vue";
import News from "../pages/news/index.vue";
import Users from "../pages/users/index.vue";
import Chat from "../pages/chat/index.vue";
import Profile from "../pages/profile/index.vue";
import Settings from "../pages/settings/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/users/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
