const button = document.getElementById('button')

button.addEventListener('click', ()=>{
	let xhr
//procedimiento para darle soporte nagedares antiguos
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
		else xhr = new ActiveXObject('Microsoft.XMLHTTP')
//parametros impresindibles para GET
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
//load reemplaza xhr.onReadyState
	xhr.addEventListener('load', (data)=>{
//JSON.parse convierta la respuesta del database en JSON (objeto)
		const dataJSON = JSON.parse(data.target.response)
//iniciamos el proceso para pintar los resultados por pantalla
		const list = document.getElementById('list')
		for (const userInfo of dataJSON) {
			const listItem = document.createElement('LI')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
			list.appendChild(listItem)
		}
	})

	xhr.send()
})