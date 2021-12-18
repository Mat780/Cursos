function pa(n, a1, r){
	let prog = [a1]

	for (let i = 1; i < n; i++){
		prog.push(prog[i-1] + r);
	}

	return prog;
}

function pg(n, a1, r){
	let prog = [a1]

	for (let i = 1; i < n; i++){
		prog.push(prog[i-1] * r);
	}

	return prog;
}

console.log(pa(10, 1, 1));
console.log(pg(10, 1, 2));