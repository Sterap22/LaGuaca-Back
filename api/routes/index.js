const express = require('express');

const fondoRouter = require('./fondo.routes')
const transaccionRouter = require('./transaccion.routes')

function routerApi(app){
  // version 1
  const router = express.Router();
  app.use('/api/v1',router);

  router.use('/fondo', fondoRouter);
  router.use('/transaccion', transaccionRouter);
}

module.exports = routerApi;
