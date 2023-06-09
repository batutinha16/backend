const express = require('express');
const swaggerUi = require('swagger-ui-express');
const db = require('./config/database.js');
const routes = require('./routes/index.js');
const docs = require('../docs');

db.on('error', console.error.bind(console, 'Database connection error'));
db.once('open', () => {
  console.info('Database connected');
});

const app = express();

app.use(express.json());
app.use(
    '/documentacao',
    swaggerUi.serve,
    swaggerUi.setup(docs, { explorer: true }),
);

routes(app);

module.exports = app;
