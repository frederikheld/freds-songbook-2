import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sheets from '../views/Sheets.vue'
import Sheet from '../views/Sheet.vue'
import PlaySheet from '../views/PlaySheet.vue'
import EditSheet from '../views/EditSheet.vue'
import ShareSheet from '../views/ShareSheet.vue'
import CreateSheet from '../views/CreateSheet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sheets',
    name: 'Sheets',
    component: Sheets
  },
  {
    path: '/sheets/create',
    name: 'CreateSheet',
    component: CreateSheet
  },
  {
    path: '/sheets/:id',
    name: 'Sheet',
    component: Sheet,
    redirect: '/sheets/:id/play',
    children: [
      {
        path: 'play',
        name: 'PlaySheet',
        component: PlaySheet
      },
      {
        path: 'edit',
        name: 'EditSheet',
        component: EditSheet
      },
      {
        path: 'share',
        name: 'ShareSheet',
        component: ShareSheet
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
