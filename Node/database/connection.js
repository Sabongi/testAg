const mysql = require("mysql2/promise");

const bd_usuario = 'User';
const bd_senha = '0w31Mtz@6lst&x3';
const bd_servidor = '127.0.0.1';
const bd_porta = '3306';
const bd_banco = 'testeAg';
let connection;


const config = {
    host : bd_servidor,
    port : bd_porta, //Default: 3306
    user : bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections : true,
    connectionLimit : 10, // Default: 10 - deixar 100 ou 1000
    queueLimit : 0, // o numero maximo de solicitação de conexão que o pool enfileirara
}

try {
    connection = mysql.createPool(config);

    console.log('Chamou conexão Mysql');

} catch (error) {
    console.log(error);
}

module.exports = connection;