import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Intresse from "../views/intresse.vue";
import Bevis from "../views/bevis.vue";
import Deltagande from "../views/deltagande.vue";
import FormTable from "../views/form-table.vue";
import Patrol from "../views/patrol";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/intresse",
    name: "intresse",
    component: Intresse
  },
  {
    path: "/bevis",
    name: "bevis",
    component: Bevis
  },
  {
    path: "/deltagande",
    name: "deltagande",
    component: Deltagande
  },
  {
    path: "/patruller",
    name: "patruller",
    component: FormTable
  },
  {
    path: "/patruller/:patrols.name",
    name: "patrolName",
    component: Patrol
  }
];

const router = new VueRouter({
  routes
});

export default router;
