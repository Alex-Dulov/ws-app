import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Vuex from "vuex";
import mitt from "mitt";

export const emitter = mitt();
const app = createApp(App).use(router);
const store = new Vuex.Store({state: {test: "",},});

app.use(store).mount("#app");
