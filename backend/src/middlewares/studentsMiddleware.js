const validateName = (request, response, next) => { //função para validar a requisição
    const {body} = request; //pega o corpo da requisição

    if (body.name == undefined) { 
        return response.status(400).json({message: 'O campo "name" é obrigatório'});
    };
    if (body.name == '') {
        return response.status(400).json({message: 'O campo "name" não pode ser vazio'});
    };

    next(); //se estiver tudo ok passa para o proximo passo que está especificado na rota
};

module.exports = { 
    validateName,
};