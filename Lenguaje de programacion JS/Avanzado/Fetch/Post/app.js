const button = document.getElementById('button')

button.addEventListener('click', ()=> {
	const newPost = {
		title: 'A new post',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		userId: 1
	}	
//	console.log(newPost)
//	console.log(JSON.stringify(newPost))


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
//informando que el archivo es un JSON
    	"Content-type": "application/json"
    }
})
	.then(res => res.json())
	.then(data => console.log(data))	
})




