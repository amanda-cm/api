const connection = require('./connection');

const getAll = async () => { 
    const potions = await connection.execute('SELECT * FROM potions');  
    return potions[0]; 
};

module.exports = {
    getAll,
};