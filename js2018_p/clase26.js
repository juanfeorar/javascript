class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        if (fn) {
            fn(this.nombre, this.apellido);
        }
    }

    soyAlto() {
        return this.altura > 1.74
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola soy ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
 }

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador`);
    }
}

var sacha = new Persona('Sacha', 'Liftzy', 1.80);
var juan = new Desarrollador('Juan', 'Ordóñez', 1.76);
var carla = new Persona('Carla', 'Blandon', 1.65);

sacha.saludar();
juan.saludar(responderSaludo);
carla.saludar(responderSaludo);