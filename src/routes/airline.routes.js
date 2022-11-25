const { Router } = require('express')
const {
	getAirlines,
	postAirline,
	addDataInDb,
	putAirline,
	deleteAirline,
} = require('../controllers/airline.controller')
const { checkAirlineId } = require('../middlewares/checkId')

const airlinesRoutes = Router()

airlinesRoutes.get('/', getAirlines)
airlinesRoutes.post('/', postAirline)
airlinesRoutes.post('/add', addDataInDb)
airlinesRoutes.put('/:id', checkAirlineId, putAirline)
airlinesRoutes.delete('/:id', checkAirlineId, deleteAirline)

module.exports = airlinesRoutes
