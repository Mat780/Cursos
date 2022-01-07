const express = require('express');
const router = express.Router();
const User = require('./User');

router.get("/adm/users", (req, res) => {
	res.send("Listagem de usuarios");
})



module.exports = router;