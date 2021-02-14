import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../pages/Login.vue';
import List from '../pages/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'List',
    component: List
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
