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


function imprimirNombre(persona){

  var nombre = persona.nombre
  //Lo de arriba Tambien puedo hacerlo así. (Esto se llama desestructurar objetos)
  var { nombre } = persona
  console.log(nombre);
}

//reto
function imprimirNombreYEdad(persona){
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}