const express = require('express');
const db = require('./config/database.js');
const routes = require('./routes/index.js');

db.on('error', console.error.bind(console, 'Database connection error'));
db.once('open', () => {
  console.info('Database connected');
});

const app = express();

app.use(express.json());

routes(app);

module.exports = app;
