//**********************Callback************************************
//es una funcion la cual es pasada como paramaetro a otra funcion

//funciones normales
function funcion1(){
	console.log('funcion 1')
}

function funcion2(){
	console.log('funcion 2')
}

funcion1();
funcion2();

//funcion como parametro de otra funcion (callback)

//declaradamos una funcion que se utilizara a modo de parametro

function funcionOne(){
	console.log('soy un callback')
}

//declaramos una funcion que contendra a modo de parametro otra funcion 
function funcionTwo(fn){
	//ejecutamos la funcion que utilizamos a modo de parametro 
	fn()
}

//ejecutamos la funcion que contiene otra funcion como parametro
funcionTwo(funcionOne)


//-----------ejemplo callback uso

/*//sin callback
function mensajeOne(){
	setTimeout(function(){
	console.log('mensaje 1')
	}, 1000)


}

function mensajeTwo(){
	console.log('mensaje 2')
}

mensajeOne();
mensajeTwo();
*/
//con callback
function mensajeOne(fn){
	setTimeout(function(){
	console.log('mensaje 1')
	fn()
	}, 1000)
}

function mensajeTwo(){
	console.log('mensaje 2')
}

mensajeOne(mensajeTwo);



