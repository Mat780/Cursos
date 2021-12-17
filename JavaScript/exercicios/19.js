function lanchonete(cod, qtd = 1){
	switch(cod){
		case 100: return `R$${(qtd * 3).toFixed(2)}`;
		case 200: return `R$${(qtd * 4).toFixed(2)}`;
		case 300: return `R$${(qtd * 5.5).toFixed(2)}`;
		case 400: return `R$${(qtd * 7.5).toFixed(2)}`;
		case 500: return `R$${(qtd * 3.5).toFixed(2)}`;
		case 600: return `R$${(qtd * 2.8).toFixed(2)}`;
		default: return 'Produto não existe';
	}
}

console.log(lanchonete(100, 4));
console.log(lanchonete(200, 5));
console.log(lanchonete(300, 3));
console.log(lanchonete(400, 4));
console.log(lanchonete(500, 8));
console.log(lanchonete(600, 1));
console.log(lanchonete(101, 1));