import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
      path: '/links',
      name: 'Links',
      component: () => import('../views/Links.vue')
  },
  {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
