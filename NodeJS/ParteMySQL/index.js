const express = require("express"); // Importando Express
const app = express(); // Iniciando o Express

app.get('/', function(req, res){
    res.send("Bem vindo ao curso de NodeJs!");
});

app.get('/blog/:artigo?',function(req, res){
    var artigo = req.params.artigo

    if(artigo){
        res.send('<h2>Artigo: '+ artigo + '</h2>')
    } else {
        res.send("<h2>Bem vindo ao meu Blog</h2>");
    }
    
})

app.get('/youtube',function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send("<h1>Olha só o canal do youtube "+ canal + "</h1>")
    } else {
        res.send("<h1>Nenhum canal encontrado</h1>")
    }

})

app.get('/ola/:nome/:empresa', function(req, res){
    // REQ => DADOS ENVIADOS PELO USUARIO
    // RES => DADOS ENVIADOS PARA O USUARIO
    var nome = req.params.nome;
    var empresa = req.params.empresa
    res.send("<h1>Oi " + nome + " da "+ empresa +"!</h1>");
})

app.listen(8080 ,function(erro){
    if(erro){
        console.log('Ocorreu um erro');
    } else {
        console.log('Servidor iniciou com sucesso');
    }
})