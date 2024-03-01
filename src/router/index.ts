import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../pages/about/About.vue";
import News from "../pages/news/News.vue";
import Users from "../pages/users/Users.vue";
import Chat from "../pages/chat/Chat.vue";
import Profile from "../pages/profile/Profile.vue";
import Settings from "../pages/settings/Settings.vue";

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
