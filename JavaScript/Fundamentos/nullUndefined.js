let valor; // Está vazio ou seja undefined
console.log(valor);

valor = null; // Ausencia de valor;

console.log(valor); 

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;

console.log(produto.preco);

produto.preco = undefined; // Evite atribuir undefined

console.log(!!produto.preco);
console.log(produto.preco);
