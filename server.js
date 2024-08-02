const express = require('express')
const server = express()

server.listen(3000)

server.get('/',(req,res)=>{
    res.send('<h1>Olá ExpressJS<h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h1>Esse é o servidor do 3DS<h1>')
})

server.get('/servicos',(req,res)=>{
    res.send('<h1>Esse é o servidor de serviço do 3DS<h1>')
})

server.use((req,res)=>{
    res.status(404).send('<h2>Lamento, não encontramos esse recurso!<h2>')
})





