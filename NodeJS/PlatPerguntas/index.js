const express = require ('express');
const app = express();
const connection = require('./database/connection');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

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

// GET
app.get('/', (req, res) => { // ASC = crescente    DESC = decrescente 
	Pergunta.findAll( {raw: true, order:[ ['id', 'DESC'] ]} ).then(question => {
		res.render('index', {questions: question});
	});
	
});

app.get('/perguntar', (req, res) => {
	res.render('perguntar');
});

app.get('/pergunta/:id', (req, res) => {
	var idQuestion = req.params.id;
	Pergunta.findOne({ where: {id: idQuestion} }).then(question => {

		if(question != undefined){ // Pergunta encontrada

			Resposta.findAll({where: {perguntaId: idQuestion}, order:[ ['id', 'DESC'] ] }).then(response => {
				res.render('pergunta', {
					question: question,
					respostas: response
				});
			});

		} else { // Não encontrada
			res.redirect('/');
		}

	});
});

// POST
app.post('/salvarPergunta', (req, res) => {
	var title = req.body.title;
	var desc = req.body.desc;
	Pergunta.create({
		titulo: title,
		descrição: desc

	}).then(() => {
		res.redirect('/');
	});
});

app.post("/responder", (req, res) => {
	var corpo = req.body.corpo;
	var questionId = req.body.questionId;
	Resposta.create({
		corpo: corpo,
		perguntaId: questionId
	}).then(() => {
		res.redirect("/pergunta/" + questionId);
	});
});


// Listen
app.listen(8080, (req, res) => {
	console.log("App rodando");
});