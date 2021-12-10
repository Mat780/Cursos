console.log('01)', 1 == '1'); // Igual?
console.log('02)', 1 === '1'); // ESTRITAMENTE igual?
console.log('03)', '3' != 3); // Diferente?
console.log('04)', '4' !== 4); // ESTRITAMENTE diferente?

console.log('05)', 5 < 4); // Menor que?
console.log('06)', 6 > 5); // Maior que?
console.log('07)', 7 <= 6) // Menor Ou igual?
console.log('08)', 8 >= 7) // Maior ou igual?

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2);
console.log('10)', d1 == d2); 
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', null == undefined); // True, pois representam o vazio
console.log('13)', null === undefined); // False pois servem para propositos diferentes
