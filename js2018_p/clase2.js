var nombre = 'Carlos', apellido = 'Ordóñez'

var nombreEnMayuscula = nombre.toUpperCase();

var apellidoEnMinusculas = apellido.toLocaleLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = nombre+' '+apellido;

var nombreCompleto1 = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.charAt(1) + nombre.charAt(2);
var str1 = nombre.substr(1, 2);

//desafio
var tamanoNombre = nombre.length;
var ultimaLetraNombre = nombre.charAt(tamanoNombre-1);
console.log(ultimaLetraNombre);