const express = require('express');
const router = express.Router();

router.get("/articles", (req, res) => {
	res.send("ROTA DE ARTIGOS");
})

router.get("/adm/articles/new" , (req, res) => {
	res.render("adm/articles/new");
})

module.exports = router;