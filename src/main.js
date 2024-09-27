import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const NbaTeams = defineAsyncComponent(() => import("./views/NbaTeamsView.vue"));
app.component("nba-teamsView", NbaTeams);
app.use(router);
app.use(createPinia());

app.mount("#app");
