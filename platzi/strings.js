function platzom(str){
	let traslation = str;

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')){
		traslation = str.slice(0, -2);
	}

	//Si la palabra inicia con z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		//traslation = traslation + 'pe';
		traslation += 'pe';
	}

	//Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio
	if(traslation.length >= 10 ) {
		const firstHalf = traslation.slice(0, Math.round(traslation.length / 2));
		const secondHalf = traslation.slice(Math.round(traslation.length / 2));
		traslation = `${firstHalf}-${secondHalf}`;

	}

	//Si la palabra original es un palindromo(se puede leer igual de atars hacia adelante y delante hacia atras)
	/*const reverse = str.split('').reverse.join('');
	
	function minMay(str){

	}

	if(str == reverse(str)){
		return minMay(){

		}
	}*/

	return traslation;
}

console.log(platzom("Programar"));
console.log(platzom('Zorro'));
console.log(platzom('abecedario'));