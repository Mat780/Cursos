const express = require('express');
const router = express.Router();

router.get("/articles", (req, res) => {
	res.send("ROTA DE ARTIGOS");
})

router.get("/adm/articles/new" , (req, res) => {
	res.send("ROTA PARA CRIAR NOVOS ARTIGOS");
})

module.exports = router;