const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
	console.log(i, notas[i]);
}

const pessoa = {
	name: 'Ana',
	lastName: 'Silva',
	age: 29,
	weight: 64
}

for (let atributo in pessoa) {
	console.log(`${atributo} = ${pessoa[atributo]}`);
}