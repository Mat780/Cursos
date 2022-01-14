const express = require('express');
const app = express();
const http = require('http').createServer(app); // Necessário para rodarem no mesmo server socket.io e express
const io = require('socket.io')(http);

io.on("connection", (socket) => {

	socket.on("disconnect", () => {
		console.log("X desconectou " + socket.id);
	})
	
	socket.on("boasvindas", (data) => {
		console.log('BOAS VINDAS')
		console.log(data);
	});

	socket.on("palavra", data => {
		console.log('PALAVRAS:')
		socket.emit('resultado', data + " - NodeJS");
	});

});

app.set("view engine", 'ejs');

app.get("/", (req, res) => {
	res.render('index'); 
});


http.listen(3000, () => {
	console.log('Servidor backend rodando')
});