const db = require("../config/db.config");
const { DataTypes } = require('sequelize')

const Airport = db.define('Airports', {
    IATA_CODE: {
		type: DataTypes.TEXT,
	},
    AIRPORT: {
		type: DataTypes.TEXT,
	},
    CITY: {
		type: DataTypes.TEXT,
	},
    STATE: {
		type: DataTypes.TEXT,
	},
    COUNTRY: {
		type: DataTypes.TEXT,
	},
    LATITUDE: {
		type: DataTypes.FLOAT,
	},
    LONGITUDE: {
		type: DataTypes.FLOAT,
	},

})

module.exports = Airport