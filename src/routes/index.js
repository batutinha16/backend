import express from 'express';
import healthcheckRouter from './healthcheckRoutes.js';

const routes = (app) => {
  app.route('/').get((request, response) => {
    response.status(200).json({
      message: 'Hello world',
    });
  });

  app.use(express.json(), healthcheckRouter);
};

export default routes;
