const connection = require('./connection');

const getAll = async () => { //busca tuso o que tem no banco de dados e cria uma função assincrona
    const students = await connection.execute('SELECT * FROM students'); // aluno vai receber todos os estudantes que tem no banco, await espera o termino da execução 
    return students;
};

module.exports = { //exporta um objeto e dentro desse objeto vai ir as funções acima
    getAll
};