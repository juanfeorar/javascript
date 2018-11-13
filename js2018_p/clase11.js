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
    }else {
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


/********Funciones que retornan valores ****************/

const MAYORIA_DE_EDAD = 18;
function esMayorDeEdad(persona){
    return persona.edad >= mayoriaEdad;
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad y tiene ${persona.edad} años`);
        
    }else{
        console.log(`${persona.nombre} es menor de edad y tiene ${persona.edad} años`);
    }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(Juan);