import Vue from 'vue'
import VueRouter from 'vue-router'
import DataVisual from '../views/DataVisual.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'datavisual',
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

const originalPush = VueRouter.prototype.push
 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
