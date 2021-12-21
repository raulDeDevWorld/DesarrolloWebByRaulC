<template>
	<div class="about">
		<h1>photographs page</h1>
		<router-link :to="{name: 'Photographs', params: {id:item}}" v-for='(item,index) of galeria' :key='index'>
			<button>foto {{item}}</button>
		</router-link>
		<Photo />
		<button @click='home'>home</button>
		<button @click='anterior'>anterior</button>
		<button @click='siguiente'>siguiente</button>

	</div>
</template>
<script>
	import	Photo from '@/components/Photo.vue';
	export default {
		name: 'Photos',
		components: {
			Photo
		},
		data(){
			return { 
			galeria: [1, 2, 3]
			}
		},
		methods: {
			home(){
				this.$router.push('/')
			},
			anterior(){
				this.$router.go(-1)
			},
			siguiente(){
				this.$router.go(1)
			}








		}
	}
</script>