const express = require('express');

const userRouter = require('./users.router')
const ConstactRouter = require('./contact.route')
const auth = require('./auth.router')
const sellRouter = require('./sell.router')
const product = require('./product.router')
const category = require('./category.router')
const table = require('./table.router')
const report = require('./reporting.router')

function routerApi(app){
  // version 1
  const router = express.Router();
  app.use('/api/v1',router);

  router.use('/users', userRouter);
  router.use('/constacUs', ConstactRouter);
  router.use('/auth', auth);
  router.use('/sell', sellRouter);
  router.use('/product', product);
  router.use('/category', category);
  router.use('/table', table);
  router.use('/report', report);
}

module.exports = routerApi;
