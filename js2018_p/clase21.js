function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
function Persona1() {
    console.log("hola");
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);

}



var sacha = new Persona('Sacha', 'Liftzy', 1.80);
var juan = new Persona('Juan', 'Ordóñez', 1.76);
var carla = new Persona('Carla', 'Blandon', 1.65);
var v = new Persona1();

//Reto, agregar  el atributo altura y la funcion soy applicationCache, cada persona va a retornar s

// Persona.prototype.soyAlto = () => this.altura > 1.75;
Persona.prototype.soyAlto = function() {
    console.log(`Altura es ${this.altura}`);
    return this.altura > 1.75;
}
// Persona.prototype.soyAlto = () => {
//     console.log(`Altura es ${this.altura}`);
//     return this.altura > 1.75; 
// }i es alta o no


// LOS PROTOTIPOS NO FUNCIONAN CON ARROW FUNCTIONS porque se pierde el this