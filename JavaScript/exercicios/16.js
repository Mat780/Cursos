function Calc1(n1, op, n2) {
	switch (op) {
		case '+': return n1 + n2;
		case '-': return n1 - n2;
		case '*': return n1 * n2;
		case '/': return n1 / n2;
		default: return 'Error';
	}
}

console.log(Calc1(3, '+', 2));
console.log(Calc1(3, '-', 2));
console.log(Calc1(3, '*', 2));
console.log(Calc1(6, '/', 2));
console.log(Calc1(1, 'A', 2));