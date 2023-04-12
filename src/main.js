import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HelloWo from "../lib/main";
import HelloWorld from "../lib/main";

createApp(App).use(HelloWo).use(HelloWorld).mount("#app");
