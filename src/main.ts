import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoodTablePlugin from "vue-good-table-next";
import { createI18n, useI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import { languages, defaultLocale } from "./i18n";

import "vue-good-table/dist/vue-good-table.css";

import "./assets/main.scss";
import "./style.css";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "en",
  locale: defaultLocale,
  messages,
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return t;
  },
});

app.use(VueGoodTablePlugin);
app.use(createPinia());
app.use(router);
app.use(VueGoodTablePlugin);
app.use(i18n);
app.mount("#app");
