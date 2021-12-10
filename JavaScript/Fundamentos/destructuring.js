// Novo recurso do ES2015

const pessoa = {
	name: 'Matheus',
	age: 18,
	address: {
		street: 'Castelo Branco',
		number: 1003
	}
};

const { name, age } = pessoa;
console.log(name, age);


const {name: n, age: a} = pessoa;
console.log(n, a);


const {sobreNome, bemHumorado = true} = pessoa;
console.log(sobreNome, bemHumorado);


const {address: {street, number, cep}} = pessoa;
console.log(street, number, cep);

// Não se pode acessar algo dentro de algo que não está definido
// const {conta: {ag, num}} = pessoa;
// console.log(ag, num);
