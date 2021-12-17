function sistemaNotas(n) {
	let nota = n;

	if(nota > 37 && (Math.ceil(nota / 5) * 5) - nota < 3){
		nota += 5 - (nota % 5);
	}

	if(nota >= 40){
		console.log(`Aprovado com nota: ${nota}`);
	} else {
		console.log(`Reprovado com nota: ${nota}`);
	}

}

sistemaNotas(37);
sistemaNotas(38);
sistemaNotas(84);
sistemaNotas(29);