require('dotenv').config();
const mysql = require('mysql2/promise');
    
const connection = mysql.createPool({ //criar a conexão createPool cria uma lista de conexões
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_BD,
}); 

module.exports = connection;