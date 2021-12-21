<template>
	<form class="form" @submit.prevent="signup">
		<input v-model='signupForm.name' type="text" class="input" placeholder="nombre...">
		<input v-model='signupForm.email' type="email" class="input" placeholder="email...">
		<input v-model='signupForm.password' type="password" class="input" placeholder="contraseña...">
		<button class="button">Sign in</button>
	</form>
</template>
<script>
	export default {
		name: 'SignUp',
		data(){
			return {
				signupForm: {
					name: '',
					email: '',
					password: ''
				} 
			}
		},
		methods: {
			signup() {
				this.$store.dispatch('signup', {
					email: this.signupForm.email,
					password: this.signupForm.password,
					name: this.signupForm.name,
				})
			}
		}
	}
</script>
<style scoped>
	.form {
		text-align: center;
	}
	.input {
		background: transparent;
		width: 100%;
		border: none;
		margin: 3px 0;
		border-bottom: 1px solid white;
		padding: 3px 0;
		color: white;
	}
	.button {
		cursor: pointer;
		background: transparent;
		margin-top: 10px;
		padding: 5px 13px;
		border: 1px solid white;
		border-radius: 10px;
		color: hsl(360, 0%, 90%);
		transition-property: background-color color;
		transition-duration: .5s;
	}
	.button:hover {
		background-color: white;
		color: black;
	}
</style>