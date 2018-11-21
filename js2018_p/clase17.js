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

var personas = [juan, mabel, carla, julieta];

for (let i = 0; i <= personas.length; i++) {
    let persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`);
}