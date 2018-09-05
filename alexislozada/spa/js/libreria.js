(function (window, document) {
    'use strinck';
    var inicio = function () {
        var elemento = null,
            marco = null,
            rutas = {},
            controladores = {},
            ctrlActual = null,
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

                controlador: function (nombre, ctrl) {
                    controladores[nombre] = {'controlador': ctrl};
                },

                controlador: function(nombre, ctrl){
                    controladores[nombre] = {'controlador': ctrl}; 
                },

                getCtrl: function(){
                    return ctrlActual;
                },

                enrutar: function () {
                    marco = elemento;
                    return this;
                },

                ruta: function (ruta, plantilla, controlador, carga) {
                    rutas[ruta] = {
                        'plantilla': plantilla,
                        'controlador': controlador,
                        'carga': carga
                    };
                    return this;
                },
                manejadorRutas: function () {
                    var hash = window.location.hash.substring(1) || '/',
                        destino = rutas[hash],
                        xhr = new XMLHttpRequest();
                    if (destino && destino.plantilla) {
                        if(destino.controlador){
                            ctrlActual = destino.controlador;
                        }
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    marco.innetHTML = this.responseText;
                                    document.getElementById("vista").innerHTML = this.responseText;
                                    if(typeof (destino.carga)=== 'function'){
                                        destino.carga();
                                    }
                                    //alert(this.responseText);
                                }
                          }
                        };
                        
                        /*('load', () => {
                            marco.innetHTML = this.responseText;
                            alert(this.responseText);
                        }, false);*/

                        xhr.open('get', destino.plantilla, true);
                        xhr.send(null);
                    } else {
                        window.location.hash = '#/';
                    }
                }
            };
        return libreria;
    }
    
    
    if (typeof window.libreria === 'undefined') {
        window.libreria = window._ = inicio();
        window.addEventListener('load', libreria.manejadorRutas, false);
        window.addEventListener('hashchange', libreria.manejadorRutas, false);
    } else {
        console.log(("Se está llamando la librería nuevamente"));

    }
})(window, document);

//_.getID('formulario').noSubmit();