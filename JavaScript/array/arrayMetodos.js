const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop() // Remove o ultimo
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode add e remover, params: Index Inicial* , Qtd , ...Add
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // Novo Array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);