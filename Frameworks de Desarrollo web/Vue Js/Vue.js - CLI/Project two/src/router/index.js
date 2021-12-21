import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: () => import('../views/Authentication.vue'),
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      authenticated: true
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
    meta: {
      authenticated: true
    }
  },
    {
    path: '/universidades',
    name: 'Universidades',
    component: () => import('../views/Universidades.vue'),
    meta: {
      authenticated: true
    }
  },
    {
    path: '/simulacro',
    name: 'Simulacro',
    component: () => import('../views/Simulacro.vue'),
    meta: {
      authenticated: true
    }
  },
    {
    path: '/materiales',
    name: 'Materiales',
    component: () => import('../views/Materiales.vue'),
    meta: {
      authenticated: true
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
  let user = firebase.auth().currentUser;
//  console.log(user)
  let autherization = to.matched.some(record =>record.meta.authenticated)
//  let userAutherization = to.matched.some(record =>record.meta.userAuthenticated)

  if (autherization && !user){
   next('Authentication')
  }else if(!autherization && user){
   next('Home') 
  } else{
    next()
  }
})
export default router
