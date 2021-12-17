function sellCars(brand){
	switch(brand){
		case 'Hatch': return 'Compra efetuada com sucesso';
		case 'Sedans': return 'Tem certeza que não prefere este modelo?';
		case 'Motos': return 'Tem certeza que não prefere este modelo?';
		case 'Caminhonetes': return 'Tem certeza que não prefere este modelo?';
		default: return 'Não trabalhamos com este modelo aqui';
	}
}

console.log(sellCars('Hatch'));
console.log(sellCars('Sedans'));
console.log(sellCars('Motos'));
console.log(sellCars('Caminhonetes'));
console.log(sellCars('Aoooo'));