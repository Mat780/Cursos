function rand([min = 0, max = 1000]){
	if (min > max) [min, max] = [max, min];
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([991]));
console.log(rand([, 10]));
console.log(rand([]));


// Isto daria um erro pois ele tentara ver algo dentro de Undefined
// console.log(rand()); 