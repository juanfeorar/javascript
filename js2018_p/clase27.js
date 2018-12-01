/**
 * Asincronismo
 
 * @Pila de ejecucuón(call stack): 
 * Aquí se ponene las llamadas a funciones según el orden de ejecución de programa. Si una funcion llama a otra, esta se agregar a la pila. Cuando termina, la saca de la pila y la bota
 * 
 * 
 * Probar el script de abajoen http://latentflip.com/loupe/
 * https://www.youtube.com/watch?v=rgmej4Jx4WM
 */

setTimeout( function () {
    console.log('Hola');
}, 1000)

setTimeout( function () {
    console.log('Hola');
}, 10000)

function primero(valor){
    return segundo(valor +10);
}

function segundo(valor){
    return tercero(valor +10);
}

function tercero(valor){
    return valor +10;
}

primero(10);