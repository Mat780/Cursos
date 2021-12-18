function troca(vet1, vet2) {
	return [vet2,vet1];
}

let vet1 = [1, 2, 3, 4, 5, 6];
let vet2 = [7, 8, 9, 10, 11, 12];

[vet1, vet2] = troca(vet1, vet2);

console.log(vet1,vet2);