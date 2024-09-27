import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import NbaTeamsView from "../views/NbaTeamsView.vue";
import UfcView from "../views/UfcView.vue";
import DartsView from "../views/DartsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/teams",
      component: NbaTeamsView,
    },
    {
      path: "/ufc",
      component: UfcView,
    },
    {
      path: "/darts",
      component: DartsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
