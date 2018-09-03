(function(window, document){
    libreria.controlador('contacto', {
        contacto = {},
        contactos = [],

        crear: function(formulario){
            this.contacto.nombre = formulario.nombre.value;
            this.contacto.correo = formulario.correo.value;
        },
        eliminar: function() {},
        actualizar: function() {},
        listar: function() {}
    });
})(window, document);