const { Router } = require('express');
const controller = require('./push-wa.controller');

const pushWaRouter = Router();

pushWaRouter.post('/webhook', controller.webhook);

module.exports = pushWaRouter;
