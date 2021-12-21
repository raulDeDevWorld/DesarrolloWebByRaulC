//paso 1: importar vue y vue router
import Vue from 'vue'
import VueRouter from 'vue-router'

//paso 2: llamamos a: Vue.use(VueRouter)
Vue.use(VueRouter)

//paso 3: definimos las rutas hacia nuestros componentes
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  {
    path: '/photographs/:id',
    name: 'Photographs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Photographs.vue')
  }

]

//paso 4: instanciar router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//paso 5: exportar router
export default router
