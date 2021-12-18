function intervalo(vet){
	let qtd = 0;

	for(var i=0; i < vet.length; i++){
		if(vet[i] >= 10 && vet[i] <= 20){
			qtd++;
		}
	}

	return console.log(`Existem ${qtd} numeros dentro do intervalo`);
}

vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 11, 16, 17, 18, 19, 20];

intervalo(vet);