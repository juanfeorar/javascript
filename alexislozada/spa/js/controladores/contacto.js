(function (window, document) {
    var consecutivo = 0;
    libreria.controlador('contacto', {
        contacto: {},
        contactos: [],

        crear: function (formulario) {
            this.contacto.nombre = formulario.nombre.value;
            this.contacto.correo = formulario.correo.value;
            this.contacto.edad = parseInt(formulario.edad.value, 10);
            this.contacto.nacimiento = formulario.nacimiento.value;
            this.contacto.recibir = formulario.recibir.checked;
            this.contacto.color = formulario.color.value;
            consecutivo = consecutivo + 1;
            this.contacto.identificador = consecutivo;
            this.contacto.push(this.contacto);
            this.contacto = {};
            alert(`Contacto creador con el id: ${consecutivo}`);
            formulario.reset();
        },
        eliminar: function () { },
        actualizar: function () { },
        listar: function () { }
    });
})(window, document);