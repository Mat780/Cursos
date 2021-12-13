Number.prototype.entre = function (inicio, fim){
	return this >= inicio && this <= fim 
}

const imprimirResultado = function (nota) {
	if(nota.entre(9,10)){
		console.log('Quadro de Honra');
	} else if (nota.entre(6, 8.99)){
		console.log('Aprovado');
	} else if (nota.entre(3, 5.99)){
		console.log('Recuperação');
	} else if (nota.entre(0, 2.99)){
		console.log('Reprovado');
	} else {
		console.log('Inválido');
	}
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(5.55);
imprimirResultado(2.3);
imprimirResultado(-5);
imprimirResultado(11);