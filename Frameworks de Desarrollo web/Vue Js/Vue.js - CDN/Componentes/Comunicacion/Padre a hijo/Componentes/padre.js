Vue.component('padre', {
	template:` 
		<div class='padre'>
			<h1>Componente padre: {{numeroPadre}}</h1>
			<hijo :numero='numeroPadre'></hijo>
			<button v-on:click='numeroPadre++'>+</button>
			<button v-on:click='numeroPadre--'>-</button>

		</div>
	`,
	data(){
		return{ 
			numeroPadre: 0
		}
	}

});