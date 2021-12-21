Vue.component('saludo',{
	template:` 
		<div>
			<h1>{{title}}</h1>
			<p>{{mesage}}</p>
		</div>
	`,
	data(){
		return {
			title: 'Componentes',
			mesage: 'mensaje desde el componente'
		}
	}
})