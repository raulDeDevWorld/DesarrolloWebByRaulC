<template>
	<div class="form-container">
		<form class="form" @submit.prevent="login">
			<input v-model='email' class="form__item" type="email" placeholder="Email">
			<input v-model='pass' class="form__item"type="password" placeholder="Password">
			<button class="button__form" type="submit">Login</button>
		</form>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'Login',
		data: function(){
			return {
				email: '',
				pass: ''
			}
		},
		methods: {
			login(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
				.then((user)=>this.$router.replace('home'), (error)=>console.error(error))
			}

		}
}
</script>

<style scoped>

	.form {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
	}
	.form__item{
		background: transparent;
		width: 90%;
		color: white;
		border: none;
		border-bottom: 1px solid white;
		margin-top: 10px;
	}
	.button__form {
		background-color: transparent;
	    color: white;
	    border: 1px solid white;
	    border-radius: 15px;
	    padding: 5px 13%;
	    margin: 20px 0;
	    font-size: 15px;
	    cursor: pointer;
	}



</style>






