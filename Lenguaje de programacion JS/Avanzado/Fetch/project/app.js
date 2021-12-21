let form = document.getElementById('form')
let div = document.getElementById('div')

//form.addEventListener('submit', (e)=>{})

  window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");

    fetch('https://jsonplaceholder.typicode.com/todos')
	.then( res => res.json())
	.then( json => {
		json.map(obj=>{
			button = document.createElement('button')
			button.textContent = 'eliminar'
			li = document.createElement('li')
			li.textContent = obj.title
			li.appendChild(button)
			div.appendChild(li)
		})
	})
	.catch( err => console.log(err))



  });



