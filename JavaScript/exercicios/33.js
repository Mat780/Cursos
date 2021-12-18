const vetInt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const vetStr = ['Matheus', 'Giovanna', 'Roney'];
const vetDouble = [1.1, 1.2, 1.3, 1.4, 1.5];

console.log(vetInt.concat(vetStr));
console.log(vetStr.concat(vetDouble));
console.log(vetStr.concat(vetInt, vetDouble));
console.log(vetInt.concat([1.1, 1.2, 1.3, 1.4, 1.5], ['Matheus', 'Giovanna', 'Roney']));

