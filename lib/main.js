// plugins/i18n.js
import HelloWorld from "./components/HelloWorld.vue";
import HelloWo from "./components/HelloWo.vue";

export default {
  install: (app, options) => {
    app.component("HelloWorld", HelloWorld);
    app.component("HelloWo", HelloWo);
  },
};
