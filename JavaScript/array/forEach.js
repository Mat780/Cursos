const aprovados = ['Agatha', 'Aldo', 'Daniele', 'Raquel'];

                    /*  1: Value 2: Index 3: Array  */
aprovados.forEach(function (name, index, array) {
	console.log(`${index + 1}: ${name}`);
	if (index === 3){
		console.log(array);
	}
});

console.log('----------------------------------------');

aprovados.forEach(name => console.log(name));

console.log('----------------------------------------');

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);