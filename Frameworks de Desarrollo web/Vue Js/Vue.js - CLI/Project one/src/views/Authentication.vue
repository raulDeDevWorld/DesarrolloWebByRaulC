<template>
  <div class="box">
    <h1 class="title">Pre-University</h1>
    <span class="text__dinamico">{{text}}</span>
    <div class="box-auth">
      <div class="item-auth">
        <span class="span" @click='form = comp[0]'>Login</span>
        <span class="span" @click='form = comp[1]'>Sign Up</span>
        <transition name="change" mode="out-in">      
          <component v-bind:is="form"></component>
        </transition>            
      </div>
    </div>
  </div>
</template>
<script>
import Login from '../components/AppLogin.vue'
import SignUp from '../components/AppSignUp.vue'
export default {
  name: 'Authentication',
  middleware: 'Home',
  mounted () {
    setInterval(() => {
      this.i < this.content.length
        ? this.text += this.content.charAt(this.i)
        : clearInterval()
      this.i++
    }, 120)
  },
  data () {
    return {
      content: 'Todo exito tiene un punto de partida, este es el tuyo, BIENVENIDO.',
      i: 0,
      text: '',
      form: Login,
      comp: [Login, SignUp]
    }
  },
  components: {
    Login,
    SignUp
  }
}
</script>
<style scoped>
  .box {
    box-sizing: border-box;
    height: 88vh;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .title {
    font-family: 'Lato', sans-serif;
    font-weight: 1;
    font-size: 26px;
    letter-spacing: 7px;
    margin: 10px 0;
    line-height: 40px;
    width: 100vw;
    text-align: center;
    color: blue;
  }
  .title::after {
    content: '';
    display: block;
    position: relative;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    background-color: hsl(360, 0%, 90%);
    width: 150px;
    height: 1px;
  }
  .text__dinamico {
    font-family: 'Comfortaa', cursive;
    font-size: 13px;
    line-height: 20px;
    margin: 10px 0px;
    width: 100vw;
    height: 40px;
    text-align: center;
  }
  .box-auth{
    box-sizing: border-box;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .item-auth {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    width: 80%;
    max-width: 400px;
    background-color: hsla(360, 100%, 0%, .7);
  }
  .span {
    cursor: pointer;
    color: hsl(360, 0%, 90%);
    margin: 3% 10%;
    transition: color .5s;
  }
  .span:hover {
    color: white;
  }
  .change-enter-active, .change-leave-active {
  transition: opacity .3s ease;
  }
  .change-enter, .change-leave-to
  {
    opacity: 0;
  }
</style>