const { get } = require("https")

const escola = [{
	name: 'Turma M1',
	alunos: [{
		name: 'Gustavo',
		nota: 8.1
	}, {
		name: 'Ana', 
		nota: 9.3
	}]
}, {
	name: 'Turma M2',
	alunos: [{
		name: 'Giulia',
		nota: 8.9
	}, {
		name: 'Roberto',
		nota: 7.3
	}]
}]

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const Notas = escola.map(getNotasDaTurma);
console.log(Notas);

Array.prototype.flatMap = function(callback) {
	return Array.prototype.concat.apply([], this.map(callback));
}

const NotasFlat = escola.flatMap(getNotasDaTurma);
console.log(NotasFlat);