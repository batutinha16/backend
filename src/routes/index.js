const express = require('express');
const healthcheckRouter = require('./healthcheckRoutes.js');

const routes = (app) => {
  app.route('/').get((request, response) => {
    response.status(200).json({
      message: 'Hello world',
    });
  });

  app.use(express.json(), healthcheckRouter);
};

module.exports = routes;
