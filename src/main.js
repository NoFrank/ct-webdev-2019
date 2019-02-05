import Vue from "vue";
import "./plugins/vuetify";
import VueHighlightJS from "vue-highlightjs";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "highlight.js/styles/atom-one-dark.css";
import Breadcrumbs from "./components/Breadcrumbs";
import DynamicInput from "./components/dynamic-input";
import DynamicVuexText from "./components/dynamic-vuex-text";
import VeeValidate from "vee-validate";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);
Vue.use(VeeValidate);
Vue.use(Vuelidate);

Vue.component("Breadcrumbs", Breadcrumbs);
Vue.component("DynamicInput", DynamicInput);
Vue.component("DynamicVuexText", DynamicVuexText);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
