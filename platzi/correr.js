const nombre = "sacha";
const dias = [
	"lunes", 
	"martes", 
	"miércoles", 
	"jueves", 
	"sábado", 
	"domingo"
]

function correr() {
	const min = 5;
	const max = 15;
	return Math.floor(Math.random() * (max-min)) + min;
}

let totalKms = 0;
const length = dias.length
for (let i = 0; i < length; i ++) {
	const kms = correr();
	totalKms += kms;
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`);

}

const promedioKms = totalKms / length
console.log(`En promedio  ${nombre} corrió ${promedioKms}`);