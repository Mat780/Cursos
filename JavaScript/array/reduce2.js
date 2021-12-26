const alunos = [
	{ name: 'Maria', nota: 7.3, bolsista: false},
	{ name: 'João', nota: 9.4, bolsista: true},
	{ name: 'Pedro', nota: 10, bolsista: false},
	{ name: 'Marcel', nota: 4, bolsista: true}
];

// Desafio 1: Todos os alunos são bolsistas?
// Desafio 2: Algum aluno é bolsista?

console.log('Def1 Iniciado');

const def1 = alunos.map(e => e.bolsista).reduce(function (res, att){
	console.log(`Res: ${res}  Att: ${att}`);
	if(res === true){
		return att;
	} else {
		return false;
	}
}, true)

if(def1){
	console.log('Def1 Errado');
} else {
	console.log('Def1 Certo');
}

console.log('----------------------------\n' ,'\bDef2 Iniciado');

const def2 = alunos.map(e => e.bolsista).reduce(function(res, att){
	console.log(`Res: ${res}  Att: ${att}`);
	if(res === true || att === true){
		return true;

	} else {
		return false;
	};
}, false);

if(!def2){
	console.log('Def2 Errado');
} else {
	console.log('Def2 Certo');
}