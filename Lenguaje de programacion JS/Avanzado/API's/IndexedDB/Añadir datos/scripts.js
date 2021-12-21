//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

const indexedDB = window.indexedDB
//identificamos al form
const form = document.getElementById('form')

//por precaucion preguntamos si existe indexedDB y form pra empezar a trabajar
if (indexedDB && form) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
//generados de keys automatico
            autoIncrement: true
//generador de titulo como key
//          'keyPath:taskTitle'

        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }


//creamos una funcion que nos permita añadir el objeto a nuetra base de datos
//nuestra funcion recibe como parametro el objeto que vamos a añadir a la base de datos
    const addData = (data) => {
//podemos decir que para añadir los datos a nuestra base de datos hay tres paso impresindibles

//creamos la transaccion y especicamos parametros
//transaction recibe dos parametros (['el almacen'], el modo en la que vamos a trabajar)  
//readonly por defecto
        const transaction = db.transaction(['tasks'], 'readwrite')

//abrimos el almacen de datos y es aqui donde realmente se hace la transaccion
        const objectStore = transaction.objectStore('tasks')
//objectStore.add() añadimos los datos
        const request = objectStore.add(data)
    }

//escuchamos el submit
    form.addEventListener('submit', (e) => {
        e.preventDefault()
//creamos el objeto a añadir a nuestra base de datos
        const data = {
//task hace referencia al imput y con value capturamos el contenido
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
//invocamos la funcion
        addData(data)
    })
}