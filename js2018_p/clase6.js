var nombre = 'Juan';
var nombre = 'dario';

function imprimirNombre(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}
imprimirNombre(nombre);

/*** Objetos
 * Y si no fueran dos nombres si no miles, pero en vez de tener dos nombres es mejor pensar 
 * en agrupar sus caracaterísticas(atributos) en un  objeto, como por ejemplo un Juan 
 * con la característica: nombre, edad, etc..
 * Veadmos por ejemplo el objeto persona. 
 * En JS los objetos son clave valor(String, num, decimales, boolean, funciones)
 */

  var Juan = {
      nombre: "Juan Fernando",
      apellido: 'Ordóñez',
      edad: 37
  }

  var Dario = {
      nombre: 'Dario',
      apellido: 'Zabala',
      edad: 40
  }


  function imprimirNombre1(persona){
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
    console.log(persona.nombre.toUpperCase());
    
}

function imprimirNombre2({ nombre }){
    console.log(nombre.toUpperCase());
    
}
  //imprimirNombre1(Juan);
  //imprimirNombre1(Dario);

  imprimirNombre2(Juan);
  imprimirNombre2( { nombre: 'Pepito'});
  imprimirNombre1( {nombre: 'Carla'} );

  var ticket = {
      idTicket: 1,
      ticket: 'Tenemos problemas con la facutación',
      subject: 'Problemas al facturar',
      customer: '71370791'
  }

  var answer = {
      idAnswer: 2,
      answer: 'El problema ha sido solucionado',
      dateAnswer: new Date(),
      method: () => { return 'hoña'; },
      methonWhithName: function () { return 'juan'.toUpperCase(); }
  }

function t(answer){
    console.log(answer.methonWhithName()); 
}

t(answer);

