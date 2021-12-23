console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('Adrian');
console.log(aprovados[4]);
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);

// aprovados.forEach(i => console.log(i === undefined ? `Posição ${aprovados.indexOf(i)} é Undefined` : `Não é undefined`))

// console.log(aprovados[8] === undefined ? 'Esta posição é Undefined' : 'Não é undefined');

for(let i = 0; i < aprovados.length; i++){
	console.log(aprovados[i] === undefined ? `Posição ${i} é Undefined` : `Posição ${i} não é undefined`);
}

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

for(let i = 0; i < aprovados.length; i++){
	console.log(aprovados[i] === undefined ? `Posição ${i} é Undefined` : `Posição ${i} não é undefined`);
}

delete aprovados[1];

console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2'); // Ele retira de tal posição a tal posição e ainda adicionar elementos
console.log(aprovados);