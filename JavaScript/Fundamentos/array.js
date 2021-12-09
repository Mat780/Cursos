const valores = [7.7 , 8.8, 9.9];

console.log(valores[0], valores[1], valores[2], valores[3]);

valores[3] = 10;

console.log(valores[0], valores[1], valores[2], valores[3]);

valores[10] = 1.5;

console.log(valores.length);

valores.pop(10);

console.log(valores);

delete valores[0];

console.log(valores);