function negativos(vet){

	let negativos = 0;

	for(let c = 0; c < vet.length; c++){
		if(vet[c] < 0){
			negativos++;
		}
	}

	console.log(negativos);
}

negativos([0, -2, 10, 8, -5, -10, 8, 9, -1, -2]);