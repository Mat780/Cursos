const valor = 'Global';

function minhaFun(){
	console.log(valor);
}

minhaFun();

function exe(){
	const valor = 'Local';
	minhaFun();
}

exe();