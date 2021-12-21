//añadimos a una variable el elmento al que añadiremos los template y sus clones
const cards = document.querySelector('.cards'),
//añadimos a una variable el template IMPORTANTE haciendo referencia a su contenido
template = document.getElementById('template-cards').content,
//creamos un fragmento el cual contendra el templete y sus clones
fragment = document.createDocumentFragment(),

//simulacion de una base de datos asignados a una variable
cardContent = [
	{
		title: "tecnologia",
		img: "img/one.jpg"
	},

	{
		title: "tecnologia",
		img: "img/two.jpg"
	},

	{
		title: "tecnologia",
		img: "img/three.jpg"
	},

	{
		title: "tecnologia",
		img: "img/four.jpg"
	},

	{
		title: "tecnologia",
		img: "img/five.jpg"
	}
]

//ejecutamos una funcion por cada elemento de la variable
cardContent.forEach( el => {
//añadimos la imagen de la base de datos a nuestra variable template en especifico a img	
	template.querySelector('img').setAttribute('src', el.img)
//añadimos el titulo de la base de datos al templeta en especifico al figcaption
	template.querySelector('figcaption').textContent = el.title;

//clonamos el templete
	let clone = document.importNode(template, true);
//lo pasamos al fragmento
	fragment.appendChild(clone)
})

//lo imprimimos dentro de nuestra variable que imprimira por pantalla
cards.appendChild(fragment)









