//Impresión del área de un triangulo normal
console.log("El área de un triangulo de base 5 y altura 7 es: " + 5*7/2);
//Impresión del área de un triagulo sin concatenación, con la operación matemática a dentro del string 
console.log(`El área de un triangulo de base 5 y altura 7 es: ${5*7/2}`);

//Impresión de áre de un triangulo con variables
let base = 5;
let height = 7;
console.log(`El área de un triangulo de base ${base} y ${height} es: ${base*height/2}`);

//Impresión del área del triangulo  en una función normal
function triangleArea(base, height){
	return base*height/2;
}
console.log(`El área de un triangulo ${triangleArea(base,height)}`);

//Impresión del áre del triangulo. A una variable le asignamos una función
let triangleArea1 = function (base, height){
	return base*height/2;
}
console.log(`El área de un triangulo ${triangleArea1(base,height)}`);

//Impresión del área del triangulo con la función flecha(arrow) con una sola linea
let triangleArea2 = (base,height) => base * height /2;
console.log(`El área de un triangulo ${triangleArea2(base,height)}`);

//Impresión del área del triangulo con la función flecha(arrow) con varias lineas
let triangleArea3 = (base,height) => {
	return base * height /2;
}
console.log(`El área de un triangulo ${triangleArea3(base,height)}`);

/*En EcmaScript 5 solo existía VAR para declarar las variables, en EcmaScript 6 existen dos más(let y const), 
la diferencia radica en :
VAR es global y tiene ambito de función -> No es recomendable usarla
LET es solo de bloque por ejemplo let i en un for solo tendría alcance en el for 
o en un if tendría alcance solo en el if.
CONST(constante) es como left de bloque con la diferencia de que const no puede ser reasignado. Por ejemplo tengo la variable 
x=1, pero si despues le reasigno x=2, no sería posible porque const no lo permite.

