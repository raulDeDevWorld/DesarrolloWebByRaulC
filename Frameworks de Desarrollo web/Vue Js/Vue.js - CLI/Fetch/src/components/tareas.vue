<template>
	<div>
		<h1>Tareas</h1>
		<input type="text" placeholder="tarea" v-model='tarea'>
		<button @click='agregar'>agregar tarea</button>
		<input type="search" placeholder="buscar tarea" v-model='filtrar'>


		<tarea 
			v-for="(tarea, index) in filtro" 
			:key="index" 
			:title='tarea.title'
			@eliminarTarea='eliminar(index)'>
		</tarea>

	</div>
</template>

<script>
	import tarea from '@/components/tarea'
	export default {
		name: 'tareas',
		created(){
			fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res=> res.json())
			.then(data=> this.tareas = data)
		},
		data(){
			return{
				tareas:[],
				tarea:'',
				buscar:'',
				filtrar:''

			}
		},
		methods: {
			agregar(){
				this.tareas.unshift({title:this.tarea})
				this.tarea=''
			},
			eliminar(index){
				this.tareas.splice(index, 1)
			}
		},
		computed: {
			filtro(){
				return this.tareas.filter(tarea=> tarea.title.includes(this.filtrar))

			}
		},
		components: {
			tarea
		}			


	}
</script>

<style scoped="">
	
</style>