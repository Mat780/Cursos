const fs = require('fs');


fs.writeFile('./matheus', "Mudei o conteudo :P", (err) => {

	if(err) {
		console.log("Aconteceu um erro durante o salvamento");
	}

})