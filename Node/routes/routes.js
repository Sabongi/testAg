const db = require("../database/connection");
const express = require('express');
const router = express.Router();

const MotoristasController = require('../controllers/motoristaController');
const VeiculosController = require('../controllers/veiculosController');
const ControleController = require('../controllers/controleController')


router.get('/motoristas', MotoristasController.listarMotoristas);
router.post('/motoristasCad', MotoristasController.create);

router.get('/veiculos', VeiculosController.listarVeiculo);
router.post('/veiculosCad', VeiculosController.create);

router.post('/controle', ControleController.listarControle);
router.delete('/controle/:Controle_id', ControleController.delete);
router.patch('/controle/:Controle_id', ControleController.update);



module.exports = router;