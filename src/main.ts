import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import mitt from "mitt";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Vuex from "vuex";
import { emitter } from "./bus";

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        emitter: typeof emitter;
    }
}

const app = createApp(App).use(router);

const store = new Vuex.Store({state: {test: "",},
});

app.use(store);
// app.config.globalProperties.$emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.mount('#app');

