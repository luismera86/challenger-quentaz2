const { Router } = require('express')
const { getAirports, postAirport, putAirport, deleteAirport, addDataInDb } = require('../controllers/airport.controlle')

const airportRoutes = Router()

airportRoutes.get('/', getAirports)
airportRoutes.post('/', postAirport)
airportRoutes.post('/add', addDataInDb)
airportRoutes.put('/:id', checkAirportId, putAirport)
airportRoutes.delete('/:id', checkAirportId, deleteAirport)

module.exports = airportRoutes
