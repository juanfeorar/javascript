const URL_API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//$.get(`${URL_API}${PEOPLE_URL.replace(':id',1)}`, {crossDomain})

const opts = { crossDomain: true };



function obtenerPersonaje(id) {
    return new Promise(function (resolv, reject) {
        const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, opts, function (data) {
            resolv(data);
        }).fail(() => reject(err));
    });
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es: ${personaje.name}`);
        return obtenerPersonaje(2);
    }).then(personaje2 => {
        console.log(`El personaje 2 es: ${personaje2.name}`);
        return obtenerPersonaje(3);
    }).then(personaje3 => {
        console.log(`El personaje 3 es: ${personaje3.name}`);
        return obtenerPersonaje(4);
    }).then(personaje4 => {
        console.log(`El personaje 4 es: ${personaje4.name}`);
        return obtenerPersonaje(5);
    }).then(personaje5 => {
        console.log(`El personaje 5 es: ${personaje5.name}`);
        return obtenerPersonaje(6);
    }).then(personaje6 => {
        console.log(`El personaje 6 es: ${personaje6.name}`);
        return obtenerPersonaje(7);
    }).then(personaje7 => {
        console.log(`El personaje 7 es: ${personaje7.name}`);
    })
    .catch(function (err) {
        alert(err)
        console.log(`Sucedió un error: ${err}`);
    });
/*obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);*/