const indexedDB = window.indexedDB

if (indexedDB) {
    let db

 //open() es el metodo que nos permite acceder a la base de datos (peticion)
 //se puede decir que con open() abrimos la base de datos
 //open() recibe dos parametros ('nombre de la base de datos', vesrion)
    const request = indexedDB.open('tasksList', 1)

//-----Metodos asincronos de IndexedDB
//onsucces se ejecuta en caso de que la peticion fue exitosa
    request.onsuccess = () => {
//guardamos en la base de datos request.result
        db = request.result
//pintando db
        console.log('OPEN', db)
    }

//onupgradeneeded se ejecuta si la base detos no existe en este caso lo crea
//todo las funciones de creacion eliminacion y lectura de base de datos se hace atraves de onupgradeneeded
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)

//.createObjectStore('nombre de almecen de datos')  debemos crear el almacen de objetos
//se pueden crear tantas almacenes como queramos
        const objectStore = db.createObjectStore('tasks')
        const objectStore2 = db.createObjectStore('tasks2')

    }

//se ejecuta en caso de algun erros
    request.onerror = (error) => {
        console.log('Error', error)
    }
}