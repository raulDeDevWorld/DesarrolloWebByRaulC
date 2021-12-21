//-----------------callback---------------
/*//es una fuencion que se va a ejecutar despues de que otra lo aga

//funcion callback
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

//--------------------------promesas
//es una mejor de manera de abordar problemas sin hacer uso de callbacks

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
*/

//--------------------------async await
//mejora el trabajo con promesas
function cuadradoPromise(value){
	if(typeof value !=='number')return Promise.reject(`${value} no es un numero`)
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve({
				value,
				result: value*value
			})
		}, 0|Math.random()*100)	
	})
}

 async function funcionAsincronaDeclarada(){
 	try{
 		console.log('inicio de async function')

 		let obj = await cuadradoPromise(0)
 		console.log(`${obj.value}, ${obj.result}`)

 		obj = await cuadradoPromise(1)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(2)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(3)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(4)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(5)
 		console.log(`${obj.value}, ${obj.result}`)
 		console.log('fin del async function declarada')
 	}
 	catch(err){
 		console.log(err)
 	}
 }

funcionAsincronaDeclarada()



 const funcionAsincronaExpresada = async ()=>{
 	try{
 		console.log('inicio de async function')

 		let obj = await cuadradoPromise(6)
 		console.log(`${obj.value}, ${obj.result}`)

 		obj = await cuadradoPromise(7)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(8)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(9)
 		console.log(`${obj.value}, ${obj.result}`)
 		obj = await cuadradoPromise(10)
 		console.log(`${obj.value}, ${obj.result}`)
 		console.log('fin del async function expresada')
 	}
 	catch(err){
 		console.log(err)
 	}
 }

funcionAsincronaExpresada()


























