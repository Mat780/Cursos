var knex = require("../database/connection");
var bcrypt = require("bcrypt");
const PasswordToken = require("./PasswordToken");


class User{

    async findAll(){

        try{
            var result = await knex.select(["id", "name", "email", "role"]).table("users");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }

    }

    async findById(id){

        try{
            var result = await knex.select(["id", "name", "email", "role"]).where({id: id}).table("users");
            
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }

    }

    async findByEmail(email){

        try{
            let result = await knex.select(["id", "name", "email", "role"]).where({email: email}).table("users");
            
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }

    }


    async new(email, password, name){

        try{

            var password = await bcrypt.hash(password, 10);

            await knex.insert({email, password, name,role: 0}).table("users");

        }catch(err){
            console.log(err);
        }

    }

    async findEmail(email){

        try{
            var result = await knex.select("*").from("users").where({email: email});

            if(result.length > 0){
                return true;
            }else{
                return false;
            }

        }catch(err){
            console.log(err);
            return false;
        }

    }

    async update(id, email, name, role) {
        var user = await this.findById(id);

        if(user != undefined){

            var editUser = {};

            if(email != undefined){
                if(email != user.email){
                    var result = await this.findEmail(email);
                    if(!result){
                        editUser.email = email;
                    }else{
                        return {status: false, err: "O email já está cadastrado"}
                    }
                }
            }

            if(name != undefined){
                editUser.name = name;
            }

            if(role != undefined){
                editUser.role = role;
            }

            try{
                await knex.update(editUser).where({id: id}).table("users");
                return {status: true}
            }catch(err){
                return {status: false, err: "O usuario não existe"};
            }

        } else {
            return {status: false, err: "O usuario não existe"};
        }

    }

    async deleteUser(id){
        var user = await this.findById(id);

        if(user != undefined){
            try{
                await knex.delete().where({id: id}).table("users");
                return {status: true};
            }catch(err){
                return {status: false, err: "Ocorreu um erro durante o delete"}
            }
        }else{
            return {status: false, err: "O usuário não existe por isso não pode ser deletado"}
        }
    }

    async changePassword(newPassword, id, token){
        let hash = await bcrypt.hash(newPassword, 10);

        await knex.update({password: hash}).where({id: id}).table("users");

        await PasswordToken.setUsed(token)
    }

}

module.exports = new User();