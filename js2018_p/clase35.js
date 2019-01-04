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

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    // var promesas = ids.map(function (id) {
    //     return obtenerPersonaje(id);
    // });

    var promesas = ids.map(id => obtenerPersonaje(id));
    try {
        //Cuando se resuelvan todas las promesas(all), guardalas en personajes
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch (error) {
        console.log(error);
    }
}

obtenerPersonajes();
