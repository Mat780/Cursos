// Coleção dinamica de pares chave/valor
const produto = new Object;
produto.name = 'Cadeira';
produto['product brand'] = 'Generica';
produto.price = 220;

console.log(produto);
delete produto.price;
delete produto['product brand'];
console.log(produto);

const carro = {
	model: 'A4',
	value: 89000,
	owner: {
		name: 'Matheus',
		age: 18,
		address: {
			street: 'Castelo Branco',
			number: 1003
		}
	},

	conduct: [{
		name: 'Junior',
		age: 19,
	}, {
		name: 'Ana',
		age: 21,
	}],
	calculateValue: function() {
		// ...
	}
}

carro.owner.address.number = 1002;
carro['owner']['address']['street'] = 'Coronel Antonino';

console.log(carro);

delete carro.conduct;
delete carro.owner.address;
delete carro.calculateValue;

console.log(carro);

