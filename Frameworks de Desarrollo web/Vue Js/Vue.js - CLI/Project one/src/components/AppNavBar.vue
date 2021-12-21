<template>
    <div class="navbar">
      <div class="nav__icon">
        <img class="img logo2" src="@/assets/logo2.svg">
        <img  class="img home" src="@/assets/home.svg" @click='active'>
      </div>
      <nav  class="nav" :class="[{'top': isActive}]">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Test'}">Test O.V.</router-link>
        <router-link :to="{name: 'Universities'}">Universidades</router-link>
        <router-link :to="{name: 'Materials'}">Materiales P.U.</router-link>
        <router-link :to="{name: 'Simulacro'}">Simulacro</router-link>
      </nav>         
      <div class="image"></div>
    </div>
</template>
<script>
  //darkMode:#04041d
  export default {
    name: 'NavBar',
    data(){
      return {
        desktop: false,
        isActive:false,
      }
    },
    methods:{
      active(){
        return this.isActive=!this.isActive
      },
    }
  }
</script>
<style scoped> 
.navbar {
  box-sizing: border-box;
  position: relative;
  top: 0;
  max-width: 100vw;
  height: 50px;
  z-index: 10;
}
.nav__icon {
  background-color: #e3e6e8;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50px;
  z-index: 10;
}
.nav {
  box-sizing: border-box;
  position: fixed;
  top: -300px;
  right: 0;
  width: 100vw;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #e3e6e8;
  transition:top 1s;
}
.top {
  top: 35px;
  transition:top .5s;
}
.nav a {
  margin: 5px 10px 0px 0px;
  text-decoration: none;
  color: black;
  padding-right: 3px;
  transition-duration: .3s;
}
.nav a:hover {
  color: white;
  border-right: 1px solid red; 
  margin-right: 4px;
  padding-left: 30px;
}
.nav a.router-link-exact-active {
  color: hsl(220, 50%, 55%);/*#013fa5*/
  border-right: 1px solid red; 
  margin-right: 2px; 
}
.img {
  position: absolute;
}
.logo2 {
  top: 3px;
  left: 8px;
  display: inline-block;
  height: 50px;
  z-index: 30;
}
.home {
  top: 14px;
  cursor: pointer;
  position: fixed;
  display: inline-block;
  height: 23px;
  right: 8px;
}
.home:hover {
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
@media (min-width: 640px) {
  .navbar {
  height: 80px;
  }
  .nav__icon {
  height: 80px;
  background-color: #e3e6e8;
  }
  .logo2 {
  left: 10px;
  height: 80px;
  }
  .home {
  top: 27px;
  right: 10px;
  }
  .top {
  top: 65px;
  transition:top .5s;
  }
}
@media (min-width: 1000px) {
  .home {
  display: none;
  }
  .nav {
  top: 20px;
  width: 100vw;
  flex-direction: row;
  justify-content: flex-end; 
  background-color: transparent;
  z-index: 20;
  }
  .logo2 {
  left: 19px;
  }
  .nav a {
  margin: 5px 25px 0px 0px;
  }
  .nav a:hover {
  margin-right: 17px;
  padding-left: 30px;
  }
  .nav a.router-link-exact-active {
  color: hsl(220, 50%, 55%);/*#013fa5*/
  border-right: 1px solid red; 
  margin-right: 25px; 
  padding-left: 0px;
  }
}
</style>