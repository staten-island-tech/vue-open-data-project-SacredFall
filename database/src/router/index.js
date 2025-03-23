import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import aboutView from '../views/aboutView.vue'
import kingVon from '../views/kingVon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView,
    },
    {
      path: '/null',
      name: 'kingVon',
      component: kingVon,
    },
  ],
})

export default router
