<template>
	<div>
		<h4>{{title}}<button @click='eliminarTarea'>eliminar</button> </h4>
	</div>
</template>

<script>
	export default {
		name: 'tarea',
		props: ['title'],
		methods: {
			eliminarTarea(){
				return this.$emit('eliminarTarea')
			}
		}
	}

</script>