<template>
	<div>
		<form class="form" @submit.prevent="signup">
			<input v-model='name' class="form__item" type="text" placeholder="Nombre">
			<input v-model='email' class="form__item" type="email" placeholder="Email">
			<input v-model='password' class="form__item" type="password" placeholder="Password">
			<button class="button__form">Sign Up</button>
		</form>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'SignUp',
		data: function(){
				return{
					name: '',
					email: '',
					password: ''				
				}	
			},
	
		methods:{
			signup(){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user)=>this.$router.replace('home'), (error)=>console.error(error))

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