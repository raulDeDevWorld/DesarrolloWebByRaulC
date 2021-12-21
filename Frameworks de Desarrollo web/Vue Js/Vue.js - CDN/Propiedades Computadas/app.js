

//primero se debe instanciar vue
const app = new Vue({

	el:'#app',
//los datos se trabaja atraves de data
	data: {
		titulo: 'Propiedades Computadas',
		mensaje: 'Este es el mensaje',
		contador: 0,
		width : '20%'
	},
//cubren las funciones que se necesitan
	methods: {

	},
//cubbre las funciones que quedan almacenadas en el cache
	computed: {
	invertido(){
		return this.mensaje.split('').reverse().join('')
	},                  
	color(){
		return {
			'green':this.contador < 11,
			'yellow':this.contador < 21 && this.contador > 10,
			'red':this.contador >20
		}

	}
	}

})




/*

//-----------barra de progreso----------

const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

 fileInput.addEventListener('change', (e) => {

//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//el evento progress nos permitira controlar la subida de un archivo
//     fileReader.addEventListener('progress', (e) => {

//loaded y total son las propiedades que nos ayudaran con la barra de progreso	
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
//     })

//loadend es el evento que se dispara cuando un archivo termina de cargar
//     fileReader.addEventListener('loadend', () => {
//         progress.style.width = '100%'
//     })
})


*/