const express = require('express');
const swaggerUi = require('swagger-ui-express');
const OpenApiValidator = require('express-openapi-validator');
const apiSpec = require('../docs');
const db = require('./config/database.js');
const routes = require('./routes/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    '/documentacao',
    swaggerUi.serve,
    swaggerUi.setup(apiSpec, { explorer: true }),
);

app.use(
    OpenApiValidator.middleware({
      apiSpec: apiSpec,
      validateRequests: true,
      validateResponses: {
        onError: (error, body, req) => {
          throw new Error(error);
        },
      },
    }),
);

db.on('error', (error) => {
  console.error('Database connection error\n', error);
  process.exit(1);
});

db.once('open', () => {
  console.info('Database connected');
});

routes(app);

module.exports = app;
