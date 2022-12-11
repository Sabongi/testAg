const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async create(request, response) {
        try {
            const { placa, marca, veiculo, oleo } = request.body;

            const sql = 'INSERT INTO veiculos (Placa, Marca, Veiculo, Km_Troca_Oleo) VALUES (?, ?, ?, ?);';
            const values = [placa, marca, veiculo, oleo];
            const confirmacao = await db.query(sql, values);
            const Cod = confirmacao[0].insertId;
            const dados = { placa: placa, marca: marca, veiculo: veiculo, oleo: oleo};
            return response.status(200).json({ confirma: true, message: dados });
        } catch (error) {
            return response.status(500).json({ confirma: false, message: error });
        }
    },

    async listarVeiculo(request, response) {
        try {
            const sql = 'SELECT Placa, Veiculo FROM veiculos;';
            const motoristas = await db.query(sql);

            return response.status(200).json({confirma: true, nResults: motoristas[0].length, message: motoristas});
        } catch (error) {
            return response.status(500).json({confirma: false, message: error});
        }
        
    },

}