const { Sequelize } = require('sequelize')
const {DB_URL, DB_NAME, DB_USERNAME, DB_PASS } = require('./server.config')

const db = new Sequelize(DB_NAME, '', '', {
	host: DB_URL,
	port: '5432',
    dialect: 'postgres',
    username: DB_USERNAME,
    password: DB_PASS,
})

module.exports = db