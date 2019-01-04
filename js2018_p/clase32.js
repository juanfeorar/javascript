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

obtenerPersonaje(2).then(function (personaje) {
    console.log(`El personaje 1 es: ${personaje.name}`);
}).catch(function (err) {
    alert(err)
    console.log(`Sucedió un error: ${err}`);
});
/*obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);*/

//https://www.youtube.com/watch?v=P1NE1tSLdVo
(function () {

    function getUser() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('User are aready!');
                resolve();
            }, 5000);
        });

    }

    function getProjects() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Projects are aready!');
                reject("Porque sí");
            }, 400);
        });

    }

    function getIssues() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Issues are aready!');
                resolve();
            }, 0);
        });

    }

    getUser()
        .then(getProjects)
        .then(getIssues)
        .catch(function(err){
            console.log("Error !" + err);
            
        })

    // getUser();
    // getProjects();
    // getIssues();
    // ciclo(callback);
    // ciclo1(callback);


    function callback() {
        for (var index = 0; index < 10000000000; index++) {

        }
        console.log(index);
    }
    function ciclo(callback) {
        console.log('ejecuta el callback');
        callback();
    };

    function ciclo1(callback) {
        console.log('ejecuta el callback1');
        callback();
    };


})();