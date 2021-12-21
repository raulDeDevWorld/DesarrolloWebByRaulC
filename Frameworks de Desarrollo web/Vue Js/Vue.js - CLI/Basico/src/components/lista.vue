<template>
	<div class="container">
		<ul class="list">
			<li class="list__item" v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)">
				{{index}}-{{item.nombre}}
				<span class="span">{{item.cantidad}}</span>

			</li>
		</ul>
		<button class="button" @click='reiniciar'>reiniciar</button>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	export default {
		name: 'Lista',

		computed: {
			...mapState(['frutas']),
			arrayOrdenado(state){
				return state.frutas.sort((a,b)=>b.cantidad-a.cantidad)
			}
		},
		methods: {
			...mapMutations(['aumentar', 'reiniciar'])
		}
	}
</script>



<style scoped>
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.list {
		list-style: none;
		padding: 0;
		width: 95%;
	}

	.list__item {
		margin: 10px;
		border: 1px solid black; 
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding-left: 10px;
		border-radius: 10px;

	}

	.span {
		background-color: blue;
		display: inline-block;
		height: 20px;
		width: 20px;
		text-align: center;
		line-height: 20px;
		color: white;
		border-radius: 10px;
		margin-right: 10px;
	}

	.button {
		display: block;
		width: 95%;
		background-color: red;
		color: white;
		height: 30px;
		border: none;
		border-radius: 10px;

	}
</style>