function vetor(vet){
	let num = 0;

	for(let i = 0; i < vet.length ; i++){
		num += vet[i];
	}

	console.log(num/vet.length);
}

vetor([1, 2, 3, 4, 5]);