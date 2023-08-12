const housesModel = require('../models/housesModel');

const getAll = async (request, response) => { 
    const houses = await housesModel.getAll();

    return response.status(200).json(houses); //retorno para o usuário
};

const createHouse = async (request, response) => {
    const createHouse = await housesModel.createHouse(request.body); 

    return response.status(201).json(createHouse); //retorno para o usuário com o que foi cadastrado
};

const updateHouse = async (request, response) => {
    const {house_id} = request.params;
    await housesModel.updateHouse(house_id, request.body);

    return response.status(204).json();
};

module.exports = {
    getAll,
    updateHouse,
    createHouse,
};