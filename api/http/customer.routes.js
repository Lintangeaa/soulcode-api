const { Router } = require('express');
const { getCustomer } = require('./customer.controller');

const customerRouter = Router();

customerRouter.get('/', getCustomer);

module.exports = customerRouter;
