const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelects')

//document.createElement('element') para crear un elemento
//const itemList = document.createElement('LI')

//text.const para escribir en el elemento
//itemList.textContent = 'lunes'

//a diferencia de textContent reconoce codigo html
//title.innerHTML = 'Titulo: <span>Soy un espan</span>'

//contenedorPadre.appendChild(elemento) para añadir un elemento al DOM
//daysList.appendChild(itemList)


//---------------------------------------------
//un fragmento es un metodo donde escribimos todo el html que queremos inyectar al DOM
const fragment = document.createDocumentFragment()

for (const day of days) {
//creamos un elemento
	const itemList = document.createElement('LI')
//escribimos el contenido de la variable day en el elemento creado
	itemList.textContent = day;
//añadimos el elemento al fragmento a inyectar al DOM
	fragment.appendChild(itemList);
}

//inyectamos el fragmento al DOM
daysList.appendChild(fragment)



//---------------------------------------------
const fragmentTwo = document.createDocumentFragment()

for (const dayTwo of days) {
//creamos un elemento
	const itemListTwo = document.createElement('OPTION')
//escribimos el contenido de la variable day en el elemento creado

//le damos el atributo valor
	itemListTwo.setAttribute('value', dayTwo.toLowerCase())

	itemListTwo.textContent = dayTwo;
//añadimos el elemento al fragmento a inyectar al DOM
	fragmentTwo.appendChild(itemListTwo);
}

//inyectamos el fragmento al DOM
selectDays.appendChild(fragmentTwo)