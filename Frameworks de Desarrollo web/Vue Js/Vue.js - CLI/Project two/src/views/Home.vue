<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click='singout'>Cerrar secion</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
  	singout(){
  		return firebase.auth().signOut().then(()=>{
  			this.$router.replace('Authentication')
  		}).catch(function(error) {
		});

  	}
  }

}
</script>
