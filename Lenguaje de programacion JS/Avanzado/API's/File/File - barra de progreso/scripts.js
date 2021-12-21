const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

// fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//el evento progress nos permitira controlar la subida de un archivo
//     fileReader.addEventListener('progress', (e) => {

//loaded y total son las propiedades que nos ayudaran con la barra de progreso	
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
//     })

//loadend es el evento que se dispara cuando un archivo termina de cargar
//     fileReader.addEventListener('loadend', () => {
//         progress.style.width = '100%'
//     })
// })

//guradamos nuestra raiz del archivo en una variable
const root = document.documentElement

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})