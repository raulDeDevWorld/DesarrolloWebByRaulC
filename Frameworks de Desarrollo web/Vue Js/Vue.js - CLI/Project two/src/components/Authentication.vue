<template>
  <div class="auth">
    <div id="presentation" class="container-presentation">
      <h1 class="title__presentation">PRE-UNIVERSITY</h1>
      <p id="paragraph" class="paragraph">{{paragraph}}</p>
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
  /*

function maquina(text, container, timeout){
  let i = 0;
  let interval = setInterval(()=>{
            i < text.length
            ?container.textContent += text.charAt(i)
            :clearInterval(interval);
            i++
          }, timeout)
}

let string = 'hello world'
let boxModel = document.getElementById('box-model')
let timeout = 100

maquina(string, boxModel, timeout)



  */
  data: function (){
    return {
      form: Login,
      formArray: [SignUp, Login],
      content: 'Todo exito tiene un punto de partida este es el TUYO, bienvenido.',
      paragraph: ''
    }
  },
  methods:{
    typing: function (){
          let i = 0;
          if (i < this.content.length) {
            paragraph.textContent += this.content.charAt(i);
            i++;
            setTimeout(typing, 100);
          }
        }
  } 
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