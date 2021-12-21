Vue.component('contador',{
	template:` 
		<div>
			<h1>{{numero}}</h1>
			<button v-on:click='numero++'>+</button>
			<button v-on:click='numero--'>-</button>
		</div>
	`,
	data(){
		return {
			numero: 0,
		}
	}
})