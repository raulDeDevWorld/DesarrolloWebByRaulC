const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'Soy el elemento nuevo'
//insetando un elemento en un lugar especifico
//list.insertBefore(newElement, reference)
list.insertBefore(newElement, list.children[0])

const newElementTwo = document.createElement('li')
newElementTwo.textContent = 'soy el segundo nuevo elemento'
//--------------------------------------------
//insertando un elemento con mas control sobre el
//parent.insertAdjacentElement('position', element)
//'position':beforebegin, afterbegin, beforeend, afterend
list.insertAdjacentElement('beforebegin', newElementTwo )
//list.children[0].insertAdjacentElement('beforebegin', newElementTwo )

const newElementThree = document.createElement('li')
newElementThree.textContent = 'soy el elemnto de remplazo'

//remplazando un elemnto
//list.replaceChild(newElement, oldElement)
list.replaceChild(newElementThree, list.children[1])


//-----------------------------------

//***************nuevos metodos (insertAdjacentElement y replace)
const newMethod = document.createElement('li')
newMethod.textContent = 'soy un elemento con el nuevo metodo'

//insertando un elemento con mas control sobre usando el nuevo metodo
//parent.position
//position: before, prepend, append, after
list.before(newMethod)
//list.children[2].before(newMethod)


const newMethodTwo = document.createElement('li')
newMethodTwo.textContent = 'soy un elemento de remplazo por ID con el nuevo metodo'

list.children[3].replaceWith(newMethodTwo)
document.getElementById('newMethodReplace').replaceWith(newMethodTwo)

//---------------------------------------------------
//clonando un elemento
//list.position(clonacion(true or false))
//true clona todo /false solo clona al padre
//list.before(list.cloneNode(true))

//--------------------------------------
//eliminando elementos completos
//elemento.remove()
//list.remove()

//eliminando los hijos de un elemento
//list.removeChild(list.children[0])