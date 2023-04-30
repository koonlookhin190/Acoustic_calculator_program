import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaterialService from '@/services/MaterialService'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (GStore.frontWall == null && GStore.productfrontWall == null) {
        MaterialService.getFrontWall()
        MaterialService.getProductFrontWall()
      }
      if (GStore.leftWall == null && GStore.productleftWall == null) {
        MaterialService.getLeftWall()
        MaterialService.getProductLeftWall()
      }
      if (GStore.rightWall == null && GStore.productrightWall == null) {
        MaterialService.getRightWall()
        MaterialService.getProductRightWall()
      }
      if (GStore.behindWall == null && GStore.productbehindWall == null) {
        MaterialService.getBehindWall()
        MaterialService.getProductBehindWall()
      }
      if (GStore.floor == null && GStore.productfloor == null) {
        MaterialService.getFloor()
        MaterialService.getProductFloor()
      }
      if (GStore.ceiling == null && GStore.productceiling == null) {
        MaterialService.getCeiling()
        MaterialService.getProductCeiling()
      }

      MaterialService.getMaterial().then(() => {
        MaterialService.getProduct().then(() => {
          next()
        })
      })
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
