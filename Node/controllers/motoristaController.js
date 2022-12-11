const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarMotoristas(request, response) {
        try {
            const sql = 'SELECT Cod_Motorista, Nome FROM motoristas;';
            const motoristas = await db.query(sql);

            return response.status(200).json({confirma: true, nResults: motoristas[0].length, message: motoristas});
        } catch (error) {
            return response.status(500).json({confirma: false, message: error});
        }
        
    },

    async create(request, response) {
        try {
            const { nome, telefone, cnh } = request.body;

            const sql = 'INSERT INTO motoristas (Nome, Telefone, CNH) VALUES (?, ?, ?);';
            const values = [nome, telefone, cnh];
            const confirmacao = await db.query(sql, values);
            const Cod = confirmacao[0].insertId;
            const dados = { id: Cod, nome: nome, telefone: telefone, cnh: cnh};
            return response.status(200).json({ confirma: true, message: dados });
        } catch (error) {
            return response.status(500).json({ confirma: false, message: error });
        }
    },

}