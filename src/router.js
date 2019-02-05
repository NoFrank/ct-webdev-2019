import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vmodel",
      name: "vmodel",
      component: () =>
        import(/* webpackChunkName: "vmodel" */ "./views/VModel.vue")
    },
    {
      path: "/veevalidate",
      name: "veevalidate",
      component: () =>
        import(/* webpackChunkName: "veevalidate" */ "./views/VeeValidate.vue")
    },
    {
      path: "/vuelidate",
      name: "vuelidate",
      component: () =>
        import(/* webpackChunkName: "vuelidate" */ "./views/Vuelidate.vue")
    },
    {
      path: "/customcontrol",
      name: "customcontrol",
      component: () =>
        import(/* webpackChunkName: "customcontrol" */ "./views/CustomControl.vue")
    },
    {
      path: "/inplace",
      name: "inplace",
      component: () =>
        import(/* webpackChunkName: "inplace" */ "./views/InPlaceEdit.vue")
    },
    {
      path: "/maskedinput",
      name: "maskedinput",
      component: () =>
        import(/* webpackChunkName: "maskedinput" */ "./views/MaskedInput.vue")
    },
    {
      path: "/multipageval",
      name: "multipageval",
      component: () =>
        import(/* webpackChunkName: "multipageval" */ "./views/MultiPageVal.vue")
    },
    {
      path: "/multipagevalvuexmod",
      name: "multipagevalvuexmod",
      component: () =>
        import(/* webpackChunkName: "multipagevalvuexmod" */ "./views/MultiPageValVuexMod.vue")
    },
    {
      path: "/readedit",
      name: "readedit",
      component: () =>
        import(/* webpackChunkName: "readedit" */ "./views/ReadEdit.vue")
    },
    {
      path: "/vuex",
      name: "vuex",
      component: () => import(/* webpackChunkName: "vuex" */ "./views/Vuex.vue")
    },
    {
      path: "/dynamic",
      name: "dynamic",
      component: () =>
        import(/* webpackChunkName: "dynamic" */ "./views/DynamicForms.vue")
    },
    {
      path: "/usability",
      name: "usability",
      component: () =>
        import(/* webpackChunkName: "usability" */ "./views/UsabilityUx.vue")
    }
  ]
});
