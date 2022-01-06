const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

router.get("/adm/categories/new" , (req, res) => {
	res.render('adm/categories/new');
});

router.get("/adm/categories", (req, res) => {

	Category.findAll().then( categories => {
		res.render('adm/categories/index', {categories: categories})
	})
	
});

router.get("/adm/categories/edit/:id", (req, res) => {
	const id = req.params.id

	if(isNaN(id)){
		res.redirect("/adm/categories");
	}

	Category.findByPk(id).then( category => {

		if(category != undefined){

			res.render("adm/categories/edit", {category: category});

		} else {
			res.redirect("/adm/categories");
		}

	}).catch(err => {
		res.redirect("adm/categories");
	})
});

router.post("/categories/save", (req, res) => {
	const title = req.body.title;

	if (title != undefined) {

		Category.create({
			title: title,
			slug: slugify(title)
		}).then(() => {
			res.redirect("/adm/categories");
		})

	} else {
		res.redirect("/adm/categories/new");
	};

});

router.post("/categories/delete", (req, res) => {
	const id = req.body.id;
	
	if(id != undefined){

		if(!isNaN(id)){

			Category.destroy({
				where: {
					id: id
				}
			}).then(() => {
				res.redirect("/adm/categories");
			});

		} else {
			res.redirect("/adm/categories");
		}

	} else {
		res.redirect("/adm/categories");
	}
})

router.post("/categories/update", (req, res) => {
	const id = req.body.id;
	const title = req.body.title;

	Category.update({title: title, slug: slugify(title)}, { where: {id: id} }).then( () => {
		res.redirect("/adm/categories");
	})
})

module.exports = router;