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

router.get("/adm/articles/edit/:id", (req, res) => {
	const id = req.params.id
	

	if(isNaN(id)){
		res.redirect("/adm/articles");
	}

	Article.findByPk(id).then( article => {
		if(article != undefined){

			Category.findAll().then( categories => {
				res.render("adm/articles/edit", {article: article, categories: categories});
			})

		} else {
			res.redirect("/adm/articles");
		}

	}).catch(err => {
		res.redirect("adm/articles");
	})
});

router.get("/articles/page/:num", (req, res) => {
	let page = req.params.num;
	const limit = 4;
	let offset;

	if(isNaN(page) || page == 1){
		offset = 1;
		page = 1;
	} else {
		page = parseInt(page);
		offset = (page - 1) * limit;
	}

	Article.findAndCountAll({
		limit: limit,
		offset: offset,
		order: [ ['id', 'DESC'] ]
	}).then(articles => {

		let next;

		if(offset + limit >= articles.count){
			next = false;
		} else {
			next = true;
		}

		const result = {
			page: page,
			next: next,
			articles: articles
		}

		Category.findAll().then( categories => {
			res.render("adm/articles/page", {result: result, categories: categories})
		});

	})
})


router.post("/adm/articles/update", (req, res) => {
	const id = req.body.id;
	const title = req.body.title;
	const body = req.body.body;
	const category = req.body.category;

	Article.update({
		title: title, 
		slug: slugify(title), 
		body: body, 
		category: category
	}, { where: {
		id: id
	}}).then(() => {
		res.redirect("/adm/articles");
	}).catch(err => {
		console.log("Error updating", err);
	})

})

router.post("/articles/save", (req, res) => {
	const title = req.body.title;
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