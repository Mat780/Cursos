function din(num){
	let str = 'R$' + num.toFixed(2);
	return str.replace('.', ',');
}

console.log(din(0.1 + 0.2));