import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/List/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Create/CreateView.vue')
    }
  ]
})

export default router
