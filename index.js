const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/conexao')
const Mensagem = require('./database/Mensagem')

connection
    .authenticate()
    .then(()=>{
        console.log("Conexao feita com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

 app.use(bodyparser.urlencoded({extended: false}));
 app.use(bodyparser.json());


app.get('/', function(req,res){
    res.send('<html><body><h1>Olá API</h1></body></html>')
})

app.post('/api', (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const descricao = req.body.descricao;

    Mensagem.create({
        nome: nome,
        email: email,
        descricao: descricao
    })
})

app.listen(3001, () => {
    console.log('Rodando com express');
})
