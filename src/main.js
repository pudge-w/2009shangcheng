import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "amfe-flexible";
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  Card,
  List,
  Sidebar,
  SidebarItem,
  Cell,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  Field,
  Button
} from "vant";

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);
Vue.use(List);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Cell);
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Sku);
Vue.use(Field);
Vue.use(Button);

// import Vant from "vant";
// import "vant/lib/index.css";

// Vue.use(Vant);

import "./assets/css/style.stylus";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
