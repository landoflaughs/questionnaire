import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ms12v25 from '../components/ms12v25.vue'
import dolbyindex from '../components/dolbyindex.vue'
import SavedData from '../components/saveddata.vue'
import ViewData from '../components/viewdata.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'dolbyindex',
    component: dolbyindex
  },
  {
    path: '/ms12-v25',
    name: 'ms12v25',
    component: ms12v25
  },
  {
    path: '/saveddata',
    name: 'SavedData',
    component: SavedData
  },
  {
    path: '/viewdata',
    name: 'ViewData',
    component: ViewData
  },
]

const router = new VueRouter({
  routes
})

export default router
