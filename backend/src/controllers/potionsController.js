const potionsModel = require('../models/potionsModel');

const getAll = async (request, response) => { 
    const potions = await potionsModel.getAll();

    return response.status(200).json(potions); 
};

module.exports = {
    getAll,
};