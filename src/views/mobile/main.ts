import { createApp } from "vue";
import App from "@/views/mobile/App.vue";
import router from "@/router/mobile";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ISMOBILE } from "@/utils/fn";

const icon = ["Search", "CaretBottom", "CaretTop", "Check"];
if (!ISMOBILE()) {
  location.href = "/index.html";
} else {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    if (icon.includes(key)) {
      app.component(key, component);
    }
  }
  app.use(<any>router).mount("#app");
}
