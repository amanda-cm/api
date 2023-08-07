const studentsModel = require('../models/studentsModel'); //importar o studentsModel para usar a função 

const getAll = async (request, response) => { //essa função vai ser utilizada no router
    const students = await studentsModel.getAll();

    return response.status(200).json(students); //retorno para o usuário
};

const createStudent = async (request, response) => {
    const createdStudent = await studentsModel.createStudent(request.body); //createdStudent armazena o resultado da função da model

    return response.status(201).json(createdStudent); //retorno para o usuário com o que foi cadastrado
};

const deleteStudent = async (request, response) => {
    const {student_id} = request.params; //pegar o id dos parametros da url da requisição
    await studentsModel.deleteStudent(student_id); //manda o id para a exclusão

    return response.status(204).json();
};

const updateStudent = async (request, response) => {
    const {student_id} = request.params;
    await studentsModel.updateStudent(student_id, request.body); //espera a studentsModel fazer o update passando o id e o body da requisição

    return response.status(204).json();
};

module.exports = {
    getAll,
    createStudent,
    deleteStudent,
    updateStudent,
};