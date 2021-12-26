const filtrarNumeros = array => array.filter(e => typeof e === 'number');

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []