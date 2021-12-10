const funcs = [];

for (let i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i);
	});

};

// Saira como esperado já que cada variavel terá seu escopo na função
funcs[0]();
funcs[2]();
funcs[6]();
funcs[8]();