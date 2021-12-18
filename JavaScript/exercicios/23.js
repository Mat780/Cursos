function nota(n1, n2, n3) { 
	let maiorNota;
	let outrasNotas;

	if(n1 > n2 && n1 > n3) {
		maiorNota = n1;
		outrasNotas = [n2, n3];
	} else if (n2 > n1 && n2 > n3) {
		maiorNota = n2;
		outrasNotas = [n1, n3];
	} else {
		maiorNota = n3;
		outrasNotas = [n1, n2];
	}

	if(maiorNota * 0.4 + (outrasNotas[0] + outrasNotas[1]) * 0.3 >= 5){
		return 'Aprovado';
	} else {
		return 'Reprovado';
	}

}

console.log(nota(10,10,10));
console.log(nota(10, 1, 1));