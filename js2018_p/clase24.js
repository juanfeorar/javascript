function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);

}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.74
}


function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
    
}



// var sacha = new Persona('Sacha', 'Liftzy', 1.80);
// var juan = new Persona('Juan', 'Ordóñez', 1.76);
// var carla = new Persona('Carla', 'Blandon', 1.65);