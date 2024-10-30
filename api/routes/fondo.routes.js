const express = require('express');
const fondoController = require('../controllers/fondo.controller');

const router = express.Router();

router.post('/', fondoController.createFondo);
router.get('/', fondoController.getFondos);

module.exports = router;