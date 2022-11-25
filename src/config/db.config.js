const { Sequelize } = require('sequelize')

const db = new Sequelize('pruebas', '', '', {
	host: 'localhost',
	port: '5432',
    dialect: 'postgres',
    username:'postgres',
    password: 'luismera2406',
})

module.exports = db