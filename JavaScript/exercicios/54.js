const objetoParaArray = obj => {
	const res = []
	for (let key in obj) res.push([ key, obj[key] ]);
	return res;
}

console.log(objetoParaArray({
	nome: "Maria",
	profissao: "Desenvolvedora de software"
}));

console.log(objetoParaArray({
	codigo: 11111,
	preco: 12000
}));