<template>
  <div class="home">
    <p class="title">Perfil</p>
    <div>
      <p>Nombre: {{user.userName}}</p>
      <div v-if="user.career">Carrera: {{user.career}} <img class="write" src="../assets/write.svg"></div>
      <div v-else>Carrera: <img class="write" src="../assets/write.svg"></div>
    </div>
    <div class="container-career">
      
      <div class="career">
        <div class="career__fac">
            Seleccionar facultad
        </div>
        <div class="career__ul">
          <a class="career__item">Tecnologia</a>
          <a class="career__item">Medicia</a>
          <a class="career__item">Humanidades</a>
          <a class="career__item">Derecho</a>
        </div>
      </div>

    </div>



    <p class="title">Avances y promedios</p>
    <div>
      no hay avances
    </div>
    <p class="box-model" v-if="user.career === ''" >Escoge una carrera para EMPEZAR...</p>
    <button class="button" @click='logout'>Cerrar sesion</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.userProfile
    }   
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  components: {
  }
}
</script>
<style scoped>
.home {
  box-sizing: border-box;  
  position: relative;
  max-width: 100vw;
  padding: 5px;
  background-color: ;
  min-height: 100vh;
}
.title {
  color: white;
  background-color: #013fa5;
  padding: 10px;
  border-radius: 5px;

}
.write {
  position: absolute;
  display: inline-block;
  height: 12px;
  right: 15px;
  cursor: pointer;
}
.container-career {
  box-sizing: border-box;
  max-width: 100vw;
  display: flex;
  justify-content: center; 
}
.career {
  background-color: #e3e6e8;
  position: absolute;
  width: 90%;
  max-width: 300px;
}
.career__fac {
  background-color: black;
  color: white;
  padding: 5px;
  padding-left: 10px;
}
.career__ul {
  margin: 3px 0px;
  margin-right: auto;
  padding: 3px 0;
  padding-left: 0px;
  background-color: orange;
}
.career__item {
  position: relative;
  list-style: none;
  display: inline;
  margin: 0px;
  cursor: pointer;
  margin: 3px 0px;
  padding-left: 10px;
  transition: color .3s;
}
.career__item:hover {
  color: white;
}
.career__item:focus {
  color: white;
}

.box-model {
  background-color: #ffcccc;
  position: absolute;
  top: 80vh;
  right: 5px;
  color: red;
  padding: 7px 18px 7px 7px;
  border-radius: 3px 3px 17px 3px;
  clip-path: polygon(0 0, 100% 0, 95% 30%, 95% 100%, 0 100%);
}
.button {
  position: absolute;
  top: 300px;
  left: 20px;
}
</style>
