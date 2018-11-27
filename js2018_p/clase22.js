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

Persona.prototype.soyAlto = function () {
    return this.altura > 1.74
}

var sacha = new Persona('Sacha', 'Liftzy', 1.80);
var juan = new Persona('Juan', 'Ordóñez', 1.76);
var carla = new Persona('Carla', 'Blandon', 1.65);