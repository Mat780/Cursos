let a = 7;
let b = 94;
let aux = a;

a = b;
b = aux;

// OU 

[a, b] = [b, a];

console.log(a, b);