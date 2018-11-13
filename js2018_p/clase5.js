var nombre = 'Juan'; //Variable de alcance global

/*function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase(); //Nos modifica la variable global window,nombre(efecto de lado)
    console.log(nombre);
    
}*/

//imprimirNombreEnMayusculas();

//Mejor así
function imprimirNombreEnMayusculas1(n){
    n = n.toUpperCase(); //Evita contaminar la varible globa nombre
    console.log(n);
    
}

//ASí n sería de alcance local
imprimirNombreEnMayusculas1(nombre);


//En este caso el parametro se llama nombre igual que la var global, el método toma 
// el parametro y omite la global a no se que la llamemos específicamente window.nombre
function imprimirNombreEnMayusculas1(nombre){
    nombre = nombre.toUpperCase(); //Evita contaminar la varible globa nombre
    console.log(nombre);
    
}

//ASí n sería de alcance local
imprimirNombreEnMayusculas1(nombre);