const URL_API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//$.get(`${URL_API}${PEOPLE_URL.replace(':id',1)}`, {crossDomain})

const opts = { crossDomain: true };



function obtenerPersonaje(id) {
    const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, opts, function (data) {
        console.log(`Hola, yo soy ${data.name}`);
    });
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);