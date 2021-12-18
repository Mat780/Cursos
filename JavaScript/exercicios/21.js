function saude(idade){
	const valorMin = 100;

	if(idade < 10){
		return valorMin + 80;
	} else if(idade <= 30){
		return valorMin + 50;
	} else if(idade <= 60){
		return valorMin + 95;
	} else {
		return valorMin + 130;
	}

}

console.log(`O valor a ser pago é: ${saude(5)}`);
console.log(`O valor a ser pago é: ${saude(20)}`);
console.log(`O valor a ser pago é: ${saude(40)}`);
console.log(`O valor a ser pago é: ${saude(70)}`);