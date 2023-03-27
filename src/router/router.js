import BlockPage from '@/pages/BlockPage'
import Main from '@/pages/Main'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/block/:blockNumberOrHash',
    component: BlockPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
