import { Router } from 'express';
import HealthcheckController from '../controllers/healthcheckController.js';

// eslint-disable-next-line new-cap
const healthcheckRouter = Router();

healthcheckRouter.get('/healthcheck', HealthcheckController.healthcheck);

export default healthcheckRouter;
