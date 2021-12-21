const title = document.getElementById('title');
//textContent accede al contenido del html 
//atraves de un = '' podemos modicar el contenido
title.textContent = 'DOM - Accediendo a nodos'

//podemos acceder a css ('.paragraph:nth-child(2)') 
// sin embargo no se puede a acceder a pseudo elementos con este metodo 
const paragraph = document.querySelector('.paragraph');

//podemos acceder a elementos del dom atraves de sus variables contenedores
const span = paragraph.querySelector('span');

//modo simplificado de acceso
const spanOne = document.querySelector('.paragraph-one').querySelector('span')
console.log(spanOne.textContent);

//selccionar todas clases con el mismo nombre 
const paragraphAll = document.querySelectorAll('.paragraph');
console.log(paragraphAll)

//acceder a una clase en especifico
paragraphAll[0].textContent = 'contenido de parrafo modificado';