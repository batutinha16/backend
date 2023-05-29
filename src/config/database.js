import mongoose from 'mongoose';

const DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION);

const db = mongoose.connection;

export default db;
