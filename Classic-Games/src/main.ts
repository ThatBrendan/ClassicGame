import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//styles
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/styles.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
