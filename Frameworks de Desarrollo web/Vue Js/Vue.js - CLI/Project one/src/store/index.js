import Vue  from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebaseConfig'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
      userName: null,
      career: null,
      average: null,
      advances: null, 
    },
    questionBank: null,
    greetUser: null 
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
      state.greetUser = `bienvenido ${val.name} aqui se almacenan tus avances y tus promedios, si aun no escogiste una carrera puedes hacerlo ahora mismo  `
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile( { commit }, user) {
      // fetch user profile
      const data = await fb.db.ref(`users/${user.uid}/data`).once('value')
      // .then(function(snapshot){
      //   commit('setUserProfile', snapshot.val())
      // })
      commit('setUserProfile', data.val())

      // change route to dashboard
      if (router.currentRoute.path === '/authentication') {
        router.replace({name: 'Home'})
      }
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      // create user profile object in userCollections
      await fb.db.ref(`users/${user.uid}/data`).update({
        userName: form.name,
        userEmail: form.email,
        career: '',
        average: '',
        advances: ''
      })
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.replace({name:'Authentication'})
    }
  },
  modules: {
  }
})
