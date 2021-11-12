const express = require("express");
const app = express();
const { json } = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTsecret = "AKSKASKAKSKASKJDAJS";

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


function auth(req, res, next){

    const authToken = req.headers['authorization'];

    if(authToken != undefined){
        
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTsecret, (err, data) =>{
            if(err){
                res.status(401);
                res.json({err: "Token Inválido"});
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })

    } else {
        res.status(401);
        res.json({err:"Token Inválido"});
    }

}


var DB = {
    games: [

        {
            id: 0,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
        {
            id: 1,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        }
    ],
    users: [
        {
            id: 1,
            name: "Matheus",
            email: "mateusfelipe10@live.com",
            password: "123"    
        },
        {
            id: 2,
            name: "Guilherme",
            email: "Gui@email.com",
            password: "Senha"
        }
    ]
}

app.get("/games", auth ,(req, res) =>{

    var HATEOAS = [
        {
            href: "http://localhost:3030/games/0",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:3030/games/0",
            method: "GET",
            rel: "get_game"
        },
        {
            href: "http://localhost:3030/auth",
            method: "POST",
            rel: "login"
        }
    ]


    res.statusCode = 200;
    res.json({games: DB.games, _links: HATEOAS});
});

app.get("/games/:id", auth,(req, res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        var HATEOAS = [
            {
                href: "http://localhost:3030/games/"+id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:3030/games/"+id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:3030/games/"+id,
                method: "GET",
                rel: "get_game"
            },
            {
                href: "http://localhost:3030/games",
                method: "GET",
                rel: "get_all_game"
            }
        ]
    

        var game = DB.games.find(g => g.id == id); 

        if(game != undefined){
            res.statusCode = 200;
            res.json({game, _links: HATEOAS});
        } else {
            res.sendStatus(404);
        }
    }

});

// CADASTRAR UM GAME
app.post("/games", auth,(req, res) =>{

    var {title, price, year} = req.body;

    if(title == undefined){
        res.sendStatus(400);
    } else if (isNaN(price)){
        res.sendStatus(400);
    } else if (isNaN(year)){
        res.sendStatus(400);
    } else {
        DB.games.push({
            id: 4,
            title,
            price,
            year 
        });
        
    }

    res.sendStatus(200);

});

app.delete("/games/:id", auth,(req, res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id); 

        if(index == -1){
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }

    }

});

app.put("/games/:id", auth,(req, res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id); 

        if(game != undefined){

            var {title, price, year} = req.body;

            if(title != undefined){
                game.title = title;
                res.sendStatus(200);
            }

            if(price != undefined){
                if (!isNaN(price)){
                    game.price = price;
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            }

            if(year != undefined){
                if (!isNaN(year)){
                    game.year = year;
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            }

        } else {
            res.sendStatus(404);
        }
    }
})

app.post("/auth", (req, res) =>{
    var {email, password} = req.body;

    if(email != undefined){

        var user = DB.users.find(u => u.email == email);

        if(user != undefined){

            if(user.password == password){

                jwt.sign({id: user.id, email: user.email},JWTsecret,{algorithm: 'HS256', expiresIn:'48h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"});
                    } else {
                        res.status(200);
                        res.json({token: token});
                    }
                })
                
                
            } else {
                res.status(401);
                res.json({err: "Credenciais Inválidas!"})
            }

        } else {
            res.status(404);
            res.json({err: "O e-mail enviado não existe na base de dados!"})
        }

    } else {
        res.status(400);
        res.json({err: "O e-mail é inválido"})
    }

})

app.listen(3030, () =>{
    console.log("API RODANDO!");
});