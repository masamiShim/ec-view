import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import OwnerLogin from '@/views/OwnerLogin.vue';
import UserLogin from '@/views/UserLogin.vue';
import ItemRegister from '@/views/owner/ItemRegister.vue';
import ItemDetail from '@/views/customer/ItemDetail.vue';
import ChatRoom from '@/views/ChatRoom.vue';

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
      path: '/owner/item/register',
      name: 'ItemRegister',
      component: ItemRegister,
    },
    {
      path: '/login/user',
      name: 'UserLogin',
      component: UserLogin,
    },
    {
      path: '/customer/item/detail',
      name: 'ItemDetail',
      component: ItemDetail,
    },
    {
      path: '/customer/chat/',
      name: 'ChatRoom',
      component: ChatRoom,
    },

  ],
});
