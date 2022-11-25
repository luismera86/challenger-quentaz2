const { Router } = require("express")

const flightsRoutes = Router()

flightsRoutes.get('/', getFlights)
flightsRoutes.post('/', postFlight)
flightsRoutes.post('/add', addDataInDb)
flightsRoutes.put('/:id', checkFlightId, putFlight)
flightsRoutes.delete('/:id', checkFlightId, deleteFlight)

module.exports = flightsRoutes