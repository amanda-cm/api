const connection = require('./connection');

const getAll = async () => { //busca tudo o que tem no banco de dados e cria uma função assincrona
    const students = await connection.execute('SELECT * FROM students'); // aluno vai receber todos os estudantes que tem no banco, await espera o termino da execução 
    return students[0]; //retornar somente o array da posição 0 o outro tem informações que não são do banco
};

const createStudent = async (student) => { //função responsável de cadastrar um novo aluno 
    const {name, date_of_birth, house, patronus} = student; //recebe o que é enviado
    const query = 'INSERT INTO students (name, date_of_birth, house_id, patronus) VALUES (?, ?, ?, ?)'; //query para inserir as informações no banco 
    const createdStudent = await connection.execute(query, [name, date_of_birth, house, patronus]); //conexão com o banco inserindo as informações enviadas

    return {insertId: createdStudent[0].insertId}; //posição zero para não retornar o buffer e o insertIdé a posição que inseriu o elemento no tabela
};

module.exports = { //exporta um objeto e dentro desse objeto vai ir as funções acima
    getAll,
    createStudent,
};

