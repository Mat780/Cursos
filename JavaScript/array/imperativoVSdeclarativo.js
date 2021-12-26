const alunos = [
	{name: 'Maria', nota: 7.3},
	{name: 'John', nota: 9.2}
];

// Imperativo, importa + o passo a passo
let total = 0;
for(let i = 0; i < alunos.length; i++) {
	total += alunos[i].nota;
}

console.log(total / alunos.length);

// Declarativo, o que importa é o resultado
const getNotas = aluno => aluno.nota;
const somas = (total, att) => total + att;
const total2 = alunos.map(getNotas).reduce(somas);
console.log(total2 / alunos.length);