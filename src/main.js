import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-input", BaseInput);

app.mount("#app");
