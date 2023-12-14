import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Vuex from "vuex";
import mitt, { Emitter } from "mitt";


const app = createApp(App).use(router);
const store = new Vuex.Store({state: {test: "",},});


// const emitter: Emitter<Events> = mitt<Events>();

app.use(store);
// app.config.globalProperties.emitter = mitt;
app.mount("#app");

// app.use(store)
// .provide('emitter', emitter)
// .mount('#app');
