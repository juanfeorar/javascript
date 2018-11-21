var sacha = {
    nombre: 'Sacha',
    apellidos: 'Lifszync',
    edad: '28',
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kgs`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;
const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const META = sacha.peso -3;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias = 0;

while (sacha.peso > META) {
    debugger;
    if(comeMucho()){
        //AUMENTAR PESO
        aumentarDePeso(sacha);
    }
    if(realizaDeporte()){
        //ADELGAZAR
        adelgazar(sacha);
    }
    dias ++;
}



console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelagzó 3 kgs`);

