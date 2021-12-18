function imprimir(ini = 0, fim = 100){
	if(ini > fim) [ini, fim] = [fim, ini];

	for(let i = ini; i < fim; i++){
		if(i % 2 == 1 || i % 2 == -1){
			console.log(i);
		}
	}
	console.log('--- FIM ---');
}

imprimir(100, 0);
imprimir(200);
imprimir(-100, 50);