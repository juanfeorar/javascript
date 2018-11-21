var signo = prompt('¿Cual es tu signo?');

console.log(signo);

switch (signo) {
    case 'Piscis':
        console.log(signo);
        break;
    case 'Acuario':
        console.log(signo + ' el mio');
        break;
    case 'Cancer':
    case 'Cáncer':
    case 'cancer':
        console.log(signo);
        break;
    case 'Geminis':
    case 'Géminis':
    case 'geminis':
    case 'géminis':
        console.log(signo + ' adentro');
        break;
    default:
        console.log('No es un signo zodiacal válido');
        break;
}