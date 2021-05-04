import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductPage from '../views/ProductPage.vue'
import ProductInfo from '../views/ProductInfo.vue'
import AboutUs from '../views/AboutUs.vue'
import ShoppingCheckOut from '../views/ShoppingCheckOut.vue'
import UserInformation from '../views/UserInformation.vue'
import AdminPanelAddProduct from '../views/AdminPanelAddProduct.vue'
import OrderList from '../views/OrderList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Products', name: 'ProductPage', component: ProductPage },
  { path: '/ProductInfo', name: 'ProductInfo', component: ProductInfo },
  { path: '/AboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/ShoppingCheckOut', name: 'ShoppingCheckOut', component: ShoppingCheckOut },
  { path: '/UserInformation', name: 'UserInformation', component: UserInformation },
  { path: '/AdminPanelAddProduct', name: 'AdminPanelAddProduct', component: AdminPanelAddProduct },
  { path: '/OrderList', name: 'OrderList', component: OrderList },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router