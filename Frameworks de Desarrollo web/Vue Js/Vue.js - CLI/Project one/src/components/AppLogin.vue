<template>
	<form class="form" @submit.prevent="login">
		<input v-model='loginForm.email' type="email" class="input" placeholder="email...">
		<input v-model='loginForm.password' type="password" class="input" placeholder="contraseña...">
		<button class="button">Login</button>
	</form>
</template>
<script>
	export default {
		name: 'Login',
		data() {
			return {
				loginForm: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			login(){
				this.$store.dispatch('login', {
					email: this.loginForm.email,
					password: this.loginForm.password
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