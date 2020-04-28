import Vue from "vue";
import Router from "vue-router";
import Sketcher from "@/components/Sketcher/Sketcher";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Sketcher",
      component: Sketcher
    }
  ]
});
