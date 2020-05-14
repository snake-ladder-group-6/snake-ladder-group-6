import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import RoomAdd from '../views/RoomAdd'
import LandingPageViews from '../views/LandingPageViews'
import DashboardViews from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add-room',
    name: 'add-room',
    component: RoomAdd
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageViews
  },
  {
    path: '/dashboard',
    name: 'dasboard',
    component: DashboardViews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
