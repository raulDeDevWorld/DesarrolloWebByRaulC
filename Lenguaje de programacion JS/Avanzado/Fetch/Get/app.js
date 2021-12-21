const button = document.getElementById('button')

button.addEventListener('click', ()=>{
//fetch por defecto trabaja con get
	fetch('https://jsonplaceholder.typicode.com/users')
//internamente fetch ya trabaja con resolve y reject
//solo nos queda indicarle que hacer en caso de una respuesta true or false
//res contiene las respuesta tanto para true como para false
	.then( res => res.ok ? Promise.resolve(res) : Promise.reject(res))

//leyendo JSON mediante fetch
//res.json = JSON.parse()
	.then( res => res.json())

//	.then(res => console.log(res))



//---------imprimiendo JSON en el DOM

/*
//forma incorrecta
	.then(res => {
		const list = document.getElementById('list')
		for (const userInfo of res) {
			const listItem = document.createElement('LI')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
			list.appendChild(listItem)
		}
	})


*/
//forma correcta
	
.then(res => {
		const list = document.getElementById('list')
		const fragment = document.createDocumentFragment()

		for (const userInfo of res) {
			const listItem = document.createElement('LI')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
		
		fragment.appendChild(listItem)
		list.appendChild(fragment)

		}
	})




})