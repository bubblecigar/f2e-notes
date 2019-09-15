import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import quill from 'quill'


Vue.config.productionTip = false;

import firebase from './firebaseConfig.js'

// handle page reloads
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
