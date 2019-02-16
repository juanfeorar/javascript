/**Lo recomendable es  utilizar siempre let y const, evitar lo mas que se pueda el var para evitar errores
 * y hoisting
 */

var sacha = {
    nombre: 'Sacha',
    apellidos: 'Lifszyc',
    edad: 28
}

function esMayorDeEdad(persona){
    //var mensaje, mensaje2; <-- Housting (esto es lo que hace js en este momento)
    if(persona.edad > 18) {
        var  mensaje = `Es mayor de edad`;
    }else{
        var  mensaje = `Es menor de edad`;
        var mensaje2 = `Este es otro mensaje`;
    }

    console.log(mensaje);
    console.log(mensaje2);
    
}

esMayorDeEdad(sacha);

function esMayorDeEdad(persona){
    //Si la declaro aquí arriba me da alcance a toda la funcion, en cambio si le daclaro en cada if solo tiene alcance allá
    let mensaje, mensaje2;
    //const se comporta ugual que let, con la diferencia que no cambia, es contantante
    const MAYORIA_EDAD = 18;
    if(persona.edad > MAYORIA_EDAD) {
        /*let*/ mensaje = `Es mayor de edad`;
    }else{
        /*let*/ mensaje = `Es menor de edad`;
        /*let*/ mensaje2 = `Este es otro mensaje`;
    }

    console.log(mensaje);
    console.log(mensaje2);
    
}