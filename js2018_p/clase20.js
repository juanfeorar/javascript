var juan = {
    nombre: 'Juan',
    apellido: 'Ordóñez',
    altura: 1.75,
    cantidadDeLibros: 10
}

var mabel = {
    nombre: 'Mabel',
    apellido: 'Blandon',
    altura: 1.60,
    cantidadDeLibros: 1
}

var carla = {
    nombre: 'Carla',
    apellido: 'Urrego',
    altura: 1.65,
    cantidadDeLibros: 15
}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Ordóñez Urrego',
    altura: 1.24,
    cantidadDeLibros: 4
}
var esteban = {
    nombre: 'Esteban',
    apellido: 'Morales',
    altura: 1.85,
    cantidadDeLibros: 150
}

var personas = [juan, mabel, carla, julieta, esteban];

// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros;
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

var totalLibros = personas.reduce(reducer, 0);

console.log(`En total tiene ${totalLibros} libros`);
