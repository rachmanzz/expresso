const knex = require('knex')
const config = _module('config::database')

const database = knex(config.config()[config.default])
const select = db => {
    return knex(config.config()[db])
}

module.exports = { database, select }