const funcs = [];

for (var i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i);
	});

};

// Será o mesmo resultado, já que a variavel é global
funcs[2]();
funcs[8]();