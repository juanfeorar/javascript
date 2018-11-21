var juan = {
    nombre: 'Juan',
    apellido: 'Ordóñez',
    altura: 1.75
}

var mabel = {
    nombre: 'Mabel',
    apellido: 'Blandon',
    altura: 1.60
}

var carla = {
    nombre: 'Carla',
    apellido: 'Urrego',
    altura: 1.65
}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Ordóñez Urrego',
    altura: 1.24
}
var esteban = {
    nombre: 'Esteban',
    apellido: 'Morales',
    altura: 1.85
}

var personas = [juan, mabel, carla, julieta, esteban];

//Esta funciona recibe como parametro cada uno de los elementos del array(juan, mabel, etc)
const esAlta = (persona) => {
    return persona.altura > 1.7;
}

//const esAlta = ({ altura }) => altura > 1.7;

//El flter toma cada uno de los elementos del ayyay y les filtra según el metodo esAlta
var personasAltas = personas.filter(esAlta);

console.log(personasAltas);

//Escribir el filtrado de personas bajas
let esBajo = persona => persona.altura <= 1.70;
//let esBajo = ({altura}) => altura <= 1.70;
var personasBajas = personas.filter(esBajo);
console.log(personasBajas);

