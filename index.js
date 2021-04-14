const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('<html><body><h1>Olá API</h1></body></html>')
})

app.listen(3001, () => {
    console.log('Rodando com express');
})
