console.log('---------------------------------');
console.log('Inicio do While:');
console.log('---------------------------------');
let contador = 1;
while (contador <= 10){
	console.log(`Contador = ${contador}`);
	contador++;
}

console.log('---------------------------------');
console.log('Inicio do For:');
console.log('---------------------------------');

for(let i = 1; i <= 10; i++) {
	console.log(`Contador = ${i}`);
}

console.log('---------------------------------');
console.log('Percorrendo um array:');
console.log('---------------------------------');

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i = 0; i < notas.length; i++) {
	console.log(`Nota = ${notas[i]}`);
}