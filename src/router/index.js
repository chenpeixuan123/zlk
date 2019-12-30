import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
// component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
=======
import Index from '../views/Index.vue'

>>>>>>> 805671e1815e6d85c50a83c4f8708a7b0fdd1122
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexV1.vue'),
=======
    component: Index,
>>>>>>> 805671e1815e6d85c50a83c4f8708a7b0fdd1122
    redirect:'index',
    children:[
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../components/index.vue')
      },
      {
        path: 'aboutHX',
        component: () => import(/* webpackChunkName: "about" */ '../components/aboutHX.vue')
      },
      {
        path: 'product',
        component: () => import(/* webpackChunkName: "about" */ '../components/product.vue')
      },
      {
        path: 'addHX',
        name:'addHX',
        component: () => import(/* webpackChunkName: "about" */ '../components/addHX.vue')
      },
      {
        path: 'concatOus',
        component: () => import(/* webpackChunkName: "about" */ '../components/concatOus.vue')
      },

    ]
  },
  {
<<<<<<< HEAD
    path: '*',
=======
    path: '/test',
>>>>>>> 805671e1815e6d85c50a83c4f8708a7b0fdd1122
    component: () => import(/* webpackChunkName: "about" */ '../components/test.vue')
  }
]

const router = new VueRouter({
  linkActiveClass:'active1',
  base: process.env.BASE_URL,
  routes
})

export default router
