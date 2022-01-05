const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

router.get("/adm/categories/new" , (req, res) => {
	res.render('adm/categories/new');
});

router.get("/adm/categories", (req, res) => {
	res.render('adm/categories/index');
});

router.post("/categories/save", (req, res) => {
	let title = req.body.title;

	if (title != undefined) {

		Category.create({
			title: title,
			slug: slugify(title)
		}).then(() => {
			res.redirect("/");
		})

	} else {
		res.redirect("/adm/categories/new");
	};

});

module.exports = router;