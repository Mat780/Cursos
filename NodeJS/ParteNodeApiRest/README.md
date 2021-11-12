# API De Games
Esta API é utilizada para tal tal tal...

##  EndPoints
### GET / games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você recebera a listagem de todos os games
Exemplo de resposta: 
```
[
    {
        "id": 0,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    },
    {
        "id": 1,
        "title": "Sea of thieves",
        "year": 2018,
        "price": 40
    },
    {
        "id": 2,
        "title": "Call of Duty MW",
        "year": 2019,
        "price": 60
    }
]
```
##### Falha na Autenticação! 401
Caso essa resposta acontença, isso signficia que ocorreu uma falha durante o processo de autenticação da requisição
Motivos: Token inválido, Token expirado. 
Exemplo de resposta:
```
{
    "err": "Token Inválido"
}
```

### Post / auth
Esse endpoint é responsável por fazer o processo de login
#### Parametros
email: E-mail do usuario cadastrado no sistema
password: Senha do usuario cadastrado no sistema
Exemplo:
```
{
    "email": "mateusfelipe10@live.com",
    "password": "123"
}
```
#### Respostas
##### OK! 200
Caso essa resposta aconteça você recebera o token JWT para conseguir acessar endpoints protegidos na API
Exemplo de resposta: 
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXRldXNmZWxpcGUxMEBsaXZlLmNvbSIsImlhdCI6MTYzNDQ3NDY3MywiZXhwIjoxNjM0NjQ3NDczfQ.CRz_N0B-fzDpyuaP5ISxSIMksF9F8HHEJ8xFVDWzAyM"
}
```
##### Falha na Autenticação! 401
Caso essa resposta acontença, isso signficia que ocorreu uma falha durante o processo de autenticação da requisição
Motivos: e-mail ou senha incorretos. 
Exemplo de resposta:
```
{
    "err": "Credenciais inválidas"
}
```


