import Vue from 'vue'
import VueRouter from 'vue-router'
import DataVisual from '../views/DataVisual.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DataVisual
  },
  {
    path: '/onemap',
    name: 'onemap',
    component: () => import('../views/OneMap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
