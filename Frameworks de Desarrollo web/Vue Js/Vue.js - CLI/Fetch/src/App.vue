<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding:0;
  background-color: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
/*  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color:;
  background-color: blue;
}

#nav {
  padding: ;
  background-color: black;

}

#nav a {
  font-weight: ;
  text-decoration: none;
  color: white;

}

#nav a.router-link-exact-active {
  color: white;
}
</style>
