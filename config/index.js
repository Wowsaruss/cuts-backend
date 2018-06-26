const db = require('./components/db');
const server = require('./components/server');

module.exports = Object.assign({}, db, server);
