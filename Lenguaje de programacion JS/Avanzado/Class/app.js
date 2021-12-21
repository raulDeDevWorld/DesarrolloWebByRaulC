class Animal {
  constructor(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar(){
    console.log('hago sonidos porque estoy vivo')
  }
  saludar(){
    console.log(`hola me llamo ${this.nombre}`)
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio){
    super(nombre, genero)
    this.tamanio = tamanio
  }
  sonar(){
    console.log('Soy un perro y mi sonido es un ladrido')
  }
  ladrar(){
    console.log('Guauuu Guauuu!!!')
  }
}

const mimi = new Animal('Mimi', 'Hembra'),
scooby = new Perro('Scooby', 'Macho', 'Gigante')

console.log(mimi)
console.log(scooby)

mimi.saludar()
mimi.sonar()
scooby.saludar()
scooby.sonar()
scooby.ladrar()



