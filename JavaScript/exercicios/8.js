function pontuacao(strPont){

	let vPont = strPont.split(', ');
	let piorJogo = 1;
	let maiorPont = vPont[0];
	let menorPont = vPont[0];
	let quebraRecord = 0;

	for (let c = 1; c < vPont.length; c++) {
		if (parseInt(vPont[c]) > maiorPont){
			maiorPont = vPont[c];
			quebraRecord++;
		} else if (parseInt(vPont[c]) < menorPont){
			menorPont = vPont[c];
			piorJogo = c + 1;
		}
	}

	return [quebraRecord, piorJogo];
}

let strPont = "10, 20, 50, 80, 5, 30, 56, 2, 100, 0"
console.log(pontuacao(strPont));

strPont = "10, 20, 20, 8, 25, 3, 0, 30, 1"
console.log(pontuacao(strPont));