<template>
  <div id="app">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/cabecera.vue'
import Lista from './components/lista.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista,
  }
}
</script>

<style>
#app {
  
}
</style>
