function triangulo(a, b, c) {

	if(a == b && b == c){
		console.log('Equilatero');
	}else if (a == b || b == c || a == c){
		console.log('Isósceles');
	} else if (a != b && b != c && a != c){
		console.log('Escaleno');
	}
}

triangulo(1, 1, 1);
triangulo(2, 2, 1);
triangulo(1, 2, 3);