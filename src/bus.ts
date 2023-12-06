
/* eslint-disable */
// declare module '*.vue' {
//     import type { DefineComponent } from 'vue'
//     const component: DefineComponent<{}, {}, any>
//     export default component
// }

import mitt from "mitt";

export const emitter = mitt();
export const useBus = () => ({ bus: emitter });
