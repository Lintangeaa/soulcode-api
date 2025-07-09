const { Router } = require('express');
const requestHandler = require('../../utils/request');
const emailController = require('./email.controller');

const emailRouter = Router();

emailRouter.post('/send', requestHandler(emailController.sendMail));

module.exports = emailRouter;
