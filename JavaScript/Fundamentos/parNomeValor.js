// Par nome/valor
const saudacao = 'Opa bom?'; // Contexto léxico 1;

function exe(){
	const saudacao = 'Falaaaa'; // Contexto léxico 2;
	return saudacao;
}


// Objetos são grupos aninhados de pares nome/valor;

const cliente = {
	name: 'Matheus',
	age: 18,
	weight: 85,
	address: {
		street: 'Castelo Branco',
		number: 1003
	}
}

console.log(saudacao);
console.log(exe());
console.log(cliente);