const carrinho = [
	'{"name": "Borracha", "price": 3.45}',
	'{"name": "Caderno", "price": 13.90}',
	'{"name": "Kit de lapis", "price": 41.22}',
	'{"name": "Caneta", "price": 7.50}'
];

let result = carrinho.map(e => {
	e = JSON.parse(e);
	return e.price;
});

console.log(result);