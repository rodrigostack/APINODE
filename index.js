const express = require('express')
const app = express()
const connection = require('./database/conexao')

connection
    .authenticate()
    .then(()=>{
        console.log("Conexao feita com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.get('/', function(req,res){
    res.send('<html><body><h1>Olá API</h1></body></html>')
})

app.listen(3001, () => {
    console.log('Rodando com express');
})
