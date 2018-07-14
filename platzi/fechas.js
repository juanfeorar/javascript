const HOY = new Date();
const MY_BIRTH = new Date(1981, 1, 13);
const tiempo = HOY - MY_BIRTH;
let tiempoSegundos = tiempo/1000;
let tiempominutos = tiempoSegundos/60;
let tiempoHoras = tiempominutos/60;
let tiempoDias = tiempoHoras/24;
let tiempoMeses = tiempoDias/30;
let tiempoAnios = tiempoMeses/12;
let proximoCumple = new Date(HOY.getFullYear(), MY_BIRTH.getMonth(), MY_BIRTH.getDate());
let weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] 
console.log(`He vivido la media bobadita de ${tiempo} milisegundo, ${tiempoSegundos} segundos, 
	${tiempominutos} minutos, ${tiempoHoras} horas, ${tiempoDias} días, ${tiempoMeses} meses 
	y ${tiempoAnios} años. Mi próximo cumpleaños es: ${proximoCumple}`);