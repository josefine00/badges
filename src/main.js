import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import vuex from "vuex";
import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
