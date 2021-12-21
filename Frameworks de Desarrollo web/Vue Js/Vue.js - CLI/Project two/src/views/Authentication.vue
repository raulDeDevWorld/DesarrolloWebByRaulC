<template>
  <div class="auth">
    <div id="presentation" class="container-presentation">
      <h1 class="title__presentation" @click='typing'>PRE-UNIVERSITY</h1>
      <p id="paragraph" class="paragraph" >{{paragraph}}</p>
    </div>
    <div class="container-auth">
      <button class="auth__botton" @click.prevent='form = formArray[1]'>Login</button>
      <button class="auth__botton" @click.prevent='form = formArray[0]'>Sign up</button>
      <component v-bind:is="form"></component> 
    </div>
  </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    SignUp,
    Login
  },
  data: function (){
    return {
      form: Login,
      formArray: [SignUp, Login],
      ok:true,
      content: 'Todo exito tiene un punto de partida este es el TUYO, bienvenido.',
      paragraph: ''
    }
  },
  methods:{
    typing: function (){    
      console.log(this.content.length)
/*      if(i < this.content.length){
        this.paragraph+=this.content.charAt(i);
        i++;
      }*/
      for (let i = 0; i < this.content.length; i++) {
        (z=>
          setTimeout (()=>this.paragraph += this.content.charAt(z),z * 130))(i)
      }
    }
  } 
/*  created (){
    this.typing()
  }*/

}
</script>

<style scoped>
  .auth {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;  
  }

  .container-auth{
    background-color: hsla(247, 0%, 0%, .8);  
    width: 300px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
  }

  .auth__botton {
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px 13%;
    font-size: 15px;
    cursor: pointer;
  }

</style>