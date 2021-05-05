import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoriesEidt from '../views/CategoriesEidt'
import CategoriesList from '../views/CategoriesList'


import ItemEidt from '../views/ItemEidt.vue'
import ItemList from '../views/ItemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoriesEidt},
      {path:'/categories/edit/:id',component:CategoriesEidt,props:true},
      {path:'/categories/list',component:CategoriesList},

      {path:'/items/create',component:ItemEidt},
      {path:'/items/edit/:id',component:ItemEidt,props:true},
      {path:'/items/list',component:ItemList}
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
