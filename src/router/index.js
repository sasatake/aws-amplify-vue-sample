import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Login from '../pages/Login.vue';
import List from '../pages/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true }
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

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => !record.meta.isPublic) &&
    !store.state.auth.loggedIn
  ) {
    next({ name: 'Login' });
  } else {
    next();
  }
});
export default router;
