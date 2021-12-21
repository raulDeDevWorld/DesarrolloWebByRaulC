//primero se debe instanciar vue
const app = new Vue({
//dentro de sta instacia trabajaremos con Vue
//se debe pasar a 'el' el contenido que sera gestionado por Vue
	el:'#app',
//los datos se trabaja atraves de data
	data: {
		titulo: 'Hola mundo con Vue',
		
		frutas: ['Manzana', 'Pera', 'Platano'],

		frutasTwo: [
		{nombre: 'Pera', cantidad:10},
		{nombre: 'Manzana', cantidad:0},
		{nombre: 'Platano', cantidad:10}
		],

		nuevaFruta: ''

	},
//cubren las funciones que se necesitan
	methods: {
		agregarFruta(){
//			console.log('diste click')
//this permite acceder a los diferentes elementos de data
			this.frutasTwo.push({
				nombre: this.nuevaFruta, cantidad:0
			})
//metodo para resetear el imput
			this.nuevaFruta=''
		}
	}
})





const appTwo = new Vue({
	el: '#appTwo',
	data: {
		fondo:'pink',
		color: false



	},
	methods: {




	}






})



