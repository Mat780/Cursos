const express = require('express');
const connection = require('./database/connection');
const app = express();

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

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


// Rotas importadas dos controllers
app.use("/", categoriesController);
app.use("/", articlesController);


// Rotas
app.get("/", (req, res) => {

	Article.findAll().then( articles => {
		res.render('index', {articles: articles});
	})

});

app.get("/:slug", (req, res) => {
	const slug = req.params.slug;

	Article.findOne({where: {slug: slug}}).then(article => {
		if(article != undefined) {
			res.render("articles", {article: article});
		} else {
			res.redirect('/');
		}
	}).catch(err => {
		res.redirect('/');
	})
})

app.listen(8080, () => {
	console.log("O servidor está rodando");
});