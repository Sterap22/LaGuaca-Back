const transaccionService = require('../services/transaccion.service');
const service = new transaccionService();


const createTransaccion = async (req, res) => {
  try {
    const newTransaccion = await service.createTransaccion(req.body);
    res.status(201).json(newTransaccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTransacciones = async (req, res) => {
  try {
    const transacciones = await service.getTransacciones();
    res.status(200).json(transacciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTransaccion,
  getTransacciones,
};
