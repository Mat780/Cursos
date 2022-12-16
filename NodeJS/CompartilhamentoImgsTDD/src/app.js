const express = require('express')
const app = express()
const router = require('./routes/router')
const mongoose = require('mongoose')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/", router)

mongoose.connect("mongodb://localhost:27017/node_guiaPics", {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		// console.log("Conectado com o banco")
	})
	.catch(err => {
		console.error(err)
	})

module.exports = app	
