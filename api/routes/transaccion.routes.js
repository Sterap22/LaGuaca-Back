const express = require('express');
const transaccionController = require('../controllers/transaccion.controller');

const router = express.Router();

router.post('/', transaccionController.createTransaccion);
router.get('/', transaccionController.getTransacciones);

module.exports = router;
