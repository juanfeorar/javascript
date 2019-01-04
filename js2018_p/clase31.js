const URL_API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//$.get(`${URL_API}${PEOPLE_URL.replace(':id',1)}`, {crossDomain})

const opts = { crossDomain: true };



function obtenerPersonaje(id, callback) {
    const URL = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, opts, function (data) {
        console.log(`Hola, yo soy ${data.name}`);

        if (callback) {
            callback();
        }
    });
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {
                        });
                    });
                });
            });
        });
    });
});


