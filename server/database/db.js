const mongoose = require('mongoose');

// Set url to hosted mongodb or local setup
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/si-se-puede';

// Set mongoose promise library to Node.js promise library
mongoose.Promise = Promise;

module.exports.connect = () => mongoose.connect(MONGODB_URL, { useMongoClient: true });