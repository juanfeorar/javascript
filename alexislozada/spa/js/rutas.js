(function (window, document) {
    libreria.getID('vista').enrutar()
        .ruta('/', 'vistas/inicio.html', null, null)
        .ruta('/crear-contacto', 'vistas/contactos/crear.html', 'contacto', null)
        .ruta('/lista-contactos', 'vistas/contactos/listar.html', 'contacto', null)
        .ruta('/actualizar-contacto', 'vistas/contactos/actualizar.html', 'contacto', null);
})(window, document);