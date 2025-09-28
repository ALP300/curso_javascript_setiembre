/*const perro={
    nombre: "Max",
    edad: 3,
    raza:"Chihuahua"
}
    */
class Persona{
    constructor(nombre, edad, correo){
        this.nombre= nombre
        this.edad= edad
        this.correo= correo
    }

    presentarse(){
        return `Hola , soy ${this.nombre} y tengo ${this.edad} y este es mi correo ${this.correo}`
    }
    esMayorEdad(){
        return this.edad>=18
    }
}
const persona1= new Persona("Ana",30,"ana@gmail.com")
const persona2= new Persona("Ana2",32,"ana2@gmail.com")
console.log(persona1.presentarse())