let numeros = [];

let cont = 0;

while (cont <= 50){
	numeros.push(cont);
	cont++;
}

cont = 0;

while (cont <= 50){
	if(numeros[cont] % 2 == 0){
		console.log('PAR: ' + numeros[cont]);
	} else {
		console.log('IMPAR: ' + numeros[cont]);
	}
	cont++;
}