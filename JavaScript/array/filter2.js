Array.prototype.filter2 = function (callback) {
	const vetor = [];

	for (let i = 0; i < this.length; i++){
		if(callback(this[i], i , this)){
			vetor.push(this[i]);
		}
	}

	return vetor;
}


const produtos = [
	{name: 'Notebook', price: 2499, fragile: true},
	{name: 'iPad pro', price: 4199, fragile: true},
	{name: 'Copo de vidro', price: 12.49, fragile: true},
	{name: 'Copo de plastico', price: 18.99, fragile: false}
];


// Filter menor que o original
console.log(produtos.filter(function (p) {
	if(p.fragile){
		return true;
	} else {
		return false;
	}
}));

const caro = produto => produto.price >= 500;
const fragile = produto => produto.fragile;

console.log(produtos.filter2(caro).filter2(fragile))