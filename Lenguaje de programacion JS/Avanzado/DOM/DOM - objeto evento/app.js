const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

//const submit = document.getElementById('submit')


//target permite hacer un sondeo de todos los componentes de un evento
input.addEventListener('click',(e)=>{
	console.log(e.target)
})

form.addEventListener('submit', (e)=>{
//preventDefault impide que el navegador actue por defecto en determinados elementos
	e.preventDefault()
	console.log('enviando formulario');

})

button.addEventListener('click',()=>{
//para forzar que un evento suceda 	
	input.value = 'has hecho un click'
})



//-----------------------------------------------
const formTwo = document.getElementById('form');
const inputTwo = document.getElementById('input-two')

//value permite capturar un valor
inputTwo.addEventListener('keyup',(e)=>{
	console.log(inputTwo.value)
})


//-----------------------------------------------
//metodo para añadir una clase a elemntos especificados dentro de un contenedor padre
const container = document.getElementById('container');

container.addEventListener('click', (e)=>{
	e.target.classList.add('red')
})


