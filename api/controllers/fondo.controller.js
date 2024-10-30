const fondoService = require('../services/fondo.service');
const service = new fondoService();

const createFondo = async (req, res) => {
  try {
    const newFondo = await service.create(req.body);
    res.json({
        message: 'created',
        data: newFondo
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFondos = async (req, res) => {
  try {
    const fondos = await service.findOne();
    res.json({
        message: 'created',
        data: fondos
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFondo,
  getFondos,
};
