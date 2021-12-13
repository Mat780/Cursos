const imprimirNota = (nota) => {
	if(nota >= 7){
		console.log('Aprovado com ' + nota + '!'); 
	} else {
		console.log('Reprovado!');
	}
}

imprimirNota(8);
imprimirNota(6);
imprimirNota('Epa!'); // Cuidado, é necessário tratamento