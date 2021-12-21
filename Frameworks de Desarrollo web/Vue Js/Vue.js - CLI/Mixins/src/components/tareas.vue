<template>
	<div>
		<h1>Tareas</h1>
		<input type="text" placeholder="tarea" v-model='item'>
		<button @click='agregarItem'>agregar tarea</button>
		<input type="search" placeholder="buscar tarea" v-model='filtrarItem'>


		<tarea 
			v-for="(item, index) in filtroItems" 
			:key="index" 
			:title='item.title'
			@eliminarTarea='eliminar(index)'>
		</tarea>

	</div>
</template>

<script>
	import todoService from '@/services/todoService.js'
	import tarea from '@/components/tarea'
	import {crudItemsMixin} from '@/mixins/crudItems'
	export default {
		name: 'tareas',
		mixins: [crudItemsMixin],
		created(){
/*			fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res=> res.json())
			.then(data=> this.items = data)*/
			todoService.get()
			.then(res=> this.items = res.data)
			.catch(err=>console.log(err))
		},
		components: {
			tarea
		}			


	}
</script>

<style scoped="">
	
</style>