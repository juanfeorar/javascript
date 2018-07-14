function suma(...sumandos) {
	let acum = 0;
	for (let i = 0; i < sumandos.length; i++) {
		acum += sumandos[i];
	}
	return acum;
}

suma(4,8,12, 8954, 7);

function suma1(...numeros) {
	const resultado = numeros.reduce(
		function(acum, numero){
			acum += numero
			return acum 
		},0)
	return resultado;
}

suma