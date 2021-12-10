function rand( {min = 0, max = 1000} ) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

const obj = {min: 0};
console.log(rand(obj));
console.log(rand({min: 555}));
console.log(rand({}));

// Erro pois, não passando nada ele tenta acessar algo em Undefined
// console.log(rand());