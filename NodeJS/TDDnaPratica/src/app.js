const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.json({success: true});
})

app.get("/cor/:pessoa", (req, res) => {
	const pessoa = req.params.pessoa;

	if(pessoa == 'Matheus'){
		res.json({cor: 'Azul', color: 'Blue'});
	}
})

module.exports = app;