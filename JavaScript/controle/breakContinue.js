const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('---------------------------------');
console.log('Break:');
console.log('---------------------------------');

for (let x in nums) {
	if (x == 5) break;
	console.log(`${x} = ${nums[x]}`);
}

console.log('---------------------------------');
console.log('Continue:');
console.log('---------------------------------');

for (let y in nums) {
	if (y == 5) continue;
	console.log(`${y} = ${nums[y]}`);
}

console.log('---------------------------------');
console.log('Break especifico:');
console.log('---------------------------------');

// Não utilize, forma arcaica de se estruturar código

externo:
for(let a in nums) {
	for(let b in nums){
		if(a == 2 && b == 3) break externo;
		console.log(`${a}, ${b}`);
	}
}