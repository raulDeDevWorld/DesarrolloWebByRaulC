<template>
  <div class="app">
    <NavBar/>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from '@/components/AppNavBar.vue'
  export default {

    components: {
      NavBar,
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Lato:wght@100&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-size: 12px;
}
div {
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
