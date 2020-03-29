import Vue from 'vue';
import Notifications from 'vue-notification';
import App from './App.vue';

import router from './router';
import store from './store';
import interceptorsSetup from './config/interceptors';

Vue.use(Notifications);

interceptorsSetup();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
