const { Router } = require('express');
const HealthcheckController = require('../controllers/healthcheckController.js');

// eslint-disable-next-line new-cap
const healthcheckRouter = Router();

healthcheckRouter.get('/healthcheck', HealthcheckController.healthcheck);

module.exports = healthcheckRouter;
