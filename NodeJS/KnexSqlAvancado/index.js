var database = require("./database");

/* INSERT
var dados = [
    {
        name: "Sea of Thieves",
        price: 50.67
    },
    {
        name: "Terria",
        price: 20
    },
    {
        name: "Minecraft",
        price: 60
    }
]

database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

/* SELECT
database.select(["id", "price"]).table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

/* NESTED QUERIES
database.insert({name: "Mist of Noyah", price: 25}).into("games").then(data => {
    database.select(["id", "price"]).table("games").then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})
*/

/* WHERE
database.select().whereRaw("name = 'Mist of Noyah' or price > 25").table("games").then(data =>{
    console.log(data);
    }).catch(err =>{
        console.log(err);
    });
*/

/* RAW
database.raw("SELECT * FROM games").then(data => {
    console.log(data);
}).catch(err =>{
    console.log(err);
});
*/

/* DELETE
database.where({id: 5}).delete().table("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/ 

/* UPDATE
database.where({id: 7}).update({name: "Mist of Noyah"}).table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

/* ORDER BY
database.select().table("games").orderBy("price","desc").then(data =>{ // desc , asc
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

// 1 p 1            Um jogo para outro jogo
// 1 p Muitos       Um estudio para muitos jogos
// Muitos p Muitos  Vários estudios trabalham com varios jogos

/*  Associated Inserts
database.insert({
    name: "Blizzard",
    game_id: 3
}).table("studios").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

/* Relacionamento 1 p 1
database.select(["games.*", "studios.name as std_name"]).table("games").innerJoin("studios", "studios.game_id", "games.id").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
});
*/

/* Relacionamento 1 p M
database.select(["games.*", "studios.name as std_name"]).table("games").innerJoin("studios", "studios.game_id", "games.id").then(data =>{
    var studiosGamesArray = data;
    var game = {
        id: 0,
        name: "",
        studios: []
    }

    game.id = data[0].id;
    game.name = data[0].name;

    data.forEach(element => {
        game.studios.push({name: element.std_name});
    });

    console.log(game);
}).catch(err =>{
    console.log(err);
});
*/

/* Relacionamento M p M
database.select([
            "studios.name as studio_name",
            "games.name as game_name",
            "games.price as game_price"
        ]).table("games_studios")
        .innerJoin("games", "games.id", "games_studios.game_id")
        .innerJoin("studios", "studios.id", "games_studios.studio_id")
        .where("games.id", 8)
        .then(data =>{
            console.log(data);
        }).catch(err =>{
            console.log(err);
        })
*/

/*
async function testeTransacao(){

    try{
        await database.transaction(async trans =>{
            await database.insert({name: "Qualquer nome"}).table("studios");
            await database.insert({name: "Mojang"}).table("studios");
            await database.insert({name: "GearBox"}).table("studios");
            await database.insert({name: "Hypixel"}).table("studios");
        });
        
    }catch(err){
        console.log(err);
    }
    
}

testeTransacao();
*/