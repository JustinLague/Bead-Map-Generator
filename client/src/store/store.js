import Vue from "vue";
import Vuex from "vuex";
import sketcher from "./modules/sketcher";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    sketcher
  },
  strict: debug
});
