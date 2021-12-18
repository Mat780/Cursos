function maiorEmenor(vet){

	let maior = vet[0], menor = vet[0];

	for(let i = 1 ; i< vet.length ; i++){
		if(vet[i] > maior){
			maior = vet[i];
		} else if (vet[i] < menor){
			menor = vet[i];
		}
	}

	console.log(`Maior: ${maior}, Menor: ${menor}`);
}

maiorEmenor([10, 5, 8, 4, 18, 7, 14, 22, 1, 9, 32]);