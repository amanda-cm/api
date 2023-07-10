const express = require('express'); //importa o express
const router = express.Router(); //instanciar o express usando a função router

router.get('/', (req,res) => {  // requisição do tipo get que vai passar a requisição(req) e a resposta(res) o que vem depois da / é a rota
    return res.status(200).send('Teste router')  //retorna a resposta (res) com o status 200 e o teste
});

module.exports = router;