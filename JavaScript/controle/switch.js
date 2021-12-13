const imprimirResultado = (nota) => {
	switch (Math.floor(nota)){
		case 10:
		case 9:
			console.log('Quadro de Honra!');
			break;
		case 8: case 7: case 6:
			console.log('Aprovado!');
			break;
		case 5: case 4: case 3:
			console.log('Recuperação');
			break;
		case 2: case 1: case 0:
			console.log('Reprovado');
			break;
		default:
			console.log('Nota inválida');
	}
}

// Break é necessário para que após entrar em um dos casos ele não saia executando os outros cases abaixo

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(5.55);
imprimirResultado(2.3);
imprimirResultado(-5);
imprimirResultado(11);