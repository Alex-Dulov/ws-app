import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Users from "../views/Users.vue";
import Chat from "../views/Chat.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";

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
