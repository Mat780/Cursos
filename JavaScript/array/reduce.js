const alunos = [
	{ name: 'Maria', nota: 7.3, bolsista: false},
	{ name: 'João', nota: 9.4, bolsista: true},
	{ name: 'Pedro', nota: 10, bolsista: false},
	{ name: 'Marcel', nota: 4, bolsista: true}
];

const result = alunos.map(a => a.nota).reduce(function (acumulator, att) {
	console.log(acumulator, att);
	return acumulator + att;
}, 0);

console.log(result);