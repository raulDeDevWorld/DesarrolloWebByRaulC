//ejemplo 1
//creamos una promesa con new Promise el cual recibe una funcion como parametro
//dicha funcion recibe otras dos funciones como parametro(resolve, reject)
let promesa = new Promise(function(resolve, reject){
	let suma = 2 + 20;
	if (suma === 8){
//ejecutamos resolve en caso de que la respuesta es true
		resolve('corecto')
	}else{
//ejecutamos reject en caso de que la respuesta es false
		reject('incorrecto!')
	}
});

//el metodo .then recibe como parametro una funcion 
//.then se ejecuta si la respuesta es true esta ligada a resolve
promesa.then(function(mensaje){
	console.log(mensaje);
//el metodo .catch recibe como prametro una funcion 
//.catch se ejecuta si la respuesta es false esta ligada a reject
}).catch(function(error){
	console.log(error)
})

//ejemplo 2
//---------------funcion que retorna una promesa-------------

function mipromesa(){
	return new Promise(function(resolve, reject){
	let suma = 2 + 6;
	if (suma === 8){
		resolve('corecto')
	}else{
		reject('incorrecto!')
	}
});
}

//Nota: en este caso por logica debemos llamar a la funcion
mipromesa().then(function(mensaje){
	console.log(mensaje);
}).catch(function(error){
	console.log(error)
})


//ejemplo 3 (simulando a un API)




function simulandoUnApi(){
	return new Promise(function(resolve, reject){
	let isHomeWorkDone = true;
	if (isHomeWorkDone === true)
//base de datos
	{
		let phone = {
			brand: 'iPhone',
			color: 'black'
		}
		resolve(phone)
	}else{
		reject('no ganaste un celular!')
	}
});
}



//--------------podemos retornar otra promesa
function mostrarPhone(mensaje){
	return new Promise(function(resolve, reject){
		if(mensaje){
			resolve('recibiste un' + mensaje.brand)
		}else{
			reject('error!')
		}
	})
}



//
simulandoUnApi().then(function(mensaje){
//retornamos otra promesa 
	return mostrarPhone(mensaje);
}).then(function(respuesta){
	console.log(respuesta)
}).catch(function(error){
	console.log(error)
})