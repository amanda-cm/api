const express = require('express'); //importa o express
const router = express.Router(); //instanciar o express usando a função router
const studentsController = require('./controllers/studentsController');
const studentsMiddleware = require('./middlewares/studentsMiddleware');

router.get('/students', studentsController.getAll); //rota do tipo get no endpoint students vai executar o objeto studentsController que contém as funções
router.post('/students', studentsMiddleware.validateName, studentsController.createStudent); //ao realizar a requisição a primeira coisa a ser executada vai ser o middleware para fazer a validação dos dados
router.delete('/students/:student_id', studentsController.deleteStudent); //parametro :student_id guarda o valor informado na url para usar na controller
router.put('/students/:student_id', studentsMiddleware.validateName, studentsController.updateStudent);

module.exports = router;