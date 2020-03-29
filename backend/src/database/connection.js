const knex = require('knex');
const configuration = require('../../knexfile'); // voltei duas pastas para chegar na raiz

const conn = knex(configuration.development); // pega a conexão de desenvolvimento

module.exports = conn;