const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
	destination: function(req, res, cb) {
		cb(null, "uploads/");
	}, 
	filename: function(req, file, cb) {
		const fileName = file.originalname.split('.')[0];
		cb(null, fileName + '_' + Date.now() + path.extname(file.originalname));
	}
})

const upload = multer({storage});

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/upload', upload.single("file") ,(req, res) => {
	res.send('Arquivo recebido');
})

app.listen(8080, () => {
	console.log('Servidor Node rodando')
})