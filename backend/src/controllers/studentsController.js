const studentsModel = require('../models/studentsModel'); //importar o studentsModel para usar a função 

const getAll = async (request, response) => { //essa função vai ser utilizada no router
    const students = await studentsModel.getAll();
    return response.status(200).json(students); //retorno para o usuário
};

const createStudent = async (request, response) => {
    const createdStudent = await studentsModel.createStudent(request.body); //createdStudent armazena o resultado da função da model
    return response.status(201).json(createdStudent); //retorno para o usuário com o que foi cadastrado
};

module.exports = {
    getAll,
    createStudent,
}