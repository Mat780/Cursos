var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cookieParser("fudfhjdfdfmjis"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());



app.get("/", (req, res) =>{

    var emailError = req.flash("emailError");
    var nameError = req.flash("nameError");
    var pontosError = req.flash("pontosError");
    var email = req.flash("email");
    var name = req.flash("name");
    var pontos = req.flash("pontos");

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    nameError = (nameError == undefined || nameError.length == 0) ? undefined : nameError;
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;

    email = (email == undefined || email.length == 0) ? "" : email;
    name = (name == undefined || name.length == 0) ? "" : name;
    pontos = (pontos == undefined || pontos.length == 0) ? "" : pontos;

    res.render("index", {emailError, pontosError, nameError, email: email, name: name, pontos: pontos});
});

app.post("/form", (req, res) =>{

    var {email, name, pontos} = req.body;

    var emailError;
    var pontosError;
    var nameError;
    
    if(email == undefined || email == ""){
        emailError = "O email não pode ser vazio";
    }

    if(pontos == undefined || pontos == ""){
        pontosError = "A pontuação não pode ser vazia";
    } else if (pontos < 20){
        pontosError = "A pontuação deve ser maior que 20";
    }

    if(name == undefined || name == ""){
        nameError = "O nome não pode estar vazio";
    }

    if(emailError != undefined || pontosError != undefined || nameError != undefined){
        req.flash("emailError", emailError);
        req.flash("pontosError", pontosError);
        req.flash("nameError", nameError);

        req.flash("email", email);  
        req.flash("name", name);
        req.flash("pontos", pontos);

        res.redirect("/");
    } else {
        res.send("Formulário enviado com sucesso");
    }

});



app.listen(3030, (req, res) =>{
    console.log("Servidor rodando!");
})