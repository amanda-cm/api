const housesModel = require('../models/housesModel');

const getAll = async (request, response) => { 
    const houses = await housesModel.getAll();

    return response.status(200).json(houses); 
};

const createHouse = async (request, response) => {
    const createHouse = await housesModel.createHouse(request.body); 

    return response.status(201).json(createHouse); 
};

const deleteHouse = async (request, response) => {
    const {house_id} = request.params; 
    await housesModel.deleteHouse(house_id); 

    return response.status(204).json();
};

module.exports = {
    getAll,
    deleteHouse,
    createHouse,
};