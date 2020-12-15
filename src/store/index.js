import Vue from "vue";
import Vuex from "vuex";

import home from "./home";
import classify from "./classify";
import detail from "./detail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    classify,
    detail
  }
});
