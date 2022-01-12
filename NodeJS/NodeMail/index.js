const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	security: true,
	auth: {
		user: 'duckhealthmega@gmail.com',
		pass: 'MegaPS2021'
	}
});


transporter.sendMail({
	from: 'DuckHealth <duckhealthmega@gmail.com>',
	to: 'mateusfelipe10@live.com',
	subject: 'Testando nodeMailer',
	text: 'Testando nodeMailer',
	html: '<p>Olá sou <strong>Matheus Felipe A. Durães</strong> e essa é minha mensagem de email</p>'
}).then(message => {
	console.log(message);
}).catch(err => {
	console.log(err);
})