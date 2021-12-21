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


*/


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
