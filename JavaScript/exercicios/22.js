function fun(mes, anuidade) {
	if(mes > 0 && mes < 13) {
		return (anuidade * (1 + 0.05)**(mes - 1)).toFixed(2);
	} else {
		return 'Mês invalido';
	}
}

console.log(fun(1, 100));
console.log(fun(12, 100));
console.log(fun(-1, 100));
console.log(fun(13, 100));