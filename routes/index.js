const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const servicesRouter = require('./servicesRouter');
const customersRouter = require('./customersRouter');
const ordersRouter = require('./ordersRouter');


function routersApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/services', servicesRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', ordersRouter);
};

module.exports = routersApi;

