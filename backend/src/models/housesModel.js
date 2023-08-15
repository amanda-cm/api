const connection = require('./connection');

const getAll = async () => { 
    const houses = await connection.execute('SELECT * FROM houses');  
    return houses[0]; 
};

const createHouse = async (house) => { 
    const {name, house_id, symbol, ghost, color} = house; //pega o que é enviado
    const query = 'INSERT INTO houses (name, house_id, symbol, ghost, color) VALUES (?, ?, ?, ?, ?)';
    const createdHouse = await connection.execute(query, [name, house_id, symbol, ghost, color]); 

    return {insertId: createdHouse[0].insertId}; //posição zero para não retornar o buffer e o insertId é a posição que inseriu o elemento no tabela
};

const deleteHouse = async (id) => {
    const removedHouse = await connection.execute('DELETE FROM houses WHERE house_id = ?', [id]); 

    return removedHouse;
};

module.exports = {
    getAll,
    deleteHouse,
    createHouse,
};
