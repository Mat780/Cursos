jurosSimples = (init_cap, tax, time_app) => init_cap + (init_cap * tax * time_app);
	
function jurosComplex(init_cap, tax, time_app){
	let time = time_app;
	let cap = init_cap;
	while(time != 0){
		cap += cap * tax;
		time--;
	}

	return cap.toFixed(2);
}


console.log(jurosSimples(100, 0.10, 3));
console.log(jurosComplex(100, 0.10, 10));
