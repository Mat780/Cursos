const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = "djsadjafjkdkgnhrewnfdjfcaytor__Alguma_Coisa_Extremamente_Longa_Para_ser_dificil_de_ser_atacada"

const mongoose = require('mongoose')
const user = require('../models/User')
const User = mongoose.model("User", user)



router.get("/", (req, res) => {
	res.json({})
})

router.post("/user", async (req, res) => {

	if(req.body.name.length == 0 || req.body.email.length == 0 || req.body.password.length == 0) {
		res.sendStatus(400);
		return;
	}
	
	try {
		const user = await User.findOne({email: req.body.email})

		if(user != undefined) {
			res.statusCode = 400
			res.json({error: "Email já cadastrado"})
			return;
		}

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({name: req.body.name, email: req.body.email, password: hash})
		await newUser.save()
		
		res.statusCode = 200
		res.json({email: newUser.email})

	} catch (err) {
		res.statusCode = 500
		res.json({error: err})
	}

})

router.post("/auth", async (req, res) => {
	const {email, password} = req.body;

	const user = await User.findOne({"email": email})

	if(user == undefined) {
		res.statusCode = 403;
		res.json({errors: {email: "Email não cadastrado"}})
		return;
	}
	
	const isPasswordRight = await bcrypt.compare(password, user.password)
	
	if(isPasswordRight == false) {
		res.statusCode = 403;
		res.json({errors: {password: "Senha errada"}})
		return;
	}

	jwt.sign({email, name: user.name, id: user._id}, jwtSecret, {expiresIn: '1h'}, (err, token) => {
		if(err) {
			res.sendStatus(500)
			console.error(err)
		} else {
			res.json({ token })
		}
	})

})


router.delete("/user/:email", (req, res) => {
	User.deleteOne({email: req.params.email})
	.then(res => {})
	.catch(err => console.error(err))

	User.deleteMany({name: "Test"})
	.then(res => {})
	.catch(err => console.error(err))

	res.sendStatus(200)
})

module.exports = router