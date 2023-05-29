import express from 'express';
import db from './config/database.js';
import routes from './routes/index.js';

db.on('error', console.error.bind(console, 'Database connection error'));
db.once('open', () => {
  console.info('Database connected');
});

const app = express();

routes(app);

export default app;
