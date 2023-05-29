import { Router } from 'express';
import HealthcheckController from '../controllers/healthcheckController.js';

const healthcheckRouter = Router();

healthcheckRouter.get('/healthcheck', HealthcheckController.healthcheck);

export default healthcheckRouter;
