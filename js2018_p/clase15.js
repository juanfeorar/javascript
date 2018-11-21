var contador = 0, contador1 = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

console.log(`Fui a ver si llovía ${contador} veces`);

//Retos identificar si fuí una o más veces para saves si imprime vez o veces

do {
    contador1++; 1
    if (contador1 > 1)
        console.log(`Fui a ver si llovía ${contador1} veces`);
    else
        console.log(`Fui a ver si llovía ${contador1} vez`);
} while (!llueve());