 
/*****************identificadores
deben comenzar obligatoriamente por:
una letra 
un signo de dolar
un guion bajo

NOTA: 
no pueden comenzar por numero
no pueden repetirse los identificadores
*/

/*practicas de escritura
constantes:
UPPER_case
const UNA_CONSTANTE = 'Soy una constante'

clases:
UpperCamelCase
class UnaClase{
	
}


objetos, funciones variables primitivos e instancias:
lowerCamelCase
const unObjeto = {
	
}

let unaCadena = 'hola mundo'
*/

/*ordenamiento de codigo
1	importacion de modulos
2	declaracion de variables
3	declaracion de funciones
4	ejecucion de codigo
*/


/****************tipos de datos
primitivos: se accede directamente al valor
string
number
boolean
null
undefined
NaN

compuestos: se accede a la referencia del valor
object = {}
array = []
function = () {}
class {}
etc
*/

//------------------------------------------------------------------------------------


//----------------VARIABLES----------------------------------------------------------------

//-------------VARIABLE VAR
//variable var (uso no recomendado)
//tiene un alcance global
var name = 'raul';


//-------------VARIABLE LET
//tiene un alcance de bloque
//puede tener variables vacias
//sus datos(primitivos, compuestos) pueden ser modificados
let nombre = "raul";
let apellido = "choque";


//--------------VARIABLE CONST
//declara variables que no van a cambiar en el flujo de la aplicacion
//no puede haber constantes vacias
//sus datos primitivos no pueden cambiar pero si sus datos compuestos 

const PI = 3.1416

//------------------------------
//---------------------------------------------------------------------------------------








//--------------------DATOS PRIMITIVOS---------------------------------------------------
//---------------String (cadenas de texto)
///pueden ser declaradas entre '' y "" mas estandarizado 
//forma formal (no es muy usado)
let nombre = new String ("raul")

//forma simple(mas estandarizado)
let nombre = "raul"
let apellido = "choque"

 //----------------concadenacion (menos estandarizado)
 //nos permite imprimir varias variable de tipo string
let nombre = "raul"
let apellido = "choque"

let saludo = "bienvenido " + nombre + " " + apellido;
console.log(saludo);

//----------interpolacion de variables (mas estandarizado)
//nuevo metodo que nos permite imprimir varias variable de tipo string esto gracias a 
//template string `` 
let saludo2 = `hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);


//------------------numbers
//no estandar
let = new Number(2);

//estandar
let numero = 2;

 //---------------boleano
let verdadero = true;
let falso = false;
console.log(typeof verdadero);
//----------------null
let nulo = null;

//------------------------------------------------------------------------------------




//----------------------DATOS COMPUESTOS----------------------------------------------

//----------------------funciones
//se situan entre parentesis | ()
//es un bloque de codigo
//tambien se consideran objetos
//son reutilizables
//puede o no recibir parametros
//puede o no devolver valores


//funciones declaradas
function estoEsUnaFuncion(){
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
}

//invocacion de funcion(pueden invocarse las veces que sean necesarias)
estoEsUnaFuncion();
estoEsUnaFuncion();



//estructura de una funcion que retorna un valor
//el primer return hara que los elementos sguientes se ignoren

function unaFuncionQueDevuelveValor(){
	console.log("Uno");
//	return "este return hara que los elementos de abajo se ignoren"
	console.log("Dos");
	console.log("Tres");
	return "la funcion ha retornado una linea de texto"
}

//funcion que recibe valores(son parametros)
 function saludar(nombre, edad){
console.log(`hola mi nombre es ${nombre} y tengo ${edad}.`);
 }

saludar("raul",23);






//--------------------------funcion declara vs funcion expresada
//funcion declarada
funcionDeclarada();

function funcionDeclarada(){
	console.log("funcion tipo global");
}

funcionDeclarada();



//funcion expresada(funcion anonima)
//por lo general se le asigna a una variable de manera mas comun a const

const funcionExpresada = function() {
	console.log("funcion no tipo global");
}
 funcionExpresada ();








//------------ARRAY
//se situa entre corchetes | = []
//coleccion de elementos(datos, variables)
//se los puede declarar en una variables como let y const 
//los elemntos dentro del array toman una posicion

let letArray = [1, true, 'rojo','amarillo',[10,true,'hola'],'verde']

console.log(letArray);

//imprimir elementos del array

console.log(letArray[2]);
console.log(letArray[0]);

//imprimir elementos de un array dentro otro array

console.log(letArray[4][0])
//isArray permite saber si un elemento es un array
console.log(Array.isArray(letArray))

//---------------fill
//se pueden crear un array con determinadas posesiones y valores 
//esto gracias al metodo fill;  

const constArray = Array(100).fill(false)
console.log()

//---------------push
//permite añadir mas datos al array a la parte final
//unshift añade los datos al principio
//esto gracias al metodo push
//ej: variable.push('dato') 
const pushArray =  ["rojo", "amarillo", "verde"]
pushArray.push("verde")

//------------------pop
//permite quitar el ultimo dato al array (shift permite quitar el primer dato)
//podemos guardar el dato quitado en una variable
const popArray = ["rojo", "amarillo", "verde"]
popArray.pop();


//con indexOf podemos buscar la posicion de un dato
//join nos premite colocar un elemento entre datos de un array (- , .   )
//splice elemina o aumenta datos determinados a un array
//slice extrae un datos determinados de un array podria hacer una copia incluso










//--------------------forEach
//nos permite ejecutar una funcion por cada elemento que tenga un array
const colores = ["rojo", "amarillo", "verde", "negro"]
//		el(elemento(valor)), index(index (posision))
colores.forEach(function(el,index){
console.log(`<li> id="${index}>${el}</li>`)
})









//-----------------------OBJETOS-----------------------------------------

//se situan entre llaves | = {}
// es adecuado utlizar const para objetos 
//consta de llaves y valores
//puede alvergar cualquier dato, funciones, objetos, array, etc


//dentro de un objeto las variables se van a llamar etributos/propiedades
//y a las fuenciones se las va a llamar metodos
const constObjeto = {
	nombre: 'raul',
	apellido: 'choque',
	//funcion
	saludar: function(){
		console.log("hola")
	},
	//array
	pasatiempos:["musica", "programacion"],
	//objeto
	contacto: {
		email:"raulit_3000_@hotmail.com",
	}
}

//imprimiendo objeto
//general
console.log(constObjeto)
//en especifico
console.log(constObjeto.apellido)
//a un array dentro de un objeto
console.log(constObjeto.pasatiempos[0])
//a un objeto dentro de un objeto
console.log(constObjeto.contacto.email)
//a una funcion
constObjeto.saludar();

//se puede acceder a los datos de un objeto para añadir mas datos y atributos 
//ej: variable.atributo = 'valor'
objeto.correo = 'raulit_3000_@hotmail.com'

//this:
//hace refencia al objeto en que se encuentra
const b = {
	nombre:"raul",
	pasatiempos:["guitarra","programar"],
	decirMiNombre: function (){
		console.log(`hola me llamo ${this.nombre}`)

	}
}
console.log(b.nombre);
b.decirMiNombre();


//---------------------------------------------------------------------------








//----------------------OPERADORES-----------------------------------------
//aritmeticos
//+-*/"

//------relacionales---------------
//( >,<, >=, =(asignacion de variable) == (comparacion) 
//===(comparacion de tipo de dato y valor) =! (diferente) ==! )

//operadores de incremente decremento

let i = 1;
//i=i+1;
//i+=3;

//operador unario
i++;

console.log(i)


/*operadores logicos
!-not:niega
||-or:una se cumple y el or validara
&&- and: todas las condiciones deben ser verdaderas para que and se validen
*/
console.log(!false)

//-------------------------------------------------------------------------------------






//--------------------ESTRUCTURAS DE CONTROL-------------------------------------------
//--------------------CONDICIONALES--------------------------------------------
//------------------------if else
let edad = 17;

if (edad>17)
console.log("eres mayor de edad")
else
console.log("eres menor de edad");


//condicional anidado

let dia="martes"

if (dia="martes"){
	console.log("dia de trabajo")
}else if(dia="domingo"){
	console.log("feriado")
}else{
	console.log("ingrese un dia de la semana")
}

//operador ternario: es uns implificador
//consta de tres partes
//(condicion)? verdadero:falso

edad = 20;

let operadorTernario = (edad>=18)
?"eres mayor de edad"
:"eres menor de edad";

console.log(operadorTernario);




//-------------------------switch- case
//diferentes valores para una variable

let day=1;

switch (day){
	case 0:
	console.log("domingo"); break;
	case 1:
	console.log("lunes"); break;
	case 2:
	console.log("martes"); break;
	case 3:
	console.log("miercoles"); break;
	default:
	console.log("no corresponde a un dia de la semana")
}



//--------------------------CICLOS O BUCLES----------------------
//-----------------------------while
//consta de tres componentes
//declaracion de la variable, condicion, incremento o decremento
let contador=0;

while(contador < 10){
console.log(contador);
	contador++;
}
	
//-------------------------for
//consta de los tres componentes de While 
//pero se declara en una sola linea
//for(inicializacion de variable; condicion; decremento o incremento)

for (let i = 0; i < 10; i++) {
	console.log("for" + i)
}



//-------------for y array

let forrArray = [10,20,30, 40, 50, 60, 70,80, 90]

for (let i = forrArray.length; i++) {
	console.log(forArray[i])
}


//------------------------manejo de errores
// en el try se agrega el codigo a veluar
//el catch captura cualquier error surgido o lanzado en try
//finally se ejecutara siempre al final de try-catch 
try {
	let numero = "y";
//isNan es una funcion que contrala si los caracteres ingresados son numeros 
 	if (isNaN(numero)){
 		throw new Error("el caracter introducido no es un numero");
 	}

 	console.log(numero*numero)
} catch (error){
	console.log(`se produjo un error: ${error} `);
}


//--------------------DESTRUCTURACION--------------------------
//objetos que literalmente definimos en una variable y los utilizamos
//nueva manera de asignar valores a arreglos y a objetos

//sin destructuracion (array)
const numeros = [1, 2, 3]
//si queremos guardar cada posicion en una variable
let uno = numeros[0],
	dos = numeros[1],
	tres =numeros[2];
console.log(uno, dos, tres);

//con destructuracion (array)

let numerosDos = [1, 2, 3]

//forma de guardar posiciones en variables
const [one, two, three] = numerosDos;
console.log(one, two, three);



//sin destructuracion (objeto)
let persona = {
	nombre: "raul",
	apellido: "choque",
	edad: 23
};
//con destructuracion (objeto)
let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);




//--------------OBJETOS LITERALES---------------------------------
//nueva forma de escribir atributos y metodos incluso asignarlos

//sin la nueva caracteristica
let name = "Skiper"
	age = 5

	const perro = {
		name:name,
		age:age,
		ladrar: function (){
			console.log("guau guau")
		}

	}
console.log(perro);
perro.ladrar()



//con la nuevas caracteristicas
const dog ={
	//cuando la propiedad y la variable son iguales podemos simplificarlas de la sgte manera
	name,
	age,
	raza:"callejero",
	//simplificacion de funciones con las nuevas caracteristicas de objetos literales
	ladrar(){
		console.log("guau")
	}
}

console.log(dog);
dog.ladrar();

//----------------------------------------------------------------------------------------






//--------------------PARAMETROS REST-----------------------
//utilizados para agregar virtualmente parametros infinitos a una funcion, una variable o un array
//para definirlos hay que poner 3 puntos antes del nombre que stan guardados los parametros infinitos
function sumar(a,b,...c){
	let resultado = a + b;

	c.forEach(function(n){
		resultado +=n
	});
	return resultado;
}

console.log(sumar(2,2,2,2,2));



//------------------------SPREAD OPERATOR--------------------------------
//se utliza para expandir 

const arr1 = [1,2,3],
arr2 = [4,5,6]

console.log(arr1,arr2);

//gracias a spread operatos unimos los anteriores array en uno
const arr3 = [...arr1,...arr2];
console.log(arr3);

//-------------------------------------------------------------------------------------






//---------------ARROW FUNCTION--------------
//es una forma de definir funciones anonimas
//funcion expresada: se crea al asignarle el valor de una funcion anonima a una variable
//por lo cual es mas conveniente utilizar las nuevas caracteristicas de objetos literales
//sin arrow function
const saludar = function (){
console.log("hola")
}

saludar();
//con arrow function
const saludar2 = () => console.log("hola");
saludar2();



//arrow function con parametros
const saludar4 = nombre => console.log(`hola ${nombre}`);
saludar4(nombre);




//return sin arrow
let n1=3,
	n2=4;
const suma = function(n1,n2){
	return n1 + n2;
}
console.log(suma());


//arrow con return
let a1=2,
	a2=2;
const suma = (a1,a2) => a1+a2;
console.log(suma(a1,a2));



//arrow function de variias lineas

const manyLines = ()=>{
	console.log("uno");
	console.log("dos");
	console.log("tres");
}
manyLines();



//array con forEach sin arrow function

const number = [1,2,3];
number.forEach(function(el,index){
	console.log(`el elemento ${el} esta en la posecion ${index}`);
});

//arrow y array con forEach
const number1 = [1,2,3];
number1.forEach((el,index) => console.log(`el elemento ${el} esta en la posecion ${index}`));




//Nota: irregularidad de arrow function y this
//un arrow function puede tornar a un this a global, pese a que este se encuentre dentro de una funcion espresada(no global) 

//--------------------------------------------------------------------------------------------------------------------------






//-----------------PROTOTIPOS---------------------------
//es un mecanismo por el cual un objeto puede heradar atributos y metodos de un objeto padre 
//conceptos importates en POO 
//clase: (modelo a seguir)
//objetos:(es una instancia de una clase)
//		atributos (caractristica o propiedad del objeto)
//		objeto (varible dentro de un objeto)
//		metodos (acciones que un objeto puede realizar)
//				(funciones dentro de un objeto)

// funcion constructora(es decir que apartir de esta se podran crear nuevas instancias)
//atributos
function Animal (nombre,genero){
	//es importante que los atributos y metodos de una funcion constructora cuelguen de this
	//this=hace referencia al misma funcion donde se encuentra
	//this.nombre= nombre que el usuario pase en la variable nombre
	this.nombre=nombre;
	this.genero=genero;

//metodo (ubicacion no recomendada porque se malgasta memoria y rendimiento) 
//	this.sonar = funcion(){
//	console.log("hago sonidos porque soy animal")
}


//metodos (ubicacion fuera: recomendada para no malgastar memoria y rendimiento)
//en este caso utilizaremos una funcion constructora para asignar los metodos al prototipo, no a la funcion como tal 
//la signacion se hace de la sgte manera
//NombreDeLaFuncionCostructora.prototype.nombreDelMetodo = function(){}
Animal.prototype.sonar = function(){
	console.log("hago sonidos porque stoy vivo")
}

Animal.prototype.saludar1 = function (){
	console.log(`hola me llamo ${this.nombre}`);
}


//new nos permitira crear una nueva instancia
const raton = new Animal("jerry", "macho"),
	   gato = new Animal("tom", "macho");

//pintando en consola
//console.log(raton);
//console.log(gato);

//--------------------------herencia prototipica
//funcion constructora
function perro1(nombre, genero, tamanio){
	this.super = Animal;//es decir que a super se le asignara (heredara) el prototipo (atributos) del elemnto padre
	this.super(nombre, genero)//entonces recibe los dos parametros de su elemento padre
	this.tamanio = tamanio;//debemos generar el atributo adicional de sta funcion constructora
}

//Perro esta heredando(hacemos que perro sea una instancia de animal)
 perro1.prototype = new Animal();//asignamos perro1 a su funcion constructora padre para ahorrar memoria y rendimiento
 //genramos su propio constructor a a la funcion constructora a perro1
 perro1.prototype.constructor = perro1;


 //sobrescribiendo metodos del padre(redefinimos)
 perro1.prototype.sonar = function (){
 	console.log("soy un perro y ladro")
 }
//podemos crear un nuevo metodo
 perro1.prototype.ladrar = function (){
 	console.log("guauu guauu")
 }

//creamos instancias a traves de new
const snoopy = new perro1("snoopy","macho", "mediano"),
	  lolaBunny = new Animal("lola Bunny", "hembra");


//pintamos por consola
console.log(snoopy);
console.log(lolaBunny);

snoopy.saludar1();
snoopy.sonar();
snoopy.ladrar();

lolaBunny.saludar1();
lolaBunny.sonar();


//-------------------------CLASES--------------------------
//no hay parametros en clases
//creamos una clase con class
class animal {
//atributos
//creamos parametros atraves de constructor
	constructor(nombreAnimal,generoAnimal){
//
		this.nombreAnimal=nombreAnimal;
		this.generoAnimal=generoAnimal;
	}



//metodos
//los metodos si que pueden recibir parametros
//creamos un metodo de la sgte manera: metodo(){}
	sonidoAnimal(){
		console.log("estoy vivo")
	}
	saludoAnimal(){
		console.log(`hola mi nombre es ${this.nombreAnimal}`)
	}
}




//herencia
//extends permite a perroAnimal heredar de animal
 class perroAnimal extends animal{
 	//creamos los parametros para perroAnimal
 	constructor(nombreAnimal, generoAnimal, tamanioAnimal){
 		//super es un metodo que manda a llamar el contructor de la clase padre
 		super(nombreAnimal,generoAnimal);//entonces le debemos asignar los parametros del elemento padre
 		this.tamanioAnimal=tamanioAnimal;//definimos el parametro propio de perroAnimal 
 	}
//sobrescribiendo metodos
 sonidoAnimal(){
 	console.log("mi sonido es un ladrido")
 }
 //añadiendo nuevo metodo
 sonidoladrar(){
 	console.log("guauu guauu")
 }
 }




//creamos variables (seria instancias en el prototipo)
const mimi = new animal ("mimi", "hembra"),
	  scooby = new perroAnimal ("scooby", "macho", "gigante")


//pintamos en consola
console.log(mimi)
console.log(scooby);

mimi.saludoAnimal();
mimi.sonidoAnimal();

scooby.saludoAnimal();
scooby.sonidoAnimal();
scooby.sonidoladrar();


