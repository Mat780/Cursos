const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect("mongodb://localhost:27017/aprendendoMongo");

const Article = mongoose.model("Article", articleModel);

// const artigo = new Article({
// 	title: "Algo",
// 	author: "Matheus", 
// 	body: "Algo algo algo",
// 	special: true,
// 	resume: {
// 		content: "Bla bla bla",
// 		author: "Matheus"
// 	}
// });

// artigo.save().then(() => {
// 	console.log("Artigo salvo");
// }).catch(err => {
// 	console.log(`Erro: ${err}`);
// });

// Article.findByIdAndDelete('61e038cf6604835e5b84207c').then(() => {
// 	console.log('Dado removido');
// }).catch(err => {
// 	console.log(`Erro: ${err}`);
// });

Article.findByIdAndUpdate('61e038be4b329e1d4a0f5236', {title: 'Modificado'}).then( (article) => {
	console.log(`Modificado: ${article}`);
}).catch(err => console.log(err));


Article.find({}).then( articles => {
	console.log(articles);
}).catch(err => {
	console.log(err);
})