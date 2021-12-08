const express = require('express');
const connection = require('./database/connection');
const app = express();

// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Database
connection.authenticate()
	.then(() => {
		console.log('Conexão com o BD feita com sucesso');
	}).catch(err => {
		console.log(err);
	})

// Rotas
app.get("/", (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log("O servidor está rodando");
});