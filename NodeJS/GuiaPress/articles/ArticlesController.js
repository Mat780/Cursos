const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');

router.get("/adm/articles", (req, res) => {
	Article.findAll({
		include: [{model: Category}]
	}).then( articles => {
		res.render('adm/articles/index', {articles: articles})
	});
});

router.get("/adm/articles/new" , (req, res) => {
	Category.findAll().then( categories => {
		res.render("adm/articles/new", {categories: categories} );
	});
	
});

router.post("/articles/save", (req, res) => {
	let title = req.body.title;
	const body = req.body.body;
	const category = req.body.category;

	Article.create({
		title: title,
		slug: slugify(title),
		body: body,
		categoryId: category
	}).then(() => {
		res.redirect("/adm/articles");
	});

});

router.post("/articles/delete", (req, res) => {
	const id = req.body.id;
	
	if(id != undefined){

		if(!isNaN(id)){

			Article.destroy({
				where: {
					id: id
				}
			}).then(() => {
				res.redirect("/adm/articles");
			});

		} else {
			res.redirect("/adm/articles");
		}

	} else {
		res.redirect("/adm/articles");
	}
});

module.exports = router;