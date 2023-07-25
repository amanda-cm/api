const express = require('express'); //importa o express
const studentsController = require('./controllers/studentsController');
const router = express.Router(); //instanciar o express usando a função router

router.get('/students', studentsController.getAll); //rota do tipo get no endpoint students que vai executar o objeto studentsController que contém as funções

module.exports = router;