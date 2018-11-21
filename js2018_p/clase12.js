var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var Juan = {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 15
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');

    }

    if (persona.cocinero) {
        console.log('Cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    }

    if (persona.dj) {
        console.log('Dj');
    }

    if (persona.guitarrista) {
        console.log('Guitarrista');
    }

    if (persona.drone) {
        console.log('Piloto de Drone');
    }
}

imprimirProfesiones(sacha);


/********ARROW FUNCTIONS ****************/

const MAYORIA_DE_EDAD = 18;

//funcion anonima
/*var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}*/
//Es recomendable almacenarla en una const y no en una varible como está en el ejemplo anterior


//Y con arrow function. ESto de abajo es lo mismo que arriba
const esMayorDeEdad1 = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD;
}

//Y con arrow function que tiene un solo parametro se puede ahcer esto y sería lo mismo.
const esMayorDeEdad2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}

//Y con arrow function que tiene un solo parametro y solo retur algo se puede hacer esto.
const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD;

//Y con arrow function con el objeto desestructurado.
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad y tiene ${persona.edad} años`);

    } else {
        console.log(`${persona.nombre} es menor de edad y tiene ${persona.edad} años`);
    }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(Juan);


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO');

    }
}

//Retos escribis la funcion es menor de edad como arrow funciona y que solo retorne el rechace al mayor
const esMenosDeEdad = persona => persona.edad < MAYORIA_DE_EDAD;