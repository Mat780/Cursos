function avaliar(vetNotas){
	const avaliado = [];
	
	for(let c = 0; c < vetNotas.length; c++) {
		if(vetNotas[c] >= 0.0 && vetNotas[c] < 5){
			avaliado.push('D');

		} else if(vetNotas[c] < 7 && vetNotas[c] >= 5){
			avaliado.push('C');

		} else if(vetNotas[c] < 9 && vetNotas[c] >= 7){
			avaliado.push('B');

		} else if(vetNotas[c] <= 10 && vetNotas[c] >= 9){
			avaliado.push('A');

		} else {
			avaliado.push('Nota inválida');
		}
	}

	return avaliado;
}

console.log(avaliar([-1 , 4, 6, 8, 10]));

