const nums = [1, 2, 3, 4, 5];

// For com proposito

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$: ${parseFloat(e).toFixed(2).replace('.', ',')}`

let result = nums.map(function(e) {
	return e * 2;
})


// Ordem importa, pois o + a esquerda é feito primeiro;
result = nums.map(soma10).map(triplo).map(paraDinheiro);


console.log(result);

