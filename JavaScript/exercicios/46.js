const inverso = param => {
	const ty = typeof param
	if(ty === 'string'){
		return console.log("booleano ou números esperado, mas o parâmetro é do tipo " + ty);
	} else {
		if(ty === 'number'){
			return console.log(-param);
		} else {
			return console.log(!param);
		}
	}
}

inverso("6");
inverso(2000);
inverso(true);
inverso('Programação');