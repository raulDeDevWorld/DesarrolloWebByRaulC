Vue.component('hijo',{
	template: ` 
		<div class="hijo">
			<h1>componente hijo: {{numero}}</h1>
		</div>
	`,

//props permite la comunicacion entre componentes (intercambio de datos)
props: ['numero']

})