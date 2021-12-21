<template>
  <div id="app" class="app">
    <div class="nav">
      <div class="container">
        <img src="./assets/logo.svg" class="nav__logo">
        <img src="./assets/home.svg" id="nav-icon-open" class="nav__home" @click='menuClick'></img>
      </div>
      <div :class="['dinamico', menu? 'position':'',]">
        <router-link to="/home"><a @click='menuClick'>Home</a></router-link>
        <router-link to="/test"><a @click='menuClick'>Test O.V.</a></router-link>
        <router-link to="/universidades"><a @click='menuClick'>Universidades</a></router-link>
        <router-link to="/simulacro"><a @click='menuClick'>Simulacro E.A</a></router-link>
        <router-link to="/materiales"><a @click='menuClick'>Material P.U:</a></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script> 
export default {
  data: function (){
    return {
      menu: false,
    }
  },
  methods: {
    menuClick: function (){
      return this.menu=!this.menu
    }
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Lato:wght@100&display=swap');
body {
  margin:0;
  padding: 0;
  background-image: radial-gradient(white, blue);
  background-repeat: no-repeat;
  background-attachment: fixed;
}


.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
  padding: 0;
  margin:0;
}


.nav {
  position: fixed;
  width: 100vw;
  top: 0;
}
.container {
  position: relative;
  background-color: black;
  height: 50px;
  z-index: 100;
}
.nav__logo {
  position: absolute;
  width: 50px; 
  left: 10px;
  top: 12px;
}
.nav__home {
  position: absolute;
  width: 30px;
  right: 10px;
  top: 13px;
  cursor: pointer;
}
.nav__home:hover {
  animation: rotar 1.5s alternate;
}

@keyframes rotar{
  0% {transform: rotate(0deg);}
  20% {transform: rotate(10deg);}
  40% {transform: rotate(-15deg);}
  60% {transform: rotate(15deg);}
  80% {transform: rotate(-10deg);}
  100% {transform: rotate(0deg);}
}
.dinamico {
  box-sizing: border-box;
  position: absolute;
  top: -100px;
  width: 100vw;
  background-color: black;
  padding: 5px;
  transition-duration: .3s;

  display: flex;
  flex-wrap: wrap;
}
.nav a {
  color: hsla(360, 0%, 75%, 1);
  width: 100vw;
  text-decoration: none;
  margin:3px 3px;
  text-align: right;
}
.nav a:hover {
  color: white;
  transition: 0.5s;

}
.nav a.router-link-exact-active {
  color: white;

}

.position {
  transition: .3s;
  top: 50px;
}
</style>
