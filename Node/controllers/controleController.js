const { json } = require("express");
const db = require("../database/connection");

module.exports = {
    async listarControle(request, response) {
        try {
            const { page = 1, limit = 10 } = request.query;
            const inicio = (page - 1) * limit;

            const { DataSaida = '%%' } = request.body;

            const Data = DataSaida === '%%' ? '%%' : '%' + DataSaida + '%';
            const vazio = Data === '' ? '%%' : Data

            const sql = ('SELECT ct.Controle_id, ct.Veiculo, vl.Veiculo, vl.Placa, mt.Nome, ct.Motorista, ct.Data_saida, ct.Hora_saida, Km_saida, ct.Destino, ct.Data_retorno, ct.Hora_retorno, ct.Km_Retorno, ct.Km_percorrido, vl.Km_Troca_Oleo FROM controle ct INNER JOIN veiculos vl ON ct.Veiculo = vl.Placa INNER JOIN motoristas mt ON ct.Motorista = mt.Cod_Motorista Where DAta_saida LIKE ? ORDER BY Data_saida DESC;');

            const values = [vazio, parseInt(inicio), parseInt(limit)];
            const controle = await db.query(sql, values);


            return response.status(200).json({ confirma: true, nResults: controle[0].length, message: controle });
        } catch (error) {
            return response.status(500).json({ confirma: false, message: error });
        }
    },

    async delete(request, response) {
        try {
            const { Controle_id} = request.params;

            const sql = 'DELETE FROM controle WHERE Controle_id = ?;';
            const values = [ Controle_id ];

            await db.query(sql, values);
            return response.status(200).json({confirma : true, message: 'Corrida com data ' + Controle_id + ' excluída com sucesso'});
        }catch (error) {
            return response.status(500).json({confirma: false, message: error});
        } 
    },

    async update(request, response) {
        try {
            
            const { DataSaida, HoraSaida, KmSaida, destino, DataRetorno, HoraRetorno, KmRetorno} = request.body;
            
            const { Controle_id } = request.params;
           
            const sql = 'UPDATE controle SET Data_saida = ?, Hora_saida = ?, Km_saida = ?, Destino = ?, Data_retorno = ?, Hora_retorno = ?, Km_Retorno = ? WHERE Controle_id = ?;';
            
            const values = [DataSaida, HoraSaida, KmSaida, destino, DataRetorno, HoraRetorno, KmRetorno, Controle_id];
            
            const atualizacao = await db.query(sql, values);
            
            return response.status(200).json({ confirma: true, message: atualizacao });

        } catch (error) {
            return response.status(500).json({ confirma: false, message: error });
        }
    },
}