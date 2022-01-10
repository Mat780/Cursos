const fs = require('fs');


fs.readFile("./matheus", {encoding: 'utf8'} ,(error, data) => {

	if(error) {
		console.log("Ocorreu uma falha na leitura");
	} else {
		console.log(data)
	}

});