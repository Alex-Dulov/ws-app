import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Vuex from "vuex";

// const bootstrap = require();

// export default mitt();

const app = createApp(App).use(router);

const store = new Vuex.Store({state: {test: "",},
});

app.use(store);
app.config.globalProperties.$emitter = mitt();
// app.provide("bootstrap", bootstrap);
app.mount('#app');
