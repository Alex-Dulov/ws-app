import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from 'mitt'

const Mit = mitt();
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit,
    }
}

const app = createApp(App).use(router);

app.config.globalProperties.$Bus = Mit;

app.mount('#app');

import "bootstrap/dist/js/bootstrap.bundle.js";
