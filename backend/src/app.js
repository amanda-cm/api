const express = require('express'); //importa o express
const router = require('./router'); //importa o arquivo router
const app = express();  //cria uma instancia do express onde o app vai receber o express com todas as dependências

app.use(express.json());
app.use(router); //qualquer requisição que acontecer na aplicação vai cair no router

module.exports = app;