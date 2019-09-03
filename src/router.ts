import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import OwnerLogin from '@/views/OwnerLogin.vue';
import UserLogin from '@/views/UserLogin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login/owner',
      name: 'OwnerLogin',
      component: OwnerLogin,
    },
    {
      path: '/login/user',
      name: 'UserLogin',
      component: UserLogin,
    },
  ],
});
