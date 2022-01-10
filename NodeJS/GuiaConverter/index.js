const fs = require('fs');

function modifyUser(name, course, category){		
	fs.readFile("./usuario.json", {encoding: 'utf8'}, (err, data) => {
		if(err) throw err;

		let conteudo = JSON.parse(data);
		conteudo.name = name;
		conteudo.course = course;
		conteudo.category = category;
		console.log(conteudo);

		fs.writeFile('./usuario.json', JSON.stringify(conteudo) , (err, data) => {
			if(err) throw err;

			console.log("Tudo certo");
		})
	})
}

modifyUser("Matheus", "Formação NodeJs", "NodeJs");