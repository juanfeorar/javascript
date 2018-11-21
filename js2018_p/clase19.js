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

// pasarAlturaACms = persona =>{

//     //persona.altura = persona.altura * 100;
//     //persona.altura *= 100;
//     //return persona.altura;
//     return {
//         ...persona,
//         altura: persona.altura *100
//     }
// }

pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});

//Modifica el atributo altura
var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
