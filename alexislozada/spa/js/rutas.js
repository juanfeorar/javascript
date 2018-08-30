(function (window, document) {
    libreria.getID('vista').enrutar()
        .ruta('/', 'vistas/inicio.html', null, null)
        .ruta('/crear-contacto', 'vistas/contacto/crear.html', null, null)
        .ruta('/lista-contactos', 'vistas/contactos/listar.html', null, null)
        .ruta('/actualizar-contacto', 'vistas/contactos/actualizar.html', null, null);
})(window, document);