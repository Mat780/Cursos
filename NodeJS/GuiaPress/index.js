const express = require('express');
const session = require("express-session");
const connection = require('./JS/database/connection');
const app = express();

const categoriesController = require('./JS/categories/CategoriesController');
const articlesController = require('./JS/articles/ArticlesController');
const usersController = require('./JS/users/UserController');

const Article = require('./JS/articles/Article');
const Category = require('./JS/categories/Category');
const User = require('./JS/users/User');

const favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/fav-icon.png'));

// View engine
app.set('view engine', 'ejs');

// Sessions
app.use(session({
	secret: "mInha_NamorAda_É_MT_linda_SocoRRo",
	cookie: {maxAge: 30000}
}))

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


// Rotas importadas dos controllers
app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);


// Rotas
app.get("/", (req, res) => {

	Article.findAll({order: [['id', 'DESC']], limit: 4}).then( articles => {

		Category.findAll().then(categories => {
			res.render('index', {articles: articles, categories: categories});
		})

	});

});

app.get("/session", (req, res) => {
	req.session.treinamento = "Formação NodeJS";
	req.session.ano = 2021;
	req.session.user = {
		username: "Matheus",
		email: "mateusfelipe10@live.com",
		id: 1
	};

	res.send("Sessão gerada");
});

app.get("/reading", (req, res) => {
	res.json({
		treinamento: req.session.treinamento,
		ano: req.session.ano,
		user: req.session.user
	});
});

app.get("/:slug", (req, res) => {
	const slug = req.params.slug;

	Article.findOne({where: {slug: slug}}).then(article => {
		if(article != undefined) {
			Category.findAll().then(categories => {
				res.render('article', {article: article, categories: categories});
			})
		} else {
			res.redirect('/');
		}
	}).catch(err => {
		res.redirect('/');
	});
});

app.get('/category/:slug', (req, res) => {
	const slug = req.params.slug;

	Category.findOne({
		where: {slug: slug},
		include: [{model: Article}]
	}).then( category => {
		console.log(category);
		if(category != undefined){

			Category.findAll().then( categories => {
				res.render("index", {articles: category.articles, categories: categories});
			});

		} else {
			res.redirect('/');
		}

	}).catch(err => {
		res.redirect('/');
	});
});

app.listen(8080, () => {
	console.log("O servidor está rodando");
});