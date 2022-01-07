const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcrypt');
const admAuth = require('../middlewares/admAuth');

router.get("/adm/users", admAuth , (req, res) => {

	User.findAll().then( users => {
		res.render("adm/users/index", {users: users});
	})

})

router.get("/adm/users/new", admAuth , (req, res) => {
	res.render("adm/users/new")
})

router.get("/adm/users/edit/:id", admAuth , (req, res) => {
	const id = req.params.id;

	if(isNaN(id)){
		res.redirect("/adm/users");
	}

	User.findByPk(id).then( user => {

		if(user != undefined){

			res.render("adm/users/edit", {user: user});

		} else {
			res.redirect("/adm/users");
		}

	}).catch(err => {
		res.redirect("/adm/users");
	})

});

router.get("/login", (req, res) => {
	res.render("adm/users/login");
});

router.get("/logout", (req, res) => {
	req.session.user = undefined;
	res.redirect("/");
})

router.post("/authenticate", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({where: {email: email}}).then(user => {
		if(user != undefined){
			const correct = bcrypt.compareSync(password, user.password);

			if(correct){
				req.session.user = {
					id: user.id,
					email: user.email
				}

				res.json(req.session.user);
			} else {
				res.redirect("/login");
			}

		} else {
			res.redirect("/login");
		}

	})
});

router.post("/adm/users/create", admAuth , (req, res) => {
	const email = req.body.email;
	let password = req.body.password;
	
	User.findOne({where: {email: email} }).then((user) => {
		if(user == undefined){
			const salt = bcrypt.genSaltSync(10);
			password = bcrypt.hashSync(password, salt);

			User.create({
				email: email,
				password: password
			}).then(() => {
				res.redirect("/");
			}).catch (err => {
				res.redirect("/");
			});

		} else {
			res.redirect("/adm/users/new");
		}
	});
});

router.post("/adm/users/update", admAuth , (req, res) => {
	const email = req.body.email;
	let password = req.body.password;

	const salt = bcrypt.genSaltSync(10);
	password = bcrypt.hashSync(password, salt);

	User.update({email: email, password: password} ,{where: {email: email}}).then(() => {
		res.redirect("/adm/users");
	}).catch(err => {
		res.json(err);
	})
});

router.post("/adm/users/delete", admAuth , (req, res) => {
	const id = req.body.id;
	
	if(id != undefined){

		if(!isNaN(id)){

			User.destroy({
				where: {
					id: id
				}
			}).then(() => {
				res.redirect("/adm/users");
			});

		} else {
			res.redirect("/adm/users");
		}

	} else {
		res.redirect("/adm/users");
	}
})

module.exports = router;