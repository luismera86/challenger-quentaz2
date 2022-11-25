const db = require('../config/db.config')
const { DataTypes } = require('sequelize')

const Airline = db.define('Airlines', {
	IATA_CODE: {
		type: DataTypes.TEXT,
	},
	AIRLINE: {
		type: DataTypes.TEXT,
	},
})

module.exports = Airline
