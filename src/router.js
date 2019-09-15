import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import firebase from '@/firebaseConfig.js';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/editor',
      name: 'editor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Editor.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Articles.vue'),
      meta: {
        requiresAuth: true
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
