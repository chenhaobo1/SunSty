import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeLeft from '../views/HomeLeft.vue'
import HomeRight from '../views/HomeRight'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/HomeLeft',
    name:'HomeLeft',
    component:HomeLeft
  },
  {
    path:'/HomeRight',
    name:'HomeRight',
    component:HomeRight
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
