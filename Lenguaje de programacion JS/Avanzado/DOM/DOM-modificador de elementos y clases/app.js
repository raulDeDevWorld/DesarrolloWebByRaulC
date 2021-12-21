//-----------------ATRIBUTOS----------------

const title = document.getElementById('title');
const name = document.getElementById('name');

//obtener atributos
//element.getAttribute('attribute')
//console.log(name.getAttribute('type'));

//poner atributos
//element.setAttribute('attribute','value')
//name.setAttribute('type','date')

//------------------CLASES-----------------


//añadir clases
//element.classList.add('class','class',...)
title.classList.add('new-class', 'new-class-two', 'new-class-three');

//quitar clases
//element.classlist.remove('class','class',...)
title.classList.remove('new-class');

//añade una clase si no la tiene y quita si la tiene 
//force anade una clase especifica en funcion a la clase
//element.classlist.toggle('class'[,force])

//devuelve true o false en fucion de si tiene la clase o no
//element.classlist.contains('class')
if (title.classList.contains('title'))
	console.log("tiene la clase title")
else
	console.log('no tiene la clase title')

//sustituye una clase por otra especificada
//element.classlist.replace('oldClass',newClass)
title.classList.replace('new-class-two', 'new-class-two-replace')
console.log(title);
console.log(name);



//atributos directos
console.log(name.value)
