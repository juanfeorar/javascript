var x =  4;
var y = '4';

/* La comparación con == lleva los dos valores a un mismo tipo de datos en los dos 
* valores anteriores es true, así uno se string y el otro número.
* Pero el === compara valores y tipo de datos, en este caso daría falso 
* porque tienen tipos diferentes.
* Es recomendable siempre trabajar con el triple igual (===)
*/

x == y; //True
x === y; //False

/** 
 * Comparación entre objetos daría false tanto con == como con === porque así tengan lo mismo
 * estan en refencias diferentes.
*/

var sacha = {
    nombre: 'Sacha'
}

var otro = {
    nombre: 'sacha'
}

var OtraPersona = sacha;
//OtraPersona.nombre = 'Carla'; 
//sacha.nombre sería igual a CArlos porque Otronombre y sacha están en el mismo espacio de memorio(referencia)

sacha === OtraPersona //true



var otraPersona = {
    ...sacha
}
//otraPersona.nombre = 'Carla';
//No afectaría a sacha.nombre porque son dos referencias distintas

sacha === otraPersona //false
