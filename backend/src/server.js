const app = require('./app') //importa os arquivos do app
require('dotenv').config(); // dotenv pacote que serve para gerenciar as variáveis de ambiente dentro de um projeto Node
const port= process.env.PORT || 4000; //pega a porta definida no env

app.listen(port, () => { //define a porta para o servidor
    console.log('Servidor rodando');
});
