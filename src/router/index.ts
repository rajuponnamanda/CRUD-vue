import { createRouter, createWebHistory } from "vue-router";
import AddVue from "../components/Add.vue";
import Listvue from "../components/list.vue";
import editVue from "../components/Edit.vue";
import viewVue from "../components/View.vue";
import NotPound from "../views/NotPoundPage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Listvue,
    },
    {
      path: "/add",
      component: AddVue,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: editVue,
    },
    {
      path: "/view/:id",
      name: "view",
      component: viewVue,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotPound,
    },
  ],
});
export default router;
