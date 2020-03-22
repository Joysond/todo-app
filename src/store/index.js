import Vue from 'vue';
import Vuex from 'vuex';

import todoModule from './modules/todo';
import loginModule from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoStore: todoModule,
    loginStore: loginModule,
  },
});
