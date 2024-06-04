import 'vuetify/styles';
import App from "./App.vue";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from 'pinia';

// Create vue app
const app = createApp(App);
const store = createPinia()

app.use(vuetify)
app.use(store)

// Mount vue app
app.mount("#app");

