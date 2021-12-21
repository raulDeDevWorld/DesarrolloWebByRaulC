//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
//añadimos readData para que esta se ejecute despues de que la base datos se haya abierto

        readData()
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
//debemos ejecutar nuevamente readData para que los datos nuevos se puedan leer 
        readData()
    }

//creamos nuestra funcion para leer los datos
    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
//.openCursor() recore cada uno de los objetos creados y nos devuelve la informacion
        const request = objectStore.openCursor()

//se de crear el fragmento antes del onsucces
        const fragment = document.createDocumentFragment()
//ejecutamos onsucces
        request.onsuccess = (e) => {
//guardamos los datos en una variable
            const cursor = e.target.result
//si el cursor existe (el cursor existe solo si sigue habiendo datos que leer no asi cuando ya termino de leer todos)
//if cursor crea un bucle
            if (cursor) {

                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)
//el cursor solo lee un datos para indicarle que lea todos los datos que hayan hay que especificarle con continue
                cursor.continue()
            } else {
//añadimos un string vacio para limpiar el task y no se multiplique
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })
}

