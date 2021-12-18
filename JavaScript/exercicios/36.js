function multVet1(vet, num){
	for(let i = 0; i < vet.length; i++){
		vet[i] *= num;
	}

	return vet;
}

function multVet2(vet, num){
	if(num >= 5){
		for(let i = 0; i < vet.length; i++){
			vet[i] *= num;
		}
	
	}

	return vet;
}


console.log(multVet1([1, 2, 3, 4, 5], 2));
console.log(multVet2([1, 2, 3, 4, 5], 5));