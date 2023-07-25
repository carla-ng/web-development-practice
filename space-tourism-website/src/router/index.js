import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue')
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
