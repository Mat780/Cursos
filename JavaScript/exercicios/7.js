function bask(quad, base, num) {
	let a = quad.split('x')[0];
	a = parseInt(a, 10);
	
	let b = base.split('x')[0];
	b = parseInt(b, 10);

	const c = parseInt(num, 10);

	const delta = b**2 - (4*a*c);

	if(delta > 0) {
		const op1 = ( (-b) + Math.sqrt(delta)) / (a*2);
		const op2 = ( (-b) - Math.sqrt(delta)) / (a*2);
		return [op1, op2];
	} else {
		return 'Delta é negativo!';
	}


	
}

console.log(bask('3x2', '-5x', '12'));
console.log(bask('1x2', '12x', '-13'));