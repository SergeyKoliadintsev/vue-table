import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoodTablePlugin from "vue-good-table-next";

import App from "./App.vue";
import router from "./router";

import "vue-good-table/dist/vue-good-table.css";

import "./assets/main.scss";
import "./style.css";

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(createPinia());
app.use(router);
app.use(VueGoodTablePlugin);
app.mount("#app");
