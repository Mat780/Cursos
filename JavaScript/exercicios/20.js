function notas(dindin){
	let n = dindin;
	let aux;

	aux = Math.floor(n / 100);
	if(aux != 0){
		console.log(`${aux} Notas de R$100`);
		n -= aux * 100;
	}

	aux = Math.floor(n / 50);
	if(aux != 0){
		console.log(`${aux} Notas de R$50`);
		n -= aux * 50;
	}

	aux = Math.floor(n / 10);
	if(aux != 0){
		console.log(`${aux} Notas de R$10`);
		n -= aux * 10;
	}

	aux = Math.floor(n / 5);
	if(aux != 0){
		console.log(`${aux} Notas de R$5`);
		n -= aux * 5;
	}

	if(n != 0){
		console.log(`${n} Notas de R$1`);
	}

	console.log('---------------------------------------');
	console.log('                  FIM');
	console.log('---------------------------------------');
}

notas(18);
notas(123);