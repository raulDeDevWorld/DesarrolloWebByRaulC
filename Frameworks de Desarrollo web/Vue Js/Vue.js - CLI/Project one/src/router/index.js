import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from '../views/Authentication.vue'
import Test from '../views/Test.vue'
import Universities from '../views/Universities.vue'
import Materials from '../views/Materials.vue'
import Simulacro from '../views/Simulacro.vue'
import { auth } from '../firebaseConfig'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },  
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      requiresAuth: true
    }
  },  
  {
    path: '/universities',
    name: 'Universities',
    component: Universities,
    meta: {
      requiresAuth: true
    }
  },  
  {
    path: '/materials',
    name: 'Materials',
    component: Materials,
    meta: {
      requiresAuth: true
    }
  },  
  {
    path: '/simulacro',
    name: 'Simulacro',
    component: Simulacro,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const user = auth.currentUser
  if (requiresAuth&& !user){
   next({name:'Authentication'})
  }else if(!requiresAuth && user){
   next({name:'Home'}) 
  } else{
    next()
  }
})

export default router
