const express = require ('express');
const app = express();
const connection = require('./database/connection');

// Database connection

connection.authenticate()
	.then( () => {
	console.log("Conexão com o banco de dados!");
	})
	.catch(err => {
	console.log(err);
	})

// Estou dizendo para o express usar o EJS como view engine
app.set('view engine', 'ejs');

// Estou dizendo para o express usar os arquivos staticos em public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Rotas 
app.get('/', (req, res) => {
	res.render('index');
})

app.get('/perguntar', (req, res) => {
	res.render('perguntar');
})

app.post('/salvarPergunta', (req, res) => {
	var title = req.body.title;
	var desc = req.body.desc;
	res.send("Formulário recebido! titulo " + title + " descrição " + desc);
})

app.listen(8080, (req, res) => {
	console.log("App rodando");
})