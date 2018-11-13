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

function cumpleanos(persona) {
    //Esto me modifica el objeto origina, por ejemplo Juan queda con 38 años
    //Es porque Javascript se comporta diferente con los objetos, los pasa como referencia.
    //Esto se llama efecto de lado
    persona.edad += 1;
}

function cumpleanosXValor(edad){
    //Aquí no modifica el objeto porque no le estoy pasando el objeto, le estoy pasando 
    //el valor
    edad += 1;
}

function cumpleanosNuevoObjeto(persona) {
    //Este me corrige el primera función ya que me retorna un nuevo objeto pero solo modificada la edad 38
    //Pero si reviso el objeto principal sigue teniendo el mismo valor edad 37
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

function cambiarNombre(persona){
    return {
        ...persona,
        nombre: "Diego"
    }
}

function cambiarNombre1(persona){
    persona.nombre = "Diego";
}