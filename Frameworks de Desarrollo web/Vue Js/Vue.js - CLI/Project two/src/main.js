import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


  const firebaseConfig = {
    apiKey: "AIzaSyAIor3579QZ8dnuV3uxQcsuvxiB6C4femg",
    authDomain: "proyection-4a89f.firebaseapp.com",
    databaseURL: "https://proyection-4a89f.firebaseio.com",
    projectId: "proyection-4a89f",
    storageBucket: "proyection-4a89f.appspot.com",
    messagingSenderId: "539285284424",
    appId: "1:539285284424:web:9a9a5daad6ac91b13f1a7d",
    measurementId: "G-E4L9GHETVQ"
  };
  firebase.initializeApp(firebaseConfig);

let app = null


firebase.auth().onAuthStateChanged(function(user) {
	if (!app){
    app = new Vue({
	  router,
	  store,
	  render: h => h(App)
	}).$mount('#app')
  }
});




