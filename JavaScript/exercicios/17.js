function aumento(salario, plano){
	let new_salario = salario;
	switch(plano){
		case 'A': new_salario += salario * 0.1; break;
		case 'B': new_salario += salario * 0.15; break;
		case 'C': new_salario += salario * 0.2; break;
		default: console.log('Invalido'); return;
	}

	console.log(`Com o seu aumento, seu novo salario é de: ${new_salario}`);

}

aumento(1000, 'A');
aumento(1000, 'B');
aumento(1000, 'C');
aumento(1000, 'D');
