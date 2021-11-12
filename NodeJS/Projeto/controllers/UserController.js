const User = require("../models/User");
const PasswordToken = require("../models/PasswordToken");

class UserController{

    async index(req, res){
        var users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        var id = req.params.id;
        var user = await User.findById(id);

        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200);
            res.json(user);
        }
    }

    async create(req, res){
        var {email , name, password} = req.body;

        if(email == undefined){
            res.status(400);
            res.json({err: "Email inválido"});
            return;
        }

        // Não coloquei as outras autenticações por causa de tempo;
        // Ultima semana do PS precisamos correr

        var emailExists = await User.findEmail(email);
        
        if(emailExists){
            res.status(406);
            res.json({err: "O email já está cadastrado"});
            return;
        }

        await User.new(email, password, name);


        res.status(200);
        res.json("Tudo Ok");

    }

    async edit(req, res){
        var {id, name, email, role} = req.body;
        var result = await User.update(id, email, name, role);

        if(result != undefined){
            if(result.status){
                res.status(200);
                res.send("Tudo Ok!");
            }else{
                res.status(406);
                res.send(result.err);
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor");
        }

    }

    async remove(req, res){
        var id = req.params.id;

        var result = await User.deleteUser(id);

        if(result.status){
            res.status(200);
            res.send("Tudo ok!");
        }else{
            res.status(406);
            res.send(result.err);
        }

    }

    async recoverPassword(req, res){
        let email = req.body.email;
        let result = await PasswordToken.create(email);

        if(result.status){
            res.status(200);
            res.send("" + result.token);
            // Nodemail PEGAR DAS AULAS

        }else{
            res.status(406);
            res.send(result.err);
        }
    }

    async changePassword(req, res){
        let token = req.body.token;
        let password = req.body.password;

        let isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){

            await User.changePassword(password, isTokenValid.token.id, isTokenValid.token.token);
            res.status(200);
            res.send("Senha Alterada");

        }else{
            res.status(406);
            res.send("Token Inválido");
        }
    }
}

module.exports = new UserController();