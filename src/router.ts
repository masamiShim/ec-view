import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import OwnerLogin from '@/views/OwnerLogin.vue';
import UserLogin from '@/views/UserLogin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
