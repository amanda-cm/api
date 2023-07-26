const express = require('express'); //importa o express
const router = express.Router(); //instanciar o express usando a função router
const studentsController = require('./controllers/studentsController');

router.get('/students', studentsController.getAll); //rota do tipo get no endpoint students vai executar o objeto studentsController que contém as funções

module.exports = router;