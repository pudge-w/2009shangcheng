import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    component: () => import("../views/Home.vue"),
    // redirect: "/index",
    children: [
      {
        path: "/",
        redirect: "/index"
      },
      {
        path: "/index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/classify",
        component: () => import("../views/Classify.vue")
      },
      {
        path: "/cart",
        component: () => import("../views/Cart.vue"),
        meta: { requireAuth: true }
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue"),
        meta: { requireAuth: true }
      }
    ]
  },
  {
    path: "/detail/:id",
    component: () => import("../views/Detail.vue"),
    props: true
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
