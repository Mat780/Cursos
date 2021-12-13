// Function declaration, acontece Hoisting	
function soma(x, y) {
	return x + y;
}

// Function expression, não acontece Hoisting
const sub = function(x, y) {
	return x - y;
}

// Named function expression, não acontece Hoisting
const mult = function mult(x, y) {
	return x * y;
}

