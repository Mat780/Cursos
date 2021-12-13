function teste1(num){
	if(num > 7) // Só vai aceitar 1 linha de código dentro do if (tipo em C)
		console.log(num);
		console.log('Final');
	
}

teste1(6);
teste1(8);

function teste2(num){
	if(num > 7); { // Não associar ; com estruturas de controle, pois pode acabar dando problemas lógicos
		console.log(num);
	}
}

teste2(6);
teste2(8);