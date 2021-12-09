const nome = "Giovanna";
const concatenacao = 'Olá ' + nome + '!';
const template = `
	Olá
	${nome} meu amor
	!`

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);