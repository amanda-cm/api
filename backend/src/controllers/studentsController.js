const studentsModel = require('../models/studentsModel'); //importar o studentsModel para usar a função 

const getAll = async (request, response) => { //essa função vai ser utilizada no router
    const students = await studentsModel.getAll();
    return response.status(200).json(students); //retorno para o usuário
};

module.exports = {
    getAll
}