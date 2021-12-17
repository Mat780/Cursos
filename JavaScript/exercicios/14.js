function vendinha(fruta){
	switch(fruta){
		case "Maçã": return "Não vendemos está fruta aqui";
		case "Kiwi": return "Estamos com escassez de kiwis";
		case "Melancia": return "Aqui está, são 3 reais o quilo";
		default: return "ERRO 404";
	}
}

console.log(vendinha('Maçã'));
console.log(vendinha('Kiwi'));
console.log(vendinha('Melancia'));
console.log(vendinha('Oi'));