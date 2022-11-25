const { Router } = require("express")

const airportRoutes = Router()

airportRoutes.get('/', getAirports)
airportRoutes.post('/', postAirport)
airportRoutes.post('/add', addDataInDb)
airportRoutes.put('/:id', checkAirportId, putAirport)
airportRoutes.delete('/:id', checkAirportId, deleteAirport)

module.exports = airportRoutes