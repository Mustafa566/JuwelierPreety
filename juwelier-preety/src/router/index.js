import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductInfo from '../views/ProductInfo.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Products', name: 'ProductPage', component: ProductPage },
  { path: '/ProductInfo', name: 'ProductInfo', component: ProductInfo },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
