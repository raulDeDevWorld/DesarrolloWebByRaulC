Vue.component('padre', {
	template:` 
		<div class='padre'>
			<!--pintamos numeroPadre en elemento padre-->
			<h1>Componente padre: {{numeroPadre}} {{nombrePadre}}</h1>
			<!--recibimos el evento con @nombreDelEvento='datoASobrescribir=$event'-->
			<hijo :numero='numeroPadre' @nombreHijo='nombrePadre = $event'></hijo>
			<button v-on:click='numeroPadre++'>+</button>
			<button v-on:click='numeroPadre--'>-</button>

		</div>
	`,
	data(){
		return{ 
			numeroPadre: 0,
	//nombrePadre sera sobrescribido por el evento pasado por $emit
			nombrePadre: ''
		}
	}

});