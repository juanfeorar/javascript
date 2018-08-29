(function (window, document) {
    'use strinck';
    var inicio = function () {
        var elemento = null,
            marco = null;
        rutas = {},
            controladores = {},
            controlador,

            libreria = {
                getID: function (id) {
                    elemento = document.getElementById(id);
                    return this;
                },
                noSubmit: function () {
                    elemento.addEventListener('submit', function (e) {
                        e.preventDefault();
                    }, false);
                    return this;
                },
                enrutar: function () {
                    marco = elemento;
                },
                ruta: function (ruta, plantilla, controlador, carga) {
                    rutas[ruta] = {
                        'plantilla': plantilla,
                        'controlador': controlador,
                        'carga': carga
                    }
                }
            };
        return libreria;
    }
    if (typeof window.libreria === 'undefined') {
        window.libreria = window._ = inicio();
    } else {
        console.log(("Se está llamando la librería nuevamente"));

    }
})(window, document);

//_.getID('formulario').noSubmit();