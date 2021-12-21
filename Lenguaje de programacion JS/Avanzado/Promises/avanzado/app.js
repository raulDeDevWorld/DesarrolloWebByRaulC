//-----------------callback---------------
/*//es una funcion que se va a ejecutar despues de que otra lo aga








//idea inicial
/*
function result(a,b){
	console.log(`${a}: ${b}`)
}
function callback(a,cb){
	cuadrado= a*a
	return cb(a,cuadrado)
}
callback(2,result)
*/
//callback


function callback(a,cb){
	cuadrado= a*a
	return cb(a,cuadrado)
}

callback(2,(a,b)=>{
	console.log(`${a}: ${b}`)
		callback(3,(a,b)=>{
		console.log(`${a}: ${b}`)
			callback(4,(a,b)=>{
			console.log(`${a}: ${b}`)
		})
	})
})























//funcion callback
/*
function anonima(valueOne, result){
	console.log('inicio callback')
	console.log(`${valueOne}, ${result}`)
}

//funcion que ejecutara la funcion callback

function cuadradoCallback(value, callback){
	setTimeout(()=>{
		callback(value, value*value)
	}, 0|Math.random()*100)
}

cuadradoCallback(0, anonima)





function cuadradoCallback(value, callback){
	setTimeout(()=>{
		callback(value, value*value)
	}, 0|Math.random()*1000)
}





	cuadradoCallback(0,(valueOne, result)=>{
	console.log('inicio callback')
	console.log(`${valueOne}, ${result}`)

		cuadradoCallback(1,(valueOne, result)=>{
		console.log('inicio callback')
		console.log(`${valueOne}, ${result}`)

			cuadradoCallback(2,(valueOne, result)=>{
			console.log('inicio callback')
			console.log(`${valueOne}, ${result}`)
				cuadradoCallback(3,(valueOne, result)=>{
				console.log('inicio callback')
				console.log(`${valueOne}, ${result}`)
					cuadradoCallback(4,(valueOne, result)=>{
					console.log('inicio callback')
					console.log(`${valueOne}, ${result}`)
						cuadradoCallback(5,(valueOne, result)=>{
						console.log('inicio callback')
						console.log(`${valueOne}, ${result}`)
	
					})
				})
			})
		})
	})
})
*/

function cuadradoPromise(value){
	if(typeof value !=='number')return Promise.reject(`${value} no es un numero`)
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve({
				value,
				result: value*value
			})
		}, 0|Math.random()*1000)	
	})
}

cuadradoPromise(0)
.then(obj=>{
	console.log('inicio promise')
	console.log(`${obj.value}, ${obj.result}`)
	return cuadradoPromise(1)
})
.then(obj=>{
	console.log(`${obj.value}, ${obj.result}`)
	return cuadradoPromise(2)
})
.then(obj=>{
	console.log(`${obj.value}, ${obj.result}`)
	return cuadradoPromise(3)
})
.then(obj=>{
	console.log(`${obj.value}, ${obj.result}`)
	return cuadradoPromise(4)
})
.then(obj=>{
	console.log(`${obj.value}, ${obj.result}`)
	return cuadradoPromise(5)
})
.then(obj=>{
	console.log(`${obj.value}, ${obj.result}`)
	console.log('fin de la Promise')
	
})
.catch(err=>{
	console.error(err)
})


