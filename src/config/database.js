const mongoose = require('mongoose');

const DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION);

const db = mongoose.connection;

module.exports = db;
