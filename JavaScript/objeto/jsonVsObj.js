const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} };

// Não carrega a função
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); Não funciona
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); Não funciona
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // Funciona
console.log(JSON.parse('{ "a": 1, "aa": 1.5, "b": "string", "c": true, "d": {}, "e": [] }'));