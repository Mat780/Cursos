const expo = function(n, xp) {
	let num = n;
	for(let i = 1; i < xp; i++){
		num *= n;
	}

	return num;
}

console.log(expo(10, 1));
console.log(expo(10, 2));
console.log(expo(3, 4));