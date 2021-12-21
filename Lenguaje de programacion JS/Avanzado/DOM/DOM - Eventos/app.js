//-----------------click
const button = document.getElementById('button');

//button.addEventListener('eveto',funcion)
button.addEventListener('click',()=>{
	console.log('diste un click')
})


//-----------------doble click
const buttonTwo = document.getElementById('button-two');

//button.addEventListener('eveto',funcion)
buttonTwo.addEventListener('dblclick',()=>{
	console.log('diste doble click')
})

//-----------------mouseenter-mouseleave(hover)
const box = document.getElementById('box')

box.addEventListener('mouseenter',()=>{
	box.classList.replace('red', 'green');
})

box.addEventListener('mouseleave',()=>{
	box.classList.replace('green', 'red');
})

//mousedown(capctura el click izquierdo)
//moueseup(captura cuando soltase el click izquierdo)
const boxTwo = document.getElementById('box-two');

boxTwo.addEventListener('mousedown', ()=>{
	console.log('has pulsado en la caja');
})


boxTwo.addEventListener('mouseup', ()=>{
	console.log('has soltado el pulso en la caja');
})


boxTwo.addEventListener('mousemove', ()=>{
	console.log('estas moviendo el raton en la caja');
})


//------
const input = document.getElementById('input')

input.addEventListener('keydown',()=>{
	console.log('has pulsado una tecla')
})


input.addEventListener('keyup',()=>{
	console.log('has soltado una tecla')
})


input.addEventListener('keypress',()=>{
	console.log('estas pulsando una tecla')
})
