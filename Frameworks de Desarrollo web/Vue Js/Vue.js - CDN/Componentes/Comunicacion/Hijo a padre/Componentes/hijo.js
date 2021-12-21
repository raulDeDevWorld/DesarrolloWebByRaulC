Vue.component('hijo',{
	template: ` 
		<div class="hijo">
			<h1>componente hijo: {{numero}}</h1>
			<h2>nombre: {{nombre}}</h2>
		</div>
	`,

//props permite la comunicacion entre componentes (intercambio de datos)
	props: ['numero'],
	data(){
		return{
			nombre: 'raul'
		}
	},

//se ejecuta una ves que el dom ya fue leido es decir cuando data ya se pinto en el html
	mounted(){
//$emit vamos a mitir un evento
//$emit('nombre del evento', resultado)
		this.$emit('nombreHijo', this.nombre)
	}


})





