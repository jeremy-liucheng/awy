import { createApp } from "vue";
import App from "@/views/web/App.vue";
import router from "@/router/web";

import { ISMOBILE } from "@/utils/fn";
if (ISMOBILE()) {
  location.href = "/mobile.html";
} else {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const app = createApp(App);
  app.use(<any>router).mount("#app");
}
