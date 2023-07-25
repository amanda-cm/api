const getAll = (request, response) => { //essa função vai ser utilizada no router
    return response.status(200).json({message: 'controller ta ok'}); //retorno para o usuário
};

module.exports = {
    getAll
}