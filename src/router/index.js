import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaterialService from '@/services/MaterialService'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: () => {
      if (GStore.frontWall == null) {
        MaterialService.getFrontWall()
      }
      if (GStore.leftWall == null) {
        MaterialService.getLeftWall()
      }
      if (GStore.rightWall == null) {
        MaterialService.getRightWall()
      }
      if (GStore.behindWall == null) {
        MaterialService.getBehindWall()
      }
      if (GStore.floor == null) {
        MaterialService.getFloor()
      }
      if (GStore.ceiling == null) {
        MaterialService.getCeiling()
      }

      return MaterialService.getMaterial()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
