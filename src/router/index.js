import Vue from 'vue';
import Router from 'vue-router';

import TodoContainer from '../components/TodoContainer.vue';
import Todo from '../components/todo/Todo.vue';
import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history', // check the deployment stage for more info
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/todo',
    name: 'TodoContainer',
    component: TodoContainer,
    children: [
      {
        name: 'Todo',
        path: 'items',
        component: Todo,
      }, {
        name: 'Profile',
        path: 'profile',
        component: Profile,
      },
    ],
  },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('todoToken') != null;
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
});

export default router;
