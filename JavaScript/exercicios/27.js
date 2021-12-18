function crescer(alt1, alt2, tax1, tax2){
	if(alt1 === alt2){
		if(tax1 === tax2){
			console.log('As duas crianças sempre terão a mesma altura');
		} else if (tax1 > tax2){
			console.log('A criança 1 passará a 2 em um ano');
		} else {
			console.log('A criança 2 passará a 1 em um ano');
		}
	} else {

		let a1 = alt1, a2 = alt2, cont = 0;

		if(alt1 < alt2){
			if(tax1 > tax2){
				while(a1 < a2){
					a1 += tax1;
					a2 += tax2;
					cont++;
				}
				console.log(`A criança 1 passará a 2 em ${cont} anos`);
			} else {
				console.log('A criança 1 não passará a 2');
			}
		} else {
			if(tax1 < tax2){
				while(a1 > a2){
					a1 += tax1;
					a2 += tax2;
					cont++;
				}
				console.log(`A criança 2 passará a 1 em ${cont} anos`);
			} else {
				console.log('A criança 2 não passará a 1');
			}
		}
	}
}


crescer(1, 2, 0.2, 0.1);
crescer(2, 1, 0.1, 0.2);
crescer(3, 1, 3, 0.1);
crescer(4, 5, 4, 5);
crescer(5, 5, 1, 1);