import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home');
const Category = () => import("../views/category/Category");
const ShopCart = () => import("../views/shopCart/ShopCart");
const Profile = () => import("../views/profile/Profile")

const routes = [
  {
    path: '',
    redirect : '/home'
  },
  {
    path: '/home',
    component : Home
  },
  {
    path: '/category',
    component : Category
  },
  {
    path: '/shopCart',
    component : ShopCart
  },
  {
    path: '/profile',
    component : Profile
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
