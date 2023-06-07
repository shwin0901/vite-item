import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import routes from './router/index';
import './style.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!localStorage.getItem('login') && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

createApp(App)
  .use(router)
  .mount('#app')
