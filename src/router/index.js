import { createRouter, createWebHistory } from 'vue-router'
import Content from '../views/GroupContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    },
  ]
})

export default router
