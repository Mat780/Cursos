
// SetTimeOut já é assincrono
// setTimeout(() => {
// 	console.log("Meu nome é Matheus")
// }, 5000);

/*
function sendEmail(body, from,to, callback) {
	setTimeout(() => {
		console.log(`
		Para: ${to}
		----------------------------------
		${body}
		----------------------------------
		De: ${from}
		`);
		callback("Ok", 2, 8);
	}, 5000);
}
*/

console.log("Inicio do envio de email");
console.log("Seu email será enviado em alguns minutos");

// Usei a callback para mostrar a msg que o email foi enviado com sucesso
/*
sendEmail("Olá estou fazendo teste em JavaScript, estudando NodeJs", "Gih", "Matheus", (status, amount, time) => {
	console.log("Seu email foi enviado com sucesso");
	console.log(`
	Status: ${status}
	------------------------
	Contatos: ${amount}
	------------------------
	Tempo de envio: ${time}s`)
});
*/


// Podemos usar as callback para erros também

/*
function sendEmail(body, from,to, callback) {
	setTimeout(() => {
		console.log(`
		Para: ${to}
		----------------------------------
		${body}
		----------------------------------
		De: ${from}
		`);
		
		let error;

		if(error) {
			callback("O envio de email falhou");
		} else {
			callback();
		}

	}, 2000);
}


sendEmail("Olá estou fazendo teste em JavaScript, estudando NodeJs", "Gih", "Matheus", (error = "Ok") => {
	if(error != "Ok") {
		console.log(error);
	} else {
		console.log("Email enviado com sucesso, status: " + error);
	}
})
*/

/*
function sendEmail(body, to){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let error = true;
			console.log("Email enviado");
			if(error) {
				reject(); // Deu ruim não vou cumprir a promessa
			} else {
				resolve(); // Vou conseguir cumprir a promessa
			}

		}, 1000);
	})
}

sendEmail("Corpo", "Eu mesmo").then(() => {
	console.log("Você conseguiu fazer o que prometeu!");
}).catch(err => {
	console.log("Deu ruim");
})
*/


function pullUsers(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{name: "John", lang: "JS"},
				{name: "Mats", lang: "C"},
				{name: "Roney", lang: "JS"},
				{name: "Gih", lang: "C"},
			])
		}, 2000);
		
	});
};

pullUsers().then((users) => {
	console.log(users);
})

async function main() {
	const users = await pullUsers();
	console.log(users);

}

// Await BLOQUEIA O FLUXO , then e catch NÃO 
